import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'

// --- Grid ---
const SEED_COLS = 11
const SEED_ROWS = 8
const STREAMLINE_COUNT = SEED_COLS * SEED_ROWS
const STREAMLINE_POINTS = 180

// --- Tunnel geometry (fixed world-space) ---
const TUNNEL_SEED_Z = -15
const TUNNEL_X_MIN = -10
const TUNNEL_X_MAX = 10
const TUNNEL_Y_MIN = -1
const TUNNEL_Y_MAX = 4
const TUNNEL_END_Z = 16

// --- Integration ---
const STEP_BASE = 0.15
const STEP_SCALE_MIN = 0.5
const STEP_SCALE_MAX = 1.5
const CONVECTIVE_PERIOD = 4.0

// --- Smoke palette: dark wisps → warm gray → bright white ---
const COLOR_STOPS = [
    new THREE.Color('#1a1a22'),
    new THREE.Color('#2e3038'),
    new THREE.Color('#4a4d58'),
    new THREE.Color('#7a7d88'),
    new THREE.Color('#a8abb8'),
    new THREE.Color('#c8c9d0'),
    new THREE.Color('#f5f0ff')
]

const TUNNEL_DIR = new THREE.Vector3(0, 0, 1)
const Y_AXIS = new THREE.Vector3(0, 1, 0)

// --- Debug ---
const DEBUG_ARROW_COLS = 5
const DEBUG_ARROW_ROWS = 3
const DEBUG_ARROW_DEPTH = 3
const DEBUG_ARROW_COUNT = DEBUG_ARROW_COLS * DEBUG_ARROW_ROWS * DEBUG_ARROW_DEPTH
const LOG_INTERVAL = 0.9

function clamp01(v) { return Math.max(0, Math.min(1, v)) }
function lerp(a, b, t) { return a + (b - a) * t }

function writeColor(colors, idx, speed01) {
    const u = clamp01(speed01)
    const scaled = u * (COLOR_STOPS.length - 1)
    const lo = Math.min(Math.floor(scaled), COLOR_STOPS.length - 2)
    const k = scaled - lo
    const c0 = COLOR_STOPS[lo]
    const c1 = COLOR_STOPS[lo + 1]
    const i = idx * 3
    colors[i] = c0.r + (c1.r - c0.r) * k
    colors[i + 1] = c0.g + (c1.g - c0.g) * k
    colors[i + 2] = c0.b + (c1.b - c0.b) * k
}

export function createFluidFlowOverlay({
    scene, visualFilters, debugParams, getBallGroup, getFlowState, ballRadius
}) {
    const flowGroup = new THREE.Group()
    flowGroup.visible = false
    scene.add(flowGroup)

    const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight)

    // --- Streamlines ---
    const streamlines = []
    for (let i = 0; i < STREAMLINE_COUNT; i++) {
        const positions = new Float32Array(STREAMLINE_POINTS * 3)
        const colors = new Float32Array(STREAMLINE_POINTS * 3)
        const geometry = new LineGeometry()
        geometry.setPositions(positions)
        geometry.setColors(colors)
        const material = new LineMaterial({
            transparent: true,
            opacity: 0.3,
            vertexColors: true,
            linewidth: 7,
            resolution,
            worldUnits: false,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        })
        const line = new Line2(geometry, material)
        line.computeLineDistances()
        line.frustumCulled = false
        flowGroup.add(line)
        streamlines.push({ line, positions, colors, phaseOffset: Math.random() * 3.0 })
    }

    // --- Debug arrows ---
    const debugGroup = new THREE.Group()
    debugGroup.visible = false
    scene.add(debugGroup)
    const debugArrows = []
    for (let i = 0; i < DEBUG_ARROW_COUNT; i++) {
        const arrow = new THREE.ArrowHelper(
            new THREE.Vector3(0, 0, 1), new THREE.Vector3(), 0.35, 0x22bfa9, 0.08, 0.05
        )
        arrow.visible = false
        debugGroup.add(arrow)
        debugArrows.push(arrow)
    }
    const deflectMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1, 20, 16),
        new THREE.MeshBasicMaterial({ color: '#3d8cff', wireframe: true, transparent: true, opacity: 0.22 })
    )
    deflectMesh.visible = false
    debugGroup.add(deflectMesh)
    const wakeMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.9, 1, 16, 1, true),
        new THREE.MeshBasicMaterial({ color: '#4be9c8', wireframe: true, transparent: true, opacity: 0.18 })
    )
    wakeMesh.visible = false
    debugGroup.add(wakeMesh)

    // --- Scratch vectors ---
    const tmpVel = new THREE.Vector3()
    const tmpVel2 = new THREE.Vector3()
    const tmpPos = new THREE.Vector3()
    const tmpMid = new THREE.Vector3()
    const tmpWind = new THREE.Vector3()
    const tmpWakeDir = new THREE.Vector3()
    const tmpAxisR = new THREE.Vector3()
    const tmpSpinBias = new THREE.Vector3()
    const tmpArrowPos = new THREE.Vector3()
    const spinOmega = new THREE.Vector3()
    const tmpRight = new THREE.Vector3()
    const tmpUp = new THREE.Vector3()
    const compScratch = {
        free: new THREE.Vector3(), wind: new THREE.Vector3(),
        deflect: new THREE.Vector3(), spin: new THREE.Vector3(),
        wake: new THREE.Vector3(), total: new THREE.Vector3()
    }
    const COLOR_TMP = new THREE.Color()
    let lastLogTime = -100

    // --- Wind resolver ---
    function resolveWind(out) {
        const dx = debugParams.windDirX, dy = debugParams.windDirY, dz = debugParams.windDirZ
        if (typeof dx === 'number' && typeof dy === 'number' && typeof dz === 'number') {
            out.set(dx, dy, dz)
            if (out.lengthSq() < 1e-6) out.set(1, 0, 0)
            out.normalize()
        } else {
            out.set(debugParams.windSpeed >= 0 ? 1 : -1, 0, 0)
        }
        const str = Math.min(2.15,
            (typeof debugParams.windStrength === 'number' ? Math.max(0, debugParams.windStrength) : 0) +
            Math.abs(debugParams.windSpeed) * 0.16)
        out.multiplyScalar(str)
    }

    // =============================================
    // EVALUATE FIELD — the core physics
    // =============================================
    function evaluateField(px, py, pz, p, outTotal, outComp) {
        const rx = px - p.bx, ry = py - p.by, rz = pz - p.bz
        const d = Math.sqrt(rx * rx + ry * ry + rz * rz + 1e-9)
        const nx = rx / d, ny = ry / d, nz = rz / d

        // A) Freestream — always +Z, always dominant
        const fx = TUNNEL_DIR.x * p.freestream
        const fy = TUNNEL_DIR.y * p.freestream
        const fz = TUNNEL_DIR.z * p.freestream
        const wx = tmpWind.x, wy = tmpWind.y, wz = tmpWind.z
        const U0x = fx + wx, U0y = fy + wy, U0z = fz + wz
        const U0mag = Math.sqrt(U0x * U0x + U0y * U0y + U0z * U0z)

        // B) Dipole — potential flow around sphere, R = ballRadius (physically exact)
        let dx2 = 0, dy2 = 0, dz2 = 0
        const R = ballRadius
        if (d > R * 0.5) {
            const R3d3 = (R * R * R) / (2 * d * d * d)
            const UdotN = U0x * nx + U0y * ny + U0z * nz
            dx2 = (3 * UdotN * nx - U0x) * R3d3
            dy2 = (3 * UdotN * ny - U0y) * R3d3
            dz2 = (3 * UdotN * nz - U0z) * R3d3
            // Clamp to 40% of freestream — prevents ANY reversal
            const dm = Math.sqrt(dx2 * dx2 + dy2 * dy2 + dz2 * dz2)
            const maxD = U0mag * 0.4
            if (dm > maxD && dm > 1e-6) {
                const s = maxD / dm; dx2 *= s; dy2 *= s; dz2 *= s
            }
        }

        // C) Spin (Magnus) — only when ball is moving
        let sx = 0, sy = 0, sz = 0
        if (p.velMag > 0.5) {
            const scx = spinOmega.y * rz - spinOmega.z * ry
            const scy = spinOmega.z * rx - spinOmega.x * rz
            const scz = spinOmega.x * ry - spinOmega.y * rx
            const sf = Math.exp(-((d - R) * (d - R)) / (R * R * 16)) * 0.06 * p.spinStr
            sx = scx * sf; sy = scy * sf; sz = scz * sf
        }

        // D) Wake — velocity deficit behind ball, always present
        let wkx = 0, wky = 0, wkz = 0
        const wdx = tmpWakeDir.x, wdy = tmpWakeDir.y, wdz = tmpWakeDir.z
        const proj = rx * wdx + ry * wdy + rz * wdz
        if (proj > 0) {
            const ax = rx - wdx * proj, ay = ry - wdy * proj, az = rz - wdz * proj
            const aR2 = ax * ax + ay * ay + az * az
            const wR = R * (2 + proj * 0.15)
            const core = Math.exp(-aR2 / (wR * wR + 1e-6)) * Math.exp(-proj / Math.max(1e-4, p.wakeLen))
            // Velocity deficit
            const drop = p.freestream * p.wakeStr * core
            wkx -= wdx * drop; wky -= wdy * drop; wkz -= wdz * drop
            // Radial spread
            tmpAxisR.set(ax, ay, az)
            if (tmpAxisR.lengthSq() > 1e-8) {
                tmpAxisR.normalize()
                const sp = 0.12 * core * (1 - Math.exp(-proj * 0.1))
                wkx += tmpAxisR.x * sp; wky += tmpAxisR.y * sp; wkz += tmpAxisR.z * sp
            }
            // Spin bias in wake
            if (p.velMag > 0.5) {
                tmpSpinBias.copy(spinOmega).cross(tmpWakeDir)
                if (tmpSpinBias.lengthSq() > 1e-8) {
                    tmpSpinBias.normalize()
                    const b = 0.2 * core * clamp01(p.velMag / 5)
                    wkx += tmpSpinBias.x * b; wky += tmpSpinBias.y * b; wkz += tmpSpinBias.z * b
                }
            }
        }
        // Clamp wake to 40% of freestream
        const wm = Math.sqrt(wkx * wkx + wky * wky + wkz * wkz)
        const maxW = p.freestream * 0.4
        if (wm > maxW && wm > 1e-6) {
            const s = maxW / wm; wkx *= s; wky *= s; wkz *= s
        }

        // E) Total
        let tx = U0x + dx2 + sx + wkx
        let ty = U0y + dy2 + sy + wky
        let tz = U0z + dz2 + sz + wkz

        // Hard sphere exclusion
        if (d < R * 1.05) {
            const push = (R * 1.08 - d) * 6
            tx += nx * push; ty += ny * push; tz += nz * push
        }

        // Speed clamp
        const speed = Math.sqrt(tx * tx + ty * ty + tz * tz)
        const cap = p.freestream * 2.0 + U0mag * 0.5 + 0.5
        if (speed > cap) { const s = cap / speed; tx *= s; ty *= s; tz *= s }

        outTotal.set(tx, ty, tz)
        if (outComp) {
            outComp.free.set(fx, fy, fz)
            outComp.wind.set(wx, wy, wz)
            outComp.deflect.set(dx2, dy2, dz2)
            outComp.spin.set(sx, sy, sz)
            outComp.wake.set(wkx, wky, wkz)
            outComp.total.copy(outTotal)
        }
        return outTotal.length()
    }

    // --- Debug arrow update ---
    function updateDebugArrows(p, colorRef) {
        for (let i = 0; i < DEBUG_ARROW_COUNT; i++) {
            const arrow = debugArrows[i]
            const ix = i % DEBUG_ARROW_COLS
            const iy = Math.floor(i / DEBUG_ARROW_COLS) % DEBUG_ARROW_ROWS
            const iz = Math.floor(i / (DEBUG_ARROW_COLS * DEBUG_ARROW_ROWS))
            const u = DEBUG_ARROW_COLS === 1 ? 0.5 : ix / (DEBUG_ARROW_COLS - 1)
            const v = DEBUG_ARROW_ROWS === 1 ? 0.5 : iy / (DEBUG_ARROW_ROWS - 1)
            const w = DEBUG_ARROW_DEPTH === 1 ? 0.5 : iz / (DEBUG_ARROW_DEPTH - 1)
            tmpArrowPos.set(
                p.bx + lerp(-2.4, 2.4, u) * ballRadius,
                p.by + lerp(-1.5, 1.5, v) * ballRadius,
                p.bz + lerp(-2.4, 8, w) * ballRadius
            )
            const speed = evaluateField(tmpArrowPos.x, tmpArrowPos.y, tmpArrowPos.z, p, tmpVel, null)
            if (speed < 1e-5) { arrow.visible = false; continue }
            arrow.visible = true
            arrow.position.copy(tmpArrowPos)
            tmpVel.normalize()
            arrow.setDirection(tmpVel)
            arrow.setLength(0.17 + Math.min(0.65, speed * 0.14), 0.08, 0.05)
            const cu = clamp01(speed / Math.max(1e-5, colorRef))
            COLOR_TMP.setHSL(0.64 - cu * 0.6, 0.9, 0.52)
            arrow.setColor(COLOR_TMP)
        }
    }

    function updateInfluenceVolumes(p) {
        deflectMesh.visible = true
        deflectMesh.position.set(p.bx, p.by, p.bz)
        deflectMesh.scale.setScalar(ballRadius + p.wakeLen * 0.3)
        wakeMesh.visible = true
        wakeMesh.scale.set(ballRadius * 1.8, p.wakeLen * 0.5, ballRadius * 1.8)
        wakeMesh.position.set(p.bx, p.by, p.bz)
        wakeMesh.position.addScaledVector(tmpWakeDir, p.wakeLen * 0.5)
        wakeMesh.quaternion.setFromUnitVectors(Y_AXIS, tmpWakeDir)
    }

    // =============================================
    // MAIN UPDATE
    // =============================================
    function updateFluidFlowOverlay(timeSeconds) {
        resolution.set(window.innerWidth, window.innerHeight)
        const fluidMode = visualFilters.getFluidOverlay()
        const tunnelMode = visualFilters.getWindTunnelOverlay()
        const active = fluidMode || tunnelMode
        flowGroup.visible = active

        const ball = getBallGroup()
        if (!active || !ball) { debugGroup.visible = false; return }

        const diag = !!debugParams.flowDiagnostics
        debugGroup.visible = diag
        if (!diag) {
            for (const a of debugArrows) a.visible = false
            deflectMesh.visible = false; wakeMesh.visible = false
        }

        const { activeVelocityVec, activeCurveForce, activeLateralAccel } = getFlowState()
        const bx = ball.position.x, by = ball.position.y, bz = ball.position.z
        const velMag = activeVelocityVec.length()

        // Coordinate frame from TUNNEL_DIR (stable, never ball-influenced)
        tmpRight.set(0, 1, 0).cross(TUNNEL_DIR)
        if (tmpRight.lengthSq() < 1e-6) tmpRight.set(1, 0, 0)
        tmpRight.normalize()
        tmpUp.copy(TUNNEL_DIR).cross(tmpRight).normalize()

        // Wake direction: tunnel at idle, blends toward -velocity when moving
        const wBlend = clamp01((velMag - 0.1) / 6) * 0.65
        const velOpp = tmpVel2.copy(activeVelocityVec)
        if (velOpp.lengthSq() < 1e-7) velOpp.copy(TUNNEL_DIR).negate()
        velOpp.normalize().negate()
        tmpWakeDir.copy(TUNNEL_DIR).lerp(velOpp, wBlend).normalize()

        resolveWind(tmpWind)
        const freestream = (tunnelMode ? 2.25 : 2.0) + velMag * (tunnelMode ? 0.03 : 0.08)
        const windCap = freestream * 0.36 + 0.14
        if (tmpWind.length() > windCap) tmpWind.setLength(windCap)

        // Spin omega
        if (velMag < 0.12 && tunnelMode) {
            spinOmega.set(0, 0, 0)
        } else {
            spinOmega.set(
                2.8 * debugParams.spinMultiplier,
                Math.sign(activeCurveForce || 1) * (2 + Math.min(6.2, Math.abs(activeCurveForce)) * 0.14)
                    + activeLateralAccel * 0.016,
                0.85 * debugParams.spinMultiplier
            )
        }

        const strength = debugParams.filterStrength
        const p = {
            bx, by, bz, freestream, velMag,
            spinStr: (tunnelMode ? 0.4 : 0.6) * (0.72 + (strength - 0.5) * 0.3),
            wakeStr: (tunnelMode ? 0.6 : 0.8) * (0.9 + (strength - 0.5) * 0.4),
            wakeLen: ballRadius * (12 + 2 * strength),
            timeSeconds
        }
        const speedRef = Math.max(0.8, freestream + tmpWind.length() * 0.35)
        const colorRef = Math.max(0.5, freestream * 1.6 + tmpWind.length() * 0.5)

        if (diag && debugParams.flowDebugArrows) updateDebugArrows(p, colorRef)
        else for (const a of debugArrows) a.visible = false
        if (diag && debugParams.flowDebugVolumes) updateInfluenceVolumes(p)
        else { deflectMesh.visible = false; wakeMesh.visible = false }

        const stepSize = tunnelMode ? 0.16 : 0.15
        const shouldLog = diag && (debugParams.flowDebugLogs || debugParams.flowDebugStreamlines)
            && timeSeconds - lastLogTime > LOG_INTERVAL

        // --- Integrate streamlines ---
        for (let i = 0; i < STREAMLINE_COUNT; i++) {
            const { line, positions, colors, phaseOffset } = streamlines[i]
            line.material.opacity = tunnelMode ? 0.28 : 0.22
            line.material.linewidth = tunnelMode ? 8 : 7
            line.material.resolution = resolution

            // Fixed grid seed
            const ix = i % SEED_COLS, iy = Math.floor(i / SEED_COLS)
            const u = SEED_COLS === 1 ? 0.5 : ix / (SEED_COLS - 1)
            const v = SEED_ROWS === 1 ? 0.5 : iy / (SEED_ROWS - 1)
            const seedX = lerp(TUNNEL_X_MIN, TUNNEL_X_MAX, u)
            const seedY = lerp(TUNNEL_Y_MIN, TUNNEL_Y_MAX, v)
            const phase = (timeSeconds * freestream * 0.28 + phaseOffset) % CONVECTIVE_PERIOD
            const seedZ = TUNNEL_SEED_Z + phase

            tmpPos.set(seedX, seedY, seedZ)
            let prevDx = 0, prevDy = 0, prevDz = 1 // initial direction = +Z

            for (let step = 0; step < STREAMLINE_POINTS; step++) {
                const speed = evaluateField(tmpPos.x, tmpPos.y, tmpPos.z, p, tmpVel, null)
                const idx3 = step * 3
                positions[idx3] = tmpPos.x
                positions[idx3 + 1] = tmpPos.y
                positions[idx3 + 2] = tmpPos.z
                writeColor(colors, step, speed / colorRef)

                // Early termination
                if (speed < 1e-4 ||
                    tmpPos.z > TUNNEL_END_Z || tmpPos.z < TUNNEL_SEED_Z - 2 ||
                    tmpPos.x < TUNNEL_X_MIN - 3 || tmpPos.x > TUNNEL_X_MAX + 3 ||
                    tmpPos.y < -2 || tmpPos.y > TUNNEL_Y_MAX + 3) {
                    for (let q = step + 1; q < STREAMLINE_POINTS; q++) {
                        positions[q * 3] = tmpPos.x
                        positions[q * 3 + 1] = tmpPos.y
                        positions[q * 3 + 2] = tmpPos.z
                        writeColor(colors, q, speed / colorRef)
                    }
                    break
                }

                // RK2 integration
                const inv1 = 1 / speed
                const sc1 = Math.max(STEP_SCALE_MIN, Math.min(STEP_SCALE_MAX, speed / speedRef))
                tmpVel.multiplyScalar(inv1)
                tmpMid.copy(tmpPos).addScaledVector(tmpVel, stepSize * 0.5 * sc1)

                const speedMid = evaluateField(tmpMid.x, tmpMid.y, tmpMid.z, p, tmpVel2, null)
                if (speedMid < 1e-5) break
                const inv2 = 1 / speedMid
                const sc2 = Math.max(STEP_SCALE_MIN, Math.min(STEP_SCALE_MAX, speedMid / speedRef))
                tmpVel2.multiplyScalar(inv2)

                // Direction smoothing
                const dot = tmpVel2.x * prevDx + tmpVel2.y * prevDy + tmpVel2.z * prevDz
                const damp = dot < 0 ? 0.7 : 0.3
                const ndx = tmpVel2.x * (1 - damp) + prevDx * damp
                const ndy = tmpVel2.y * (1 - damp) + prevDy * damp
                const ndz = tmpVel2.z * (1 - damp) + prevDz * damp
                const nInv = 1 / Math.sqrt(ndx * ndx + ndy * ndy + ndz * ndz + 1e-9)
                prevDx = ndx * nInv; prevDy = ndy * nInv; prevDz = ndz * nInv
                const adv = stepSize * sc2
                tmpPos.x += prevDx * adv
                tmpPos.y += prevDy * adv
                tmpPos.z += prevDz * adv
            }

            line.geometry.setPositions(positions)
            line.geometry.setColors(colors)
            line.computeLineDistances()
        }

        // --- Diagnostics ---
        if (shouldLog) {
            const samples = [
                { label: 'upstream', along: -2.8, side: 0, up: 0 },
                { label: 'nearSurface', along: -0.95, side: 0.55, up: 0.2 },
                { label: 'wake', along: 4.8, side: 0.25, up: 0.1 },
                { label: 'farField', along: 3.2, side: 5.4, up: 1.2 }
            ]
            if (debugParams.flowDebugLogs) {
                console.groupCollapsed(`[CFD] t=${timeSeconds.toFixed(2)}s`)
                for (const s of samples) {
                    tmpPos.set(bx, by, bz)
                    tmpPos.addScaledVector(tmpWakeDir, s.along * ballRadius)
                    tmpPos.addScaledVector(tmpRight, s.side * ballRadius)
                    tmpPos.addScaledVector(tmpUp, s.up * ballRadius)
                    evaluateField(tmpPos.x, tmpPos.y, tmpPos.z, p, tmpVel, compScratch)
                    console.log(`${s.label}: total=${compScratch.total.length().toFixed(3)} ` +
                        `free=${compScratch.free.length().toFixed(3)} ` +
                        `deflect=${compScratch.deflect.length().toFixed(3)} ` +
                        `wake=${compScratch.wake.length().toFixed(3)}`)
                }
                console.log(`ball=(${bx.toFixed(2)},${by.toFixed(2)},${bz.toFixed(2)}) vel=${velMag.toFixed(2)}`)
                console.groupEnd()
            }
            lastLogTime = timeSeconds
        }

    }

    return { updateFluidFlowOverlay }
}

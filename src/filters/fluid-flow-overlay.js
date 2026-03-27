import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'

const SEED_COLS = 15
const SEED_ROWS = 11
const STREAMLINE_COUNT = SEED_COLS * SEED_ROWS
const STREAMLINE_POINTS = 160
const STEP_SCALE_MIN = 0.42
const STEP_SCALE_MAX = 1.6

// Fixed tunnel geometry — world-space constants, never change
// Wide enough that lines fill the full screen edge-to-edge in perspective
const TUNNEL_SEED_Z = -16        // far upstream, behind camera (-17), ensures lines start off-screen
const TUNNEL_X_MIN = -12         // wide to fill screen edges in perspective
const TUNNEL_X_MAX = 12
const TUNNEL_Y_MIN = -1.5        // below ground for bottom-of-screen coverage
const TUNNEL_Y_MAX = 4.5         // above goal height with margin
const TUNNEL_FLOW_LENGTH = 22    // from seed plane well past the goal

const DEBUG_ARROW_COLS = 5
const DEBUG_ARROW_ROWS = 3
const DEBUG_ARROW_DEPTH = 3
const DEBUG_ARROW_COUNT = DEBUG_ARROW_COLS * DEBUG_ARROW_ROWS * DEBUG_ARROW_DEPTH

const LOG_INTERVAL_SECONDS = 0.9

// COMSOL-style thermal rainbow palette: deep blue → cyan → green → yellow → red
const COLOR_STOPS = [
    new THREE.Color('#0000cc'),  // 0.0  deep blue — stagnation / very slow
    new THREE.Color('#0066ff'),  // 0.15 blue
    new THREE.Color('#00cccc'),  // 0.3  cyan
    new THREE.Color('#00cc44'),  // 0.45 green
    new THREE.Color('#aacc00'),  // 0.6  yellow-green
    new THREE.Color('#ffcc00'),  // 0.75 yellow
    new THREE.Color('#ff6600'),  // 0.88 orange
    new THREE.Color('#cc0000')   // 1.0  deep red — peak speed
]
const COLOR_DEBUG = new THREE.Color()

const TUNNEL_DIR = new THREE.Vector3(0, 0, 1)
const Y_AXIS = new THREE.Vector3(0, 1, 0)

function clamp01(v) {
    return Math.max(0, Math.min(1, v))
}

function writeFlowColor(colors, pointIndex, normalizedSpeed) {
    const u = clamp01(normalizedSpeed)
    // Multi-stop COMSOL-style rainbow interpolation
    const scaled = u * (COLOR_STOPS.length - 1)
    const lo = Math.min(Math.floor(scaled), COLOR_STOPS.length - 2)
    const k = scaled - lo
    const c0 = COLOR_STOPS[lo]
    const c1 = COLOR_STOPS[lo + 1]

    const idx = pointIndex * 3
    colors[idx] = c0.r + (c1.r - c0.r) * k
    colors[idx + 1] = c0.g + (c1.g - c0.g) * k
    colors[idx + 2] = c0.b + (c1.b - c0.b) * k
}

function signedCenterBias(v, exponent) {
    const x = (v - 0.5) * 2
    return Math.sign(x) * Math.pow(Math.abs(x), exponent)
}

function lerp(min, max, t) {
    return min + (max - min) * t
}

function makeComponentScratch() {
    return {
        free: new THREE.Vector3(),
        wind: new THREE.Vector3(),
        deflect: new THREE.Vector3(),
        spin: new THREE.Vector3(),
        wake: new THREE.Vector3(),
        total: new THREE.Vector3()
    }
}

export function createFluidFlowOverlay({
    scene,
    visualFilters,
    debugParams,
    getBallGroup,
    getFlowState,
    ballRadius
}) {
    const flowGroup = new THREE.Group()
    flowGroup.visible = false
    scene.add(flowGroup)

    const streamlines = []
    const lineResolution = new THREE.Vector2(window.innerWidth, window.innerHeight)
    for (let i = 0; i < STREAMLINE_COUNT; i++) {
        const positions = new Float32Array(STREAMLINE_POINTS * 3)
        const colors = new Float32Array(STREAMLINE_POINTS * 3)

        const geometry = new LineGeometry()
        geometry.setPositions(positions)
        geometry.setColors(colors)

        const material = new LineMaterial({
            transparent: true,
            opacity: 0.85,
            vertexColors: true,
            linewidth: 2.5,       // actual pixel width — works on all platforms
            resolution: lineResolution,
            worldUnits: false
        })

        const line = new Line2(geometry, material)
        line.computeLineDistances()
        line.frustumCulled = false
        flowGroup.add(line)

        streamlines.push({
            line,
            positions,
            colors,
            phaseOffset: Math.random() * 2.2
        })
    }

    const debugGroup = new THREE.Group()
    debugGroup.visible = false
    scene.add(debugGroup)

    const debugArrows = []
    for (let i = 0; i < DEBUG_ARROW_COUNT; i++) {
        const arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(), 0.35, 0x22bfa9, 0.08, 0.05)
        arrow.visible = false
        debugGroup.add(arrow)
        debugArrows.push(arrow)
    }

    const deflectInfluenceMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1, 20, 16),
        new THREE.MeshBasicMaterial({ color: '#3d8cff', wireframe: true, transparent: true, opacity: 0.22 })
    )
    deflectInfluenceMesh.visible = false
    debugGroup.add(deflectInfluenceMesh)

    const wakeInfluenceMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.9, 1, 16, 1, true),
        new THREE.MeshBasicMaterial({ color: '#4be9c8', wireframe: true, transparent: true, opacity: 0.18 })
    )
    wakeInfluenceMesh.visible = false
    debugGroup.add(wakeInfluenceMesh)

    const tmpFlowDir = new THREE.Vector3()
    const tmpVelocityOpp = new THREE.Vector3()
    const tmpRight = new THREE.Vector3()
    const tmpUp = new THREE.Vector3()
    const tmpAdvectDir = new THREE.Vector3()
    const tmpWakeDir = new THREE.Vector3()

    const tmpPos = new THREE.Vector3()
    const tmpMid = new THREE.Vector3()
    const tmpVel = new THREE.Vector3()
    const tmpVel2 = new THREE.Vector3()
    const tmpWind = new THREE.Vector3()
    const tmpAxisRadial = new THREE.Vector3()
    const tmpWakeSpinBias = new THREE.Vector3()
    const tmpArrowPos = new THREE.Vector3()
    const spinOmega = new THREE.Vector3()

    const compScratchDebug = makeComponentScratch()

    let lastLogTime = -100

    function resolveWind(out) {
        const dirX = debugParams.windDirX
        const dirY = debugParams.windDirY
        const dirZ = debugParams.windDirZ
        const hasDir = typeof dirX === 'number' && typeof dirY === 'number' && typeof dirZ === 'number'

        if (hasDir) {
            out.set(dirX, dirY, dirZ)
            if (out.lengthSq() < 1e-6) out.set(1, 0, 0)
            out.normalize()
        } else {
            out.set(debugParams.windSpeed >= 0 ? 1 : -1, 0, 0)
        }

        const userStrength = typeof debugParams.windStrength === 'number'
            ? Math.max(0, debugParams.windStrength)
            : 0
        const fallbackStrength = Math.abs(debugParams.windSpeed) * 0.16
        const strength = Math.min(2.15, userStrength + fallbackStrength)

        out.multiplyScalar(strength)
    }

    function evaluateField(px, py, pz, params, outTotal, outComponents) {
        const {
            bx,
            by,
            bz,
            freestream,
            deflectStrength,
            spinStrength,
            wakeStrength,
            influenceRadius,
            wakeLength
        } = params

        const rx = px - bx
        const ry = py - by
        const rz = pz - bz

        const d2 = rx * rx + ry * ry + rz * rz
        const d = Math.sqrt(d2 + 1e-9)
        const invD = 1 / d
        const nx = rx * invD
        const ny = ry * invD
        const nz = rz * invD

        // --- Freestream: stable tunnel direction ---
        const freeX = TUNNEL_DIR.x * freestream
        const freeY = TUNNEL_DIR.y * freestream
        const freeZ = TUNNEL_DIR.z * freestream
        const windX = tmpWind.x
        const windY = tmpWind.y
        const windZ = tmpWind.z

        // Combined undisturbed flow
        const U0x = freeX + windX
        const U0y = freeY + windY
        const U0z = freeZ + windZ

        // --- Potential flow: dipole around sphere (ALWAYS active) ---
        // This is the analytical solution for inviscid flow past a sphere.
        // The ball always deflects the freestream — like smoke hitting a ball.
        // motionFactor only enhances the dynamic effects (spin, wake boost).
        let deflectX = 0
        let deflectY = 0
        let deflectZ = 0

        const motionFactor = params.motionFactor
        // Effective radius: base always present, motion adds modest boost
        const R = ballRadius * (deflectStrength + motionFactor * 0.7)
        if (d > ballRadius * 0.3) {
            const R3 = R * R * R
            const d3 = d * d * d
            const dipoleScale = R3 / (2 * d3)

            const U0dotN = U0x * nx + U0y * ny + U0z * nz

            deflectX = (3 * U0dotN * nx - U0x) * dipoleScale
            deflectY = (3 * U0dotN * ny - U0y) * dipoleScale
            deflectZ = (3 * U0dotN * nz - U0z) * dipoleScale

            // Clamp dipole perturbation to max 80% of undisturbed flow magnitude
            // This prevents near-field explosion while preserving natural far-field falloff
            const U0mag = Math.sqrt(U0x * U0x + U0y * U0y + U0z * U0z)
            const deflectMag = Math.sqrt(deflectX * deflectX + deflectY * deflectY + deflectZ * deflectZ)
            const maxDeflect = U0mag * 0.8
            if (deflectMag > maxDeflect && deflectMag > 1e-6) {
                const scale = maxDeflect / deflectMag
                deflectX *= scale
                deflectY *= scale
                deflectZ *= scale
            }
        }

        // --- Magnus effect: spin-induced lateral force (enhanced by motion) ---
        let spinX = 0
        let spinY = 0
        let spinZ = 0
        if (motionFactor > 0.01) {
            const spinCrossX = spinOmega.y * rz - spinOmega.z * ry
            const spinCrossY = spinOmega.z * rx - spinOmega.x * rz
            const spinCrossZ = spinOmega.x * ry - spinOmega.y * rx
            const spinFalloff = Math.exp(-Math.pow((d - ballRadius) / Math.max(1e-4, ballRadius * 6.0), 2))
            spinX = spinCrossX * spinStrength * spinFalloff * 0.06 * motionFactor
            spinY = spinCrossY * spinStrength * spinFalloff * 0.06 * motionFactor
            spinZ = spinCrossZ * spinStrength * spinFalloff * 0.06 * motionFactor
        }

        // --- Wake: velocity deficit behind the ball (ALWAYS present, boosted by motion) ---
        // Even at idle, the freestream creates a wake behind the sphere.
        let wakeX = 0
        let wakeY = 0
        let wakeZ = 0
        // Wake direction: use tunnel dir at idle, advect dir when moving
        const wdX = motionFactor > 0.1 ? tmpAdvectDir.x : TUNNEL_DIR.x
        const wdY = motionFactor > 0.1 ? tmpAdvectDir.y : TUNNEL_DIR.y
        const wdZ = motionFactor > 0.1 ? tmpAdvectDir.z : TUNNEL_DIR.z
        const proj = rx * wdX + ry * wdY + rz * wdZ
        if (proj > 0) {
            const axisX = rx - wdX * proj
            const axisY = ry - wdY * proj
            const axisZ = rz - wdZ * proj
            const axisR2 = axisX * axisX + axisY * axisY + axisZ * axisZ
            const wakeRadius = ballRadius * (2.0 + proj * 0.15)
            // Wake strength: base always present, motion boosts it
            const wakeMultiplier = 0.6 + motionFactor * 0.4
            const wakeCore = Math.exp(-axisR2 / (wakeRadius * wakeRadius + 1e-6)) * Math.exp(-proj / Math.max(1e-4, wakeLength))
            const wakeSheath = Math.exp(-Math.pow((Math.sqrt(axisR2 + 1e-9) - wakeRadius * 0.9) / Math.max(1e-4, ballRadius * 1.4), 2))

            // Velocity deficit in wake — persistent even at rest
            const drop = freestream * wakeStrength * wakeCore * 1.5 * wakeMultiplier
            wakeX -= wdX * drop
            wakeY -= wdY * drop
            wakeZ -= wdZ * drop

            // Radial spreading in wake
            tmpAxisRadial.set(axisX, axisY, axisZ)
            if (tmpAxisRadial.lengthSq() > 1e-8) {
                tmpAxisRadial.normalize()
                const spread = (0.18 * wakeCore + 0.06 * wakeSheath) * (1 - Math.exp(-proj * 0.1)) * wakeMultiplier
                wakeX += tmpAxisRadial.x * spread
                wakeY += tmpAxisRadial.y * spread
                wakeZ += tmpAxisRadial.z * spread
            }

            // Spin bias in wake (only when moving)
            if (motionFactor > 0.01) {
                tmpWakeSpinBias.copy(spinOmega).cross(tmpAdvectDir)
                if (tmpWakeSpinBias.lengthSq() > 1e-8) {
                    tmpWakeSpinBias.normalize()
                    const bias = 0.3 * wakeCore * motionFactor
                    wakeX += tmpWakeSpinBias.x * bias
                    wakeY += tmpWakeSpinBias.y * bias
                    wakeZ += tmpWakeSpinBias.z * bias
                }
            }

            // Subtle wake unsteadiness
            const wakeSway = Math.sin(params.timeSeconds * 2.0 + proj * 0.82) * wakeCore * 0.02
            wakeX += tmpRight.x * wakeSway
            wakeY += tmpRight.y * wakeSway
            wakeZ += tmpRight.z * wakeSway
        }

        // Clamp wake perturbation to max 60% of freestream
        const wakeMag = Math.sqrt(wakeX * wakeX + wakeY * wakeY + wakeZ * wakeZ)
        const maxWake = freestream * 0.6
        if (wakeMag > maxWake && wakeMag > 1e-6) {
            const wScale = maxWake / wakeMag
            wakeX *= wScale
            wakeY *= wScale
            wakeZ *= wScale
        }

        // --- Total velocity: freestream + perturbations ---
        // The freestream ALWAYS dominates. Perturbations are clamped additions.
        let totalX = U0x + deflectX + spinX + wakeX
        let totalY = U0y + deflectY + spinY + wakeY
        let totalZ = U0z + deflectZ + spinZ + wakeZ

        // Hard-sphere exclusion: gently push streamlines out of the ball
        if (d < ballRadius * 1.05) {
            const push = (ballRadius * 1.08 - d) * 8
            totalX += nx * push
            totalY += ny * push
            totalZ += nz * push
        }

        // Speed clamp
        const speed = Math.sqrt(totalX * totalX + totalY * totalY + totalZ * totalZ)
        const maxSpeed = freestream * 2.5 + tmpWind.length() * 0.72 + 1.0
        if (speed > maxSpeed) {
            const inv = maxSpeed / speed
            totalX *= inv
            totalY *= inv
            totalZ *= inv
        }

        outTotal.set(totalX, totalY, totalZ)

        if (outComponents) {
            outComponents.free.set(freeX, freeY, freeZ)
            outComponents.wind.set(windX, windY, windZ)
            outComponents.deflect.set(deflectX, deflectY, deflectZ)
            outComponents.spin.set(spinX, spinY, spinZ)
            outComponents.wake.set(wakeX, wakeY, wakeZ)
            outComponents.total.copy(outTotal)
        }

        return outTotal.length()
    }

    function updateDebugArrows(params, speedForColor) {
        for (let i = 0; i < DEBUG_ARROW_COUNT; i++) {
            const arrow = debugArrows[i]
            const ix = i % DEBUG_ARROW_COLS
            const iy = Math.floor(i / DEBUG_ARROW_COLS) % DEBUG_ARROW_ROWS
            const iz = Math.floor(i / (DEBUG_ARROW_COLS * DEBUG_ARROW_ROWS))

            const u = DEBUG_ARROW_COLS === 1 ? 0.5 : ix / (DEBUG_ARROW_COLS - 1)
            const v = DEBUG_ARROW_ROWS === 1 ? 0.5 : iy / (DEBUG_ARROW_ROWS - 1)
            const w = DEBUG_ARROW_DEPTH === 1 ? 0.5 : iz / (DEBUG_ARROW_DEPTH - 1)

            const along = lerp(-2.4 * ballRadius, 8.0 * ballRadius, w)
            const side = lerp(-2.7 * ballRadius, 2.7 * ballRadius, u)
            const up = lerp(-1.5 * ballRadius, 1.5 * ballRadius, v)

            tmpArrowPos.set(params.bx, params.by, params.bz)
            tmpArrowPos.addScaledVector(tmpAdvectDir, along)
            tmpArrowPos.addScaledVector(tmpRight, side)
            tmpArrowPos.addScaledVector(tmpUp, up)

            const speed = evaluateField(tmpArrowPos.x, tmpArrowPos.y, tmpArrowPos.z, params, tmpVel, null)
            if (speed < 1e-5) {
                arrow.visible = false
                continue
            }

            arrow.visible = true
            arrow.position.copy(tmpArrowPos)
            tmpVel.normalize()
            arrow.setDirection(tmpVel)

            const length = 0.17 + Math.min(0.65, speed * 0.14)
            arrow.setLength(length, 0.08, 0.05)

            const colorU = clamp01(speed / Math.max(1e-5, speedForColor))
            COLOR_DEBUG.setHSL(0.64 - colorU * 0.6, 0.9, 0.52)
            arrow.setColor(COLOR_DEBUG)
        }
    }

    function updateInfluenceVolumes(params) {
        const influenceRadius = ballRadius + params.influenceRadius * 1.22
        deflectInfluenceMesh.visible = true
        deflectInfluenceMesh.position.set(params.bx, params.by, params.bz)
        deflectInfluenceMesh.scale.setScalar(influenceRadius)

        const wakeLength = params.wakeLength
        const wakeRadius = ballRadius * 1.8
        wakeInfluenceMesh.visible = true
        wakeInfluenceMesh.scale.set(wakeRadius, wakeLength * 0.5, wakeRadius)
        wakeInfluenceMesh.position.set(params.bx, params.by, params.bz)
        wakeInfluenceMesh.position.addScaledVector(tmpAdvectDir, wakeLength * 0.5)
        wakeInfluenceMesh.quaternion.setFromUnitVectors(Y_AXIS, tmpAdvectDir)
    }

    function updateFluidFlowOverlay(timeSeconds) {
        // Keep Line2 resolution in sync with viewport
        lineResolution.set(window.innerWidth, window.innerHeight)

        const fluidMode = visualFilters.getFluidOverlay()
        const tunnelMode = visualFilters.getWindTunnelOverlay()
        const overlayEnabled = fluidMode || tunnelMode
        flowGroup.visible = overlayEnabled

        const ball = getBallGroup()
        if (!overlayEnabled || !ball) {
            debugGroup.visible = false
            return
        }

        const diagnosticsEnabled = !!debugParams.flowDiagnostics
        debugGroup.visible = diagnosticsEnabled
        if (!diagnosticsEnabled) {
            for (const arrow of debugArrows) arrow.visible = false
            deflectInfluenceMesh.visible = false
            wakeInfluenceMesh.visible = false
        }

        const { activeVelocityVec, activeCurveForce, activeLateralAccel } = getFlowState()
        const strength = debugParams.filterStrength

        const bx = ball.position.x
        const by = ball.position.y
        const bz = ball.position.z

        const velocityMag = activeVelocityVec.length()
        tmpVelocityOpp.copy(activeVelocityVec)
        if (tmpVelocityOpp.lengthSq() < 1e-7) tmpVelocityOpp.copy(TUNNEL_DIR).multiplyScalar(-1)
        tmpVelocityOpp.normalize().multiplyScalar(-1)

        // Global flow direction: stays mostly aligned with tunnel direction
        // Only a very slight tilt from ball velocity to keep upstream stable
        const globalTilt = clamp01((velocityMag - 0.08) / 8) * 0.08
        tmpFlowDir.copy(TUNNEL_DIR).lerp(tmpVelocityOpp, globalTilt).normalize()

        // Seed coordinate frame built from pure TUNNEL_DIR — perfectly stable,
        // never tilted by ball velocity. This keeps the seed grid orientation locked.
        tmpRight.set(0, 1, 0).cross(TUNNEL_DIR)
        if (tmpRight.lengthSq() < 1e-6) tmpRight.set(1, 0, 0)
        tmpRight.normalize()
        tmpUp.copy(TUNNEL_DIR).cross(tmpRight).normalize()

        // Wake direction: follows ball velocity for wake/disturbance calculations
        const wakeBlend = clamp01((velocityMag - 0.08) / 6) * 0.72
        tmpWakeDir.copy(TUNNEL_DIR).lerp(tmpVelocityOpp, wakeBlend).normalize()

        resolveWind(tmpWind)

        const freestream = (tunnelMode ? 2.25 : 2.0) + velocityMag * (tunnelMode ? 0.03 : 0.085)
        const windCap = freestream * 0.36 + 0.14
        if (tmpWind.length() > windCap) tmpWind.setLength(windCap)

        // Advect direction for wake: driven by ball velocity (via tmpWakeDir), not global flow
        tmpAdvectDir.copy(tmpWakeDir)
        if (tmpWind.lengthSq() > 1e-8) tmpAdvectDir.addScaledVector(tmpWind, 0.2 / Math.max(0.35, freestream))
        if (tmpAdvectDir.lengthSq() < 1e-8) tmpAdvectDir.copy(tmpFlowDir)
        tmpAdvectDir.normalize()

        // Step size tuned so 160 points × ~0.15 effective step ≈ 24 units of line length
        // This spans the full tunnel from seed plane (Z=-16) well past the goal
        const stepSize = tunnelMode ? 0.14 : 0.13

        // Convective phase: slow cycling that shifts seed Z slightly, creating a flowing feel
        // Period covers a few units so lines appear to drift forward continuously
        const convectivePeriod = 3.5

        // deflectStrength = effective radius multiplier for dipole (R = ballRadius * deflectStrength)
        // 1.8 means R³/d³ = 2.9× at surface — visible deflection without overwhelming the freestream
        const deflectStrength = (tunnelMode ? 1.6 : 1.8) * (0.92 + (strength - 0.5) * 0.3)
        const spinStrength = (tunnelMode ? 0.5 : 1.0) * (0.72 + (strength - 0.5) * 0.34)
        const wakeStrength = (tunnelMode ? 1.4 : 2.0) * (0.94 + (strength - 0.5) * 0.4)
        const influenceRadius = ballRadius * 8.0
        const wakeLength = ballRadius * (18 + 3.0 * strength)

        if (velocityMag < 0.12 && tunnelMode) {
            spinOmega.set(0, 0, 0)
        } else {
            spinOmega.set(
                2.8 * debugParams.spinMultiplier,
                Math.sign(activeCurveForce || 1) * (2.0 + Math.min(6.2, Math.abs(activeCurveForce)) * 0.14) + activeLateralAccel * 0.016,
                0.85 * debugParams.spinMultiplier
            )
        }

        // motionFactor: 0 when ball is idle, ramps to 1 when ball is moving fast
        // This keeps the field as clean parallel lines at rest
        const motionFactor = clamp01(velocityMag / 3.0)

        const params = {
            bx,
            by,
            bz,
            freestream,
            deflectStrength,
            spinStrength,
            wakeStrength,
            influenceRadius,
            wakeLength,
            timeSeconds,
            motionFactor
        }
        const speedReference = Math.max(0.8, freestream + tmpWind.length() * 0.35)

        // Color scale: freestream speed maps to ~0.55 on the palette (green/yellow),
        // so acceleration around the ball shows orange/red, and wake shows blue
        const speedForColor = Math.max(0.5, freestream * 1.8 + tmpWind.length() * 0.72)

        if (diagnosticsEnabled && debugParams.flowDebugArrows) {
            updateDebugArrows(params, speedForColor)
        } else {
            for (const arrow of debugArrows) arrow.visible = false
        }

        if (diagnosticsEnabled && debugParams.flowDebugVolumes) {
            updateInfluenceVolumes(params)
        } else {
            deflectInfluenceMesh.visible = false
            wakeInfluenceMesh.visible = false
        }

        const shouldLogNow = diagnosticsEnabled && (debugParams.flowDebugLogs || debugParams.flowDebugStreamlines)
            && timeSeconds - lastLogTime > LOG_INTERVAL_SECONDS

        const sampleRows = []
        const aggregate = {
            free: { sum: 0, max: 0 },
            wind: { sum: 0, max: 0 },
            deflect: { sum: 0, max: 0 },
            spin: { sum: 0, max: 0 },
            wake: { sum: 0, max: 0 },
            total: { sum: 0, max: 0 },
            count: 0
        }

        const streamlineDebug = []
        const monitorA = 0
        const monitorB = Math.max(0, Math.min(STREAMLINE_COUNT - 1, Math.floor(STREAMLINE_COUNT * 0.5)))
        const monitorC = Math.max(0, STREAMLINE_COUNT - 1)

        for (let i = 0; i < STREAMLINE_COUNT; i++) {
            const { line, positions, colors, phaseOffset } = streamlines[i]
            // Uniform opacity and width — COMSOL-style clean, visible streamlines
            line.material.opacity = tunnelMode ? 0.88 : 0.82
            line.material.linewidth = tunnelMode ? 3.0 : 2.5
            line.material.resolution = lineResolution

            // FIXED world-space seed positions — perfectly uniform rectangular grid
            // Every line is at a fixed (X, Y) in the tunnel cross-section
            const ix = i % SEED_COLS
            const iy = Math.floor(i / SEED_COLS)
            const u = SEED_COLS === 1 ? 0.5 : ix / (SEED_COLS - 1)
            const v = SEED_ROWS === 1 ? 0.5 : iy / (SEED_ROWS - 1)

            // Evenly spaced X and Y — uniform rectangular grid, no bias or randomness
            const seedX = lerp(TUNNEL_X_MIN, TUNNEL_X_MAX, u)
            const seedY = lerp(TUNNEL_Y_MIN, TUNNEL_Y_MAX, v)

            // Z: fixed upstream plane with slow phase cycling for flow animation
            const phase = (timeSeconds * freestream * 0.32 + phaseOffset) % convectivePeriod
            const seedZ = TUNNEL_SEED_Z + phase

            tmpPos.set(seedX, seedY, seedZ)

            // Initial streamline direction: pure tunnel direction
            let prevDx = TUNNEL_DIR.x
            let prevDy = TUNNEL_DIR.y
            let prevDz = TUNNEL_DIR.z
            let maxTurnDeg = 0
            let sharpFlipCount = 0
            const sampledSteps = []

            // All lines get full length — uniform, no short outer lines
            for (let step = 0; step < STREAMLINE_POINTS; step++) {

                const speedMag = evaluateField(tmpPos.x, tmpPos.y, tmpPos.z, params, tmpVel, null)

                const idx = step * 3
                positions[idx] = tmpPos.x
                positions[idx + 1] = tmpPos.y
                positions[idx + 2] = tmpPos.z
                writeFlowColor(colors, step, speedMag / speedForColor)

                if (speedMag < 1e-4) {
                    for (let q = step + 1; q < STREAMLINE_POINTS; q++) {
                        const qIdx = q * 3
                        positions[qIdx] = tmpPos.x
                        positions[qIdx + 1] = tmpPos.y
                        positions[qIdx + 2] = tmpPos.z
                        writeFlowColor(colors, q, 0)
                    }
                    break
                }

                // World-space tunnel escape boundaries — completely fixed, no ball coupling
                if (tmpPos.z > TUNNEL_SEED_Z + TUNNEL_FLOW_LENGTH + 2 || tmpPos.z < TUNNEL_SEED_Z - 2 ||
                    tmpPos.x < TUNNEL_X_MIN - 3 || tmpPos.x > TUNNEL_X_MAX + 3 ||
                    tmpPos.y < -0.3 || tmpPos.y > TUNNEL_Y_MAX + 3) {
                    for (let q = step + 1; q < STREAMLINE_POINTS; q++) {
                        const qIdx = q * 3
                        positions[qIdx] = tmpPos.x
                        positions[qIdx + 1] = tmpPos.y
                        positions[qIdx + 2] = tmpPos.z
                        writeFlowColor(colors, q, 0.05)
                    }
                    break
                }

                const invSpeed1 = 1 / speedMag
                const stepScale1 = Math.max(STEP_SCALE_MIN, Math.min(STEP_SCALE_MAX, speedMag / speedReference))
                tmpVel.multiplyScalar(invSpeed1)
                tmpMid.copy(tmpPos).addScaledVector(tmpVel, stepSize * 0.5 * stepScale1)

                const speedMid = evaluateField(tmpMid.x, tmpMid.y, tmpMid.z, params, tmpVel2, null)
                if (speedMid < 1e-5) break

                const invSpeed2 = 1 / speedMid
                const stepScale2 = Math.max(STEP_SCALE_MIN, Math.min(STEP_SCALE_MAX, speedMid / speedReference))
                tmpVel2.multiplyScalar(invSpeed2)

                const dotPrev = tmpVel2.x * prevDx + tmpVel2.y * prevDy + tmpVel2.z * prevDz
                const clampedDot = Math.max(-1, Math.min(1, dotPrev))
                const turnDeg = Math.acos(clampedDot) * 57.2958
                if (turnDeg > maxTurnDeg) maxTurnDeg = turnDeg
                if (dotPrev < -0.08) sharpFlipCount++

                const flipDamped = dotPrev < 0 ? 0.74 : 0.34
                const dx = tmpVel2.x * (1 - flipDamped) + prevDx * flipDamped
                const dy = tmpVel2.y * (1 - flipDamped) + prevDy * flipDamped
                const dz = tmpVel2.z * (1 - flipDamped) + prevDz * flipDamped
                const dInv = 1 / Math.sqrt(dx * dx + dy * dy + dz * dz + 1e-9)

                prevDx = dx * dInv
                prevDy = dy * dInv
                prevDz = dz * dInv
                const stepAdvance = stepSize * stepScale2
                tmpPos.x += prevDx * stepAdvance
                tmpPos.y += prevDy * stepAdvance
                tmpPos.z += prevDz * stepAdvance

                if (shouldLogNow && debugParams.flowDebugStreamlines && (i === monitorA || i === monitorB || i === monitorC) && step % 8 === 0) {
                    sampledSteps.push({
                        step,
                        x: Number(tmpPos.x.toFixed(3)),
                        y: Number(tmpPos.y.toFixed(3)),
                        z: Number(tmpPos.z.toFixed(3)),
                        turnDeg: Number(turnDeg.toFixed(2))
                    })
                }
            }

            if (shouldLogNow && debugParams.flowDebugStreamlines && (i === monitorA || i === monitorB || i === monitorC)) {
                streamlineDebug.push({
                    lineIndex: i,
                    maxTurnDeg: Number(maxTurnDeg.toFixed(2)),
                    sharpFlips: sharpFlipCount,
                    samples: sampledSteps
                })
            }

            // Update Line2 geometry with new positions and colors
            line.geometry.setPositions(positions)
            line.geometry.setColors(colors)
            line.computeLineDistances()
        }

        if (shouldLogNow) {
            const samplePoints = [
                { label: 'upstream', along: -2.8, side: 0, up: 0 },
                { label: 'upstreamHigh', along: -3.5, side: 0, up: 2.0 },
                { label: 'nearSurface', along: -0.95, side: 0.55, up: 0.2 },
                { label: 'offCenter', along: -0.2, side: 1.35, up: 0.35 },
                { label: 'wake', along: 4.8, side: 0.25, up: 0.1 },
                { label: 'farWake', along: 8.0, side: 0, up: 0 },
                { label: 'farField', along: 3.2, side: 5.4, up: 1.2 }
            ]

            for (const sample of samplePoints) {
                tmpPos.set(bx, by, bz)
                tmpPos.addScaledVector(tmpAdvectDir, sample.along * ballRadius)
                tmpPos.addScaledVector(tmpRight, sample.side * ballRadius)
                tmpPos.addScaledVector(tmpUp, sample.up * ballRadius)

                evaluateField(tmpPos.x, tmpPos.y, tmpPos.z, params, tmpVel, compScratchDebug)

                const freeMag = compScratchDebug.free.length()
                const windMag = compScratchDebug.wind.length()
                const deflectMag = compScratchDebug.deflect.length()
                const spinMag = compScratchDebug.spin.length()
                const wakeMag = compScratchDebug.wake.length()
                const totalMag = compScratchDebug.total.length()

                sampleRows.push({
                    point: sample.label,
                    V_free: Number(freeMag.toFixed(3)),
                    V_wind: Number(windMag.toFixed(3)),
                    V_deflect: Number(deflectMag.toFixed(3)),
                    V_spin: Number(spinMag.toFixed(3)),
                    V_wake: Number(wakeMag.toFixed(3)),
                    V_total: Number(totalMag.toFixed(3)),
                    freeVec: `(${compScratchDebug.free.x.toFixed(2)}, ${compScratchDebug.free.y.toFixed(2)}, ${compScratchDebug.free.z.toFixed(2)})`,
                    windVec: `(${compScratchDebug.wind.x.toFixed(2)}, ${compScratchDebug.wind.y.toFixed(2)}, ${compScratchDebug.wind.z.toFixed(2)})`,
                    deflectVec: `(${compScratchDebug.deflect.x.toFixed(2)}, ${compScratchDebug.deflect.y.toFixed(2)}, ${compScratchDebug.deflect.z.toFixed(2)})`,
                    spinVec: `(${compScratchDebug.spin.x.toFixed(2)}, ${compScratchDebug.spin.y.toFixed(2)}, ${compScratchDebug.spin.z.toFixed(2)})`,
                    wakeVec: `(${compScratchDebug.wake.x.toFixed(2)}, ${compScratchDebug.wake.y.toFixed(2)}, ${compScratchDebug.wake.z.toFixed(2)})`,
                    totalVec: `(${compScratchDebug.total.x.toFixed(2)}, ${compScratchDebug.total.y.toFixed(2)}, ${compScratchDebug.total.z.toFixed(2)})`
                })

                const items = [
                    ['free', freeMag],
                    ['wind', windMag],
                    ['deflect', deflectMag],
                    ['spin', spinMag],
                    ['wake', wakeMag],
                    ['total', totalMag]
                ]
                for (const [name, mag] of items) {
                    aggregate[name].sum += mag
                    if (mag > aggregate[name].max) aggregate[name].max = mag
                }
                aggregate.count++
            }

            const avg = {}
            for (const k of ['free', 'wind', 'deflect', 'spin', 'wake', 'total']) {
                avg[k] = aggregate.count ? aggregate[k].sum / aggregate.count : 0
            }

            const ratios = {
                deflectToFree: Number((avg.deflect / Math.max(1e-5, avg.free)).toFixed(3)),
                wakeToFree: Number((avg.wake / Math.max(1e-5, avg.free)).toFixed(3)),
                windToFree: Number((avg.wind / Math.max(1e-5, avg.free)).toFixed(3)),
                spinToFree: Number((avg.spin / Math.max(1e-5, avg.free)).toFixed(3))
            }

            if (debugParams.flowDebugLogs) {
                console.groupCollapsed(`[CFD] field diagnostics t=${timeSeconds.toFixed(2)}s`)
                console.table(sampleRows)
                console.table([
                    {
                        avgFree: Number(avg.free.toFixed(3)),
                        avgWind: Number(avg.wind.toFixed(3)),
                        avgDeflect: Number(avg.deflect.toFixed(3)),
                        avgSpin: Number(avg.spin.toFixed(3)),
                        avgWake: Number(avg.wake.toFixed(3)),
                        avgTotal: Number(avg.total.toFixed(3)),
                        maxFree: Number(aggregate.free.max.toFixed(3)),
                        maxWind: Number(aggregate.wind.max.toFixed(3)),
                        maxDeflect: Number(aggregate.deflect.max.toFixed(3)),
                        maxSpin: Number(aggregate.spin.max.toFixed(3)),
                        maxWake: Number(aggregate.wake.max.toFixed(3)),
                        maxTotal: Number(aggregate.total.max.toFixed(3))
                    }
                ])
                console.table([ratios])
                console.table([
                    {
                        seedMode: `uniform ${SEED_COLS}x${SEED_ROWS}=${STREAMLINE_COUNT}`,
                        tunnelSeedZ: TUNNEL_SEED_Z,
                        tunnelX: `[${TUNNEL_X_MIN}, ${TUNNEL_X_MAX}]`,
                        tunnelY: `[${TUNNEL_Y_MIN}, ${TUNNEL_Y_MAX}]`,
                        influenceRadius: Number(influenceRadius.toFixed(3)),
                        wakeLength: Number(wakeLength.toFixed(3))
                    }
                ])
                console.groupEnd()
            }

            if (debugParams.flowDebugLogs) {
                const wakeDot = tmpWakeDir.dot(TUNNEL_DIR)
                console.log(
                    `[CFD] tunnel: seedZ=${TUNNEL_SEED_Z}, X=[${TUNNEL_X_MIN},${TUNNEL_X_MAX}], Y=[${TUNNEL_Y_MIN},${TUNNEL_Y_MAX}], ` +
                    `wakeDir·tunnel=${wakeDot.toFixed(4)}, ball=(${bx.toFixed(2)}, ${by.toFixed(2)}, ${bz.toFixed(2)})`
                )
            }

            if (debugParams.flowDebugStreamlines && streamlineDebug.length) {
                console.groupCollapsed(`[CFD] streamline diagnostics t=${timeSeconds.toFixed(2)}s`)
                for (const row of streamlineDebug) {
                    console.log(`line ${row.lineIndex}: maxTurnDeg=${row.maxTurnDeg}, sharpFlips=${row.sharpFlips}`)
                    console.table(row.samples)
                }
                console.groupEnd()
            }

            lastLogTime = timeSeconds
        }
    }

    return { updateFluidFlowOverlay }
}

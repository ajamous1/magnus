import * as THREE from 'three'

function setCfdColor(colors, i, t, cfdCold, cfdMid, cfdWarm) {
    const u = Math.max(0, Math.min(1, t))
    let r
    let g
    let b
    if (u < 0.5) {
        const k = u * 2
        r = cfdCold.r + (cfdMid.r - cfdCold.r) * k
        g = cfdCold.g + (cfdMid.g - cfdCold.g) * k
        b = cfdCold.b + (cfdMid.b - cfdCold.b) * k
    } else {
        const k = (u - 0.5) * 2
        r = cfdMid.r + (cfdWarm.r - cfdMid.r) * k
        g = cfdMid.g + (cfdWarm.g - cfdMid.g) * k
        b = cfdMid.b + (cfdWarm.b - cfdMid.b) * k
    }
    const idx = i * 3
    colors[idx] = r
    colors[idx + 1] = g
    colors[idx + 2] = b
}

/**
 * Stylized flow lines around the ball when fluid / wind-tunnel view filters are active.
 *
 * @param {object} opts
 * @param {import('three').Scene} opts.scene
 * @param {ReturnType<import('../filters/visual-filters.js').createVisualFilterController>} opts.visualFilters
 * @param {object} opts.debugParams
 * @param {() => import('three').Object3D | null} opts.getBallGroup
 * @param {() => { activeVelocityVec: import('three').Vector3, activeCurveForce: number, activeLateralAccel: number }} opts.getFlowState
 * @param {number} opts.ballRadius
 */
export function createFluidFlowOverlay({
    scene,
    visualFilters,
    debugParams,
    getBallGroup,
    getFlowState,
    ballRadius
}) {
    const fluidFlowGroup = new THREE.Group()
    fluidFlowGroup.visible = false
    scene.add(fluidFlowGroup)

    const fluidLines = []
    const flowSeedCols = 8
    const flowSeedRows = 7
    const fluidLineCount = flowSeedCols * flowSeedRows
    const fluidLinePoints = 56
    const cfdCold = new THREE.Color('#1556cc')
    const cfdMid = new THREE.Color('#2bb7cc')
    const cfdWarm = new THREE.Color('#f4e75f')
    const flowTmpA = new THREE.Vector3()
    const flowTmpB = new THREE.Vector3()
    const flowTmpC = new THREE.Vector3()
    const flowTmpD = new THREE.Vector3()
    const flowOut = new THREE.Vector3()

    for (let i = 0; i < fluidLineCount; i++) {
        const positions = new Float32Array(fluidLinePoints * 3)
        const colors = new Float32Array(fluidLinePoints * 3)
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        const mat = new THREE.LineBasicMaterial({ color: '#4bd5d9', transparent: true, opacity: 0.55, vertexColors: true })
        const line = new THREE.Line(geo, mat)
        fluidLines.push({ line, positions, colors })
        fluidFlowGroup.add(line)
    }

    function updateFluidFlowOverlay(time) {
        const fluidOn = visualFilters.getFluidOverlay()
        const tunnelOn = visualFilters.getWindTunnelOverlay()
        const activeOverlay = fluidOn || tunnelOn
        fluidFlowGroup.visible = activeOverlay
        const ballGroup = getBallGroup()
        if (!fluidFlowGroup.visible || !ballGroup) return

        const { activeVelocityVec, activeCurveForce, activeLateralAccel } = getFlowState()
        const strength = debugParams.filterStrength
        const bx = ballGroup.position.x
        const by = ballGroup.position.y
        const bz = ballGroup.position.z
        const speed = Math.max(0.6, activeVelocityVec.length() * 0.08)

        const flowDir = activeVelocityVec.clone()
        if (flowDir.lengthSq() < 1e-5) flowDir.set(0, 0, 1)
        flowDir.normalize().multiplyScalar(-1)

        const right = new THREE.Vector3(0, 1, 0).cross(flowDir)
        if (right.lengthSq() < 1e-5) right.set(1, 0, 0)
        right.normalize()
        const up = flowDir.clone().cross(right).normalize()

        const seedOffset = tunnelOn ? 5.2 : 4.5
        const seedWidth = tunnelOn ? 10.5 : 8.5
        const seedHeight = tunnelOn ? 4.6 : 5.4
        const stepSize = tunnelOn ? 0.34 : 0.28

        const wakeStrength = (tunnelOn ? 1.45 : 1.1) * (0.85 + (strength - 0.5) * 0.6)
        const spinStrength = (tunnelOn ? 0.5 : 1.1) * (0.7 + (strength - 0.5) * 0.7)
        const deflectStrength = (tunnelOn ? 1.15 : 1.35) * (0.8 + (strength - 0.5) * 0.55)

        const spinOmega = tunnelOn
            ? flowOut.set(0, 0, 0)
            : flowOut.set(
                4.6 * debugParams.spinMultiplier,
                Math.sign(activeCurveForce || 1) * (3.0 + Math.min(6, Math.abs(activeCurveForce)) * 0.12),
                1.4 * debugParams.spinMultiplier
            )

        const seedCenterX = bx - flowDir.x * seedOffset
        const seedCenterY = by - flowDir.y * seedOffset
        const seedCenterZ = bz - flowDir.z * seedOffset

        function sampleField(pos, outVec) {
            const rx = pos.x - bx
            const ry = pos.y - by
            const rz = pos.z - bz
            const d2 = rx * rx + ry * ry + rz * rz
            const d = Math.sqrt(d2 + 1e-9)
            const invD = 1 / d
            const nx = rx * invD
            const ny = ry * invD
            const nz = rz * invD

            let vx = flowDir.x * speed
            let vy = flowDir.y * speed
            let vz = flowDir.z * speed

            const falloff = Math.exp(-Math.max(0, d - ballRadius) * 2.3)
            const inward = Math.min(0, vx * nx + vy * ny + vz * nz)
            const wrap = Math.max(0, -inward) * deflectStrength * falloff
            vx += nx * wrap
            vy += ny * wrap
            vz += nz * wrap

            const tx = ny * flowDir.z - nz * flowDir.y
            const ty = nz * flowDir.x - nx * flowDir.z
            const tz = nx * flowDir.y - ny * flowDir.x
            vx += tx * 0.42 * deflectStrength * falloff
            vy += ty * 0.42 * deflectStrength * falloff
            vz += tz * 0.42 * deflectStrength * falloff

            const sx = spinOmega.y * rz - spinOmega.z * ry
            const sy = spinOmega.z * rx - spinOmega.x * rz
            const sz = spinOmega.x * ry - spinOmega.y * rx
            const sFall = Math.exp(-Math.max(0, d - ballRadius) * 2.8)
            vx += sx * spinStrength * sFall * 0.07
            vy += sy * spinStrength * sFall * 0.07
            vz += sz * spinStrength * sFall * 0.07

            const proj = rx * flowDir.x + ry * flowDir.y + rz * flowDir.z
            const downstream = Math.max(proj, 0)
            const ax = rx - flowDir.x * proj
            const ay = ry - flowDir.y * proj
            const az = rz - flowDir.z * proj
            const radial2 = ax * ax + ay * ay + az * az
            const wakeMask = Math.exp(-radial2 * 0.58) * Math.exp(-downstream * 0.18)
            vx -= flowDir.x * wakeStrength * wakeMask * speed * 0.9
            vy -= flowDir.y * wakeStrength * wakeMask * speed * 0.9
            vz -= flowDir.z * wakeStrength * wakeMask * speed * 0.9

            if (tunnelOn) {
                const tunnelBias = Math.sin(time * 2.1 + proj * 0.6) * wakeMask * 0.045
                vx += right.x * tunnelBias
                vy += right.y * tunnelBias
                vz += right.z * tunnelBias
            }

            if (d < ballRadius * 0.96) {
                const push = (ballRadius * 0.98 - d) * 6.0
                vx += nx * push
                vy += ny * push
                vz += nz * push
            }

            outVec.set(vx, vy, vz)
            return Math.sqrt(vx * vx + vy * vy + vz * vz)
        }

        const maxSpeedForColor = speed * 2.15

        for (let i = 0; i < fluidLineCount; i++) {
            const ix = i % flowSeedCols
            const iy = Math.floor(i / flowSeedCols)
            const u = flowSeedCols === 1 ? 0.5 : ix / (flowSeedCols - 1)
            const v = flowSeedRows === 1 ? 0.5 : iy / (flowSeedRows - 1)

            const sx = (u - 0.5) * seedWidth
            const sy = (v - 0.5) * seedHeight
            const seed = flowTmpA.set(seedCenterX, seedCenterY, seedCenterZ)
                .addScaledVector(right, sx)
                .addScaledVector(up, sy)

            const { line, positions, colors } = fluidLines[i]
            const lineMat = line.material
            if (tunnelOn) {
                lineMat.opacity = 0.78 + (strength - 1.0) * 0.18
            } else {
                lineMat.opacity = 0.57 + (strength - 1.0) * 0.2
            }

            const posVec = flowTmpB.copy(seed)
            for (let step = 0; step < fluidLinePoints; step++) {
                const speedMag = sampleField(posVec, flowOut)
                const cIdx = step * 3
                positions[cIdx] = posVec.x
                positions[cIdx + 1] = posVec.y
                positions[cIdx + 2] = posVec.z
                setCfdColor(colors, step, speedMag / maxSpeedForColor, cfdCold, cfdMid, cfdWarm)

                if (speedMag < 1e-4) {
                    for (let q = step + 1; q < fluidLinePoints; q++) {
                        const fIdx = q * 3
                        positions[fIdx] = posVec.x
                        positions[fIdx + 1] = posVec.y
                        positions[fIdx + 2] = posVec.z
                        setCfdColor(colors, q, 0, cfdCold, cfdMid, cfdWarm)
                    }
                    break
                }

                flowTmpC.copy(flowOut).normalize()
                const mid = flowTmpD.copy(posVec).addScaledVector(flowTmpC, stepSize * 0.5)
                sampleField(mid, flowOut)
                flowTmpC.copy(flowOut).normalize()
                posVec.addScaledVector(flowTmpC, stepSize)
            }
            line.geometry.attributes.position.needsUpdate = true
            line.geometry.attributes.color.needsUpdate = true
            line.geometry.computeBoundingSphere()
        }
    }

    return { updateFluidFlowOverlay }
}

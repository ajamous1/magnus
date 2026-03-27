import * as THREE from 'three'

const SEED_COLS = 7
const SEED_ROWS = 6
const STREAMLINE_COUNT = SEED_COLS * SEED_ROWS
const STREAMLINE_POINTS = 92
const CORE_SEED_RATIO = 0.76
const OUTER_LENGTH_RATIO = 0.58
const STEP_SCALE_MIN = 0.42
const STEP_SCALE_MAX = 1.6

const DEBUG_ARROW_COLS = 5
const DEBUG_ARROW_ROWS = 3
const DEBUG_ARROW_DEPTH = 3
const DEBUG_ARROW_COUNT = DEBUG_ARROW_COLS * DEBUG_ARROW_ROWS * DEBUG_ARROW_DEPTH

const LOG_INTERVAL_SECONDS = 0.9

const COLOR_LOW = new THREE.Color('#1954c9')
const COLOR_MID = new THREE.Color('#22bfa9')
const COLOR_HIGH = new THREE.Color('#ecd65d')
const COLOR_PEAK = new THREE.Color('#ef5f2e')
const COLOR_DEBUG = new THREE.Color()

const TUNNEL_DIR = new THREE.Vector3(0, 0, 1)
const Y_AXIS = new THREE.Vector3(0, 1, 0)

function clamp01(v) {
    return Math.max(0, Math.min(1, v))
}

function writeFlowColor(colors, pointIndex, normalizedSpeed) {
    const u = clamp01(normalizedSpeed)
    let r
    let g
    let b

    if (u < 0.36) {
        const k = u / 0.36
        r = COLOR_LOW.r + (COLOR_MID.r - COLOR_LOW.r) * k
        g = COLOR_LOW.g + (COLOR_MID.g - COLOR_LOW.g) * k
        b = COLOR_LOW.b + (COLOR_MID.b - COLOR_LOW.b) * k
    } else if (u < 0.72) {
        const k = (u - 0.36) / 0.36
        r = COLOR_MID.r + (COLOR_HIGH.r - COLOR_MID.r) * k
        g = COLOR_MID.g + (COLOR_HIGH.g - COLOR_MID.g) * k
        b = COLOR_MID.b + (COLOR_HIGH.b - COLOR_MID.b) * k
    } else {
        const k = (u - 0.72) / 0.28
        r = COLOR_HIGH.r + (COLOR_PEAK.r - COLOR_HIGH.r) * k
        g = COLOR_HIGH.g + (COLOR_PEAK.g - COLOR_HIGH.g) * k
        b = COLOR_HIGH.b + (COLOR_PEAK.b - COLOR_HIGH.b) * k
    }

    const idx = pointIndex * 3
    colors[idx] = r
    colors[idx + 1] = g
    colors[idx + 2] = b
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
    for (let i = 0; i < STREAMLINE_COUNT; i++) {
        const positions = new Float32Array(STREAMLINE_POINTS * 3)
        const colors = new Float32Array(STREAMLINE_POINTS * 3)
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const material = new THREE.LineBasicMaterial({
            transparent: true,
            opacity: 0.74,
            vertexColors: true
        })

        const line = new THREE.Line(geometry, material)
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

        const freeX = tmpFlowDir.x * freestream
        const freeY = tmpFlowDir.y * freestream
        const freeZ = tmpFlowDir.z * freestream
        const windX = tmpWind.x
        const windY = tmpWind.y
        const windZ = tmpWind.z

        let deflectX = 0
        let deflectY = 0
        let deflectZ = 0

        const baseX = freeX + windX
        const baseY = freeY + windY
        const baseZ = freeZ + windZ
        const baseMag = Math.sqrt(baseX * baseX + baseY * baseY + baseZ * baseZ)

        const influenceSigma = Math.max(ballRadius * 2, influenceRadius * 0.5)
        const influence = Math.exp(-Math.pow((d - ballRadius) / Math.max(1e-6, influenceSigma), 2))

        const normalComp = baseX * nx + baseY * ny + baseZ * nz
        let tangentX = baseX - nx * normalComp
        let tangentY = baseY - ny * normalComp
        let tangentZ = baseZ - nz * normalComp
        const tangentLen = Math.sqrt(tangentX * tangentX + tangentY * tangentY + tangentZ * tangentZ)
        if (tangentLen > 1e-6) {
            const invT = 1 / tangentLen
            tangentX *= invT
            tangentY *= invT
            tangentZ *= invT
        } else {
            tangentX = tmpRight.x
            tangentY = tmpRight.y
            tangentZ = tmpRight.z
        }

        const deflectMag = (0.85 * baseMag + 0.22) * deflectStrength * influence
        deflectX += tangentX * deflectMag
        deflectY += tangentY * deflectMag
        deflectZ += tangentZ * deflectMag

        let spinX = 0
        let spinY = 0
        let spinZ = 0
        const spinCrossX = spinOmega.y * rz - spinOmega.z * ry
        const spinCrossY = spinOmega.z * rx - spinOmega.x * rz
        const spinCrossZ = spinOmega.x * ry - spinOmega.y * rx
        const spinFalloff = Math.exp(-Math.pow((d - ballRadius) / Math.max(1e-4, ballRadius * 2.8), 2))
        spinX = spinCrossX * spinStrength * spinFalloff * 0.05
        spinY = spinCrossY * spinStrength * spinFalloff * 0.05
        spinZ = spinCrossZ * spinStrength * spinFalloff * 0.05

        let wakeX = 0
        let wakeY = 0
        let wakeZ = 0
        const proj = rx * tmpAdvectDir.x + ry * tmpAdvectDir.y + rz * tmpAdvectDir.z
        if (proj > 0) {
            const axisX = rx - tmpAdvectDir.x * proj
            const axisY = ry - tmpAdvectDir.y * proj
            const axisZ = rz - tmpAdvectDir.z * proj
            const axisR2 = axisX * axisX + axisY * axisY + axisZ * axisZ
            const wakeRadius = ballRadius * (1.6 + proj * 0.2)
            const wakeCore = Math.exp(-axisR2 / (wakeRadius * wakeRadius + 1e-6)) * Math.exp(-proj / Math.max(1e-4, wakeLength))
            const wakeSheath = Math.exp(-Math.pow((Math.sqrt(axisR2 + 1e-9) - wakeRadius * 0.9) / Math.max(1e-4, ballRadius * 1.05), 2))

            const drop = freestream * wakeStrength * wakeCore * 1.14
            wakeX -= tmpAdvectDir.x * drop
            wakeY -= tmpAdvectDir.y * drop
            wakeZ -= tmpAdvectDir.z * drop

            tmpAxisRadial.set(axisX, axisY, axisZ)
            if (tmpAxisRadial.lengthSq() > 1e-8) {
                tmpAxisRadial.normalize()
                const spread = (0.1 * wakeCore + 0.035 * wakeSheath) * (1 - Math.exp(-proj * 0.085))
                wakeX += tmpAxisRadial.x * spread
                wakeY += tmpAxisRadial.y * spread
                wakeZ += tmpAxisRadial.z * spread
            }

            tmpWakeSpinBias.copy(spinOmega).cross(tmpAdvectDir)
            if (tmpWakeSpinBias.lengthSq() > 1e-8) {
                tmpWakeSpinBias.normalize()
                const bias = 0.18 * wakeCore
                wakeX += tmpWakeSpinBias.x * bias
                wakeY += tmpWakeSpinBias.y * bias
                wakeZ += tmpWakeSpinBias.z * bias
            }

            const wakeSway = Math.sin(params.timeSeconds * 2.0 + proj * 0.82) * wakeCore * 0.015
            wakeX += tmpRight.x * wakeSway
            wakeY += tmpRight.y * wakeSway
            wakeZ += tmpRight.z * wakeSway
        }

        let totalX = freeX + windX + deflectX + spinX + wakeX
        let totalY = freeY + windY + deflectY + spinY + wakeY
        let totalZ = freeZ + windZ + deflectZ + spinZ + wakeZ

        if (d < ballRadius * 0.995) {
            const push = (ballRadius * 1.02 - d) * 7.8
            totalX += nx * push
            totalY += ny * push
            totalZ += nz * push
        }

        const speed = Math.sqrt(totalX * totalX + totalY * totalY + totalZ * totalZ)
        const maxSpeed = freestream * 1.5 + tmpWind.length() * 0.72 + 0.82
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

        const motionBlend = clamp01((velocityMag - 0.08) / 8)
        tmpFlowDir.copy(TUNNEL_DIR).lerp(tmpVelocityOpp, motionBlend).normalize()

        tmpRight.set(0, 1, 0).cross(tmpFlowDir)
        if (tmpRight.lengthSq() < 1e-6) tmpRight.set(1, 0, 0)
        tmpRight.normalize()
        tmpUp.copy(tmpFlowDir).cross(tmpRight).normalize()

        resolveWind(tmpWind)

        const freestream = (tunnelMode ? 2.25 : 2.0) + velocityMag * (tunnelMode ? 0.03 : 0.085)
        const windCap = freestream * 0.36 + 0.14
        if (tmpWind.length() > windCap) tmpWind.setLength(windCap)

        tmpAdvectDir.copy(tmpFlowDir)
        if (tmpWind.lengthSq() > 1e-8) tmpAdvectDir.addScaledVector(tmpWind, 0.2 / Math.max(0.35, freestream))
        if (tmpAdvectDir.lengthSq() < 1e-8) tmpAdvectDir.copy(tmpFlowDir)
        tmpAdvectDir.normalize()

        const stepSize = tunnelMode ? 0.1 : 0.09
        const seedOffset = tunnelMode ? 4.2 : 3.8
        const seedWidth = tunnelMode ? 3.7 : 3.3
        const seedHeight = tunnelMode ? 2.4 : 2.7
        const convectivePeriod = stepSize * 7

        const deflectStrength = 1.82 * (0.92 + (strength - 0.5) * 0.52)
        const spinStrength = (tunnelMode ? 0.36 : 0.86) * (0.72 + (strength - 0.5) * 0.34)
        const wakeStrength = (tunnelMode ? 1.26 : 1.62) * (0.94 + (strength - 0.5) * 0.52)
        const influenceRadius = ballRadius * 5.0
        const wakeLength = ballRadius * (11.2 + 2.4 * strength)

        if (velocityMag < 0.12 && tunnelMode) {
            spinOmega.set(0, 0, 0)
        } else {
            spinOmega.set(
                2.8 * debugParams.spinMultiplier,
                Math.sign(activeCurveForce || 1) * (2.0 + Math.min(6.2, Math.abs(activeCurveForce)) * 0.14) + activeLateralAccel * 0.016,
                0.85 * debugParams.spinMultiplier
            )
        }

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
            timeSeconds
        }
        const speedReference = Math.max(0.8, freestream + tmpWind.length() * 0.35)

        const speedForColor = Math.max(0.5, freestream * 1.22 + tmpWind.length() * 0.72)

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

        const coreCount = Math.floor(STREAMLINE_COUNT * CORE_SEED_RATIO)
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
        const monitorB = Math.max(0, Math.min(STREAMLINE_COUNT - 1, Math.floor(coreCount * 0.5)))
        const monitorC = Math.max(0, coreCount - 1)

        for (let i = 0; i < STREAMLINE_COUNT; i++) {
            const { line, positions, colors, phaseOffset } = streamlines[i]
            const isCoreSeed = i < coreCount
            line.material.opacity = isCoreSeed ? (tunnelMode ? 0.84 : 0.76) : (tunnelMode ? 0.44 : 0.4)

            const phase = (timeSeconds * freestream * 0.44 + phaseOffset) % convectivePeriod
            const seedCenterX = bx - tmpFlowDir.x * seedOffset + tmpFlowDir.x * phase
            const seedCenterY = by - tmpFlowDir.y * seedOffset + tmpFlowDir.y * phase
            const seedCenterZ = bz - tmpFlowDir.z * seedOffset + tmpFlowDir.z * phase

            const ix = i % SEED_COLS
            const iy = Math.floor(i / SEED_COLS)
            const u = SEED_COLS === 1 ? 0.5 : ix / (SEED_COLS - 1)
            const v = SEED_ROWS === 1 ? 0.5 : iy / (SEED_ROWS - 1)

            tmpPos.set(seedCenterX, seedCenterY, seedCenterZ)
            if (isCoreSeed) {
                const uc = signedCenterBias(u, 2.35)
                const vc = signedCenterBias(v, 2.25)
                const lanePhase = Math.sin(timeSeconds * 0.9 + i * 0.45 + phaseOffset * 1.5) * 0.03
                tmpPos.addScaledVector(tmpRight, (uc + lanePhase) * seedWidth * 0.5)
                tmpPos.addScaledVector(tmpUp, (vc - lanePhase * 0.45) * seedHeight * 0.5)
            } else {
                const uc = signedCenterBias(u, 1.08)
                const vc = signedCenterBias(v, 1.08)
                tmpPos.addScaledVector(tmpRight, uc * seedWidth * 0.86)
                tmpPos.addScaledVector(tmpUp, vc * seedHeight * 0.86)
            }

            let prevDx = tmpFlowDir.x
            let prevDy = tmpFlowDir.y
            let prevDz = tmpFlowDir.z
            let maxTurnDeg = 0
            let sharpFlipCount = 0
            const sampledSteps = []

            const lineMaxSteps = isCoreSeed ? STREAMLINE_POINTS : Math.floor(STREAMLINE_POINTS * OUTER_LENGTH_RATIO)
            for (let step = 0; step < STREAMLINE_POINTS; step++) {
                if (step >= lineMaxSteps) {
                    for (let q = step; q < STREAMLINE_POINTS; q++) {
                        const qIdx = q * 3
                        positions[qIdx] = tmpPos.x
                        positions[qIdx + 1] = tmpPos.y
                        positions[qIdx + 2] = tmpPos.z
                        writeFlowColor(colors, q, 0.06)
                    }
                    break
                }

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

                const dxBall = tmpPos.x - bx
                const dyBall = tmpPos.y - by
                const dzBall = tmpPos.z - bz
                const dist2 = dxBall * dxBall + dyBall * dyBall + dzBall * dzBall
                const axisProj = dxBall * tmpAdvectDir.x + dyBall * tmpAdvectDir.y + dzBall * tmpAdvectDir.z
                const offAxis2 = Math.max(0, dist2 - axisProj * axisProj)
                if (axisProj > 22 || axisProj < -11 || offAxis2 > 58 || tmpPos.y < -0.45 || tmpPos.y > 7.5) {
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

            line.geometry.attributes.position.needsUpdate = true
            line.geometry.attributes.color.needsUpdate = true
        }

        if (shouldLogNow) {
            const samplePoints = [
                { label: 'upstream', along: -2.8, side: 0, up: 0 },
                { label: 'nearSurface', along: -0.95, side: 0.55, up: 0.2 },
                { label: 'offCenter', along: -0.2, side: 1.35, up: 0.35 },
                { label: 'wake', along: 4.8, side: 0.25, up: 0.1 },
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
                        seedMode: `core=${coreCount}, outer=${STREAMLINE_COUNT - coreCount}`,
                        seedWidth: Number(seedWidth.toFixed(2)),
                        seedHeight: Number(seedHeight.toFixed(2)),
                        seedOffset: Number(seedOffset.toFixed(2)),
                        influenceRadius: Number(influenceRadius.toFixed(3)),
                        wakeLength: Number(wakeLength.toFixed(3))
                    }
                ])
                console.groupEnd()
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

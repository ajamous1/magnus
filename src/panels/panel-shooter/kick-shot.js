import * as THREE from 'three'
import gsap from 'gsap'
import { estimateCd, estimateCl } from './flight-estimates.js'

/**
 * Kick animation + GSAP timeline; owns reset-after-kick timing.
 *
 * @param {object} opts — see destructuring below; `BALL_DESIGNS` from ball config module.
 */
export function createKickShot({
    BALL_DESIGNS,
    ballConfig,
    debugParams,
    ballStartPosition,
    ballRadius,
    goalWidth,
    goalHeight,
    sizes,
    getBallGroup,
    getGoalGroup,
    flightAnalyticsState,
    recordPhysicsSample,
    updateForceVectors,
    clearTrail,
    renderBirdseye,
    kickPhysics
}) {
    let activeTimeline = null
    let activeDelayedCall = null
    const GOAL_Z = 0
    const NET_DEPTH = 2.5

    function kick(power, aimX, curve) {
        // Kill any in-progress kick
        cancelKick()

        kickPhysics.isKicking = true
        clearTrail()

        const design = BALL_DESIGNS[ballConfig.design]
        const effectiveRandomness = Math.max(0, debugParams.randomness + design.randomnessBonus)

        const targetX = aimX
        const randomX = (Math.random() - 0.5) * 0.3 * effectiveRandomness
        const randomPower = 1 + (Math.random() - 0.5) * 0.1 * effectiveRandomness

        const finalX = targetX + randomX
        const finalPower = Math.min(power * randomPower, 2.5)
        const duration = (0.6 + (1 - Math.min(finalPower, 1)) * 0.4) / (design.speedRetention || 1)

        const arcPeak = debugParams.arcHeight * finalPower * finalPower * 3.5 / debugParams.gravity * (design.arcModifier || 1)
        const targetZ = 1 + finalPower * 2

        const curveStrength = curve * goalWidth * 1.84 * debugParams.curveIntensity * design.drag * (design.curveMultiplier || 1)
        kickPhysics.activeCurveForce = curveStrength
        const wind = debugParams.windSpeed
        const steps = 60
        const pathX = []
        const pathY = []
        const pathZ = []

        let hitNetStep = -1
        let hitType = null
        const halfW = goalWidth / 2
        const postR = 0.06

        let physStartStep = -1

        const knuckle = design.knuckleIntensity || 0
        const isLowSpin = Math.abs(curve) < 0.3
        const knuckleActive = knuckle > 0 && isLowSpin

        let swerveX = 0, swerveY = 0
        let swerveBreakT = 0
        let decelerationT = 0
        if (knuckleActive) {
            swerveX = (Math.random() - 0.5) * 2 * knuckle * finalPower * goalWidth * 0.4
            swerveY = (Math.random() - 0.5) * knuckle * finalPower * 0.8
            swerveBreakT = 0.3 + Math.random() * 0.35
            decelerationT = 0.4 + Math.random() * 0.3
        }

        for (let i = 0; i <= steps; i++) {
            const t = i / steps
            const easedT = 1 - Math.pow(1 - t, 2)

            let zSpeed = 1
            if (knuckleActive && t > decelerationT) {
                const decelProgress = (t - decelerationT) / (1 - decelerationT)
                zSpeed = 1 - 0.3 * knuckle * decelProgress
            }
            const z = ballStartPosition.z + (targetZ - ballStartPosition.z) * easedT * zSpeed

            let x = (1 - t) * (1 - t) * 0 + 2 * (1 - t) * t * curveStrength + t * t * finalX
                + wind * t * t * 0.5
            let y = ballRadius + arcPeak * 4 * t * (1 - t) * debugParams.gravity

            if (knuckleActive && t > swerveBreakT) {
                const swerveProgress = Math.min(1, (t - swerveBreakT) / 0.4)
                const smooth = swerveProgress * swerveProgress * (3 - 2 * swerveProgress)
                x += swerveX * smooth
                y += swerveY * smooth
            }

            pathX.push(x)
            pathY.push(Math.max(ballRadius, y))
            pathZ.push(z)

            if (z >= GOAL_Z - 1.5 && physStartStep < 0) {
                physStartStep = i
            }
        }

        if (physStartStep < 0) physStartStep = steps

        const physDt = 1 / 60
        const grav = 9.81 * debugParams.gravity
        const flightDt = duration / steps

        function checkGoalCollision(x, y, z, vx, vy, vz) {
            if (z < GOAL_Z - ballRadius || z > GOAL_Z + NET_DEPTH + ballRadius) return null

            if (z >= GOAL_Z - ballRadius && z <= GOAL_Z + ballRadius) {
                const inX = Math.abs(x) < halfW - ballRadius
                const inY = y > ballRadius && y < goalHeight - ballRadius
                if (inX && inY) return 'goal'

                const hitPost = (Math.abs(Math.abs(x) - halfW) < postR + ballRadius) && y < goalHeight + ballRadius && y > 0
                const hitBar = Math.abs(y - goalHeight) < postR + ballRadius && Math.abs(x) < halfW + postR
                if (hitPost || hitBar) return 'frame'
            }

            if (z > GOAL_Z && z < GOAL_Z + NET_DEPTH) {
                if (Math.abs(x) < halfW && y < goalHeight && y > 0) {
                    const hitSide = Math.abs(Math.abs(x) - halfW) < ballRadius
                    const hitTop = Math.abs(y - goalHeight) < ballRadius
                    const hitBack = Math.abs(z - (GOAL_Z + NET_DEPTH)) < ballRadius
                    if (hitSide) return 'side-net'
                    if (hitTop) return 'top-net'
                    if (hitBack) return 'back-net'
                }
            }

            return null
        }

        function applyCollisionResponse(type, vel) {
            if (type === 'goal') {
                vel.x *= 0.1; vel.y *= 0.05; vel.z *= 0.25
            } else if (type === 'frame') {
                vel.z *= -0.35; vel.y *= 0.4; vel.x *= 0.5
            } else if (type === 'side-net') {
                vel.x *= -0.2; vel.z *= 0.3; vel.y *= 0.5
            } else if (type === 'top-net') {
                vel.y *= -0.2; vel.x *= 0.5; vel.z *= 0.3
            } else if (type === 'back-net') {
                vel.z *= -0.15; vel.x *= 0.3; vel.y *= 0.3
            }
        }

        function simulatePhysics(startIdx, vx, vy, vz, maxSteps) {
            let curX = pathX[startIdx], curY = pathY[startIdx], curZ = pathZ[startIdx]
            let settled = false
            const vel = { x: vx, y: vy, z: vz }
            let collisionFrame = -1
            const STICK_FRAMES = 10

            for (let i = 0; i < maxSteps && !settled; i++) {
                const inFreefall = collisionFrame >= 0 && (i - collisionFrame) > STICK_FRAMES
                const g = inFreefall ? grav * 3 : grav
                vel.y -= g * physDt

                if (collisionFrame >= 0 && (i - collisionFrame) <= STICK_FRAMES) {
                    vel.x *= 0.5; vel.y *= 0.5; vel.z *= 0.5
                }

                curX += vel.x * physDt
                curY += vel.y * physDt
                curZ += vel.z * physDt

                if (collisionFrame < 0) {
                    vel.x *= 0.998
                    vel.z *= 0.998

                    const collision = checkGoalCollision(curX, curY, curZ, vel.x, vel.y, vel.z)
                    if (collision) {
                        hitNetStep = startIdx + 1 + i
                        hitType = collision
                        applyCollisionResponse(collision, vel)
                        collisionFrame = i
                    }
                }

                if (curY <= ballRadius) {
                    curY = ballRadius
                    if (Math.abs(vel.y) < 0.5) {
                        vel.y = 0
                        vel.x *= 0.9; vel.z *= 0.9
                        if (Math.abs(vel.x) < 0.05 && Math.abs(vel.z) < 0.05) settled = true
                    } else {
                        vel.y = Math.abs(vel.y) * 0.3
                        vel.x *= 0.75; vel.z *= 0.75
                    }
                }

                const writeIdx = startIdx + 1 + i
                if (writeIdx <= steps) {
                    pathX[writeIdx] = curX; pathY[writeIdx] = curY; pathZ[writeIdx] = curZ
                } else {
                    pathX.push(curX); pathY.push(curY); pathZ.push(curZ)
                }
            }
        }

        {
            const si = Math.max(1, physStartStep)
            const lookback = Math.max(0, si - 3)
            const spanDt = (si - lookback) * flightDt || flightDt
            let vx = (pathX[si] - pathX[lookback]) / spanDt
            let vy = (pathY[si] - pathY[lookback]) / spanDt
            let vz = (pathZ[si] - pathZ[lookback]) / spanDt
            simulatePhysics(si, vx, vy, vz, 240)
        }

        const actualSteps = pathX.length - 1
        const extraSteps = actualSteps - steps
        const fullDuration = duration + extraSteps * physDt
        const dt = fullDuration / actualSteps
        const velSamples = []
        const accXSamples = []
        const speedSeries = []
        const heightSeries = []
        const lateralSeries = []
        const dragSeries = []
        const magnusSeries = []
        const gravitySeries = []
        const windSeries = []

        for (let i = 0; i <= actualSteps; i++) {
            const prevI = Math.max(0, i - 1)
            const nextI = Math.min(actualSteps, i + 1)
            const vx = (pathX[nextI] - pathX[prevI]) / ((nextI - prevI || 1) * dt)
            const vy = (pathY[nextI] - pathY[prevI]) / ((nextI - prevI || 1) * dt)
            const vz = (pathZ[nextI] - pathZ[prevI]) / ((nextI - prevI || 1) * dt)
            velSamples.push(new THREE.Vector3(vx, vy, vz))

            const ax = (pathX[nextI] - 2 * pathX[i] + pathX[prevI]) / Math.max(dt * dt, 1e-4)
            accXSamples.push(ax)

            const speedMag = Math.sqrt(vx * vx + vy * vy + vz * vz)
            speedSeries.push(speedMag)
            heightSeries.push(pathY[i])
            lateralSeries.push(ax)
            dragSeries.push(speedMag * speedMag * 0.003)
            magnusSeries.push(Math.abs(ax))
            gravitySeries.push(9.81 * debugParams.gravity)
            windSeries.push(Math.abs(debugParams.windSpeed) * 0.35)
        }

        flightAnalyticsState.latestFlightSeries = {
            t: Array.from({ length: actualSteps + 1 }, (_, i) => i / actualSteps),
            speed: speedSeries,
            height: heightSeries,
            lateralAccel: lateralSeries,
            heat: {
                velocity: speedSeries,
                drag: dragSeries,
                magnus: magnusSeries,
                gravity: gravitySeries,
                wind: windSeries
            }
        }

        const meanSpeed = speedSeries.reduce((a, b) => a + b, 0) / speedSeries.length
        const peakSpeed = Math.max(...speedSeries)
        const ballDiameter = 0.22
        const airDensity = 1.225
        const dynamicViscosity = 1.81e-5
        const reynolds = (airDensity * peakSpeed * ballDiameter) / dynamicViscosity
        const avgCd = estimateCd(meanSpeed, design)

        const omega = (Math.PI * 4 * finalPower * debugParams.spinMultiplier) / duration
        const spinParam = (Math.abs(omega) * (ballDiameter / 2)) / Math.max(1, meanSpeed)
        const maxCl = estimateCl(spinParam, design)

        recordPhysicsSample({
            meanSpeed,
            peakSpeed,
            avgCd,
            maxCl,
            spinParam,
            reynolds
        })

        // Pre-compute target rotations as deltas
        const rotDeltaX = -Math.PI * 4 * finalPower * debugParams.spinMultiplier
        const rotDeltaY = curve * Math.PI * 2 * debugParams.spinMultiplier
        const rotDeltaZ = finalX * 0.5 * debugParams.spinMultiplier
        const startRotX = getBallGroup().rotation.x
        const startRotY = getBallGroup().rotation.y
        const startRotZ = getBallGroup().rotation.z

        const progress = { t: 0 }
        const tl = gsap.timeline({
            onComplete: () => {
                activeTimeline = null
                resetBall()
            }
        })
        activeTimeline = tl

        let netRippleTriggered = false

        tl.to(progress, {
            t: 1,
            duration: fullDuration,
            ease: 'none',
            onUpdate: () => {
                const idx = Math.min(Math.floor(progress.t * actualSteps), actualSteps)
                const ballGroup = getBallGroup()
                ballGroup.position.x = pathX[idx]
                ballGroup.position.y = pathY[idx]
                ballGroup.position.z = pathZ[idx]
                const rotT = Math.min(progress.t * (actualSteps / steps), 1)
                const easedRot = 1 - Math.pow(1 - rotT, 2)
                ballGroup.rotation.x = startRotX + rotDeltaX * easedRot
                ballGroup.rotation.y = startRotY + rotDeltaY * easedRot
                ballGroup.rotation.z = startRotZ + rotDeltaZ * easedRot
                kickPhysics.activeVelocityVec.copy(velSamples[idx])
                kickPhysics.activeLateralAccel = accXSamples[idx]
                updateForceVectors()

                if (hitNetStep >= 0 && idx >= hitNetStep && !netRippleTriggered) {
                    netRippleTriggered = true
                    triggerNetRipple(
                        pathX[hitNetStep],
                        pathY[hitNetStep],
                        hitType,
                        Math.sqrt(velSamples[hitNetStep].x ** 2 + velSamples[hitNetStep].y ** 2 + velSamples[hitNetStep].z ** 2)
                    )
                }
            }
        }, 0)
    }

    function triggerNetRipple(hitX, hitY, type, speed) {
        const goalGroup = getGoalGroup ? getGoalGroup() : null
        if (!goalGroup) return

        const intensity = Math.min(speed / 9, 1.2)
        const netMeshes = []
        goalGroup.traverse(child => {
            if (child.isMesh && child.material.wireframe) netMeshes.push(child)
        })
        if (netMeshes.length === 0) return

        netMeshes.forEach(mesh => {
            const pos = mesh.geometry.attributes.position
            if (!mesh._origNet) {
                mesh._origNet = new Float32Array(pos.array)
            }

            const normal = new THREE.Vector3(0, 0, 1)
            if (Math.abs(mesh.rotation.y) > 0.1) normal.set(1, 0, 0)
            else if (Math.abs(mesh.rotation.x) > 0.1) normal.set(0, 1, 0)
            mesh._rippleNormal = normal
        })

        const ripple = { t: 0 }
        gsap.to(ripple, {
            t: 1,
            duration: 2.0,
            ease: 'none',
            onUpdate: () => {
                netMeshes.forEach(mesh => {
                    const pos = mesh.geometry.attributes.position
                    const orig = mesh._origNet
                    const n = mesh._rippleNormal
                    const wPos = new THREE.Vector3()
                    mesh.getWorldPosition(wPos)

                    for (let i = 0; i < pos.count; i++) {
                        const ox = orig[i * 3], oy = orig[i * 3 + 1], oz = orig[i * 3 + 2]
                        const wx = ox + wPos.x, wy = oy + wPos.y
                        const dx = wx - hitX, dy = wy - hitY
                        const dist = Math.sqrt(dx * dx + dy * dy)

                        const decay = Math.exp(-ripple.t * 2.5)
                        const sway = Math.sin(ripple.t * 8 - dist * 1.2) * decay
                        const bulge = Math.exp(-dist * 0.3) * Math.max(0, 1 - ripple.t * 1.5)
                        const disp = (sway * 0.3 + bulge * 0.25) * intensity

                        pos.setXYZ(i,
                            ox + n.x * disp,
                            oy + n.y * disp,
                            oz + n.z * disp
                        )
                    }
                    pos.needsUpdate = true
                })
            },
            onComplete: () => {
                netMeshes.forEach(mesh => {
                    const pos = mesh.geometry.attributes.position
                    pos.array.set(mesh._origNet)
                    pos.needsUpdate = true
                })
            }
        })
    }

    function resetBall() {
        kickPhysics.isKicking = false
        kickPhysics.activeCurveForce = 0
        kickPhysics.activeLateralAccel = 0
        kickPhysics.activeVelocityVec.set(0, 0, 0)
        updateForceVectors()

        activeDelayedCall = gsap.delayedCall(0.8, () => {
            activeDelayedCall = null
            const resetProgress = { t: 0 }
            const startPos = getBallGroup().position.clone()
            const resetTl = gsap.timeline({
                onComplete: () => {
                    activeTimeline = null
                    renderBirdseye()
                }
            })
            activeTimeline = resetTl

            resetTl.to(resetProgress, {
                t: 1,
                duration: 0.5,
                ease: 'power2.inOut',
                onUpdate: () => {
                    const ballGroup = getBallGroup()
                    ballGroup.position.x = startPos.x + (ballStartPosition.x - startPos.x) * resetProgress.t
                    ballGroup.position.y = startPos.y + (ballStartPosition.y - startPos.y) * resetProgress.t
                    ballGroup.position.z = startPos.z + (ballStartPosition.z - startPos.z) * resetProgress.t
                }
            }, 0)
        })
    }

    /** Kill any in-flight kick or reset animation and snap ball to start. */
    function cancelKick() {
        if (activeTimeline) {
            activeTimeline.kill()
            activeTimeline = null
        }
        if (activeDelayedCall) {
            activeDelayedCall.kill()
            activeDelayedCall = null
        }
        kickPhysics.isKicking = false
        kickPhysics.activeCurveForce = 0
        kickPhysics.activeLateralAccel = 0
        kickPhysics.activeVelocityVec.set(0, 0, 0)
        updateForceVectors()

        const ballGroup = getBallGroup()
        ballGroup.position.set(ballStartPosition.x, ballStartPosition.y, ballStartPosition.z)
    }

    return { kick, cancelKick }
}

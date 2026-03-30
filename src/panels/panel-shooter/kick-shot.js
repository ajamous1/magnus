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
    sizes,
    getBallGroup,
    flightAnalyticsState,
    recordPhysicsSample,
    updateForceVectors,
    clearTrail,
    renderBirdseye,
    kickPhysics
}) {
    let activeTimeline = null
    let activeDelayedCall = null

    function kick(power, aimX, curve) {
        // Kill any in-progress kick
        cancelKick()

        kickPhysics.isKicking = true
        clearTrail()

        const design = BALL_DESIGNS[ballConfig.design]
        const effectiveRandomness = Math.max(0, debugParams.randomness + design.randomnessBonus)

        const targetX = Math.max(-goalWidth * 0.6, Math.min(goalWidth * 0.6, aimX))
        const randomX = (Math.random() - 0.5) * 0.3 * effectiveRandomness
        const randomPower = 1 + (Math.random() - 0.5) * 0.1 * effectiveRandomness

        const finalX = targetX + randomX
        const finalPower = Math.min(power * randomPower, 2.5)
        const duration = 0.6 + (1 - Math.min(finalPower, 1)) * 0.4

        const arcPeak = debugParams.arcHeight * finalPower * finalPower * 3.5 / debugParams.gravity
        const targetZ = 1 + finalPower * 2

        const curveStrength = curve * goalWidth * 1.84 * debugParams.curveIntensity * design.drag
        kickPhysics.activeCurveForce = curveStrength
        const wind = debugParams.windSpeed
        const steps = 60
        const pathX = []
        const pathY = []
        const pathZ = []

        for (let i = 0; i <= steps; i++) {
            const t = i / steps

            const easedT = 1 - Math.pow(1 - t, 2)
            const z = ballStartPosition.z + (targetZ - ballStartPosition.z) * easedT
            pathZ.push(z)

            const x = (1 - t) * (1 - t) * 0 + 2 * (1 - t) * t * curveStrength + t * t * finalX
                + wind * t * t * 0.5
            pathX.push(x)

            const y = ballRadius + arcPeak * 4 * t * (1 - t) * debugParams.gravity
            pathY.push(Math.max(ballRadius, y))
        }

        const dt = duration / steps
        const velSamples = []
        const accXSamples = []
        const speedSeries = []
        const heightSeries = []
        const lateralSeries = []
        const dragSeries = []
        const magnusSeries = []
        const gravitySeries = []
        const windSeries = []

        for (let i = 0; i <= steps; i++) {
            const prevI = Math.max(0, i - 1)
            const nextI = Math.min(steps, i + 1)
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
            t: Array.from({ length: steps + 1 }, (_, i) => i / steps),
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
        const avgCd = estimateCd(meanSpeed)

        const omega = (Math.PI * 4 * finalPower * debugParams.spinMultiplier) / duration
        const spinParam = (Math.abs(omega) * (ballDiameter / 2)) / Math.max(1, meanSpeed)
        const maxCl = estimateCl(spinParam)

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

        tl.to(progress, {
            t: 1,
            duration: duration,
            ease: 'power1.out',
            onUpdate: () => {
                const idx = Math.min(Math.floor(progress.t * steps), steps)
                const ballGroup = getBallGroup()
                ballGroup.position.x = pathX[idx]
                ballGroup.position.y = pathY[idx]
                ballGroup.position.z = pathZ[idx]
                // Apply rotation dynamically to current ball
                const easedRot = 1 - Math.pow(1 - progress.t, 2)
                ballGroup.rotation.x = startRotX + rotDeltaX * easedRot
                ballGroup.rotation.y = startRotY + rotDeltaY * easedRot
                ballGroup.rotation.z = startRotZ + rotDeltaZ * easedRot
                kickPhysics.activeVelocityVec.copy(velSamples[idx])
                kickPhysics.activeLateralAccel = accXSamples[idx]
                updateForceVectors()
            }
        }, 0)
    }

    function resetBall() {
        activeDelayedCall = gsap.delayedCall(debugParams.resetDelay, () => {
            activeDelayedCall = null
            kickPhysics.isKicking = false
            kickPhysics.activeCurveForce = 0
            kickPhysics.activeLateralAccel = 0
            kickPhysics.activeVelocityVec.set(0, 0, 0)
            updateForceVectors()

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

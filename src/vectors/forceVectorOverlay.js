import * as THREE from 'three'

function createVectorViz(color, vectorGroup) {
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9 })
    const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0)
    ])
    const line = new THREE.Line(geometry, material)
    const tip = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 8, 8),
        new THREE.MeshBasicMaterial({ color })
    )
    vectorGroup.add(line)
    vectorGroup.add(tip)
    return { line, tip }
}

function setVectorVisual(viz, origin, vec, visible) {
    viz.line.visible = visible
    viz.tip.visible = visible
    if (!visible) return
    const end = origin.clone().add(vec)
    viz.line.geometry.setFromPoints([origin, end])
    viz.tip.position.copy(end)
}

/**
 * @param {object} opts
 * @param {import('three').Scene} opts.scene
 * @param {HTMLElement} opts.vectorLegend
 * @param {object} opts.debugParams
 * @param {() => { isKicking: boolean, ballGroup: import('three').Object3D, activeVelocityVec: import('three').Vector3, activeCurveForce: number, activeLateralAccel: number }} opts.getKickState
 */
export function createForceVectorOverlay({ scene, vectorLegend, debugParams, getKickState }) {
    const vectorGroup = new THREE.Group()
    vectorGroup.visible = false
    scene.add(vectorGroup)

    const vectorVisuals = {
        velocity: createVectorViz(0x4a9eff, vectorGroup),
        drag: createVectorViz(0xffd166, vectorGroup),
        magnus: createVectorViz(0xff6b6b, vectorGroup),
        gravity: createVectorViz(0xb084ff, vectorGroup),
        wind: createVectorViz(0x5be7c4, vectorGroup)
    }

    function updateForceVectors() {
        const { isKicking, ballGroup, activeVelocityVec, activeCurveForce, activeLateralAccel } = getKickState()
        vectorGroup.visible = debugParams.vectorOverlay && isKicking
        vectorLegend.classList.toggle('visible', vectorGroup.visible)
        if (!vectorGroup.visible) return

        const origin = ballGroup.position.clone()
        const speed = activeVelocityVec.length()
        const velocityVec = activeVelocityVec.clone().multiplyScalar(0.06)
        const dragVec = speed > 0.001
            ? activeVelocityVec.clone().normalize().multiplyScalar(-Math.min(1.6, speed * speed * 0.003))
            : new THREE.Vector3()
        const magnusVec = new THREE.Vector3(Math.sign(activeCurveForce || 0.0001) * Math.min(1.3, Math.abs(activeLateralAccel) * 0.12), 0, 0)
        const gravityVec = new THREE.Vector3(0, -0.9 * debugParams.gravity, 0)
        const windVec = new THREE.Vector3(debugParams.windSpeed * 0.12, 0, 0)

        setVectorVisual(vectorVisuals.velocity, origin, velocityVec, debugParams.showVelocityVector)
        setVectorVisual(vectorVisuals.drag, origin, dragVec, debugParams.showDragVector)
        setVectorVisual(vectorVisuals.magnus, origin, magnusVec, debugParams.showMagnusVector)
        setVectorVisual(vectorVisuals.gravity, origin, gravityVec, debugParams.showGravityVector)
        setVectorVisual(vectorVisuals.wind, origin, windVec, debugParams.showWindVector)
    }

    return { updateForceVectors }
}

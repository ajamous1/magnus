import * as THREE from 'three'

/**
 * Top-down WebGL view (birdseye tracker) with ground-plane trail of the ball.
 *
 * @param {object} opts
 * @param {import('three').Scene} opts.scene
 * @param {import('three').GridHelper} opts.gridHelper
 * @param {import('three').Group} opts.fieldLines
 * @param {import('three').Mesh} opts.backWall
 * @param {import('three').Mesh} opts.leftWall
 * @param {import('three').Mesh} opts.rightWall
 * @param {HTMLElement} opts.panel — root element for this panel
 * @param {HTMLCanvasElement} opts.canvas
 * @param {() => import('three').Object3D} opts.getBallGroup
 */
export function createBirdseyePanel({
    scene,
    gridHelper,
    fieldLines,
    backWall,
    leftWall,
    rightWall,
    panel,
    canvas,
    getBallGroup
}) {
    const birdseyeCamera = new THREE.PerspectiveCamera(38, Math.max(1, panel.clientWidth) / Math.max(1, panel.clientHeight), 0.1, 220)
    birdseyeCamera.position.set(0, 18, -23)
    birdseyeCamera.lookAt(0, 0.8, -8)

    const birdseyeRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    birdseyeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    birdseyeRenderer.setSize(panel.clientWidth || 1, panel.clientHeight || 1)
    canvas.style.transform = 'none'

    const maxTrailPoints = 260
    const trailPoints = []
    const trailPositions = new Float32Array(maxTrailPoints * 3)
    const trailGeometry = new THREE.BufferGeometry()
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
    trailGeometry.setDrawRange(0, 0)
    const trailMaterial = new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.95 })
    const trailLine = new THREE.Line(trailGeometry, trailMaterial)
    trailLine.visible = false
    scene.add(trailLine)
    let trailFade = 0

    function clearTrail() {
        trailPoints.length = 0
        trailGeometry.setDrawRange(0, 0)
        trailFade = 0
    }

    function pushTrailPoint() {
        trailFade = 1
        trailMaterial.opacity = 0.95
        const ballGroup = getBallGroup()
        const p = { x: ballGroup.position.x, z: ballGroup.position.z }
        const last = trailPoints[trailPoints.length - 1]
        if (last && Math.hypot(p.x - last.x, p.z - last.z) < 0.045) return
        trailPoints.push(p)
        if (trailPoints.length > maxTrailPoints) trailPoints.shift()

        const count = trailPoints.length
        for (let i = 0; i < count; i++) {
            const idx = i * 3
            trailPositions[idx] = trailPoints[i].x
            trailPositions[idx + 1] = 0.06
            trailPositions[idx + 2] = trailPoints[i].z
        }
        trailGeometry.attributes.position.needsUpdate = true
        trailGeometry.setDrawRange(0, count)
    }

    function fadeTrail() {
        if (trailPoints.length === 0) return
        trailFade = Math.max(0, trailFade - 0.018)
        trailMaterial.opacity = 0.95 * trailFade
        if (trailFade <= 0.01) {
            clearTrail()
        }
    }

    function renderBirdseye() {
        const prevGridVisible = gridHelper.visible
        const prevFieldLines = fieldLines.visible
        const prevBackWall = backWall.visible
        const prevLeftWall = leftWall.visible
        const prevRightWall = rightWall.visible
        gridHelper.visible = false
        fieldLines.visible = false
        backWall.visible = false
        leftWall.visible = false
        rightWall.visible = false
        trailLine.visible = trailPoints.length > 1
        birdseyeCamera.lookAt(0, 0.8, -8)
        birdseyeRenderer.render(scene, birdseyeCamera)
        trailLine.visible = false
        gridHelper.visible = prevGridVisible
        fieldLines.visible = prevFieldLines
        backWall.visible = prevBackWall
        leftWall.visible = prevLeftWall
        rightWall.visible = prevRightWall
    }

    function resizeBirdseye() {
        const dpr = Math.min(window.devicePixelRatio, 2)
        const w = Math.max(1, panel.clientWidth)
        const h = Math.max(1, panel.clientHeight)
        birdseyeCamera.aspect = w / h
        birdseyeCamera.updateProjectionMatrix()
        birdseyeRenderer.setPixelRatio(dpr)
        birdseyeRenderer.setSize(w, h)
    }

    function applyTheme(isLight) {
        trailMaterial.color.set(isLight ? '#000000' : '#ffffff')
    }

    return {
        clearTrail,
        pushTrailPoint,
        fadeTrail,
        renderBirdseye,
        resizeBirdseye,
        applyTheme
    }
}

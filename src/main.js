import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
    ballConfig,
    buildBallMesh,
    BALL_DESIGNS
} from './balls/index.js'
import { createVisualFilterController, createFluidFlowOverlay } from './filters/index.js'
import { createDebugParams } from './panels/panel-debug/debug-params.js'
import { createDebugGui } from './panels/panel-debug/create-debug-gui.js'
import { createPitchEnvironment } from './panels/panel-shooter/pitch-environment.js'
import { createGoal } from './panels/panel-shooter/goal.js'
import { createForceVectorOverlay } from './panels/panel-shooter/force-vector-overlay.js'
import { createFlightAnalyticsPanels } from './panels/flight-analytics.js'
import { createDragTrailRibbon } from './panels/panel-shooter/drag-trail-ribbon.js'
import { createKickShot } from './panels/panel-shooter/kick-shot.js'
import { createCustomizerPreview } from './panels/panel-customizer/customizer-preview.js'
import { initBentoResize, initPanelFullscreen } from './ui/bentoGrid.js'

const debugParams = createDebugParams()

const canvas = document.querySelector('canvas.webgl')
const shooterPanel = document.getElementById('panel-shooter')
const birdseye = {
    panel: document.getElementById('panel-birdseye'),
    canvas: document.querySelector('canvas.birdseye-canvas')
}
const flightDynamics = {
    panel: document.getElementById('panel-flight-dynamics'),
    canvas: document.querySelector('canvas.flight-dynamics-canvas')
}
const vectorLegend = document.getElementById('vector-legend')

const scene = new THREE.Scene()
scene.background = new THREE.Color('#000000')
scene.fog = new THREE.FogExp2('#000000', 0.015)

const visualFilters = createVisualFilterController({
    mainCanvas: canvas,
    canvas: birdseye.canvas,
    debugParams
})
function applyVisualFilter() {
    visualFilters.apply()
}

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
scene.add(ambientLight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5)
directionalLight.position.set(5, 10, 5)
scene.add(directionalLight)
const fillLight = new THREE.DirectionalLight(0xffffff, 1.0)
fillLight.position.set(-5, 5, -5)
scene.add(fillLight)

const { gridHelper, fieldLines, backWall, leftWall, rightWall } = createPitchEnvironment(scene)
const { goalWidth } = createGoal(scene)

const ballRadius = 0.22
const penaltySpotZ = -11
const ballStartPosition = { x: 0, y: ballRadius, z: penaltySpotZ }

let ballGroup = buildBallMesh(ballConfig, ballRadius)
ballGroup.position.set(ballStartPosition.x, ballStartPosition.y, ballStartPosition.z)
scene.add(ballGroup)

const getBallGroup = () => ballGroup
const setBallGroup = (g) => { ballGroup = g }

const sizes = {
    width: shooterPanel.clientWidth,
    height: shooterPanel.clientHeight
}

const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 1.8, penaltySpotZ - 6)
camera.lookAt(0, 1, 0)
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enabled = false

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const resizeObserver = new ResizeObserver(() => {
    sizes.width = shooterPanel.clientWidth
    sizes.height = shooterPanel.clientHeight
    if (sizes.width === 0 || sizes.height === 0) return
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
resizeObserver.observe(shooterPanel)

const kickPhysics = {
    isKicking: false,
    activeCurveForce: 0,
    activeLateralAccel: 0,
    activeVelocityVec: new THREE.Vector3(0, 0, 0)
}

const { updateForceVectors } = createForceVectorOverlay({
    scene,
    vectorLegend,
    debugParams,
    getKickState: () => ({
        isKicking: kickPhysics.isKicking,
        ballGroup,
        activeVelocityVec: kickPhysics.activeVelocityVec,
        activeCurveForce: kickPhysics.activeCurveForce,
        activeLateralAccel: kickPhysics.activeLateralAccel
    })
})

const { updateFluidFlowOverlay } = createFluidFlowOverlay({
    scene,
    visualFilters,
    debugParams,
    getBallGroup,
    getFlowState: () => ({
        activeVelocityVec: kickPhysics.activeVelocityVec,
        activeCurveForce: kickPhysics.activeCurveForce,
        activeLateralAccel: kickPhysics.activeLateralAccel
    }),
    ballRadius
})

const {
    flightAnalyticsState,
    clearTrail,
    pushTrailPoint,
    fadeTrail,
    renderBirdseye,
    recordPhysicsSample
} = createFlightAnalyticsPanels({
    scene,
    gridHelper,
    fieldLines,
    backWall,
    leftWall,
    rightWall,
    birdseye,
    flightDynamics,
    getBallGroup
})

const { kick } = createKickShot({
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
})

const {
    trailMesh,
    updateTrailRibbon,
    maxTrailPoints
} = createDragTrailRibbon({
    scene,
    camera,
    canvas
})

createDebugGui(document.getElementById('panel-debug'), debugParams, {
    onOrbitControlsChange: (v) => { controls.enabled = v },
    onVectorFolderChange: () => updateForceVectors(),
    onVisualFilterChange: () => applyVisualFilter()
})

applyVisualFilter()

const previewRadius = 0.4
const customizer = createCustomizerPreview({
    mainScene: scene,
    ballConfig,
    ballRadius,
    previewRadius,
    getBallGroup,
    setBallGroup
})
const { updateBall, custScene, custCamera, custRenderer, custControls } = customizer
customizer.wireCustomizerUi()
customizer.wireExplodeSlider()

/**
 * Flick → kick
 */
let isDragging = false
const flickStart = { x: 0, y: 0, time: 0 }
const dragPoints = []

function onPointerDown(e) {
    if (kickPhysics.isKicking || controls.enabled) return
    flickStart.x = e.clientX
    flickStart.y = e.clientY
    flickStart.time = performance.now()
    isDragging = true
    dragPoints.length = 0
    dragPoints.push({ x: e.clientX, y: e.clientY, time: performance.now() })
    trailMesh.visible = true
}

function onPointerMove(e) {
    if (!isDragging || kickPhysics.isKicking || controls.enabled) return
    dragPoints.push({ x: e.clientX, y: e.clientY, time: performance.now() })
    if (dragPoints.length > maxTrailPoints) dragPoints.shift()
    updateTrailRibbon(dragPoints)
}

function onPointerUp(e) {
    if (!isDragging || kickPhysics.isKicking || controls.enabled) return
    isDragging = false
    trailMesh.visible = false

    const dx = e.clientX - flickStart.x
    const dy = flickStart.y - e.clientY
    const dt = (performance.now() - flickStart.time) / 1000

    if (dy < 30) return

    let curveAmount = 0
    if (dragPoints.length >= 5) {
        const start = dragPoints[0]
        const end = dragPoints[dragPoints.length - 1]
        const mid = dragPoints[Math.floor(dragPoints.length / 2)]
        const lineX = (start.x + end.x) / 2
        curveAmount = (mid.x - lineX) / sizes.width * -27.5
    }

    const speed = Math.min(Math.sqrt(dx * dx + dy * dy) / dt, 2000)
    const normalizedPower = Math.min(speed / 1000, 1) * debugParams.powerMultiplier
    const aimX = -(dx / sizes.width) * goalWidth * 1.2

    kick(normalizedPower, aimX, curveAmount)
}

canvas.addEventListener('pointerdown', onPointerDown)
canvas.addEventListener('pointermove', onPointerMove)
canvas.addEventListener('pointerup', onPointerUp)

const tick = () => {
    const elapsedTime = performance.now() * 0.001
    if (controls.enabled) {
        controls.update()
    } else {
        camera.lookAt(0, 1, 0)
    }

    updateFluidFlowOverlay(elapsedTime)

    const isFlowView = visualFilters.getFluidOverlay() || visualFilters.getWindTunnelOverlay()
    const prevGridVisible = gridHelper.visible
    const prevFieldLinesVisible = fieldLines.visible
    if (isFlowView) {
        gridHelper.visible = false
        fieldLines.visible = false
    }
    renderer.render(scene, camera)
    if (isFlowView) {
        gridHelper.visible = prevGridVisible
        fieldLines.visible = prevFieldLinesVisible
    }

    custControls.update()
    custRenderer.render(custScene, custCamera)

    if (kickPhysics.isKicking) {
        pushTrailPoint()
    } else {
        fadeTrail()
    }

    renderBirdseye()
    updateForceVectors()

    window.requestAnimationFrame(tick)
}

tick()

initBentoResize()
initPanelFullscreen()

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
    ballConfig,
    buildBallMesh,
    buildExplodedBall,
    buildFlatLayout,
    applyExplodeFactor,
    BALL_DESIGNS
} from './balls/index.js'
import { createVisualFilterController } from './filters/visual-filters.js'
import { createDebugParams } from './debug/debugParams.js'
import { createDebugGui } from './debug/createDebugGui.js'
import { createPitchEnvironment } from './scene/pitchEnvironment.js'
import { createGoal } from './scene/goal.js'
import { createForceVectorOverlay } from './vectors/forceVectorOverlay.js'
import { createFluidFlowOverlay } from './fluid/fluidFlowOverlay.js'
import { createFlightAnalyticsPanels } from './analytics/flightAnalyticsPanels.js'
import { createDragTrailRibbon } from './kick/dragTrailRibbon.js'
import { createKickShot } from './kick/kickShot.js'
import { initBentoResize, initPanelFullscreen } from './ui/bentoGrid.js'

const debugParams = createDebugParams()

const canvas = document.querySelector('canvas.webgl')
const shooterPanel = document.getElementById('panel-shooter')
const panel4Canvas = document.querySelector('canvas.panel4-canvas')
const panel4Panel = document.getElementById('panel-4')
const panel5Canvas = document.querySelector('canvas.panel5-canvas')
const panel5Panel = document.getElementById('panel-5')
const vectorLegend = document.getElementById('vector-legend')

const scene = new THREE.Scene()
scene.background = new THREE.Color('#000000')
scene.fog = new THREE.FogExp2('#000000', 0.015)

const visualFilters = createVisualFilterController({
    mainCanvas: canvas,
    panel4Canvas,
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
    getBallGroup: () => ballGroup,
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
    panel4Panel,
    panel4Canvas,
    panel5Panel,
    panel5Canvas,
    getBallGroup: () => ballGroup
})

const { kick } = createKickShot({
    BALL_DESIGNS,
    ballConfig,
    debugParams,
    ballStartPosition,
    ballRadius,
    goalWidth,
    sizes,
    getBallGroup: () => ballGroup,
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

createDebugGui(document.getElementById('panel-3'), debugParams, {
    onOrbitControlsChange: (v) => { controls.enabled = v },
    onVectorFolderChange: () => updateForceVectors(),
    onVisualFilterChange: () => applyVisualFilter()
})

applyVisualFilter()

/**
 * Customizer preview
 */
const custCanvas = document.querySelector('canvas.customizer-preview')
const custViewport = document.querySelector('.customizer-viewport')
const custScene = new THREE.Scene()
custScene.background = new THREE.Color('#0a0a0a')

const custAmbient = new THREE.AmbientLight(0xffffff, 1.5)
custScene.add(custAmbient)
const custKey = new THREE.DirectionalLight(0xffffff, 2.5)
custKey.position.set(3, 4, 5)
custScene.add(custKey)
const custFill = new THREE.DirectionalLight(0xffffff, 0.8)
custFill.position.set(-3, 2, -3)
custScene.add(custFill)

const previewRadius = 0.4
let previewBall = buildBallMesh(ballConfig, previewRadius)
custScene.add(previewBall)

let custViewMode = 'ball'
let custExplodeFactor = 0
let custExplodePanels = []

const custCamera = new THREE.PerspectiveCamera(
    40,
    custViewport.clientWidth / (custViewport.clientHeight || 1),
    0.1, 50
)
custCamera.position.set(0, 0, 1.2)
custCamera.lookAt(0, 0, 0)

const custRenderer = new THREE.WebGLRenderer({ canvas: custCanvas, antialias: true })
custRenderer.setSize(custViewport.clientWidth, custViewport.clientHeight)
custRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const custControls = new OrbitControls(custCamera, custCanvas)
custControls.enableDamping = true
custControls.enablePan = false
custControls.autoRotate = true
custControls.autoRotateSpeed = 2.0
custControls.minDistance = 0.6
custControls.maxDistance = 3.0

{
    let flatDragging = false
    let flatLastX = 0
    let flatLastY = 0
    custCanvas.addEventListener('mousedown', e => {
        if (custViewMode !== 'flat') return
        flatDragging = true
        flatLastX = e.clientX
        flatLastY = e.clientY
        e.stopPropagation()
    })
    window.addEventListener('mousemove', e => {
        if (!flatDragging || custViewMode !== 'flat' || !previewBall) return
        const dx = e.clientX - flatLastX
        flatLastX = e.clientX
        flatLastY = e.clientY
        previewBall.rotation.z += dx * 0.01
    })
    window.addEventListener('mouseup', () => { flatDragging = false })
    custCanvas.addEventListener('touchstart', e => {
        if (custViewMode !== 'flat' || e.touches.length !== 1) return
        flatDragging = true
        flatLastX = e.touches[0].clientX
        flatLastY = e.touches[0].clientY
    }, { passive: true })
    window.addEventListener('touchmove', e => {
        if (!flatDragging || custViewMode !== 'flat' || !previewBall || e.touches.length !== 1) return
        const dx = e.touches[0].clientX - flatLastX
        previewBall.rotation.z += dx * 0.01
        flatLastX = e.touches[0].clientX
        flatLastY = e.touches[0].clientY
    }, { passive: true })
    window.addEventListener('touchend', () => { flatDragging = false })
}

const custResizeObserver = new ResizeObserver(() => {
    const w = custViewport.clientWidth
    const h = custViewport.clientHeight
    if (w === 0 || h === 0) return
    custCamera.aspect = w / h
    custCamera.updateProjectionMatrix()
    custRenderer.setSize(w, h)
    custRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
custResizeObserver.observe(custViewport)

function updateBall() {
    const pos = ballGroup.position.clone()
    const rot = ballGroup.rotation.clone()
    scene.remove(ballGroup)
    ballGroup = buildBallMesh(ballConfig, ballRadius)
    ballGroup.position.copy(pos)
    ballGroup.rotation.copy(rot)
    scene.add(ballGroup)

    custScene.remove(previewBall)
    if (custViewMode === 'flat') {
        previewBall = buildFlatLayout(ballConfig)
        custControls.autoRotate = false
        custControls.enableRotate = false
        custControls.enablePan = true
        custControls.minPolarAngle = Math.PI / 2
        custControls.maxPolarAngle = Math.PI / 2
        custControls.minDistance = 1
        custControls.maxDistance = 60
        custCamera.position.set(0, 0, ballConfig.design === 'classic' ? 18 : 9)
        custCamera.lookAt(0, 0, 0)
    } else {
        custExplodePanels = []
        if (custExplodeFactor > 0) {
            const result = buildExplodedBall(ballConfig, previewRadius)
            previewBall = result.group
            custExplodePanels = result.panels
            applyExplodeFactor(custExplodePanels, custExplodeFactor)
        } else {
            previewBall = buildBallMesh(ballConfig, previewRadius)
        }
        custControls.autoRotate = true
        custControls.enableRotate = true
        custControls.enablePan = false
        custControls.minPolarAngle = 0
        custControls.maxPolarAngle = Math.PI
        custControls.minDistance = 0.6
        custControls.maxDistance = 3.0 + custExplodeFactor * 5.0
        custCamera.position.set(0, 0, 1.2)
        custCamera.lookAt(0, 0, 0)
    }
    custScene.add(previewBall)
}

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

    updateFluidFlowOverlay(elapsedTime)

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

document.querySelectorAll('.design-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.design-btn').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        ballConfig.design = btn.dataset.design
        updateBall()
    })
})

document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        custViewMode = btn.dataset.view
        updateBall()
    })
})

document.getElementById('primary-color').addEventListener('input', (e) => {
    ballConfig.primaryColor = e.target.value
    updateBall()
})

document.getElementById('secondary-color').addEventListener('input', (e) => {
    ballConfig.secondaryColor = e.target.value
    updateBall()
})

{
    const explodeSlider = document.getElementById('explode-slider')
    const explodeVal = document.getElementById('explode-val')

    explodeSlider.addEventListener('input', (e) => {
        const prev = custExplodeFactor
        custExplodeFactor = parseFloat(e.target.value)
        explodeVal.textContent = Math.round(custExplodeFactor * 100) + '%'

        if (custViewMode === 'flat') return

        const crossedZero = (prev === 0) !== (custExplodeFactor === 0)
        if (crossedZero) {
            updateBall()
        } else if (custExplodeFactor > 0 && custExplodePanels.length > 0) {
            applyExplodeFactor(custExplodePanels, custExplodeFactor)
        }
        custControls.maxDistance = 3.0 + custExplodeFactor * 5.0
    })
}

initBentoResize()
initPanelFullscreen()

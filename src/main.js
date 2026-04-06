import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
    ballConfig,
    buildBallMesh,
    buildExplodedBall,
    applyExplodeFactor,
    addStitching,
    BALL_DESIGNS
} from './balls/index.js'
import { createVisualFilterController, createFluidFlowOverlay } from './filters/index.js'
import { createDebugParams } from './panels/panel-debug/debug-params.js'
import { createDebugGui } from './panels/panel-debug/create-debug-gui.js'
import { createPitchEnvironment } from './panels/panel-shooter/pitch-environment.js'
import { createGoal } from './panels/panel-shooter/goal.js'

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

const { gridHelper, fieldLines, backWall, leftWall, rightWall, applyTheme: applyPitchTheme } = createPitchEnvironment(scene)
const { goalGroup, goalWidth, goalHeight, applyTheme: applyGoalTheme } = createGoal(scene)

const ballRadius = 0.22
const penaltySpotZ = -11
const ballStartPosition = { x: 0, y: ballRadius, z: penaltySpotZ }

function buildMainBall() {
    const result = buildExplodedBall(ballConfig, ballRadius)
    applyExplodeFactor(result.panels, 0)
    addStitching(result.group, ballConfig, ballRadius)
    return result.group
}

let ballGroup = buildMainBall()
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

const updateForceVectors = () => {}

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
    recordPhysicsSample,
    drawFlightGraph,
    applyBirdseyeTheme
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

const { kick, cancelKick } = createKickShot({
    BALL_DESIGNS,
    ballConfig,
    debugParams,
    ballStartPosition,
    ballRadius,
    goalWidth,
    goalHeight,
    sizes,
    getBallGroup,
    getGoalGroup: () => goalGroup,
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
    maxTrailPoints,
    applyTheme: applyTrailTheme
} = createDragTrailRibbon({
    scene,
    camera,
    canvas
})

const debugGui = createDebugGui(document.getElementById('debug-overlay'), debugParams, {
    onOrbitControlsChange: (v) => { controls.enabled = v },
    onVisualFilterChange: () => applyVisualFilter()
})

applyVisualFilter()

// --- Spin preview panel ---
const spinPanel = document.getElementById('panel-spin-preview')
const spinCanvas = document.querySelector('canvas.spin-preview-canvas')
const spinScene = new THREE.Scene()
spinScene.background = new THREE.Color('#0a0a0a')
spinScene.add(new THREE.AmbientLight(0xffffff, 1.5))
const spinKey = new THREE.DirectionalLight(0xffffff, 2.5)
spinKey.position.set(3, 4, 5)
spinScene.add(spinKey)
const spinFill = new THREE.DirectionalLight(0xffffff, 0.8)
spinFill.position.set(-3, 2, -3)
spinScene.add(spinFill)

const spinRadius = 0.4
let spinBall = buildMainBallForPreview(spinRadius)
spinScene.add(spinBall)

function buildMainBallForPreview(r) {
    const result = buildExplodedBall(ballConfig, r)
    applyExplodeFactor(result.panels, 0)
    addStitching(result.group, ballConfig, r)
    return result.group
}

// Angular momentum vector (arrow along spin axis)
const amGroup = new THREE.Group()
const amShaftGeo = new THREE.CylinderGeometry(0.006, 0.006, 0.5, 6)
const amHeadGeo = new THREE.ConeGeometry(0.02, 0.06, 6)
const amMat = new THREE.MeshBasicMaterial({ color: 0xff6b6b })
const amShaft = new THREE.Mesh(amShaftGeo, amMat)
amShaft.position.y = 0.25
const amHead = new THREE.Mesh(amHeadGeo, amMat.clone())
amHead.position.y = 0.53
amGroup.add(amShaft, amHead)
amGroup.visible = false
spinScene.add(amGroup)

function rebuildSpinBall() {
    const rot = spinBall.rotation.clone()
    spinScene.remove(spinBall)
    spinBall = buildMainBallForPreview(spinRadius)
    spinBall.rotation.copy(rot)
    spinScene.add(spinBall)
    if (customizer) customizer.applyCanvasTextures(spinBall)
}

const spinCamera = new THREE.PerspectiveCamera(
    40,
    spinPanel.clientWidth / (spinPanel.clientHeight || 1),
    0.1, 50
)
spinCamera.position.set(0, 0, 1.5)
spinCamera.lookAt(0, 0, 0)

const spinRenderer = new THREE.WebGLRenderer({ canvas: spinCanvas, antialias: true })
spinRenderer.setSize(spinPanel.clientWidth, spinPanel.clientHeight)
spinRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const spinResizeObserver = new ResizeObserver(() => {
    const w = spinPanel.clientWidth
    const h = spinPanel.clientHeight
    if (w === 0 || h === 0) return
    spinCamera.aspect = w / h
    // Pull camera back on portrait/narrow viewports so the ball fits
    const baseZ = 1.5
    spinCamera.position.z = w / h < 1 ? baseZ * (1 / (w / h)) * 0.9 : baseZ
    spinCamera.updateProjectionMatrix()
    spinRenderer.setSize(w, h)
    spinRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
spinResizeObserver.observe(spinPanel)

// Drag on spin preview canvas — arcball mapping for full 3-axis control
{
    let arcballStart = null

    function canvasToSphere(e) {
        const rect = spinCanvas.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
        const r2 = x * x + y * y
        if (r2 <= 1) return { x, y, z: Math.sqrt(1 - r2) }
        const r = Math.sqrt(r2)
        return { x: x / r, y: y / r, z: 0 }
    }

    spinCanvas.addEventListener('pointerdown', e => {
        arcballStart = canvasToSphere(e)
        arcballStart.cx = e.clientX
        arcballStart.cy = e.clientY
        spinCanvas.setPointerCapture(e.pointerId)
    })
    spinCanvas.addEventListener('pointermove', e => {
        if (!arcballStart) return
        const cur = canvasToSphere(e)
        // Cross product = rotation axis
        const ax = arcballStart.y * cur.z - arcballStart.z * cur.y
        const ay = arcballStart.z * cur.x - arcballStart.x * cur.z
        const az = arcballStart.x * cur.y - arcballStart.y * cur.x
        const len = Math.sqrt(ax * ax + ay * ay + az * az)
        if (len < 0.001) return
        debugParams.spinAxisX = ax / len
        debugParams.spinAxisY = ay / len
        debugParams.spinAxisZ = az / len
        // Map drag distance to spin speed
        const dx = e.clientX - arcballStart.cx
        const dy = e.clientY - arcballStart.cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const panelSize = Math.max(spinPanel.clientWidth, spinPanel.clientHeight)
        debugParams.spinSpeed = Math.round(Math.min(50, Math.max(1, (dist / panelSize) * 60)))
        if (debugGui.speedCtrl) debugGui.speedCtrl.updateDisplay()
        if (debugGui.axisXCtrl) debugGui.axisXCtrl.updateDisplay()
        if (debugGui.axisYCtrl) debugGui.axisYCtrl.updateDisplay()
        if (debugGui.axisZCtrl) debugGui.axisZCtrl.updateDisplay()
        if (debugGui.drawCircle) debugGui.drawCircle()
    })
    spinCanvas.addEventListener('pointerup', () => { arcballStart = null })
    spinCanvas.addEventListener('pointercancel', () => { arcballStart = null })
}

const previewRadius = 0.4
let customizer = createCustomizerPreview({
    mainScene: scene,
    ballConfig,
    ballRadius,
    previewRadius,
    getBallGroup,
    setBallGroup,
    buildMainBall,
    onBallChanged: rebuildSpinBall,
    cancelKick
})
const { updateBall, custScene, custCamera, custRenderer, custControls } = customizer
customizer.wireCustomizerUi()
customizer.wireExplodeSlider()
customizer.studioUI.init()

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

    const minFlickDist = Math.max(30, sizes.height * 0.04)
    if (dy < minFlickDist) return

    let curveAmount = 0
    if (dragPoints.length >= 3) {
        const start = dragPoints[0]
        const end = dragPoints[dragPoints.length - 1]
        const mid = dragPoints[Math.floor(dragPoints.length / 2)]
        const lineX = (start.x + end.x) / 2
        curveAmount = (mid.x - lineX) / sizes.width * -16
    }

    const flickDist = Math.sqrt(dx * dx + dy * dy)
    const normalizedDist = flickDist / sizes.height
    const flickSpeed = Math.min(normalizedDist / dt, 4)
    const normalizedPower = Math.min(flickSpeed * 0.36, 1) * debugParams.powerMultiplier
    const aimX = -(dx / sizes.width) * goalWidth * 0.85

    const flickAngle = Math.atan2(dy, Math.abs(dx) + 1)
    const heightFactor = Math.max(0, Math.min(1, (flickAngle / (Math.PI / 2)) * 1.3 - 0.2))
    const aimY = heightFactor * goalHeight * 0.95

    customizer.syncExternalBalls()
    kick(normalizedPower, aimX, curveAmount, aimY)
}

canvas.addEventListener('pointerdown', onPointerDown)
canvas.addEventListener('pointermove', onPointerMove)
canvas.addEventListener('pointerup', onPointerUp)

// --- Theme toggle ---
const themeToggleBtn = document.getElementById('theme-toggle-btn')
function applyThemeToScenes() {
    const isLight = document.documentElement.dataset.theme === 'light'
    const sceneBg = isLight ? '#ffffff' : '#000000'
    const previewBg = isLight ? '#ffffff' : '#0a0a0a'
    scene.background.set(sceneBg)
    scene.fog.color.set(sceneBg)
    spinScene.background.set(previewBg)
    if (customizer?.custScene) customizer.custScene.background.set(previewBg)
    applyPitchTheme(isLight)
    applyGoalTheme(isLight)
    applyTrailTheme(isLight)
    applyBirdseyeTheme(isLight)
    drawFlightGraph()
    renderBirdseye()
}
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const html = document.documentElement
        html.dataset.theme = html.dataset.theme === 'light' ? '' : 'light'
        applyThemeToScenes()
    })
}

const _spinAxis = new THREE.Vector3()
const _upVec = new THREE.Vector3(0, 1, 0)

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

    // Spin preview — rotate around user-defined axis
    {
        const ax = debugParams.spinAxisX
        const ay = debugParams.spinAxisY
        const az = debugParams.spinAxisZ
        const len = Math.sqrt(ax * ax + ay * ay + az * az)
        if (len > 0.001) {
            _spinAxis.set(ax / len, ay / len, az / len)
            spinBall.rotateOnWorldAxis(_spinAxis, debugParams.spinSpeed * 0.01)

            amGroup.visible = debugParams.showAngularMomentum
            if (amGroup.visible) {
                amGroup.quaternion.setFromUnitVectors(_upVec, _spinAxis)
            }
        } else {
            amGroup.visible = false
        }
    }
    spinRenderer.render(spinScene, spinCamera)

    customizer.animateCamera()
    custControls.update()
    custRenderer.render(custScene, custCamera)

    if (kickPhysics.isKicking) {
        pushTrailPoint()
    } else {
        fadeTrail()
    }
    renderBirdseye()

    window.requestAnimationFrame(tick)
}

tick()

initBentoResize()
initPanelFullscreen()

// Mobile edit mode toggle
const editModeBtn = document.getElementById('edit-mode-btn')
const editModeDone = document.getElementById('edit-mode-done')
const customizerPanel = document.getElementById('panel-customizer')

if (editModeBtn && customizerPanel) {
    editModeBtn.addEventListener('click', () => {
        customizerPanel.classList.add('edit-mode-active', 'zoomed-out')
    })
}
if (editModeDone && customizerPanel) {
    editModeDone.addEventListener('click', () => {
        customizerPanel.classList.remove('edit-mode-active', 'zoomed-out')
    })
}

// Mobile spin preview toggle
const spinModeBtn = document.getElementById('spin-mode-btn')
const spinModeDone = document.getElementById('spin-mode-done')
const spinPanelEl = document.getElementById('panel-spin-preview')

if (spinModeBtn && spinPanelEl) {
    spinModeBtn.addEventListener('click', () => {
        spinPanelEl.classList.add('spin-mode-active')
    })
}
if (spinModeDone && spinPanelEl) {
    spinModeDone.addEventListener('click', () => {
        spinPanelEl.classList.remove('spin-mode-active')
    })
}

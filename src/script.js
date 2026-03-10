import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import GUI from 'lil-gui'

/**
 * Debug UI
 */
const gui = new GUI({ title: 'Debug', container: document.getElementById('panel-3') })
const debugParams = {
    powerMultiplier: 1.0,
    arcHeight: 2.5,
    resetDelay: 1.0,
    orbitControls: false
}
gui.add(debugParams, 'powerMultiplier', 0.5, 3, 0.1).name('Kick Power')
gui.add(debugParams, 'arcHeight', 0.5, 5, 0.1).name('Arc Height')
gui.add(debugParams, 'resetDelay', 0.3, 3, 0.1).name('Reset Delay')
gui.add(debugParams, 'orbitControls').name('Orbit Controls').onChange((val) => {
    controls.enabled = val
})

// Toggle GUI with H key
window.addEventListener('keydown', (e) => {
    if (e.key === 'h' || e.key === 'H') gui._hidden ? gui.show() : gui.hide()
})

/**
 * Base
 */
const canvas = document.querySelector('canvas.webgl')
const shooterPanel = document.getElementById('panel-shooter')
const scene = new THREE.Scene()
scene.background = new THREE.Color('#000000')
scene.fog = new THREE.FogExp2('#000000', 0.015)



/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5)
directionalLight.position.set(5, 10, 5)
scene.add(directionalLight)

const fillLight = new THREE.DirectionalLight(0xffffff, 1.0)
fillLight.position.set(-5, 5, -5)
scene.add(fillLight)

/**
 * Pitch (Ground)
 */
const pitchGeometry = new THREE.PlaneGeometry(60, 40)
const pitchMaterial = new THREE.MeshBasicMaterial({
    color: '#000000'
})
const pitch = new THREE.Mesh(pitchGeometry, pitchMaterial)
pitch.rotation.x = -Math.PI / 2
pitch.position.y = 0
scene.add(pitch)

/**
 * Matrix Simulation Grid
 */
const gridHelper = new THREE.GridHelper(100, 100, '#888888', '#222222')
gridHelper.position.y = 0.005
scene.add(gridHelper)

const wallGridCanvas = document.createElement('canvas')
wallGridCanvas.width = 512
wallGridCanvas.height = 512
const wallCtx = wallGridCanvas.getContext('2d')
wallCtx.fillStyle = '#000000'
wallCtx.fillRect(0, 0, 512, 512)
wallCtx.strokeStyle = '#888888'
wallCtx.lineWidth = 0.5
for (let i = 0; i <= 512; i += 16) {
    wallCtx.beginPath(); wallCtx.moveTo(i, 0); wallCtx.lineTo(i, 512); wallCtx.stroke()
    wallCtx.beginPath(); wallCtx.moveTo(0, i); wallCtx.lineTo(512, i); wallCtx.stroke()
}
const wallGridTexture = new THREE.CanvasTexture(wallGridCanvas)
wallGridTexture.wrapS = THREE.RepeatWrapping
wallGridTexture.wrapT = THREE.RepeatWrapping
wallGridTexture.repeat.set(6, 2)

const wallMaterial = new THREE.MeshBasicMaterial({
    map: wallGridTexture,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide
})

const backWall = new THREE.Mesh(new THREE.PlaneGeometry(120, 30), wallMaterial)
backWall.position.set(0, 15, 50)
backWall.rotation.y = Math.PI
scene.add(backWall)

const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(120, 30), wallMaterial)
leftWall.rotation.y = Math.PI / 2
leftWall.position.set(-50, 15, 0)
scene.add(leftWall)

const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(120, 30), wallMaterial)
rightWall.rotation.y = -Math.PI / 2
rightWall.position.set(50, 15, 0)
scene.add(rightWall)

/**
 * Field Markings — Penalty Box Lines
 */
const lineThickness = 0.08
const lineHeight = 0.01 // Slightly above pitch
const lineMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff' })

function createLine(width, depth, x, z) {
    const geo = new THREE.PlaneGeometry(width, depth)
    const line = new THREE.Mesh(geo, lineMaterial)
    line.rotation.x = -Math.PI / 2
    line.position.set(x, lineHeight, z)
    return line
}

const fieldLines = new THREE.Group()

// Penalty box (18-yard box): ~16.5m x 40.3m → scaled
const boxWidth = 16.5
const boxDepth = 20.15

// Goal line (behind the goal)
fieldLines.add(createLine(boxDepth * 2, lineThickness, 0, 0))

// Penalty box — left side
fieldLines.add(createLine(lineThickness, boxWidth, -boxDepth, -boxWidth / 2))
// Penalty box — right side
fieldLines.add(createLine(lineThickness, boxWidth, boxDepth, -boxWidth / 2))
// Penalty box — front line
fieldLines.add(createLine(boxDepth * 2, lineThickness, 0, -boxWidth))

// Penalty spot marker (small circle)
const spotGeometry = new THREE.CircleGeometry(0.15, 16)
const spot = new THREE.Mesh(spotGeometry, lineMaterial)
spot.rotation.x = -Math.PI / 2
spot.position.set(0, lineHeight, -11)
fieldLines.add(spot)

scene.add(fieldLines)

/**
 * Goal
 */
const goalGroup = new THREE.Group()
const postRadius = 0.06
const goalWidth = 7.32
const goalHeight = 2.44
const postMaterial = new THREE.MeshLambertMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.5 })

// Left post
const leftPostGeo = new THREE.CylinderGeometry(postRadius, postRadius, goalHeight, 12)
const leftPost = new THREE.Mesh(leftPostGeo, postMaterial)
leftPost.position.set(-goalWidth / 2, goalHeight / 2, 0)
goalGroup.add(leftPost)

// Right post
const rightPost = new THREE.Mesh(leftPostGeo, postMaterial)
rightPost.position.set(goalWidth / 2, goalHeight / 2, 0)
goalGroup.add(rightPost)

// Crossbar
const crossbarGeo = new THREE.CylinderGeometry(postRadius, postRadius, goalWidth + postRadius * 2, 12)
const crossbar = new THREE.Mesh(crossbarGeo, postMaterial)
crossbar.rotation.z = Math.PI / 2
crossbar.position.set(0, goalHeight, 0)
goalGroup.add(crossbar)

const netDepth = 2.5
const netMaterial = new THREE.MeshBasicMaterial({
    color: '#888888',
    wireframe: true,
    transparent: true,
    opacity: 0.4
})

const backNetGeo = new THREE.PlaneGeometry(goalWidth, goalHeight, 24, 10)
const backNet = new THREE.Mesh(backNetGeo, netMaterial)
backNet.position.set(0, goalHeight / 2, netDepth)
goalGroup.add(backNet)

const sideNetGeo = new THREE.PlaneGeometry(netDepth, goalHeight, 8, 10)
const leftSideNet = new THREE.Mesh(sideNetGeo, netMaterial)
leftSideNet.rotation.y = Math.PI / 2
leftSideNet.position.set(-goalWidth / 2, goalHeight / 2, netDepth / 2)
goalGroup.add(leftSideNet)

const rightSideNet = new THREE.Mesh(sideNetGeo, netMaterial)
rightSideNet.rotation.y = Math.PI / 2
rightSideNet.position.set(goalWidth / 2, goalHeight / 2, netDepth / 2)
goalGroup.add(rightSideNet)

const topNetGeo = new THREE.PlaneGeometry(goalWidth, netDepth, 24, 8)
const topNet = new THREE.Mesh(topNetGeo, netMaterial)
topNet.rotation.x = -Math.PI / 2
topNet.position.set(0, goalHeight, netDepth / 2)
goalGroup.add(topNet)

goalGroup.position.z = 0
scene.add(goalGroup)

/**
 * Ball
 */
const ballRadius = 0.22
const ballGeometry = new THREE.SphereGeometry(ballRadius, 32, 32)
const ballMaterial = new THREE.MeshLambertMaterial({
    color: '#ffffff',
    emissive: '#ffffff',
    emissiveIntensity: 0.3
})
const ball = new THREE.Mesh(ballGeometry, ballMaterial)

// Penalty spot position (11m from goal line)
const penaltySpotZ = -11
const ballStartPosition = { x: 0, y: ballRadius, z: penaltySpotZ }

ball.position.set(ballStartPosition.x, ballStartPosition.y, ballStartPosition.z)
scene.add(ball)

/**
 * Sizes — driven by the shooter panel, not the window
 */
const sizes = {
    width: shooterPanel.clientWidth,
    height: shooterPanel.clientHeight
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100)

// Camera behind the ball, slightly elevated — POV of the kicker
camera.position.set(0, 1.8, penaltySpotZ - 6)
camera.lookAt(0, 1, 0)
scene.add(camera)

// OrbitControls (disabled by default, toggle via debug UI)
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enabled = false

/**
 * Renderer
 */
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

/**
 * Drag Trail — calligraphic ribbon (thin at start, thick at end)
 */
const maxTrailPoints = 50
const trailMinWidth = 0.01
const trailMaxWidth = 0.175

// Each segment is a quad (2 triangles), so we need 2 vertices per point
// Total vertices = maxTrailPoints * 2, total indices = (maxTrailPoints - 1) * 6
const trailVertCount = maxTrailPoints * 2
const trailPositions = new Float32Array(trailVertCount * 3)
const trailIndices = []
for (let i = 0; i < maxTrailPoints - 1; i++) {
    const a = i * 2
    const b = i * 2 + 1
    const c = (i + 1) * 2
    const d = (i + 1) * 2 + 1
    trailIndices.push(a, c, b, b, c, d)
}

const trailGeometry = new THREE.BufferGeometry()
trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
trailGeometry.setIndex(trailIndices)

const trailMaterial = new THREE.MeshBasicMaterial({
    color: '#CCCCFF',
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
    depthWrite: false
})
const trailMesh = new THREE.Mesh(trailGeometry, trailMaterial)
trailMesh.visible = false
scene.add(trailMesh)

// Project screen coords to a plane for the trail
const raycaster = new THREE.Raycaster()
const trailHeight = 1.5
const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -trailHeight)

function screenToWorld(x, y) {
    const rect = canvas.getBoundingClientRect()
    const ndc = new THREE.Vector2(
        ((x - rect.left) / rect.width) * 2 - 1,
        -((y - rect.top) / rect.height) * 2 + 1
    )
    raycaster.setFromCamera(ndc, camera)
    const target = new THREE.Vector3()
    raycaster.ray.intersectPlane(dragPlane, target)
    return target
}

function updateTrailRibbon(points) {
    const count = points.length
    if (count < 2) {
        trailGeometry.setDrawRange(0, 0)
        return
    }

    for (let i = 0; i < count; i++) {
        const wp = screenToWorld(points[i].x, points[i].y)
        // t goes 0→1 from first point to last — width grows with t
        const t = i / (count - 1)
        const width = trailMinWidth + (trailMaxWidth - trailMinWidth) * t * t // quadratic ease for calligraphic feel

        // Get direction perpendicular to the path for ribbon width
        let dx, dz
        if (i < count - 1) {
            const next = screenToWorld(points[i + 1].x, points[i + 1].y)
            dx = next.x - wp.x
            dz = next.z - wp.z
        } else {
            const prev = screenToWorld(points[i - 1].x, points[i - 1].y)
            dx = wp.x - prev.x
            dz = wp.z - prev.z
        }
        // Perpendicular in xz plane
        const len = Math.sqrt(dx * dx + dz * dz) || 1
        const perpX = -dz / len * width * 0.5
        const perpZ = dx / len * width * 0.5

        // Left vertex
        trailPositions[(i * 2) * 3] = wp.x + perpX
        trailPositions[(i * 2) * 3 + 1] = wp.y
        trailPositions[(i * 2) * 3 + 2] = wp.z + perpZ

        // Right vertex
        trailPositions[(i * 2 + 1) * 3] = wp.x - perpX
        trailPositions[(i * 2 + 1) * 3 + 1] = wp.y
        trailPositions[(i * 2 + 1) * 3 + 2] = wp.z - perpZ
    }

    // Zero out unused vertices
    for (let i = count; i < maxTrailPoints; i++) {
        trailPositions[(i * 2) * 3] = 0
        trailPositions[(i * 2) * 3 + 1] = 0
        trailPositions[(i * 2) * 3 + 2] = 0
        trailPositions[(i * 2 + 1) * 3] = 0
        trailPositions[(i * 2 + 1) * 3 + 1] = 0
        trailPositions[(i * 2 + 1) * 3 + 2] = 0
    }

    trailGeometry.attributes.position.needsUpdate = true
    // Each segment between points uses 6 indices (2 triangles)
    trailGeometry.setDrawRange(0, Math.max(0, (count - 1)) * 6)
}

/**
 * Flick Mechanic
 */
let isKicking = false
let isDragging = false
let flickStart = { x: 0, y: 0, time: 0 }
const dragPoints = [] // screen-space points captured during drag

function onPointerDown(e) {
    if (isKicking || controls.enabled) return
    flickStart.x = e.clientX
    flickStart.y = e.clientY
    flickStart.time = performance.now()
    isDragging = true
    dragPoints.length = 0
    dragPoints.push({ x: e.clientX, y: e.clientY, time: performance.now() })
    trailMesh.visible = true
}

function onPointerMove(e) {
    if (!isDragging || isKicking || controls.enabled) return
    dragPoints.push({ x: e.clientX, y: e.clientY, time: performance.now() })
    if (dragPoints.length > maxTrailPoints) dragPoints.shift()

    updateTrailRibbon(dragPoints)
}

function onPointerUp(e) {
    if (!isDragging || isKicking || controls.enabled) return
    isDragging = false
    trailMesh.visible = false

    const dx = e.clientX - flickStart.x
    const dy = flickStart.y - e.clientY // Inverted: swipe up = positive
    const dt = (performance.now() - flickStart.time) / 1000

    // Minimum swipe threshold
    if (dy < 30) return

    // Calculate curve from drag path shape
    // Sample the middle portion of the drag to detect curvature
    let curveAmount = 0
    if (dragPoints.length >= 5) {
        const start = dragPoints[0]
        const end = dragPoints[dragPoints.length - 1]
        const mid = dragPoints[Math.floor(dragPoints.length / 2)]
        // How far the midpoint deviates from the straight line start→end
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

/**
 * Kick Animation (with curve)
 */
function kick(power, aimX, curve) {
    isKicking = true

    const targetX = Math.max(-goalWidth * 0.6, Math.min(goalWidth * 0.6, aimX))
    const randomX = (Math.random() - 0.5) * 0.3
    const randomPower = 1 + (Math.random() - 0.5) * 0.1

    const finalX = targetX + randomX
    const finalPower = Math.min(power * randomPower, 2.5)
    const duration = 0.6 + (1 - Math.min(finalPower, 1)) * 0.4

    const arcPeak = debugParams.arcHeight * finalPower * finalPower * 3.5
    const targetZ = 1 + finalPower * 2

    // Build a curved path using intermediate control point
    // The curve shifts the ball sideways mid-flight then back toward the aim
    const curveStrength = curve * goalWidth * 1.84
    const steps = 60
    const pathX = []
    const pathY = []
    const pathZ = []

    for (let i = 0; i <= steps; i++) {
        const t = i / steps

        // Z: forward movement (eased)
        const easedT = 1 - Math.pow(1 - t, 2)
        const z = ballStartPosition.z + (targetZ - ballStartPosition.z) * easedT
        pathZ.push(z)

        // X: quadratic bezier with curve control point
        // P0 = 0, P1 = curveStrength (control), P2 = finalX
        const x = (1 - t) * (1 - t) * 0 + 2 * (1 - t) * t * curveStrength + t * t * finalX
        pathX.push(x)

        // Y: parabolic arc — peaks at t=0.45 for a natural kick trajectory
        const y = ballRadius + arcPeak * 4 * t * (1 - t)
        pathY.push(y)
    }

    // Animate along the path using a progress value
    const progress = { t: 0 }
    const tl = gsap.timeline({
        onComplete: () => resetBall()
    })

    tl.to(progress, {
        t: 1,
        duration: duration,
        ease: 'power1.out',
        onUpdate: () => {
            const idx = Math.min(Math.floor(progress.t * steps), steps)
            ball.position.x = pathX[idx]
            ball.position.y = pathY[idx]
            ball.position.z = pathZ[idx]
        }
    }, 0)

    // Ball spin — more spin if more curve
    tl.to(ball.rotation, {
        x: ball.rotation.x - Math.PI * 4 * finalPower,
        y: ball.rotation.y + curve * Math.PI * 2,
        z: ball.rotation.z + finalX * 0.5,
        duration: duration,
        ease: 'power1.out'
    }, 0)
}

function resetBall() {
    gsap.delayedCall(debugParams.resetDelay, () => {
        const resetTl = gsap.timeline({
            onComplete: () => {
                isKicking = false
            }
        })

        resetTl.to(ball.position, {
            x: ballStartPosition.x,
            y: ballStartPosition.y,
            z: ballStartPosition.z,
            duration: 0.5,
            ease: 'power2.inOut'
        }, 0)
    })
}

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update OrbitControls if enabled
    if (controls.enabled) {
        controls.update()
    } else {
        // Fixed camera looking toward the goal
        camera.lookAt(0, 1, 0)
    }

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()

/**
 * Bento Grid — Drag-to-Resize
 */
let resizeDrag = null

document.querySelectorAll('.resize-handle').forEach(handle => {
    handle.addEventListener('pointerdown', (e) => {
        e.preventDefault()
        const isH = handle.classList.contains('resize-h')
        const prev = handle.previousElementSibling
        const next = handle.nextElementSibling
        if (!prev || !next) return

        // Normalize ALL siblings in the same container to pixel-based flex
        // so panels that aren't being dragged keep their current size
        const parent = handle.parentElement
        for (const child of parent.children) {
            if (child.classList.contains('resize-handle')) continue
            const size = isH ? child.offsetHeight : child.offsetWidth
            child.style.flex = `${size} 0 0px`
        }

        const startPos = isH ? e.clientY : e.clientX
        const prevSize = isH ? prev.offsetHeight : prev.offsetWidth
        const nextSize = isH ? next.offsetHeight : next.offsetWidth

        handle.classList.add('active')
        document.body.classList.add('resizing')
        document.body.style.cursor = isH ? 'row-resize' : 'col-resize'

        resizeDrag = { handle, isH, startPos, prev, next, prevSize, nextSize }
    })
})

window.addEventListener('pointermove', (e) => {
    if (!resizeDrag) return
    const { isH, startPos, prev, next, prevSize, nextSize } = resizeDrag
    const delta = (isH ? e.clientY : e.clientX) - startPos
    const total = prevSize + nextSize
    const minSize = 80

    const newPrev = Math.max(minSize, Math.min(total - minSize, prevSize + delta))
    const newNext = total - newPrev

    prev.style.flex = `${newPrev} 0 0px`
    next.style.flex = `${newNext} 0 0px`
})

window.addEventListener('pointerup', () => {
    if (!resizeDrag) return
    resizeDrag.handle.classList.remove('active')
    document.body.classList.remove('resizing')
    document.body.style.cursor = ''
    resizeDrag = null
})

/**
 * Bento Grid — Per-Panel Fullscreen
 */
document.querySelectorAll('.panel-fs-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const panel = btn.closest('.bento-panel')
        panel.classList.toggle('fullscreen')
    })
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.bento-panel.fullscreen').forEach(p => {
            p.classList.remove('fullscreen')
        })
    }
})

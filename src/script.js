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
    spinMultiplier: 1.0,
    curveIntensity: 1.0,
    randomness: 1.0,
    windSpeed: 0,
    gravity: 1.0,
    orbitControls: false
}

const kickFolder = gui.addFolder('Kick')
kickFolder.add(debugParams, 'powerMultiplier', 0.5, 3, 0.1).name('Power')
kickFolder.add(debugParams, 'arcHeight', 0.5, 5, 0.1).name('Arc Height')
kickFolder.add(debugParams, 'curveIntensity', 0.0, 3, 0.1).name('Curve Intensity')
kickFolder.add(debugParams, 'spinMultiplier', 0.0, 3, 0.1).name('Spin')

const physicsFolder = gui.addFolder('Physics')
physicsFolder.add(debugParams, 'gravity', 0.2, 3, 0.1).name('Gravity')
physicsFolder.add(debugParams, 'windSpeed', -5, 5, 0.1).name('Wind')
physicsFolder.add(debugParams, 'randomness', 0.0, 2, 0.1).name('Randomness')

const settingsFolder = gui.addFolder('Settings')
settingsFolder.add(debugParams, 'resetDelay', 0.3, 3, 0.1).name('Reset Delay')
settingsFolder.add(debugParams, 'orbitControls').name('Orbit Controls').onChange((val) => {
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
 * Truncated Icosahedron — the real soccer ball shape
 * 60 vertices, 90 edges, 32 faces (12 pentagons + 20 hexagons)
 * Vertices from even permutations of golden-ratio coordinate triples.
 * Edges found by minimum vertex distance. Pentagons found via icosahedron proximity.
 */
const TRUNC_ICO = (() => {
    const phi = (1 + Math.sqrt(5)) / 2
    const verts = []

    function addEvenPerms(a, b, c) {
        const perms = [[a, b, c], [b, c, a], [c, a, b]]
        for (const [x, y, z] of perms) {
            const xs = x === 0 ? [0] : [x, -x]
            const ys = y === 0 ? [0] : [y, -y]
            const zs = z === 0 ? [0] : [z, -z]
            for (const sx of xs)
                for (const sy of ys)
                    for (const sz of zs)
                        verts.push([sx, sy, sz])
        }
    }

    addEvenPerms(0, 1, 3 * phi)
    addEvenPerms(2, 1 + 2 * phi, phi)
    addEvenPerms(1, 2 + phi, 2 * phi)

    for (let i = 0; i < verts.length; i++) {
        const [x, y, z] = verts[i]
        const len = Math.sqrt(x * x + y * y + z * z)
        verts[i] = [x / len, y / len, z / len]
    }

    let minDist = Infinity
    for (let i = 0; i < verts.length; i++) {
        for (let j = i + 1; j < verts.length; j++) {
            const dx = verts[i][0] - verts[j][0]
            const dy = verts[i][1] - verts[j][1]
            const dz = verts[i][2] - verts[j][2]
            const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
            if (d < minDist) minDist = d
        }
    }

    const edges = []
    for (let i = 0; i < verts.length; i++) {
        for (let j = i + 1; j < verts.length; j++) {
            const dx = verts[i][0] - verts[j][0]
            const dy = verts[i][1] - verts[j][1]
            const dz = verts[i][2] - verts[j][2]
            const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
            if (d < minDist + 0.01) edges.push([i, j])
        }
    }

    // 12 pentagons: each icosahedron vertex maps to the 5 nearest truncated-ico vertices
    const icoRaw = [
        [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
        [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
        [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1]
    ]
    const icoVerts = icoRaw.map(([x, y, z]) => {
        const len = Math.sqrt(x * x + y * y + z * z)
        return [x / len, y / len, z / len]
    })

    const pentagons = []
    for (const iv of icoVerts) {
        const withDist = verts.map((v, i) => ({
            i,
            d: (v[0] - iv[0]) ** 2 + (v[1] - iv[1]) ** 2 + (v[2] - iv[2]) ** 2
        }))
        withDist.sort((a, b) => a.d - b.d)
        const idx = withDist.slice(0, 5).map(x => x.i)

        // Sort vertices by angle around the pentagon center
        const cx = idx.reduce((s, i) => s + verts[i][0], 0) / 5
        const cy = idx.reduce((s, i) => s + verts[i][1], 0) / 5
        const cz = idx.reduce((s, i) => s + verts[i][2], 0) / 5

        const nx = iv[0], ny = iv[1], nz = iv[2]
        const dx0 = verts[idx[0]][0] - cx
        const dy0 = verts[idx[0]][1] - cy
        const dz0 = verts[idx[0]][2] - cz
        const dot0 = dx0 * nx + dy0 * ny + dz0 * nz
        let tx = dx0 - dot0 * nx, ty = dy0 - dot0 * ny, tz = dz0 - dot0 * nz
        const tlen = Math.sqrt(tx * tx + ty * ty + tz * tz)
        tx /= tlen; ty /= tlen; tz /= tlen
        const ux = ny * tz - nz * ty
        const uy = nz * tx - nx * tz
        const uz = nx * ty - ny * tx

        idx.sort((a, b) => {
            const ax = verts[a][0] - cx, ay = verts[a][1] - cy, az = verts[a][2] - cz
            const bx = verts[b][0] - cx, by = verts[b][1] - cy, bz = verts[b][2] - cz
            return Math.atan2(ax * ux + ay * uy + az * uz, ax * tx + ay * ty + az * tz) -
                   Math.atan2(bx * ux + by * uy + bz * uz, bx * tx + by * ty + bz * tz)
        })

        pentagons.push(idx)
    }

    return { verts, edges, pentagons }
})()

/**
 * Ball Config & Designs
 */
const ballConfig = {
    design: 'classic',
    primaryColor: '#ffffff',
    secondaryColor: '#333333'
}

const BALL_DESIGNS = {
    classic: {
        drag: 1.0,
        randomnessBonus: 0
    },
    jabulani: {
        drag: 0.85,
        randomnessBonus: 0.3,
        stitchGeo: (r) => new THREE.OctahedronGeometry(r, 2),
        edgeThreshold: 8
    },
    brazuca: {
        drag: 1.1,
        randomnessBonus: -0.2,
        stitchGeo: (r) => {
            const box = new THREE.BoxGeometry(1, 1, 1, 8, 8, 8)
            const pos = box.attributes.position
            for (let i = 0; i < pos.count; i++) {
                const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i)
                const len = Math.sqrt(x * x + y * y + z * z)
                pos.setXYZ(i, x / len * r, y / len * r, z / len * r)
            }
            pos.needsUpdate = true
            box.computeVertexNormals()
            return box
        },
        edgeThreshold: 5
    }
}

function buildBallMesh(config, radius) {
    const group = new THREE.Group()
    const sphereGeo = new THREE.SphereGeometry(radius, 32, 32)
    const sphereMat = new THREE.MeshLambertMaterial({
        color: config.primaryColor,
        emissive: config.primaryColor,
        emissiveIntensity: 0.3
    })
    group.add(new THREE.Mesh(sphereGeo, sphereMat))

    const design = BALL_DESIGNS[config.design]

    if (config.design === 'classic') {
        const { verts, edges, pentagons } = TRUNC_ICO
        const r = radius * 1.003
        const tubeR = radius * 0.018
        const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

        // Seam tubes along curved Bezier paths on the sphere surface
        for (const [a, b] of edges) {
            const p1 = new THREE.Vector3(verts[a][0] * r, verts[a][1] * r, verts[a][2] * r)
            const p2 = new THREE.Vector3(verts[b][0] * r, verts[b][1] * r, verts[b][2] * r)
            const mid = p1.clone().add(p2).multiplyScalar(0.5)
            mid.normalize().multiplyScalar(r)
            const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2)
            group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 16, tubeR, 8, false), seamMat))
        }

        // Small spheres at each vertex to fill the gaps where tubes meet
        const jointGeo = new THREE.SphereGeometry(tubeR * 1.15, 8, 8)
        for (let i = 0; i < verts.length; i++) {
            const joint = new THREE.Mesh(jointGeo, seamMat)
            joint.position.set(verts[i][0] * r, verts[i][1] * r, verts[i][2] * r)
            group.add(joint)
        }

        // Filled pentagon faces — subdivided to follow sphere curvature
        const pentR = radius * 1.002
        const pentMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

        function projSphere(x, y, z) {
            const len = Math.sqrt(x * x + y * y + z * z)
            return [x / len * pentR, y / len * pentR, z / len * pentR]
        }

        const n = 4
        for (const pent of pentagons) {
            const center = [0, 0, 0]
            for (const idx of pent) {
                center[0] += verts[idx][0]; center[1] += verts[idx][1]; center[2] += verts[idx][2]
            }
            center[0] /= 5; center[1] /= 5; center[2] /= 5

            const positions = []
            for (let f = 0; f < 5; f++) {
                const vi = verts[pent[f]], vj = verts[pent[(f + 1) % 5]]
                const bary = (u, v) => projSphere(
                    (1 - u - v) * center[0] + u * vi[0] + v * vj[0],
                    (1 - u - v) * center[1] + u * vi[1] + v * vj[1],
                    (1 - u - v) * center[2] + u * vi[2] + v * vj[2]
                )
                const s = 1 / n
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n - i; j++) {
                        const a = bary(i * s, j * s)
                        const b = bary((i + 1) * s, j * s)
                        const c = bary(i * s, (j + 1) * s)
                        positions.push(...a, ...b, ...c)
                        if (i + j + 1 < n) {
                            const d = bary((i + 1) * s, (j + 1) * s)
                            positions.push(...b, ...d, ...c)
                        }
                    }
                }
            }
            const geo = new THREE.BufferGeometry()
            geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
            geo.computeVertexNormals()
            group.add(new THREE.Mesh(geo, pentMat))
        }
    } else {
        const edgesMat = new THREE.LineBasicMaterial({ color: config.secondaryColor })
        const stitchBase = design.stitchGeo(radius * 1.002)
        const edgesGeo = new THREE.EdgesGeometry(stitchBase, design.edgeThreshold)
        group.add(new THREE.LineSegments(edgesGeo, edgesMat))
    }

    return group
}

const ballRadius = 0.22
const penaltySpotZ = -11
const ballStartPosition = { x: 0, y: ballRadius, z: penaltySpotZ }

let ballGroup = buildBallMesh(ballConfig, ballRadius)
ballGroup.position.set(ballStartPosition.x, ballStartPosition.y, ballStartPosition.z)
scene.add(ballGroup)

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
 * Customizer Preview
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
    previewBall = buildBallMesh(ballConfig, previewRadius)
    custScene.add(previewBall)
}

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
            ballGroup.position.x = pathX[idx]
            ballGroup.position.y = pathY[idx]
            ballGroup.position.z = pathZ[idx]
        }
    }, 0)

    tl.to(ballGroup.rotation, {
        x: ballGroup.rotation.x - Math.PI * 4 * finalPower * debugParams.spinMultiplier,
        y: ballGroup.rotation.y + curve * Math.PI * 2 * debugParams.spinMultiplier,
        z: ballGroup.rotation.z + finalX * 0.5 * debugParams.spinMultiplier,
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

        resetTl.to(ballGroup.position, {
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

    custControls.update()
    custRenderer.render(custScene, custCamera)

    window.requestAnimationFrame(tick)
}

tick()

/**
 * Ball Customizer UI
 */
document.querySelectorAll('.design-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.design-btn').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        ballConfig.design = btn.dataset.design
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

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

    // ── Rotation-system face finder (pure array math, no THREE dependency) ──
    // Builds an adjacency list, sorts each vertex's neighbours CW-from-outside,
    // then traverses directed edges to collect all 20 hexagonal faces (length 6).
    const adjI = new Map()
    for (const [a, b] of edges) {
        if (!adjI.has(a)) adjI.set(a, [])
        if (!adjI.has(b)) adjI.set(b, [])
        adjI.get(a).push(b); adjI.get(b).push(a)
    }
    const sortedNbI = verts.map((v0, vi) => {
        const nb = adjI.get(vi)
        const n0 = verts[nb[0]]
        let tx = n0[0]-v0[0], ty = n0[1]-v0[1], tz = n0[2]-v0[2]
        const d = tx*v0[0]+ty*v0[1]+tz*v0[2]
        tx-=d*v0[0]; ty-=d*v0[1]; tz-=d*v0[2]
        const tl = Math.sqrt(tx*tx+ty*ty+tz*tz)
        tx/=tl; ty/=tl; tz/=tl
        const bx=ty*v0[2]-tz*v0[1], by=tz*v0[0]-tx*v0[2], bz=tx*v0[1]-ty*v0[0]
        return [...nb].sort((a,b) => {
            const pa=[verts[a][0]-v0[0],verts[a][1]-v0[1],verts[a][2]-v0[2]]
            const pb=[verts[b][0]-v0[0],verts[b][1]-v0[1],verts[b][2]-v0[2]]
            return Math.atan2(pa[0]*bx+pa[1]*by+pa[2]*bz, pa[0]*tx+pa[1]*ty+pa[2]*tz)
                 - Math.atan2(pb[0]*bx+pb[1]*by+pb[2]*bz, pb[0]*tx+pb[1]*ty+pb[2]*tz)
        })
    })
    const hexFaces = []
    const visitedI = new Set()
    for (const [ea, eb] of edges) {
        for (const [sa, sb] of [[ea,eb],[eb,ea]]) {
            const key = `${sa}-${sb}`
            if (visitedI.has(key)) continue
            const face = []; let u=sa, v=sb
            for (let i=0;i<8;i++) {
                visitedI.add(`${u}-${v}`); face.push(u)
                const nb=sortedNbI[v], idx=nb.indexOf(u)
                const nv=nb[(idx-1+nb.length)%nb.length]; u=v; v=nv
                if (u===sa&&v===sb) break
            }
            if (face.length===6) hexFaces.push(face)
        }
    }

    return { verts, edges, pentagons, hexFaces }
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
    classic: { drag: 1.0, randomnessBonus: 0 },
    jabulani: { drag: 0.85, randomnessBonus: 0.3 },
    brazuca: { drag: 1.1, randomnessBonus: -0.2 },
    trionda: { drag: 0.9, randomnessBonus: 0.1 }
}

function wavyGreatCircle(axisIdx, r, amplitude, freq, segments) {
    const points = []
    for (let i = 0; i <= segments; i++) {
        const t = (i / segments) * Math.PI * 2
        const wobble = amplitude * Math.sin(freq * t)
        let x, y, z
        if (axisIdx === 0) { x = Math.cos(t); y = Math.sin(t); z = wobble }
        else if (axisIdx === 1) { x = wobble; y = Math.cos(t); z = Math.sin(t) }
        else { x = Math.sin(t); y = wobble; z = Math.cos(t) }
        const len = Math.sqrt(x * x + y * y + z * z)
        points.push(new THREE.Vector3(x / len * r, y / len * r, z / len * r))
    }
    return points
}

// ─────────────────────────────────────────────────────────────────────────────
// Explode view helpers
// ─────────────────────────────────────────────────────────────────────────────
let custExplodeFactor = 0
let custExplodePanels = []   // [{ mesh: THREE.Group, centroidDir: THREE.Vector3 }]

function applyExplodeFactor(factor) {
    const dist = factor * 0.9   // in local-space units; previewRadius applied at call site
    custExplodePanels.forEach(({ mesh, centroidDir, baseRadius }) => {
        mesh.position.copy(centroidDir.clone().multiplyScalar(dist * baseRadius))
    })
}

// Build a spherical cap mesh from an ordered array of unit-sphere THREE.Vector3s.
function _buildSphericalPanel(unitVecs, radius, mat) {
    const n = unitVecs.length
    let cx=0,cy=0,cz=0
    unitVecs.forEach(v=>{cx+=v.x;cy+=v.y;cz+=v.z})
    const cl = Math.sqrt(cx*cx+cy*cy+cz*cz)
    const cen = new THREE.Vector3(cx/cl, cy/cl, cz/cl)
    const r = radius * 0.9995
    const sub = 16
    const pos = []
    for (let fi=0; fi<n; fi++) {
        const vb = unitVecs[fi], vc = unitVecs[(fi+1)%n]
        for (let i=0;i<sub;i++) {
            for (let j=0;j<sub-i;j++) {
                const bary=(t,s)=>new THREE.Vector3(
                    (1-t-s)*cen.x+t*vb.x+s*vc.x,
                    (1-t-s)*cen.y+t*vb.y+s*vc.y,
                    (1-t-s)*cen.z+t*vb.z+s*vc.z
                ).normalize().multiplyScalar(r)
                const p1=bary(i/sub,j/sub), p2=bary((i+1)/sub,j/sub), p3=bary(i/sub,(j+1)/sub)
                pos.push(p1.x,p1.y,p1.z, p2.x,p2.y,p2.z, p3.x,p3.y,p3.z)
                if (i+j+1<sub) {
                    const p4=bary((i+1)/sub,(j+1)/sub)
                    pos.push(p2.x,p2.y,p2.z, p4.x,p4.y,p4.z, p3.x,p3.y,p3.z)
                }
            }
        }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    geo.computeVertexNormals()
    return new THREE.Mesh(geo, mat)
}

function _buildPanelBorder(unitVecs, radius, mat) {
    const n = unitVecs.length, sub = 24
    const pts = []
    for (let fi=0;fi<n;fi++) {
        for (let s=0;s<=sub;s++) {
            const t=s/sub
            pts.push(unitVecs[fi].clone().lerp(unitVecs[(fi+1)%n],t).normalize().multiplyScalar(radius*1.001))
        }
    }
    pts.push(pts[0].clone())
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat)
}

function buildExplodedBall(config, radius) {
    const group = new THREE.Group()
    const panels = []

    // Ghost inner sphere so the interior isn't pitch-black when spread wide
    group.add(new THREE.Mesh(
        new THREE.SphereGeometry(radius*0.92, 20, 20),
        new THREE.MeshLambertMaterial({ color: 0x0a0a0a, side: THREE.BackSide,
            transparent: true, opacity: 0.55 })
    ))

    const fillMat = new THREE.MeshLambertMaterial({
        color: config.primaryColor, side: THREE.DoubleSide,
        emissive: config.primaryColor, emissiveIntensity: 0.15
    })
    const pentFillMat = new THREE.MeshLambertMaterial({
        color: config.secondaryColor, side: THREE.DoubleSide,
        emissive: config.secondaryColor, emissiveIntensity: 0.15
    })
    const borderMat = new THREE.LineBasicMaterial({ color: config.secondaryColor })

    function addPanel(uvecs, fillColor) {
        const mat = fillColor === 'black' ? pentFillMat.clone() : fillMat.clone()
        let cx=0,cy=0,cz=0
        uvecs.forEach(v=>{cx+=v.x;cy+=v.y;cz+=v.z})
        const cl=Math.sqrt(cx*cx+cy*cy+cz*cz)
        const centroidDir = new THREE.Vector3(cx/cl, cy/cl, cz/cl)
        const pg = new THREE.Group()
        pg.add(_buildSphericalPanel(uvecs, radius, mat))
        pg.add(_buildPanelBorder(uvecs, radius, borderMat))
        group.add(pg)
        panels.push({ mesh: pg, centroidDir, baseRadius: radius })
    }

    if (config.design === 'classic') {
        const { verts, pentagons, hexFaces } = TRUNC_ICO
        const v3d = verts.map(v => new THREE.Vector3(v[0], v[1], v[2]))
        pentagons.forEach(pf => addPanel(pf.map(i => v3d[i]), 'black'))
        hexFaces.forEach(hf => addPanel(hf.map(i => v3d[i])))

    } else if (config.design === 'jabulani') {
        const s = 1/Math.sqrt(3)
        const tv = [[s,s,s],[s,-s,-s],[-s,s,-s],[-s,-s,s]]
        const raw = []
        for (let i=0;i<4;i++) for (let j=i+1;j<4;j++) {
            const a=tv[i], b=tv[j]
            raw.push([(2*a[0]+b[0])/3,(2*a[1]+b[1])/3,(2*a[2]+b[2])/3],
                     [(a[0]+2*b[0])/3,(a[1]+2*b[1])/3,(a[2]+2*b[2])/3])
        }
        const jv = raw.map(v => { const l=Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]); return new THREE.Vector3(v[0]/l,v[1]/l,v[2]/l) })
        const jFaces = [[0,2,4],[1,6,8],[3,7,10],[5,9,11],
         [6,8,9,11,10,7],[2,4,5,11,10,3],[4,0,1,8,9,5],[0,2,3,7,6,1]]
        jFaces.forEach(fi => addPanel(fi.map(i => jv[i])))

    } else if (config.design === 'brazuca') {
        const cs = 1/Math.sqrt(3)
        const bv = [[cs,cs,cs],[cs,cs,-cs],[cs,-cs,cs],[cs,-cs,-cs],
                    [-cs,cs,cs],[-cs,cs,-cs],[-cs,-cs,cs],[-cs,-cs,-cs]]
            .map(v => new THREE.Vector3(v[0],v[1],v[2]))
        const bFaces = [[0,1,3,2],[4,6,7,5],[0,4,5,1],[2,3,7,6],[0,2,6,4],[1,5,7,3]]
        const ce = [[0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]]

        // Pre-compute S-curve for every directed cube edge (unit-sphere points)
        const sCurveSeg = 32
        const scMap = new Map()
        for (const [ai,bi] of ce) {
            const a = bv[ai], b = bv[bi]
            const omega = Math.acos(Math.min(1, a.dot(b))), sinO = Math.sin(omega)
            const edDir = b.clone().sub(a).normalize()
            const pts = []
            for (let i=0;i<=sCurveSeg;i++) {
                const t = i/sCurveSeg
                const p = a.clone().multiplyScalar(Math.sin((1-t)*omega)/sinO)
                    .add(b.clone().multiplyScalar(Math.sin(t*omega)/sinO))
                const rad = p.clone().normalize()
                const perp = new THREE.Vector3().crossVectors(rad, edDir).normalize()
                const taper = Math.sin(Math.PI*t)
                const raw = Math.sin(2*Math.PI*t)
                const sharp = Math.sign(raw)*Math.pow(Math.abs(raw),0.45)
                p.add(perp.multiplyScalar(0.50*sharp*taper))
                p.normalize()
                pts.push(p)
            }
            scMap.set(`${ai}-${bi}`, pts)
            scMap.set(`${bi}-${ai}`, [...pts].reverse())
        }
        function sampleSC(curve, t) {
            const idx = t*(curve.length-1)
            const i = Math.min(Math.floor(idx), curve.length-2)
            return curve[i].clone().lerp(curve[i+1], idx-i)
        }

        // Build each face as a Coons patch bounded by 4 S-curves
        const gridN = 24, rB = radius*0.9995
        bFaces.forEach(fi => {
            // fi = [v0, v1, v2, v3] in winding order
            // Coons patch edges:
            //   bottom(u): v0→v1   top(u): v3→v2   left(v): v0→v3   right(v): v1→v2
            const bottom = scMap.get(`${fi[0]}-${fi[1]}`)
            const rightC = scMap.get(`${fi[1]}-${fi[2]}`)
            const topC   = scMap.get(`${fi[3]}-${fi[2]}`)
            const leftC  = scMap.get(`${fi[0]}-${fi[3]}`)
            const P00=bv[fi[0]], P10=bv[fi[1]], P11=bv[fi[2]], P01=bv[fi[3]]

            const pos = []
            for (let iv=0;iv<gridN;iv++) {
                for (let iu=0;iu<gridN;iu++) {
                    const corners = [[iu/gridN,iv/gridN],[(iu+1)/gridN,iv/gridN],
                                     [(iu+1)/gridN,(iv+1)/gridN],[iu/gridN,(iv+1)/gridN]]
                    const vs = corners.map(([u,v]) => {
                        const bu=sampleSC(bottom,u), tu=sampleSC(topC,u)
                        const lv=sampleSC(leftC,v),  rv=sampleSC(rightC,v)
                        return new THREE.Vector3(
                            (1-v)*bu.x+v*tu.x+(1-u)*lv.x+u*rv.x
                              -(1-u)*(1-v)*P00.x-u*(1-v)*P10.x-u*v*P11.x-(1-u)*v*P01.x,
                            (1-v)*bu.y+v*tu.y+(1-u)*lv.y+u*rv.y
                              -(1-u)*(1-v)*P00.y-u*(1-v)*P10.y-u*v*P11.y-(1-u)*v*P01.y,
                            (1-v)*bu.z+v*tu.z+(1-u)*lv.z+u*rv.z
                              -(1-u)*(1-v)*P00.z-u*(1-v)*P10.z-u*v*P11.z-(1-u)*v*P01.z
                        ).normalize().multiplyScalar(rB)
                    })
                    pos.push(vs[0].x,vs[0].y,vs[0].z, vs[1].x,vs[1].y,vs[1].z, vs[2].x,vs[2].y,vs[2].z)
                    pos.push(vs[0].x,vs[0].y,vs[0].z, vs[2].x,vs[2].y,vs[2].z, vs[3].x,vs[3].y,vs[3].z)
                }
            }
            const geo = new THREE.BufferGeometry()
            geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
            geo.computeVertexNormals()

            let cx2=0,cy2=0,cz2=0
            fi.forEach(i => { cx2+=bv[i].x; cy2+=bv[i].y; cz2+=bv[i].z })
            const cl2 = Math.sqrt(cx2*cx2+cy2*cy2+cz2*cz2)
            const centroidDir = new THREE.Vector3(cx2/cl2, cy2/cl2, cz2/cl2)

            const pg = new THREE.Group()
            pg.add(new THREE.Mesh(geo, fillMat.clone()))

            // S-curved border line
            const bpts = []
            const curves = [scMap.get(`${fi[0]}-${fi[1]}`), scMap.get(`${fi[1]}-${fi[2]}`),
                            scMap.get(`${fi[2]}-${fi[3]}`), scMap.get(`${fi[3]}-${fi[0]}`)]
            for (const c of curves) for (const p of c) bpts.push(p.clone().multiplyScalar(radius*1.001))
            bpts.push(bpts[0].clone())
            pg.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bpts), borderMat))

            group.add(pg)
            panels.push({ mesh: pg, centroidDir, baseRadius: radius })
        })

    } else if (config.design === 'trionda') {
        const cs = 1/Math.sqrt(3)
        const tvo = [new THREE.Vector3(cs,cs,cs),new THREE.Vector3(cs,-cs,-cs),
                     new THREE.Vector3(-cs,cs,-cs),new THREE.Vector3(-cs,-cs,cs)]
        ;[[1,2,3],[0,2,3],[0,1,3],[0,1,2]].forEach(fi => addPanel(fi.map(i => tvo[i])))
    }

    return { group, panels }
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
    } else if (config.design === 'jabulani') {
        const seamR = radius * 1.003
        const tubeR = radius * 0.016
        const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

        const s = 1 / Math.sqrt(3)
        const tv = [[s,s,s],[s,-s,-s],[-s,s,-s],[-s,-s,s]]

        const raw = []
        for (let i = 0; i < 4; i++) {
            for (let j = i + 1; j < 4; j++) {
                const a = tv[i], b = tv[j]
                raw.push(
                    [(2*a[0]+b[0])/3, (2*a[1]+b[1])/3, (2*a[2]+b[2])/3],
                    [(a[0]+2*b[0])/3, (a[1]+2*b[1])/3, (a[2]+2*b[2])/3]
                )
            }
        }
        const verts = raw.map(v => {
            const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2])
            return [v[0]/len, v[1]/len, v[2]/len]
        })

        const triGroups = [
            { ci: 0, edges: [[0,2],[2,4],[4,0]] },
            { ci: 1, edges: [[1,6],[6,8],[8,1]] },
            { ci: 2, edges: [[3,7],[7,10],[10,3]] },
            { ci: 3, edges: [[5,9],[9,11],[11,5]] }
        ]
        const midEdges = [
            [0,1],[2,3],[4,5],[6,7],[8,9],[10,11]
        ]

        const seg = 48
        const triBow = 0.18
        const midBow = 0.15

        function makeSeam(ai, bi, bow) {
            const a = new THREE.Vector3(verts[ai][0], verts[ai][1], verts[ai][2])
            const b = new THREE.Vector3(verts[bi][0], verts[bi][1], verts[bi][2])
            const omega = Math.acos(Math.min(1, a.dot(b)))
            const sinO = Math.sin(omega)
            const edgeDir = b.clone().sub(a).normalize()
            const points = []
            for (let i = 0; i <= seg; i++) {
                const t = i / seg
                const p = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO)
                    .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinO))
                if (bow !== 0) {
                    const radial = p.clone().normalize()
                    const perp = new THREE.Vector3().crossVectors(radial, edgeDir).normalize()
                    p.add(perp.multiplyScalar(bow * Math.sin(Math.PI * t)))
                }
                p.normalize().multiplyScalar(seamR)
                points.push(p)
            }
            const curve = new THREE.CatmullRomCurve3(points, false)
            group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 48, tubeR, 8, false), seamMat))
        }

        for (const grp of triGroups) {
            const tc = new THREE.Vector3(tv[grp.ci][0], tv[grp.ci][1], tv[grp.ci][2])
            for (const [ai, bi] of grp.edges) {
                const a = new THREE.Vector3(verts[ai][0], verts[ai][1], verts[ai][2])
                const b = new THREE.Vector3(verts[bi][0], verts[bi][1], verts[bi][2])
                const mid = a.clone().add(b).multiplyScalar(0.5).normalize()
                const edgeDir = b.clone().sub(a).normalize()
                const perp = new THREE.Vector3().crossVectors(mid, edgeDir).normalize()
                const sign = perp.dot(tc) > 0 ? -1 : 1
                makeSeam(ai, bi, sign * triBow)
            }
        }

        for (const [ai, bi] of midEdges) {
            makeSeam(ai, bi, midBow)
        }

        const jointGeo = new THREE.SphereGeometry(tubeR * 1.3, 8, 8)
        for (const v of verts) {
            const joint = new THREE.Mesh(jointGeo, seamMat)
            joint.position.set(v[0] * seamR, v[1] * seamR, v[2] * seamR)
            group.add(joint)
        }
    } else if (config.design === 'trionda') {
        const seamR = radius * 1.003
        const tubeR = radius * 0.018
        const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

        const cs = 1 / Math.sqrt(3)
        const tv = [
            [cs, cs, cs], [cs, -cs, -cs], [-cs, cs, -cs], [-cs, -cs, cs]
        ]
        const te = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]]

        const amp = 0.55
        const seg = 64
        for (const [ai, bi] of te) {
            const a = new THREE.Vector3(tv[ai][0], tv[ai][1], tv[ai][2])
            const b = new THREE.Vector3(tv[bi][0], tv[bi][1], tv[bi][2])
            const omega = Math.acos(Math.min(1, a.dot(b)))
            const sinO = Math.sin(omega)
            const edgeDir = b.clone().sub(a).normalize()

            const points = []
            for (let i = 0; i <= seg; i++) {
                const t = i / seg
                const p = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO)
                    .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinO))
                const radial = p.clone().normalize()
                const perp = new THREE.Vector3().crossVectors(radial, edgeDir).normalize()
                const taper = Math.sin(Math.PI * t)
                const disp = Math.sin(2 * Math.PI * t)
                p.add(perp.multiplyScalar(amp * disp * taper))
                p.normalize().multiplyScalar(seamR)
                points.push(p)
            }

            const curve = new THREE.CatmullRomCurve3(points, false)
            group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, tubeR, 8, false), seamMat))
        }

        const jointGeo = new THREE.SphereGeometry(tubeR * 1.5, 10, 10)
        for (const v of tv) {
            const joint = new THREE.Mesh(jointGeo, seamMat)
            joint.position.set(v[0] * seamR, v[1] * seamR, v[2] * seamR)
            group.add(joint)
        }
    } else if (config.design === 'brazuca') {
        const seamR = radius * 1.003
        const tubeR = radius * 0.014
        const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

        const cs = 1 / Math.sqrt(3)
        const cv = [
            [cs,cs,cs],[cs,cs,-cs],[cs,-cs,cs],[cs,-cs,-cs],
            [-cs,cs,cs],[-cs,cs,-cs],[-cs,-cs,cs],[-cs,-cs,-cs]
        ]
        const ce = [
            [0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]
        ]

        const amp = 0.50
        const seg = 64

        for (const [ai, bi] of ce) {
            const a = new THREE.Vector3(cv[ai][0], cv[ai][1], cv[ai][2])
            const b = new THREE.Vector3(cv[bi][0], cv[bi][1], cv[bi][2])
            const omega = Math.acos(Math.min(1, a.dot(b)))
            const sinO = Math.sin(omega)
            const edgeDir = b.clone().sub(a).normalize()

            const points = []
            for (let i = 0; i <= seg; i++) {
                const t = i / seg
                const p = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO)
                    .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinO))
                const radial = p.clone().normalize()
                const perp = new THREE.Vector3().crossVectors(radial, edgeDir).normalize()
                const taper = Math.sin(Math.PI * t)
                const raw = Math.sin(2 * Math.PI * t)
                const sharp = Math.sign(raw) * Math.pow(Math.abs(raw), 0.45)
                p.add(perp.multiplyScalar(amp * sharp * taper))
                p.normalize().multiplyScalar(seamR)
                points.push(p)
            }
            const curve = new THREE.CatmullRomCurve3(points, false)
            group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, tubeR, 8, false), seamMat))
        }

        const jointGeo = new THREE.SphereGeometry(tubeR * 1.2, 8, 8)
        for (const v of cv) {
            const joint = new THREE.Mesh(jointGeo, seamMat)
            joint.position.set(v[0] * seamR, v[1] * seamR, v[2] * seamR)
            group.add(joint)
        }

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

// Flat-view 2D rotation: drag spins the layout group around the Z axis
// (the camera stays fixed on the Z axis; only the net rotates in-plane).
{
    let flatDragging = false
    let flatLastX = 0, flatLastY = 0
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
        const dy = e.clientY - flatLastY
        previewBall.rotation.z += dx * 0.01
        flatLastX = e.clientX
        flatLastY = e.clientY
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

let custViewMode = 'ball'

function buildFlatLayout(config) {
    const g = new THREE.Group()
    const fillMat = new THREE.MeshBasicMaterial({ color: config.primaryColor, side: THREE.DoubleSide })
    const lineMat = new THREE.LineBasicMaterial({ color: config.secondaryColor })

    // Shared: project panel corner vertices into its local tangent plane
    function flattenLocal(vIdxs, v3d, scale, nc) {
        if (!nc) {
            nc = new THREE.Vector3()
            vIdxs.forEach(i => nc.add(v3d[i]))
            nc.normalize()
        }
        const ref = Math.abs(nc.y) < 0.9 ? new THREE.Vector3(0,1,0) : new THREE.Vector3(1,0,0)
        const ux = new THREE.Vector3().crossVectors(ref, nc).normalize()
        const uy = new THREE.Vector3().crossVectors(nc, ux).normalize()
        return vIdxs.map(i => ({ vIdx: i, x: v3d[i].dot(ux)*scale, y: v3d[i].dot(uy)*scale }))
    }

    // Shared: rigid 2D unfold — attach childPts to parentPts along shared edge va-vb
    function unfold(parentPts, childPts, va, vb) {
        const pA = parentPts.find(p => p.vIdx === va), pB = parentPts.find(p => p.vIdx === vb)
        const cA = childPts.find(p => p.vIdx === va), cB = childPts.find(p => p.vIdx === vb)
        const angle = Math.atan2(pB.y - pA.y, pB.x - pA.x) - Math.atan2(cB.y - cA.y, cB.x - cA.x)
        const cos = Math.cos(angle), sin = Math.sin(angle)
        let pts = childPts.map(p => ({ vIdx: p.vIdx, x: cos*p.x - sin*p.y, y: sin*p.x + cos*p.y }))
        const rotA = pts.find(p => p.vIdx === va)
        const tx = pA.x - rotA.x, ty = pA.y - rotA.y
        pts = pts.map(p => ({ vIdx: p.vIdx, x: p.x + tx, y: p.y + ty }))
        const dx = pB.x - pA.x, dy = pB.y - pA.y, el = Math.sqrt(dx*dx + dy*dy)
        const nx = -dy/el, ny = dx/el
        const pCx = parentPts.reduce((s,p) => s+p.x, 0)/parentPts.length
        const pCy = parentPts.reduce((s,p) => s+p.y, 0)/parentPts.length
        const cCx = pts.reduce((s,p) => s+p.x, 0)/pts.length
        const cCy = pts.reduce((s,p) => s+p.y, 0)/pts.length
        if (((pCx-pA.x)*nx + (pCy-pA.y)*ny) * ((cCx-pA.x)*nx + (cCy-pA.y)*ny) > 0) {
            pts = pts.map(p => {
                const ddx = p.x-pA.x, ddy = p.y-pA.y, d2 = 2*(ddx*nx + ddy*ny)
                return { vIdx: p.vIdx, x: p.x - d2*nx, y: p.y - d2*ny }
            })
        }
        return pts
    }

    // Shared: draw a filled panel with curved/S-curved/straight edges
    // edgeTypeFn(vIdxA, vIdxB, i) => 'bow' | 'mid' | 'scurve' | 'straight'
    function drawPanel(pts, vIdxList, edgeTypeFn) {
        const n = pts.length
        const cx = pts.reduce((s,p) => s+p.x, 0)/n
        const cy = pts.reduce((s,p) => s+p.y, 0)/n
        const shape = new THREE.Shape()
        shape.moveTo(pts[0].x, pts[0].y)
        for (let i = 0; i < n; i++) {
            const a = pts[i], b = pts[(i+1)%n]
            const type = edgeTypeFn ? edgeTypeFn(vIdxList[i], vIdxList[(i+1)%n], i) : 'straight'
            if (type === 'straight') {
                shape.lineTo(b.x, b.y)
            } else {
                const ex = b.x-a.x, ey = b.y-a.y, el = Math.sqrt(ex*ex+ey*ey)
                const px = -ey/el, py = ex/el
                const mx = (a.x+b.x)/2, my = (a.y+b.y)/2
                const dot = px*(cx-mx) + py*(cy-my)
                if (type === 'scurve') {
                    const amp = el * 0.38
                    shape.bezierCurveTo(
                        a.x + ex*0.25 + px*amp, a.y + ey*0.25 + py*amp,
                        a.x + ex*0.75 - px*amp, a.y + ey*0.75 - py*amp,
                        b.x, b.y
                    )
                } else if (type === 'mid') {
                    const bow = (dot > 0 ? 1 : -1) * el * 0.28
                    shape.quadraticCurveTo(mx + px*bow, my + py*bow, b.x, b.y)
                } else {
                    const bow = (dot > 0 ? -1 : 1) * el * 0.28
                    shape.quadraticCurveTo(mx + px*bow, my + py*bow, b.x, b.y)
                }
            }
        }
        g.add(new THREE.Mesh(new THREE.ShapeGeometry(shape), fillMat.clone()))
        const lp = shape.getPoints(48).map(p => new THREE.Vector3(p.x, p.y, 0.01))
        lp.push(lp[0])
        g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(lp), lineMat))
    }

    // ═══════════════ JABULANI ═══════════════
    if (config.design === 'jabulani') {
        const fs = 1 / Math.sqrt(3)
        const tv = [[fs,fs,fs],[fs,-fs,-fs],[-fs,fs,-fs],[-fs,-fs,fs]]
        const raw = []
        for (let i = 0; i < 4; i++) {
            for (let j = i + 1; j < 4; j++) {
                const [a, b] = [tv[i], tv[j]]
                raw.push(
                    [(2*a[0]+b[0])/3,(2*a[1]+b[1])/3,(2*a[2]+b[2])/3],
                    [(a[0]+2*b[0])/3,(a[1]+2*b[1])/3,(a[2]+2*b[2])/3]
                )
            }
        }
        const v3d = raw.map(v => {
            const l = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
            return new THREE.Vector3(v[0]/l, v[1]/l, v[2]/l)
        })
        const midEdgePairs = [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]]
        function isMidEdge(a, b) {
            return midEdgePairs.some(([x,y]) => (a===x&&b===y)||(a===y&&b===x))
        }
        const panelDefs = [
            { id: 'T0', vIdxs: [0,2,4],         isTri: true  },
            { id: 'T1', vIdxs: [1,6,8],         isTri: true  },
            { id: 'T2', vIdxs: [3,7,10],        isTri: true  },
            { id: 'T3', vIdxs: [5,9,11],        isTri: true  },
            { id: 'H0', vIdxs: [6,8,9,11,10,7], isTri: false },
            { id: 'H1', vIdxs: [2,4,5,11,10,3], isTri: false },
            { id: 'H2', vIdxs: [4,0,1,8,9,5],   isTri: false },
            { id: 'H3', vIdxs: [0,2,3,7,6,1],   isTri: false },
        ]
        const scale = 1.5
        const localPts = {}
        panelDefs.forEach(p => { localPts[p.id] = flattenLocal(p.vIdxs, v3d, scale) })
        const netPts = {}
        netPts['T0'] = localPts['T0']
        netPts['H3'] = unfold(netPts['T0'], localPts['H3'], 0, 2)
        netPts['H1'] = unfold(netPts['T0'], localPts['H1'], 2, 4)
        netPts['H2'] = unfold(netPts['T0'], localPts['H2'], 4, 0)
        netPts['T2'] = unfold(netPts['H3'], localPts['T2'], 3, 7)
        netPts['T1'] = unfold(netPts['H3'], localPts['T1'], 6, 1)
        netPts['T3'] = unfold(netPts['H1'], localPts['T3'], 5, 11)
        netPts['H0'] = unfold(netPts['T1'], localPts['H0'], 6, 8)
        panelDefs.forEach(panel => {
            drawPanel(netPts[panel.id], panel.vIdxs, (va, vb) =>
                (!panel.isTri && isMidEdge(va, vb)) ? 'mid' : 'bow'
            )
        })

    // ═══════════════ TRIONDA ═══════════════
    } else if (config.design === 'trionda') {
        // 4 panels: each bounded by 3 S-curves on tetrahedral edges
        // Panel k = face opposite tv[k], vertices = the other 3 tv indices
        const cs = 1 / Math.sqrt(3)
        const tv = [[cs,cs,cs],[cs,-cs,-cs],[-cs,cs,-cs],[-cs,-cs,cs]]
        const v3d = tv.map(v => new THREE.Vector3(v[0], v[1], v[2]))
        const scale = 1.5
        const panelDefs = [
            { id: 'P0', vIdxs: [1,2,3] },
            { id: 'P1', vIdxs: [0,2,3] },
            { id: 'P2', vIdxs: [0,1,3] },
            { id: 'P3', vIdxs: [0,1,2] },
        ]
        const localPts = {}
        panelDefs.forEach((p, k) => {
            const nc = new THREE.Vector3(-tv[k][0], -tv[k][1], -tv[k][2]).normalize()
            localPts[p.id] = flattenLocal(p.vIdxs, v3d, scale, nc)
        })
        // Tetrahedron net: P3 at root, P0/P1/P2 unfolded from P3's edges
        const netPts = {}
        netPts['P3'] = localPts['P3']
        netPts['P0'] = unfold(netPts['P3'], localPts['P0'], 1, 2)
        netPts['P1'] = unfold(netPts['P3'], localPts['P1'], 0, 2)
        netPts['P2'] = unfold(netPts['P3'], localPts['P2'], 0, 1)
        panelDefs.forEach(panel => {
            drawPanel(netPts[panel.id], panel.vIdxs, () => 'scurve')
        })

    // ═══════════════ BRAZUCA ═══════════════
    } else if (config.design === 'brazuca') {
        // 6 cube-face panels, each bounded by 4 S-curves on cube edges
        // Net layout (cross):  F2 / F1 F4 F0 F5 / F3
        const cs = 1 / Math.sqrt(3)
        const cv = [
            [cs,cs,cs],[cs,cs,-cs],[cs,-cs,cs],[cs,-cs,-cs],
            [-cs,cs,cs],[-cs,cs,-cs],[-cs,-cs,cs],[-cs,-cs,-cs]
        ]
        const v3d = cv.map(v => new THREE.Vector3(v[0], v[1], v[2]))
        const scale = 1.2
        const faceDefs = [
            { id: 'F0', vIdxs: [0,1,3,2], nc: new THREE.Vector3(1,0,0)  },
            { id: 'F1', vIdxs: [4,6,7,5], nc: new THREE.Vector3(-1,0,0) },
            { id: 'F2', vIdxs: [0,4,5,1], nc: new THREE.Vector3(0,1,0)  },
            { id: 'F3', vIdxs: [2,3,7,6], nc: new THREE.Vector3(0,-1,0) },
            { id: 'F4', vIdxs: [0,2,6,4], nc: new THREE.Vector3(0,0,1)  },
            { id: 'F5', vIdxs: [1,5,7,3], nc: new THREE.Vector3(0,0,-1) },
        ]
        const localPts = {}
        faceDefs.forEach(f => { localPts[f.id] = flattenLocal(f.vIdxs, v3d, scale, f.nc) })
        // Cross net from F4 (+Z) center
        const netPts = {}
        netPts['F4'] = localPts['F4']
        netPts['F0'] = unfold(netPts['F4'], localPts['F0'], 0, 2)  // F4 right edge [0-2]
        netPts['F3'] = unfold(netPts['F4'], localPts['F3'], 2, 6)  // F4 bottom edge [2-6]
        netPts['F1'] = unfold(netPts['F4'], localPts['F1'], 6, 4)  // F4 left edge [6-4]
        netPts['F2'] = unfold(netPts['F4'], localPts['F2'], 4, 0)  // F4 top edge [4-0]
        netPts['F5'] = unfold(netPts['F0'], localPts['F5'], 1, 3)  // F0 right edge [1-3]
        faceDefs.forEach(face => {
            drawPanel(netPts[face.id], face.vIdxs, () => 'scurve')
        })

    // ═══════════════ CLASSIC ═══════════════
    } else if (config.design === 'classic') {
        const { verts, edges, pentagons, hexFaces } = TRUNC_ICO
        const v3d = verts.map(v => new THREE.Vector3(v[0], v[1], v[2]))
        const scale = 0.7

        // All 32 faces: 12 pentagons (length 5) + 20 hexagons (length 6)
        const allFaces = []
        pentagons.forEach((f, i) => allFaces.push({ id: `P${i}`, vIdxs: f, isPent: true }))
        hexFaces.forEach((f, i) => allFaces.push({ id: `H${i}`, vIdxs: f, isPent: false }))

        // Edge-key helper
        function ek(a,b) { return a<b ? `${a}-${b}` : `${b}-${a}` }

        // Build edge → face adjacency
        const edgeToFaces = new Map()
        allFaces.forEach((face, fi) => {
            const n = face.vIdxs.length
            for (let i=0;i<n;i++) {
                const key = ek(face.vIdxs[i], face.vIdxs[(i+1)%n])
                if (!edgeToFaces.has(key)) edgeToFaces.set(key, [])
                edgeToFaces.get(key).push(fi)
            }
        })

        // BFS unfold from face 0 (first pentagon) to place all 32 faces
        const localPts = {}, netPts = {}
        allFaces.forEach(f => { localPts[f.id] = flattenLocal(f.vIdxs, v3d, scale) })
        const placed = new Set()
        const queue = [0]
        placed.add(0)
        netPts[allFaces[0].id] = localPts[allFaces[0].id]

        while (queue.length > 0) {
            const ci = queue.shift()
            const cFace = allFaces[ci]
            const n = cFace.vIdxs.length
            for (let e=0;e<n;e++) {
                const va = cFace.vIdxs[e], vb = cFace.vIdxs[(e+1)%n]
                const key = ek(va, vb)
                const neighbors = edgeToFaces.get(key)
                if (!neighbors) continue
                for (const ni of neighbors) {
                    if (placed.has(ni)) continue
                    placed.add(ni)
                    const nFace = allFaces[ni]
                    netPts[nFace.id] = unfold(netPts[cFace.id], localPts[nFace.id], va, vb)
                    queue.push(ni)
                }
            }
        }

        const pentFlatMat = new THREE.MeshBasicMaterial({ color: config.secondaryColor, side: THREE.DoubleSide })
        allFaces.forEach(face => {
            if (!netPts[face.id]) return
            drawPanel(netPts[face.id], face.vIdxs, () => 'straight')
            if (face.isPent) {
                g.children[g.children.length - 2].material = pentFlatMat
            }
        })
    }

    return g
}

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
        // Disable 3D orbit — the flat layout is in the XY plane and the camera
        // stays on the Z axis. Pan/zoom only from OrbitControls; 2D spin is
        // handled by the separate flatDragRotate listener below.
        custControls.enableRotate = false
        custControls.enablePan = true
        custControls.minPolarAngle = Math.PI / 2
        custControls.maxPolarAngle = Math.PI / 2
        custControls.minDistance = 1
        custControls.maxDistance = 60
        custCamera.position.set(0, 0, ballConfig.design === 'classic' ? 18 : 9)
        custCamera.lookAt(0, 0, 0)
    } else {
        // 3D ball view — use exploded panels when factor > 0, normal ball otherwise
        custExplodePanels = []
        if (custExplodeFactor > 0) {
            const result = buildExplodedBall(ballConfig, previewRadius)
            previewBall = result.group
            custExplodePanels = result.panels
            applyExplodeFactor(custExplodeFactor)
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
    const explodeVal    = document.getElementById('explode-val')

    explodeSlider.addEventListener('input', (e) => {
        const prev = custExplodeFactor
        custExplodeFactor = parseFloat(e.target.value)
        explodeVal.textContent = Math.round(custExplodeFactor * 100) + '%'

        if (custViewMode === 'flat') return

        const crossedZero = (prev === 0) !== (custExplodeFactor === 0)
        if (crossedZero) {
            updateBall()
        } else if (custExplodeFactor > 0 && custExplodePanels.length > 0) {
            applyExplodeFactor(custExplodeFactor)
        }
        custControls.maxDistance = 3.0 + custExplodeFactor * 5.0
    })
}

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

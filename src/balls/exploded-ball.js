import * as THREE from 'three'
import { TRUNC_ICO } from './geometry/truncated-icosahedron.js'
import { buildSphericalPanel, buildPanelBorder } from './explode-helpers.js'
import { BRAZUCA_VERTICES, BRAZUCA_FACES, BRAZUCA_EDGES, generateBrazucaEdgeCurves } from './geometry/brazuca-geometry.js'
import { TRIONDA_VERTICES, TRIONDA_FACES, TRIONDA_EDGES, generateTriondaEdgeCurves } from './geometry/trionda-geometry.js'
import { JABULANI_VERTICES, JABULANI_FACES, generateJabulaniEdgeCurves } from './geometry/jabulani-geometry.js'

// --- Shared panel-building helpers for S-curve designs (Brazuca, Trionda) ---

/**
 * Builds a closed boundary loop from sequential edge curves of a face.
 * Excludes the last point of each edge to avoid duplicates at corners.
 */
function buildBoundaryLoop(faceVertexIndices, edgeCurveMap) {
    const n = faceVertexIndices.length
    const boundary = []
    for (let i = 0; i < n; i++) {
        const from = faceVertexIndices[i]
        const to = faceVertexIndices[(i + 1) % n]
        const curve = edgeCurveMap.get(`${from}-${to}`)
        for (let j = 0; j < curve.length - 1; j++) {
            boundary.push(curve[j])
        }
    }
    return boundary
}

/**
 * Computes the normalized centroid direction of a face from its vertex indices.
 */
function computeFaceCentroid(faceVertexIndices, vertices) {
    const centroid = new THREE.Vector3()
    for (const index of faceVertexIndices) {
        centroid.add(vertices[index])
    }
    return centroid.normalize()
}

/**
 * Recursively subdivides a triangle on the sphere surface.
 * Each level splits every triangle into 4, projecting midpoints onto the sphere.
 */
function subdivideSphericalTri(a, b, c, radius, depth, positions) {
    if (depth === 0) {
        positions.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z)
        return
    }
    const ab = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(radius)
    const bc = b.clone().add(c).multiplyScalar(0.5).normalize().multiplyScalar(radius)
    const ca = c.clone().add(a).multiplyScalar(0.5).normalize().multiplyScalar(radius)
    subdivideSphericalTri(a, ab, ca, radius, depth - 1, positions)
    subdivideSphericalTri(ab, b, bc, radius, depth - 1, positions)
    subdivideSphericalTri(ca, bc, c, radius, depth - 1, positions)
    subdivideSphericalTri(ab, bc, ca, radius, depth - 1, positions)
}

/**
 * Builds a smooth convex panel mesh using fan triangulation from the centroid
 * to the boundary, with recursive spherical subdivision for curvature.
 */
function buildConvexFanPanel({ boundary, centroidDir, panelRadius, borderRadius, fillMat, borderMat }) {
    const center = centroidDir.clone().multiplyScalar(panelRadius)
    const positions = []

    for (let j = 0; j < boundary.length; j++) {
        const a = boundary[j].clone().multiplyScalar(panelRadius)
        const b = boundary[(j + 1) % boundary.length].clone().multiplyScalar(panelRadius)
        subdivideSphericalTri(center, a, b, panelRadius, 4, positions)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.computeVertexNormals()

    const panelGroup = new THREE.Group()
    panelGroup.add(new THREE.Mesh(geometry, fillMat.clone()))

    const borderPoints = boundary.map(p => p.clone().multiplyScalar(borderRadius))
    borderPoints.push(borderPoints[0].clone())
    panelGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(borderPoints), borderMat))

    return panelGroup
}

/**
 * Exploded view for the customizer preview: separate panels along face normals.
 */
export function buildExplodedBall(config, radius) {
    const group = new THREE.Group()
    const panels = []

    group.add(new THREE.Mesh(
        new THREE.SphereGeometry(radius * 0.92, 20, 20),
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
        let cx = 0, cy = 0, cz = 0
        uvecs.forEach(v => { cx += v.x; cy += v.y; cz += v.z })
        const cl = Math.sqrt(cx * cx + cy * cy + cz * cz)
        const centroidDir = new THREE.Vector3(cx / cl, cy / cl, cz / cl)
        const pg = new THREE.Group()
        pg.add(buildSphericalPanel(uvecs, radius, mat))
        pg.add(buildPanelBorder(uvecs, radius, borderMat))
        group.add(pg)
        panels.push({ mesh: pg, centroidDir, baseRadius: radius })
    }

    if (config.design === 'classic') {
        const { verts, pentagons, hexFaces } = TRUNC_ICO
        const v3d = verts.map(v => new THREE.Vector3(v[0], v[1], v[2]))
        pentagons.forEach(pf => addPanel(pf.map(i => v3d[i]), 'black'))
        hexFaces.forEach(hf => addPanel(hf.map(i => v3d[i])))

    } else if (config.design === 'jabulani') {
        const edgeCurveMap = generateJabulaniEdgeCurves()
        const panelRadius = radius * 0.9995

        JABULANI_FACES.forEach(faceVertexIndices => {
            const boundary = buildBoundaryLoop(faceVertexIndices, edgeCurveMap)
            const centroidDir = computeFaceCentroid(faceVertexIndices, JABULANI_VERTICES)
            const panelGroup = buildConvexFanPanel({
                boundary, centroidDir, panelRadius, borderRadius: radius * 1.001, fillMat, borderMat
            })
            group.add(panelGroup)
            panels.push({ mesh: panelGroup, centroidDir, baseRadius: radius })
        })

    } else if (config.design === 'brazuca') {
        const edgeCurveMap = generateBrazucaEdgeCurves()
        const panelRadius = radius * 0.9995

        BRAZUCA_FACES.forEach(faceVertexIndices => {
            const boundary = buildBoundaryLoop(faceVertexIndices, edgeCurveMap)
            const centroidDir = computeFaceCentroid(faceVertexIndices, BRAZUCA_VERTICES)
            const panelGroup = buildConvexFanPanel({
                boundary, centroidDir, panelRadius, borderRadius: radius * 1.001, fillMat, borderMat
            })
            group.add(panelGroup)
            panels.push({ mesh: panelGroup, centroidDir, baseRadius: radius })
        })

    } else if (config.design === 'trionda') {
        const edgeCurveMap = generateTriondaEdgeCurves()
        const panelRadius = radius * 0.9995

        TRIONDA_FACES.forEach(faceVertexIndices => {
            const boundary = buildBoundaryLoop(faceVertexIndices, edgeCurveMap)
            const centroidDir = computeFaceCentroid(faceVertexIndices, TRIONDA_VERTICES)
            const panelGroup = buildConvexFanPanel({
                boundary, centroidDir, panelRadius, borderRadius: radius * 1.001, fillMat, borderMat
            })
            group.add(panelGroup)
            panels.push({ mesh: panelGroup, centroidDir, baseRadius: radius })
        })
    }

    return { group, panels }
}

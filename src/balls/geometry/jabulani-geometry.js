import * as THREE from 'three'

/**
 * Jabulani ball geometry: truncated tetrahedron with 8 panels (4 triangular + 4 hexagonal).
 *
 * 12 vertices derived from a tetrahedron by placing two points at 1/3 and 2/3
 * along each of the 6 tetrahedron edges, then projecting onto the unit sphere.
 */

const s = 1 / Math.sqrt(3)
const TETRA_VERTS = [[s,s,s],[s,-s,-s],[-s,s,-s],[-s,-s,s]]

const raw = []
for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
        const a = TETRA_VERTS[i], b = TETRA_VERTS[j]
        raw.push(
            [(2*a[0]+b[0])/3, (2*a[1]+b[1])/3, (2*a[2]+b[2])/3],
            [(a[0]+2*b[0])/3, (a[1]+2*b[1])/3, (a[2]+2*b[2])/3]
        )
    }
}

export const JABULANI_VERTICES = raw.map(v => {
    const l = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2])
    return new THREE.Vector3(v[0]/l, v[1]/l, v[2]/l)
})

// 4 triangular faces (each near a tetrahedron vertex)
// 4 hexagonal faces (each at a tetrahedron face center)
export const JABULANI_FACES = [
    [0, 2, 4],             // T0
    [1, 6, 8],             // T1
    [3, 7, 10],            // T2
    [5, 9, 11],            // T3
    [6, 8, 9, 11, 10, 7],  // H0
    [2, 4, 5, 11, 10, 3],  // H1
    [4, 0, 1, 8, 9, 5],    // H2
    [0, 2, 3, 7, 6, 1],    // H3
]

// Triangle groups map each tri face to its parent tetrahedron vertex index
const TRI_GROUPS = [
    { tetraIdx: 0, edges: [[0,2],[2,4],[4,0]] },
    { tetraIdx: 1, edges: [[1,6],[6,8],[8,1]] },
    { tetraIdx: 2, edges: [[3,7],[7,10],[10,3]] },
    { tetraIdx: 3, edges: [[5,9],[9,11],[11,5]] },
]

// Mid-edges connect paired vertices from the same tetrahedron edge
export const JABULANI_MID_EDGES = [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]]

const JABULANI_TRI_BOW = 0.18
const JABULANI_MID_BOW = 0.15
const JABULANI_SEGMENTS = 48

/**
 * Generates a bow-curved edge between two vertices on a unit sphere.
 * Unlike S-curves, bow curves have a single bulge in one direction.
 */
function generateBowCurve(a, b, bow, segments) {
    const omega = Math.acos(Math.min(1, a.dot(b)))
    const sinO = Math.sin(omega)
    const edgeDir = b.clone().sub(a).normalize()
    const points = []
    for (let i = 0; i <= segments; i++) {
        const t = i / segments
        const p = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO)
            .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinO))
        if (bow !== 0) {
            const radial = p.clone().normalize()
            const perp = new THREE.Vector3().crossVectors(radial, edgeDir).normalize()
            p.add(perp.multiplyScalar(bow * Math.sin(Math.PI * t)))
        }
        p.normalize()
        points.push(p)
    }
    return points
}

/**
 * Computes the signed bow for a triangle edge based on the tetrahedron vertex it belongs to.
 * The bow direction pushes away from the triangle's parent tetrahedron vertex.
 */
function computeTriEdgeBow(ai, bi, tetraIdx) {
    const a = JABULANI_VERTICES[ai]
    const b = JABULANI_VERTICES[bi]
    const mid = a.clone().add(b).multiplyScalar(0.5).normalize()
    const edgeDir = b.clone().sub(a).normalize()
    const perp = new THREE.Vector3().crossVectors(mid, edgeDir).normalize()
    const tc = new THREE.Vector3(TETRA_VERTS[tetraIdx][0], TETRA_VERTS[tetraIdx][1], TETRA_VERTS[tetraIdx][2])
    const sign = perp.dot(tc) > 0 ? -1 : 1
    return sign * JABULANI_TRI_BOW
}

/**
 * Generates edge curves for all Jabulani edges with proper bow directions.
 * Returns a Map keyed by "a-b" with arrays of unit-sphere Vector3 points.
 */
export function generateJabulaniEdgeCurves() {
    const map = new Map()

    // Triangle edges with directional bow
    for (const grp of TRI_GROUPS) {
        for (const [ai, bi] of grp.edges) {
            const key = `${ai}-${bi}`
            if (map.has(key)) continue
            const bow = computeTriEdgeBow(ai, bi, grp.tetraIdx)
            const forward = generateBowCurve(JABULANI_VERTICES[ai], JABULANI_VERTICES[bi], bow, JABULANI_SEGMENTS)
            map.set(`${ai}-${bi}`, forward)
            map.set(`${bi}-${ai}`, [...forward].reverse())
        }
    }

    // Mid-edges with fixed positive bow
    for (const [ai, bi] of JABULANI_MID_EDGES) {
        const forward = generateBowCurve(JABULANI_VERTICES[ai], JABULANI_VERTICES[bi], JABULANI_MID_BOW, JABULANI_SEGMENTS)
        map.set(`${ai}-${bi}`, forward)
        map.set(`${bi}-${ai}`, [...forward].reverse())
    }

    return map
}

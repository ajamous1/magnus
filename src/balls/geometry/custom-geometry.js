import * as THREE from 'three'
import { generateAllEdgeCurves, generateAllBowCurves, generateAllStraightCurves } from './edge-curves.js'
import { BRAZUCA_VERTICES, BRAZUCA_FACES, BRAZUCA_EDGES } from './brazuca-geometry.js'
import { TRIONDA_VERTICES, TRIONDA_FACES, TRIONDA_EDGES } from './trionda-geometry.js'
import { JABULANI_VERTICES, JABULANI_FACES } from './jabulani-geometry.js'
import { TRUNC_ICO } from './truncated-icosahedron.js'

/**
 * Jabulani edges extracted from its face definitions (unique undirected edges).
 */
const JABULANI_EDGES = (() => {
    const set = new Set()
    const edges = []
    for (const face of JABULANI_FACES) {
        for (let i = 0; i < face.length; i++) {
            const a = face[i], b = face[(i + 1) % face.length]
            const key = a < b ? `${a}-${b}` : `${b}-${a}`
            if (!set.has(key)) {
                set.add(key)
                edges.push([Math.min(a, b), Math.max(a, b)])
            }
        }
    }
    return edges
})()

/**
 * Topology registry: maps topology names to their vertex, face, and edge data.
 */
const TOPOLOGIES = {
    'cube': {
        vertices: BRAZUCA_VERTICES,
        faces: BRAZUCA_FACES,
        edges: BRAZUCA_EDGES,
    },
    'tetrahedron': {
        vertices: TRIONDA_VERTICES,
        faces: TRIONDA_FACES,
        edges: TRIONDA_EDGES,
    },
    'truncated-tetrahedron': {
        vertices: JABULANI_VERTICES,
        faces: JABULANI_FACES,
        edges: JABULANI_EDGES,
    },
    'truncated-icosahedron': {
        // Classic uses a different rendering path (buildSphericalPanel), so
        // vertices/faces/edges are provided but edge curves are not used.
        get vertices() {
            return TRUNC_ICO.verts.map(v => new THREE.Vector3(v[0], v[1], v[2]))
        },
        get faces() {
            return [...TRUNC_ICO.pentagons, ...TRUNC_ICO.hexFaces]
        },
        get edges() {
            return TRUNC_ICO.edges
        },
    },
}

const DEFAULT_SEGMENTS = 32

/**
 * Generates geometry data for a custom ball design.
 *
 * @param {object} customConfig - the ballConfig.custom object
 * @param {string} customConfig.topology - topology name
 * @param {string} customConfig.edgeStyle - 'straight' | 'bow' | 'scurve'
 * @param {number} customConfig.amplitude - edge displacement amplitude (0-1)
 * @param {number} customConfig.sharpness - S-curve sharpness exponent (0.1-1)
 * @returns {{ vertices: THREE.Vector3[], faces: number[][], edges: number[][], edgeCurveMap: Map, isClassicTopology: boolean }}
 */
export function generateCustomGeometry(customConfig) {
    const { topology, edgeStyle, amplitude, sharpness } = customConfig
    const topo = TOPOLOGIES[topology]
    if (!topo) throw new Error(`Unknown topology: ${topology}`)

    const vertices = topo.vertices
    const faces = topo.faces
    const edges = topo.edges
    const isClassicTopology = topology === 'truncated-icosahedron'

    // Classic topology only supports straight edges (rendered via buildSphericalPanel)
    if (isClassicTopology) {
        return { vertices, faces, edges, edgeCurveMap: null, isClassicTopology }
    }

    let edgeCurveMap
    if (edgeStyle === 'straight' || amplitude === 0) {
        edgeCurveMap = generateAllStraightCurves(vertices, edges, DEFAULT_SEGMENTS)
    } else if (edgeStyle === 'bow') {
        edgeCurveMap = generateAllBowCurves(vertices, edges, amplitude, DEFAULT_SEGMENTS)
    } else {
        // S-curve
        edgeCurveMap = generateAllEdgeCurves(vertices, edges, {
            amplitude,
            sharpness,
            segments: DEFAULT_SEGMENTS,
            taperFn: t => Math.sin(Math.PI * t),
        })
    }

    return { vertices, faces, edges, edgeCurveMap, isClassicTopology }
}

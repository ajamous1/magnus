import * as THREE from 'three'
import { generateAllEdgeCurves } from './edge-curves.js'

// --- Brazuca design constants ---
// The Brazuca (2014 World Cup) is based on a cube: 8 vertices, 6 quadrilateral faces, 12 edges.
// Each edge is displaced with an S-curve to create the characteristic 4-armed propeller panels.

const CUBE_COORDINATE = 1 / Math.sqrt(3)

export const BRAZUCA_VERTICES = [
    new THREE.Vector3( CUBE_COORDINATE,  CUBE_COORDINATE,  CUBE_COORDINATE),  // 0
    new THREE.Vector3( CUBE_COORDINATE,  CUBE_COORDINATE, -CUBE_COORDINATE),  // 1
    new THREE.Vector3( CUBE_COORDINATE, -CUBE_COORDINATE,  CUBE_COORDINATE),  // 2
    new THREE.Vector3( CUBE_COORDINATE, -CUBE_COORDINATE, -CUBE_COORDINATE),  // 3
    new THREE.Vector3(-CUBE_COORDINATE,  CUBE_COORDINATE,  CUBE_COORDINATE),  // 4
    new THREE.Vector3(-CUBE_COORDINATE,  CUBE_COORDINATE, -CUBE_COORDINATE),  // 5
    new THREE.Vector3(-CUBE_COORDINATE, -CUBE_COORDINATE,  CUBE_COORDINATE),  // 6
    new THREE.Vector3(-CUBE_COORDINATE, -CUBE_COORDINATE, -CUBE_COORDINATE),  // 7
]

export const BRAZUCA_FACES = [
    [0, 1, 3, 2],  // +X face
    [4, 6, 7, 5],  // -X face
    [0, 4, 5, 1],  // +Y face
    [2, 3, 7, 6],  // -Y face
    [0, 2, 6, 4],  // +Z face
    [1, 5, 7, 3],  // -Z face
]

export const BRAZUCA_EDGES = [
    [0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3],
    [2, 6], [3, 7], [4, 5], [4, 6], [5, 7], [6, 7],
]

// S-curve parameters for the Brazuca propeller shape
const BRAZUCA_AMPLITUDE = 0.72
const BRAZUCA_SHARPNESS = 0.35
const BRAZUCA_SEGMENTS = 32

function brazucaTaper(t) {
    return Math.sin(Math.PI * t)
}

/**
 * Generates the S-curved edge map for the Brazuca design.
 * Returns a Map keyed by "vertexA-vertexB" containing arrays of unit-sphere Vector3 points.
 * Each edge is also stored in reverse as "vertexB-vertexA".
 *
 * @returns {Map<string, THREE.Vector3[]>}
 */
export function generateBrazucaEdgeCurves() {
    return generateAllEdgeCurves(BRAZUCA_VERTICES, BRAZUCA_EDGES, {
        amplitude: BRAZUCA_AMPLITUDE,
        sharpness: BRAZUCA_SHARPNESS,
        segments: BRAZUCA_SEGMENTS,
        taperFn: brazucaTaper,
    })
}

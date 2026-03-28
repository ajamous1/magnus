import * as THREE from 'three'
import { generateAllEdgeCurves } from './edge-curves.js'

// --- Trionda design constants ---
// The Trionda (2026 World Cup) is based on a tetrahedron: 4 vertices, 4 triangular faces, 6 edges.
// Each edge is displaced with an S-curve to create 3-armed propeller panels.
// The taper function has a non-zero floor (0.35) so the lobe tips stay rounded instead of pinching to zero.

const TETRA_COORDINATE = 1 / Math.sqrt(3)

export const TRIONDA_VERTICES = [
    new THREE.Vector3( TETRA_COORDINATE,  TETRA_COORDINATE,  TETRA_COORDINATE),  // 0
    new THREE.Vector3( TETRA_COORDINATE, -TETRA_COORDINATE, -TETRA_COORDINATE),  // 1
    new THREE.Vector3(-TETRA_COORDINATE,  TETRA_COORDINATE, -TETRA_COORDINATE),  // 2
    new THREE.Vector3(-TETRA_COORDINATE, -TETRA_COORDINATE,  TETRA_COORDINATE),  // 3
]

export const TRIONDA_FACES = [
    [1, 2, 3],  // face opposite vertex 0
    [0, 2, 3],  // face opposite vertex 1
    [0, 1, 3],  // face opposite vertex 2
    [0, 1, 2],  // face opposite vertex 3
]

export const TRIONDA_EDGES = [
    [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3],
]

// S-curve parameters for the Trionda propeller shape
const TRIONDA_AMPLITUDE = 0.58
const TRIONDA_SHARPNESS = 0.7
const TRIONDA_SEGMENTS = 32
const TRIONDA_TAPER_FLOOR = 0.35

function triondaTaper(t) {
    // Non-zero floor at endpoints keeps the lobe tips rounded
    // instead of pinching to sharp points at the tetrahedron vertices
    return TRIONDA_TAPER_FLOOR + (1 - TRIONDA_TAPER_FLOOR) * Math.sin(Math.PI * t)
}

/**
 * Generates the S-curved edge map for the Trionda design.
 * Returns a Map keyed by "vertexA-vertexB" containing arrays of unit-sphere Vector3 points.
 * Each edge is also stored in reverse as "vertexB-vertexA".
 *
 * @returns {Map<string, THREE.Vector3[]>}
 */
export function generateTriondaEdgeCurves() {
    return generateAllEdgeCurves(TRIONDA_VERTICES, TRIONDA_EDGES, {
        amplitude: TRIONDA_AMPLITUDE,
        sharpness: TRIONDA_SHARPNESS,
        segments: TRIONDA_SEGMENTS,
        taperFn: triondaTaper,
    })
}

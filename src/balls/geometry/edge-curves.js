import * as THREE from 'three'

/**
 * Generates an S-curved edge between two vertices on a unit sphere.
 *
 * The curve follows a great-arc path from `a` to `b`, with a perpendicular
 * displacement that creates an S-shape (one side bulges one way, the other
 * side bulges the opposite way). The displacement is controlled by:
 *
 * - `amplitude`: how far the curve deviates from the great arc
 * - `sharpness`: power exponent on the sine wave (lower = sharper transitions)
 * - `taperFn`: envelope function that controls how the displacement fades at endpoints
 *
 * @param {THREE.Vector3} a - start vertex (should be normalized to unit sphere)
 * @param {THREE.Vector3} b - end vertex (should be normalized to unit sphere)
 * @param {object} options
 * @param {number} options.amplitude - perpendicular displacement strength (e.g. 0.72)
 * @param {number} options.sharpness - power exponent on sin wave (e.g. 0.35 = sharp, 0.7 = round)
 * @param {number} options.segments - number of sample points along the edge (e.g. 32)
 * @param {(t: number) => number} options.taperFn - envelope function, t in [0,1], returns [0,1]
 * @returns {THREE.Vector3[]} array of (segments + 1) normalized unit-sphere points
 */
function generateSphericalSCurve(a, b, { amplitude, sharpness, segments, taperFn }) {
    const omega = Math.acos(Math.min(1, a.dot(b)))
    const sinOmega = Math.sin(omega)
    const edgeDirection = b.clone().sub(a).normalize()

    const points = []
    for (let i = 0; i <= segments; i++) {
        const t = i / segments

        // Spherical linear interpolation (slerp) along the great arc
        const point = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinOmega)
            .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinOmega))

        // Perpendicular direction: cross product of radial and edge direction
        const radial = point.clone().normalize()
        const perpendicular = new THREE.Vector3().crossVectors(radial, edgeDirection).normalize()

        // S-curve displacement: sin(2πt) creates one full wave cycle per edge,
        // power exponent controls how sharp/round the transitions are,
        // taper controls how the displacement fades at the endpoints
        const rawSine = Math.sin(2 * Math.PI * t)
        const shapedSine = Math.sign(rawSine) * Math.pow(Math.abs(rawSine), sharpness)
        const taper = taperFn(t)
        const displacement = amplitude * shapedSine * taper

        point.add(perpendicular.multiplyScalar(displacement))
        point.normalize()
        points.push(point)
    }

    return points
}

/**
 * Generates edge curves for all edges of a polyhedron and stores them
 * in a Map keyed by "vertexA-vertexB". Also stores the reverse direction.
 *
 * @param {THREE.Vector3[]} vertices - array of unit-sphere vertices
 * @param {number[][]} edges - array of [vertexIndexA, vertexIndexB] pairs
 * @param {object} curveOptions - passed directly to generateSphericalSCurve
 * @returns {Map<string, THREE.Vector3[]>} edge curves keyed by "a-b" and "b-a"
 */
export function generateAllEdgeCurves(vertices, edges, curveOptions) {
    const edgeCurveMap = new Map()

    for (const [indexA, indexB] of edges) {
        const forward = generateSphericalSCurve(vertices[indexA], vertices[indexB], curveOptions)
        edgeCurveMap.set(`${indexA}-${indexB}`, forward)
        edgeCurveMap.set(`${indexB}-${indexA}`, [...forward].reverse())
    }

    return edgeCurveMap
}

import * as THREE from 'three'
import { TRIONDA_VERTICES, TRIONDA_EDGES, generateTriondaEdgeCurves } from '../geometry/trionda-geometry.js'

/**
 * Adds Trionda-style stitching (seam tubes + joint spheres) to the ball mesh group.
 * Uses the shared edge curves from trionda-geometry.js so the seams match
 * the exploded view and flat panel boundaries exactly.
 */
export function addTriondaDesign(group, config, radius) {
    const seamRadius = radius * 1.003
    const tubeRadius = radius * 0.018
    const seamMaterial = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    const edgeCurves = generateTriondaEdgeCurves()

    // Create a tube mesh along each S-curved edge
    for (const [indexA, indexB] of TRIONDA_EDGES) {
        const curvePoints = edgeCurves.get(`${indexA}-${indexB}`)
        const scaledPoints = curvePoints.map(p => p.clone().multiplyScalar(seamRadius))
        const curve = new THREE.CatmullRomCurve3(scaledPoints, false)
        const tubeGeometry = new THREE.TubeGeometry(curve, 64, tubeRadius, 8, false)
        group.add(new THREE.Mesh(tubeGeometry, seamMaterial))
    }

    // Joint spheres at each vertex
    const jointGeometry = new THREE.SphereGeometry(tubeRadius * 1.5, 10, 10)
    for (const vertex of TRIONDA_VERTICES) {
        const joint = new THREE.Mesh(jointGeometry, seamMaterial)
        joint.position.copy(vertex).normalize().multiplyScalar(seamRadius)
        group.add(joint)
    }
}

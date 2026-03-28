import * as THREE from 'three'
import { BRAZUCA_VERTICES, BRAZUCA_EDGES, generateBrazucaEdgeCurves } from '../geometry/brazuca-geometry.js'

/**
 * Adds Brazuca-style stitching (seam tubes + joint spheres) to the ball mesh group.
 * Uses the shared edge curves from brazuca-geometry.js so the seams match
 * the exploded view and flat panel boundaries exactly.
 */
export function addBrazucaDesign(group, config, radius) {
    const seamRadius = radius * 1.003
    const tubeRadius = radius * 0.014
    const seamMaterial = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    const edgeCurves = generateBrazucaEdgeCurves()

    // Create a tube mesh along each S-curved edge
    for (const [indexA, indexB] of BRAZUCA_EDGES) {
        const curvePoints = edgeCurves.get(`${indexA}-${indexB}`)
        const scaledPoints = curvePoints.map(p => p.clone().multiplyScalar(seamRadius))
        const curve = new THREE.CatmullRomCurve3(scaledPoints, false)
        const tubeGeometry = new THREE.TubeGeometry(curve, 64, tubeRadius, 8, false)
        group.add(new THREE.Mesh(tubeGeometry, seamMaterial))
    }

    // Joint spheres at each vertex to smooth the seam connections
    const jointGeometry = new THREE.SphereGeometry(tubeRadius * 1.2, 8, 8)
    for (const vertex of BRAZUCA_VERTICES) {
        const joint = new THREE.Mesh(jointGeometry, seamMaterial)
        joint.position.copy(vertex).normalize().multiplyScalar(seamRadius)
        group.add(joint)
    }
}

import * as THREE from 'three'
import { generateCustomGeometry } from '../geometry/custom-geometry.js'
import { addClassicDesign } from './classic.js'

/**
 * Adds custom-design stitching (seam tubes + joint spheres) to the ball mesh group.
 * Generates geometry from the custom config and renders seams along edge curves.
 */
export function addCustomDesign(group, config, radius) {
    const geo = generateCustomGeometry(config.custom)

    // Classic topology has its own stitching renderer
    if (geo.isClassicTopology) {
        addClassicDesign(group, config, radius)
        return
    }

    const seamRadius = radius * 1.003
    const tubeRadius = radius * 0.014
    const seamMaterial = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    for (const [indexA, indexB] of geo.edges) {
        const curvePoints = geo.edgeCurveMap.get(`${indexA}-${indexB}`)
        if (!curvePoints) continue
        const scaledPoints = curvePoints.map(p => p.clone().multiplyScalar(seamRadius))
        const curve = new THREE.CatmullRomCurve3(scaledPoints, false)
        const tubeGeometry = new THREE.TubeGeometry(curve, 64, tubeRadius, 8, false)
        group.add(new THREE.Mesh(tubeGeometry, seamMaterial))
    }

    const jointGeometry = new THREE.SphereGeometry(tubeRadius * 1.3, 8, 8)
    for (const vertex of geo.vertices) {
        const joint = new THREE.Mesh(jointGeometry, seamMaterial)
        joint.position.copy(vertex).normalize().multiplyScalar(seamRadius)
        group.add(joint)
    }
}

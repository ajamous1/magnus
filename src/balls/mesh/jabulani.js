import * as THREE from 'three'
import { JABULANI_VERTICES, generateJabulaniEdgeCurves } from '../geometry/jabulani-geometry.js'

export function addJabulaniDesign(group, config, radius) {
    const seamR = radius * 1.003
    const tubeR = radius * 0.016
    const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    const edgeCurveMap = generateJabulaniEdgeCurves()

    // Build seam tubes from all edge curves
    for (const [key, points] of edgeCurveMap) {
        // Only process forward edges (avoid duplicates from reverse keys)
        const [a, b] = key.split('-').map(Number)
        if (a > b) continue

        const scaledPoints = points.map(p => p.clone().multiplyScalar(seamR))
        const curve = new THREE.CatmullRomCurve3(scaledPoints, false)
        group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 48, tubeR, 8, false), seamMat))
    }

    // Joint spheres at each vertex
    const jointGeo = new THREE.SphereGeometry(tubeR * 1.3, 8, 8)
    for (const v of JABULANI_VERTICES) {
        const joint = new THREE.Mesh(jointGeo, seamMat)
        joint.position.set(v.x * seamR, v.y * seamR, v.z * seamR)
        group.add(joint)
    }
}

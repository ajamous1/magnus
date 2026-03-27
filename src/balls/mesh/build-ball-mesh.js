import * as THREE from 'three'
import { addClassicDesign } from './classic.js'
import { addJabulaniDesign } from './jabulani.js'
import { addTriondaDesign } from './trionda.js'
import { addBrazucaDesign } from './brazuca.js'

/**
 * Main in-game / preview ball: base sphere + design-specific seam geometry.
 */
export function buildBallMesh(config, radius) {
    const group = new THREE.Group()
    const sphereGeo = new THREE.SphereGeometry(radius, 32, 32)
    const sphereMat = new THREE.MeshLambertMaterial({
        color: config.primaryColor,
        emissive: config.primaryColor,
        emissiveIntensity: 0.3
    })
    group.add(new THREE.Mesh(sphereGeo, sphereMat))

    if (config.design === 'classic') {
        addClassicDesign(group, config, radius)
    } else if (config.design === 'jabulani') {
        addJabulaniDesign(group, config, radius)
    } else if (config.design === 'trionda') {
        addTriondaDesign(group, config, radius)
    } else if (config.design === 'brazuca') {
        addBrazucaDesign(group, config, radius)
    }

    return group
}

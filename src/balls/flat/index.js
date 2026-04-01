import * as THREE from 'three'
import { createFlatLayoutHelpers } from './helpers.js'
import { addJabulaniFlatLayout } from './jabulani-flat.js'
import { addTriondaFlatLayout } from './trionda-flat.js'
import { addBrazucaFlatLayout } from './brazuca-flat.js'
import { addClassicFlatLayout } from './classic-flat.js'
import { addCustomFlatLayout } from './custom-flat.js'

/**
 * 2D unfolded net view for the ball customizer (Panels mode).
 */
export function buildFlatLayout(config) {
    const g = new THREE.Group()
    const helpers = createFlatLayoutHelpers(g, config)

    if (config.design === 'jabulani') {
        addJabulaniFlatLayout(config, helpers)
    } else if (config.design === 'trionda') {
        addTriondaFlatLayout(config, helpers)
    } else if (config.design === 'brazuca') {
        addBrazucaFlatLayout(config, helpers)
    } else if (config.design === 'classic') {
        addClassicFlatLayout(g, config, helpers)
    } else if (config.design === 'custom') {
        if (config.custom.topology === 'truncated-icosahedron') {
            addClassicFlatLayout(g, config, helpers)
        } else {
            addCustomFlatLayout(config, helpers)
        }
    }

    return g
}

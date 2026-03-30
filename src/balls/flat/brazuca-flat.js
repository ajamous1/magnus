import * as THREE from 'three'
import { BRAZUCA_VERTICES, BRAZUCA_FACES } from '../geometry/brazuca-geometry.js'
import { getPanelColor } from '../panel-colors.js'

export function addBrazucaFlatLayout(config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers
    const scale = 1.9

    // Face normals for the 6 cube faces (used for tangent-plane projection)
    const faceNormals = [
        new THREE.Vector3(1, 0, 0),   // +X
        new THREE.Vector3(-1, 0, 0),  // -X
        new THREE.Vector3(0, 1, 0),   // +Y
        new THREE.Vector3(0, -1, 0),  // -Y
        new THREE.Vector3(0, 0, 1),   // +Z
        new THREE.Vector3(0, 0, -1),  // -Z
    ]

    const faceDefs = BRAZUCA_FACES.map((vIdxs, i) => ({
        id: `F${i}`,
        vIdxs,
        nc: faceNormals[i],
    }))

    const localPts = {}
    faceDefs.forEach(f => {
        localPts[f.id] = flattenLocal(f.vIdxs, BRAZUCA_VERTICES, scale, f.nc)
    })

    // Unfold the net: F4 is the root, others unfold from shared edges
    const netPts = {}
    netPts['F4'] = localPts['F4']
    netPts['F0'] = unfold(netPts['F4'], localPts['F0'], 0, 2)
    netPts['F3'] = unfold(netPts['F4'], localPts['F3'], 2, 6)
    netPts['F1'] = unfold(netPts['F4'], localPts['F1'], 6, 4)
    netPts['F2'] = unfold(netPts['F4'], localPts['F2'], 4, 0)
    netPts['F5'] = unfold(netPts['F0'], localPts['F5'], 1, 3)

    faceDefs.forEach((face, idx) => {
        const override = getPanelColor(config.design, idx)
        drawPanel(netPts[face.id], face.vIdxs, () => 'scurve', idx, override)
    })
}

import * as THREE from 'three'
import { TRIONDA_VERTICES, TRIONDA_FACES } from '../geometry/trionda-geometry.js'
import { getPanelColor } from '../panel-colors.js'

export function addTriondaFlatLayout(config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers
    const scale = 1.8

    const panelDefs = TRIONDA_FACES.map((vIdxs, i) => ({ id: `P${i}`, vIdxs }))

    // Face normals point away from the opposite vertex (for tangent-plane projection)
    const localPts = {}
    panelDefs.forEach((p, k) => {
        const oppositeVertex = TRIONDA_VERTICES[k]
        const nc = oppositeVertex.clone().negate().normalize()
        localPts[p.id] = flattenLocal(p.vIdxs, TRIONDA_VERTICES, scale, nc)
    })

    // Unfold the net: P3 is the root, others unfold from shared edges
    const netPts = {}
    netPts['P3'] = localPts['P3']
    netPts['P0'] = unfold(netPts['P3'], localPts['P0'], 1, 2)
    netPts['P1'] = unfold(netPts['P3'], localPts['P1'], 0, 2)
    netPts['P2'] = unfold(netPts['P3'], localPts['P2'], 0, 1)

    panelDefs.forEach((panel, idx) => {
        const override = getPanelColor(config.design, idx)
        drawPanel(netPts[panel.id], panel.vIdxs, () => 'scurve', idx, override)
    })
}

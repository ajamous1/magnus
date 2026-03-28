import * as THREE from 'three'
import { JABULANI_VERTICES, JABULANI_FACES, JABULANI_MID_EDGES } from '../geometry/jabulani-geometry.js'

export function addJabulaniFlatLayout(config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers

    function isMidEdge(a, b) {
        return JABULANI_MID_EDGES.some(([x,y]) => (a===x&&b===y)||(a===y&&b===x))
    }

    const panelDefs = [
        { id: 'T0', vIdxs: JABULANI_FACES[0], isTri: true  },
        { id: 'T1', vIdxs: JABULANI_FACES[1], isTri: true  },
        { id: 'T2', vIdxs: JABULANI_FACES[2], isTri: true  },
        { id: 'T3', vIdxs: JABULANI_FACES[3], isTri: true  },
        { id: 'H0', vIdxs: JABULANI_FACES[4], isTri: false },
        { id: 'H1', vIdxs: JABULANI_FACES[5], isTri: false },
        { id: 'H2', vIdxs: JABULANI_FACES[6], isTri: false },
        { id: 'H3', vIdxs: JABULANI_FACES[7], isTri: false },
    ]

    const scale = 1.5
    const localPts = {}
    panelDefs.forEach(p => { localPts[p.id] = flattenLocal(p.vIdxs, JABULANI_VERTICES, scale) })

    const netPts = {}
    netPts['T0'] = localPts['T0']
    netPts['H3'] = unfold(netPts['T0'], localPts['H3'], 0, 2)
    netPts['H1'] = unfold(netPts['T0'], localPts['H1'], 2, 4)
    netPts['H2'] = unfold(netPts['T0'], localPts['H2'], 4, 0)
    netPts['T2'] = unfold(netPts['H3'], localPts['T2'], 3, 7)
    netPts['T1'] = unfold(netPts['H3'], localPts['T1'], 6, 1)
    netPts['T3'] = unfold(netPts['H1'], localPts['T3'], 5, 11)
    netPts['H0'] = unfold(netPts['T1'], localPts['H0'], 6, 8)

    panelDefs.forEach(panel => {
        drawPanel(netPts[panel.id], panel.vIdxs, (va, vb) =>
            (!panel.isTri && isMidEdge(va, vb)) ? 'mid' : 'bow'
        )
    })
}

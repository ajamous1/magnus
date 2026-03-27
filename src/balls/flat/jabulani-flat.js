import * as THREE from 'three'

export function addJabulaniFlatLayout(config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers
    const fs = 1 / Math.sqrt(3)
    const tv = [[fs,fs,fs],[fs,-fs,-fs],[-fs,fs,-fs],[-fs,-fs,fs]]
    const raw = []
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            const [a, b] = [tv[i], tv[j]]
            raw.push(
                [(2*a[0]+b[0])/3,(2*a[1]+b[1])/3,(2*a[2]+b[2])/3],
                [(a[0]+2*b[0])/3,(a[1]+2*b[1])/3,(a[2]+2*b[2])/3]
            )
        }
    }
    const v3d = raw.map(v => {
        const l = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
        return new THREE.Vector3(v[0]/l, v[1]/l, v[2]/l)
    })
    const midEdgePairs = [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]]
    function isMidEdge(a, b) {
        return midEdgePairs.some(([x,y]) => (a===x&&b===y)||(a===y&&b===x))
    }
    const panelDefs = [
        { id: 'T0', vIdxs: [0,2,4],         isTri: true  },
        { id: 'T1', vIdxs: [1,6,8],         isTri: true  },
        { id: 'T2', vIdxs: [3,7,10],        isTri: true  },
        { id: 'T3', vIdxs: [5,9,11],        isTri: true  },
        { id: 'H0', vIdxs: [6,8,9,11,10,7], isTri: false },
        { id: 'H1', vIdxs: [2,4,5,11,10,3], isTri: false },
        { id: 'H2', vIdxs: [4,0,1,8,9,5],   isTri: false },
        { id: 'H3', vIdxs: [0,2,3,7,6,1],   isTri: false },
    ]
    const scale = 1.5
    const localPts = {}
    panelDefs.forEach(p => { localPts[p.id] = flattenLocal(p.vIdxs, v3d, scale) })
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

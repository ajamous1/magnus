import * as THREE from 'three'

export function addTriondaFlatLayout(config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers
    const cs = 1 / Math.sqrt(3)
    const tv = [[cs,cs,cs],[cs,-cs,-cs],[-cs,cs,-cs],[-cs,-cs,cs]]
    const v3d = tv.map(v => new THREE.Vector3(v[0], v[1], v[2]))
    const scale = 1.8
    const panelDefs = [
        { id: 'P0', vIdxs: [1,2,3] },
        { id: 'P1', vIdxs: [0,2,3] },
        { id: 'P2', vIdxs: [0,1,3] },
        { id: 'P3', vIdxs: [0,1,2] },
    ]
    const localPts = {}
    panelDefs.forEach((p, k) => {
        const nc = new THREE.Vector3(-tv[k][0], -tv[k][1], -tv[k][2]).normalize()
        localPts[p.id] = flattenLocal(p.vIdxs, v3d, scale, nc)
    })
    const netPts = {}
    netPts['P3'] = localPts['P3']
    netPts['P0'] = unfold(netPts['P3'], localPts['P0'], 1, 2)
    netPts['P1'] = unfold(netPts['P3'], localPts['P1'], 0, 2)
    netPts['P2'] = unfold(netPts['P3'], localPts['P2'], 0, 1)
    panelDefs.forEach(panel => {
        drawPanel(netPts[panel.id], panel.vIdxs, () => 'scurve')
    })
}

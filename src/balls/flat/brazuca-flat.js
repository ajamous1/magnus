import * as THREE from 'three'

export function addBrazucaFlatLayout(config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers
    const cs = 1 / Math.sqrt(3)
    const cv = [
        [cs,cs,cs],[cs,cs,-cs],[cs,-cs,cs],[cs,-cs,-cs],
        [-cs,cs,cs],[-cs,cs,-cs],[-cs,-cs,cs],[-cs,-cs,-cs]
    ]
    const v3d = cv.map(v => new THREE.Vector3(v[0], v[1], v[2]))
    const scale = 1.9
    const faceDefs = [
        { id: 'F0', vIdxs: [0,1,3,2], nc: new THREE.Vector3(1,0,0)  },
        { id: 'F1', vIdxs: [4,6,7,5], nc: new THREE.Vector3(-1,0,0) },
        { id: 'F2', vIdxs: [0,4,5,1], nc: new THREE.Vector3(0,1,0)  },
        { id: 'F3', vIdxs: [2,3,7,6], nc: new THREE.Vector3(0,-1,0) },
        { id: 'F4', vIdxs: [0,2,6,4], nc: new THREE.Vector3(0,0,1)  },
        { id: 'F5', vIdxs: [1,5,7,3], nc: new THREE.Vector3(0,0,-1) },
    ]
    const localPts = {}
    faceDefs.forEach(f => { localPts[f.id] = flattenLocal(f.vIdxs, v3d, scale, f.nc) })
    const netPts = {}
    netPts['F4'] = localPts['F4']
    netPts['F0'] = unfold(netPts['F4'], localPts['F0'], 0, 2)
    netPts['F3'] = unfold(netPts['F4'], localPts['F3'], 2, 6)
    netPts['F1'] = unfold(netPts['F4'], localPts['F1'], 6, 4)
    netPts['F2'] = unfold(netPts['F4'], localPts['F2'], 4, 0)
    netPts['F5'] = unfold(netPts['F0'], localPts['F5'], 1, 3)
    faceDefs.forEach(face => {
        drawPanel(netPts[face.id], face.vIdxs, () => 'scurve')
    })
}

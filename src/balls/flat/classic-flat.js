import * as THREE from 'three'
import { TRUNC_ICO } from '../geometry/truncated-icosahedron.js'
import { getPanelColor } from '../panel-colors.js'

export function addClassicFlatLayout(group, config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers
    const { verts, edges, pentagons, hexFaces } = TRUNC_ICO
    const v3d = verts.map(v => new THREE.Vector3(v[0], v[1], v[2]))
    const scale = 0.7

    const allFaces = []
    pentagons.forEach((f, i) => allFaces.push({ id: `P${i}`, vIdxs: f, isPent: true }))
    hexFaces.forEach((f, i) => allFaces.push({ id: `H${i}`, vIdxs: f, isPent: false }))

    function ek(a, b) { return a < b ? `${a}-${b}` : `${b}-${a}` }

    const edgeToFaces = new Map()
    allFaces.forEach((face, fi) => {
        const n = face.vIdxs.length
        for (let i = 0; i < n; i++) {
            const key = ek(face.vIdxs[i], face.vIdxs[(i + 1) % n])
            if (!edgeToFaces.has(key)) edgeToFaces.set(key, [])
            edgeToFaces.get(key).push(fi)
        }
    })

    const localPts = {}, netPts = {}
    allFaces.forEach(f => { localPts[f.id] = flattenLocal(f.vIdxs, v3d, scale) })
    const placed = new Set()
    const queue = [0]
    placed.add(0)
    netPts[allFaces[0].id] = localPts[allFaces[0].id]

    while (queue.length > 0) {
        const ci = queue.shift()
        const cFace = allFaces[ci]
        const n = cFace.vIdxs.length
        for (let e = 0; e < n; e++) {
            const va = cFace.vIdxs[e], vb = cFace.vIdxs[(e + 1) % n]
            const key = ek(va, vb)
            const neighbors = edgeToFaces.get(key)
            if (!neighbors) continue
            for (const ni of neighbors) {
                if (placed.has(ni)) continue
                placed.add(ni)
                const nFace = allFaces[ni]
                netPts[nFace.id] = unfold(netPts[cFace.id], localPts[nFace.id], va, vb)
                queue.push(ni)
            }
        }
    }

    allFaces.forEach((face, idx) => {
        if (!netPts[face.id]) return
        const override = getPanelColor(config.design, idx)
        drawPanel(netPts[face.id], face.vIdxs, () => 'straight', idx, override || (face.isPent ? config.secondaryColor : undefined))
    })
}

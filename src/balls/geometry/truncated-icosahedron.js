/**
 * Truncated icosahedron (classic soccer ball topology).
 * 60 vertices, 90 edges, 32 faces (12 pentagons + 20 hexagons).
 */
export const TRUNC_ICO = (() => {
    const phi = (1 + Math.sqrt(5)) / 2
    const verts = []

    function addEvenPerms(a, b, c) {
        const perms = [[a, b, c], [b, c, a], [c, a, b]]
        for (const [x, y, z] of perms) {
            const xs = x === 0 ? [0] : [x, -x]
            const ys = y === 0 ? [0] : [y, -y]
            const zs = z === 0 ? [0] : [z, -z]
            for (const sx of xs)
                for (const sy of ys)
                    for (const sz of zs)
                        verts.push([sx, sy, sz])
        }
    }

    addEvenPerms(0, 1, 3 * phi)
    addEvenPerms(2, 1 + 2 * phi, phi)
    addEvenPerms(1, 2 + phi, 2 * phi)

    for (let i = 0; i < verts.length; i++) {
        const [x, y, z] = verts[i]
        const len = Math.sqrt(x * x + y * y + z * z)
        verts[i] = [x / len, y / len, z / len]
    }

    let minDist = Infinity
    for (let i = 0; i < verts.length; i++) {
        for (let j = i + 1; j < verts.length; j++) {
            const dx = verts[i][0] - verts[j][0]
            const dy = verts[i][1] - verts[j][1]
            const dz = verts[i][2] - verts[j][2]
            const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
            if (d < minDist) minDist = d
        }
    }

    const edges = []
    for (let i = 0; i < verts.length; i++) {
        for (let j = i + 1; j < verts.length; j++) {
            const dx = verts[i][0] - verts[j][0]
            const dy = verts[i][1] - verts[j][1]
            const dz = verts[i][2] - verts[j][2]
            const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
            if (d < minDist + 0.01) edges.push([i, j])
        }
    }

    const icoRaw = [
        [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
        [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
        [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1]
    ]
    const icoVerts = icoRaw.map(([x, y, z]) => {
        const len = Math.sqrt(x * x + y * y + z * z)
        return [x / len, y / len, z / len]
    })

    const pentagons = []
    for (const iv of icoVerts) {
        const withDist = verts.map((v, i) => ({
            i,
            d: (v[0] - iv[0]) ** 2 + (v[1] - iv[1]) ** 2 + (v[2] - iv[2]) ** 2
        }))
        withDist.sort((a, b) => a.d - b.d)
        const idx = withDist.slice(0, 5).map(x => x.i)

        const cx = idx.reduce((s, i) => s + verts[i][0], 0) / 5
        const cy = idx.reduce((s, i) => s + verts[i][1], 0) / 5
        const cz = idx.reduce((s, i) => s + verts[i][2], 0) / 5

        const nx = iv[0], ny = iv[1], nz = iv[2]
        const dx0 = verts[idx[0]][0] - cx
        const dy0 = verts[idx[0]][1] - cy
        const dz0 = verts[idx[0]][2] - cz
        const dot0 = dx0 * nx + dy0 * ny + dz0 * nz
        let tx = dx0 - dot0 * nx, ty = dy0 - dot0 * ny, tz = dz0 - dot0 * nz
        const tlen = Math.sqrt(tx * tx + ty * ty + tz * tz)
        tx /= tlen; ty /= tlen; tz /= tlen
        const ux = ny * tz - nz * ty
        const uy = nz * tx - nx * tz
        const uz = nx * ty - ny * tx

        idx.sort((a, b) => {
            const ax = verts[a][0] - cx, ay = verts[a][1] - cy, az = verts[a][2] - cz
            const bx = verts[b][0] - cx, by = verts[b][1] - cy, bz = verts[b][2] - cz
            return Math.atan2(ax * ux + ay * uy + az * uz, ax * tx + ay * ty + az * tz) -
                   Math.atan2(bx * ux + by * uy + bz * uz, bx * tx + by * ty + bz * tz)
        })

        pentagons.push(idx)
    }

    const adjI = new Map()
    for (const [a, b] of edges) {
        if (!adjI.has(a)) adjI.set(a, [])
        if (!adjI.has(b)) adjI.set(b, [])
        adjI.get(a).push(b); adjI.get(b).push(a)
    }
    const sortedNbI = verts.map((v0, vi) => {
        const nb = adjI.get(vi)
        const n0 = verts[nb[0]]
        let tx = n0[0]-v0[0], ty = n0[1]-v0[1], tz = n0[2]-v0[2]
        const d = tx*v0[0]+ty*v0[1]+tz*v0[2]
        tx-=d*v0[0]; ty-=d*v0[1]; tz-=d*v0[2]
        const tl = Math.sqrt(tx*tx+ty*ty+tz*tz)
        tx/=tl; ty/=tl; tz/=tl
        const bx=ty*v0[2]-tz*v0[1], by=tz*v0[0]-tx*v0[2], bz=tx*v0[1]-ty*v0[0]
        return [...nb].sort((a,b) => {
            const pa=[verts[a][0]-v0[0],verts[a][1]-v0[1],verts[a][2]-v0[2]]
            const pb=[verts[b][0]-v0[0],verts[b][1]-v0[1],verts[b][2]-v0[2]]
            return Math.atan2(pa[0]*bx+pa[1]*by+pa[2]*bz, pa[0]*tx+pa[1]*ty+pa[2]*tz)
                 - Math.atan2(pb[0]*bx+pb[1]*by+pb[2]*bz, pb[0]*tx+pb[1]*ty+pb[2]*tz)
        })
    })
    const hexFaces = []
    const visitedI = new Set()
    for (const [ea, eb] of edges) {
        for (const [sa, sb] of [[ea,eb],[eb,ea]]) {
            const key = `${sa}-${sb}`
            if (visitedI.has(key)) continue
            const face = []; let u=sa, v=sb
            for (let i=0;i<8;i++) {
                visitedI.add(`${u}-${v}`); face.push(u)
                const nb=sortedNbI[v], idx=nb.indexOf(u)
                const nv=nb[(idx-1+nb.length)%nb.length]; u=v; v=nv
                if (u===sa&&v===sb) break
            }
            if (face.length===6) hexFaces.push(face)
        }
    }

    return { verts, edges, pentagons, hexFaces }
})()

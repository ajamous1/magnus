import * as THREE from 'three'

/**
 * Shared 2D net helpers: tangent-plane projection, rigid unfold, shape drawing.
 */
export function createFlatLayoutHelpers(group, config) {
    const fillMat = new THREE.MeshBasicMaterial({ color: config.primaryColor, side: THREE.DoubleSide })
    const lineMat = new THREE.LineBasicMaterial({ color: config.secondaryColor })

    function flattenLocal(vIdxs, v3d, scale, nc) {
        if (!nc) {
            nc = new THREE.Vector3()
            vIdxs.forEach(i => nc.add(v3d[i]))
            nc.normalize()
        }
        const ref = Math.abs(nc.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)
        const ux = new THREE.Vector3().crossVectors(ref, nc).normalize()
        const uy = new THREE.Vector3().crossVectors(nc, ux).normalize()
        return vIdxs.map(i => ({ vIdx: i, x: v3d[i].dot(ux) * scale, y: v3d[i].dot(uy) * scale }))
    }

    function unfold(parentPts, childPts, va, vb) {
        const pA = parentPts.find(p => p.vIdx === va), pB = parentPts.find(p => p.vIdx === vb)
        const cA = childPts.find(p => p.vIdx === va), cB = childPts.find(p => p.vIdx === vb)
        const angle = Math.atan2(pB.y - pA.y, pB.x - pA.x) - Math.atan2(cB.y - cA.y, cB.x - cA.x)
        const cos = Math.cos(angle), sin = Math.sin(angle)
        let pts = childPts.map(p => ({ vIdx: p.vIdx, x: cos * p.x - sin * p.y, y: sin * p.x + cos * p.y }))
        const rotA = pts.find(p => p.vIdx === va)
        const tx = pA.x - rotA.x, ty = pA.y - rotA.y
        pts = pts.map(p => ({ vIdx: p.vIdx, x: p.x + tx, y: p.y + ty }))
        const dx = pB.x - pA.x, dy = pB.y - pA.y, el = Math.sqrt(dx * dx + dy * dy)
        const nx = -dy / el, ny = dx / el
        const pCx = parentPts.reduce((s, p) => s + p.x, 0) / parentPts.length
        const pCy = parentPts.reduce((s, p) => s + p.y, 0) / parentPts.length
        const cCx = pts.reduce((s, p) => s + p.x, 0) / pts.length
        const cCy = pts.reduce((s, p) => s + p.y, 0) / pts.length
        if (((pCx - pA.x) * nx + (pCy - pA.y) * ny) * ((cCx - pA.x) * nx + (cCy - pA.y) * ny) > 0) {
            pts = pts.map(p => {
                const ddx = p.x - pA.x, ddy = p.y - pA.y, d2 = 2 * (ddx * nx + ddy * ny)
                return { vIdx: p.vIdx, x: p.x - d2 * nx, y: p.y - d2 * ny }
            })
        }
        return pts
    }

    function drawPanel(pts, vIdxList, edgeTypeFn, panelIndex, overrideColor) {
        const n = pts.length
        const cx = pts.reduce((s, p) => s + p.x, 0) / n
        const cy = pts.reduce((s, p) => s + p.y, 0) / n
        const shape = new THREE.Shape()
        shape.moveTo(pts[0].x, pts[0].y)
        for (let i = 0; i < n; i++) {
            const a = pts[i], b = pts[(i + 1) % n]
            const type = edgeTypeFn ? edgeTypeFn(vIdxList[i], vIdxList[(i + 1) % n], i) : 'straight'
            if (type === 'straight') {
                shape.lineTo(b.x, b.y)
            } else {
                const ex = b.x - a.x, ey = b.y - a.y, el = Math.sqrt(ex * ex + ey * ey)
                const px = -ey / el, py = ex / el
                const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2
                const dot = px * (cx - mx) + py * (cy - my)
                if (type === 'scurve') {
                    const amp = el * 0.52
                    const midX = (a.x + b.x) / 2, midY = (a.y + b.y) / 2
                    shape.bezierCurveTo(
                        a.x + ex * 0.08 + px * amp * 0.85, a.y + ey * 0.08 + py * amp * 0.85,
                        a.x + ex * 0.30 + px * amp, a.y + ey * 0.30 + py * amp,
                        midX, midY
                    )
                    shape.bezierCurveTo(
                        a.x + ex * 0.70 - px * amp, a.y + ey * 0.70 - py * amp,
                        a.x + ex * 0.92 - px * amp * 0.85, a.y + ey * 0.92 - py * amp * 0.85,
                        b.x, b.y
                    )
                } else if (type === 'mid') {
                    const bow = (dot > 0 ? 1 : -1) * el * 0.28
                    shape.quadraticCurveTo(mx + px * bow, my + py * bow, b.x, b.y)
                } else {
                    const bow = (dot > 0 ? -1 : 1) * el * 0.28
                    shape.quadraticCurveTo(mx + px * bow, my + py * bow, b.x, b.y)
                }
            }
        }
        const mat = fillMat.clone()
        if (overrideColor) mat.color.set(overrideColor)
        const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), mat)
        if (panelIndex != null) mesh.userData.panelIndex = panelIndex
        group.add(mesh)
        const lp = shape.getPoints(48).map(p => new THREE.Vector3(p.x, p.y, 0.01))
        lp.push(lp[0])
        const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(lp), lineMat)
        if (panelIndex != null) line.userData.panelIndex = panelIndex
        group.add(line)
    }

    return { fillMat, lineMat, flattenLocal, unfold, drawPanel }
}

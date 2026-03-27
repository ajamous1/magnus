import * as THREE from 'three'

/**
 * Spherical cap from polygon corners (great-arc triangles from face centroid).
 */
export function buildSphericalPanel(unitVecs, radius, mat) {
    const n = unitVecs.length
    let cx = 0, cy = 0, cz = 0
    unitVecs.forEach(v => { cx += v.x; cy += v.y; cz += v.z })
    const cl = Math.sqrt(cx * cx + cy * cy + cz * cz)
    const cen = new THREE.Vector3(cx / cl, cy / cl, cz / cl)
    const r = radius * 0.9995
    const sub = 16
    const pos = []
    for (let fi = 0; fi < n; fi++) {
        const vb = unitVecs[fi], vc = unitVecs[(fi + 1) % n]
        for (let i = 0; i < sub; i++) {
            for (let j = 0; j < sub - i; j++) {
                const bary = (t, s) => new THREE.Vector3(
                    (1 - t - s) * cen.x + t * vb.x + s * vc.x,
                    (1 - t - s) * cen.y + t * vb.y + s * vc.y,
                    (1 - t - s) * cen.z + t * vb.z + s * vc.z
                ).normalize().multiplyScalar(r)
                const p1 = bary(i / sub, j / sub), p2 = bary((i + 1) / sub, j / sub), p3 = bary(i / sub, (j + 1) / sub)
                pos.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z)
                if (i + j + 1 < sub) {
                    const p4 = bary((i + 1) / sub, (j + 1) / sub)
                    pos.push(p2.x, p2.y, p2.z, p4.x, p4.y, p4.z, p3.x, p3.y, p3.z)
                }
            }
        }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    geo.computeVertexNormals()
    return new THREE.Mesh(geo, mat)
}

export function buildPanelBorder(unitVecs, radius, mat) {
    const n = unitVecs.length, sub = 24
    const pts = []
    for (let fi = 0; fi < n; fi++) {
        for (let s = 0; s <= sub; s++) {
            const t = s / sub
            pts.push(unitVecs[fi].clone().lerp(unitVecs[(fi + 1) % n], t).normalize().multiplyScalar(radius * 1.001))
        }
    }
    pts.push(pts[0].clone())
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat)
}

/**
 * @param {Array<{ mesh: THREE.Group, centroidDir: THREE.Vector3, baseRadius: number }>} panels
 */
export function applyExplodeFactor(panels, factor) {
    const dist = factor * 0.9
    panels.forEach(({ mesh, centroidDir, baseRadius }) => {
        mesh.position.copy(centroidDir.clone().multiplyScalar(dist * baseRadius))
    })
}

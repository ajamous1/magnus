import * as THREE from 'three'
import { TRUNC_ICO } from './geometry/truncated-icosahedron.js'
import { buildSphericalPanel, buildPanelBorder } from './explode-helpers.js'

/**
 * Exploded view for the customizer preview: separate panels along face normals.
 */
export function buildExplodedBall(config, radius) {
    const group = new THREE.Group()
    const panels = []

    group.add(new THREE.Mesh(
        new THREE.SphereGeometry(radius * 0.92, 20, 20),
        new THREE.MeshLambertMaterial({ color: 0x0a0a0a, side: THREE.BackSide,
            transparent: true, opacity: 0.55 })
    ))

    const fillMat = new THREE.MeshLambertMaterial({
        color: config.primaryColor, side: THREE.DoubleSide,
        emissive: config.primaryColor, emissiveIntensity: 0.15
    })
    const pentFillMat = new THREE.MeshLambertMaterial({
        color: config.secondaryColor, side: THREE.DoubleSide,
        emissive: config.secondaryColor, emissiveIntensity: 0.15
    })
    const borderMat = new THREE.LineBasicMaterial({ color: config.secondaryColor })

    function addPanel(uvecs, fillColor) {
        const mat = fillColor === 'black' ? pentFillMat.clone() : fillMat.clone()
        let cx = 0, cy = 0, cz = 0
        uvecs.forEach(v => { cx += v.x; cy += v.y; cz += v.z })
        const cl = Math.sqrt(cx * cx + cy * cy + cz * cz)
        const centroidDir = new THREE.Vector3(cx / cl, cy / cl, cz / cl)
        const pg = new THREE.Group()
        pg.add(buildSphericalPanel(uvecs, radius, mat))
        pg.add(buildPanelBorder(uvecs, radius, borderMat))
        group.add(pg)
        panels.push({ mesh: pg, centroidDir, baseRadius: radius })
    }

    if (config.design === 'classic') {
        const { verts, pentagons, hexFaces } = TRUNC_ICO
        const v3d = verts.map(v => new THREE.Vector3(v[0], v[1], v[2]))
        pentagons.forEach(pf => addPanel(pf.map(i => v3d[i]), 'black'))
        hexFaces.forEach(hf => addPanel(hf.map(i => v3d[i])))

    } else if (config.design === 'jabulani') {
        const s = 1 / Math.sqrt(3)
        const tv = [[s,s,s],[s,-s,-s],[-s,s,-s],[-s,-s,s]]
        const raw = []
        for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) {
            const a = tv[i], b = tv[j]
            raw.push([(2*a[0]+b[0])/3,(2*a[1]+b[1])/3,(2*a[2]+b[2])/3],
                     [(a[0]+2*b[0])/3,(a[1]+2*b[1])/3,(a[2]+2*b[2])/3])
        }
        const jv = raw.map(v => {
            const l = Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
            return new THREE.Vector3(v[0]/l,v[1]/l,v[2]/l)
        })
        const jFaces = [[0,2,4],[1,6,8],[3,7,10],[5,9,11],
            [6,8,9,11,10,7],[2,4,5,11,10,3],[4,0,1,8,9,5],[0,2,3,7,6,1]]
        jFaces.forEach(fi => addPanel(fi.map(i => jv[i])))

    } else if (config.design === 'brazuca') {
        const cs = 1 / Math.sqrt(3)
        const bv = [[cs,cs,cs],[cs,cs,-cs],[cs,-cs,cs],[cs,-cs,-cs],
            [-cs,cs,cs],[-cs,cs,-cs],[-cs,-cs,cs],[-cs,-cs,-cs]]
            .map(v => new THREE.Vector3(v[0],v[1],v[2]))
        const bFaces = [[0,1,3,2],[4,6,7,5],[0,4,5,1],[2,3,7,6],[0,2,6,4],[1,5,7,3]]
        const ce = [[0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]]

        const sCurveSeg = 32
        const scMap = new Map()
        for (const [ai,bi] of ce) {
            const a = bv[ai], b = bv[bi]
            const omega = Math.acos(Math.min(1, a.dot(b))), sinO = Math.sin(omega)
            const edDir = b.clone().sub(a).normalize()
            const pts = []
            for (let i = 0; i <= sCurveSeg; i++) {
                const t = i / sCurveSeg
                const p = a.clone().multiplyScalar(Math.sin((1-t)*omega)/sinO)
                    .add(b.clone().multiplyScalar(Math.sin(t*omega)/sinO))
                const rad = p.clone().normalize()
                const perp = new THREE.Vector3().crossVectors(rad, edDir).normalize()
                const taper = Math.sin(Math.PI*t)
                const raw = Math.sin(2*Math.PI*t)
                const sharp = Math.sign(raw)*Math.pow(Math.abs(raw),0.35)
                p.add(perp.multiplyScalar(0.72*sharp*taper))
                p.normalize()
                pts.push(p)
            }
            scMap.set(`${ai}-${bi}`, pts)
            scMap.set(`${bi}-${ai}`, [...pts].reverse())
        }
        function sampleSC(curve, t) {
            const idx = t*(curve.length-1)
            const i = Math.min(Math.floor(idx), curve.length-2)
            return curve[i].clone().lerp(curve[i+1], idx-i)
        }

        const rB = radius * 0.9995
        bFaces.forEach(fi => {
            // Build boundary loop from the 4 edge curves
            const edgeCurves = [
                scMap.get(`${fi[0]}-${fi[1]}`),
                scMap.get(`${fi[1]}-${fi[2]}`),
                scMap.get(`${fi[2]}-${fi[3]}`),
                scMap.get(`${fi[3]}-${fi[0]}`)
            ]
            const boundary = []
            for (const c of edgeCurves) for (let j = 0; j < c.length - 1; j++) boundary.push(c[j])

            // Centroid pushed OUTWARD for convexity
            let cx2 = 0, cy2 = 0, cz2 = 0
            fi.forEach(i => { cx2 += bv[i].x; cy2 += bv[i].y; cz2 += bv[i].z })
            const cl2 = Math.sqrt(cx2*cx2 + cy2*cy2 + cz2*cz2)
            const centroidDir = new THREE.Vector3(cx2/cl2, cy2/cl2, cz2/cl2)
            // Place center ON the sphere surface (not inside) — this makes fan triangles convex
            const center = centroidDir.clone().multiplyScalar(rB)

            // Fan triangulation + midpoint subdivision for smooth convex surface
            // For each fan triangle, add a midpoint on the sphere to prevent flat facets
            const pos = []
            for (let j = 0; j < boundary.length; j++) {
                const a = boundary[j].clone().multiplyScalar(rB)
                const b = boundary[(j + 1) % boundary.length].clone().multiplyScalar(rB)
                // Midpoints projected onto sphere for convexity
                const midA = center.clone().add(a).multiplyScalar(0.5).normalize().multiplyScalar(rB)
                const midB = center.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(rB)
                const midAB = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(rB)
                // 4 sub-triangles instead of 1 flat triangle
                pos.push(center.x, center.y, center.z, midA.x, midA.y, midA.z, midB.x, midB.y, midB.z)
                pos.push(midA.x, midA.y, midA.z, a.x, a.y, a.z, midAB.x, midAB.y, midAB.z)
                pos.push(midB.x, midB.y, midB.z, midAB.x, midAB.y, midAB.z, b.x, b.y, b.z)
                pos.push(midA.x, midA.y, midA.z, midAB.x, midAB.y, midAB.z, midB.x, midB.y, midB.z)
            }
            const geo = new THREE.BufferGeometry()
            geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
            geo.computeVertexNormals()

            const pg = new THREE.Group()
            pg.add(new THREE.Mesh(geo, fillMat.clone()))

            // Border line from boundary (same points as fill, at slightly larger radius)
            const bpts = boundary.map(p => p.clone().multiplyScalar(radius * 1.001))
            bpts.push(bpts[0].clone())
            pg.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bpts), borderMat))

            group.add(pg)
            panels.push({ mesh: pg, centroidDir, baseRadius: radius })
        })

    } else if (config.design === 'trionda') {
        const cs = 1 / Math.sqrt(3)
        const tv = [
            new THREE.Vector3(cs, cs, cs), new THREE.Vector3(cs, -cs, -cs),
            new THREE.Vector3(-cs, cs, -cs), new THREE.Vector3(-cs, -cs, cs)
        ]
        const tFaces = [[1,2,3],[0,2,3],[0,1,3],[0,1,2]]
        const tEdges = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]]

        // Trionda S-curve edge generation
        const tSeg = 32
        const tAmp = 0.58
        const tScMap = new Map()
        for (const [ai, bi] of tEdges) {
            const a = tv[ai], b = tv[bi]
            const omega = Math.acos(Math.min(1, a.dot(b))), sinO = Math.sin(omega)
            const edDir = b.clone().sub(a).normalize()
            const pts = []
            for (let i = 0; i <= tSeg; i++) {
                const t = i / tSeg
                const p = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO)
                    .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinO))
                const rad = p.clone().normalize()
                const perp = new THREE.Vector3().crossVectors(rad, edDir).normalize()
                const taper = 0.35 + 0.65 * Math.sin(Math.PI * t)
                const raw = Math.sin(2 * Math.PI * t)
                const sharp = Math.sign(raw) * Math.pow(Math.abs(raw), 0.7)
                p.add(perp.multiplyScalar(tAmp * sharp * taper))
                p.normalize()
                pts.push(p)
            }
            tScMap.set(`${ai}-${bi}`, pts)
            tScMap.set(`${bi}-${ai}`, [...pts].reverse())
        }

        const rT = radius * 0.9995
        tFaces.forEach(fi => {
            // Boundary from 3 edge curves
            const edgeCurvesT = [
                tScMap.get(`${fi[0]}-${fi[1]}`),
                tScMap.get(`${fi[1]}-${fi[2]}`),
                tScMap.get(`${fi[2]}-${fi[0]}`)
            ]
            const boundaryT = []
            for (const c of edgeCurvesT) for (let j = 0; j < c.length - 1; j++) boundaryT.push(c[j])

            // Centroid on sphere
            let cx3 = 0, cy3 = 0, cz3 = 0
            fi.forEach(i => { cx3 += tv[i].x; cy3 += tv[i].y; cz3 += tv[i].z })
            const cl3 = Math.sqrt(cx3 * cx3 + cy3 * cy3 + cz3 * cz3)
            const centroidDirT = new THREE.Vector3(cx3 / cl3, cy3 / cl3, cz3 / cl3)
            const centerT = centroidDirT.clone().multiplyScalar(rT)

            // Fan triangulation with midpoint subdivision for convexity
            const posT = []
            for (let j = 0; j < boundaryT.length; j++) {
                const a2 = boundaryT[j].clone().multiplyScalar(rT)
                const b2 = boundaryT[(j + 1) % boundaryT.length].clone().multiplyScalar(rT)
                const midA = centerT.clone().add(a2).multiplyScalar(0.5).normalize().multiplyScalar(rT)
                const midB = centerT.clone().add(b2).multiplyScalar(0.5).normalize().multiplyScalar(rT)
                const midAB = a2.clone().add(b2).multiplyScalar(0.5).normalize().multiplyScalar(rT)
                posT.push(centerT.x, centerT.y, centerT.z, midA.x, midA.y, midA.z, midB.x, midB.y, midB.z)
                posT.push(midA.x, midA.y, midA.z, a2.x, a2.y, a2.z, midAB.x, midAB.y, midAB.z)
                posT.push(midB.x, midB.y, midB.z, midAB.x, midAB.y, midAB.z, b2.x, b2.y, b2.z)
                posT.push(midA.x, midA.y, midA.z, midAB.x, midAB.y, midAB.z, midB.x, midB.y, midB.z)
            }
            const geoT = new THREE.BufferGeometry()
            geoT.setAttribute('position', new THREE.Float32BufferAttribute(posT, 3))
            geoT.computeVertexNormals()

            const pgT = new THREE.Group()
            pgT.add(new THREE.Mesh(geoT, fillMat.clone()))

            const bptsT = boundaryT.map(p => p.clone().multiplyScalar(radius * 1.001))
            bptsT.push(bptsT[0].clone())
            pgT.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bptsT), borderMat))

            group.add(pgT)
            panels.push({ mesh: pgT, centroidDir: centroidDirT, baseRadius: radius })
        })
    }

    return { group, panels }
}

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
                const sharp = Math.sign(raw)*Math.pow(Math.abs(raw),0.45)
                p.add(perp.multiplyScalar(0.50*sharp*taper))
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

        const gridN = 24, rB = radius*0.9995
        bFaces.forEach(fi => {
            const bottom = scMap.get(`${fi[0]}-${fi[1]}`)
            const rightC = scMap.get(`${fi[1]}-${fi[2]}`)
            const topC   = scMap.get(`${fi[3]}-${fi[2]}`)
            const leftC  = scMap.get(`${fi[0]}-${fi[3]}`)
            const P00=bv[fi[0]], P10=bv[fi[1]], P11=bv[fi[2]], P01=bv[fi[3]]

            const pos = []
            for (let iv=0;iv<gridN;iv++) {
                for (let iu=0;iu<gridN;iu++) {
                    const corners = [[iu/gridN,iv/gridN],[(iu+1)/gridN,iv/gridN],
                        [(iu+1)/gridN,(iv+1)/gridN],[iu/gridN,(iv+1)/gridN]]
                    const vs = corners.map(([u,v]) => {
                        const bu=sampleSC(bottom,u), tu=sampleSC(topC,u)
                        const lv=sampleSC(leftC,v),  rv=sampleSC(rightC,v)
                        return new THREE.Vector3(
                            (1-v)*bu.x+v*tu.x+(1-u)*lv.x+u*rv.x
                              -(1-u)*(1-v)*P00.x-u*(1-v)*P10.x-u*v*P11.x-(1-u)*v*P01.x,
                            (1-v)*bu.y+v*tu.y+(1-u)*lv.y+u*rv.y
                              -(1-u)*(1-v)*P00.y-u*(1-v)*P10.y-u*v*P11.y-(1-u)*v*P01.y,
                            (1-v)*bu.z+v*tu.z+(1-u)*lv.z+u*rv.z
                              -(1-u)*(1-v)*P00.z-u*(1-v)*P10.z-u*v*P11.z-(1-u)*v*P01.z
                        ).normalize().multiplyScalar(rB)
                    })
                    pos.push(vs[0].x,vs[0].y,vs[0].z, vs[1].x,vs[1].y,vs[1].z, vs[2].x,vs[2].y,vs[2].z)
                    pos.push(vs[0].x,vs[0].y,vs[0].z, vs[2].x,vs[2].y,vs[2].z, vs[3].x,vs[3].y,vs[3].z)
                }
            }
            const geo = new THREE.BufferGeometry()
            geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
            geo.computeVertexNormals()

            let cx2=0,cy2=0,cz2=0
            fi.forEach(i => { cx2+=bv[i].x; cy2+=bv[i].y; cz2+=bv[i].z })
            const cl2 = Math.sqrt(cx2*cx2+cy2*cy2+cz2*cz2)
            const centroidDir = new THREE.Vector3(cx2/cl2, cy2/cl2, cz2/cl2)

            const pg = new THREE.Group()
            pg.add(new THREE.Mesh(geo, fillMat.clone()))

            const bpts = []
            const curves = [scMap.get(`${fi[0]}-${fi[1]}`), scMap.get(`${fi[1]}-${fi[2]}`),
                scMap.get(`${fi[2]}-${fi[3]}`), scMap.get(`${fi[3]}-${fi[0]}`)]
            for (const c of curves) for (const p of c) bpts.push(p.clone().multiplyScalar(radius*1.001))
            bpts.push(bpts[0].clone())
            pg.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bpts), borderMat))

            group.add(pg)
            panels.push({ mesh: pg, centroidDir, baseRadius: radius })
        })

    } else if (config.design === 'trionda') {
        const cs = 1/Math.sqrt(3)
        const tvo = [new THREE.Vector3(cs,cs,cs),new THREE.Vector3(cs,-cs,-cs),
            new THREE.Vector3(-cs,cs,-cs),new THREE.Vector3(-cs,-cs,cs)]
        ;[[1,2,3],[0,2,3],[0,1,3],[0,1,2]].forEach(fi => addPanel(fi.map(i => tvo[i])))
    }

    return { group, panels }
}

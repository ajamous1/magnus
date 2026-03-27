import * as THREE from 'three'

export function addJabulaniDesign(group, config, radius) {
    const seamR = radius * 1.003
    const tubeR = radius * 0.016
    const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    const s = 1 / Math.sqrt(3)
    const tv = [[s,s,s],[s,-s,-s],[-s,s,-s],[-s,-s,s]]

    const raw = []
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            const a = tv[i], b = tv[j]
            raw.push(
                [(2*a[0]+b[0])/3, (2*a[1]+b[1])/3, (2*a[2]+b[2])/3],
                [(a[0]+2*b[0])/3, (a[1]+2*b[1])/3, (a[2]+2*b[2])/3]
            )
        }
    }
    const verts = raw.map(v => {
        const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2])
        return [v[0]/len, v[1]/len, v[2]/len]
    })

    const triGroups = [
        { ci: 0, edges: [[0,2],[2,4],[4,0]] },
        { ci: 1, edges: [[1,6],[6,8],[8,1]] },
        { ci: 2, edges: [[3,7],[7,10],[10,3]] },
        { ci: 3, edges: [[5,9],[9,11],[11,5]] }
    ]
    const midEdges = [
        [0,1],[2,3],[4,5],[6,7],[8,9],[10,11]
    ]

    const seg = 48
    const triBow = 0.18
    const midBow = 0.15

    function makeSeam(ai, bi, bow) {
        const a = new THREE.Vector3(verts[ai][0], verts[ai][1], verts[ai][2])
        const b = new THREE.Vector3(verts[bi][0], verts[bi][1], verts[bi][2])
        const omega = Math.acos(Math.min(1, a.dot(b)))
        const sinO = Math.sin(omega)
        const edgeDir = b.clone().sub(a).normalize()
        const points = []
        for (let i = 0; i <= seg; i++) {
            const t = i / seg
            const p = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO)
                .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinO))
            if (bow !== 0) {
                const radial = p.clone().normalize()
                const perp = new THREE.Vector3().crossVectors(radial, edgeDir).normalize()
                p.add(perp.multiplyScalar(bow * Math.sin(Math.PI * t)))
            }
            p.normalize().multiplyScalar(seamR)
            points.push(p)
        }
        const curve = new THREE.CatmullRomCurve3(points, false)
        group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 48, tubeR, 8, false), seamMat))
    }

    for (const grp of triGroups) {
        const tc = new THREE.Vector3(tv[grp.ci][0], tv[grp.ci][1], tv[grp.ci][2])
        for (const [ai, bi] of grp.edges) {
            const a = new THREE.Vector3(verts[ai][0], verts[ai][1], verts[ai][2])
            const b = new THREE.Vector3(verts[bi][0], verts[bi][1], verts[bi][2])
            const mid = a.clone().add(b).multiplyScalar(0.5).normalize()
            const edgeDir = b.clone().sub(a).normalize()
            const perp = new THREE.Vector3().crossVectors(mid, edgeDir).normalize()
            const sign = perp.dot(tc) > 0 ? -1 : 1
            makeSeam(ai, bi, sign * triBow)
        }
    }

    for (const [ai, bi] of midEdges) {
        makeSeam(ai, bi, midBow)
    }

    const jointGeo = new THREE.SphereGeometry(tubeR * 1.3, 8, 8)
    for (const v of verts) {
        const joint = new THREE.Mesh(jointGeo, seamMat)
        joint.position.set(v[0] * seamR, v[1] * seamR, v[2] * seamR)
        group.add(joint)
    }
}

import * as THREE from 'three'

export function addBrazucaDesign(group, config, radius) {
    const seamR = radius * 1.003
    const tubeR = radius * 0.014
    const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    const cs = 1 / Math.sqrt(3)
    const cv = [
        [cs,cs,cs],[cs,cs,-cs],[cs,-cs,cs],[cs,-cs,-cs],
        [-cs,cs,cs],[-cs,cs,-cs],[-cs,-cs,cs],[-cs,-cs,-cs]
    ]
    const ce = [
        [0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]
    ]

    const amp = 0.50
    const seg = 64

    for (const [ai, bi] of ce) {
        const a = new THREE.Vector3(cv[ai][0], cv[ai][1], cv[ai][2])
        const b = new THREE.Vector3(cv[bi][0], cv[bi][1], cv[bi][2])
        const omega = Math.acos(Math.min(1, a.dot(b)))
        const sinO = Math.sin(omega)
        const edgeDir = b.clone().sub(a).normalize()

        const points = []
        for (let i = 0; i <= seg; i++) {
            const t = i / seg
            const p = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO)
                .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinO))
            const radial = p.clone().normalize()
            const perp = new THREE.Vector3().crossVectors(radial, edgeDir).normalize()
            const taper = Math.sin(Math.PI * t)
            const raw = Math.sin(2 * Math.PI * t)
            const sharp = Math.sign(raw) * Math.pow(Math.abs(raw), 0.45)
            p.add(perp.multiplyScalar(amp * sharp * taper))
            p.normalize().multiplyScalar(seamR)
            points.push(p)
        }
        const curve = new THREE.CatmullRomCurve3(points, false)
        group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, tubeR, 8, false), seamMat))
    }

    const jointGeo = new THREE.SphereGeometry(tubeR * 1.2, 8, 8)
    for (const v of cv) {
        const joint = new THREE.Mesh(jointGeo, seamMat)
        joint.position.set(v[0] * seamR, v[1] * seamR, v[2] * seamR)
        group.add(joint)
    }
}

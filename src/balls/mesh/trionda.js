import * as THREE from 'three'

export function addTriondaDesign(group, config, radius) {
    const seamR = radius * 1.003
    const tubeR = radius * 0.018
    const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    const cs = 1 / Math.sqrt(3)
    const tv = [
        [cs, cs, cs], [cs, -cs, -cs], [-cs, cs, -cs], [-cs, -cs, cs]
    ]
    const te = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]]

    // Trionda S-curve — matches exploded-ball.js trionda section exactly
    const tSeg = 32
    const amp = 0.58
    for (const [ai, bi] of te) {
        const a = new THREE.Vector3(tv[ai][0], tv[ai][1], tv[ai][2])
        const b = new THREE.Vector3(tv[bi][0], tv[bi][1], tv[bi][2])
        const omega = Math.acos(Math.min(1, a.dot(b)))
        const sinO = Math.sin(omega)
        const edgeDir = b.clone().sub(a).normalize()

        const points = []
        for (let i = 0; i <= tSeg; i++) {
            const t = i / tSeg
            const p = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO)
                .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinO))
            const radial = p.clone().normalize()
            const perp = new THREE.Vector3().crossVectors(radial, edgeDir).normalize()
            const taper = 0.35 + 0.65 * Math.sin(Math.PI * t)
            const raw = Math.sin(2 * Math.PI * t)
            const sharp = Math.sign(raw) * Math.pow(Math.abs(raw), 0.7)
            p.add(perp.multiplyScalar(amp * sharp * taper))
            p.normalize().multiplyScalar(seamR)
            points.push(p)
        }

        const curve = new THREE.CatmullRomCurve3(points, false)
        group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, tubeR, 8, false), seamMat))
    }

    const jointGeo = new THREE.SphereGeometry(tubeR * 1.5, 10, 10)
    for (const v of tv) {
        const joint = new THREE.Mesh(jointGeo, seamMat)
        joint.position.set(v[0] * seamR, v[1] * seamR, v[2] * seamR)
        group.add(joint)
    }
}

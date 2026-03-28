import * as THREE from 'three'

export function addBrazucaDesign(group, config, radius) {
    const seamR = radius * 1.003
    const tubeR = radius * 0.014
    const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    // Use the EXACT same cube vertices and S-curve algorithm as exploded-ball.js
    // so stitching matches panel boundaries perfectly
    const cs = 1 / Math.sqrt(3)
    const bv = [
        new THREE.Vector3(cs, cs, cs),
        new THREE.Vector3(cs, cs, -cs),
        new THREE.Vector3(cs, -cs, cs),
        new THREE.Vector3(cs, -cs, -cs),
        new THREE.Vector3(-cs, cs, cs),
        new THREE.Vector3(-cs, cs, -cs),
        new THREE.Vector3(-cs, -cs, cs),
        new THREE.Vector3(-cs, -cs, -cs)
    ]
    const ce = [
        [0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]
    ]

    // Generate edge curves with the same parameters as exploded-ball.js
    // sCurveSeg=32, amp=0.50, power=0.45 — identical to panel edge generation
    const sCurveSeg = 32
    const amp = 0.72
    for (const [ai, bi] of ce) {
        const a = bv[ai], b = bv[bi]
        const omega = Math.acos(Math.min(1, a.dot(b)))
        const sinO = Math.sin(omega)
        const edDir = b.clone().sub(a).normalize()

        const pts = []
        for (let i = 0; i <= sCurveSeg; i++) {
            const t = i / sCurveSeg
            const p = a.clone().multiplyScalar(Math.sin((1 - t) * omega) / sinO)
                .add(b.clone().multiplyScalar(Math.sin(t * omega) / sinO))
            const rad = p.clone().normalize()
            const perp = new THREE.Vector3().crossVectors(rad, edDir).normalize()
            const taper = Math.sin(Math.PI * t)
            const raw = Math.sin(2 * Math.PI * t)
            const sharp = Math.sign(raw) * Math.pow(Math.abs(raw), 0.35)
            p.add(perp.multiplyScalar(amp * sharp * taper))
            p.normalize().multiplyScalar(seamR)
            pts.push(p)
        }

        const curve = new THREE.CatmullRomCurve3(pts, false)
        group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 64, tubeR, 8, false), seamMat))
    }

    const jointGeo = new THREE.SphereGeometry(tubeR * 1.2, 8, 8)
    for (const v of bv) {
        const joint = new THREE.Mesh(jointGeo, seamMat)
        joint.position.copy(v).normalize().multiplyScalar(seamR)
        group.add(joint)
    }
}

import * as THREE from 'three'
import { TRUNC_ICO } from '../geometry/truncated-icosahedron.js'
import { getPanelColor } from '../panel-colors.js'

export function addClassicDesign(group, config, radius) {
    const { verts, edges, pentagons } = TRUNC_ICO
    const r = radius * 1.003
    const tubeR = radius * 0.018
    const seamMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    for (const [a, b] of edges) {
        const p1 = new THREE.Vector3(verts[a][0] * r, verts[a][1] * r, verts[a][2] * r)
        const p2 = new THREE.Vector3(verts[b][0] * r, verts[b][1] * r, verts[b][2] * r)
        const mid = p1.clone().add(p2).multiplyScalar(0.5)
        mid.normalize().multiplyScalar(r)
        const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2)
        group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 16, tubeR, 8, false), seamMat))
    }

    const jointGeo = new THREE.SphereGeometry(tubeR * 1.15, 8, 8)
    for (let i = 0; i < verts.length; i++) {
        const joint = new THREE.Mesh(jointGeo, seamMat)
        joint.position.set(verts[i][0] * r, verts[i][1] * r, verts[i][2] * r)
        group.add(joint)
    }

    const pentR = radius * 1.002
    const defaultPentMat = new THREE.MeshLambertMaterial({ color: config.secondaryColor })

    function projSphere(x, y, z) {
        const len = Math.sqrt(x * x + y * y + z * z)
        return [x / len * pentR, y / len * pentR, z / len * pentR]
    }

    const n = 4
    for (let pi = 0; pi < pentagons.length; pi++) {
        const pent = pentagons[pi]
        // Pentagons are panel indices 0..11 in the classic design
        const override = getPanelColor(config.design, pi)
        const pentMat = override
            ? new THREE.MeshLambertMaterial({ color: override })
            : defaultPentMat.clone()
        const center = [0, 0, 0]
        for (const idx of pent) {
            center[0] += verts[idx][0]; center[1] += verts[idx][1]; center[2] += verts[idx][2]
        }
        center[0] /= 5; center[1] /= 5; center[2] /= 5

        const positions = []
        for (let f = 0; f < 5; f++) {
            const vi = verts[pent[f]], vj = verts[pent[(f + 1) % 5]]
            const bary = (u, v) => projSphere(
                (1 - u - v) * center[0] + u * vi[0] + v * vj[0],
                (1 - u - v) * center[1] + u * vi[1] + v * vj[1],
                (1 - u - v) * center[2] + u * vi[2] + v * vj[2]
            )
            const s = 1 / n
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - i; j++) {
                    const a = bary(i * s, j * s)
                    const b = bary((i + 1) * s, j * s)
                    const c = bary(i * s, (j + 1) * s)
                    positions.push(...a, ...b, ...c)
                    if (i + j + 1 < n) {
                        const d = bary((i + 1) * s, (j + 1) * s)
                        positions.push(...b, ...d, ...c)
                    }
                }
            }
        }
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
        geo.computeVertexNormals()
        const pentMesh = new THREE.Mesh(geo, pentMat)
        pentMesh.userData.stitchPanelIndex = pi
        group.add(pentMesh)
    }
}

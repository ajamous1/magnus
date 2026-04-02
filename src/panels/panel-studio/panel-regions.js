import * as THREE from 'three'
import { TRUNC_ICO } from '../../balls/geometry/truncated-icosahedron.js'
import { BRAZUCA_VERTICES, BRAZUCA_FACES } from '../../balls/geometry/brazuca-geometry.js'
import { TRIONDA_VERTICES, TRIONDA_FACES } from '../../balls/geometry/trionda-geometry.js'
import { JABULANI_VERTICES, JABULANI_FACES } from '../../balls/geometry/jabulani-geometry.js'

function getFacesAndVerts(design) {
    if (design === 'classic') {
        const { verts, pentagons, hexFaces } = TRUNC_ICO
        const v3 = verts.map(v => new THREE.Vector3(v[0], v[1], v[2]).normalize())
        return { faces: [...pentagons, ...hexFaces], verts: v3 }
    }
    if (design === 'brazuca') {
        return { faces: BRAZUCA_FACES, verts: BRAZUCA_VERTICES.map(v => v.clone().normalize()) }
    }
    if (design === 'trionda') {
        return { faces: TRIONDA_FACES, verts: TRIONDA_VERTICES.map(v => v.clone().normalize()) }
    }
    if (design === 'jabulani') {
        return { faces: JABULANI_FACES, verts: JABULANI_VERTICES.map(v => v.clone().normalize()) }
    }
    return { faces: [], verts: [] }
}

function uvToDirection(u, v) {
    const phi = (1 - v) * Math.PI
    const theta = u * 2 * Math.PI - Math.PI
    return new THREE.Vector3(
        -Math.sin(phi) * Math.sin(theta),
        Math.cos(phi),
        -Math.sin(phi) * Math.cos(theta)
    )
}

function faceCentroid(face, verts) {
    const c = new THREE.Vector3()
    for (const idx of face) c.add(verts[idx])
    return c.normalize()
}

export function buildPanelRegionMap(design, width, height) {
    const { faces, verts } = getFacesAndVerts(design)
    if (faces.length === 0) return null

    const centroids = faces.map(f => faceCentroid(f, verts))
    const map = new Int16Array(width * height)

    for (let py = 0; py < height; py++) {
        const v = (py + 0.5) / height
        for (let px = 0; px < width; px++) {
            const u = (px + 0.5) / width
            const dir = uvToDirection(u, v)

            let bestIdx = 0
            let bestDot = -Infinity
            for (let i = 0; i < centroids.length; i++) {
                const d = dir.dot(centroids[i])
                if (d > bestDot) { bestDot = d; bestIdx = i }
            }
            map[py * width + px] = bestIdx
        }
    }

    return { map, panelCount: faces.length, centroids }
}

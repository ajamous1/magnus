import * as THREE from 'three'
import { TRUNC_ICO } from '../../balls/geometry/truncated-icosahedron.js'
import { BRAZUCA_VERTICES, BRAZUCA_FACES } from '../../balls/geometry/brazuca-geometry.js'
import { TRIONDA_VERTICES, TRIONDA_FACES } from '../../balls/geometry/trionda-geometry.js'
import { JABULANI_VERTICES, JABULANI_FACES } from '../../balls/geometry/jabulani-geometry.js'

function faceCentroid(face, verts) {
    const c = new THREE.Vector3()
    for (const idx of face) c.add(verts[idx])
    return c.normalize()
}

function buildSymmetryGroups(faces, verts) {
    const centroids = faces.map(f => faceCentroid(f, verts))
    const groups = []
    const assigned = new Set()
    const ANGLE_THRESHOLD = 0.1

    for (let i = 0; i < centroids.length; i++) {
        if (assigned.has(i)) continue
        const group = [i]
        assigned.add(i)

        const ci = centroids[i]
        const polarAngle = Math.acos(Math.abs(ci.y))

        for (let j = i + 1; j < centroids.length; j++) {
            if (assigned.has(j)) continue
            const cj = centroids[j]
            const polarJ = Math.acos(Math.abs(cj.y))
            if (Math.abs(polarAngle - polarJ) < ANGLE_THRESHOLD) {
                group.push(j)
                assigned.add(j)
            }
        }
        groups.push(group)
    }

    return groups
}

export function getSymmetryGroups(design) {
    if (design === 'classic') {
        const { verts, pentagons, hexFaces } = TRUNC_ICO
        const v3 = verts.map(v => new THREE.Vector3(v[0], v[1], v[2]).normalize())
        const allFaces = [...pentagons, ...hexFaces]
        return buildSymmetryGroups(allFaces, v3)
    }
    if (design === 'brazuca') {
        return buildSymmetryGroups(BRAZUCA_FACES, BRAZUCA_VERTICES.map(v => v.clone().normalize()))
    }
    if (design === 'trionda') {
        return buildSymmetryGroups(TRIONDA_FACES, TRIONDA_VERTICES.map(v => v.clone().normalize()))
    }
    if (design === 'jabulani') {
        return buildSymmetryGroups(JABULANI_FACES, JABULANI_VERTICES.map(v => v.clone().normalize()))
    }
    return []
}

export function applySymmetricFill(textureCanvas, panelIndex, color, design) {
    const groups = getSymmetryGroups(design)
    const group = groups.find(g => g.includes(panelIndex))
    if (!group) {
        textureCanvas.setPanelColor(panelIndex, color)
        return
    }
    for (const idx of group) {
        textureCanvas.setPanelColor(idx, color)
    }
}

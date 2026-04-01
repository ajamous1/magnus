import * as THREE from 'three'
import { BRAZUCA_VERTICES, BRAZUCA_FACES } from '../geometry/brazuca-geometry.js'
import { TRIONDA_VERTICES, TRIONDA_FACES } from '../geometry/trionda-geometry.js'
import { JABULANI_VERTICES, JABULANI_FACES, JABULANI_MID_EDGES } from '../geometry/jabulani-geometry.js'
import { addClassicFlatLayout } from './classic-flat.js'
import { getPanelColor } from '../panel-colors.js'

/**
 * Maps the custom edgeStyle to the flat-view edge type string used by drawPanel.
 */
function customEdgeType(edgeStyle) {
    if (edgeStyle === 'scurve') return 'scurve'
    if (edgeStyle === 'bow') return 'bow'
    return 'straight'
}

// --- Cube topology (Brazuca-style layout) ---

function addCubeFlat(config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers
    const scale = 1.9
    const edgeType = customEdgeType(config.custom.edgeStyle)

    const faceNormals = [
        new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1),
    ]

    const faceDefs = BRAZUCA_FACES.map((vIdxs, i) => ({ id: `F${i}`, vIdxs, nc: faceNormals[i] }))
    const localPts = {}
    faceDefs.forEach(f => { localPts[f.id] = flattenLocal(f.vIdxs, BRAZUCA_VERTICES, scale, f.nc) })

    const netPts = {}
    netPts['F4'] = localPts['F4']
    netPts['F0'] = unfold(netPts['F4'], localPts['F0'], 0, 2)
    netPts['F3'] = unfold(netPts['F4'], localPts['F3'], 2, 6)
    netPts['F1'] = unfold(netPts['F4'], localPts['F1'], 6, 4)
    netPts['F2'] = unfold(netPts['F4'], localPts['F2'], 4, 0)
    netPts['F5'] = unfold(netPts['F0'], localPts['F5'], 1, 3)

    faceDefs.forEach((face, idx) => {
        const override = getPanelColor(config.design, idx)
        drawPanel(netPts[face.id], face.vIdxs, () => edgeType, idx, override)
    })
}

// --- Tetrahedron topology (Trionda-style layout) ---

function addTetrahedronFlat(config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers
    const scale = 1.8
    const edgeType = customEdgeType(config.custom.edgeStyle)

    const panelDefs = TRIONDA_FACES.map((vIdxs, i) => ({ id: `P${i}`, vIdxs }))
    const localPts = {}
    panelDefs.forEach((p, k) => {
        const nc = TRIONDA_VERTICES[k].clone().negate().normalize()
        localPts[p.id] = flattenLocal(p.vIdxs, TRIONDA_VERTICES, scale, nc)
    })

    const netPts = {}
    netPts['P3'] = localPts['P3']
    netPts['P0'] = unfold(netPts['P3'], localPts['P0'], 1, 2)
    netPts['P1'] = unfold(netPts['P3'], localPts['P1'], 0, 2)
    netPts['P2'] = unfold(netPts['P3'], localPts['P2'], 0, 1)

    panelDefs.forEach((panel, idx) => {
        const override = getPanelColor(config.design, idx)
        drawPanel(netPts[panel.id], panel.vIdxs, () => edgeType, idx, override)
    })
}

// --- Truncated tetrahedron topology (Jabulani-style layout) ---

function addTruncTetraFlat(config, helpers) {
    const { flattenLocal, unfold, drawPanel } = helpers
    const scale = 1.5
    const edgeType = customEdgeType(config.custom.edgeStyle)

    function isMidEdge(a, b) {
        return JABULANI_MID_EDGES.some(([x, y]) => (a === x && b === y) || (a === y && b === x))
    }

    const panelDefs = [
        { id: 'T0', vIdxs: JABULANI_FACES[0], isTri: true },
        { id: 'T1', vIdxs: JABULANI_FACES[1], isTri: true },
        { id: 'T2', vIdxs: JABULANI_FACES[2], isTri: true },
        { id: 'T3', vIdxs: JABULANI_FACES[3], isTri: true },
        { id: 'H0', vIdxs: JABULANI_FACES[4], isTri: false },
        { id: 'H1', vIdxs: JABULANI_FACES[5], isTri: false },
        { id: 'H2', vIdxs: JABULANI_FACES[6], isTri: false },
        { id: 'H3', vIdxs: JABULANI_FACES[7], isTri: false },
    ]

    const localPts = {}
    panelDefs.forEach(p => { localPts[p.id] = flattenLocal(p.vIdxs, JABULANI_VERTICES, scale) })

    const netPts = {}
    netPts['T0'] = localPts['T0']
    netPts['H3'] = unfold(netPts['T0'], localPts['H3'], 0, 2)
    netPts['H1'] = unfold(netPts['T0'], localPts['H1'], 2, 4)
    netPts['H2'] = unfold(netPts['T0'], localPts['H2'], 4, 0)
    netPts['T2'] = unfold(netPts['H3'], localPts['T2'], 3, 7)
    netPts['T1'] = unfold(netPts['H3'], localPts['T1'], 6, 1)
    netPts['T3'] = unfold(netPts['H1'], localPts['T3'], 5, 11)
    netPts['H0'] = unfold(netPts['T1'], localPts['H0'], 6, 8)

    panelDefs.forEach((panel, idx) => {
        const override = getPanelColor(config.design, idx)
        drawPanel(netPts[panel.id], panel.vIdxs, (va, vb) => {
            // Mid-edges use a different bow direction in bow mode
            if (edgeType === 'bow' && !panel.isTri && isMidEdge(va, vb)) return 'mid'
            return edgeType
        }, idx, override)
    })
}

/**
 * Adds flat layout for a custom ball design, delegating to the appropriate
 * topology-specific layout with custom edge rendering.
 */
export function addCustomFlatLayout(config, helpers) {
    const topology = config.custom.topology

    if (topology === 'cube') {
        addCubeFlat(config, helpers)
    } else if (topology === 'tetrahedron') {
        addTetrahedronFlat(config, helpers)
    } else if (topology === 'truncated-tetrahedron') {
        addTruncTetraFlat(config, helpers)
    }
}

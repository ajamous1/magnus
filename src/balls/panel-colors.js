/**
 * Per-panel color override store, keyed by ball design.
 * Panel indices match face iteration order in buildExplodedBall and flat builders.
 */
const panelColorOverrides = {
    classic: {},
    jabulani: {},
    brazuca: {},
    trionda: {}
}

export function getPanelColor(design, panelIndex) {
    return panelColorOverrides[design]?.[panelIndex] ?? null
}

export function setPanelColor(design, panelIndex, color) {
    if (!panelColorOverrides[design]) panelColorOverrides[design] = {}
    panelColorOverrides[design][panelIndex] = color
}

export function clearPanelColors(design) {
    if (panelColorOverrides[design]) {
        panelColorOverrides[design] = {}
    }
}

export function hasOverrides(design) {
    return Object.keys(panelColorOverrides[design] || {}).length > 0
}

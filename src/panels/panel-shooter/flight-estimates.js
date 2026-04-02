/**
 * Heuristic Cd / Cl used for analytics readouts (not full CFD).
 * Design-aware: different ball constructions produce different drag/lift profiles.
 */
export function estimateCd(speed, designProps) {
    const baseCd = 0.43 - 0.21 / (1 + Math.exp(-(speed - 14) / 2.2)) + 0.05 / (1 + Math.exp(-(speed - 28) / 3))
    const dragScale = designProps?.drag || 1
    return baseCd * dragScale
}

export function estimateCl(spinParam, designProps) {
    const curveScale = designProps?.curveMultiplier || 1
    return Math.min(0.34 * curveScale, 0.62 * spinParam * curveScale)
}

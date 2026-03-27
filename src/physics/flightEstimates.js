/**
 * Heuristic Cd / Cl used for analytics readouts (not full CFD).
 */
export function estimateCd(speed) {
    return 0.43 - 0.21 / (1 + Math.exp(-(speed - 14) / 2.2)) + 0.05 / (1 + Math.exp(-(speed - 28) / 3))
}

export function estimateCl(spinParam) {
    return Math.min(0.34, 0.62 * spinParam)
}

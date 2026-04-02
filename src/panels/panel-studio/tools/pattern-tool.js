import { PATTERNS } from '../patterns/index.js'

export function createPatternTool({ getTextureCanvas, getActiveColor, getSecondaryColor, onPatternApplied }) {
    let selectedPatternId = null

    function applyPattern(patternId) {
        const tc = getTextureCanvas()
        if (!tc) return
        const pattern = PATTERNS.find(p => p.id === patternId)
        if (!pattern) return
        selectedPatternId = patternId
        pattern.apply(tc, getActiveColor(), getSecondaryColor())
        if (onPatternApplied) onPatternApplied()
    }

    function onClick() {}
    function onMove() {}
    function onDown() {}
    function onUp() {}

    return { onClick, onMove, onDown, onUp, applyPattern, name: 'pattern', getPatterns: () => PATTERNS }
}

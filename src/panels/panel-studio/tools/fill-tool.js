export function createFillTool({ getTextureCanvas, getActiveColor, onPanelFilled }) {
    function onClick(uv) {
        if (!uv) return
        const tc = getTextureCanvas()
        if (!tc) return
        const panel = tc.getPanelAtUV(uv.x, uv.y)
        if (panel < 0) return
        tc.setPanelColor(panel, getActiveColor())
        if (onPanelFilled) onPanelFilled(panel)
    }

    function onMove() {}
    function onDown() {}
    function onUp() {}

    return { onClick, onMove, onDown, onUp, name: 'fill' }
}

export function createSelectTool({ getTextureCanvas, onPanelHover, onPanelSelect }) {
    let hoveredPanel = -1

    function onMove(uv) {
        if (!uv) {
            if (hoveredPanel !== -1) {
                hoveredPanel = -1
                onPanelHover(-1)
            }
            return
        }
        const tc = getTextureCanvas()
        if (!tc) return
        const panel = tc.getPanelAtUV(uv.x, uv.y)
        if (panel !== hoveredPanel) {
            hoveredPanel = panel
            onPanelHover(panel)
        }
    }

    function onClick(uv) {
        if (!uv) {
            onPanelSelect(-1)
            return
        }
        const tc = getTextureCanvas()
        if (!tc) return
        const panel = tc.getPanelAtUV(uv.x, uv.y)
        onPanelSelect(panel)
    }

    function onDown() {}
    function onUp() {}

    return { onMove, onClick, onDown, onUp, name: 'select' }
}

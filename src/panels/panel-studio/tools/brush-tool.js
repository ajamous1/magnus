export function createBrushTool({ getTextureCanvas, getActiveColor, getBrushSize, getBrushOpacity }) {
    let painting = false
    let lastUV = null

    function stamp(uv) {
        const tc = getTextureCanvas()
        if (!tc || !uv) return
        const size = getBrushSize()
        const opacity = getBrushOpacity()
        tc.paintCircle(uv.x, uv.y, size, getActiveColor(), opacity)
    }

    function lerp(a, b, t) {
        return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }
    }

    function onDown(uv) {
        painting = true
        lastUV = uv ? { x: uv.x, y: uv.y } : null
        if (uv) stamp(uv)
    }

    function onMove(uv) {
        if (!painting || !uv) return
        if (lastUV) {
            const dx = uv.x - lastUV.x
            const dy = uv.y - lastUV.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            const step = getBrushSize() * 0.3
            if (dist > step) {
                const steps = Math.ceil(dist / step)
                for (let i = 1; i <= steps; i++) {
                    stamp(lerp(lastUV, uv, i / steps))
                }
            } else {
                stamp(uv)
            }
        } else {
            stamp(uv)
        }
        lastUV = { x: uv.x, y: uv.y }
    }

    function onUp() {
        painting = false
        lastUV = null
    }

    function onClick() {}

    return { onDown, onMove, onUp, onClick, name: 'brush' }
}

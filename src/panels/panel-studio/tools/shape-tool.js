export function createShapeTool({ getTextureCanvas, getActiveColor }) {
    let shapeType = 'circle'

    function drawShape(uv) {
        const tc = getTextureCanvas()
        if (!tc || !uv) return
        const color = getActiveColor()
        const ctx = tc.ctx
        const cx = uv.x * tc.TEX_W
        const cy = uv.y * tc.TEX_H

        ctx.save()
        ctx.fillStyle = color
        ctx.strokeStyle = color
        ctx.lineWidth = 3

        if (shapeType === 'circle') {
            const r = tc.TEX_W * 0.03
            ctx.beginPath()
            ctx.arc(cx, cy, r, 0, Math.PI * 2)
            ctx.fill()
        } else if (shapeType === 'ring') {
            const r = tc.TEX_W * 0.03
            ctx.lineWidth = tc.TEX_W * 0.005
            ctx.beginPath()
            ctx.arc(cx, cy, r, 0, Math.PI * 2)
            ctx.stroke()
        } else if (shapeType === 'star') {
            const r = tc.TEX_W * 0.03
            const spikes = 5
            ctx.beginPath()
            for (let i = 0; i < spikes * 2; i++) {
                const angle = (i * Math.PI) / spikes - Math.PI / 2
                const rad = i % 2 === 0 ? r : r * 0.4
                const px = cx + Math.cos(angle) * rad
                const py = cy + Math.sin(angle) * rad
                if (i === 0) ctx.moveTo(px, py)
                else ctx.lineTo(px, py)
            }
            ctx.closePath()
            ctx.fill()
        } else if (shapeType === 'stripe') {
            const w = tc.TEX_W * 0.06
            const h = tc.TEX_W * 0.008
            ctx.fillRect(cx - w / 2, cy - h / 2, w, h)
        }

        ctx.restore()
        tc.texture.needsUpdate = true
    }

    function onClick(uv) { drawShape(uv) }
    function onMove() {}
    function onDown() {}
    function onUp() {}

    return {
        onClick, onMove, onDown, onUp,
        name: 'shape',
        setShape(type) { shapeType = type },
        getShape() { return shapeType }
    }
}

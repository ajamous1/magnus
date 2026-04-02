export function createDecalTool({ getTextureCanvas }) {
    let decalImage = null
    let decalSize = 0.08

    function loadImage(file) {
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.onload = (e) => {
                const img = new Image()
                img.onload = () => {
                    decalImage = img
                    resolve(img)
                }
                img.src = e.target.result
            }
            reader.readAsDataURL(file)
        })
    }

    function placeDecal(uv) {
        if (!decalImage || !uv) return
        const tc = getTextureCanvas()
        if (!tc) return

        const ctx = tc.ctx
        const cx = uv.x * tc.TEX_W
        const cy = uv.y * tc.TEX_H
        const size = decalSize * tc.TEX_W
        const aspect = decalImage.width / decalImage.height

        const drawW = size
        const drawH = size / aspect

        ctx.save()
        ctx.drawImage(decalImage, cx - drawW / 2, cy - drawH / 2, drawW, drawH)
        ctx.restore()
        tc.texture.needsUpdate = true
    }

    function onClick(uv) { placeDecal(uv) }
    function onMove() {}
    function onDown() {}
    function onUp() {}

    return {
        onClick, onMove, onDown, onUp,
        name: 'decal',
        loadImage,
        setSize(s) { decalSize = s },
        hasImage() { return !!decalImage }
    }
}

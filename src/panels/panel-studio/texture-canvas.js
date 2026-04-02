import * as THREE from 'three'
import { buildPanelRegionMap } from './panel-regions.js'

const TEX_W = 2048
const TEX_H = 1024

export function createTextureCanvas(design, primaryColor, secondaryColor) {
    const canvas = document.createElement('canvas')
    canvas.width = TEX_W
    canvas.height = TEX_H
    const ctx = canvas.getContext('2d')

    const regions = buildPanelRegionMap(design, TEX_W, TEX_H)
    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    let dirty = true

    const panelColors = new Map()

    function getDefaultColor(panelIndex) {
        if (design === 'classic' && panelIndex < 12) return secondaryColor
        return primaryColor
    }

    function getPanelColor(panelIndex) {
        return panelColors.get(panelIndex) ?? getDefaultColor(panelIndex)
    }

    function setPanelColor(panelIndex, color) {
        panelColors.set(panelIndex, color)
        dirty = true
    }

    function clearAllColors() {
        panelColors.clear()
        dirty = true
    }

    function setBaseColors(primary, secondary) {
        primaryColor = primary
        secondaryColor = secondary
        dirty = true
    }

    function redraw() {
        if (!regions) {
            ctx.fillStyle = primaryColor
            ctx.fillRect(0, 0, TEX_W, TEX_H)
            texture.needsUpdate = true
            return
        }

        const imageData = ctx.createImageData(TEX_W, TEX_H)
        const data = imageData.data
        const colorCache = new Map()

        for (let i = 0; i < regions.panelCount; i++) {
            const hex = getPanelColor(i)
            const c = new THREE.Color(hex)
            colorCache.set(i, [Math.round(c.r * 255), Math.round(c.g * 255), Math.round(c.b * 255)])
        }

        for (let py = 0; py < TEX_H; py++) {
            for (let px = 0; px < TEX_W; px++) {
                const panelIdx = regions.map[py * TEX_W + px]
                const rgb = colorCache.get(panelIdx) || [255, 255, 255]
                const off = (py * TEX_W + px) * 4
                data[off] = rgb[0]
                data[off + 1] = rgb[1]
                data[off + 2] = rgb[2]
                data[off + 3] = 255
            }
        }

        ctx.putImageData(imageData, 0, 0)
        texture.needsUpdate = true
    }

    function paintCircle(u, v, radiusUV, color, opacity) {
        const cx = u * TEX_W
        const cy = v * TEX_H
        const r = radiusUV * TEX_W

        ctx.save()
        ctx.globalAlpha = opacity
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        texture.needsUpdate = true
    }

    function tick() {
        if (dirty) {
            dirty = false
            redraw()
        }
    }

    function getPanelAtUV(u, v) {
        if (!regions) return -1
        const px = Math.floor(u * TEX_W) % TEX_W
        const py = Math.floor(v * TEX_H) % TEX_H
        return regions.map[py * TEX_W + px]
    }

    redraw()

    return {
        canvas,
        texture,
        ctx,
        regions,
        TEX_W,
        TEX_H,
        getPanelAtUV,
        getPanelColor,
        setPanelColor,
        clearAllColors,
        setBaseColors,
        paintCircle,
        tick,
        markDirty() { dirty = true }
    }
}

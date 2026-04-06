import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
    buildExplodedBall,
    buildFlatLayout,
    applyExplodeFactor,
    addStitching
} from '../../balls/index.js'
import { getPanelColor, setPanelColor, clearPanelColors, hasOverrides } from '../../balls/panel-colors.js'
import { createStudioUI } from './studio-ui.js'

/**
 * 3D / exploded / flat preview for the ball customizer (panel-customizer).
 */
export function createCustomizerPreview({
    mainScene,
    ballConfig,
    ballRadius,
    previewRadius,
    getBallGroup,
    setBallGroup,
    buildMainBall,
    onBallChanged,
    cancelKick
}) {
    const panelRoot = document.getElementById('panel-customizer')
    const zoomStateLabel = document.getElementById('zoom-state-label')
    const panelColorBtn = document.getElementById('panel-color-btn')
    const panelColorInput = document.getElementById('panel-color-input')
    const panelResetBtn = document.getElementById('panel-reset-btn')

    const state = {
        custViewMode: 'ball',
        custExplodeFactor: 0,
        custExplodePanels: [],
        ballCamDistance: 1.7,
        ballCamDirection: new THREE.Vector3(0, 0, 1),
        selectedPanelIndex: null,
        hoveredPanelIndex: null,
        cameraAnimTarget: null,
        cameraAnimTargetSpherical: null,
        flatPanTarget: null
    }

    const custCanvas = document.querySelector('canvas.customizer-preview')
    const custViewport = document.querySelector('.customizer-viewport')
    const custScene = new THREE.Scene()
    custScene.background = new THREE.Color('#0a0a0a')

    const custAmbient = new THREE.AmbientLight(0xffffff, 1.5)
    custScene.add(custAmbient)
    const custKey = new THREE.DirectionalLight(0xffffff, 2.5)
    custKey.position.set(3, 4, 5)
    custScene.add(custKey)
    const custFill = new THREE.DirectionalLight(0xffffff, 0.8)
    custFill.position.set(-3, 2, -3)
    custScene.add(custFill)

    let previewBall = null
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    // Build initial preview ball using panel-based mesh
    function buildPanelBall() {
        const result = buildExplodedBall(ballConfig, previewRadius)
        const ball = result.group
        state.custExplodePanels = result.panels
        applyExplodeFactor(state.custExplodePanels, state.custExplodeFactor)
        if (state.custExplodeFactor === 0) addStitching(ball, ballConfig, previewRadius)
        return ball
    }

    previewBall = buildPanelBall()
    custScene.add(previewBall)

    // =========================================================================
    // Unified per-panel canvas brush system
    // =========================================================================

    const PANEL_TEX_SIZE = window.innerWidth <= 768 ? 512 : 1024
    const designCanvasStore = new Map()
    let panelCanvases = new Map()
    designCanvasStore.set(ballConfig.design, panelCanvases)

    function switchDesignCanvases(design) {
        if (!designCanvasStore.has(design)) designCanvasStore.set(design, new Map())
        panelCanvases = designCanvasStore.get(design)
    }

    // --- Undo / Redo ---
    const undoStack = []
    const redoStack = []
    const MAX_UNDO = 30

    function captureCanvasState(panelIndex) {
        const entry = panelCanvases.get(panelIndex)
        if (!entry) return null
        return { panelIndex, imageData: entry.ctx.getImageData(0, 0, PANEL_TEX_SIZE, PANEL_TEX_SIZE) }
    }

    function pushUndoSnapshot(panelIndices) {
        const indices = Array.isArray(panelIndices) ? panelIndices : [panelIndices]
        const snapshots = []
        for (const idx of indices) {
            const snap = captureCanvasState(idx)
            if (snap) snapshots.push(snap)
        }
        if (snapshots.length === 0) return
        undoStack.push(snapshots)
        if (undoStack.length > MAX_UNDO) undoStack.shift()
        redoStack.length = 0
    }

    function performUndo() {
        if (undoStack.length === 0) return
        const snapshots = undoStack.pop()
        const redoSnapshots = []
        for (const snap of snapshots) {
            const current = captureCanvasState(snap.panelIndex)
            if (current) redoSnapshots.push(current)
            const entry = panelCanvases.get(snap.panelIndex)
            if (entry) {
                entry.ctx.putImageData(snap.imageData, 0, 0)
                entry.texture.needsUpdate = true
            }
        }
        if (redoSnapshots.length > 0) redoStack.push(redoSnapshots)
        refreshMainBall()
    }

    function performRedo() {
        if (redoStack.length === 0) return
        const snapshots = redoStack.pop()
        const undoSnapshots = []
        for (const snap of snapshots) {
            const current = captureCanvasState(snap.panelIndex)
            if (current) undoSnapshots.push(current)
            const entry = panelCanvases.get(snap.panelIndex)
            if (entry) {
                entry.ctx.putImageData(snap.imageData, 0, 0)
                entry.texture.needsUpdate = true
            }
        }
        if (undoSnapshots.length > 0) undoStack.push(undoSnapshots)
        refreshMainBall()
    }
    const panelUVBases = new Map()
    let painting = false
    let paintingLockedPanel = -1
    const strokeBuffers = new Map()
    let strokePanelIndex = -1

    function generatePanelUVs(fillMesh, centroidDir, panelIndex) {
        const posAttr = fillMesh.geometry.attributes.position
        const uvs = new Float32Array(posAttr.count * 2)
        const ref = Math.abs(centroidDir.y) < 0.9
            ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)
        const ux = new THREE.Vector3().crossVectors(ref, centroidDir).normalize()
        const uy = new THREE.Vector3().crossVectors(centroidDir, ux).normalize()
        let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity
        for (let i = 0; i < posAttr.count; i++) {
            const dir = new THREE.Vector3(
                posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)
            ).normalize()
            const u = dir.dot(ux), v = dir.dot(uy)
            uvs[i * 2] = u; uvs[i * 2 + 1] = v
            if (u < minU) minU = u; if (u > maxU) maxU = u
            if (v < minV) minV = v; if (v > maxV) maxV = v
        }
        const rangeU = maxU - minU || 1
        const rangeV = maxV - minV || 1
        for (let i = 0; i < posAttr.count; i++) {
            uvs[i * 2] = (uvs[i * 2] - minU) / rangeU
            uvs[i * 2 + 1] = (uvs[i * 2 + 1] - minV) / rangeV
        }
        fillMesh.geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
        panelUVBases.set(panelIndex, { ux, uy, minU, maxU, minV, maxV })
    }

    function dirToLocalUV(dir, panelIndex) {
        const basis = panelUVBases.get(panelIndex)
        if (!basis) return null
        const d = dir.clone().normalize()
        const rawU = d.dot(basis.ux)
        const rawV = d.dot(basis.uy)
        const rangeU = basis.maxU - basis.minU || 1
        const rangeV = basis.maxV - basis.minV || 1
        return {
            x: (rawU - basis.minU) / rangeU,
            y: (rawV - basis.minV) / rangeV
        }
    }

    function getPanelBaseColor(panelIndex) {
        const override = getPanelColor(ballConfig.design, panelIndex)
        if (override) return override
        const isPent = ballConfig.design === 'classic' && panelIndex < 12
        return isPent ? ballConfig.secondaryColor : ballConfig.primaryColor
    }

    function getOrCreateCanvas(panelIndex) {
        const baseColor = getPanelBaseColor(panelIndex)
        const prev = panelCanvases.get(panelIndex)
        if (prev) {
            if (!prev.painted && prev.baseColor !== baseColor) {
                prev.ctx.fillStyle = baseColor
                prev.ctx.fillRect(0, 0, PANEL_TEX_SIZE, PANEL_TEX_SIZE)
                prev.baseColor = baseColor
                prev.texture.needsUpdate = true
            }
            return prev
        }

        const canvas2d = document.createElement('canvas')
        canvas2d.width = PANEL_TEX_SIZE
        canvas2d.height = PANEL_TEX_SIZE
        const ctx = canvas2d.getContext('2d')
        ctx.fillStyle = baseColor
        ctx.fillRect(0, 0, PANEL_TEX_SIZE, PANEL_TEX_SIZE)
        const texture = new THREE.CanvasTexture(canvas2d)
        texture.colorSpace = THREE.SRGBColorSpace
        texture.minFilter = THREE.LinearMipmapLinearFilter
        texture.magFilter = THREE.LinearFilter
        texture.anisotropy = 8
        const entry = { canvas: canvas2d, ctx, texture, baseColor, painted: false }
        panelCanvases.set(panelIndex, entry)
        return entry
    }

    function invalidateCanvases(indices) {
        if (indices === 'all') {
            panelCanvases.clear()
        } else if (Array.isArray(indices)) {
            for (const i of indices) panelCanvases.delete(i)
        } else if (indices != null) {
            panelCanvases.delete(indices)
        }
    }

    function initBrushTextures() {
        if (!previewBall) return

        if (state.custViewMode === 'flat') {
            for (const child of previewBall.children) {
                if (!child.isMesh || child.userData.panelIndex == null) continue
                const panelIdx = child.userData.panelIndex
                const uvAttr = child.geometry.attributes.uv
                if (!uvAttr) continue

                let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity
                for (let i = 0; i < uvAttr.count; i++) {
                    const u = uvAttr.getX(i), v = uvAttr.getY(i)
                    if (u < minU) minU = u; if (u > maxU) maxU = u
                    if (v < minV) minV = v; if (v > maxV) maxV = v
                }
                const rangeU = maxU - minU || 1
                const rangeV = maxV - minV || 1
                for (let i = 0; i < uvAttr.count; i++) {
                    uvAttr.setXY(i, (uvAttr.getX(i) - minU) / rangeU, (uvAttr.getY(i) - minV) / rangeV)
                }
                uvAttr.needsUpdate = true

                const entry = getOrCreateCanvas(panelIdx)
                child.material.dispose()
                child.material = new THREE.MeshBasicMaterial({
                    map: entry.texture, side: THREE.DoubleSide
                })
                child.userData._brushTex = entry.texture
                child.userData._brushCtx = entry.ctx
            }
        } else {
            panelUVBases.clear()
            for (let i = 0; i < state.custExplodePanels.length; i++) {
                const panel = state.custExplodePanels[i]
                const group = panel.mesh
                if (!group || !group.isGroup) continue
                const fillMesh = group.children[0]
                if (!fillMesh || !fillMesh.isMesh) continue
                const panelIdx = group.userData.panelIndex
                if (panelIdx == null) continue

                generatePanelUVs(fillMesh, panel.centroidDir, panelIdx)

                const entry = getOrCreateCanvas(panelIdx)
                fillMesh.material.dispose()
                fillMesh.material = new THREE.MeshLambertMaterial({
                    map: entry.texture,
                    emissiveMap: entry.texture,
                    color: 0xffffff,
                    emissive: 0xffffff,
                    emissiveIntensity: 0.15,
                    side: THREE.DoubleSide
                })
                fillMesh.userData._brushTex = entry.texture
                fillMesh.userData._brushCtx = entry.ctx
            }

            // Also texture stitching overlay meshes (e.g. classic pentagon caps)
            for (const child of previewBall.children) {
                if (!child.isMesh || child.userData.stitchPanelIndex == null) continue
                const panelIdx = child.userData.stitchPanelIndex
                const panel = state.custExplodePanels[panelIdx]
                if (!panel?.centroidDir) continue
                const entry = panelCanvases.get(panelIdx)
                if (!entry) continue
                generatePanelUVs(child, panel.centroidDir, panelIdx)
                child.material.dispose()
                child.material = new THREE.MeshLambertMaterial({
                    map: entry.texture,
                    emissiveMap: entry.texture,
                    color: 0xffffff,
                    emissive: 0xffffff,
                    emissiveIntensity: 0.15,
                    side: THREE.DoubleSide
                })
            }
        }
    }

    function raycastPanel(e) {
        const rect = custCanvas.getBoundingClientRect()
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
        raycaster.setFromCamera(mouse, custCamera)

        if (state.custViewMode === 'flat') {
            const meshes = []
            if (previewBall) {
                for (const child of previewBall.children) {
                    if (child.isMesh && child.userData.panelIndex != null) meshes.push(child)
                }
            }
            const hits = raycaster.intersectObjects(meshes, false)
            if (hits.length > 0 && hits[0].uv) {
                return { mesh: hits[0].object, uv: hits[0].uv, panelIndex: hits[0].object.userData.panelIndex, point: hits[0].point }
            }
            return null
        }

        // 3D: closed classic ball — analytic hit
        if (state.custExplodeFactor === 0 && ballConfig.design === 'classic') {
            const hitPoint = getRaySphereHitPoint()
            if (!hitPoint) return null
            const hitDirLocal = previewBall.worldToLocal(hitPoint.clone()).normalize()
            const panelIdx = pickClosedBallPanelFromRay()
            if (panelIdx == null) return null
            const uv = dirToLocalUV(hitDirLocal, panelIdx)
            if (!uv) return null
            const panel = state.custExplodePanels[panelIdx]
            const fillMesh = panel?.mesh?.children?.[0]
            return { mesh: fillMesh, uv, panelIndex: panelIdx, point: hitPoint }
        }

        // 3D: exploded or non-classic — mesh intersection
        const ballCenter = getBallCenterWorld()
        const cameraDir = custCamera.position.clone().sub(ballCenter).normalize()
        const intersects = raycaster.intersectObjects(getPanelMeshes(), false)
        for (const hit of intersects) {
            const hitDir = hit.point.clone().sub(ballCenter).normalize()
            if (hitDir.dot(cameraDir) <= 0) continue
            const idx = findPanelIndex(hit.object)
            if (idx == null) continue
            if (hit.uv) {
                return { mesh: hit.object, uv: hit.uv, panelIndex: idx, point: hit.point }
            }
            const hitDirLocal = previewBall.worldToLocal(hit.point.clone()).normalize()
            const uv = dirToLocalUV(hitDirLocal, idx)
            if (uv) return { mesh: hit.object, uv, panelIndex: idx, point: hit.point }
        }
        return null
    }

    function panelBrushStamp(panelIndex, uv, size, color) {
        const entry = panelCanvases.get(panelIndex)
        if (!entry) return
        entry.painted = true
        const { ctx, texture } = entry
        const cx = uv.x * PANEL_TEX_SIZE
        const cy = (1 - uv.y) * PANEL_TEX_SIZE
        const r = size * 2
        ctx.save()
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        texture.needsUpdate = true
    }

    function panelBrushStroke(panelIndex, uv, size, color) {
        if (!strokeBuffers.has(panelIndex)) strokeBuffers.set(panelIndex, [])
        const buf = strokeBuffers.get(panelIndex)
        buf.push(uv)
        if (buf.length < 2) {
            panelBrushStamp(panelIndex, uv, size, color)
            return
        }
        const len = buf.length
        const p0 = buf[Math.max(0, len - 4)]
        const p1 = buf[Math.max(0, len - 3)]
        const p2 = buf[len - 2]
        const p3 = buf[len - 1]
        const dx = (p3.x - p2.x) * PANEL_TEX_SIZE
        const dy = (p3.y - p2.y) * PANEL_TEX_SIZE
        const segDist = Math.sqrt(dx * dx + dy * dy)
        const steps = Math.max(1, Math.ceil(segDist / (size * 0.8)))
        for (let s = 1; s <= steps; s++) {
            const t = s / steps
            const t2 = t * t, t3 = t2 * t
            const pt = {
                x: 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
                y: 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3)
            }
            panelBrushStamp(panelIndex, pt, size, color)
        }
    }

    const SHAPE_PATHS = {
        star: (ctx, cx, cy, r) => {
            const spikes = 5
            ctx.beginPath()
            for (let i = 0; i < spikes * 2; i++) {
                const angle = (i * Math.PI) / spikes - Math.PI / 2
                const rad = i % 2 === 0 ? r : r * 0.4
                if (i === 0) ctx.moveTo(cx + Math.cos(angle) * rad, cy + Math.sin(angle) * rad)
                else ctx.lineTo(cx + Math.cos(angle) * rad, cy + Math.sin(angle) * rad)
            }
            ctx.closePath()
        },
        circle: (ctx, cx, cy, r) => {
            ctx.beginPath()
            ctx.arc(cx, cy, r, 0, Math.PI * 2)
        },
        diamond: (ctx, cx, cy, r) => {
            ctx.beginPath()
            ctx.moveTo(cx, cy - r)
            ctx.lineTo(cx + r * 0.7, cy)
            ctx.lineTo(cx, cy + r)
            ctx.lineTo(cx - r * 0.7, cy)
            ctx.closePath()
        },
        hexagon: (ctx, cx, cy, r) => {
            ctx.beginPath()
            for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3 - Math.PI / 6
                const px = cx + Math.cos(angle) * r
                const py = cy + Math.sin(angle) * r
                if (i === 0) ctx.moveTo(px, py)
                else ctx.lineTo(px, py)
            }
            ctx.closePath()
        },
        pentagon: (ctx, cx, cy, r) => {
            ctx.beginPath()
            for (let i = 0; i < 5; i++) {
                const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
                const px = cx + Math.cos(angle) * r
                const py = cy + Math.sin(angle) * r
                if (i === 0) ctx.moveTo(px, py)
                else ctx.lineTo(px, py)
            }
            ctx.closePath()
        },
        triangle: (ctx, cx, cy, r) => {
            ctx.beginPath()
            for (let i = 0; i < 3; i++) {
                const angle = (i * 2 * Math.PI) / 3 - Math.PI / 2
                if (i === 0) ctx.moveTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r)
                else ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r)
            }
            ctx.closePath()
        },
        mapleLeaf: (ctx, cx, cy, r) => {
            const s = r / 18
            ctx.save()
            ctx.translate(cx, cy)
            ctx.scale(s, s)
            ctx.beginPath()
            ctx.moveTo(0, -18)
            ctx.lineTo(1.5, -12)
            ctx.lineTo(7, -13)
            ctx.lineTo(5, -7)
            ctx.lineTo(13, -4)
            ctx.lineTo(8, -1)
            ctx.lineTo(10, 6)
            ctx.lineTo(5, 4)
            ctx.lineTo(2.5, 11)
            ctx.lineTo(0, 7)
            ctx.lineTo(-2.5, 11)
            ctx.lineTo(-5, 4)
            ctx.lineTo(-10, 6)
            ctx.lineTo(-8, -1)
            ctx.lineTo(-13, -4)
            ctx.lineTo(-5, -7)
            ctx.lineTo(-7, -13)
            ctx.lineTo(-1.5, -12)
            ctx.closePath()
            ctx.restore()
        },
        brazuca: (ctx, cx, cy, r) => {
            ctx.beginPath()
            ctx.moveTo(cx - r * 0.8, cy - r * 0.5)
            ctx.bezierCurveTo(cx - r * 0.3, cy - r * 0.9, cx + r * 0.3, cy + r * 0.1, cx + r * 0.8, cy - r * 0.5)
            ctx.bezierCurveTo(cx + r * 0.9, cy + r * 0.1, cx + r * 0.3, cy + r * 0.9, cx + r * 0.8, cy + r * 0.5)
            ctx.bezierCurveTo(cx + r * 0.3, cy + r * 0.9, cx - r * 0.3, cy - r * 0.1, cx - r * 0.8, cy + r * 0.5)
            ctx.bezierCurveTo(cx - r * 0.9, cy - r * 0.1, cx - r * 0.3, cy - r * 0.9, cx - r * 0.8, cy - r * 0.5)
            ctx.closePath()
        },
        jabulani: (ctx, cx, cy, r) => {
            ctx.beginPath()
            ctx.moveTo(cx, cy - r)
            ctx.bezierCurveTo(cx + r * 0.6, cy - r * 0.8, cx + r, cy - r * 0.2, cx + r * 0.7, cy + r * 0.5)
            ctx.bezierCurveTo(cx + r * 0.4, cy + r, cx - r * 0.4, cy + r, cx - r * 0.7, cy + r * 0.5)
            ctx.bezierCurveTo(cx - r, cy - r * 0.2, cx - r * 0.6, cy - r * 0.8, cx, cy - r)
            ctx.closePath()
        },
    }

    function panelShapeStamp(panelIndex, uv, size, color, shapeName) {
        const entry = panelCanvases.get(panelIndex)
        if (!entry) return
        entry.painted = true
        const { ctx, texture } = entry
        const cx = uv.x * PANEL_TEX_SIZE
        const cy = (1 - uv.y) * PANEL_TEX_SIZE
        const r = size * 2
        const drawFn = SHAPE_PATHS[shapeName]
        if (!drawFn) return
        ctx.save()
        ctx.fillStyle = color
        drawFn(ctx, cx, cy, r)
        ctx.fill()
        ctx.restore()
        texture.needsUpdate = true
    }

    function sampleAndSyncExternalBalls() {
        for (const [panelIndex, entry] of panelCanvases) {
            const { ctx, baseColor } = entry
            if (!ctx) continue
            const baseR = parseInt(baseColor.slice(1, 3), 16) || 0
            const baseG = parseInt(baseColor.slice(3, 5), 16) || 0
            const baseB = parseInt(baseColor.slice(5, 7), 16) || 0
            const samples = [
                [0.5, 0.5], [0.3, 0.3], [0.7, 0.7],
                [0.3, 0.7], [0.7, 0.3], [0.5, 0.3],
                [0.5, 0.7], [0.3, 0.5], [0.7, 0.5]
            ]
            for (const [fx, fy] of samples) {
                const pixel = ctx.getImageData(
                    Math.floor(fx * PANEL_TEX_SIZE),
                    Math.floor(fy * PANEL_TEX_SIZE), 1, 1
                ).data
                if (pixel[3] < 20) continue
                const dr = Math.abs(pixel[0] - baseR)
                const dg = Math.abs(pixel[1] - baseG)
                const db = Math.abs(pixel[2] - baseB)
                if (dr + dg + db > 30) {
                    const hex = '#' + ((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)
                    setPanelColor(ballConfig.design, panelIndex, hex)
                    break
                }
            }
        }
    }

    function applyCanvasTexturesToExternalBall(group) {
        if (!state.custExplodePanels || state.custExplodePanels.length === 0) return
        for (const child of group.children) {
            // Panel groups (fill mesh inside)
            if (child.isGroup && child.userData.panelIndex != null) {
                const panelIdx = child.userData.panelIndex
                const fillMesh = child.children[0]
                if (!fillMesh || !fillMesh.isMesh) continue
                const entry = panelCanvases.get(panelIdx)
                if (!entry) continue
                const panel = state.custExplodePanels[panelIdx]
                if (!panel?.centroidDir) continue
                generatePanelUVs(fillMesh, panel.centroidDir, panelIdx)
                fillMesh.material.dispose()
                fillMesh.material = new THREE.MeshLambertMaterial({
                    map: entry.texture,
                    emissiveMap: entry.texture,
                    color: 0xffffff,
                    emissive: 0xffffff,
                    emissiveIntensity: 0.15,
                    side: THREE.DoubleSide
                })
            }
            // Stitching overlay meshes (e.g. classic pentagon caps)
            if (child.isMesh && child.userData.stitchPanelIndex != null) {
                const panelIdx = child.userData.stitchPanelIndex
                const panel = state.custExplodePanels[panelIdx]
                if (!panel?.centroidDir) continue
                const entry = panelCanvases.get(panelIdx)
                if (!entry) continue
                generatePanelUVs(child, panel.centroidDir, panelIdx)
                child.material.dispose()
                child.material = new THREE.MeshLambertMaterial({
                    map: entry.texture,
                    emissiveMap: entry.texture,
                    color: 0xffffff,
                    emissive: 0xffffff,
                    emissiveIntensity: 0.15,
                    side: THREE.DoubleSide
                })
            }
        }
    }

    function refreshMainBall() {
        const pos = getBallGroup().position.clone()
        const rot = getBallGroup().rotation.clone()
        mainScene.remove(getBallGroup())
        const next = buildMainBall()
        applyCanvasTexturesToExternalBall(next)
        next.position.copy(pos)
        next.rotation.copy(rot)
        mainScene.add(next)
        setBallGroup(next)
        if (onBallChanged) onBallChanged()
        updateResetButtonVisibility()
    }

    // =========================================================================
    // Camera, renderer, controls
    // =========================================================================

    const custCamera = new THREE.PerspectiveCamera(
        40,
        custViewport.clientWidth / (custViewport.clientHeight || 1),
        0.1, 50
    )
    custCamera.position.set(0, 0, state.ballCamDistance)
    custCamera.lookAt(0, 0, 0)

    const custRenderer = new THREE.WebGLRenderer({ canvas: custCanvas, antialias: true })
    custRenderer.setSize(custViewport.clientWidth, custViewport.clientHeight)
    custRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const custControls = new OrbitControls(custCamera, custCanvas)
    custControls.enableDamping = true
    custControls.enablePan = false
    custControls.autoRotate = true
    custControls.autoRotateSpeed = 5
    custControls.minDistance = 0.6
    custControls.maxDistance = 3.0

    function rememberBallCameraPose() {
        const dist = custCamera.position.length()
        if (dist < 1e-4) return
        state.ballCamDistance = dist
        state.ballCamDirection.copy(custCamera.position).normalize()
    }

    function restoreBallCameraPose() {
        const minDist = 0.9
        const maxDist = 4.4 + state.custExplodeFactor * 4.2
        const d = Math.min(maxDist, Math.max(minDist, state.ballCamDistance))
        state.ballCamDistance = d
        if (state.ballCamDirection.lengthSq() < 1e-6) state.ballCamDirection.set(0, 0, 1)
        custCamera.position.copy(state.ballCamDirection).multiplyScalar(d)
        custCamera.lookAt(0, 0, 0)
    }

    // --- Flat view drag rotation ---
    {
        let flatDragging = false
        let flatLastX = 0
        let flatLastY = 0
        custCanvas.addEventListener('mousedown', e => {
            if (state.custViewMode !== 'flat') return
            const tool = studioUI?.getActiveTool()
            if (tool === 'brush' || tool === 'shape') return
            flatDragging = true
            flatLastX = e.clientX
            flatLastY = e.clientY
            e.stopPropagation()
        })
        window.addEventListener('mousemove', e => {
            if (!flatDragging || painting || state.custViewMode !== 'flat' || !previewBall) return
            const dx = e.clientX - flatLastX
            flatLastX = e.clientX
            flatLastY = e.clientY
            previewBall.rotation.z += dx * 0.01
        })
        window.addEventListener('mouseup', () => { flatDragging = false })
        custCanvas.addEventListener('touchstart', e => {
            if (state.custViewMode !== 'flat' || e.touches.length !== 1) return
            const tool = studioUI?.getActiveTool()
            if (tool === 'brush' || tool === 'shape') return
            flatDragging = true
            flatLastX = e.touches[0].clientX
            flatLastY = e.touches[0].clientY
        }, { passive: true })
        window.addEventListener('touchmove', e => {
            if (!flatDragging || state.custViewMode !== 'flat' || !previewBall || e.touches.length !== 1) return
            const dx = e.touches[0].clientX - flatLastX
            previewBall.rotation.z += dx * 0.01
            flatLastX = e.touches[0].clientX
            flatLastY = e.touches[0].clientY
        }, { passive: true })
        window.addEventListener('touchend', () => { flatDragging = false })
    }

    const custResizeObserver = new ResizeObserver(() => {
        const w = custViewport.clientWidth
        const h = custViewport.clientHeight
        if (w === 0 || h === 0) return
        custCamera.aspect = w / h
        custCamera.updateProjectionMatrix()
        custRenderer.setSize(w, h)
        custRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    custResizeObserver.observe(custViewport)

    // --- Panel highlight helpers ---

    function findPanelIndex(object) {
        let current = object
        while (current) {
            if (current.userData.panelIndex != null) return current.userData.panelIndex
            current = current.parent
        }
        return null
    }

    /** Get only panel fill meshes (not lines or stitching) for raycasting */
    function getPanelMeshes() {
        const meshes = []
        if (!previewBall) return meshes
        for (const child of previewBall.children) {
            if (child.userData.panelIndex == null) continue
            if (child.isMesh) {
                meshes.push(child)
            } else if (child.isGroup) {
                for (const sub of child.children) {
                    if (sub.isMesh) {
                        meshes.push(sub)
                    }
                }
            }
        }
        return meshes
    }

    const SELECT_EMISSIVE_BOOST = 0.45
    const PANEL_CONTAINMENT_EPSILON = 1e-4

    const HOVER_BLUE = new THREE.Color('#4488cc')

    function setHoverHighlight(panelIndex, on) {
        if (panelIndex == null || panelIndex === state.selectedPanelIndex) return
        if (state.custViewMode === 'flat') {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === panelIndex && child.isMesh) {
                    if (on) {
                        if (child._savedHoverColor == null) {
                            child._savedHoverColor = child.material.color.getHex()
                        }
                        const c = new THREE.Color(child._savedHoverColor)
                        c.lerp(HOVER_BLUE, 0.3)
                        child.material.color.set(c)
                    } else if (child._savedHoverColor != null) {
                        child.material.color.setHex(child._savedHoverColor)
                        delete child._savedHoverColor
                    }
                }
            }
        } else {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === panelIndex && child.isGroup) {
                    const fillMesh = child.children[0]
                    if (!fillMesh || !fillMesh.material) continue
                    if (on) {
                        if (fillMesh._savedHoverColor == null) {
                            fillMesh._savedHoverColor = fillMesh.material.color.getHex()
                        }
                        const c = new THREE.Color(fillMesh._savedHoverColor)
                        c.lerp(HOVER_BLUE, 0.3)
                        fillMesh.material.color.set(c)
                    } else if (fillMesh._savedHoverColor != null) {
                        fillMesh.material.color.setHex(fillMesh._savedHoverColor)
                        delete fillMesh._savedHoverColor
                    }
                }
            }
        }
    }

    function setSelectionHighlight(panelIndex, on) {
        if (panelIndex == null) return
        if (state.custViewMode === 'flat') {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === panelIndex && child.isMesh) {
                    if (on) {
                        child._selectSavedColor = child.material.color.getHex()
                        const c = new THREE.Color(child._selectSavedColor)
                        c.lerp(new THREE.Color('#ffffff'), 0.25)
                        child.material.color.set(c)
                    } else if (child._selectSavedColor != null) {
                        child.material.color.setHex(child._selectSavedColor)
                        delete child._selectSavedColor
                    }
                }
                if (child.userData.panelIndex === panelIndex && child.isLine) {
                    if (on) {
                        if (!child._ownMaterial) {
                            child._ownMaterial = child.material.clone()
                            child.material = child._ownMaterial
                        }
                        child._selectSavedColor = child.material.color.getHex()
                        child.material.color.set('#ffffff')
                    } else if (child._selectSavedColor != null) {
                        child.material.color.setHex(child._selectSavedColor)
                        delete child._selectSavedColor
                    }
                }
            }
        } else {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === panelIndex && child.isGroup) {
                    const fillMesh = child.children[0]
                    const borderLine = child.children[1]
                    if (fillMesh && fillMesh.material) {
                        if (on) {
                            fillMesh._selectSavedEmissiveIntensity = fillMesh.material.emissiveIntensity
                            fillMesh.material.emissiveIntensity = SELECT_EMISSIVE_BOOST
                        } else if (fillMesh._selectSavedEmissiveIntensity != null) {
                            fillMesh.material.emissiveIntensity = fillMesh._selectSavedEmissiveIntensity
                            delete fillMesh._selectSavedEmissiveIntensity
                        }
                    }
                    if (borderLine && borderLine.material) {
                        if (on) {
                            if (!borderLine._ownMaterial) {
                                borderLine._ownMaterial = borderLine.material.clone()
                                borderLine.material = borderLine._ownMaterial
                            }
                            borderLine._selectSavedColor = borderLine.material.color.getHex()
                            borderLine.material.color.set('#ffffff')
                        } else if (borderLine._selectSavedColor != null) {
                            borderLine.material.color.setHex(borderLine._selectSavedColor)
                            delete borderLine._selectSavedColor
                        }
                    }
                }
            }
        }
    }

    function getBallCenterWorld() {
        const center = new THREE.Vector3()
        previewBall.updateMatrixWorld(true)
        previewBall.getWorldPosition(center)
        return center
    }

    function getRaySphereHitPoint() {
        const hitPoint = new THREE.Vector3()
        return raycaster.ray.intersectSphere(new THREE.Sphere(getBallCenterWorld(), previewRadius), hitPoint)
            ? hitPoint
            : null
    }

    function getPanelContainmentScore(hitDirLocal, panel) {
        const boundaryDirs = panel?.boundaryDirs
        if (!boundaryDirs || boundaryDirs.length < 3) return -Infinity

        let minMargin = Infinity
        for (let i = 0; i < boundaryDirs.length; i++) {
            const a = boundaryDirs[i]
            const b = boundaryDirs[(i + 1) % boundaryDirs.length]
            const edgeNormal = new THREE.Vector3().crossVectors(a, b)
            const centroidSide = edgeNormal.dot(panel.centroidDir)
            if (Math.abs(centroidSide) < 1e-8) continue

            const side = edgeNormal.dot(hitDirLocal) * Math.sign(centroidSide)
            if (side < minMargin) minMargin = side
            if (side < -PANEL_CONTAINMENT_EPSILON) return side
        }

        return minMargin
    }

    function pickClosedBallPanelFromRay() {
        const hitPointWorld = getRaySphereHitPoint()
        if (!hitPointWorld) return null

        const hitDirLocal = previewBall.worldToLocal(hitPointWorld.clone()).normalize()
        let bestIndex = null
        let bestScore = -Infinity

        for (let i = 0; i < state.custExplodePanels.length; i++) {
            const score = getPanelContainmentScore(hitDirLocal, state.custExplodePanels[i])
            if (score > bestScore && score >= -PANEL_CONTAINMENT_EPSILON) {
                bestIndex = i
                bestScore = score
            }
        }

        return bestIndex
    }

    function buildCameraAnimTarget(panel) {
        const desiredDir = panel.centroidDir.clone().normalize()
        return desiredDir.multiplyScalar(state.ballCamDistance)
    }

    function clearHoverTint(panelIndex) {
        if (panelIndex == null) return
        if (state.custViewMode === 'flat') {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === panelIndex && child.isMesh && child._savedHoverColor != null) {
                    child.material.color.setHex(child._savedHoverColor)
                    delete child._savedHoverColor
                }
            }
        } else {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === panelIndex && child.isGroup) {
                    const fillMesh = child.children[0]
                    if (fillMesh?._savedHoverColor != null) {
                        fillMesh.material.color.setHex(fillMesh._savedHoverColor)
                        delete fillMesh._savedHoverColor
                    }
                }
            }
        }
    }

    function selectPanel(index) {
        const previousIndex = state.selectedPanelIndex

        if (state.hoveredPanelIndex != null) {
            clearHoverTint(state.hoveredPanelIndex)
            state.hoveredPanelIndex = null
        }

        if (state.selectedPanelIndex != null) {
            setSelectionHighlight(state.selectedPanelIndex, false)
        }
        state.selectedPanelIndex = index

        if (index != null) {
            setSelectionHighlight(index, true)
            panelColorBtn.style.display = ''

            const override = getPanelColor(ballConfig.design, index)
            let panelHex
            if (override) {
                panelHex = override
            } else {
                const isPent = ballConfig.design === 'classic' && index < 12
                panelHex = isPent ? ballConfig.secondaryColor : ballConfig.primaryColor
            }
            panelColorInput.value = panelHex
            panelColorBtn.style.backgroundColor = panelHex

            if (state.custViewMode === 'flat') {
                for (const child of previewBall.children) {
                    if (child.userData.panelIndex === index && child.isMesh && child.geometry) {
                        child.geometry.computeBoundingBox()
                        const bb = child.geometry.boundingBox
                        const cx = (bb.min.x + bb.max.x) / 2
                        const cy = (bb.min.y + bb.max.y) / 2
                        state.flatPanTarget = new THREE.Vector3(cx, cy, 0)
                        break
                    }
                }
            } else {
                custControls.autoRotate = false
                const panel = state.custExplodePanels[index]
                if (panel) {
                    state.cameraAnimTarget = previousIndex != null && previousIndex !== index
                        ? buildCameraAnimTarget(panel)
                        : panel.centroidDir.clone().multiplyScalar(state.ballCamDistance)
                    state.cameraAnimTargetSpherical = new THREE.Spherical().setFromVector3(state.cameraAnimTarget.clone())
                }
            }
        } else {
            panelColorBtn.style.display = 'none'

            if (state.custViewMode !== 'flat') {
                custControls.autoRotate = true
                state.cameraAnimTarget = null
                state.cameraAnimTargetSpherical = null
            }
        }
    }

    function updateResetButtonVisibility() {
        panelResetBtn.style.display = hasOverrides(ballConfig.design) ? '' : 'none'
    }

    // --- Raycaster click detection (for select / fill tools) ---

    let pointerDownPos = null
    let pointerDownResult = null
    let lastSelectTime = 0

    function doRaycast(e) {
        const rect = custCanvas.getBoundingClientRect()
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
        raycaster.setFromCamera(mouse, custCamera)

        const ballCenter = getBallCenterWorld()
        const rayToCenter = ballCenter.clone().sub(raycaster.ray.origin)
        const projection = rayToCenter.dot(raycaster.ray.direction)
        const closest = raycaster.ray.origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(projection))
        const distToAxis = closest.distanceTo(ballCenter)
        const hitRadius = state.custViewMode === 'flat' ? Infinity : previewRadius * 1.15

        if (distToAxis > hitRadius) {
            return null
        }

        if (state.custViewMode !== 'flat' && state.custExplodeFactor === 0 && ballConfig.design === 'classic') {
            const analyticPanelIndex = pickClosedBallPanelFromRay()
            if (analyticPanelIndex != null) return analyticPanelIndex
            return null
        }

        const cameraDir = custCamera.position.clone().sub(ballCenter).normalize()
        const intersects = raycaster.intersectObjects(getPanelMeshes(), false)
        for (const hit of intersects) {
            if (state.custViewMode !== 'flat') {
                const hitDir = hit.point.clone().sub(ballCenter).normalize()
                if (hitDir.dot(cameraDir) <= 0) continue
            }
            const idx = findPanelIndex(hit.object)
            if (idx != null) return idx
        }
        return null
    }

    // =========================================================================
    // Unified pointer event handlers
    // =========================================================================

    custCanvas.addEventListener('pointerdown', e => {
        const tool = studioUI?.getActiveTool()
        if (tool === 'brush' || tool === 'shape') {
            if (state.custViewMode === 'flat') {
                custControls.enablePan = false
                custControls.enableRotate = false
            }
        }
    }, true)

    custCanvas.addEventListener('pointerdown', e => {
        const tool = studioUI?.getActiveTool()
        const mirror = studioUI?.isMirrorMode()

        if (tool === 'brush') {
            painting = true
            strokeBuffers.clear()
            custControls.enabled = false
            custCanvas.style.cursor = 'crosshair'
            const hit = raycastPanel(e)
            paintingLockedPanel = hit ? hit.panelIndex : -1
            if (hit) {
                const affectedPanels = [hit.panelIndex]
                if (mirror) affectedPanels.push(...studioUI.getSymmetryPeers(hit.panelIndex))
                pushUndoSnapshot(affectedPanels)
                panelBrushStroke(hit.panelIndex, hit.uv, studioUI.getBrushSize(), studioUI.getActiveColor())
                if (mirror) {
                    for (const peer of studioUI.getSymmetryPeers(hit.panelIndex)) {
                        panelBrushStroke(peer, hit.uv, studioUI.getBrushSize(), studioUI.getActiveColor())
                    }
                }
            }
            e.stopImmediatePropagation()
            return
        }

        if (tool === 'shape') {
            const hit = raycastPanel(e)
            if (hit) {
                const affectedPanels = [hit.panelIndex]
                if (mirror) affectedPanels.push(...studioUI.getSymmetryPeers(hit.panelIndex))
                pushUndoSnapshot(affectedPanels)
                const size = studioUI.getShapeSize()
                const color = studioUI.getActiveColor()
                const shape = studioUI.getActiveShape()
                panelShapeStamp(hit.panelIndex, hit.uv, size, color, shape)
                if (mirror) {
                    for (const peer of studioUI.getSymmetryPeers(hit.panelIndex)) {
                        panelShapeStamp(peer, hit.uv, size, color, shape)
                    }
                }
                refreshMainBall()
            }
            e.stopImmediatePropagation()
            return
        }

        pointerDownPos = { x: e.clientX, y: e.clientY }
        pointerDownResult = doRaycast(e)
    })

    custCanvas.addEventListener('pointerup', e => {
        if (painting) {
            painting = false
            paintingLockedPanel = -1
            strokeBuffers.clear()
            custControls.enabled = true
            if (state.custViewMode === 'flat') custControls.enablePan = true
            custCanvas.style.cursor = studioUI?.getActiveTool() === 'brush' ? 'crosshair' : 'grab'
            refreshMainBall()
            return
        }
        if (!pointerDownPos) return
        const dx = e.clientX - pointerDownPos.x
        const dy = e.clientY - pointerDownPos.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        pointerDownPos = null
        if (dist > 5) {
            pointerDownResult = null
            return
        }

        if (studioUI && pointerDownResult != null && studioUI.handlePanelClick(pointerDownResult)) {
            pointerDownResult = null
            return
        }

        if (pointerDownResult === state.selectedPanelIndex && pointerDownResult != null) {
            pointerDownResult = null
            return
        }
        selectPanel(pointerDownResult)
        pointerDownResult = null
    })

    // --- Hover highlight + brush painting ---

    const isMobile = window.innerWidth <= 768
    let lastPaintTime = 0
    const paintThrottleMs = isMobile ? 16 : 0

    custCanvas.addEventListener('pointermove', e => {
        if (painting) {
            e.preventDefault()
            custControls.enabled = false
            if (paintThrottleMs > 0) {
                const now = performance.now()
                if (now - lastPaintTime < paintThrottleMs) return
                lastPaintTime = now
            }
            const hit = raycastPanel(e)
            if (hit && hit.panelIndex === paintingLockedPanel) {
                panelBrushStroke(hit.panelIndex, hit.uv, studioUI.getBrushSize(), studioUI.getActiveColor())
                if (studioUI?.isMirrorMode()) {
                    for (const peer of studioUI.getSymmetryPeers(hit.panelIndex)) {
                        panelBrushStroke(peer, hit.uv, studioUI.getBrushSize(), studioUI.getActiveColor())
                    }
                }
            }
            return
        }

        const currentTool = studioUI?.getActiveTool()
        if (currentTool === 'brush' || currentTool === 'shape') {
            if (state.custViewMode === 'flat') custControls.enablePan = false
            custCanvas.style.cursor = 'crosshair'
            return
        } else if (state.custViewMode === 'flat') {
            custControls.enablePan = true
        }

        const hoveredIndex = doRaycast(e)

        if (hoveredIndex !== state.hoveredPanelIndex) {
            setHoverHighlight(state.hoveredPanelIndex, false)
            state.hoveredPanelIndex = hoveredIndex
            setHoverHighlight(state.hoveredPanelIndex, true)
            custCanvas.style.cursor = hoveredIndex != null ? 'pointer' : 'grab'
        }
    })

    custCanvas.addEventListener('pointerleave', () => {
        if (state.hoveredPanelIndex != null) {
            setHoverHighlight(state.hoveredPanelIndex, false)
            state.hoveredPanelIndex = null
        }
        custCanvas.style.cursor = 'grab'
    })

    // --- Color picker wiring ---

    panelColorBtn.addEventListener('pointerdown', e => {
        e.stopPropagation()
    })
    panelColorBtn.addEventListener('pointerup', e => {
        e.stopPropagation()
    })
    panelColorBtn.addEventListener('click', e => {
        e.stopPropagation()
        panelColorInput.click()
    })

    panelColorInput.addEventListener('input', e => {
        if (state.selectedPanelIndex == null) return
        const color = e.target.value
        setPanelColor(ballConfig.design, state.selectedPanelIndex, color)
        panelColorBtn.style.backgroundColor = color
        updateResetButtonVisibility()

        const entry = panelCanvases.get(state.selectedPanelIndex)
        if (entry && !entry.painted) {
            entry.ctx.fillStyle = color
            entry.ctx.fillRect(0, 0, PANEL_TEX_SIZE, PANEL_TEX_SIZE)
            entry.baseColor = color
            entry.texture.needsUpdate = true
        }

        if (state.custViewMode !== 'flat') {
            for (const child of previewBall.children) {
                if (child.userData.stitchPanelIndex === state.selectedPanelIndex && child.isMesh) {
                    child.material.color.set(color)
                }
            }
        }
    })

    panelColorInput.addEventListener('change', e => {
        if (state.selectedPanelIndex == null) return

        const pos = getBallGroup().position.clone()
        const rot = getBallGroup().rotation.clone()
        mainScene.remove(getBallGroup())
        const next = buildMainBall()
        next.position.copy(pos)
        next.rotation.copy(rot)
        mainScene.add(next)
        setBallGroup(next)
        if (onBallChanged) onBallChanged()

        if (state.custViewMode !== 'flat') {
            custScene.remove(previewBall)
            const result = buildExplodedBall(ballConfig, previewRadius)
            previewBall = result.group
            state.custExplodePanels = result.panels
            applyExplodeFactor(state.custExplodePanels, state.custExplodeFactor)
            if (state.custExplodeFactor === 0) addStitching(previewBall, ballConfig, previewRadius)
            custScene.add(previewBall)
            initBrushTextures()
            if (state.selectedPanelIndex != null) setSelectionHighlight(state.selectedPanelIndex, true)
        }
    })

    // --- Reset button ---

    panelResetBtn.addEventListener('click', e => {
        e.stopPropagation()
        clearPanelColors(ballConfig.design)
        panelCanvases.clear()
        selectPanel(null)
        updateResetButtonVisibility()
        updateBall()
    })

    // --- Camera animation (lerp toward selected panel) ---

    function animateCamera() {
        if (state.cameraAnimTarget && state.cameraAnimTargetSpherical && state.custViewMode !== 'flat') {
            const currentSpherical = new THREE.Spherical().setFromVector3(custCamera.position)
            const targetSpherical = state.cameraAnimTargetSpherical
            const thetaDelta = Math.atan2(
                Math.sin(targetSpherical.theta - currentSpherical.theta),
                Math.cos(targetSpherical.theta - currentSpherical.theta)
            )

            currentSpherical.radius += (targetSpherical.radius - currentSpherical.radius) * 0.08
            currentSpherical.phi += (targetSpherical.phi - currentSpherical.phi) * 0.08
            currentSpherical.theta += thetaDelta * 0.08
            currentSpherical.makeSafe()
            custCamera.position.setFromSpherical(currentSpherical)
            custCamera.lookAt(0, 0, 0)
            const dist = custCamera.position.distanceTo(state.cameraAnimTarget)
            if (dist < 0.01) {
                custCamera.position.copy(state.cameraAnimTarget)
                state.cameraAnimTarget = null
                state.cameraAnimTargetSpherical = null
            }
        }

        if (state.flatPanTarget && state.custViewMode === 'flat') {
            const target = state.flatPanTarget
            custControls.target.x += (target.x - custControls.target.x) * 0.1
            custControls.target.y += (target.y - custControls.target.y) * 0.1
            custCamera.position.x += (target.x - custCamera.position.x) * 0.1
            custCamera.position.y += (target.y - custCamera.position.y) * 0.1
            const dx = custControls.target.x - target.x
            const dy = custControls.target.y - target.y
            if (Math.sqrt(dx * dx + dy * dy) < 0.05) {
                custControls.target.x = target.x
                custControls.target.y = target.y
                custCamera.position.x = target.x
                custCamera.position.y = target.y
                state.flatPanTarget = null
            }
            custControls.update()
        }
    }

    function debugAfterControlsUpdate() {}

    function updateBaseColorsInPlace() {
        if (!previewBall) return
        const primary = new THREE.Color(ballConfig.primaryColor)
        const secondary = new THREE.Color(ballConfig.secondaryColor)

        if (state.custViewMode === 'flat') {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex == null) continue
                if (!child.isMesh) continue
                const idx = child.userData.panelIndex
                const isPent = ballConfig.design === 'classic' && idx < 12
                const override = getPanelColor(ballConfig.design, idx)
                if (!override) {
                    child.material.color.copy(isPent ? secondary : primary)
                }
            }
        } else {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex == null) continue
                if (child.isGroup) {
                    const fillMesh = child.children[0]
                    if (!fillMesh?.material) continue
                    const idx = child.userData.panelIndex
                    const isPent = ballConfig.design === 'classic' && idx < 12
                    const override = getPanelColor(ballConfig.design, idx)
                    if (!override) {
                        const col = isPent ? secondary : primary
                        fillMesh.material.color.copy(col)
                        fillMesh.material.emissive.copy(col)
                    }
                }
                if (child.isLine && !child.userData.panelIndex) {
                    child.material.color.copy(secondary)
                }
            }
        }
    }

    function applyFlatExplode(factor) {
        if (!previewBall || state.custViewMode !== 'flat') return
        if (factor === 0) {
            for (const child of previewBall.children) {
                child.position.set(0, 0, 0)
            }
            return
        }

        const panelCentroids = new Map()
        for (const child of previewBall.children) {
            const idx = child.userData.panelIndex
            if (idx == null) continue
            if (!panelCentroids.has(idx)) {
                const geo = child.geometry
                if (!geo) continue
                geo.computeBoundingBox()
                const cx = (geo.boundingBox.min.x + geo.boundingBox.max.x) / 2
                const cy = (geo.boundingBox.min.y + geo.boundingBox.max.y) / 2
                panelCentroids.set(idx, { x: cx, y: cy })
            }
        }

        const groupCx = [...panelCentroids.values()].reduce((s, c) => s + c.x, 0) / (panelCentroids.size || 1)
        const groupCy = [...panelCentroids.values()].reduce((s, c) => s + c.y, 0) / (panelCentroids.size || 1)

        for (const child of previewBall.children) {
            const idx = child.userData.panelIndex
            if (idx == null) continue
            const c = panelCentroids.get(idx)
            if (!c) continue
            const dx = c.x - groupCx
            const dy = c.y - groupCy
            child.position.set(dx * factor * 1.2, dy * factor * 1.2, 0)
        }
    }

    // --- Main updateBall ---

    function updateBall() {
        if (state.custViewMode === 'ball' || state.custViewMode !== 'flat') rememberBallCameraPose()

        const pos = getBallGroup().position.clone()
        const rot = getBallGroup().rotation.clone()
        mainScene.remove(getBallGroup())
        const next = buildMainBall()
        applyCanvasTexturesToExternalBall(next)
        next.position.copy(pos)
        next.rotation.copy(rot)
        mainScene.add(next)
        setBallGroup(next)
        if (onBallChanged) onBallChanged()

        custScene.remove(previewBall)
        if (state.custViewMode === 'flat') {
            previewBall = buildFlatLayout(ballConfig)
            applyFlatExplode(state.custExplodeFactor)
            custControls.autoRotate = false
            custControls.enableRotate = false
            custControls.enablePan = true
            custControls.minPolarAngle = Math.PI / 2
            custControls.maxPolarAngle = Math.PI / 2
            custControls.minDistance = 1
            custControls.maxDistance = 60
            custControls.target.set(0, 0, 0)
            custCamera.position.set(0, 0, ballConfig.design === 'classic' ? 18 : 9)
            custCamera.lookAt(0, 0, 0)
            custControls.update()
        } else {
            const result = buildExplodedBall(ballConfig, previewRadius)
            previewBall = result.group
            previewBall.scale.set(1, 1, 1)
            state.custExplodePanels = result.panels
            applyExplodeFactor(state.custExplodePanels, state.custExplodeFactor)
            if (state.custExplodeFactor === 0) addStitching(previewBall, ballConfig, previewRadius)

            if (state.selectedPanelIndex == null) {
                custControls.autoRotate = true
            }
            custControls.enableRotate = true
            custControls.enablePan = false
            custControls.minPolarAngle = 0
            custControls.maxPolarAngle = Math.PI
            custControls.minDistance = 0.9
            custControls.maxDistance = 4.4 + state.custExplodeFactor * 4.2
            restoreBallCameraPose()
        }
        custScene.add(previewBall)
        initBrushTextures()

        if (state.selectedPanelIndex != null) {
            setSelectionHighlight(state.selectedPanelIndex, true)
        }

        updateResetButtonVisibility()
    }

    function wireExplodeSlider() {
        const explodeSlider = document.getElementById('explode-slider')
        const explodeSliderDetail = document.getElementById('explode-slider-detail')
        const explodeVal = document.getElementById('explode-val')
        const explodeValDetail = document.getElementById('explode-val-detail')

        function syncExplode(v) {
            const pct = Math.round(v * 100) + '%'
            if (explodeVal) explodeVal.textContent = pct
            if (explodeValDetail) explodeValDetail.textContent = pct
            if (explodeSlider && explodeSlider.value !== String(v)) explodeSlider.value = String(v)
            if (explodeSliderDetail && explodeSliderDetail.value !== String(v)) explodeSliderDetail.value = String(v)
        }

        function onInput(value) {
            const prev = state.custExplodeFactor
            state.custExplodeFactor = parseFloat(value)
            syncExplode(state.custExplodeFactor)

            if (state.custViewMode === 'flat') {
                applyFlatExplode(state.custExplodeFactor)
                return
            }

            const crossedZero = (prev === 0) !== (state.custExplodeFactor === 0)
            if (crossedZero) {
                updateBall()
                return
            }

            if (state.custExplodePanels.length > 0) {
                applyExplodeFactor(state.custExplodePanels, state.custExplodeFactor)
            }
            custControls.maxDistance = 4.4 + state.custExplodeFactor * 4.2
        }

        explodeSlider?.addEventListener('input', (e) => onInput(e.target.value))
        explodeSliderDetail?.addEventListener('input', (e) => onInput(e.target.value))
        syncExplode(state.custExplodeFactor)
    }


    function wireCustomizerUi() {
        document.querySelectorAll('.design-btn[data-design]').forEach(btn => {
            btn.addEventListener('click', () => {
                ballConfig.design = btn.dataset.design
                switchDesignCanvases(ballConfig.design)
                document.querySelectorAll('.design-btn[data-design]').forEach(b => {
                    b.classList.toggle('active', b.dataset.design === ballConfig.design)
                })
                document.querySelectorAll('.studio-preset').forEach(b => {
                    b.classList.toggle('active', b.dataset.design === ballConfig.design)
                })
                selectPanel(null)
                updateBall()
                if (studioUI) studioUI.renderPatterns()
            })
        })

        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.flatPanTarget = null
                custControls.target.set(0, 0, 0)
                state.custViewMode = btn.dataset.view
                document.querySelectorAll('.view-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.view === state.custViewMode)
                })
                selectPanel(null)
                updateBall()
            })
        })

        function syncBaseColor(src, mirrorId) {
            const isSec = src.id.includes('secondary')
            if (isSec) ballConfig.secondaryColor = src.value
            else ballConfig.primaryColor = src.value
            const mirror = document.getElementById(mirrorId)
            if (mirror) mirror.value = src.value
            for (const [idx, entry] of panelCanvases) {
                if (entry.painted) continue
                const newBase = getPanelBaseColor(idx)
                if (entry.baseColor !== newBase) {
                    entry.ctx.fillStyle = newBase
                    entry.ctx.fillRect(0, 0, PANEL_TEX_SIZE, PANEL_TEX_SIZE)
                    entry.baseColor = newBase
                    entry.texture.needsUpdate = true
                }
            }
            updateBaseColorsInPlace()
        }

        document.getElementById('primary-color')?.addEventListener('input', (e) => syncBaseColor(e.target, 'primary-color-detail'))
        document.getElementById('secondary-color')?.addEventListener('input', (e) => syncBaseColor(e.target, 'secondary-color-detail'))
        document.getElementById('primary-color-detail')?.addEventListener('input', (e) => syncBaseColor(e.target, 'primary-color'))
        document.getElementById('secondary-color-detail')?.addEventListener('input', (e) => syncBaseColor(e.target, 'secondary-color'))

        const colorChangeHandler = () => updateBall()
        document.getElementById('primary-color')?.addEventListener('change', colorChangeHandler)
        document.getElementById('secondary-color')?.addEventListener('change', colorChangeHandler)
        document.getElementById('primary-color-detail')?.addEventListener('change', colorChangeHandler)
        document.getElementById('secondary-color-detail')?.addEventListener('change', colorChangeHandler)
    }

    if (panelRoot) {
        const updateZoomState = () => {
            const detailed = panelRoot.classList.contains('fullscreen')
            panelRoot.classList.toggle('zoomed-out', detailed)
            if (zoomStateLabel) zoomStateLabel.textContent = detailed ? 'Detailed View' : 'Focused View'
        }
        new MutationObserver(updateZoomState).observe(panelRoot, { attributes: true, attributeFilter: ['class'] })
        updateZoomState()
    }

    custControls.addEventListener('change', () => {
        if (state.custViewMode === 'ball') rememberBallCameraPose()
    })

    const studioUI = createStudioUI({ ballConfig, updateBall, selectPanel, invalidateCanvases })

    initBrushTextures()

    // Undo/redo keyboard shortcuts
    window.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
            e.preventDefault()
            performUndo()
        }
        if ((e.ctrlKey || e.metaKey) && (e.key === 'Z' || (e.key === 'z' && e.shiftKey))) {
            e.preventDefault()
            performRedo()
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
            e.preventDefault()
            performRedo()
        }
    })

    // Wire undo/redo toolbar buttons
    document.getElementById('tb-undo-btn')?.addEventListener('click', performUndo)
    document.getElementById('tb-redo-btn')?.addEventListener('click', performRedo)

    return {
        studioUI,
        state,
        custScene,
        custCamera,
        custRenderer,
        custControls,
        updateBall,
        wireExplodeSlider,
        wireCustomizerUi,
        animateCamera,
        debugAfterControlsUpdate,
        applyCanvasTextures: applyCanvasTexturesToExternalBall,
        undo: performUndo,
        redo: performRedo
    }
}

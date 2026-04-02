import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { addStitching } from '../../balls/mesh/build-ball-mesh.js'
import { buildExplodedBall, applyExplodeFactor } from '../../balls/index.js'
import { createTextureCanvas } from './texture-canvas.js'
import { createToolbar } from './toolbar.js'
import { createSelectTool } from './tools/select-tool.js'
import { createFillTool } from './tools/fill-tool.js'
import { createBrushTool } from './tools/brush-tool.js'
import { createPatternTool } from './tools/pattern-tool.js'
import { createShapeTool } from './tools/shape-tool.js'
import { createDecalTool } from './tools/decal-tool.js'
import { createColorPicker } from './color-picker.js'
import { createLayerPanel } from './layer-panel.js'
import { applySymmetricFill } from './symmetry.js'

export function createStudio({
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
    const panel = document.getElementById('panel-customizer')
    const viewport = document.querySelector('.studio-viewport')
    const studioCanvas = document.querySelector('canvas.studio-canvas')
    const propertiesEl = document.querySelector('.studio-properties')

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#0a0a0a')

    scene.add(new THREE.AmbientLight(0xffffff, 1.5))
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5)
    keyLight.position.set(3, 4, 5)
    scene.add(keyLight)
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8)
    fillLight.position.set(-3, 2, -3)
    scene.add(fillLight)

    const camera = new THREE.PerspectiveCamera(40, viewport.clientWidth / (viewport.clientHeight || 1), 0.1, 50)
    camera.position.set(0, 0, 1.7)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ canvas: studioCanvas, antialias: true })
    renderer.setSize(viewport.clientWidth, viewport.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const controls = new OrbitControls(camera, studioCanvas)
    controls.enableDamping = true
    controls.enablePan = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 3
    controls.minDistance = 0.8
    controls.maxDistance = 3.0

    const resizeObs = new ResizeObserver(() => {
        const w = viewport.clientWidth
        const h = viewport.clientHeight
        if (w === 0 || h === 0) return
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    resizeObs.observe(viewport)

    let texCanvas = createTextureCanvas(ballConfig.design, ballConfig.primaryColor, ballConfig.secondaryColor)

    const sphereGeo = new THREE.SphereGeometry(previewRadius, 64, 64)
    const sphereMat = new THREE.MeshLambertMaterial({
        map: texCanvas.texture,
        emissive: new THREE.Color('#111111'),
        emissiveIntensity: 0.15
    })
    const ballMesh = new THREE.Mesh(sphereGeo, sphereMat)
    scene.add(ballMesh)

    let stitchGroup = new THREE.Group()
    addStitching(stitchGroup, ballConfig, previewRadius)
    scene.add(stitchGroup)

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    let brushSize = 0.02
    let brushOpacity = 0.8
    let selectedPanel = -1
    let hoveredPanel = -1
    let activeTool = 'select'

    const colorPicker = createColorPicker(propertiesEl, {
        onColorChange(hex) {
            const nativeInput = document.getElementById('studio-active-color')
            if (nativeInput) nativeInput.value = hex
        },
        initialColor: '#ff3344'
    })

    function getActiveColor() { return colorPicker.getColor() }

    const toolInstances = {
        select: createSelectTool({
            getTextureCanvas: () => texCanvas,
            onPanelHover: (idx) => {
                hoveredPanel = idx
                updatePropertiesPanel()
            },
            onPanelSelect: (idx) => {
                selectedPanel = idx
                controls.autoRotate = idx < 0
                updatePropertiesPanel()
            }
        }),
        fill: createFillTool({
            getTextureCanvas: () => texCanvas,
            getActiveColor: getActiveColor,
            onPanelFilled: (panelIdx) => {
                if (symmetryEnabled) {
                    applySymmetricFill(texCanvas, panelIdx, getActiveColor(), ballConfig.design)
                }
                syncMainBall()
            }
        }),
        brush: createBrushTool({
            getTextureCanvas: () => texCanvas,
            getActiveColor: getActiveColor,
            getBrushSize: () => brushSize,
            getBrushOpacity: () => brushOpacity
        }),
        pattern: createPatternTool({
            getTextureCanvas: () => texCanvas,
            getActiveColor: getActiveColor,
            getSecondaryColor: () => ballConfig.secondaryColor,
            onPatternApplied: () => syncMainBall()
        }),
        shape: createShapeTool({
            getTextureCanvas: () => texCanvas,
            getActiveColor: getActiveColor
        }),
        decal: createDecalTool({
            getTextureCanvas: () => texCanvas
        })
    }

    function currentTool() {
        return toolInstances[activeTool] || toolInstances.select
    }

    const toolbar = createToolbar(document.querySelector('.studio-toolbar-container'), {
        onToolChange(id) {
            activeTool = id
            studioCanvas.style.cursor = id === 'brush' ? 'crosshair' : id === 'fill' ? 'pointer' : 'grab'
        }
    })

    function raycastUV(e) {
        const rect = studioCanvas.getBoundingClientRect()
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
        raycaster.setFromCamera(mouse, camera)
        const hits = raycaster.intersectObject(ballMesh)
        if (hits.length > 0 && hits[0].uv) return hits[0].uv
        return null
    }

    let pointerDownPos = null

    studioCanvas.addEventListener('pointerdown', e => {
        pointerDownPos = { x: e.clientX, y: e.clientY }
        const uv = raycastUV(e)
        currentTool().onDown(uv)
    })

    studioCanvas.addEventListener('pointermove', e => {
        const uv = raycastUV(e)
        currentTool().onMove(uv)
    })

    studioCanvas.addEventListener('pointerup', e => {
        currentTool().onUp()
        if (pointerDownPos) {
            const dx = e.clientX - pointerDownPos.x
            const dy = e.clientY - pointerDownPos.y
            if (Math.sqrt(dx * dx + dy * dy) < 5) {
                const uv = raycastUV(e)
                currentTool().onClick(uv)
            }
        }
        pointerDownPos = null
    })

    function rebuildStitching() {
        scene.remove(stitchGroup)
        stitchGroup = new THREE.Group()
        addStitching(stitchGroup, ballConfig, previewRadius)
        scene.add(stitchGroup)
    }

    function rebuildTexture() {
        texCanvas = createTextureCanvas(ballConfig.design, ballConfig.primaryColor, ballConfig.secondaryColor)
        sphereMat.map = texCanvas.texture
        sphereMat.needsUpdate = true
    }

    function syncMainBall() {
        const pos = getBallGroup().position.clone()
        const rot = getBallGroup().rotation.clone()
        mainScene.remove(getBallGroup())
        const next = buildMainBall()
        next.position.copy(pos)
        next.rotation.copy(rot)
        mainScene.add(next)
        setBallGroup(next)
        if (onBallChanged) onBallChanged()
    }

    function updateBall() {
        rebuildTexture()
        rebuildStitching()
        syncMainBall()
    }

    function updatePropertiesPanel() {
        if (!propertiesEl) return
        const panelIdx = selectedPanel >= 0 ? selectedPanel : hoveredPanel
        const panelLabel = propertiesEl.querySelector('.prop-panel-label')
        if (panelLabel) {
            panelLabel.textContent = panelIdx >= 0 ? `Panel ${panelIdx}` : 'No panel selected'
        }
    }

    function wireDesignButtons() {
        document.querySelectorAll('.studio-design-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                ballConfig.design = btn.dataset.design
                document.querySelectorAll('.studio-design-btn').forEach(b =>
                    b.classList.toggle('active', b.dataset.design === ballConfig.design))
                selectedPanel = -1
                updateBall()
            })
        })
    }

    function wireColorInputs() {
        const primaryInput = document.getElementById('studio-primary-color')
        const secondaryInput = document.getElementById('studio-secondary-color')
        const activeColorInput = document.getElementById('studio-active-color')
        const brushSizeInput = document.getElementById('studio-brush-size')
        const brushOpacityInput = document.getElementById('studio-brush-opacity')

        primaryInput?.addEventListener('input', e => {
            ballConfig.primaryColor = e.target.value
            texCanvas.setBaseColors(ballConfig.primaryColor, ballConfig.secondaryColor)
        })
        secondaryInput?.addEventListener('input', e => {
            ballConfig.secondaryColor = e.target.value
            texCanvas.setBaseColors(ballConfig.primaryColor, ballConfig.secondaryColor)
        })
        activeColorInput?.addEventListener('input', e => {
            colorPicker.setColor(e.target.value)
        })
        brushSizeInput?.addEventListener('input', e => {
            brushSize = parseFloat(e.target.value) / 100
        })
        brushOpacityInput?.addEventListener('input', e => {
            brushOpacity = parseFloat(e.target.value) / 100
        })
    }

    function wirePatternButtons() {
        const grid = document.getElementById('studio-patterns')
        if (!grid) return
        const patternTool = toolInstances.pattern
        patternTool.getPatterns().forEach(p => {
            const btn = document.createElement('button')
            btn.className = 'studio-pattern-btn'
            btn.textContent = p.name
            btn.title = p.description
            btn.addEventListener('click', () => patternTool.applyPattern(p.id))
            grid.appendChild(btn)
        })
    }

    function wireShapeButtons() {
        const shapeTool = toolInstances.shape
        document.querySelectorAll('.studio-shape-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                shapeTool.setShape(btn.dataset.shape)
                document.querySelectorAll('.studio-shape-btn').forEach(b =>
                    b.classList.toggle('active', b.dataset.shape === btn.dataset.shape))
            })
        })
    }

    const layerPanel = createLayerPanel(document.getElementById('studio-layer-container') || propertiesEl)

    let symmetryEnabled = false

    function wireDecalUpload() {
        document.getElementById('studio-decal-upload')?.addEventListener('change', async (e) => {
            const file = e.target.files?.[0]
            if (!file) return
            await toolInstances.decal.loadImage(file)
            toolbar.setActiveTool('decal')
            activeTool = 'decal'
            layerPanel.addLayer('Decal: ' + file.name, 'decal')
        })
    }

    function wireSymmetryToggle() {
        document.getElementById('studio-symmetry-toggle')?.addEventListener('change', (e) => {
            symmetryEnabled = e.target.checked
        })
    }

    function wireResetBtn() {
        document.getElementById('studio-reset-btn')?.addEventListener('click', () => {
            texCanvas.clearAllColors()
            selectedPanel = -1
            syncMainBall()
            updatePropertiesPanel()
        })
    }

    if (panel) {
        const updateZoomState = () => {
            const fs = panel.classList.contains('fullscreen')
            panel.classList.toggle('zoomed-out', fs)
        }
        new MutationObserver(updateZoomState).observe(panel, { attributes: true, attributeFilter: ['class'] })
        updateZoomState()
    }

    function tick() {
        texCanvas.tick()
        controls.update()
        renderer.render(scene, camera)
    }

    wireDesignButtons()
    wireColorInputs()
    wirePatternButtons()
    wireShapeButtons()
    wireDecalUpload()
    wireSymmetryToggle()
    wireResetBtn()

    return {
        scene,
        camera,
        renderer,
        controls,
        updateBall,
        tick
    }
}

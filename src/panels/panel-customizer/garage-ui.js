import * as THREE from 'three'
import {
    buildExplodedBall,
    applyExplodeFactor,
    addStitching
} from '../../balls/index.js'
import { DESIGN_TO_CUSTOM_PRESET } from '../../balls/config.js'

/**
 * Garage-style UI for the fullscreen customizer.
 * Manages: tab switching, design card thumbnails (static), hover-to-preview.
 */
export function createGarageUI({ ballConfig, previewRadius, updateBall, selectPanel, syncCustomDesignerUI }) {

    // --- Static thumbnail rendering (render once, not every frame) ---

    const thumbCamera = new THREE.PerspectiveCamera(40, 1, 0.1, 50)
    thumbCamera.position.set(0, 0.15, previewRadius * 3.6)
    thumbCamera.lookAt(0, 0, 0)

    function thumbLights() {
        const group = new THREE.Group()
        group.add(new THREE.AmbientLight(0xffffff, 1.5))
        const key = new THREE.DirectionalLight(0xffffff, 2.5)
        key.position.set(3, 4, 5)
        group.add(key)
        const fill = new THREE.DirectionalLight(0xffffff, 0.8)
        fill.position.set(-3, 2, -3)
        group.add(fill)
        return group
    }

    function renderDesignThumbnail(canvas, designName) {
        const scene = new THREE.Scene()
        scene.background = new THREE.Color('#0a0e14')
        scene.add(thumbLights())

        const config = {
            design: designName,
            primaryColor: ballConfig.primaryColor,
            secondaryColor: ballConfig.secondaryColor,
            custom: { ...ballConfig.custom }
        }
        const result = buildExplodedBall(config, previewRadius)
        applyExplodeFactor(result.panels, 0)
        addStitching(result.group, config, previewRadius)
        scene.add(result.group)

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
        renderer.setSize(128, 128)
        renderer.setPixelRatio(1)
        renderer.render(scene, thumbCamera)
        renderer.dispose()
    }

    function initDesignCards() {
        document.querySelectorAll('.design-card-canvas').forEach(canvas => {
            renderDesignThumbnail(canvas, canvas.dataset.designPreview)
        })
    }

    // --- Tab switching ---

    function wireGarageTabs() {
        document.querySelectorAll('.garage-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.garage-tab').forEach(t => t.classList.toggle('active', t === tab))
                document.querySelectorAll('.garage-tab-content').forEach(c => {
                    c.classList.toggle('active', c.dataset.tabContent === tab.dataset.tab)
                })
            })
        })
    }

    // --- Design card click/hover ---

    function wireDesignCards() {
        let savedConfig = null

        document.querySelectorAll('.design-card').forEach(card => {
            card.addEventListener('click', () => {
                savedConfig = null
                const design = card.dataset.design
                if (design === 'custom' && ballConfig.design !== 'custom') {
                    const preset = DESIGN_TO_CUSTOM_PRESET[ballConfig.design]
                    if (preset) Object.assign(ballConfig.custom, preset)
                }
                ballConfig.design = design

                document.querySelectorAll('.design-btn[data-design]').forEach(b => {
                    b.classList.toggle('active', b.dataset.design === design)
                })
                document.querySelectorAll('.design-card').forEach(c => {
                    c.classList.toggle('active', c.dataset.design === design)
                })

                const topSel = document.getElementById('topology-select')
                if (topSel) topSel.style.display = design === 'custom' ? '' : 'none'

                if (syncCustomDesignerUI) syncCustomDesignerUI()
                selectPanel(null)
                updateBall()
            })

            card.addEventListener('mouseenter', () => {
                const design = card.dataset.design
                if (design === ballConfig.design) return
                savedConfig = {
                    design: ballConfig.design,
                    custom: { ...ballConfig.custom }
                }
                if (design !== 'custom') {
                    ballConfig.design = design
                } else {
                    const preset = DESIGN_TO_CUSTOM_PRESET[savedConfig.design] || DESIGN_TO_CUSTOM_PRESET.brazuca
                    Object.assign(ballConfig.custom, preset)
                    ballConfig.design = 'custom'
                }
                updateBall()
            })

            card.addEventListener('mouseleave', () => {
                if (!savedConfig) return
                ballConfig.design = savedConfig.design
                Object.assign(ballConfig.custom, savedConfig.custom)
                savedConfig = null
                updateBall()
            })
        })
    }

    // --- Edge type card wiring ---

    function wireEdgeTypeCards() {
        document.querySelectorAll('.edge-type-card').forEach(card => {
            card.addEventListener('click', () => {
                ballConfig.custom.edgeStyle = card.dataset.edge
                if (card.dataset.edge === 'straight') {
                    ballConfig.custom.amplitude = 0
                } else if (ballConfig.custom.amplitude === 0) {
                    ballConfig.custom.amplitude = card.dataset.edge === 'bow' ? 0.18 : 0.5
                }
                document.querySelectorAll('.edge-type-card').forEach(c => {
                    c.classList.toggle('active', c.dataset.edge === ballConfig.custom.edgeStyle)
                })
                if (syncCustomDesignerUI) syncCustomDesignerUI()
                selectPanel(null)
                updateBall()
            })
        })
    }

    // --- Init ---

    function init() {
        wireGarageTabs()
        wireDesignCards()
        wireEdgeTypeCards()
        initDesignCards()
    }

    // No-op tick — thumbnails are static
    function tick() {}

    return { init, tick }
}

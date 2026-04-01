import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
    buildExplodedBall,
    buildFlatLayout,
    applyExplodeFactor,
    addStitching
} from '../../balls/index.js'
import { getPanelColor, setPanelColor, clearPanelColors, hasOverrides } from '../../balls/panel-colors.js'

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
        cameraAnimTarget: null
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

    // Debug: visual hit marker
    const debugHitMarker = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )
    debugHitMarker.visible = false
    custScene.add(debugHitMarker)

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
            flatDragging = true
            flatLastX = e.clientX
            flatLastY = e.clientY
            e.stopPropagation()
        })
        window.addEventListener('mousemove', e => {
            if (!flatDragging || state.custViewMode !== 'flat' || !previewBall) return
            const dx = e.clientX - flatLastX
            flatLastX = e.clientX
            flatLastY = e.clientY
            previewBall.rotation.z += dx * 0.01
        })
        window.addEventListener('mouseup', () => { flatDragging = false })
        custCanvas.addEventListener('touchstart', e => {
            if (state.custViewMode !== 'flat' || e.touches.length !== 1) return
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
                // Panel groups: first child is the fill mesh, second is the border line
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

    const HOVER_BLUE = new THREE.Color('#4488cc')

    function setHoverHighlight(panelIndex, on) {
        if (panelIndex == null || panelIndex === state.selectedPanelIndex) return
        if (state.custViewMode === 'flat') {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === panelIndex && child.isMesh) {
                    if (on) {
                        child._savedColor = child.material.color.getHex()
                        const c = new THREE.Color(child._savedColor)
                        c.lerp(HOVER_BLUE, 0.3)
                        child.material.color.set(c)
                    } else if (child._savedColor != null) {
                        child.material.color.setHex(child._savedColor)
                        delete child._savedColor
                    }
                }
            }
        } else {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === panelIndex && child.isGroup) {
                    const fillMesh = child.children[0]
                    if (!fillMesh || !fillMesh.material) continue
                    if (on) {
                        fillMesh._savedColor = fillMesh.material.color.getHex()
                        const c = new THREE.Color(fillMesh._savedColor)
                        c.lerp(HOVER_BLUE, 0.3)
                        fillMesh.material.color.set(c)
                    } else if (fillMesh._savedColor != null) {
                        fillMesh.material.color.setHex(fillMesh._savedColor)
                        delete fillMesh._savedColor
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

    function selectPanel(index) {
        if (state.selectedPanelIndex != null) {
            setSelectionHighlight(state.selectedPanelIndex, false)
        }
        state.selectedPanelIndex = index

        if (index != null) {
            setSelectionHighlight(index, true)
            panelColorBtn.style.display = ''

            // Set color input and swatch to panel's true color (not tinted by hover)
            const override = getPanelColor(ballConfig.design, index)
            let panelHex
            if (override) {
                panelHex = override
            } else {
                // Determine default color based on design and panel type
                // Classic: panels 0-11 are pentagons (secondary), 12+ are hexagons (primary)
                // Other designs: all panels use primary
                const isPent = ballConfig.design === 'classic' && index < 12
                panelHex = isPent ? ballConfig.secondaryColor : ballConfig.primaryColor
            }
            panelColorInput.value = panelHex
            panelColorBtn.style.backgroundColor = panelHex

            // In 3D view, stop rotation and animate camera to face panel
            if (state.custViewMode !== 'flat') {
                custControls.autoRotate = false
                const panel = state.custExplodePanels[index]
                if (panel) {
                    state.cameraAnimTarget = panel.centroidDir.clone().multiplyScalar(state.ballCamDistance)
                }
            }
        } else {
            panelColorBtn.style.display = 'none'

            // Resume rotation in 3D view
            if (state.custViewMode !== 'flat') {
                custControls.autoRotate = true
                state.cameraAnimTarget = null
            }
        }
    }

    function updateResetButtonVisibility() {
        panelResetBtn.style.display = hasOverrides(ballConfig.design) ? '' : 'none'
    }

    // --- Raycaster click detection ---

    let pointerDownPos = null
    let pointerDownResult = null
    let lastSelectTime = 0

    function doRaycast(e) {
        const rect = custCanvas.getBoundingClientRect()
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
        raycaster.setFromCamera(mouse, custCamera)

        const ballCenter = new THREE.Vector3()
        previewBall.getWorldPosition(ballCenter)
        const rayToCenter = ballCenter.clone().sub(raycaster.ray.origin)
        const projection = rayToCenter.dot(raycaster.ray.direction)
        const closest = raycaster.ray.origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(projection))
        const distToAxis = closest.distanceTo(ballCenter)
        const hitRadius = state.custViewMode === 'flat' ? Infinity : previewRadius * 1.15

        if (distToAxis > hitRadius) {
            debugHitMarker.visible = false
            return null
        }

        const camDist = custCamera.position.length()
        const intersects = raycaster.intersectObjects(getPanelMeshes(), false)
        for (const hit of intersects) {
            if (state.custViewMode !== 'flat' && hit.distance > camDist) continue
            const idx = findPanelIndex(hit.object)
            if (idx != null) {
                debugHitMarker.position.copy(hit.point)
                debugHitMarker.visible = true
                console.log(`[raycast] panel=${idx}, hit=(${hit.point.x.toFixed(2)},${hit.point.y.toFixed(2)},${hit.point.z.toFixed(2)}), dist=${hit.distance.toFixed(3)}`)
                return idx
            }
        }
        debugHitMarker.visible = false
        return null
    }

    custCanvas.addEventListener('pointerdown', e => {
        pointerDownPos = { x: e.clientX, y: e.clientY }
        pointerDownResult = doRaycast(e)
        console.log(`[click] pointerdown → panel ${pointerDownResult}`)
    })

    custCanvas.addEventListener('pointerup', e => {
        if (!pointerDownPos) return
        const dx = e.clientX - pointerDownPos.x
        const dy = e.clientY - pointerDownPos.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        pointerDownPos = null
        if (dist > 5) {
            pointerDownResult = null
            return
        }
        if (pointerDownResult === state.selectedPanelIndex && pointerDownResult != null) {
            pointerDownResult = null
            return
        }
        console.log(`[click] pointerup ACCEPTED → selecting panel ${pointerDownResult} (was: ${state.selectedPanelIndex})`)
        selectPanel(pointerDownResult)
        pointerDownResult = null
    })

    // --- Hover highlight ---

    custCanvas.addEventListener('pointermove', e => {
        const hoveredIndex = doRaycast(e)
        debugHitMarker.visible = false // don't show marker on hover

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

    // Live preview — just update customizer preview materials (cheap)
    panelColorInput.addEventListener('input', e => {
        if (state.selectedPanelIndex == null) return
        const color = e.target.value
        setPanelColor(ballConfig.design, state.selectedPanelIndex, color)
        panelColorBtn.style.backgroundColor = color
        updateResetButtonVisibility()

        // Update customizer preview materials in-place (cheap, no rebuild)
        if (state.custViewMode === 'flat') {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === state.selectedPanelIndex && child.isMesh) {
                    child.material.color.set(color)
                    child._selectSavedColor = new THREE.Color(color).getHex()
                }
            }
        } else {
            for (const child of previewBall.children) {
                if (child.userData.panelIndex === state.selectedPanelIndex && child.isGroup) {
                    const fillMesh = child.children[0]
                    if (fillMesh) {
                        fillMesh.material.color.set(color)
                        fillMesh.material.emissive.set(color)
                    }
                }
                // Also update stitching pentagon overlay if it exists
                if (child.userData.stitchPanelIndex === state.selectedPanelIndex && child.isMesh) {
                    child.material.color.set(color)
                }
            }
        }
    })

    // On picker close — rebuild everything with stitching (expensive, once)
    panelColorInput.addEventListener('change', e => {
        if (state.selectedPanelIndex == null) return
        // Rebuild main scene ball
        const pos = getBallGroup().position.clone()
        const rot = getBallGroup().rotation.clone()
        mainScene.remove(getBallGroup())
        const next = buildMainBall()
        next.position.copy(pos)
        next.rotation.copy(rot)
        mainScene.add(next)
        setBallGroup(next)
        if (onBallChanged) onBallChanged()
        // Rebuild customizer preview (so stitching picks up the color)
        if (state.custViewMode !== 'flat') {
            custScene.remove(previewBall)
            const result = buildExplodedBall(ballConfig, previewRadius)
            previewBall = result.group
            state.custExplodePanels = result.panels
            applyExplodeFactor(state.custExplodePanels, state.custExplodeFactor)
            if (state.custExplodeFactor === 0) addStitching(previewBall, ballConfig, previewRadius)
            custScene.add(previewBall)
            if (state.selectedPanelIndex != null) setSelectionHighlight(state.selectedPanelIndex, true)
        }
    })

    // --- Reset button ---

    panelResetBtn.addEventListener('click', e => {
        e.stopPropagation()
        clearPanelColors(ballConfig.design)
        selectPanel(null)
        updateResetButtonVisibility()
        updateBall()
    })

    // --- Camera animation (lerp toward selected panel) ---

    function animateCamera() {
        if (state.cameraAnimTarget && state.custViewMode !== 'flat') {
            custCamera.position.lerp(state.cameraAnimTarget, 0.08)
            custCamera.lookAt(0, 0, 0)
            const dist = custCamera.position.distanceTo(state.cameraAnimTarget)
            if (dist < 0.01) {
                custCamera.position.copy(state.cameraAnimTarget)
                state.cameraAnimTarget = null
            }
        }
    }

    // --- Main updateBall ---

    function updateBall() {
        if (state.custViewMode === 'ball' || state.custViewMode !== 'flat') rememberBallCameraPose()

        // Rebuild main scene ball + spin ball immediately after customizer
        const pos = getBallGroup().position.clone()
        const rot = getBallGroup().rotation.clone()
        mainScene.remove(getBallGroup())
        const next = buildMainBall()
        next.position.copy(pos)
        next.rotation.copy(rot)
        mainScene.add(next)
        setBallGroup(next)
        if (onBallChanged) onBallChanged()

        custScene.remove(previewBall)
        if (state.custViewMode === 'flat') {
            previewBall = buildFlatLayout(ballConfig)
            custControls.autoRotate = false
            custControls.enableRotate = false
            custControls.enablePan = true
            custControls.minPolarAngle = Math.PI / 2
            custControls.maxPolarAngle = Math.PI / 2
            custControls.minDistance = 1
            custControls.maxDistance = 60
            custCamera.position.set(0, 0, ballConfig.design === 'classic' ? 18 : 9)
            custCamera.lookAt(0, 0, 0)
        } else {
            const result = buildExplodedBall(ballConfig, previewRadius)
            previewBall = result.group
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

        // Re-apply selection highlight if still selected
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

            if (state.custViewMode === 'flat') return

            // Rebuild when crossing zero boundary (stitching add/remove)
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
                document.querySelectorAll('.design-btn[data-design]').forEach(b => {
                    b.classList.toggle('active', b.dataset.design === ballConfig.design)
                })
                selectPanel(null)
                updateBall()
            })
        })

        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.custViewMode = btn.dataset.view
                document.querySelectorAll('.view-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.view === state.custViewMode)
                })
                selectPanel(null)
                updateBall()
            })
        })

        document.getElementById('primary-color').addEventListener('input', (e) => {
            ballConfig.primaryColor = e.target.value
            const mirror = document.getElementById('primary-color-detail')
            if (mirror) mirror.value = ballConfig.primaryColor
            updateBall()
        })

        document.getElementById('secondary-color').addEventListener('input', (e) => {
            ballConfig.secondaryColor = e.target.value
            const mirror = document.getElementById('secondary-color-detail')
            if (mirror) mirror.value = ballConfig.secondaryColor
            updateBall()
        })

        document.getElementById('primary-color-detail')?.addEventListener('input', (e) => {
            ballConfig.primaryColor = e.target.value
            const mirror = document.getElementById('primary-color')
            if (mirror) mirror.value = ballConfig.primaryColor
            updateBall()
        })

        document.getElementById('secondary-color-detail')?.addEventListener('input', (e) => {
            ballConfig.secondaryColor = e.target.value
            const mirror = document.getElementById('secondary-color')
            if (mirror) mirror.value = ballConfig.secondaryColor
            updateBall()
        })
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

    return {
        state,
        custScene,
        custCamera,
        custRenderer,
        custControls,
        updateBall,
        wireExplodeSlider,
        wireCustomizerUi,
        animateCamera
    }
}

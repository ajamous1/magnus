import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
    buildBallMesh,
    buildExplodedBall,
    buildFlatLayout,
    applyExplodeFactor
} from '../../balls/index.js'

/**
 * 3D / exploded / flat preview for the ball customizer (panel-customizer).
 *
 * @param {object} opts
 * @param {import('three').Scene} opts.mainScene
 * @param {object} opts.ballConfig — mutable ball preset (from `balls` module)
 * @param {number} opts.ballRadius — main pitch ball radius
 * @param {number} opts.previewRadius — customizer viewport ball scale
 * @param {() => import('three').Object3D} opts.getBallGroup
 * @param {(g: import('three').Object3D) => void} opts.setBallGroup
 */
export function createCustomizerPreview({
    mainScene,
    ballConfig,
    ballRadius,
    previewRadius,
    getBallGroup,
    setBallGroup
}) {
    const panelRoot = document.getElementById('panel-customizer')
    const zoomStateLabel = document.getElementById('zoom-state-label')
    const state = {
        custViewMode: 'ball',
        custExplodeFactor: 0,
        custExplodePanels: [],
        ballCamDistance: 1.7,
        ballCamDirection: new THREE.Vector3(0, 0, 1)
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

    let previewBall = buildBallMesh(ballConfig, previewRadius)
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
    custControls.autoRotateSpeed = 2.0
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

    function updateBall() {
        if (state.custViewMode === 'ball') rememberBallCameraPose()

        const pos = getBallGroup().position.clone()
        const rot = getBallGroup().rotation.clone()
        mainScene.remove(getBallGroup())
        const next = buildBallMesh(ballConfig, ballRadius)
        next.position.copy(pos)
        next.rotation.copy(rot)
        mainScene.add(next)
        setBallGroup(next)

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
            state.custExplodePanels = []
            if (state.custExplodeFactor > 0) {
                const result = buildExplodedBall(ballConfig, previewRadius)
                previewBall = result.group
                state.custExplodePanels = result.panels
                applyExplodeFactor(state.custExplodePanels, state.custExplodeFactor)
            } else {
                previewBall = buildBallMesh(ballConfig, previewRadius)
            }
            custControls.autoRotate = true
            custControls.enableRotate = true
            custControls.enablePan = false
            custControls.minPolarAngle = 0
            custControls.maxPolarAngle = Math.PI
            custControls.minDistance = 0.9
            custControls.maxDistance = 4.4 + state.custExplodeFactor * 4.2
            restoreBallCameraPose()
        }
        custScene.add(previewBall)
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

            const crossedZero = (prev === 0) !== (state.custExplodeFactor === 0)
            if (crossedZero) {
                updateBall()
            } else if (state.custExplodeFactor > 0 && state.custExplodePanels.length > 0) {
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
                updateBall()
            })
        })

        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.custViewMode = btn.dataset.view
                document.querySelectorAll('.view-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.view === state.custViewMode)
                })
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
        wireCustomizerUi
    }
}

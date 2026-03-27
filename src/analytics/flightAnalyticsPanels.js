import * as THREE from 'three'

/**
 * Birdseye trail (panel 4) + 2D flight dynamics chart (panel 5).
 *
 * @param {object} opts
 * @param {import('three').Scene} opts.scene
 * @param {import('three').GridHelper} opts.gridHelper
 * @param {import('three').Group} opts.fieldLines
 * @param {import('three').Mesh} opts.backWall
 * @param {import('three').Mesh} opts.leftWall
 * @param {import('three').Mesh} opts.rightWall
 * @param {HTMLElement} opts.panel4Panel
 * @param {HTMLCanvasElement} opts.panel4Canvas
 * @param {HTMLElement} opts.panel5Panel
 * @param {HTMLCanvasElement} opts.panel5Canvas
 * @param {() => import('three').Object3D} opts.getBallGroup
 */
export function createFlightAnalyticsPanels({
    scene,
    gridHelper,
    fieldLines,
    backWall,
    leftWall,
    rightWall,
    panel4Panel,
    panel4Canvas,
    panel5Panel,
    panel5Canvas,
    getBallGroup
}) {
    const physicsHistory = []
    const maxPhysicsHistory = 24

    const flightAnalyticsState = { latestFlightSeries: null }

    const panel4Camera = new THREE.PerspectiveCamera(38, Math.max(1, panel4Panel.clientWidth) / Math.max(1, panel4Panel.clientHeight), 0.1, 220)
    panel4Camera.position.set(0, 18, -23)
    panel4Camera.lookAt(0, 0.8, -8)

    const panel4Renderer = new THREE.WebGLRenderer({ canvas: panel4Canvas, antialias: true, alpha: false })
    panel4Renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    panel4Renderer.setSize(panel4Panel.clientWidth || 1, panel4Panel.clientHeight || 1)
    panel4Canvas.style.transform = 'none'

    const panel4MaxTrail = 260
    const panel4TrailPoints = []
    const panel4TrailPositions = new Float32Array(panel4MaxTrail * 3)
    const panel4TrailGeometry = new THREE.BufferGeometry()
    panel4TrailGeometry.setAttribute('position', new THREE.BufferAttribute(panel4TrailPositions, 3))
    panel4TrailGeometry.setDrawRange(0, 0)
    const panel4TrailMaterial = new THREE.LineBasicMaterial({ color: '#66d1ff', transparent: true, opacity: 0.95 })
    const panel4TrailLine = new THREE.Line(panel4TrailGeometry, panel4TrailMaterial)
    panel4TrailLine.visible = false
    scene.add(panel4TrailLine)
    let panel4TrailFade = 0

    const metricsEls = {
        power: document.getElementById('metric-power'),
        curve: document.getElementById('metric-curve'),
        spin: document.getElementById('metric-spin'),
        target: document.getElementById('metric-target')
    }

    const panel5Ctx = panel5Canvas.getContext('2d')

    function clearTrail() {
        panel4TrailPoints.length = 0
        panel4TrailGeometry.setDrawRange(0, 0)
        panel4TrailFade = 0
    }

    function pushTrailPoint() {
        panel4TrailFade = 1
        panel4TrailMaterial.opacity = 0.95
        const ballGroup = getBallGroup()
        const p = { x: ballGroup.position.x, z: ballGroup.position.z }
        const last = panel4TrailPoints[panel4TrailPoints.length - 1]
        if (last && Math.hypot(p.x - last.x, p.z - last.z) < 0.045) return
        panel4TrailPoints.push(p)
        if (panel4TrailPoints.length > panel4MaxTrail) panel4TrailPoints.shift()

        const count = panel4TrailPoints.length
        for (let i = 0; i < count; i++) {
            const idx = i * 3
            panel4TrailPositions[idx] = panel4TrailPoints[i].x
            panel4TrailPositions[idx + 1] = 0.06
            panel4TrailPositions[idx + 2] = panel4TrailPoints[i].z
        }
        panel4TrailGeometry.attributes.position.needsUpdate = true
        panel4TrailGeometry.setDrawRange(0, count)
    }

    function fadeTrail() {
        if (panel4TrailPoints.length === 0) return
        panel4TrailFade = Math.max(0, panel4TrailFade - 0.018)
        panel4TrailMaterial.opacity = 0.95 * panel4TrailFade
        if (panel4TrailFade <= 0.01) {
            clearTrail()
        }
    }

    function renderBirdseye() {
        const prevGridVisible = gridHelper.visible
        const prevFieldLines = fieldLines.visible
        const prevBackWall = backWall.visible
        const prevLeftWall = leftWall.visible
        const prevRightWall = rightWall.visible
        gridHelper.visible = false
        fieldLines.visible = false
        backWall.visible = false
        leftWall.visible = false
        rightWall.visible = false
        panel4TrailLine.visible = panel4TrailPoints.length > 1
        panel4Camera.lookAt(0, 0.8, -8)
        panel4Renderer.render(scene, panel4Camera)
        panel4TrailLine.visible = false
        gridHelper.visible = prevGridVisible
        fieldLines.visible = prevFieldLines
        backWall.visible = prevBackWall
        leftWall.visible = prevLeftWall
        rightWall.visible = prevRightWall
    }

    function resizeDataPanels() {
        const dpr = Math.min(window.devicePixelRatio, 2)

        const w4 = Math.max(1, panel4Panel.clientWidth)
        const h4 = Math.max(1, panel4Panel.clientHeight)
        panel4Camera.aspect = w4 / h4
        panel4Camera.updateProjectionMatrix()
        panel4Renderer.setPixelRatio(dpr)
        panel4Renderer.setSize(w4, h4)

        const w5 = panel5Panel.clientWidth
        const h5 = panel5Panel.clientHeight
        panel5Canvas.width = Math.max(1, Math.floor(w5 * dpr))
        panel5Canvas.height = Math.max(1, Math.floor(h5 * dpr))
        panel5Ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const dataPanelResizeObserver = new ResizeObserver(() => {
        resizeDataPanels()
        renderBirdseye()
        drawFlightGraph()
    })
    dataPanelResizeObserver.observe(panel4Panel)
    dataPanelResizeObserver.observe(panel5Panel)
    resizeDataPanels()

    function recordPhysicsSample(sample) {
        physicsHistory.push(sample)
        if (physicsHistory.length > maxPhysicsHistory) physicsHistory.shift()

        metricsEls.power.textContent = `${sample.peakSpeed.toFixed(1)} m/s`
        metricsEls.curve.textContent = sample.avgCd.toFixed(3)
        metricsEls.spin.textContent = sample.maxCl.toFixed(3)
        metricsEls.target.textContent = `${Math.round(sample.reynolds / 1000)}k`

        renderBirdseye()
        drawFlightGraph()
    }

    function drawFlightGraph() {
        const w = panel5Panel.clientWidth
        const h = panel5Panel.clientHeight
        panel5Ctx.clearRect(0, 0, w, h)
        panel5Ctx.fillStyle = '#090909'
        panel5Ctx.fillRect(0, 0, w, h)

        const left = 18
        const right = w - 18
        const top = 74
        const bottom = h - 34

        panel5Ctx.strokeStyle = '#1d1d1d'
        panel5Ctx.lineWidth = 1
        panel5Ctx.beginPath()
        panel5Ctx.moveTo(left, bottom)
        panel5Ctx.lineTo(right, bottom)
        panel5Ctx.moveTo(left, top)
        panel5Ctx.lineTo(left, bottom)
        panel5Ctx.stroke()

        const series = flightAnalyticsState.latestFlightSeries
        if (!series || series.t.length < 2) {
            panel5Ctx.fillStyle = '#4f4f4f'
            panel5Ctx.font = '12px sans-serif'
            panel5Ctx.fillText('Kick to populate flight dynamics', left, top + 18)
            return
        }

        const n = series.t.length
        const maxSpeed = Math.max(...series.speed, 1)
        const maxHeight = Math.max(...series.height, 1)
        const maxLat = Math.max(...series.lateralAccel.map(v => Math.abs(v)), 0.1)

        const drawSeries = (arr, color, mapFn) => {
            panel5Ctx.strokeStyle = color
            panel5Ctx.lineWidth = 2
            panel5Ctx.beginPath()
            for (let i = 0; i < n; i++) {
                const x = left + series.t[i] * (right - left)
                const y = mapFn(arr[i], i)
                if (i === 0) panel5Ctx.moveTo(x, y)
                else panel5Ctx.lineTo(x, y)
            }
            panel5Ctx.stroke()
        }

        drawSeries(series.speed, '#4aa3ff', (v) => bottom - (v / maxSpeed) * (bottom - top))
        drawSeries(series.height, '#80f0a5', (v) => bottom - (v / maxHeight) * (bottom - top))
        drawSeries(series.lateralAccel, '#ff8a4a', (v) => bottom - ((v + maxLat) / (maxLat * 2)) * (bottom - top))

        panel5Ctx.fillStyle = '#6a6a6a'
        panel5Ctx.font = '10px sans-serif'
        panel5Ctx.fillText('Speed', w - 154, h - 12)
        panel5Ctx.fillStyle = '#ff8a4a'
        panel5Ctx.fillText('Lat Acc', w - 108, h - 12)
        panel5Ctx.fillStyle = '#80f0a5'
        panel5Ctx.fillText('Height', w - 64, h - 12)
    }

    renderBirdseye()
    drawFlightGraph()

    return {
        flightAnalyticsState,
        clearTrail,
        pushTrailPoint,
        fadeTrail,
        renderBirdseye,
        resizeDataPanels,
        recordPhysicsSample,
        drawFlightGraph,
    }
}

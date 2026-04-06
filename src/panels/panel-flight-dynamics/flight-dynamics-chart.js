/**
 * Canvas chart + metric readouts for the flight dynamics panel.
 *
 * @param {object} opts
 * @param {HTMLElement} opts.panel — root element for this panel
 * @param {HTMLCanvasElement} opts.canvas
 * @param {{ latestFlightSeries: object | null }} opts.flightAnalyticsState — shared with kick / physics
 */
export function createFlightDynamicsChart({ panel, canvas, flightAnalyticsState }) {
    const chartCtx = canvas.getContext('2d')
    let ghostAnimId = null
    let ghostProgress = 0
    let ghostAnimDone = false
    let ghostStartTime = 0
    const GHOST_DURATION = 2000

    const metricsEls = {
        power: document.getElementById('metric-power'),
        curve: document.getElementById('metric-curve'),
        spin: document.getElementById('metric-spin'),
        target: document.getElementById('metric-target')
    }

    const physicsHistory = []
    const maxPhysicsHistory = 24

    function resizeFlightDynamicsChart() {
        const dpr = Math.min(window.devicePixelRatio, 2)
        const w = panel.clientWidth
        const h = panel.clientHeight
        canvas.width = Math.max(1, Math.floor(w * dpr))
        canvas.height = Math.max(1, Math.floor(h * dpr))
        chartCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function drawFlightGraph() {
        const w = panel.clientWidth
        const h = panel.clientHeight
        const isLight = document.documentElement.dataset.theme === 'light'
        chartCtx.clearRect(0, 0, w, h)
        chartCtx.fillStyle = isLight ? '#f8f8f8' : '#090909'
        chartCtx.fillRect(0, 0, w, h)

        const left = 18
        const right = w - 18
        const top = 74
        const bottom = h - 34

        chartCtx.strokeStyle = isLight ? '#ddd' : '#1d1d1d'
        chartCtx.lineWidth = 1
        chartCtx.beginPath()
        chartCtx.moveTo(left, bottom)
        chartCtx.lineTo(right, bottom)
        chartCtx.moveTo(left, top)
        chartCtx.lineTo(left, bottom)
        chartCtx.stroke()

        const series = flightAnalyticsState.latestFlightSeries
        if (!series || series.t.length < 2) {
            if (ghostAnimDone) {
                ghostProgress = 1.0
                drawGhostFrame()
            } else if (!ghostAnimId) {
                startGhostAnim()
            }
            return
        }
        stopGhostAnim()

        const n = series.t.length
        const maxSpeed = Math.max(...series.speed, 1)
        const maxHeight = Math.max(...series.height, 1)
        const maxLat = Math.max(...series.lateralAccel.map(v => Math.abs(v)), 0.1)

        const drawSeries = (arr, color, mapFn) => {
            chartCtx.strokeStyle = color
            chartCtx.lineWidth = 2
            chartCtx.beginPath()
            for (let i = 0; i < n; i++) {
                const x = left + series.t[i] * (right - left)
                const y = mapFn(arr[i], i)
                if (i === 0) chartCtx.moveTo(x, y)
                else chartCtx.lineTo(x, y)
            }
            chartCtx.stroke()
        }

        drawSeries(series.speed, '#4aa3ff', (v) => bottom - (v / maxSpeed) * (bottom - top))
        drawSeries(series.height, '#80f0a5', (v) => bottom - (v / maxHeight) * (bottom - top))
        drawSeries(series.lateralAccel, '#ff8a4a', (v) => bottom - ((v + maxLat) / (maxLat * 2)) * (bottom - top))

        chartCtx.fillStyle = isLight ? '#888' : '#6a6a6a'
        chartCtx.font = '10px sans-serif'
        chartCtx.fillText('Speed', w - 154, h - 12)
        chartCtx.fillStyle = '#ff8a4a'
        chartCtx.fillText('Lat Acc', w - 108, h - 12)
        chartCtx.fillStyle = '#80f0a5'
        chartCtx.fillText('Height', w - 64, h - 12)
    }

    function recordPhysicsSample(sample) {
        physicsHistory.push(sample)
        if (physicsHistory.length > maxPhysicsHistory) physicsHistory.shift()

        metricsEls.power.textContent = `${sample.peakSpeed.toFixed(1)} m/s`
        metricsEls.curve.textContent = sample.avgCd.toFixed(3)
        metricsEls.spin.textContent = sample.maxCl.toFixed(3)
        metricsEls.target.textContent = `${Math.round(sample.reynolds / 1000)}k`
    }

    function drawGhostFrame() {
        const w = panel.clientWidth
        const h = panel.clientHeight
        const isLight = document.documentElement.dataset.theme === 'light'
        chartCtx.clearRect(0, 0, w, h)
        chartCtx.fillStyle = isLight ? '#f8f8f8' : '#090909'
        chartCtx.fillRect(0, 0, w, h)

        const left = 18, right = w - 18, top = 74, bottom = h - 34
        chartCtx.strokeStyle = isLight ? '#ddd' : '#1d1d1d'
        chartCtx.lineWidth = 1
        chartCtx.beginPath()
        chartCtx.moveTo(left, bottom)
        chartCtx.lineTo(right, bottom)
        chartCtx.moveTo(left, top)
        chartCtx.lineTo(left, bottom)
        chartCtx.stroke()

        const cx = (left + right) / 2
        const cy = (top + bottom) / 2
        const totalSteps = 100
        const drawCount = Math.round(ghostProgress * totalSteps)

        const ghostAlpha = isLight ? 0.18 : 0.12

        const drawGhostLine = (color, yFn) => {
            if (drawCount < 2) return
            chartCtx.strokeStyle = color
            chartCtx.lineWidth = 2
            chartCtx.lineJoin = 'round'
            chartCtx.lineCap = 'round'
            chartCtx.beginPath()
            for (let i = 0; i <= drawCount; i++) {
                const t = i / totalSteps
                const x = left + t * (right - left)
                const y = yFn(t)
                if (i === 0) chartCtx.moveTo(x, y); else chartCtx.lineTo(x, y)
            }
            chartCtx.stroke()
        }

        drawGhostLine(`rgba(74, 163, 255, ${ghostAlpha})`, t =>
            top + 8 + (1 - Math.pow(1 - t, 1.5)) * (bottom - top - 16)
        )
        drawGhostLine(`rgba(128, 240, 165, ${ghostAlpha})`, t =>
            bottom - 8 - 4 * t * (1 - t) * (bottom - top - 24) * 0.7
        )
        drawGhostLine(`rgba(255, 138, 74, ${ghostAlpha})`, t =>
            cy - Math.exp(-Math.pow((t - 0.25) * 6, 2)) * 0.5 * (bottom - top) * 0.3
        )

        chartCtx.fillStyle = isLight ? '#aaa' : '#3a3a3a'
        chartCtx.font = '600 11px -apple-system, sans-serif'
        chartCtx.textAlign = 'center'
        chartCtx.fillText('Flick the ball to see flight data', cx, cy + 4)
        chartCtx.textAlign = 'start'
    }

    function ghostAnimLoop(now) {
        const elapsed = now - ghostStartTime
        ghostProgress = Math.min(elapsed / GHOST_DURATION, 1)
        drawGhostFrame()
        if (ghostProgress >= 1) {
            ghostAnimDone = true
            ghostAnimId = null
            return
        }
        ghostAnimId = requestAnimationFrame(ghostAnimLoop)
    }

    function startGhostAnim() {
        if (ghostAnimId || ghostAnimDone) return
        ghostProgress = 0
        setTimeout(() => {
            if (ghostAnimId || ghostAnimDone) return
            ghostStartTime = performance.now()
            ghostAnimId = requestAnimationFrame(ghostAnimLoop)
        }, 250)
    }

    function stopGhostAnim() {
        if (ghostAnimId) {
            cancelAnimationFrame(ghostAnimId)
            ghostAnimId = null
        }
    }

    return {
        resizeFlightDynamicsChart,
        drawFlightGraph,
        recordPhysicsSample
    }
}

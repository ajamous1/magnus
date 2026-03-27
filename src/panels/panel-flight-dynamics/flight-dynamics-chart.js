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
        chartCtx.clearRect(0, 0, w, h)
        chartCtx.fillStyle = '#090909'
        chartCtx.fillRect(0, 0, w, h)

        const left = 18
        const right = w - 18
        const top = 74
        const bottom = h - 34

        chartCtx.strokeStyle = '#1d1d1d'
        chartCtx.lineWidth = 1
        chartCtx.beginPath()
        chartCtx.moveTo(left, bottom)
        chartCtx.lineTo(right, bottom)
        chartCtx.moveTo(left, top)
        chartCtx.lineTo(left, bottom)
        chartCtx.stroke()

        const series = flightAnalyticsState.latestFlightSeries
        if (!series || series.t.length < 2) {
            chartCtx.fillStyle = '#4f4f4f'
            chartCtx.font = '12px sans-serif'
            chartCtx.fillText('Kick to populate flight dynamics', left, top + 18)
            return
        }

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

        chartCtx.fillStyle = '#6a6a6a'
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

    return {
        resizeFlightDynamicsChart,
        drawFlightGraph,
        recordPhysicsSample
    }
}

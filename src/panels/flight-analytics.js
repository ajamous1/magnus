import { createBirdseyePanel } from './panel-birdseye/birdseye-panel.js'
import { createFlightDynamicsChart } from './panel-flight-dynamics/flight-dynamics-chart.js'

/**
 * Wires birdseye + flight dynamics panels with shared resize and flight series state.
 *
 * @param {object} opts
 * @param {object} opts.birdseye — `{ panel, canvas }` for the birdseye tracker
 * @param {object} opts.flightDynamics — `{ panel, canvas }` for the flight dynamics chart
 */
export function createFlightAnalyticsPanels(opts) {
    const flightAnalyticsState = { latestFlightSeries: null }

    const flightDynamics = createFlightDynamicsChart({
        ...opts.flightDynamics,
        flightAnalyticsState
    })

    const birdseye = createBirdseyePanel({
        scene: opts.scene,
        gridHelper: opts.gridHelper,
        fieldLines: opts.fieldLines,
        backWall: opts.backWall,
        leftWall: opts.leftWall,
        rightWall: opts.rightWall,
        ...opts.birdseye,
        getBallGroup: opts.getBallGroup
    })

    function resizeDataPanels() {
        birdseye.resizeBirdseye()
        flightDynamics.resizeFlightDynamicsChart()
    }

    function recordPhysicsSample(sample) {
        flightDynamics.recordPhysicsSample(sample)
        birdseye.renderBirdseye()
        flightDynamics.drawFlightGraph()
    }

    const dataPanelResizeObserver = new ResizeObserver(() => {
        resizeDataPanels()
        birdseye.renderBirdseye()
        flightDynamics.drawFlightGraph()
    })
    dataPanelResizeObserver.observe(opts.birdseye.panel)
    dataPanelResizeObserver.observe(opts.flightDynamics.panel)
    resizeDataPanels()

    birdseye.renderBirdseye()
    flightDynamics.drawFlightGraph()

    return {
        flightAnalyticsState,
        clearTrail: birdseye.clearTrail,
        pushTrailPoint: birdseye.pushTrailPoint,
        fadeTrail: birdseye.fadeTrail,
        renderBirdseye: birdseye.renderBirdseye,
        resizeDataPanels,
        recordPhysicsSample,
        drawFlightGraph: flightDynamics.drawFlightGraph,
        applyBirdseyeTheme: birdseye.applyTheme
    }
}

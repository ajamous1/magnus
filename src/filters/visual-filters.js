/**
 * Debug panel "View Filter" — CSS filters on the main canvas (and panel 4 reset).
 */

/**
 * @param {Object} opts
 * @param {HTMLCanvasElement} opts.mainCanvas — main WebGL canvas
 * @param {HTMLCanvasElement} opts.panel4Canvas
 * @param {{ visualFilter: string, filterStrength: number }} opts.debugParams — mutable
 * @returns {{ apply: () => void, getFluidOverlay: () => boolean, getWindTunnelOverlay: () => boolean }}
 */
export function createVisualFilterController({ mainCanvas, panel4Canvas, debugParams }) {
    let fluidOverlayEnabled = false
    let windTunnelOverlayEnabled = false

    function apply() {
        const s = debugParams.filterStrength
        fluidOverlayEnabled = debugParams.visualFilter === 'fluidDynamics'
        windTunnelOverlayEnabled = debugParams.visualFilter === 'windTunnel'

        if (fluidOverlayEnabled) {
            mainCanvas.style.filter = `contrast(${1.05 * s}) saturate(${1.12 * s})`
        } else if (windTunnelOverlayEnabled) {
            mainCanvas.style.filter = `contrast(${1.08 * s}) saturate(${1.05 * s}) brightness(${1.02 * s})`
        } else {
            mainCanvas.style.filter = 'none'
        }
        panel4Canvas.style.filter = 'none'
    }

    return {
        apply,
        getFluidOverlay: () => fluidOverlayEnabled,
        getWindTunnelOverlay: () => windTunnelOverlayEnabled
    }
}

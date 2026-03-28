/**
 * Debug panel "View Filter" — CSS filters on the main canvas (birdseye canvas stays unfiltered).
 */

/**
 * @param {Object} opts
 * @param {HTMLCanvasElement} opts.mainCanvas — main WebGL canvas (shooter)
 * @param {HTMLCanvasElement} opts.canvas — birdseye panel canvas (stays unfiltered; API symmetry with `panel` modules)
 * @param {{ visualFilter: string, filterStrength: number }} opts.debugParams — mutable
 * @returns {{ apply: () => void, getFluidOverlay: () => boolean, getWindTunnelOverlay: () => boolean }}
 */
export function createVisualFilterController({ mainCanvas, canvas, debugParams }) {
    let fluidOverlayEnabled = false
    let windTunnelOverlayEnabled = false

    function apply() {
        const s = debugParams.filterStrength
        fluidOverlayEnabled = debugParams.visualFilter === 'fluidDynamics'
        windTunnelOverlayEnabled = debugParams.visualFilter === 'windTunnel'

        mainCanvas.style.filter = 'none'
        canvas.style.filter = 'none'
    }

    return {
        apply,
        getFluidOverlay: () => fluidOverlayEnabled,
        getWindTunnelOverlay: () => windTunnelOverlayEnabled
    }
}

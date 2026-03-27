/**
 * Default simulation / debug tuning values (lil-gui binds to this object by reference).
 */
export function createDebugParams() {
    return {
        powerMultiplier: 1.0,
        arcHeight: 2.5,
        resetDelay: 1.0,
        spinMultiplier: 1.0,
        curveIntensity: 1.0,
        randomness: 1.0,
        windSpeed: 0,
        windStrength: 0,
        windDirX: 1,
        windDirY: 0,
        windDirZ: 0,
        gravity: 1.0,
        orbitControls: false,
        vectorOverlay: false,
        showVelocityVector: true,
        showMagnusVector: true,
        showDragVector: false,
        showGravityVector: true,
        showWindVector: false,
        visualFilter: 'none',
        filterStrength: 1.0,
        flowDiagnostics: false,
        flowDebugArrows: false,
        flowDebugVolumes: false,
        flowDebugLogs: false,
        flowDebugStreamlines: false
    }
}

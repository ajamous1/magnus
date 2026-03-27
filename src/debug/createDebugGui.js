import GUI from 'lil-gui'

/**
 * @param {HTMLElement} container
 * @param {ReturnType<import('./debugParams.js').createDebugParams>} debugParams
 * @param {object} hooks
 * @param {(enabled: boolean) => void} hooks.onOrbitControlsChange
 * @param {() => void} hooks.onVectorFolderChange
 * @param {() => void} hooks.onVisualFilterChange
 */
export function createDebugGui(container, debugParams, hooks) {
    const gui = new GUI({ title: 'Debug', container })

    const kickFolder = gui.addFolder('Kick')
    kickFolder.add(debugParams, 'powerMultiplier', 0.5, 3, 0.1).name('Power')
    kickFolder.add(debugParams, 'arcHeight', 0.5, 5, 0.1).name('Arc Height')
    kickFolder.add(debugParams, 'curveIntensity', 0.0, 3, 0.1).name('Curve Intensity')
    kickFolder.add(debugParams, 'spinMultiplier', 0.0, 3, 0.1).name('Spin')

    const physicsFolder = gui.addFolder('Physics')
    physicsFolder.add(debugParams, 'gravity', 0.2, 3, 0.1).name('Gravity')
    physicsFolder.add(debugParams, 'windSpeed', -5, 5, 0.1).name('Wind')
    physicsFolder.add(debugParams, 'randomness', 0.0, 2, 0.1).name('Randomness')

    const settingsFolder = gui.addFolder('Settings')
    settingsFolder.add(debugParams, 'resetDelay', 0.3, 3, 0.1).name('Reset Delay')
    settingsFolder.add(debugParams, 'orbitControls').name('Orbit Controls').onChange(hooks.onOrbitControlsChange)

    const vectorsFolder = gui.addFolder('Vectors')
    vectorsFolder.add(debugParams, 'vectorOverlay').name('Show Vectors').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showVelocityVector').name('Velocity').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showMagnusVector').name('Magnus').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showDragVector').name('Drag').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showGravityVector').name('Gravity').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showWindVector').name('Wind').onChange(hooks.onVectorFolderChange)

    const filtersFolder = gui.addFolder('Filters')
    filtersFolder.add(debugParams, 'visualFilter', ['none', 'fluidDynamics', 'windTunnel'])
        .name('View Filter')
        .onChange(hooks.onVisualFilterChange)
    filtersFolder.add(debugParams, 'filterStrength', 0.5, 1.5, 0.05)
        .name('Filter Strength')
        .onChange(hooks.onVisualFilterChange)

    window.addEventListener('keydown', (e) => {
        if (e.key === 'h' || e.key === 'H') gui._hidden ? gui.show() : gui.hide()
    })

    return { gui }
}

import GUI from 'lil-gui'

/**
 * @param {HTMLElement} container
 * @param {ReturnType<import('./debug-params.js').createDebugParams>} debugParams
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
    kickFolder.close()

    const physicsFolder = gui.addFolder('Physics')
    physicsFolder.add(debugParams, 'gravity', 0.2, 3, 0.1).name('Gravity')
    physicsFolder.add(debugParams, 'windSpeed', -5, 5, 0.1).name('Wind')
    physicsFolder.add(debugParams, 'windStrength', 0, 4, 0.05).name('Flow Wind')
    physicsFolder.add(debugParams, 'windDirX', -1, 1, 0.05).name('Wind Dir X')
    physicsFolder.add(debugParams, 'windDirY', -1, 1, 0.05).name('Wind Dir Y')
    physicsFolder.add(debugParams, 'windDirZ', -1, 1, 0.05).name('Wind Dir Z')
    physicsFolder.add(debugParams, 'randomness', 0.0, 2, 0.1).name('Randomness')
    physicsFolder.close()

    const settingsFolder = gui.addFolder('Settings')
    settingsFolder.add(debugParams, 'resetDelay', 0.3, 3, 0.1).name('Reset Delay')
    settingsFolder.add(debugParams, 'orbitControls').name('Orbit Controls').onChange(hooks.onOrbitControlsChange)
    settingsFolder.close()

    const vectorsFolder = gui.addFolder('Vectors')
    vectorsFolder.add(debugParams, 'vectorOverlay').name('Show Vectors').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showVelocityVector').name('Velocity').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showMagnusVector').name('Magnus').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showDragVector').name('Drag').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showGravityVector').name('Gravity').onChange(hooks.onVectorFolderChange)
    vectorsFolder.add(debugParams, 'showWindVector').name('Wind').onChange(hooks.onVectorFolderChange)
    vectorsFolder.close()

    const spinFolder = gui.addFolder('Spin Preview')
    const speedCtrl = spinFolder.add(debugParams, 'spinSpeed', 1, 50, 1).name('Speed')
    const axisXCtrl = spinFolder.add(debugParams, 'spinAxisX', -1, 1, 0.05).name('Axis X')
    const axisYCtrl = spinFolder.add(debugParams, 'spinAxisY', -1, 1, 0.05).name('Axis Y')
    const axisZCtrl = spinFolder.add(debugParams, 'spinAxisZ', -1, 1, 0.05).name('Axis Z')
    spinFolder.add(debugParams, 'showAngularMomentum').name('Angular Momentum')

    // --- Orientation circle widget ---
    const circleSize = 120
    const circleCanvas = document.createElement('canvas')
    circleCanvas.width = circleSize
    circleCanvas.height = circleSize
    circleCanvas.className = 'spin-orientation-circle'
    const circleCtx = circleCanvas.getContext('2d')

    const circleWrapper = document.createElement('div')
    circleWrapper.style.cssText = 'display:flex;justify-content:center;padding:8px 0 4px'
    circleWrapper.appendChild(circleCanvas)

    // Insert after the lil-gui controllers
    const folderChildren = spinFolder.domElement.querySelector('.children')
    if (folderChildren) folderChildren.appendChild(circleWrapper)

    function drawCircle() {
        const cx = circleSize / 2
        const cy = circleSize / 2
        const r = circleSize / 2 - 12
        circleCtx.clearRect(0, 0, circleSize, circleSize)

        // Outer ring
        circleCtx.beginPath()
        circleCtx.arc(cx, cy, r, 0, Math.PI * 2)
        circleCtx.strokeStyle = 'rgba(255,255,255,0.12)'
        circleCtx.lineWidth = 1.5
        circleCtx.stroke()

        // Crosshairs
        circleCtx.beginPath()
        circleCtx.moveTo(cx - r, cy)
        circleCtx.lineTo(cx + r, cy)
        circleCtx.moveTo(cx, cy - r)
        circleCtx.lineTo(cx, cy + r)
        circleCtx.strokeStyle = 'rgba(255,255,255,0.05)'
        circleCtx.lineWidth = 1
        circleCtx.stroke()

        // Indicator dot — map spinAxisX to horizontal, spinAxisZ to vertical
        const dotX = cx + debugParams.spinAxisX * r
        const dotY = cy - debugParams.spinAxisZ * r
        circleCtx.beginPath()
        circleCtx.arc(dotX, dotY, 6, 0, Math.PI * 2)
        circleCtx.fillStyle = '#4a9eff'
        circleCtx.fill()
        circleCtx.beginPath()
        circleCtx.arc(dotX, dotY, 6, 0, Math.PI * 2)
        circleCtx.strokeStyle = 'rgba(255,255,255,0.3)'
        circleCtx.lineWidth = 1
        circleCtx.stroke()

        // Labels
        circleCtx.font = '9px -apple-system, sans-serif'
        circleCtx.fillStyle = '#555'
        circleCtx.textAlign = 'center'
        circleCtx.fillText('X', cx + r + 8, cy + 3)
        circleCtx.fillText('Z', cx, cy - r - 5)
    }

    drawCircle()

    // Redraw when sliders change
    axisXCtrl.onChange(drawCircle)
    axisZCtrl.onChange(drawCircle)

    // Circle drag interaction
    let circleDragging = false
    circleCanvas.addEventListener('pointerdown', e => {
        circleDragging = true
        updateCircleFromPointer(e)
        circleCanvas.setPointerCapture(e.pointerId)
    })
    circleCanvas.addEventListener('pointermove', e => {
        if (!circleDragging) return
        updateCircleFromPointer(e)
    })
    circleCanvas.addEventListener('pointerup', () => { circleDragging = false })

    function updateCircleFromPointer(e) {
        const rect = circleCanvas.getBoundingClientRect()
        const cx = circleSize / 2
        const cy = circleSize / 2
        const r = circleSize / 2 - 12
        let px = (e.clientX - rect.left) - cx
        let py = -((e.clientY - rect.top) - cy)
        // Clamp to circle radius
        const len = Math.sqrt(px * px + py * py)
        if (len > r) { px = px / len * r; py = py / len * r }
        debugParams.spinAxisX = px / r
        debugParams.spinAxisZ = py / r
        axisXCtrl.updateDisplay()
        axisZCtrl.updateDisplay()
        drawCircle()
    }

    spinFolder.close()

    const debugHint = document.getElementById('debug-hint')

    function toggleDebug() {
        const isVisible = container.classList.toggle('visible')
        if (debugHint) debugHint.style.opacity = isVisible ? '0' : '1'
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'h' || e.key === 'H') toggleDebug()
    })

    // Mobile settings button
    const toggleBtn = document.getElementById('debug-toggle-btn')
    if (toggleBtn) toggleBtn.addEventListener('click', toggleDebug)

    return { gui, drawCircle, speedCtrl, axisXCtrl, axisYCtrl, axisZCtrl }
}

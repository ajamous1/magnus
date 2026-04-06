import { setPanelColor, clearPanelColors } from '../../balls/panel-colors.js'

/**
 * Pattern presets — per-panel color schemes for each ball design.
 * Panel indices match face iteration order in buildExplodedBall:
 *   classic: 0-11 = pentagons, 12-31 = hexagons
 *   jabulani: 0-3 = triangles, 4-7 = hexagons
 *   brazuca: 0-5 = quad panels (+X, -X, +Y, -Y, +Z, -Z faces)
 *   trionda: 0-3 = triangle panels
 */
const PATTERNS = {
    classic: [
        { name: 'Default', colors: {} },
        {
            name: 'Traditional',
            primary: '#ffffff', secondary: '#1a1a1a',
            colors: { 0:'#1a1a1a', 1:'#1a1a1a', 2:'#1a1a1a', 3:'#1a1a1a', 4:'#1a1a1a', 5:'#1a1a1a', 6:'#1a1a1a', 7:'#1a1a1a', 8:'#1a1a1a', 9:'#1a1a1a', 10:'#1a1a1a', 11:'#1a1a1a' }
        },
        {
            name: 'Telstar',
            primary: '#f5f2ea', secondary: '#1a1a1a',
            colors: { 0:'#111111', 1:'#111111', 2:'#111111', 3:'#111111', 4:'#111111', 5:'#111111', 6:'#111111', 7:'#111111', 8:'#111111', 9:'#111111', 10:'#111111', 11:'#111111',
                      12:'#f5f2ea', 13:'#f5f2ea', 14:'#f5f2ea', 15:'#f5f2ea', 16:'#f5f2ea', 17:'#f5f2ea', 18:'#f5f2ea', 19:'#f5f2ea', 20:'#f5f2ea', 21:'#f5f2ea', 22:'#f5f2ea', 23:'#f5f2ea', 24:'#f5f2ea', 25:'#f5f2ea', 26:'#f5f2ea', 27:'#f5f2ea', 28:'#f5f2ea', 29:'#f5f2ea', 30:'#f5f2ea', 31:'#f5f2ea' }
        },
        {
            name: 'Tango',
            primary: '#f5f0e8', secondary: '#2a2a2a',
            colors: { 0:'#2a2a2a', 1:'#2a2a2a', 2:'#2a2a2a', 3:'#2a2a2a', 4:'#2a2a2a', 5:'#2a2a2a', 6:'#2a2a2a', 7:'#2a2a2a', 8:'#2a2a2a', 9:'#2a2a2a', 10:'#2a2a2a', 11:'#2a2a2a',
                      12:'#d4c8b0', 13:'#f5f0e8', 14:'#d4c8b0', 15:'#f5f0e8', 16:'#d4c8b0', 17:'#f5f0e8', 18:'#d4c8b0', 19:'#f5f0e8', 20:'#d4c8b0', 21:'#f5f0e8', 22:'#d4c8b0', 23:'#f5f0e8', 24:'#d4c8b0', 25:'#f5f0e8', 26:'#d4c8b0', 27:'#f5f0e8', 28:'#d4c8b0', 29:'#f5f0e8', 30:'#d4c8b0', 31:'#f5f0e8' }
        },
        {
            name: 'Neon',
            primary: '#0a0a0a', secondary: '#00ffaa',
            colors: { 0:'#00ffaa', 1:'#00ff66', 2:'#00ffaa', 3:'#00ff66', 4:'#00ffaa', 5:'#00ff66', 6:'#00ffaa', 7:'#00ff66', 8:'#00ffaa', 9:'#00ff66', 10:'#00ffaa', 11:'#00ff66' }
        },
    ],
    brazuca: [
        { name: 'Default', colors: {} },
        {
            name: 'WC 2014',
            primary: '#f5f0ea', secondary: '#1a1a1a',
            colors: { 0:'#e84420', 1:'#1a6633', 2:'#f5f0ea', 3:'#2244aa', 4:'#e84420', 5:'#1a6633' }
        },
        {
            name: 'Final Rio',
            primary: '#f0ece0', secondary: '#8b7340',
            colors: { 0:'#c8a84a', 1:'#1a1a1a', 2:'#c8a84a', 3:'#1a1a1a', 4:'#c8a84a', 5:'#1a1a1a' }
        },
        {
            name: 'Winter',
            primary: '#e8e8ee', secondary: '#334455',
            colors: { 0:'#cc3322', 1:'#334455', 2:'#e8e8ee', 3:'#cc3322', 4:'#334455', 5:'#e8e8ee' }
        },
        {
            name: 'Ember',
            primary: '#1a0800', secondary: '#ff4400',
            colors: { 0:'#ff2200', 1:'#ff6600', 2:'#ffaa00', 3:'#ff2200', 4:'#ff6600', 5:'#ffaa00' }
        },
        {
            name: 'Deep Sea',
            primary: '#001828', secondary: '#006688',
            colors: { 0:'#003355', 1:'#005577', 2:'#007799', 3:'#0099bb', 4:'#00bbcc', 5:'#44ddee' }
        },
    ],
    jabulani: [
        { name: 'Default', colors: {} },
        {
            name: 'WC 2010',
            primary: '#f5f2ea', secondary: '#333333',
            colors: { 0:'#d4a020', 1:'#228833', 2:'#cc2233', 3:'#1a4488', 4:'#f5f2ea', 5:'#f5f2ea', 6:'#f5f2ea', 7:'#f5f2ea' }
        },
        {
            name: 'Jo\'burg Gold',
            primary: '#f0ece0', secondary: '#8b7340',
            colors: { 0:'#c8a030', 1:'#c8a030', 2:'#c8a030', 3:'#c8a030', 4:'#f0ece0', 5:'#f0ece0', 6:'#f0ece0', 7:'#f0ece0' }
        },
        {
            name: 'Angola',
            primary: '#f5f2ea', secondary: '#444444',
            colors: { 0:'#cc3322', 1:'#1a1a1a', 2:'#cc3322', 3:'#1a1a1a', 4:'#f5f2ea', 5:'#f5f2ea', 6:'#f5f2ea', 7:'#f5f2ea' }
        },
        {
            name: 'Vuvuzela',
            primary: '#f0ece0', secondary: '#333333',
            colors: { 0:'#dd6622', 1:'#22aa55', 2:'#dd6622', 3:'#22aa55', 4:'#ffcc00', 5:'#ffcc00', 6:'#ffcc00', 7:'#ffcc00' }
        },
        {
            name: 'Eclipse',
            primary: '#0e0e1e', secondary: '#333355',
            colors: { 0:'#6622cc', 1:'#cc2266', 2:'#2266cc', 3:'#22cc66', 4:'#0e0e1e', 5:'#0e0e1e', 6:'#0e0e1e', 7:'#0e0e1e' }
        },
    ],
    trionda: [
        { name: 'Default', colors: {} },
        {
            name: 'WC 2026',
            primary: '#f0ece4', secondary: '#222222',
            colors: { 0:'#cc2233', 1:'#22884a', 2:'#2255aa', 3:'#6a2244' }
        },
        {
            name: 'USA',
            primary: '#f0ece4', secondary: '#1a2a5a',
            colors: { 0:'#bb2233', 1:'#f0ece4', 2:'#1a2a5a', 3:'#bb2233' }
        },
        {
            name: 'Mexico',
            primary: '#f0ece4', secondary: '#1a4a2a',
            colors: { 0:'#006847', 1:'#f0ece4', 2:'#ce1126', 3:'#006847' }
        },
        {
            name: 'Canada',
            primary: '#f0ece4', secondary: '#cc2233',
            colors: { 0:'#cc2233', 1:'#f0ece4', 2:'#cc2233', 3:'#f0ece4' }
        },
        {
            name: 'Midnight',
            primary: '#111118', secondary: '#2a2a3a',
            colors: { 0:'#1a1a2a', 1:'#2a2a3a', 2:'#1a1a2a', 3:'#2a2a3a' }
        },
        {
            name: 'Carnival',
            primary: '#fff5f0', secondary: '#333333',
            colors: { 0:'#ff4466', 1:'#44ccff', 2:'#ffcc22', 3:'#44ff88' }
        },
    ]
}

/**
 * Symmetry groups: panels that are structurally identical.
 * Filling one panel in a group fills them all.
 */
export const SYMMETRY_GROUPS = {
    classic: [
        [0,1,2,3,4,5,6,7,8,9,10,11],      // all pentagons
        [12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] // all hexagons
    ],
    jabulani: [
        [0,1,2,3],   // all triangles
        [4,5,6,7],   // all hexagons
    ],
    brazuca: [
        [0,1,2,3,4,5], // all panels are equivalent (cube faces)
    ],
    trionda: [
        [0,1,2,3], // all panels are equivalent (tetrahedron faces)
    ],
}

/**
 * Studio toolbar controller for the fullscreen customizer.
 */
export function createStudioUI({
    ballConfig,
    updateBall,
    selectPanel,
    invalidateCanvases,
    syncExternalBalls,
    runWithColorSyncSuppressed
}) {
    let activeTool = 'select'
    let mirrorMode = false
    let activeColor = '#cc2233'
    let activePatternIdx = -1

    function getPatterns() {
        return PATTERNS[ballConfig.design] || []
    }

    function getSymmetryPeers(panelIndex) {
        const groups = SYMMETRY_GROUPS[ballConfig.design] || []
        const group = groups.find(g => g.includes(panelIndex))
        return group ? group.filter(i => i !== panelIndex) : []
    }

    // --- Fill operations ---

    function fillPanel(index) {
        if (index == null) return
        if (mirrorMode) {
            const groups = SYMMETRY_GROUPS[ballConfig.design] || []
            const group = groups.find(g => g.includes(index))
            if (group) {
                group.forEach(i => setPanelColor(ballConfig.design, i, activeColor))
                if (invalidateCanvases) invalidateCanvases(group)
            } else {
                setPanelColor(ballConfig.design, index, activeColor)
                if (invalidateCanvases) invalidateCanvases(index)
            }
        } else {
            setPanelColor(ballConfig.design, index, activeColor)
            if (invalidateCanvases) invalidateCanvases(index)
        }
        updateBall()
        if (syncExternalBalls) syncExternalBalls()
    }

    function handlePanelClick(index) {
        if (activeTool === 'fill') {
            fillPanel(index)
            return true
        }
        return false
    }

    function getActiveColor() { return activeColor }
    function getActiveTool() { return activeTool }
    function getBrushSize() { return parseInt(document.getElementById('tb-brush-size')?.value || '12') }

    // --- Dropdown management ---

    function closeAllDropdowns() {
        document.querySelectorAll('.tb-dropdown').forEach(d => d.classList.remove('open'))
    }

    function toggleDropdown(id) {
        const dd = document.getElementById(id)
        if (!dd) return
        const wasOpen = dd.classList.contains('open')
        closeAllDropdowns()
        if (!wasOpen) dd.classList.add('open')
    }

    // Close dropdowns on outside click
    document.addEventListener('click', e => {
        if (!e.target.closest('.tb-dropdown') && !e.target.closest('[id$="-toggle"]')) {
            closeAllDropdowns()
        }
    })

    // --- Patterns ---

    function renderPatterns() {
        const container = document.getElementById('tb-pattern-list')
        if (!container) return
        container.innerHTML = ''
        activePatternIdx = -1
        const patterns = getPatterns()
        patterns.forEach((pat, i) => {
            const btn = document.createElement('button')
            btn.className = 'tb-pattern'
            btn.dataset.patternIndex = i

            const dots = document.createElement('div')
            dots.className = 'tb-pattern-dots'
            const colorVals = Object.values(pat.colors).slice(0, 5)
            if (colorVals.length === 0) {
                colorVals.push(ballConfig.primaryColor, ballConfig.secondaryColor)
            }
            colorVals.forEach(c => {
                const dot = document.createElement('div')
                dot.className = 'tb-pattern-dot'
                dot.style.background = c
                dots.appendChild(dot)
            })
            btn.appendChild(dots)

            const name = document.createElement('span')
            name.className = 'tb-pattern-name'
            name.textContent = pat.name
            btn.appendChild(name)

            btn.addEventListener('click', () => applyPattern(i))
            container.appendChild(btn)
        })
    }

    function applyPattern(index) {
        const patterns = getPatterns()
        const pat = patterns[index]
        if (!pat) return

        const run = () => {
            if (invalidateCanvases) invalidateCanvases('all')
            clearPanelColors(ballConfig.design)
            if (pat.primary) ballConfig.primaryColor = pat.primary
            if (pat.secondary) ballConfig.secondaryColor = pat.secondary
            for (const [idx, color] of Object.entries(pat.colors)) {
                setPanelColor(ballConfig.design, parseInt(idx), color)
            }

            activePatternIdx = index
            document.querySelectorAll('.tb-pattern').forEach(p => {
                p.classList.toggle('active', parseInt(p.dataset.patternIndex) === index)
            })
            selectPanel(null)
            updateBall()
            if (syncExternalBalls) syncExternalBalls()

            if (pat.primary) {
                document.querySelectorAll('#primary-color, #primary-color-detail').forEach(el => { el.value = pat.primary })
            }
            if (pat.secondary) {
                document.querySelectorAll('#secondary-color, #secondary-color-detail').forEach(el => { el.value = pat.secondary })
            }
        }

        if (runWithColorSyncSuppressed) runWithColorSyncSuppressed(run)
        else run()
        closeAllDropdowns()
    }

    // --- Wiring ---

    function wireTools() {
        const mirrorBtn = document.querySelector('.tb-btn[data-tool="mirror"]')

        document.querySelectorAll('.tb-btn[data-tool]').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.dataset.tool === 'mirror') {
                    mirrorMode = !mirrorMode
                    btn.classList.toggle('active', mirrorMode)
                    return
                }
                activeTool = btn.dataset.tool
                document.querySelectorAll('.tb-btn[data-tool]').forEach(b => {
                    if (b.dataset.tool === 'mirror') return
                    b.classList.toggle('active', b.dataset.tool === activeTool)
                })
                const brushControls = document.getElementById('tb-brush-controls')
                const shapeControls = document.getElementById('tb-shape-controls')
                if (brushControls) brushControls.style.display = activeTool === 'brush' ? '' : 'none'
                if (shapeControls) shapeControls.style.display = activeTool === 'shape' ? '' : 'none'
            })
        })

        document.querySelectorAll('.tb-shape-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tb-shape-opt').forEach(b => b.classList.toggle('active', b === btn))
                activeShape = btn.dataset.shape
            })
        })
    }

    let activeShape = 'star'

    function wireDropdowns() {
        document.getElementById('tb-swatch-toggle')?.addEventListener('click', e => {
            e.stopPropagation()
            toggleDropdown('tb-swatch-dropdown')
        })
        document.getElementById('tb-pattern-toggle')?.addEventListener('click', e => {
            e.stopPropagation()
            toggleDropdown('tb-pattern-dropdown')
        })
        document.getElementById('tb-explode-toggle')?.addEventListener('click', e => {
            e.stopPropagation()
            const slider = document.getElementById('tb-explode-slider')
            if (slider) slider.classList.toggle('open')
        })
        // Close explode slider on outside click
        document.addEventListener('click', e => {
            if (!e.target.closest('#tb-explode-slider') && !e.target.closest('#tb-explode-toggle')) {
                document.getElementById('tb-explode-slider')?.classList.remove('open')
            }
        })
    }

    function wireSwatches() {
        const paintInput = document.getElementById('tb-paint-color')

        document.querySelectorAll('.tb-swatch').forEach(btn => {
            btn.addEventListener('click', () => {
                activeColor = btn.dataset.color
                if (paintInput) paintInput.value = activeColor
                closeAllDropdowns()
            })
        })

        paintInput?.addEventListener('input', () => {
            activeColor = paintInput.value
        })
    }

    function wireReset() {
        document.getElementById('studio-reset-btn')?.addEventListener('click', () => {
            clearPanelColors(ballConfig.design)
            if (invalidateCanvases) invalidateCanvases('all')
            activePatternIdx = -1
            document.querySelectorAll('.tb-pattern').forEach(p => p.classList.remove('active'))
            selectPanel(null)
            updateBall()
            if (syncExternalBalls) syncExternalBalls()
        })
    }

    function init() {
        wireTools()
        wireDropdowns()
        wireSwatches()
        wireReset()
        renderPatterns()
    }

    function getShapeSize() { return parseInt(document.getElementById('tb-shape-size')?.value || '25') }
    function getActiveShape() { return activeShape }

    function isMirrorMode() { return mirrorMode }

    return { init, getActiveTool, handlePanelClick, renderPatterns, getActiveColor, getBrushSize, getShapeSize, getActiveShape, isMirrorMode, getSymmetryPeers }
}

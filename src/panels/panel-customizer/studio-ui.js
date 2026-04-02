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
            name: 'World Cup',
            primary: '#ffffff', secondary: '#222222',
            colors: { 0:'#1a1a1a', 1:'#1a1a1a', 2:'#1a1a1a', 3:'#1a1a1a', 4:'#1a1a1a', 5:'#1a1a1a', 6:'#1a1a1a', 7:'#1a1a1a', 8:'#1a1a1a', 9:'#1a1a1a', 10:'#1a1a1a', 11:'#1a1a1a' }
        },
        {
            name: 'Al Rihla',
            primary: '#f0ece0', secondary: '#1a4a6a',
            colors: { 0:'#1a4a6a', 1:'#b82030', 2:'#1a4a6a', 3:'#b82030', 4:'#1a4a6a', 5:'#b82030', 6:'#1a4a6a', 7:'#b82030', 8:'#1a4a6a', 9:'#b82030', 10:'#1a4a6a', 11:'#b82030',
                      12:'#f0ece0', 13:'#d4a840', 14:'#f0ece0', 15:'#1a4a6a', 16:'#f0ece0', 17:'#d4a840', 18:'#f0ece0', 19:'#1a4a6a' }
        },
        {
            name: 'Neon Night',
            primary: '#0a0a0a', secondary: '#00ffaa',
            colors: { 0:'#00ffaa', 1:'#00ffaa', 2:'#00ffaa', 3:'#00ffaa', 4:'#00ffaa', 5:'#00ffaa', 6:'#00ffaa', 7:'#00ffaa', 8:'#00ffaa', 9:'#00ffaa', 10:'#00ffaa', 11:'#00ffaa' }
        },
        {
            name: 'Sunset',
            primary: '#fff0dd', secondary: '#cc3322',
            colors: { 0:'#ff5533', 1:'#ff3355', 2:'#ff7722', 3:'#ff5533', 4:'#ff3355', 5:'#ff7722', 6:'#ff5533', 7:'#ff3355', 8:'#ff7722', 9:'#ff5533', 10:'#ff3355', 11:'#ff7722' }
        },
    ],
    brazuca: [
        { name: 'Default', colors: {} },
        {
            // Real Brazuca: white base, each panel has colored swooshes
            // Panels: +X(0), -X(1), +Y(2), -Y(3), +Z(4), -Z(5)
            // Approximation: alternating panels get dominant accent colors
            name: 'WC 2014',
            primary: '#f5f0ea', secondary: '#1a1a1a',
            colors: { 0:'#e84420', 1:'#1a6633', 2:'#f5f0ea', 3:'#1a2266', 4:'#f5f0ea', 5:'#e84420' }
        },
        {
            name: 'Brazuca Final',
            primary: '#f5f0ea', secondary: '#8b7340',
            colors: { 0:'#c8a84a', 1:'#2a2a2a', 2:'#f5f0ea', 3:'#c8a84a', 4:'#2a2a2a', 5:'#f5f0ea' }
        },
        {
            name: 'Fire',
            primary: '#220800', secondary: '#ff4400',
            colors: { 0:'#ff2200', 1:'#ff6600', 2:'#ffaa00', 3:'#ff2200', 4:'#ff6600', 5:'#ffaa00' }
        },
        {
            name: 'Ocean',
            primary: '#002244', secondary: '#00aacc',
            colors: { 0:'#003366', 1:'#005588', 2:'#0077aa', 3:'#0099cc', 4:'#00bbdd', 5:'#44ccee' }
        },
    ],
    jabulani: [
        { name: 'Default', colors: {} },
        {
            // Real Jabulani: white base, 4 triangles have colored accents (gold/green/red/blue bands)
            // Hex panels stay mostly white, triangles get accent colors
            name: 'WC 2010',
            primary: '#f5f2ea', secondary: '#333333',
            colors: { 0:'#d4a020', 1:'#228833', 2:'#cc2233', 3:'#1a4488', 4:'#f5f2ea', 5:'#f5f2ea', 6:'#f5f2ea', 7:'#f5f2ea' }
        },
        {
            name: 'Jabulani Winter',
            primary: '#e8e0d0', secondary: '#444444',
            colors: { 0:'#cc3322', 1:'#cc3322', 2:'#cc3322', 3:'#cc3322', 4:'#e8e0d0', 5:'#e8e0d0', 6:'#e8e0d0', 7:'#e8e0d0' }
        },
        {
            name: 'Galaxy',
            primary: '#0e0e1e', secondary: '#4422aa',
            colors: { 0:'#6622cc', 1:'#cc2266', 2:'#2266cc', 3:'#22cc66', 4:'#0e0e1e', 5:'#0e0e1e', 6:'#0e0e1e', 7:'#0e0e1e' }
        },
    ],
    trionda: [
        { name: 'Default', colors: {} },
        {
            // Real Trionda: white base, 4 panels each with different color theme
            // Panel 0 (opp vertex 0) = red/maroon, Panel 1 = green, Panel 2 = blue, Panel 3 = maroon
            name: 'WC 2026',
            primary: '#f0ece4', secondary: '#222222',
            colors: { 0:'#cc2233', 1:'#22884a', 2:'#2255aa', 3:'#6a2244' }
        },
        {
            name: 'Trionda Training',
            primary: '#f0ece4', secondary: '#333333',
            colors: { 0:'#cc3333', 1:'#33aa55', 2:'#3366cc', 3:'#888822' }
        },
        {
            name: 'Stealth',
            primary: '#111111', secondary: '#2a2a2a',
            colors: { 0:'#1a1a1a', 1:'#2a2a2a', 2:'#1a1a1a', 3:'#2a2a2a' }
        },
        {
            name: 'Candy',
            primary: '#fff5f0', secondary: '#ff66aa',
            colors: { 0:'#ff66aa', 1:'#66ccff', 2:'#ffcc44', 3:'#88ff66' }
        },
    ]
}

/**
 * Symmetry groups: panels that are structurally identical.
 * Filling one panel in a group fills them all.
 */
const SYMMETRY_GROUPS = {
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
export function createStudioUI({ ballConfig, updateBall, selectPanel }) {
    let activeTool = 'select'
    let activeColor = '#ffffff'
    let activePatternIdx = -1

    function getPatterns() {
        return PATTERNS[ballConfig.design] || []
    }

    // --- Fill operations ---

    function fillPanel(index) {
        if (index == null) return
        setPanelColor(ballConfig.design, index, activeColor)
        updateBall()
    }

    function symmetricFillPanel(index) {
        if (index == null) return
        const groups = SYMMETRY_GROUPS[ballConfig.design] || []
        const group = groups.find(g => g.includes(index))
        if (group) {
            group.forEach(i => setPanelColor(ballConfig.design, i, activeColor))
        } else {
            setPanelColor(ballConfig.design, index, activeColor)
        }
        updateBall()
    }

    /**
     * Called by the click handler when a panel is clicked.
     * Returns true if the tool handled the click (fill/symmetricFill),
     * false if the default select behavior should proceed.
     */
    function handlePanelClick(index) {
        if (activeTool === 'fill') {
            fillPanel(index)
            return true
        }
        if (activeTool === 'symmetricFill') {
            symmetricFillPanel(index)
            return true
        }
        return false
    }

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

        clearPanelColors(ballConfig.design)
        if (pat.primary) {
            ballConfig.primaryColor = pat.primary
            document.querySelectorAll('#primary-color, #primary-color-detail').forEach(el => el.value = pat.primary)
        }
        if (pat.secondary) {
            ballConfig.secondaryColor = pat.secondary
            document.querySelectorAll('#secondary-color, #secondary-color-detail').forEach(el => el.value = pat.secondary)
        }
        for (const [idx, color] of Object.entries(pat.colors)) {
            setPanelColor(ballConfig.design, parseInt(idx), color)
        }

        activePatternIdx = index
        document.querySelectorAll('.tb-pattern').forEach(p => {
            p.classList.toggle('active', parseInt(p.dataset.patternIndex) === index)
        })
        selectPanel(null)
        updateBall()
        closeAllDropdowns()
    }

    // --- Wiring ---

    function wireTools() {
        document.querySelectorAll('.tb-btn[data-tool]').forEach(btn => {
            btn.addEventListener('click', () => {
                activeTool = btn.dataset.tool
                document.querySelectorAll('.tb-btn[data-tool]').forEach(b => {
                    b.classList.toggle('active', b.dataset.tool === activeTool)
                })
            })
        })
    }

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
        document.querySelectorAll('.tb-swatch').forEach(btn => {
            btn.addEventListener('click', () => {
                activeColor = btn.dataset.color
                const primary = document.getElementById('primary-color-detail')
                if (primary) {
                    primary.value = activeColor
                    primary.dispatchEvent(new Event('input'))
                }
                closeAllDropdowns()
            })
        })
        // Sync active color from the primary color well
        document.getElementById('primary-color-detail')?.addEventListener('input', () => {
            activeColor = document.getElementById('primary-color-detail').value
        })
    }

    function wireReset() {
        document.getElementById('studio-reset-btn')?.addEventListener('click', () => {
            clearPanelColors(ballConfig.design)
            activePatternIdx = -1
            document.querySelectorAll('.tb-pattern').forEach(p => p.classList.remove('active'))
            selectPanel(null)
            updateBall()
        })
    }

    function init() {
        wireTools()
        wireDropdowns()
        wireSwatches()
        wireReset()
        renderPatterns()
    }

    return { init, getActiveTool: () => activeTool, handlePanelClick, renderPatterns }
}

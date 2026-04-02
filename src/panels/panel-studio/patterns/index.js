export const PATTERNS = [
    {
        id: 'solid-duo',
        name: 'Two-Tone',
        description: 'Alternating panel colors',
        apply(tc, primary, secondary) {
            const count = tc.regions?.panelCount || 0
            for (let i = 0; i < count; i++) {
                tc.setPanelColor(i, i % 2 === 0 ? primary : secondary)
            }
        }
    },
    {
        id: 'classic-bw',
        name: 'Classic B&W',
        description: 'Traditional black pentagons, white hexagons',
        apply(tc, _primary, _secondary) {
            const count = tc.regions?.panelCount || 0
            for (let i = 0; i < count; i++) {
                tc.setPanelColor(i, i < 12 ? '#222222' : '#ffffff')
            }
        }
    },
    {
        id: 'gradient-warm',
        name: 'Warm Gradient',
        description: 'Panels cycle through warm tones',
        apply(tc) {
            const count = tc.regions?.panelCount || 0
            const warmColors = ['#ff3344', '#ff6633', '#ffaa00', '#ffdd00', '#ff8811', '#cc2244']
            for (let i = 0; i < count; i++) {
                tc.setPanelColor(i, warmColors[i % warmColors.length])
            }
        }
    },
    {
        id: 'gradient-cool',
        name: 'Cool Gradient',
        description: 'Panels cycle through cool tones',
        apply(tc) {
            const count = tc.regions?.panelCount || 0
            const coolColors = ['#22aadd', '#3366ff', '#6633cc', '#22bb55', '#115577', '#44ccaa']
            for (let i = 0; i < count; i++) {
                tc.setPanelColor(i, coolColors[i % coolColors.length])
            }
        }
    },
    {
        id: 'monochrome',
        name: 'Monochrome',
        description: 'Grayscale panels from light to dark',
        apply(tc) {
            const count = tc.regions?.panelCount || 0
            for (let i = 0; i < count; i++) {
                const t = count > 1 ? i / (count - 1) : 0.5
                const val = Math.round(240 - t * 200)
                tc.setPanelColor(i, `rgb(${val},${val},${val})`)
            }
        }
    },
    {
        id: 'national-flag',
        name: 'Tricolor',
        description: 'Panels split into three color bands',
        apply(tc, primary, secondary) {
            const count = tc.regions?.panelCount || 0
            const third = Math.ceil(count / 3)
            for (let i = 0; i < count; i++) {
                if (i < third) tc.setPanelColor(i, primary)
                else if (i < third * 2) tc.setPanelColor(i, '#ffffff')
                else tc.setPanelColor(i, secondary)
            }
        }
    },
]

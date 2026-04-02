const PRESET_COLORS = [
    '#ffffff', '#000000', '#333333', '#666666', '#999999', '#cccccc',
    '#ff3344', '#ff6633', '#ffaa00', '#ffdd00', '#88cc22', '#22bb55',
    '#22aadd', '#3366ff', '#6633cc', '#cc33aa', '#ff6699', '#885533',
]

export function createColorPicker(container, { onColorChange, initialColor }) {
    let activeColor = initialColor || '#ff3344'
    const recentColors = []

    const el = document.createElement('div')
    el.className = 'color-picker-panel'

    const swatchGrid = document.createElement('div')
    swatchGrid.className = 'color-picker-grid'
    PRESET_COLORS.forEach(hex => {
        const swatch = document.createElement('button')
        swatch.className = 'color-picker-swatch'
        swatch.style.backgroundColor = hex
        swatch.addEventListener('click', () => selectColor(hex))
        swatchGrid.appendChild(swatch)
    })
    el.appendChild(swatchGrid)

    const recentLabel = document.createElement('span')
    recentLabel.className = 'studio-label'
    recentLabel.textContent = 'RECENT'
    recentLabel.style.marginTop = '8px'
    el.appendChild(recentLabel)

    const recentGrid = document.createElement('div')
    recentGrid.className = 'color-picker-grid color-picker-recent'
    el.appendChild(recentGrid)

    function selectColor(hex) {
        activeColor = hex
        const idx = recentColors.indexOf(hex)
        if (idx >= 0) recentColors.splice(idx, 1)
        recentColors.unshift(hex)
        if (recentColors.length > 8) recentColors.pop()
        renderRecent()

        const nativeInput = container.querySelector('#studio-active-color')
        if (nativeInput) nativeInput.value = hex

        onColorChange(hex)
    }

    function renderRecent() {
        recentGrid.innerHTML = ''
        recentColors.forEach(hex => {
            const swatch = document.createElement('button')
            swatch.className = 'color-picker-swatch'
            swatch.style.backgroundColor = hex
            swatch.addEventListener('click', () => selectColor(hex))
            recentGrid.appendChild(swatch)
        })
    }

    container.appendChild(el)

    return {
        getColor: () => activeColor,
        setColor: (hex) => { activeColor = hex },
        selectColor
    }
}

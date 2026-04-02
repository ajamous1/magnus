let layerIdCounter = 0

export function createLayerPanel(container) {
    const layers = []

    const el = document.createElement('div')
    el.className = 'layer-panel'

    const header = document.createElement('div')
    header.className = 'layer-panel-header'
    header.innerHTML = '<span class="studio-label">LAYERS</span>'
    el.appendChild(header)

    const list = document.createElement('div')
    list.className = 'layer-list'
    el.appendChild(list)

    container.appendChild(el)

    function addLayer(name, type) {
        const id = ++layerIdCounter
        const layer = { id, name, type, visible: true, opacity: 1 }
        layers.push(layer)
        render()
        return layer
    }

    function removeLayer(id) {
        const idx = layers.findIndex(l => l.id === id)
        if (idx >= 0) layers.splice(idx, 1)
        render()
    }

    function toggleVisibility(id) {
        const layer = layers.find(l => l.id === id)
        if (layer) layer.visible = !layer.visible
        render()
    }

    function setOpacity(id, opacity) {
        const layer = layers.find(l => l.id === id)
        if (layer) layer.opacity = opacity
    }

    function moveLayer(id, direction) {
        const idx = layers.findIndex(l => l.id === id)
        if (idx < 0) return
        const newIdx = idx + direction
        if (newIdx < 0 || newIdx >= layers.length) return
        ;[layers[idx], layers[newIdx]] = [layers[newIdx], layers[idx]]
        render()
    }

    function render() {
        list.innerHTML = ''
        for (let i = layers.length - 1; i >= 0; i--) {
            const layer = layers[i]
            const row = document.createElement('div')
            row.className = 'layer-row' + (layer.visible ? '' : ' layer-hidden')

            const visBtn = document.createElement('button')
            visBtn.className = 'layer-vis-btn'
            visBtn.innerHTML = layer.visible
                ? '<svg viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="3"/></svg>'
                : '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="3"/><line x1="4" y1="4" x2="12" y2="12"/></svg>'
            visBtn.addEventListener('click', () => toggleVisibility(layer.id))
            row.appendChild(visBtn)

            const label = document.createElement('span')
            label.className = 'layer-name'
            label.textContent = layer.name
            row.appendChild(label)

            const delBtn = document.createElement('button')
            delBtn.className = 'layer-del-btn'
            delBtn.innerHTML = '&times;'
            delBtn.addEventListener('click', () => removeLayer(layer.id))
            row.appendChild(delBtn)

            list.appendChild(row)
        }
    }

    addLayer('Base Color', 'base')

    return { addLayer, removeLayer, toggleVisibility, setOpacity, moveLayer, getLayers: () => layers }
}

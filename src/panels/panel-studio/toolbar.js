const TOOLS = [
    { id: 'select', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>`, label: 'Select' },
    { id: 'fill', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`, label: 'Fill' },
    { id: 'brush', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 114.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 00-3-3.02z"/></svg>`, label: 'Brush' },
    { id: 'pattern', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`, label: 'Pattern' },
    { id: 'shape', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>`, label: 'Shape' },
    { id: 'decal', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 16l5-5 4 4 4-6 5 7"/></svg>`, label: 'Decal' },
]

export function createToolbar(container, { onToolChange }) {
    const el = document.createElement('div')
    el.className = 'studio-toolbar'

    let activeId = 'select'

    TOOLS.forEach(tool => {
        const btn = document.createElement('button')
        btn.className = 'studio-tool-btn' + (tool.id === activeId ? ' active' : '')
        btn.innerHTML = tool.icon
        btn.title = tool.label
        btn.dataset.tool = tool.id
        btn.addEventListener('click', () => {
            activeId = tool.id
            el.querySelectorAll('.studio-tool-btn').forEach(b => b.classList.toggle('active', b.dataset.tool === activeId))
            onToolChange(activeId)
        })
        el.appendChild(btn)
    })

    container.appendChild(el)

    return {
        getActiveTool() { return activeId },
        setActiveTool(id) {
            activeId = id
            el.querySelectorAll('.studio-tool-btn').forEach(b => b.classList.toggle('active', b.dataset.tool === activeId))
        }
    }
}

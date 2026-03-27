/**
 * Drag-to-resize handles between bento panels.
 */
export function initBentoResize() {
    let resizeDrag = null

    document.querySelectorAll('.resize-handle').forEach(handle => {
        handle.addEventListener('pointerdown', (e) => {
            e.preventDefault()
            const isH = handle.classList.contains('resize-h')
            const prev = handle.previousElementSibling
            const next = handle.nextElementSibling
            if (!prev || !next) return

            const parent = handle.parentElement
            for (const child of parent.children) {
                if (child.classList.contains('resize-handle')) continue
                const size = isH ? child.offsetHeight : child.offsetWidth
                child.style.flex = `${size} 0 0px`
            }

            const startPos = isH ? e.clientY : e.clientX
            const prevSize = isH ? prev.offsetHeight : prev.offsetWidth
            const nextSize = isH ? next.offsetHeight : next.offsetWidth

            handle.classList.add('active')
            document.body.classList.add('resizing')
            document.body.style.cursor = isH ? 'row-resize' : 'col-resize'

            resizeDrag = { handle, isH, startPos, prev, next, prevSize, nextSize }
        })
    })

    window.addEventListener('pointermove', (e) => {
        if (!resizeDrag) return
        const { isH, startPos, prev, next, prevSize, nextSize } = resizeDrag
        const delta = (isH ? e.clientY : e.clientX) - startPos
        const total = prevSize + nextSize
        const minSize = 80

        const newPrev = Math.max(minSize, Math.min(total - minSize, prevSize + delta))
        const newNext = total - newPrev

        prev.style.flex = `${newPrev} 0 0px`
        next.style.flex = `${newNext} 0 0px`
    })

    window.addEventListener('pointerup', () => {
        if (!resizeDrag) return
        resizeDrag.handle.classList.remove('active')
        document.body.classList.remove('resizing')
        document.body.style.cursor = ''
        resizeDrag = null
    })
}

/**
 * Per-panel fullscreen toggle + Escape to exit all.
 */
export function initPanelFullscreen() {
    document.querySelectorAll('.panel-fs-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation()
            const panel = btn.closest('.bento-panel')
            panel.classList.toggle('fullscreen')
        })
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.bento-panel.fullscreen').forEach(p => {
                p.classList.remove('fullscreen')
            })
        }
    })
}

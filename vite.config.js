let restartPlugin = null

try {
    const { default: restart } = await import('vite-plugin-restart')
    restartPlugin = restart({ restart: [ '../static/**' ] })
} catch {
    restartPlugin = null
}

export default {
    root: 'src/',
    publicDir: '../static/',
    resolve:
    {
    },
    server:
    {
        open: true
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },
    plugins:
    [
        ...restartPlugin ? [ restartPlugin ] : []
    ],
}

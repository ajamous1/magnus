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
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
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

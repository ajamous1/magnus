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
        alias:
        {
            'three': '/Users/ahmad.jamous/magnus/node_modules/three',
            'three/examples/jsm': '/Users/ahmad.jamous/magnus/node_modules/three/examples/jsm',
            'gsap': '/Users/ahmad.jamous/magnus/node_modules/gsap',
            'lil-gui': '/Users/ahmad.jamous/magnus/node_modules/lil-gui'
        }
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

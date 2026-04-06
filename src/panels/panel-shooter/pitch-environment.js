import * as THREE from 'three'

/**
 * Ground plane, grid, textured walls, and penalty-box field markings.
 */
export function createPitchEnvironment(scene) {
    const pitchGeometry = new THREE.PlaneGeometry(60, 40)
    const pitchMaterial = new THREE.MeshBasicMaterial({
        color: '#000000'
    })
    const pitch = new THREE.Mesh(pitchGeometry, pitchMaterial)
    pitch.rotation.x = -Math.PI / 2
    pitch.position.y = 0
    scene.add(pitch)

    const gridHelper = new THREE.GridHelper(100, 100, '#888888', '#222222')
    gridHelper.position.y = 0.005
    scene.add(gridHelper)

    const wallGridCanvas = document.createElement('canvas')
    wallGridCanvas.width = 512
    wallGridCanvas.height = 512
    const wallCtx = wallGridCanvas.getContext('2d')
    wallCtx.fillStyle = '#000000'
    wallCtx.fillRect(0, 0, 512, 512)
    wallCtx.strokeStyle = '#888888'
    wallCtx.lineWidth = 0.5
    for (let i = 0; i <= 512; i += 16) {
        wallCtx.beginPath(); wallCtx.moveTo(i, 0); wallCtx.lineTo(i, 512); wallCtx.stroke()
        wallCtx.beginPath(); wallCtx.moveTo(0, i); wallCtx.lineTo(512, i); wallCtx.stroke()
    }
    const wallGridTexture = new THREE.CanvasTexture(wallGridCanvas)
    wallGridTexture.wrapS = THREE.RepeatWrapping
    wallGridTexture.wrapT = THREE.RepeatWrapping
    wallGridTexture.repeat.set(6, 2)

    const wallMaterial = new THREE.MeshBasicMaterial({
        map: wallGridTexture,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    })

    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(120, 30), wallMaterial)
    backWall.position.set(0, 15, 50)
    backWall.rotation.y = Math.PI
    scene.add(backWall)

    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(120, 30), wallMaterial)
    leftWall.rotation.y = Math.PI / 2
    leftWall.position.set(-50, 15, 0)
    scene.add(leftWall)

    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(120, 30), wallMaterial)
    rightWall.rotation.y = -Math.PI / 2
    rightWall.position.set(50, 15, 0)
    scene.add(rightWall)

    const lineThickness = 0.08
    const lineHeight = 0.01
    const lineMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff' })

    function createLine(width, depth, x, z) {
        const geo = new THREE.PlaneGeometry(width, depth)
        const line = new THREE.Mesh(geo, lineMaterial)
        line.rotation.x = -Math.PI / 2
        line.position.set(x, lineHeight, z)
        return line
    }

    const fieldLines = new THREE.Group()

    const boxWidth = 16.5
    const boxDepth = 20.15

    fieldLines.add(createLine(boxDepth * 2, lineThickness, 0, 0))
    fieldLines.add(createLine(lineThickness, boxWidth, -boxDepth, -boxWidth / 2))
    fieldLines.add(createLine(lineThickness, boxWidth, boxDepth, -boxWidth / 2))
    fieldLines.add(createLine(boxDepth * 2, lineThickness, 0, -boxWidth))

    const spotGeometry = new THREE.CircleGeometry(0.15, 16)
    const spot = new THREE.Mesh(spotGeometry, lineMaterial)
    spot.rotation.x = -Math.PI / 2
    spot.position.set(0, lineHeight, -11)
    fieldLines.add(spot)

    scene.add(fieldLines)

    function applyTheme(isLight) {
        const groundColor = isLight ? '#f5f5f5' : '#000000'
        const gridColor1 = isLight ? '#ddd' : '#888888'
        const gridColor2 = isLight ? '#eee' : '#222222'
        pitchMaterial.color.set(groundColor)
        gridHelper.material[0]?.color?.set(gridColor1)
        gridHelper.material[1]?.color?.set(gridColor2)
        wallCtx.fillStyle = isLight ? '#f8f8f8' : '#000000'
        wallCtx.fillRect(0, 0, 512, 512)
        wallCtx.strokeStyle = isLight ? '#ccc' : '#888888'
        wallCtx.lineWidth = 0.5
        for (let i = 0; i <= 512; i += 16) {
            wallCtx.beginPath(); wallCtx.moveTo(i, 0); wallCtx.lineTo(i, 512); wallCtx.stroke()
            wallCtx.beginPath(); wallCtx.moveTo(0, i); wallCtx.lineTo(512, i); wallCtx.stroke()
        }
        wallGridTexture.needsUpdate = true
        lineMaterial.color.set(isLight ? '#555' : '#ffffff')
    }

    return { gridHelper, fieldLines, backWall, leftWall, rightWall, applyTheme }
}

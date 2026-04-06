import * as THREE from 'three'

/**
 * Calligraphic drag ribbon on the aim plane (screen-space stroke → world ribbon mesh).
 */
export function createDragTrailRibbon({
    scene,
    camera,
    canvas,
    trailHeight = 1.5,
    maxTrailPoints = 50,
    trailMinWidth = 0.01,
    trailMaxWidth = 0.175
}) {
    const trailVertCount = maxTrailPoints * 2
    const trailPositions = new Float32Array(trailVertCount * 3)
    const trailIndices = []
    for (let i = 0; i < maxTrailPoints - 1; i++) {
        const a = i * 2
        const b = i * 2 + 1
        const c = (i + 1) * 2
        const d = (i + 1) * 2 + 1
        trailIndices.push(a, c, b, b, c, d)
    }

    const trailGeometry = new THREE.BufferGeometry()
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
    trailGeometry.setIndex(trailIndices)

    const trailMaterial = new THREE.MeshBasicMaterial({
        color: '#ffffff',
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
        depthWrite: false
    })
    const trailMesh = new THREE.Mesh(trailGeometry, trailMaterial)
    trailMesh.visible = false
    scene.add(trailMesh)

    const raycaster = new THREE.Raycaster()
    const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -trailHeight)

    function screenToWorld(x, y) {
        const rect = canvas.getBoundingClientRect()
        const ndc = new THREE.Vector2(
            ((x - rect.left) / rect.width) * 2 - 1,
            -((y - rect.top) / rect.height) * 2 + 1
        )
        raycaster.setFromCamera(ndc, camera)
        const target = new THREE.Vector3()
        raycaster.ray.intersectPlane(dragPlane, target)
        return target
    }

    function updateTrailRibbon(points) {
        const count = points.length
        if (count < 2) {
            trailGeometry.setDrawRange(0, 0)
            return
        }

        for (let i = 0; i < count; i++) {
            const wp = screenToWorld(points[i].x, points[i].y)
            const t = i / (count - 1)
            const width = trailMinWidth + (trailMaxWidth - trailMinWidth) * t * t

            let dx, dz
            if (i < count - 1) {
                const next = screenToWorld(points[i + 1].x, points[i + 1].y)
                dx = next.x - wp.x
                dz = next.z - wp.z
            } else {
                const prev = screenToWorld(points[i - 1].x, points[i - 1].y)
                dx = wp.x - prev.x
                dz = wp.z - prev.z
            }
            const len = Math.sqrt(dx * dx + dz * dz) || 1
            const perpX = -dz / len * width * 0.5
            const perpZ = dx / len * width * 0.5

            trailPositions[(i * 2) * 3] = wp.x + perpX
            trailPositions[(i * 2) * 3 + 1] = wp.y
            trailPositions[(i * 2) * 3 + 2] = wp.z + perpZ

            trailPositions[(i * 2 + 1) * 3] = wp.x - perpX
            trailPositions[(i * 2 + 1) * 3 + 1] = wp.y
            trailPositions[(i * 2 + 1) * 3 + 2] = wp.z - perpZ
        }

        for (let i = count; i < maxTrailPoints; i++) {
            trailPositions[(i * 2) * 3] = 0
            trailPositions[(i * 2) * 3 + 1] = 0
            trailPositions[(i * 2) * 3 + 2] = 0
            trailPositions[(i * 2 + 1) * 3] = 0
            trailPositions[(i * 2 + 1) * 3 + 1] = 0
            trailPositions[(i * 2 + 1) * 3 + 2] = 0
        }

        trailGeometry.attributes.position.needsUpdate = true
        trailGeometry.setDrawRange(0, Math.max(0, (count - 1)) * 6)
    }

    function applyTheme(isLight) {
        trailMaterial.color.set(isLight ? '#000000' : '#ffffff')
    }

    return {
        trailMesh,
        updateTrailRibbon,
        maxTrailPoints,
        applyTheme
    }
}

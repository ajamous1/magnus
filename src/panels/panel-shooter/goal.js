import * as THREE from 'three'

/**
 * Goal frame, posts, crossbar, and simple net meshes.
 */
export function createGoal(scene) {
    const goalGroup = new THREE.Group()
    const postRadius = 0.06
    const goalWidth = 7.32
    const goalHeight = 2.44
    const postMaterial = new THREE.MeshLambertMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.5 })

    const leftPostGeo = new THREE.CylinderGeometry(postRadius, postRadius, goalHeight, 12)
    const leftPost = new THREE.Mesh(leftPostGeo, postMaterial)
    leftPost.position.set(-goalWidth / 2, goalHeight / 2, 0)
    goalGroup.add(leftPost)

    const rightPost = new THREE.Mesh(leftPostGeo, postMaterial)
    rightPost.position.set(goalWidth / 2, goalHeight / 2, 0)
    goalGroup.add(rightPost)

    const crossbarGeo = new THREE.CylinderGeometry(postRadius, postRadius, goalWidth + postRadius * 2, 12)
    const crossbar = new THREE.Mesh(crossbarGeo, postMaterial)
    crossbar.rotation.z = Math.PI / 2
    crossbar.position.set(0, goalHeight, 0)
    goalGroup.add(crossbar)

    const netDepth = 2.5
    const netMaterial = new THREE.MeshBasicMaterial({
        color: '#888888',
        wireframe: true,
        transparent: true,
        opacity: 0.4
    })

    const backNetGeo = new THREE.PlaneGeometry(goalWidth, goalHeight, 24, 10)
    const backNet = new THREE.Mesh(backNetGeo, netMaterial)
    backNet.position.set(0, goalHeight / 2, netDepth)
    goalGroup.add(backNet)

    const sideNetGeo = new THREE.PlaneGeometry(netDepth, goalHeight, 8, 10)
    const leftSideNet = new THREE.Mesh(sideNetGeo, netMaterial)
    leftSideNet.rotation.y = Math.PI / 2
    leftSideNet.position.set(-goalWidth / 2, goalHeight / 2, netDepth / 2)
    goalGroup.add(leftSideNet)

    const rightSideNet = new THREE.Mesh(sideNetGeo, netMaterial)
    rightSideNet.rotation.y = Math.PI / 2
    rightSideNet.position.set(goalWidth / 2, goalHeight / 2, netDepth / 2)
    goalGroup.add(rightSideNet)

    const topNetGeo = new THREE.PlaneGeometry(goalWidth, netDepth, 24, 8)
    const topNet = new THREE.Mesh(topNetGeo, netMaterial)
    topNet.rotation.x = -Math.PI / 2
    topNet.position.set(0, goalHeight, netDepth / 2)
    goalGroup.add(topNet)

    goalGroup.position.z = 0
    scene.add(goalGroup)

    function applyTheme(isLight) {
        const postColor = isLight ? '#222' : '#ffffff'
        postMaterial.color.set(postColor)
        postMaterial.emissive.set(postColor)
        netMaterial.color.set(isLight ? '#555' : '#888888')
    }

    return { goalGroup, goalWidth, goalHeight, applyTheme }
}

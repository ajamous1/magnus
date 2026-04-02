import * as THREE from 'three'

/**
 * Ball customizer defaults and physics tuning per design preset.
 */
export const ballConfig = {
    design: 'classic',
    primaryColor: '#ffffff',
    secondaryColor: '#333333'
}

export const BALL_DESIGNS = {
    classic: { drag: 1.0, randomnessBonus: 0 },
    jabulani: { drag: 0.85, randomnessBonus: 0.3 },
    brazuca: { drag: 1.1, randomnessBonus: -0.2 },
    trionda: { drag: 0.9, randomnessBonus: 0.1 },
}

/** Legacy helper — kept for potential reuse in procedural seam experiments */
export function wavyGreatCircle(axisIdx, r, amplitude, freq, segments) {
    const points = []
    for (let i = 0; i <= segments; i++) {
        const t = (i / segments) * Math.PI * 2
        const wobble = amplitude * Math.sin(freq * t)
        let x, y, z
        if (axisIdx === 0) { x = Math.cos(t); y = Math.sin(t); z = wobble }
        else if (axisIdx === 1) { x = wobble; y = Math.cos(t); z = Math.sin(t) }
        else { x = Math.sin(t); y = wobble; z = Math.cos(t) }
        const len = Math.sqrt(x * x + y * y + z * z)
        points.push(new THREE.Vector3(x / len * r, y / len * r, z / len * r))
    }
    return points
}

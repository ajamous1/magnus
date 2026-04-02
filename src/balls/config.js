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
    classic: {
        drag: 1.0,
        randomnessBonus: 0,
        curveMultiplier: 1.0,
        knuckleIntensity: 0,
        speedRetention: 1.0,
        arcModifier: 1.0,
    },
    jabulani: {
        drag: 0.8,
        randomnessBonus: 0.4,
        curveMultiplier: 0.7,
        knuckleIntensity: 0.6,
        speedRetention: 1.15,
        arcModifier: 1.1,
    },
    brazuca: {
        drag: 1.1,
        randomnessBonus: -0.15,
        curveMultiplier: 1.3,
        knuckleIntensity: 0,
        speedRetention: 0.95,
        arcModifier: 0.95,
    },
    trionda: {
        drag: 0.95,
        randomnessBonus: -0.1,
        curveMultiplier: 1.15,
        knuckleIntensity: 0,
        speedRetention: 1.0,
        arcModifier: 1.0,
    },
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

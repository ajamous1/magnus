/**
 * Ball geometry, presets, customizer preview (3D / exploded / flat net).
 */
export { TRUNC_ICO } from './geometry/truncated-icosahedron.js'
export { ballConfig, BALL_DESIGNS, wavyGreatCircle } from './config.js'
export { buildBallMesh } from './mesh/build-ball-mesh.js'
export { buildExplodedBall } from './exploded-ball.js'
export { buildSphericalPanel, buildPanelBorder, applyExplodeFactor } from './explode-helpers.js'
export { buildFlatLayout } from './flat/index.js'

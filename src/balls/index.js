/**
 * Ball geometry, presets, customizer preview (3D / exploded / flat net).
 */
export { TRUNC_ICO } from './geometry/truncated-icosahedron.js'
export { BRAZUCA_VERTICES, BRAZUCA_FACES, BRAZUCA_EDGES, generateBrazucaEdgeCurves } from './geometry/brazuca-geometry.js'
export { TRIONDA_VERTICES, TRIONDA_FACES, TRIONDA_EDGES, generateTriondaEdgeCurves } from './geometry/trionda-geometry.js'
export { JABULANI_VERTICES, JABULANI_FACES, JABULANI_MID_EDGES, generateJabulaniEdgeCurves } from './geometry/jabulani-geometry.js'
export { generateAllEdgeCurves } from './geometry/edge-curves.js'
export { ballConfig, BALL_DESIGNS, wavyGreatCircle } from './config.js'
export { buildBallMesh, addStitching } from './mesh/build-ball-mesh.js'
export { buildExplodedBall } from './exploded-ball.js'
export { buildSphericalPanel, buildPanelBorder, applyExplodeFactor } from './explode-helpers.js'
export { buildFlatLayout } from './flat/index.js'
export { getPanelColor, setPanelColor, clearPanelColors, hasOverrides } from './panel-colors.js'

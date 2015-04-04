precision mediump float;
uniform vec2 iResolution;
uniform float iGlobalTime;

#pragma glslify: cornell = require('./')
#pragma glslify: camera = require('glsl-turntable-camera')
 
void main() {
  vec3 ro, rd;
  float rot = (sin(iGlobalTime)*0.1);
  float angle = (sin(iGlobalTime)*0.25);
  camera(rot, angle, -2.0, iResolution.xy, ro, rd);

  gl_FragColor.rgb = cornell(gl_FragCoord.xy, iResolution.xy, ro, rd);
  gl_FragColor.a = 1.0; 
}

# glsl-cornell-box

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

![cornell](http://i.imgur.com/wX030Ti.png)

[(glsl bin demo)](http://glslb.in/s/5d65cc9b)

The Cornell Box raymarched in GLSL, for testing purposes. [Credit to @h3r3](https://www.shadertoy.com/view/4ssGzS). 

```glsl
uniform vec2 iResolution;
uniform float iGlobalTime;

#pragma glslify: cornell = require('glsl-cornell-box')
#pragma glslify: camera = require('glsl-turntable-camera')
 
void main() {
  vec3 ro, rd;
  float rot = (sin(iGlobalTime)*0.1);
  float angle = (sin(iGlobalTime)*0.25);
  camera(rot, angle, -2.0, iResolution.xy, ro, rd);

  gl_FragColor.rgb = cornell(gl_FragCoord.xy, iResolution.xy, ro, rd);
  gl_FragColor.a = 1.0; 
}
```

You will not be able to rotate around it fully as the back-side of each face will be black (unlit). PRs welcome.

## Usage

[![NPM](https://nodei.co/npm/glsl-cornell-box.png)](https://www.npmjs.com/package/glsl-cornell-box)

##### `vec3 cornellBox(vec2 fragCoord, vec2 resolution[, vec3 ro, vec3 rd])`

Raymarches a cornell box using `fragCoord` and `resolution`, where `ro` is "ray origin" and `rd` is "ray direction." Returns the RGB colors of the scene.

## License

License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

[Details](https://creativecommons.org/licenses/by-nc-sa/3.0/)
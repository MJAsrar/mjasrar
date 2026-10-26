// Each particle travels from its point in one shape (aFrom) to its point in the
// next (aTo). Particles start at slightly different moments (aRand), swirl
// outwards mid-flight, drift when idle and move aside for the cursor.
export const vertexShader = /* glsl */ `
  attribute vec3 aFrom;
  attribute vec3 aTo;
  attribute float aRand;
  uniform float uMorph;
  uniform float uTime;
  uniform float uDrift;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform vec3 uOffFrom;
  uniform vec3 uOffTo;
  uniform float uScaleFrom;
  uniform float uScaleTo;
  uniform vec3 uPointer;
  uniform float uPush;
  varying float vAlpha;

  void main() {
    float t = clamp((uMorph - aRand * 0.3) / 0.7, 0.0, 1.0);
    t = t * t * (3.0 - 2.0 * t);
    vec3 p = mix(aFrom * uScaleFrom + uOffFrom, aTo * uScaleTo + uOffTo, t);

    vec3 dir = normalize(vec3(sin(aRand * 91.7), cos(aRand * 57.3), sin(aRand * 23.1)) + 1e-4);
    p += dir * sin(t * 3.14159) * (0.3 + aRand * 0.9);

    p += uDrift * 0.045 * vec3(
      sin(uTime * 0.7 + aRand * 43.0),
      cos(uTime * 0.6 + aRand * 31.0),
      sin(uTime * 0.5 + aRand * 17.0)
    );

    vec4 world = modelMatrix * vec4(p, 1.0);
    vec2 away = world.xy - uPointer.xy;
    float force = smoothstep(1.25, 0.0, length(away)) * uPush;
    world.xy += normalize(away + 1e-4) * force * 0.5;

    vec4 mv = viewMatrix * world;
    gl_PointSize = uSize * uPixelRatio * (0.55 + aRand * 0.9) / -mv.z;
    gl_Position = projectionMatrix * mv;
    vAlpha = clamp(1.35 - (-mv.z - 5.5) * 0.11, 0.3, 1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(uColor, smoothstep(0.5, 0.18, d) * uOpacity * vAlpha);
    #include <colorspace_fragment>
  }
`;

"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/lib/portfolio/theme";
import { buildShapes, rand, type ShapeKey, type Shapes } from "./shapes";
import { fragmentShader, vertexShader } from "./shader";

type Layout = { offset: [number, number, number]; scale: number; dim: number };

// Where each shape sits on wide screens: beside the text (centred in the right
// half of the view) or centred behind it. Sizes are fitted to the visible
// width each frame, so shapes never run off the edge whatever the aspect ratio.
const WIDE: Record<ShapeKey, { beside: boolean; scale: number; dim: number; y?: number; z?: number }> = {
  scatter: { beside: false, scale: 1, dim: 1 },
  sphere: { beside: true, scale: 1, dim: 1 },
  wave: { beside: true, scale: 1, dim: 1 },
  graph: { beside: true, scale: 1, dim: 1 },
  clusters: { beside: false, scale: 1.45, dim: 0.3, y: -0.2, z: -1.6 },
  initials: { beside: true, scale: 1, dim: 1, y: 0.1 },
  helix: { beside: true, scale: 1, dim: 0.85 },
  ring: { beside: true, scale: 0.95, dim: 1 },
};
// On narrow screens every shape sits centred and faint behind the text.
const NARROW: Layout = { offset: [0, 0.5, -1.2], scale: 0.66, dim: 0.16 };

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(Math.max((x - a) / (b - a), 0), 1);
  return t * t * (3 - 2 * t);
};

function Field({ shapes, n, still, coarse }: { shapes: Shapes; n: number; still: boolean; coarse: boolean }) {
  const theme = useTheme();
  const { gl, camera } = useThree();
  const group = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute("aFrom", new THREE.BufferAttribute(Float32Array.from(shapes.scatter), 3));
    g.setAttribute("aTo", new THREE.BufferAttribute(Float32Array.from(shapes.sphere), 3));
    const r = rand(101);
    g.setAttribute("aRand", new THREE.BufferAttribute(Float32Array.from({ length: n }, () => r()), 1));
    return g;
  }, [shapes, n]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uMorph: { value: 0 },
          uTime: { value: 0 },
          uDrift: { value: 1 },
          uSize: { value: 24 },
          uPixelRatio: { value: 1 },
          uOffFrom: { value: new THREE.Vector3() },
          uOffTo: { value: new THREE.Vector3() },
          uScaleFrom: { value: 1 },
          uScaleTo: { value: 1 },
          uPointer: { value: new THREE.Vector3(99, 99, 0) },
          uPush: { value: 0 },
          uColor: { value: new THREE.Color() },
          uOpacity: { value: 0.85 },
        },
      }),
    [],
  );
  useEffect(() => () => geometry.dispose(), [geometry]);
  useEffect(() => () => material.dispose(), [material]);
  useEffect(() => {
    material.uniforms.uColor.value.set(theme === "dark" ? "#f4f6f8" : "#0b0d10");
  }, [theme, material]);

  const sim = useRef({ p: 0, intro: still ? 1 : 0, from: "" as ShapeKey | "", to: "" as ShapeKey | "", tiltX: 0, tiltY: 0 });
  const sections = useRef<{ el: HTMLElement; key: ShapeKey }[]>([]);
  const pointer = useRef(new THREE.Vector2(9, 9));
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const hit = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    sections.current = [...document.querySelectorAll<HTMLElement>("[data-shape]")].map((el) => ({ el, key: el.dataset.shape as ShapeKey }));
    const move = (e: PointerEvent) => pointer.current.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    const leave = () => pointer.current.set(9, 9);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  useFrame((state, delta) => {
    const s = sim.current;
    const u = material.uniforms;
    const list = sections.current;
    if (list.length < 2) return;
    const dt = Math.min(delta, 0.05);
    const isNarrow = state.size.width < 900 || state.size.width < state.size.height;
    const cam = camera as THREE.PerspectiveCamera;
    const halfW = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * cam.position.z * (state.size.width / state.size.height);
    const layout = (k: ShapeKey): Layout => {
      if (isNarrow && k !== "scatter") return NARROW;
      const c = WIDE[k];
      // Shapes are about 2.2 units in radius; keep them inside 44% of the half-width.
      const fit = c.beside ? THREE.MathUtils.clamp((halfW * 0.44) / 2.2, 0.55, 1) : THREE.MathUtils.clamp(halfW / 4.6, 0.6, 1);
      return { offset: [c.beside ? halfW * 0.5 : 0, c.y ?? 0, c.z ?? 0], scale: c.scale * fit, dim: c.dim };
    };

    // Scroll position as a fractional section index. A section's shape holds
    // while it fills the screen and morphs as the next one arrives.
    const anchor = window.innerHeight * 0.35;
    let i = 0;
    for (let k = 0; k < list.length; k++) if (list[k].el.getBoundingClientRect().top - anchor <= 0) i = k;
    let target = i;
    if (i < list.length - 1) {
      const a = list[i].el.getBoundingClientRect().top - anchor;
      const b = list[i + 1].el.getBoundingClientRect().top - anchor;
      target = i + smooth(0.55, 1, -a / (b - a));
    }
    s.p = still ? target : THREE.MathUtils.damp(s.p, target, 5, dt);

    let from: ShapeKey;
    let to: ShapeKey;
    let morph: number;
    if (s.intro < 1) {
      s.intro = Math.min(1, s.intro + dt / 2.4);
      from = "scatter";
      to = list[0].key;
      morph = 1 - Math.pow(1 - s.intro, 3);
    } else {
      const seg = Math.min(Math.floor(s.p), list.length - 2);
      from = list[seg].key;
      to = list[seg + 1].key;
      morph = s.p - seg;
    }

    if (from !== s.from || to !== s.to) {
      const aFrom = geometry.getAttribute("aFrom") as THREE.BufferAttribute;
      const aTo = geometry.getAttribute("aTo") as THREE.BufferAttribute;
      (aFrom.array as Float32Array).set(shapes[from]);
      (aTo.array as Float32Array).set(shapes[to]);
      aFrom.needsUpdate = true;
      aTo.needsUpdate = true;
      s.from = from;
      s.to = to;
    }
    const lf = layout(from);
    const lt = layout(to);
    u.uOffFrom.value.set(...lf.offset);
    u.uOffTo.value.set(...lt.offset);
    u.uScaleFrom.value = lf.scale;
    u.uScaleTo.value = lt.scale;
    u.uMorph.value = morph;
    u.uOpacity.value = (theme === "dark" ? 0.9 : 0.82) * THREE.MathUtils.lerp(lf.dim, lt.dim, smooth(0, 1, morph));
    u.uSize.value = isNarrow ? 20 : 24;
    u.uPixelRatio.value = gl.getPixelRatio();
    u.uDrift.value = still ? 0 : 1;
    if (!still) u.uTime.value += dt;

    // Cursor on the z = 0 plane, for the push.
    const active = !still && !coarse && pointer.current.x < 2;
    u.uPush.value = THREE.MathUtils.damp(u.uPush.value, active ? 1 : 0, 6, dt);
    if (active) {
      raycaster.setFromCamera(pointer.current, camera);
      if (raycaster.ray.intersectPlane(plane, hit)) u.uPointer.value.copy(hit);
    }

    const g = group.current;
    if (g && !still) {
      const px = pointer.current.x < 2 ? pointer.current.x : 0;
      const py = pointer.current.x < 2 ? pointer.current.y : 0;
      s.tiltX = THREE.MathUtils.damp(s.tiltX, -py * 0.08, 3, dt);
      s.tiltY = THREE.MathUtils.damp(s.tiltY, px * 0.14, 3, dt);
      g.rotation.set(s.tiltX, Math.sin(u.uTime.value * 0.17) * 0.2 + s.tiltY, 0);
    }
  });

  return (
    <group ref={group}>
      <points geometry={geometry} material={material} frustumCulled={false} />
    </group>
  );
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function Scene() {
  const env = useMemo(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    return {
      ok: hasWebGL(),
      still: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      coarse,
      n: coarse || (navigator.hardwareConcurrency ?? 8) <= 4 ? 7000 : 16000,
    };
  }, []);
  const [shapes, setShapes] = useState<Shapes | null>(null);

  // Shapes are built once the fonts are in, so the initials use the real face.
  useEffect(() => {
    if (!env.ok) return;
    let alive = true;
    document.fonts.ready.then(() => {
      if (!alive) return;
      const family = getComputedStyle(document.documentElement).getPropertyValue("--font-sans").trim() || "sans-serif";
      setShapes(buildShapes(env.n, family));
    });
    return () => {
      alive = false;
    };
  }, [env]);

  if (!env.ok || !shapes) return null;
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}>
      <Field shapes={shapes} n={env.n} still={env.still} coarse={env.coarse} />
    </Canvas>
  );
}

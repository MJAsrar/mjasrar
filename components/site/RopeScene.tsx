"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

// Three strands wound around a ring: one closed rope, like systems braided into
// one. Each strand is a tube along this curve with a different phase.
class Strand extends THREE.Curve<THREE.Vector3> {
  constructor(
    private phase: number,
    private radius = 1.05,
    private wind = 0.34,
    private twists = 3,
  ) {
    super();
  }
  getPoint(t: number, target = new THREE.Vector3()) {
    const u = t * Math.PI * 2;
    const w = this.twists * u + this.phase;
    const r = this.radius + this.wind * Math.cos(w);
    return target.set(r * Math.cos(u), this.wind * Math.sin(w), r * Math.sin(u));
  }
}

const pointer = { x: 0, y: 0 };

function Rope({ still }: { still: boolean }) {
  const group = useRef<THREE.Group>(null);
  const geometries = useMemo(
    () => [0, 1, 2].map((i) => new THREE.TubeGeometry(new Strand((i * Math.PI * 2) / 3), 720, 0.205, 32, true)),
    [],
  );
  useEffect(() => () => geometries.forEach((g) => g.dispose()), [geometries]);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g || still) return;
    g.rotation.y += delta * 0.16;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, 1.12 + pointer.y * 0.2, 3, delta);
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, 0.38 - pointer.x * 0.2, 3, delta);
  });

  return (
    <group ref={group} rotation={[1.12, 0.4, 0.38]}>
      {geometries.map((g, i) => (
        <mesh key={i} geometry={g}>
          <meshPhysicalMaterial color="#060607" roughness={0.24} metalness={0.3} clearcoat={1} clearcoatRoughness={0.12} envMapIntensity={1.7} />
        </mesh>
      ))}
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

export default function RopeScene({ active }: { active: boolean }) {
  const ok = useMemo(() => hasWebGL(), []);
  const still = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  useEffect(() => {
    if (still) return;
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [still]);

  if (!ok) return null;
  return (
    <Canvas
      className="rope-canvas"
      frameloop={still ? "demand" : active ? "always" : "never"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.9], fov: 34 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <Rope still={still} />
      {/* A studio made of light strips; rendered once into the reflections. */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={6} position={[0, 5, -1]} rotation-x={Math.PI / 2} scale={[14, 3, 1]} />
        <Lightformer form="rect" intensity={4} position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[10, 2.4, 1]} />
        <Lightformer form="rect" intensity={3} position={[5, -1, 0]} rotation-y={-Math.PI / 2} scale={[8, 0.8, 1]} />
        <Lightformer form="ring" intensity={2.5} position={[2, 2, 6]} scale={2.5} />
        <Lightformer form="rect" intensity={1.2} position={[0, -5, 2]} rotation-x={-Math.PI / 2} scale={[10, 3, 1]} />
      </Environment>
    </Canvas>
  );
}

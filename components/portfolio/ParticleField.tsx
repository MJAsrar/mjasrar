"use client";

import dynamic from "next/dynamic";

// The particle field is client-only and loads after the page; without WebGL it
// renders nothing and the page reads as normal.
const Scene = dynamic(() => import("./particles/Scene"), { ssr: false });

export default function ParticleField() {
  return (
    <div className="field" aria-hidden="true">
      <Scene />
    </div>
  );
}

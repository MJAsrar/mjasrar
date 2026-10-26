"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const RopeScene = dynamic(() => import("./RopeScene"), { ssr: false });

// Loads the 3D scene only once its box nears the viewport, and pauses
// rendering whenever it scrolls out of view.
export default function TwistedRing({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setMounted(true);
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`ring-stage ${className}`}>
      {mounted && <RopeScene active={visible} />}
    </div>
  );
}

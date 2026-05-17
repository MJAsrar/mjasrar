"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function RevealOnScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("in");

    // No IO support (old browser) — just show it
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    // Already in the viewport on mount — reveal immediately
    if (el.getBoundingClientRect().top < window.innerHeight) {
      reveal();
      return;
    }

    // Trigger as soon as any pixel enters the viewport (100px lookahead)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 100px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

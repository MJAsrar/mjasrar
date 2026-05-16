"use client";

import { useState } from "react";
import { ArrowIcon } from "@/lib/icons";

const NAV_ITEMS = [
  { id: "tools",     label: "Tools"     },
  { id: "ai",        label: "AI"        },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "projects",  label: "Projects"  },
];

export function Nav() {
  const [hover, setHover] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
        background: "rgba(10,10,11,0.62)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          height: 60,
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 7,
              background: "linear-gradient(135deg, var(--accent), oklch(0.7 0.18 165))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a0a0b",
              fontWeight: 700,
              fontSize: 13,
              fontFamily: "var(--font-geist-mono), monospace",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            m
          </div>
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em" }}>mjasrar</span>
          <span style={{ color: "var(--mute-2)", fontFamily: "var(--font-geist-mono), monospace", fontSize: 13 }}>/</span>
          <span style={{ color: "var(--mute)", fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}>platform</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 4, marginLeft: 18 }} className="nav-links">
          {NAV_ITEMS.map((it) => (
            <button
              key={it.id}
              onClick={() => scrollTo(it.id)}
              style={{
                height: 32,
                padding: "0 12px",
                display: "flex",
                alignItems: "center",
                fontSize: 13.5,
                borderRadius: 8,
                cursor: "pointer",
                background: hover === it.id ? "rgba(255,255,255,0.05)" : "transparent",
                color: hover === it.id ? "var(--fg)" : "var(--fg-2)",
                border: "none",
                transition: "background 120ms ease, color 120ms ease",
              }}
              onMouseEnter={() => setHover(it.id)}
              onMouseLeave={() => setHover(null)}
            >
              {it.label}
            </button>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11.5,
              color: "var(--mute)",
              padding: "0 10px",
              height: 26,
              borderRadius: 999,
              border: "1px solid var(--line)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 0 3px var(--accent-2)",
              }}
            />
            all systems
          </div>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 34,
              padding: "0 12px",
              borderRadius: 10,
              border: "1px solid var(--line-2)",
              background: "rgba(255,255,255,0.03)",
              color: "var(--fg)",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 34,
              padding: "0 14px",
              borderRadius: 10,
              border: "1px solid var(--fg)",
              background: "var(--fg)",
              color: "#0a0a0b",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Open app <ArrowIcon />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .nav-links { display: none; } }
      `}</style>
    </nav>
  );
}

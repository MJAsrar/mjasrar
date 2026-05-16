"use client";

import { useState } from "react";
import { ECOSYSTEM, type ModuleStatus, type EcosystemModule } from "@/lib/data";
import { ArrowURIcon } from "@/lib/icons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const STATUS_CONFIG: Record<ModuleStatus, { dot: string; text: string; label: string }> = {
  shipped:  { dot: "var(--accent)",       text: "var(--accent)",       label: "shipped"  },
  building: { dot: "oklch(0.82 0.14 75)", text: "oklch(0.82 0.14 75)", label: "building" },
  planned:  { dot: "var(--mute-2)",        text: "var(--mute)",         label: "planned"  },
};

function StatusDot({ kind }: { kind: ModuleStatus }) {
  const s = STATUS_CONFIG[kind];
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: s.dot,
        boxShadow: kind !== "planned" ? `0 0 0 3px ${s.dot}22` : "none",
        display: "inline-block",
        flexShrink: 0,
      }}
    />
  );
}

function ModuleRow({ m }: { m: EcosystemModule }) {
  const [hover, setHover] = useState(false);
  const s = STATUS_CONFIG[m.status];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "20px 1fr auto auto",
        alignItems: "center",
        gap: 12,
        padding: "11px 10px",
        borderRadius: 8,
        background: hover ? "rgba(255,255,255,0.03)" : "transparent",
        transition: "background 120ms ease",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StatusDot kind={m.status} />
      <span style={{ fontSize: 13.5, color: m.status === "planned" ? "var(--mute)" : "var(--fg)" }}>
        {m.name}
      </span>
      <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, color: "var(--mute-2)" }}>
        v{m.v}
      </span>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.04em",
          color: s.text,
          minWidth: 80,
          textAlign: "right",
        }}
      >
        {s.label}
      </span>
    </div>
  );
}

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      style={{
        position: "relative",
        padding: "var(--pad-section) 0",
        zIndex: 1,
        background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.012) 30%, transparent)",
      }}
    >
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 56, maxWidth: 760 }}>
            <Eyebrow>04 — Ecosystem</Eyebrow>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.028em" }}>
              A platform, built in public, one module at a time.
            </h2>
            <p style={{ fontSize: 17, color: "var(--mute)" }}>
              Four systems. Twenty-four modules shipped. A roadmap that&apos;s visible and honest — what&apos;s
              live, what&apos;s wet paint, what&apos;s queued. Nothing here is handwaved.
            </p>
          </div>
        </RevealOnScroll>

        {/* Legend */}
        <RevealOnScroll>
          <div
            style={{
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: 36,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11.5,
              color: "var(--mute)",
            }}
          >
            <span>STATUS LEGEND →</span>
            {(["shipped", "building", "planned"] as ModuleStatus[]).map((k) => (
              <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                <StatusDot kind={k} /> {STATUS_CONFIG[k].label} ·{" "}
                {k === "shipped" ? "live in production" : k === "building" ? "in active development" : "queued, not started"}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {ECOSYSTEM.map((sys) => {
            const shipped  = sys.modules.filter((m) => m.status === "shipped").length;
            const building = sys.modules.filter((m) => m.status === "building").length;
            return (
              <RevealOnScroll key={sys.id}>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: 16,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      padding: "20px 22px 16px",
                      borderBottom: "1px solid var(--line)",
                      background: "linear-gradient(180deg, rgba(255,255,255,0.025), transparent)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: 11,
                        color: "var(--mute)",
                        letterSpacing: "0.08em",
                        marginBottom: 10,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{sys.code}</span>
                      <span style={{ display: "inline-flex", gap: 8 }}>
                        <span style={{ color: "var(--accent)" }}>● {shipped}</span>
                        <span style={{ color: "oklch(0.82 0.14 75)" }}>● {building}</span>
                        <span>{sys.modules.length} total</span>
                      </span>
                    </div>
                    <div style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 6 }}>
                      {sys.name}
                    </div>
                    <div style={{ fontSize: 13.5, color: "var(--mute)", lineHeight: 1.55 }}>{sys.blurb}</div>
                  </div>

                  {/* Modules */}
                  <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 2 }}>
                    {sys.modules.map((m, i) => (
                      <ModuleRow key={i} m={m} />
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      padding: "12px 18px",
                      borderTop: "1px solid var(--line)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 11,
                      color: "var(--mute)",
                      marginTop: "auto",
                    }}
                  >
                    <span>{sys.id}.mjasrar</span>
                    <span style={{ display: "inline-flex", gap: 6, alignItems: "center", color: "var(--fg-2)" }}>
                      Open system <ArrowURIcon />
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

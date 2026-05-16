"use client";

import { useState } from "react";
import { TOOLS, TOOL_CATEGORIES } from "@/lib/data";
import { SearchIcon } from "@/lib/icons";
import { ToolCard } from "./ToolCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function ToolsSection() {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");

  const filtered = TOOLS.filter((t) => {
    if (cat !== "all" && t.cat !== cat) return false;
    if (q && !(t.name + " " + t.desc).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <section id="tools" style={{ position: "relative", padding: "var(--pad-section) 0", zIndex: 1 }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        {/* Section head */}
        <RevealOnScroll>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 56, maxWidth: 760 }}>
            <Eyebrow>02 — Tools</Eyebrow>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.028em" }}>
              A marketplace for small, sharp utilities.
            </h2>
            <p style={{ fontSize: 17, color: "var(--mute)" }}>
              Twenty-four tools across PDF, image, text, AI and developer workflows — each one a focused
              module inside a single, consistent product surface. New tools ship roughly every week.
            </p>
          </div>
        </RevealOnScroll>

        {/* Toolbar */}
        <RevealOnScroll>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
              flexWrap: "wrap",
              padding: 8,
              border: "1px solid var(--line)",
              borderRadius: 14,
              background: "rgba(255,255,255,0.015)",
            }}
          >
            {/* Search */}
            <div
              style={{
                flex: 1,
                minWidth: 240,
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "0 12px",
                height: 36,
                borderRadius: 8,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--line)",
                color: "var(--fg-2)",
              }}
            >
              <SearchIcon />
              <input
                style={{
                  flex: 1,
                  background: "transparent",
                  border: 0,
                  outline: 0,
                  color: "var(--fg)",
                  fontFamily: "inherit",
                  fontSize: 13,
                }}
                placeholder='Search tools — try "compress", "regex", "translate"…'
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 18,
                  height: 18,
                  padding: "0 5px",
                  border: "1px solid var(--line-2)",
                  borderBottomWidth: 2,
                  borderRadius: 4,
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 10.5,
                  color: "var(--fg-2)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                ⌘
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 18,
                  height: 18,
                  padding: "0 5px",
                  border: "1px solid var(--line-2)",
                  borderBottomWidth: 2,
                  borderRadius: 4,
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 10.5,
                  color: "var(--fg-2)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                K
              </span>
            </div>

            {/* Category chips */}
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {TOOL_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  style={{
                    height: 32,
                    padding: "0 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    borderRadius: 6,
                    cursor: "pointer",
                    border: cat === c.id ? "1px solid var(--line-2)" : "1px solid transparent",
                    color: cat === c.id ? "var(--fg)" : "var(--fg-2)",
                    background: cat === c.id ? "rgba(255,255,255,0.06)" : "transparent",
                    fontFamily: "inherit",
                  }}
                >
                  {c.label}
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 10.5,
                      color: "var(--mute)",
                    }}
                  >
                    {c.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <RevealOnScroll>
          <div
            style={{
              display: "grid",
              gap: 14,
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {filtered.map((t) => (
              <ToolCard key={t.id} t={t} />
            ))}
            {filtered.length === 0 && (
              <div
                style={{
                  padding: 40,
                  textAlign: "center",
                  color: "var(--mute)",
                  gridColumn: "1 / -1",
                }}
              >
                No matches. Try clearing the filter.
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

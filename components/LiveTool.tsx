"use client";

import { useState, useEffect } from "react";
import { OPS, SAMPLE_TEXT, SAMPLE_JSON, runOp } from "@/lib/live-tool-ops";
import { SparkIcon, ClipIcon, DownloadIcon } from "@/lib/icons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";

function LiveToolWidget() {
  const [opId, setOpId] = useState<string>("summarize");
  const [input, setInput] = useState(SAMPLE_TEXT);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [aiToggle, setAiToggle] = useState(true);

  const op = OPS.find((o) => o.id === opId) ?? OPS[0];

  useEffect(() => {
    if (op.kind === "json" && !input.trim().startsWith("{")) setInput(SAMPLE_JSON);
    if (op.kind === "text" && input.trim().startsWith("{") && input.length < 200) setInput(SAMPLE_TEXT);
  }, [opId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setRunning(true);
    const delay = op.ai && aiToggle ? 520 : 120;
    const t = setTimeout(() => {
      setOutput(
        op.ai && !aiToggle
          ? `// AI mode disabled — toggle on to enable ${op.label.toLowerCase()}.`
          : runOp(op.id as Parameters<typeof runOp>[0], input)
      );
      setRunning(false);
    }, delay);
    return () => clearTimeout(t);
  }, [input, opId, aiToggle]); // eslint-disable-line react-hooks/exhaustive-deps

  const mono: React.CSSProperties = { fontFamily: "var(--font-geist-mono), monospace" };

  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: 18,
        background: "linear-gradient(180deg, var(--surface) 0%, #0e0f12 100%)",
        overflow: "hidden",
      }}
    >
      {/* Topbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 16px",
          borderBottom: "1px solid var(--line)",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <span
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            background: "linear-gradient(135deg, var(--accent), oklch(0.7 0.18 165))",
            color: "#0a0a0b",
            ...mono,
            fontWeight: 700,
            fontSize: 11,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          m
        </span>
        <div style={{ ...mono, fontSize: 12, color: "var(--mute)", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "var(--fg)" }}>Workbench</span>
          <span style={{ color: "var(--mute-2)" }}>/</span>
          <span>{op.label}</span>
        </div>
        <div style={{ flex: 1 }} />
        <button
          onClick={() => setAiToggle((v) => !v)}
          style={{
            height: 28,
            padding: "0 10px",
            fontSize: 12,
            border: `1px solid ${aiToggle ? "var(--accent-3)" : "var(--line)"}`,
            background: aiToggle ? "var(--accent-2)" : "transparent",
            color: aiToggle ? "var(--accent)" : "var(--fg-2)",
            borderRadius: 7,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            ...mono,
          }}
        >
          <SparkIcon width={14} height={14} />
          AI {aiToggle ? "on" : "off"}
        </button>
      </div>

      {/* Columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 360 }} className="lt-cols">
        {/* Input */}
        <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 10, borderRight: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, ...mono, fontSize: 11, color: "var(--mute)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span>Input</span>
              <span style={{ color: "var(--mute-2)" }}>{input.length} chars</span>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button className="tool-btn" onClick={() => setInput(op.kind === "json" ? SAMPLE_JSON : SAMPLE_TEXT)}>Reset</button>
              <button className="tool-btn" onClick={() => setInput("")}>Clear</button>
            </div>
          </div>
          <textarea
            style={{
              flex: 1,
              minHeight: 260,
              background: "rgba(0,0,0,0.25)",
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: 14,
              color: "var(--fg)",
              ...mono,
              fontSize: 12.5,
              lineHeight: 1.6,
              resize: "none",
              outline: 0,
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, ...mono, fontSize: 11, color: "var(--mute)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span>Output</span>
              {op.ai && aiToggle && (
                <span style={{ display: "inline-flex", alignItems: "center", height: 18, padding: "0 6px", borderRadius: 999, background: "var(--accent-2)", color: "var(--accent)", fontSize: 10, ...mono }}>
                  AI
                </span>
              )}
              {running && <span style={{ color: "var(--accent)", ...mono }}>● running</span>}
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button className="tool-btn" onClick={() => navigator.clipboard?.writeText(output)}>
                <ClipIcon /> Copy
              </button>
              <button className="tool-btn">
                <DownloadIcon /> Save
              </button>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              minHeight: 260,
              background: "rgba(0,0,0,0.25)",
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: 14,
              color: "var(--fg)",
              ...mono,
              fontSize: 12.5,
              lineHeight: 1.6,
              whiteSpace: "pre-wrap",
              overflow: "auto",
            }}
          >
            {output || " "}
          </div>
        </div>
      </div>

      {/* Ops bar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          padding: "12px 18px",
          borderTop: "1px solid var(--line)",
          background: "rgba(255,255,255,0.012)",
        }}
      >
        <span style={{ fontSize: 11, color: "var(--mute-2)", marginRight: 8, alignSelf: "center", ...mono }}>OPS →</span>
        {OPS.map((o) => {
          const active = opId === o.id;
          return (
            <button
              key={o.id}
              onClick={() => setOpId(o.id)}
              style={{
                height: 28,
                padding: "0 10px",
                fontSize: 12,
                border: `1px solid ${active ? (o.ai ? "var(--accent-3)" : "var(--line-3)") : "var(--line)"}`,
                background: active ? (o.ai ? "var(--accent-2)" : "rgba(255,255,255,0.05)") : "transparent",
                color: active && o.ai ? "var(--accent)" : active ? "var(--fg)" : "var(--fg-2)",
                borderRadius: 7,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                ...mono,
                fontFamily: "inherit",
                transition: "all 120ms ease",
              }}
            >
              {o.ai && <SparkIcon width={14} height={14} />}
              {o.label}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          borderTop: "1px solid var(--line)",
          ...mono,
          fontSize: 11,
          color: "var(--mute)",
        }}
      >
        <span>Local-first · runs in this tab · zero data leaves your browser</span>
        <span>{op.ai ? "haiku-4-5 · on-device routing" : "wasm · 4kb runtime"}</span>
      </div>

      <style>{`
        .tool-btn {
          display: inline-flex; align-items: center; gap: 5px;
          height: 26px; padding: 0 8px; font-size: 11.5px;
          border-radius: 8px; border: 1px solid var(--line-2);
          background: rgba(255,255,255,0.03); color: var(--fg);
          cursor: pointer; font-family: inherit;
          transition: background 120ms ease, border-color 120ms ease;
        }
        .tool-btn:hover { background: rgba(255,255,255,0.06); border-color: var(--line-3); }
        @media (max-width: 880px) {
          .lt-cols { grid-template-columns: 1fr !important; }
          .lt-cols > div:first-child { border-right: 0 !important; border-bottom: 1px solid var(--line); }
        }
      `}</style>
    </div>
  );
}

export function LiveToolSection() {
  return (
    <section style={{ position: "relative", zIndex: 1, paddingBottom: "var(--pad-section)" }} id="workbench">
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 32, maxWidth: 760 }}>
            <Eyebrow>02b — Live demo</Eyebrow>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.028em" }}>
              Every tool has the same shape.
            </h2>
            <p style={{ fontSize: 17, color: "var(--mute)" }}>
              Input · operation · output. AI is an optional layer on top — same interface, quieter posture.
              This isn&apos;t a screenshot; type into the box.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <LiveToolWidget />
        </RevealOnScroll>
      </div>
    </section>
  );
}

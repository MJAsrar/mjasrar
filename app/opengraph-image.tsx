import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "mjasrar — building a software ecosystem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 600,
            background: "radial-gradient(ellipse, rgba(134,239,172,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative" }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #a3e635, #4ade80)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a0a0b",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            m
          </div>
          <span style={{ color: "#ededed", fontWeight: 600, fontSize: 20, letterSpacing: "-0.01em" }}>
            mjasrar
          </span>
          <span style={{ color: "#5a5a62", fontSize: 18 }}>/</span>
          <span style={{ color: "#82828a", fontSize: 16 }}>platform</span>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 500,
              color: "#ededed",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              maxWidth: 900,
            }}
          >
            Building systems,{" "}
            <span style={{ color: "#a3e635", fontStyle: "italic", fontWeight: 400 }}>
              not standalone software.
            </span>
          </div>
          <div style={{ fontSize: 22, color: "#82828a", maxWidth: 700, lineHeight: 1.5 }}>
            A growing suite of utility and AI tools built by an indie founder. One identity, one
            interface, dozens of small, sharp products.
          </div>
        </div>

        {/* Bottom: meta strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            position: "relative",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Live chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 999,
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#a3e635",
              }}
            />
            <span style={{ color: "#c8c8cc", fontSize: 15 }}>v0.4.2 · shipping weekly</span>
          </div>

          {[
            "24 tools",
            "4 systems",
            "Local-first",
          ].map((label) => (
            <span key={label} style={{ color: "#5a5a62", fontSize: 15 }}>
              {label}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

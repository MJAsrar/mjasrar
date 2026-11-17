import { ImageResponse } from "next/og";

export const alt = "MJAsrar: AI agents and software your business runs on";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview for every company page. Uses the built-in font, so it needs no
// font files on disk.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#08090b",
          color: "#f4f6f8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="12" fill="#f4f6f8" />
            <path
              d="M11.5 32V22.25a5.25 5.25 0 0 1 10.5 0V32M22 22.25a5.25 5.25 0 0 1 10.5 0V35.5a5 5 0 0 1-5 5H26"
              fill="none"
              stroke="#08090b"
              strokeWidth="4.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="32.5" cy="10.25" r="2.7" fill="#08090b" />
          </svg>
          <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: -1.5 }}>MJAsrar</span>
        </div>
        <div style={{ display: "flex", fontSize: 78, fontWeight: 800, lineHeight: 1, letterSpacing: -3, maxWidth: 1000, textTransform: "uppercase" }}>
          AI agents and software your business runs on.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8a919c", letterSpacing: 2 }}>
          <span>CHATBOTS · VOICE AI · RAG · CUSTOM SOFTWARE</span>
          <span style={{ color: "#f4f6f8" }}>MJASRAR.SITE</span>
        </div>
      </div>
    ),
    size,
  );
}

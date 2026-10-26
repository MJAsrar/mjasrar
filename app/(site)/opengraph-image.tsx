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
          <svg width="52" height="52" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#f4f6f8" />
            <path d="M8 23V9h4.2l3.8 6 3.8-6H24v14h-4v-7.6l-4 6-4-6V23z" fill="#08090b" />
          </svg>
          <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: 6 }}>MJASRAR</span>
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

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 32px",
        textAlign: "center",
        gap: 24,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "clamp(96px, 16vw, 180px)",
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "var(--surface-2)",
          userSelect: "none",
        }}
      >
        404
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 13,
            color: "var(--accent)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          module not found
        </p>
        <p style={{ fontSize: 16, color: "var(--mute)", maxWidth: 360, lineHeight: 1.6 }}>
          This page doesn&apos;t exist. It may have moved, or the URL is wrong.
        </p>
      </div>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          height: 40,
          padding: "0 20px",
          borderRadius: 10,
          border: "1px solid var(--line-2)",
          background: "rgba(255,255,255,0.04)",
          color: "var(--fg)",
          fontSize: 14,
          fontFamily: "inherit",
          textDecoration: "none",
          transition: "background 140ms ease, border-color 140ms ease",
        }}
      >
        ← Back to home
      </Link>
    </div>
  );
}

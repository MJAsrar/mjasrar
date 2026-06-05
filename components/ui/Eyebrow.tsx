import type { CSSProperties, ReactNode } from "react";

export function Eyebrow({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--mute)",
        ...style,
      }}
    >
      <span style={{ width: 24, height: 1, background: "var(--line-3)", display: "inline-block", flexShrink: 0 }} />
      {children}
    </span>
  );
}

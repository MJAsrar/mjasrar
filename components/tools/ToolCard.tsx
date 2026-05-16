"use client";

import { useState } from "react";
import Link from "next/link";
import type { Tool } from "@/lib/data";
import { getToolHref } from "@/lib/data";
import { getToolIcon, BoltIcon, ArrowURIcon } from "@/lib/icons";

export function ToolCard({ t }: { t: Tool }) {
  const [hover, setHover] = useState(false);
  const Icon = getToolIcon(t.icon);

  return (
    <Link
      href={getToolHref(t)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        background: hover ? "var(--surface-2)" : "var(--surface)",
        border: `1px solid ${hover ? "var(--line-2)" : "var(--line)"}`,
        borderRadius: 16,
        padding: 18,
        transition: "border-color 160ms ease, background 160ms ease",
        cursor: "pointer",
      }}
    >
      {/* Icon + badges */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--line)",
            color: t.ai ? "var(--accent)" : "var(--fg-2)",
          }}
        >
          <Icon width={20} height={20} />
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {t.ai && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 20,
                padding: "0 7px",
                borderRadius: 999,
                background: "var(--accent-2)",
                color: "var(--accent)",
                border: "1px solid transparent",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
              }}
            >
              AI
            </span>
          )}
          {t.hot && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                height: 20,
                padding: "0 7px",
                borderRadius: 999,
                border: "1px solid var(--line-2)",
                background: "rgba(255,255,255,0.02)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
                color: "var(--fg-2)",
              }}
            >
              <BoltIcon width={11} height={11} /> hot
            </span>
          )}
        </div>
      </div>

      {/* Name + desc */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <h3 style={{ fontSize: 15.5, fontWeight: 500, letterSpacing: "-0.01em" }}>{t.name}</h3>
        <p style={{ fontSize: 13, color: "var(--mute)" }}>{t.desc}</p>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
          paddingTop: 14,
          borderTop: "1px solid var(--line)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11,
            color: "var(--mute-2)",
          }}
        >
          v{t.v} ·{" "}
          <span style={{ color: t.state === "stable" ? "var(--accent)" : "var(--warn)" }}>
            ● {t.state}
          </span>
        </span>
        <span
          style={{
            color: hover ? "var(--fg)" : "var(--mute)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            transition: "color 120ms ease",
          }}
        >
          Open <ArrowURIcon />
        </span>
      </div>
    </Link>
  );
}

"use client";

import { useState } from "react";
import { ArrowURIcon } from "@/lib/icons";
import type { Project } from "@/lib/portfolio-data";

const FEATURED_TAGS = new Set(["Featured", "Live", "Paying Customers", "Production"]);
const MUTED_TAGS    = new Set(["Discontinued"]);

function TagChip({ label }: { label: string }) {
  const isFeatured = FEATURED_TAGS.has(label);
  const isMuted    = MUTED_TAGS.has(label);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 20,
        padding: "0 7px",
        borderRadius: 4,
        fontSize: 11,
        fontFamily: "var(--font-geist-mono), monospace",
        letterSpacing: "0.03em",
        background: isFeatured
          ? "oklch(0.86 0.17 138 / 0.1)"
          : isMuted
          ? "rgba(255,255,255,0.04)"
          : "var(--surface-2)",
        color: isFeatured
          ? "var(--accent)"
          : isMuted
          ? "var(--mute-2)"
          : "var(--mute)",
        border: `1px solid ${isFeatured ? "oklch(0.86 0.17 138 / 0.2)" : "var(--line)"}`,
      }}
    >
      {label}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface-2)" : "var(--surface)",
        border: `1px solid ${hovered ? "var(--line-2)" : "var(--line)"}`,
        borderRadius: 14,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        transition: "background 160ms ease, border-color 160ms ease",
        cursor: "default",
      }}
    >
      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((t) => <TagChip key={t} label={t} />)}
      </div>

      {/* Name + oneliner */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <h3 style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.015em", color: "var(--fg)" }}>
          {project.name}
        </h3>
        <p style={{ fontSize: 13.5, color: "var(--mute)", lineHeight: 1.5 }}>
          {project.oneliner}
        </p>
      </div>

      {/* Stack pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {project.stack.map((s) => (
          <span
            key={s}
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 22,
              padding: "0 8px",
              borderRadius: 5,
              fontSize: 11.5,
              fontFamily: "var(--font-geist-mono), monospace",
              background: "rgba(255,255,255,0.04)",
              color: "var(--fg-2)",
              border: "1px solid var(--line)",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Stats / status / note */}
      {(project.stats || project.status || project.note) && (
        <p
          style={{
            fontSize: 12.5,
            color: "var(--mute-2)",
            lineHeight: 1.55,
            fontFamily: project.note ? "var(--font-geist-mono), monospace" : "inherit",
          }}
        >
          {project.stats || project.status || project.note}
        </p>
      )}

      {/* Links */}
      {(project.live || project.github) && (
        <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 4 }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                height: 30,
                padding: "0 12px",
                borderRadius: 8,
                fontSize: 12.5,
                fontWeight: 500,
                background: "var(--fg)",
                color: "#0a0a0b",
                border: "1px solid var(--fg)",
                transition: "opacity 140ms ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              Live <ArrowURIcon />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                height: 30,
                padding: "0 12px",
                borderRadius: 8,
                fontSize: 12.5,
                fontWeight: 500,
                background: "rgba(255,255,255,0.04)",
                color: "var(--fg-2)",
                border: "1px solid var(--line-2)",
                transition: "background 140ms ease, color 140ms ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-2)";
              }}
            >
              GitHub <ArrowURIcon />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

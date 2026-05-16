"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/data";
import { ArrowURIcon, GithubIcon } from "@/lib/icons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";

function ProjectRow({ p, first }: { p: Project; first: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 100px 18px",
        alignItems: "center",
        gap: 18,
        padding: "20px 22px",
        cursor: "default",
        background: hover ? "rgba(255,255,255,0.025)" : "transparent",
        transition: "background 140ms ease",
        borderTop: first ? "none" : "1px solid var(--line)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, color: "var(--mute)" }}>
        {p.code}
      </span>
      <div>
        <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 2 }}>{p.name}</div>
        <div style={{ fontSize: 13, color: "var(--mute)" }}>{p.desc}</div>
      </div>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 10.5,
          color: "var(--fg-2)",
          padding: "3px 9px",
          border: "1px solid var(--line-2)",
          borderRadius: 999,
        }}
      >
        {p.tag}
      </span>
      <span style={{ color: hover ? "var(--fg)" : "var(--mute)", transition: "color 120ms ease" }}>
        <ArrowURIcon />
      </span>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" style={{ position: "relative", padding: "var(--pad-section) 0", zIndex: 1 }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 56, maxWidth: 760 }}>
            <Eyebrow>05 — Past modules</Eyebrow>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.028em" }}>
              Earlier work — the modules this platform is built on.
            </h2>
            <p style={{ fontSize: 17, color: "var(--mute)" }}>
              Not a resume. Components and infrastructure that became foundations for what&apos;s running today.
            </p>
          </div>
        </RevealOnScroll>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "flex-start" }} className="proj-two">
          {/* Project list */}
          <RevealOnScroll>
            <div style={{ border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
              {PROJECTS.map((p, i) => (
                <ProjectRow key={p.id} p={p} first={i === 0} />
              ))}
            </div>
          </RevealOnScroll>

          {/* Founder card */}
          <RevealOnScroll>
            <div
              id="founder"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, var(--accent), oklch(0.7 0.18 165))",
                  color: "#0a0a0b",
                  fontWeight: 700,
                  fontSize: 22,
                  fontFamily: "var(--font-geist-mono), monospace",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                m
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 2 }}>mjasrar</div>
                <div style={{ fontSize: 13, color: "var(--mute)" }}>Founder · solo builder</div>
              </div>
              <p style={{ fontSize: 14, color: "var(--fg-2)", lineHeight: 1.6 }}>
                Computer Science, FAST NUCES. Building mjasrar as a long-running platform — tools-first,
                AI-enhanced, local-first. Shipping weekly, in public.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    height: 32,
                    padding: "0 10px",
                    borderRadius: 8,
                    border: "1px solid var(--line-2)",
                    background: "rgba(255,255,255,0.03)",
                    color: "var(--fg)",
                    fontSize: 12,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <GithubIcon /> GitHub
                </button>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    height: 32,
                    padding: "0 10px",
                    borderRadius: 8,
                    border: "1px solid var(--line-2)",
                    background: "rgba(255,255,255,0.03)",
                    color: "var(--fg)",
                    fontSize: 12,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Read changelog <ArrowURIcon />
                </button>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                  marginTop: 4,
                  paddingTop: 18,
                  borderTop: "1px solid var(--line)",
                }}
              >
                {[
                  { k: "Building since",    v: "Jul 2024"          },
                  { k: "Releases shipped",  v: "87 · weekly cadence" },
                ].map(({ k, v }) => (
                  <div key={k}>
                    <div
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: 10.5,
                        color: "var(--mute)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {k}
                    </div>
                    <div style={{ fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <style>{`@media(max-width:960px){.proj-two{grid-template-columns:1fr!important}}`}</style>
      </div>
    </section>
  );
}

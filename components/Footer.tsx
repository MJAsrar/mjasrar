import { ArrowIcon, GithubIcon } from "@/lib/icons";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function FinalCTA() {
  return (
    <section style={{ position: "relative", zIndex: 1, paddingBottom: 60 }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div
            style={{
              padding: 60,
              textAlign: "center",
              background: "radial-gradient(ellipse at top, var(--accent-2), transparent 60%), var(--surface)",
              border: "1px solid var(--line-2)",
              borderRadius: 16,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--mute)",
                margin: "0 auto 24px",
              }}
            >
              <span style={{ width: 24, height: 1, background: "var(--line-3)", display: "inline-block" }} />
              06 — Get started
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 3.6vw, 48px)",
                lineHeight: 1.08,
                letterSpacing: "-0.028em",
                maxWidth: 720,
                margin: "0 auto 16px",
              }}
            >
              One identity. One interface.{" "}
              <span style={{ fontStyle: "italic", color: "var(--fg-2)" }}>A growing platform.</span>
            </h2>
            <p style={{ maxWidth: 540, margin: "0 auto 32px", color: "var(--mute)", fontSize: 17 }}>
              Open the workbench and try any tool. No signup. Your data never leaves the tab.
            </p>
            <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 44,
                  padding: "0 20px",
                  borderRadius: 10,
                  border: "1px solid var(--fg)",
                  background: "var(--fg)",
                  color: "#0a0a0b",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Open the app <ArrowIcon />
              </button>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 44,
                  padding: "0 20px",
                  borderRadius: 10,
                  border: "1px solid var(--line-2)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--fg)",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                <GithubIcon /> Star on GitHub
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

const FOOTER_COLS = [
  { hd: "Product",  links: ["Tools", "Workbench", "AI layer", "Pricing", "Changelog"] },
  { hd: "Platform", links: ["Ecosystem", "Roadmap", "API · soon", "CLI · soon", "Status"] },
  { hd: "Founder",  links: ["About", "Notes", "Builders log", "Contact", "Twitter / X"] },
];

export function Footer() {
  const date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "64px 0 40px",
        background: "var(--bg-deep)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 56, marginBottom: 56 }}
          className="foot-grid"
        >
          {/* Brand col */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 7,
                  background: "linear-gradient(135deg, var(--accent), oklch(0.7 0.18 165))",
                  color: "#0a0a0b",
                  fontWeight: 700,
                  fontSize: 13,
                  fontFamily: "var(--font-geist-mono), monospace",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                m
              </div>
              <span style={{ fontSize: 15, fontWeight: 600 }}>mjasrar</span>
            </div>
            <p style={{ fontSize: 13.5, color: "var(--mute)", maxWidth: 320 }}>
              A growing software platform of utility and AI tools, built by one founder. Shipping weekly.
            </p>
            <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  height: 24,
                  padding: "0 9px",
                  border: "1px solid var(--line-2)",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.02)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  color: "var(--fg-2)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 0 0 3px var(--accent-2)",
                    display: "inline-block",
                  }}
                />
                all systems · 99.98%
              </span>
            </div>
          </div>

          {/* Link cols */}
          {FOOTER_COLS.map(({ hd, links }) => (
            <div key={hd} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  color: "var(--mute)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {hd}
              </div>
              {links.map((l) => (
                <a key={l} style={{ fontSize: 13.5, color: "var(--fg-2)", cursor: "default" }}>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: "1px solid var(--line)",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11.5,
            color: "var(--mute)",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© 2026 mjasrar · local-first by default</span>
          <span>v0.4.2 · last shipped {date}</span>
        </div>
      </div>

      <style>{`@media(max-width:880px){.foot-grid{grid-template-columns:1fr 1fr!important;gap:32px!important}}`}</style>
    </footer>
  );
}

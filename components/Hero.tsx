import { HERO_LINES } from "@/lib/data";
import { ArrowIcon } from "@/lib/icons";
import { Eyebrow } from "@/components/ui/Eyebrow";

function MiniTerminal() {
  return (
    <div
      style={{
        background: "#0d0e10",
        border: "1px solid var(--line)",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 12px",
          borderBottom: "1px solid var(--line)",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 11,
          color: "var(--mute)",
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#3a3a3f", display: "inline-block" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#3a3a3f", display: "inline-block" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#3a3a3f", display: "inline-block" }} />
        <span style={{ marginLeft: 8 }}>~/mjasrar/platform — main</span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: 16,
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 12.5,
          lineHeight: 1.7,
          color: "var(--fg-2)",
        }}
      >
        <span style={{ color: "var(--accent)" }}>$</span>
        {" mjs deploy pdf-toolkit\n"}
        <span style={{ color: "var(--mute)" }}>{"→ building wasm runtime ............ ok\n"}</span>
        <span style={{ color: "var(--mute)" }}>{"→ bundling 6 tools ................. ok\n"}</span>
        <span style={{ color: "var(--mute)" }}>{"→ publishing v1.4.0 ................ ok\n"}</span>
        <span style={{ color: "var(--accent)" }}>✓</span>
        {" shipped to 8 regions · 142ms\n\n"}
        <span style={{ color: "var(--accent)" }}>$</span>
        {" mjs status\n"}
        <span style={{ color: "var(--fg-2)" }}>{"  SYS.01 utility ........ "}</span>
        <span style={{ color: "var(--accent)" }}>● shipped</span>
        {"\n"}
        <span style={{ color: "var(--fg-2)" }}>{"  SYS.02 ai ............. "}</span>
        <span style={{ color: "oklch(0.82 0.14 75)" }}>● building</span>
        {"\n"}
        <span style={{ color: "var(--fg-2)" }}>{"  SYS.03 identity ....... "}</span>
        <span style={{ color: "oklch(0.82 0.14 75)" }}>● building</span>
        {"\n"}
        <span style={{ color: "var(--fg-2)" }}>{"  SYS.04 platform ....... "}</span>
        <span style={{ color: "var(--mute)" }}>○ planned</span>
      </pre>
    </div>
  );
}

export function Hero() {
  const line = HERO_LINES[0];

  return (
    <section style={{ position: "relative", paddingTop: 96, paddingBottom: 80, zIndex: 1 }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        {/* Kicker row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32, flexWrap: "wrap" }}>
          <Eyebrow>{line.kicker}</Eyebrow>
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
              letterSpacing: "0.02em",
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
            v0.4.2 · shipping weekly
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(48px, 6.4vw, 92px)",
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            fontWeight: 500,
            maxWidth: 1120,
          }}
        >
          {line.main}{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>
            <span
              style={{
                backgroundImage: "linear-gradient(transparent 78%, var(--accent-3) 78%)",
                paddingBottom: 2,
              }}
            >
              {line.accentSuffix}
            </span>
          </span>
        </h1>

        {/* Lead */}
        <p style={{ fontSize: 18, color: "var(--mute)", maxWidth: 640, marginTop: 28, lineHeight: 1.55 }}>
          mjasrar is a software platform — a growing suite of utility and AI tools built by an indie
          founder. One identity, one interface, dozens of small, sharp products that compose into a real
          workflow.
        </p>

        {/* CTAs */}
        <HeroCTAs />

        {/* Meta strip */}
        <div
          style={{
            display: "flex",
            gap: 28,
            marginTop: 56,
            flexWrap: "wrap",
            paddingTop: 28,
            borderTop: "1px solid var(--line)",
          }}
        >
          {[
            { k: "Founder",         v: "M. Jasrar · CS, FAST NUCES"  },
            { k: "Active modules",  v: "24 tools across 4 systems"    },
            { k: "Build cadence",   v: "Weekly releases · public log" },
            { k: "Privacy posture", v: "Local-first, on-device AI"    },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 140 }}>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  color: "var(--mute)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {k}
              </span>
              <span style={{ fontSize: 14 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating terminal preview — visible at ≥1180px */}
      <div className="hero-preview">
        <MiniTerminal />
      </div>

      <style>{`
        .hero-preview {
          display: none;
          position: absolute;
          right: max(32px, calc((100vw - var(--container)) / 2 + 32px));
          top: 120px;
          width: 360px;
          transform: rotate(1.4deg);
          pointer-events: none;
        }
        @media (min-width: 1180px) { .hero-preview { display: block; } }
      `}</style>
    </section>
  );
}

// Separated as client component for scroll behaviour
import { HeroCTAs } from "@/components/HeroCTAs";

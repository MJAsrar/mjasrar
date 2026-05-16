import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const AI_PAIRS = [
  {
    tool: "PDF · Extract Text",
    before: "raw text dump\nbroken lines\nheadersmushed\ntogether",
    after: "# Q4 Report\n\nClean prose, layout-aware.\nHeadings preserved.",
    note: "Layout-aware extraction",
  },
  {
    tool: "Image · Smart Crop",
    before: "centered crop\nsubject cut off",
    after: "subject-aware\nframed perfectly",
    note: "AI picks the focal point",
  },
  {
    tool: "Text · Rewrite",
    before: "In light of the fact that\nwe have not yet been able\nto ascertain…",
    after: "We don’t know yet — here’s\nwhat we do know.",
    note: "Tone shift, length cut",
  },
];

export function AILayer() {
  return (
    <section id="ai" style={{ position: "relative", padding: "var(--pad-section) 0", zIndex: 1 }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 56, maxWidth: 760 }}>
            <Eyebrow>03 — AI Layer</Eyebrow>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.028em" }}>
              AI as a quiet upgrade, not a separate product.
            </h2>
            <p style={{ fontSize: 17, color: "var(--mute)" }}>
              Every tool has an AI mode. Same input, same output, same shape — just sharper results. No
              new interface to learn, no &ldquo;chat with my PDF&rdquo; trope. Toggle it on, toggle it off.
            </p>
          </div>
        </RevealOnScroll>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {AI_PAIRS.map((p, i) => (
            <RevealOnScroll key={i}>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 220,
                  height: "100%",
                }}
              >
                {/* Label */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 11,
                    color: "var(--mute)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  <span>{p.tool}</span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: 20,
                      padding: "0 7px",
                      borderRadius: 999,
                      background: "var(--accent-2)",
                      color: "var(--accent)",
                      fontSize: 10,
                      fontFamily: "var(--font-geist-mono), monospace",
                    }}
                  >
                    AI on
                  </span>
                </div>

                {/* Before / After */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 14px 1fr",
                    alignItems: "stretch",
                    border: "1px solid var(--line)",
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    style={{
                      padding: "12px 14px",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 11.5,
                      color: "var(--fg-2)",
                      lineHeight: 1.55,
                      minHeight: 72,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    <div style={{ color: "var(--mute-2)", marginBottom: 6, fontSize: 10, letterSpacing: "0.08em" }}>OFF</div>
                    {p.before}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 11,
                      color: "var(--accent)",
                      background: "rgba(0,0,0,0.3)",
                    }}
                  >
                    →
                  </div>
                  <div
                    style={{
                      padding: "12px 14px",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 11.5,
                      color: "var(--fg-2)",
                      lineHeight: 1.55,
                      minHeight: 72,
                      borderLeft: "1px solid var(--line)",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    <div style={{ color: "var(--accent)", marginBottom: 6, fontSize: 10, letterSpacing: "0.08em" }}>ON</div>
                    {p.after}
                  </div>
                </div>

                <p style={{ fontSize: 13, color: "var(--mute)", marginTop: "auto" }}>{p.note}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

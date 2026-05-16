import type { Metadata } from "next";
import { CHANGELOG, type ChangelogEntry } from "@/lib/changelog";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Changelog — mjasrar",
  description: "Every release, every week. The full build log for the mjasrar platform.",
};

const TAG_COLORS: Record<string, string> = {
  PDF:      "oklch(0.72 0.14 25)",
  Image:    "oklch(0.76 0.14 230)",
  AI:       "var(--accent)",
  Platform: "oklch(0.82 0.14 75)",
  Dev:      "oklch(0.76 0.12 290)",
};

function EntryCard({ entry, last }: { entry: ChangelogEntry; last: boolean }) {
  const tagColor = entry.tag ? TAG_COLORS[entry.tag] : "var(--mute)";
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        gap: "0 40px",
        paddingBottom: last ? 0 : 48,
        marginBottom: last ? 0 : 48,
        borderBottom: last ? "none" : "1px solid var(--line)",
      }}
    >
      {/* Left: version + date */}
      <div style={{ paddingTop: 4 }}>
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--accent)",
            marginBottom: 6,
          }}
        >
          {entry.version}
        </div>
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11,
            color: "var(--mute)",
            letterSpacing: "0.03em",
          }}
        >
          {entry.date}
        </div>
      </div>

      {/* Right: content */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
          <h2 style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.3 }}>{entry.title}</h2>
          {entry.tag && (
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: tagColor,
                padding: "2px 8px",
                border: `1px solid ${tagColor}`,
                borderRadius: 999,
                opacity: 0.85,
              }}
            >
              {entry.tag}
            </span>
          )}
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {entry.bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--fg-2)", lineHeight: 1.6 }}>
              <span style={{ color: "var(--mute)", flexShrink: 0, marginTop: 1 }}>—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ paddingTop: 96, paddingBottom: 64, borderBottom: "1px solid var(--line)", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              height: 24,
              padding: "0 9px",
              border: "1px solid var(--line-2)",
              borderRadius: 999,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11,
              color: "var(--mute)",
              marginBottom: 24,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Changelog
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 500,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              maxWidth: 720,
              marginBottom: 20,
            }}
          >
            Every release,{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--fg-2)" }}>every week.</span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--mute)", maxWidth: 560, lineHeight: 1.6 }}>
            The full build log for the mjasrar platform. Shipped in public, no marketing fluff.
          </p>
        </div>

        {/* Entries */}
        <div style={{ paddingBottom: 120 }}>
          {CHANGELOG.map((entry, i) => (
            <EntryCard key={entry.version} entry={entry} last={i === CHANGELOG.length - 1} />
          ))}
        </div>
      </main>

      <style>{`
        @media (max-width: 640px) {
          .cl-grid { grid-template-columns: 1fr !important; }
          .cl-grid > *:first-child { padding-bottom: 0; }
        }
      `}</style>
    </>
  );
}

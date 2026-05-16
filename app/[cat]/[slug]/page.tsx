import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOOLS, getToolHref } from "@/lib/data";
import { Nav } from "@/components/Nav";

type Params = { cat: string; slug: string };

export function generateStaticParams() {
  return TOOLS.map((t) => ({ cat: t.urlCat, slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { cat, slug } = await params;
  const tool = TOOLS.find((t) => t.urlCat === cat && t.slug === slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — mjasrar`,
    description: tool.desc,
  };
}

const CAT_LABEL: Record<string, string> = {
  pdf: "PDF",
  image: "Image",
  text: "Text",
  ai: "AI",
  developer: "Developer",
};

export default async function ToolPage({ params }: { params: Promise<Params> }) {
  const { cat, slug } = await params;
  const tool = TOOLS.find((t) => t.urlCat === cat && t.slug === slug);
  if (!tool) notFound();

  const catLabel = CAT_LABEL[cat] ?? cat;

  return (
    <>
      <Nav />
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        {/* Breadcrumb */}
        <div style={{ paddingTop: 40, marginBottom: 64 }}>
          <Link
            href="/#tools"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 12,
              color: "var(--mute)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            ← {catLabel}
          </Link>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingBottom: 120,
            gap: 0,
          }}
        >
          {/* Under construction badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 28,
              padding: "0 12px",
              borderRadius: 999,
              border: "1px solid var(--line-2)",
              background: "rgba(255,255,255,0.02)",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11,
              color: "var(--warn)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 40,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--warn)",
                display: "inline-block",
              }}
            />
            Under construction
          </div>

          {/* Tool name */}
          <h1
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 500,
              lineHeight: 1.06,
              letterSpacing: "-0.032em",
              marginBottom: 20,
            }}
          >
            {tool.name}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: 18,
              color: "var(--mute)",
              maxWidth: 480,
              lineHeight: 1.6,
              marginBottom: 28,
            }}
          >
            {tool.desc}
          </p>

          {/* Version + state */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 12,
              color: "var(--mute-2)",
              marginBottom: 64,
            }}
          >
            v{tool.v}
            <span style={{ color: "var(--line-2)" }}>·</span>
            <span style={{ color: tool.state === "stable" ? "var(--accent)" : "var(--warn)" }}>
              ● {tool.state}
            </span>
          </div>

          {/* Message */}
          <p
            style={{
              fontSize: 15,
              color: "var(--mute)",
              maxWidth: 400,
              lineHeight: 1.7,
              marginBottom: 40,
              padding: "24px 28px",
              border: "1px solid var(--line)",
              borderRadius: 14,
              background: "var(--surface)",
            }}
          >
            This tool is being built. It will be available in a future release — check the{" "}
            <Link href="/changelog" style={{ color: "var(--accent)", textDecoration: "none" }}>
              changelog
            </Link>{" "}
            for updates.
          </p>

          {/* Back CTA */}
          <Link
            href="/#tools"
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
              textDecoration: "none",
              transition: "background 140ms ease",
            }}
          >
            ← Back to all tools
          </Link>
        </div>
      </main>
    </>
  );
}

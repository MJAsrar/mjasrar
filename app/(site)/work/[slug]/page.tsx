import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactBand from "@/components/site/ContactBand";
import Figure from "@/components/site/Figure";
import { ArrowUpRight } from "@/components/site/Icons";
import WorkCover from "@/components/site/WorkCover";
import { serviceBySlug, WORK } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const w = WORK.find((x) => x.slug === slug);
  if (!w) return {};
  return {
    title: w.title,
    description: w.summary,
    alternates: { canonical: `/work/${w.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = WORK.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const w = WORK[index];
  const next = WORK[(index + 1) % WORK.length];

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link className="crumb mono-link" href="/work">
            ← All work
          </Link>
          <p className="label">
            <b>{String(index + 1).padStart(2, "0")}</b>
            {w.sector}
            <span className="status" data-status={w.status}>
              {w.status}
            </span>
          </p>
          <h1>{w.title}</h1>
          <p className="page-lead">{w.summary}</p>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="cs-top">
            <WorkCover w={w} index={index} total={WORK.length} />
            <dl className="facts">
              <div>
                <dt>{w.kind === "client" ? "Client" : "Type"}</dt>
                <dd>{w.client}</dd>
              </div>
              <div>
                <dt>Sector</dt>
                <dd>{w.sector}</dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>{w.place}</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>
                  {w.services.map((s, i) => (
                    <span key={s}>
                      {i > 0 && ", "}
                      <Link href={`/services#${s}`}>{serviceBySlug(s).short}</Link>
                    </span>
                  ))}
                </dd>
              </div>
              {w.url && (
                <div>
                  <dt>Live</dt>
                  <dd>
                    <a href={w.url} target="_blank" rel="noopener noreferrer">
                      {w.url.replace("https://", "")}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <ul className="stats cs-stats">
            {w.highlights.map((h) => (
              <li key={h.figure}>
                <b>
                  <Figure value={h.figure} />
                </b>
                <span className="stat-note">{h.label}</span>
              </li>
            ))}
          </ul>
          {w.note && <p className="cs-note">{w.note}</p>}
        </div>
      </section>

      <section className="sec sec-tint">
        <div className="wrap">
          <div className="prose-grid">
            <h2>The problem</h2>
            <p>{w.challenge}</p>
          </div>
          <div className="prose-grid">
            <h2>What we built</h2>
            <p>{w.solution}</p>
          </div>
          <div className="prose-grid">
            <h2>Built with</h2>
            <ul className="tags">
              {w.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="wrap">
        <Link className="next-case" href={`/work/${next.slug}`}>
          <span className="label">Next case study</span>
          <b>{next.title}</b>
          <span className="mono-link">
            Read it <ArrowUpRight />
          </span>
        </Link>
      </div>

      <ContactBand />
    </>
  );
}

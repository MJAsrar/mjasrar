import type { Metadata } from "next";
import ContactBand from "@/components/site/ContactBand";
import { ArrowUpRight } from "@/components/site/Icons";
import SectionHead from "@/components/site/SectionHead";
import { COMPANY, FOUNDER_LINKS, PRINCIPLES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "MJAsrar is a single-member software company registered in Pakistan and based in Islamabad, founded by AI engineer Junaid Asrar.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="label">About</p>
          <h1>A small software company in Islamabad.</h1>
          <p className="page-lead">
            MJAsrar is registered in Pakistan as a single-member company. We build AI systems and the software around them
            for businesses and institutions here and abroad, and we stay with clients after launch.
          </p>
        </div>
      </header>

      <section className="sec" aria-labelledby="principles-title">
        <div className="wrap">
          <SectionHead n="01" label="Principles" id="principles-title" title="How we work.">
            Four rules we learned shipping AI to real customers.
          </SectionHead>
          <ul className="principles">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title}>
                <p className="label">
                  <b>{String(i + 1).padStart(2, "0")}</b>
                </p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="founder-title">
        <div className="wrap split">
          <div>
            <p className="label">
              <b>02</b>Founder
            </p>
            <h2 id="founder-title">The person who builds it.</h2>
            <p className="founder-name">{COMPANY.founder}</p>
          </div>
          <div className="founder-body">
            <p>
              Junaid Asrar is an AI engineer who studied computer science at FAST–NUCES Islamabad and has built production AI
              in industry roles: autonomous agents, retrieval systems and real-time computer vision.
            </p>
            <p>
              Competitive programming shaped Junaid’s approach to problems, with an ICPC regionals qualification in 2025 and
              second place in the All-Pakistan Speed Programming competition. Junaid also served as President of FAST
              Computing Society, the largest society at FAST Islamabad.
            </p>
            <div className="actions">
              <a className="btn" href={COMPANY.portfolio}>
                See Junaid’s portfolio <ArrowUpRight />
              </a>
              {FOUNDER_LINKS.map((l) => (
                <a key={l.href} className="btn btn-ghost" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="company-title">
        <div className="wrap split">
          <div>
            <p className="label">
              <b>03</b>Company
            </p>
            <h2 id="company-title">Company details.</h2>
          </div>
          <dl className="facts">
            <div>
              <dt>Name</dt>
              <dd>{COMPANY.legalName}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{COMPANY.registration}</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>
                {COMPANY.city}, {COMPANY.country} ({COMPANY.timezone})
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

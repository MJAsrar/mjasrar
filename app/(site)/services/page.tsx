import type { Metadata } from "next";
import Link from "next/link";
import ContactBand from "@/components/site/ContactBand";
import { Check } from "@/components/site/Icons";
import { SERVICE_GROUPS, WORK } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agents, WhatsApp chatbots, document search (RAG), voice AI, computer vision, web applications, offline-first desktop software, and hosting and support.",
  alternates: { canonical: "/services" },
};

// Running number for each service across both groups.
const numberOf = (slug: string) => SERVICE_GROUPS.flatMap((g) => g.services).findIndex((s) => s.slug === slug) + 1;

export default function ServicesPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="label">Services</p>
          <h1>What we build, and what you get.</h1>
          <p className="page-lead">
            We take projects from first conversation to production and keep them running afterwards. Each service lists
            what you receive, where it’s typically used, and the work behind it.
          </p>
        </div>
      </header>

      <section className="sec">
        <div className="wrap svc-page">
          <nav className="svc-index" aria-label="Services on this page">
            {SERVICE_GROUPS.map((g) => (
              <div key={g.name}>
                <p className="label">{g.name}</p>
                <ul>
                  {g.services.map((s) => (
                    <li key={s.slug}>
                      <a href={`#${s.slug}`}>{s.short}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div>
            {SERVICE_GROUPS.map((g) => (
              <div className="svc-group" key={g.name}>
                <div className="svc-group-head">
                  <h2>{g.name}</h2>
                  <p>{g.intro}</p>
                </div>
                {g.services.map((s) => {
                  const related = WORK.filter((w) => w.services.includes(s.slug));
                  return (
                    <section key={s.slug} id={s.slug} className="svc-detail" aria-labelledby={`${s.slug}-title`}>
                      <p className="label">
                        <b>{String(numberOf(s.slug)).padStart(2, "0")}</b>
                      </p>
                      <h3 id={`${s.slug}-title`}>{s.name}</h3>
                      <p>{s.body}</p>
                      <div className="svc-cols">
                        <div>
                          <h4 className="label">What you get</h4>
                          <ul className="checks-list">
                            {s.deliverables.map((d) => (
                              <li key={d}>
                                <Check />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="label">Typical uses</h4>
                          <ul className="checks-list">
                            {s.examples.map((d) => (
                              <li key={d}>
                                <Check />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="svc-foot">
                        <ul className="tags" aria-label="Usually built with">
                          {s.stack.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                        {related.length > 0 && (
                          <p className="svc-related">
                            <span>Related work</span>
                            {related.map((w) => (
                              <Link key={w.slug} className="u-link" href={`/work/${w.slug}`}>
                                {w.short}
                              </Link>
                            ))}
                          </p>
                        )}
                      </div>
                    </section>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

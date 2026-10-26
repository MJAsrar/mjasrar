import Link from "next/link";
import AgentDemo from "@/components/site/AgentDemo";
import ContactBand from "@/components/site/ContactBand";
import EngagementTabs from "@/components/site/EngagementTabs";
import Figure from "@/components/site/Figure";
import { ArrowUpRight } from "@/components/site/Icons";
import SectionHead from "@/components/site/SectionHead";
import StackRail from "@/components/site/StackRail";
import TwistedRing from "@/components/site/TwistedRing";
import WorkShowcase from "@/components/site/WorkShowcase";
import { COMPANY, FAQ, PROCESS, SERVICES, STATS, WORK } from "@/lib/site";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: COMPANY.url,
  logo: `${COMPANY.url}/favicon.svg`,
  email: COMPANY.email,
  description: COMPANY.description,
  founder: { "@type": "Person", name: COMPANY.founder },
  address: { "@type": "PostalAddress", addressLocality: COMPANY.city, addressCountry: "PK" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>AI agents and software your business runs on.</h1>
            <p className="hero-lead">
              MJAsrar is a software company in Islamabad. We design, build and look after chatbots, voice agents, document
              search and custom software for companies in Pakistan and abroad.
            </p>
            <div className="actions">
              <Link className="btn" href="/contact">
                Start a project <ArrowUpRight />
              </Link>
              <Link className="btn btn-ghost" href="/work">
                See our work <ArrowUpRight />
              </Link>
            </div>
          </div>
          <TwistedRing className="hero-ring" />
        </div>
      </section>

      <StackRail />

      <section className="sec" aria-labelledby="start-title">
        <div className="wrap">
          <SectionHead n="01" label="Where we start" id="start-title" title="Built for how business actually runs.">
            Customers send voice notes at midnight. The shop’s internet drops. Hosting bills matter. We design for those
            conditions and measure results on your own data before anyone relies on them.
          </SectionHead>
          <ul className="stats">
            {STATS.map((s) => (
              <li key={s.label}>
                <b>
                  <Figure value={s.figure} />
                </b>
                <span className="stat-label">{s.label}</span>
                <span className="stat-note">{s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="demo-title">
        <div className="wrap">
          <SectionHead n="02" label="See it work" id="demo-title" title="One voice note, handled end to end.">
            A customer messages a solar distributor in Urdu, late at night. Choose a step to see what the assistant did.
          </SectionHead>
          <AgentDemo />
        </div>
      </section>

      <section className="sec" aria-labelledby="build-title">
        <div className="wrap">
          <SectionHead n="03" label="Capabilities" id="build-title" title="What we build.">
            AI where it earns its place, and dependable software around it. Most projects combine a few of these.
          </SectionHead>
          <div className="accordion">
            {SERVICES.map((s, i) => (
              <details key={s.slug} name="capabilities" open={i === 0}>
                <summary>
                  <span className="acc-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="acc-title">{s.name}</span>
                  <span className="acc-tags">
                    {s.stack.slice(0, 3).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                  <span className="acc-icon" aria-hidden="true" />
                </summary>
                <div className="acc-body">
                  <p>{s.summary}</p>
                  <ul className="acc-points">
                    {s.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <Link className="u-link mono-link" href={`/services#${s.slug}`}>
                    More on {s.short.toLowerCase()} <ArrowUpRight />
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="engage-title">
        <div className="wrap">
          <SectionHead n="04" label="Engagement" id="engage-title" title="Ways to work with us.">
            Start with a short sprint, a full project or ongoing support.
          </SectionHead>
          <EngagementTabs />
        </div>
      </section>

      <section className="sec" aria-labelledby="method-title">
        <div className="wrap">
          <SectionHead n="05" label="Method" id="method-title" title="How a project runs.">
            You see working software early, and nothing goes live until it has been tested on your data.
          </SectionHead>
          <ol className="method">
            {PROCESS.map((p, i) => (
              <li key={p.title}>
                <span className="method-dot" aria-hidden="true" />
                <span className="label">
                  <b>{String(i + 1).padStart(2, "0")}</b>
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="tags">
                  {p.outputs.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="work-title">
        <div className="wrap">
          <SectionHead n="06" label="Work" id="work-title" title="Shipped, and in use.">
            Systems for government, retail and export clients, and products of our own.
          </SectionHead>
          <WorkShowcase items={WORK} />
        </div>
      </section>

      <section className="sec" aria-labelledby="faq-title">
        <div className="wrap">
          <SectionHead n="07" label="Questions" id="faq-title" title="Questions clients ask." />
          <div className="accordion">
            {FAQ.map((f, i) => (
              <details key={f.q} name="faq">
                <summary>
                  <span className="acc-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="acc-title acc-title-sm">{f.q}</span>
                  <span className="acc-icon" aria-hidden="true" />
                </summary>
                <div className="acc-body">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactBand n="08" />
    </>
  );
}

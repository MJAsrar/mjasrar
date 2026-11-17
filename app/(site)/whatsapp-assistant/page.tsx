import type { Metadata } from "next";
import Link from "next/link";
import BookCall from "@/components/site/BookCall";
import CopyEmail from "@/components/site/CopyEmail";
import Figure from "@/components/site/Figure";
import { ArrowUpRight, Check } from "@/components/site/Icons";
import ProjectBrief from "@/components/site/ProjectBrief";
import SectionHead from "@/components/site/SectionHead";
import { COMPANY, serviceBySlug, WORK } from "@/lib/site";

// Landing page for the WhatsApp assistant offer: the page ads and outreach link to.
export const metadata: Metadata = {
  title: "WhatsApp AI sales assistant",
  description:
    "A WhatsApp assistant that answers leads in their own language, day and night, qualifies them and hands the serious ones to your sales team. Fixed price, tested on your data before launch.",
  alternates: { canonical: "/whatsapp-assistant" },
};

const caseStudy = WORK.find((w) => w.slug === "whatsapp-sales-assistant")!;
const service = serviceBySlug("chatbots");

const FOR = [
  "You run Facebook or Instagram ads that open a WhatsApp chat",
  "Buyers write in more than one language",
  "Leads arrive outside office hours, or faster than your team can reply",
  "Your sales team spends its day sorting serious buyers from casual questions",
  "You pay for a chatbot subscription that doesn’t know your products",
];

const STEPS = [
  {
    title: "Call",
    text: "Half an hour on where your leads come from, the languages they write in, and the tools your team already uses.",
    outputs: ["Fit or not"],
  },
  {
    title: "Fixed-price scope",
    text: "A written scope with what the assistant will do, the timeline, a fixed price and an estimate of monthly running costs.",
    outputs: ["Scope", "Price"],
  },
  {
    title: "Pilot on your catalogue",
    text: "A working assistant on a test number, answering from your own catalogue, price lists and FAQs.",
    outputs: ["Test number"],
  },
  {
    title: "Test and launch",
    text: "We agree a set of real customer questions, measure accuracy against them, and go live on your number once you’re happy.",
    outputs: ["Accuracy report", "Go live"],
  },
  {
    title: "Support",
    text: "We watch the first weeks closely, then monitor and improve it monthly if you want us to.",
    outputs: ["Monitoring"],
  },
];

const QUESTIONS = [
  {
    q: "Do we need a WhatsApp Business API account?",
    a: "No. We set it up with you on Meta’s WhatsApp Business Platform, under your own business account. Meta bills its messaging fees to you directly, with no per-seat chatbot subscription in between.",
  },
  {
    q: "Does it work with our ads?",
    a: "Yes. Click-to-WhatsApp ads on Facebook and Instagram open a chat that the assistant answers straight away, and it can record which ad each lead came from.",
  },
  {
    q: "What happens when it doesn’t know the answer?",
    a: "It doesn’t guess. It asks for details or hands the conversation to your team, and every conversation is logged so you can review it.",
  },
  {
    q: "Which languages does it speak?",
    a: "The assistant we built for an export manufacturer answers in English, Spanish, French and Arabic from one number. Current models handle most languages well, and we test on real messages from your customers before launch.",
  },
  {
    q: "What does it cost to run?",
    a: "Hosting for the assistant above costs under $5 a month, against the $80 subscription it replaced. On top of hosting come Meta’s messaging fees and model usage, which depend on your volume. Every quote includes an estimate.",
  },
  {
    q: "What happens to our data?",
    a: "Your catalogue, documents and conversations stay in accounts you own, and we don’t use them to train models.",
  },
];

export default function WhatsAppAssistantPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="label">WhatsApp AI sales assistant</p>
          <h1>Answer every WhatsApp lead in their language, day and night.</h1>
          <p className="page-lead">
            An assistant on your WhatsApp number that answers from your own catalogue and price list, qualifies each lead,
            and hands the serious buyers to your sales team. Fixed price, and tested on your data before it goes live.
          </p>
          <div className="actions">
            <BookCall from="whatsapp-hero" />
            <a className={COMPANY.booking ? "btn btn-ghost" : "btn"} href="#brief">
              Send a brief <ArrowUpRight />
            </a>
          </div>
        </div>
      </header>

      <section className="sec" aria-labelledby="proof-title">
        <div className="wrap">
          <SectionHead n="01" label="Results" id="proof-title" title="Already working for an exporter.">
            For a solar street-light manufacturer whose ads bring buyers from around the world to WhatsApp.
          </SectionHead>
          <ul className="stats cs-stats">
            {caseStudy.highlights.map((h) => (
              <li key={h.figure}>
                <b>
                  <Figure value={h.figure} />
                </b>
                <span className="stat-note">{h.label}</span>
              </li>
            ))}
          </ul>
          {caseStudy.note && <p className="cs-note">{caseStudy.note}</p>}
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="fit-title">
        <div className="wrap">
          <SectionHead n="02" label="Fit" id="fit-title" title="Who it’s for, and what you get." />
          <div className="svc-cols">
            <div>
              <h3 className="label">A good fit if</h3>
              <ul className="checks-list">
                {FOR.map((d) => (
                  <li key={d}>
                    <Check />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label">What you get</h3>
              <ul className="checks-list">
                {service.deliverables.map((d) => (
                  <li key={d}>
                    <Check />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="story-title">
        <div className="wrap">
          <SectionHead n="03" label="Case study" id="story-title" title="From subscription chatbot to a sales assistant." />
          <div className="prose-grid">
            <h3>The problem</h3>
            <p>{caseStudy.challenge}</p>
          </div>
          <div className="prose-grid">
            <h3>What we built</h3>
            <div>
              <p>{caseStudy.solution}</p>
              <p className="lp-more">
                <Link className="u-link mono-link" href={`/work/${caseStudy.slug}`}>
                  Read the full case study <ArrowUpRight />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="steps-title">
        <div className="wrap">
          <SectionHead n="04" label="How it works" id="steps-title" title="From first call to live.">
            You try a working assistant on your own catalogue before it goes anywhere near a customer.
          </SectionHead>
          <ol className="method">
            {STEPS.map((p, i) => (
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

      <section className="sec" aria-labelledby="lp-faq-title">
        <div className="wrap">
          <SectionHead n="05" label="Questions" id="lp-faq-title" title="Before you ask." />
          <div className="accordion">
            {QUESTIONS.map((f, i) => (
              <details key={f.q} name="lp-faq">
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

      <section className="sec sec-tint" id="brief" aria-labelledby="brief-title">
        <div className="wrap">
          <SectionHead n="06" label="Start" id="brief-title" title="Tell us about your leads.">
            A few sentences is enough: where your leads come from, the languages they write in, and what your team does with
            them today.
          </SectionHead>
          <div className="contact-grid">
            <ProjectBrief source="whatsapp-assistant" preselect={["chatbots"]} />
            <aside className="contact-aside" aria-label="Other ways to reach us">
              {COMPANY.booking && (
                <div>
                  <h2 className="label">Prefer to talk?</h2>
                  <p>Pick a time for a 30-minute video call.</p>
                  <p className="aside-cta">
                    <BookCall from="whatsapp-brief" />
                  </p>
                </div>
              )}
              <div>
                <h2 className="label">Email</h2>
                <a className="big-email u-link" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
                <div>
                  <CopyEmail />
                </div>
              </div>
              <div>
                <h2 className="label">Studio</h2>
                <p>
                  {COMPANY.city}, {COMPANY.country} ({COMPANY.timezone}). Working with clients remotely across time zones.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

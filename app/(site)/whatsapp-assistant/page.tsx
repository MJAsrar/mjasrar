import type { Metadata } from "next";
import AgentDemo from "@/components/site/AgentDemo";
import BookCall from "@/components/site/BookCall";
import ChatMock from "@/components/site/ChatMock";
import CopyEmail from "@/components/site/CopyEmail";
import Figure from "@/components/site/Figure";
import { Check } from "@/components/site/Icons";
import ProjectBrief from "@/components/site/ProjectBrief";
import SectionHead from "@/components/site/SectionHead";
import Testimonial from "@/components/site/Testimonial";
import WhatsAppLink from "@/components/site/WhatsAppLink";
import { COMPANY, TESTIMONIALS, WORK } from "@/lib/site";

// Landing page for the WhatsApp assistant offer, aimed at UAE businesses.
// Google Ads and outreach emails link here, so it has no site menu (see SiteHeader).
export const metadata: Metadata = {
  title: "WhatsApp AI assistant for UAE businesses",
  description:
    "A WhatsApp assistant that answers every lead in Arabic or English, day and night, books or qualifies them and hands serious buyers to your team. Projects from AED 1,000, fixed price.",
  alternates: { canonical: "/whatsapp-assistant" },
};

const caseStudy = WORK.find((w) => w.slug === "whatsapp-sales-assistant")!;
const testimonial = TESTIMONIALS.find((t) => t.caseStudy === caseStudy.slug);
// The accuracy and language figures. The hosting-cost figure is in the FAQ instead.
const proof = caseStudy.highlights.slice(0, 2);

const INDUSTRIES = [
  { name: "Clinics and dental", text: "Answers prices and books appointments, even at midnight." },
  { name: "Real estate", text: "Asks budget, area and timeline before an agent picks up the phone." },
  { name: "Car rental", text: "Quotes daily and monthly rates, collects documents and confirms pickup." },
  { name: "Training and tuition centres", text: "Answers fees and schedules, then books a trial class." },
  { name: "Salons and spas", text: "Shares packages and books slots without tying up your front desk." },
  { name: "Travel and tourism", text: "Sends packages, answers the usual questions and collects traveller details." },
];

const UAE = [
  "Replies in Arabic and English, and other languages your customers write in",
  "Works with Instagram and Facebook ads that open a WhatsApp chat",
  "Answers 24/7 in UAE time, including weekends and Ramadan hours",
  "Quotes in AED from your own price list",
];

const AUTOMATES = [
  "Answers questions from your price list, services and FAQs",
  "Books appointments into Google Calendar or your booking system",
  "Qualifies each lead: what they need, budget, timing and area",
  "Sends every lead to Google Sheets or your CRM, with the ad it came from",
  "Alerts your team on WhatsApp or email when a buyer is ready",
  "Follows up with customers who went quiet",
  "Hands the chat to a person whenever it isn’t sure",
];

const PRICE_FACTORS = [
  "How many languages it needs to handle",
  "Bookings, Google Sheets or CRM connections",
  "The size of your price list or catalogue",
  "How many WhatsApp numbers or branches",
];

const INCLUDED = [
  "A written scope and a fixed price before any work starts",
  "A pilot on a test number, answering from your own data",
  "An accuracy test on real customer questions",
  "Launch on your number, and a close watch over the first weeks",
];

const STEPS = [
  {
    title: "Chat or call",
    text: "A WhatsApp chat or a 30-minute call about where your leads come from, the languages they write in and what your team does today.",
    outputs: ["Fit or not"],
  },
  {
    title: "Fixed-price scope",
    text: "A written scope with what the assistant will do, the timeline, a fixed price in AED and an estimate of monthly running costs.",
    outputs: ["Scope", "Price"],
  },
  {
    title: "Pilot on your data",
    text: "A working assistant on a test number, answering from your own prices, services and FAQs. You try it before your customers do.",
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
    q: "What does it cost?",
    a: "Projects start from AED 1,000, at a fixed price agreed before we begin. After launch you pay Meta’s WhatsApp messaging fees directly, plus hosting and AI usage, and every quote includes an estimate of those. For one client, hosting costs under $5 a month, replacing an $80-a-month chatbot subscription.",
  },
  {
    q: "Does it reply in Arabic?",
    a: "Yes. It replies in the language the customer writes in, including Arabic and English. Before launch we test it on real messages from your customers, in each language they use.",
  },
  {
    q: "Will I be talking to a bot when I contact you?",
    a: "No. Our WhatsApp is answered by Junaid, the founder, who also builds your assistant.",
  },
  {
    q: "You’re based in Pakistan. How does that work for a UAE business?",
    a: "We’re in Islamabad, one hour ahead of the UAE, so our working day overlaps yours. We work over WhatsApp, video calls and shared documents, and the assistant runs in the cloud, answering your customers around the clock.",
  },
  {
    q: "Do we need a WhatsApp Business API account?",
    a: "No. We set it up with you on Meta’s WhatsApp Business Platform, under your own business account. Meta bills its messaging fees to you directly, with no per-seat chatbot subscription in between.",
  },
  {
    q: "What happens when it doesn’t know the answer?",
    a: "It doesn’t guess. It asks for details or hands the conversation to your team, and every conversation is logged so you can review it.",
  },
  {
    q: "What happens to our data?",
    a: "Your price lists, documents and conversations stay in accounts you own, and we don’t use them to train models.",
  },
];

export default function WhatsAppAssistantPage() {
  return (
    <>
      <section className="hero lp-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="label hero-label">WhatsApp AI assistant · for UAE businesses</p>
            <h1>Every WhatsApp lead answered, in Arabic or English.</h1>
            <p className="hero-lead">
              An assistant on your WhatsApp number that replies in seconds from your own prices and services, books or
              qualifies each customer, and passes serious buyers to your team. Day and night, in UAE time.
            </p>
            <p className="lp-price">
              <b>From AED 1,000</b> · fixed price · tested on your data before launch
            </p>
            <div className="actions">
              <WhatsAppLink from="whatsapp-hero" />
              <BookCall from="whatsapp-hero" className="btn btn-ghost" />
            </div>
            <p className="lp-human">You’ll chat with Junaid, the founder. A person, not a bot.</p>
          </div>
          <ChatMock />
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="uae-title">
        <div className="wrap">
          <SectionHead n="01" label="For UAE businesses" id="uae-title" title="Made for how the UAE buys.">
            Customers here message before they buy, often late at night and in more than one language. If nobody answers,
            they message the next business.
          </SectionHead>
          <ul className="lp-industries">
            {INDUSTRIES.map((x) => (
              <li key={x.name}>
                <h3>{x.name}</h3>
                <p>{x.text}</p>
              </li>
            ))}
          </ul>
          <ul className="checks-list lp-uae">
            {UAE.map((d) => (
              <li key={d}>
                <Check />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="auto-title">
        <div className="wrap">
          <SectionHead n="02" label="Automation" id="auto-title" title="More than replies.">
            The assistant does the repetitive work around each chat, so your team only spends time on customers ready to
            buy.
          </SectionHead>
          <ul className="checks-list lp-auto">
            {AUTOMATES.map((d) => (
              <li key={d}>
                <Check />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="proof-title">
        <div className="wrap">
          <SectionHead n="03" label="Results" id="proof-title" title="Already live for a client.">
            A solar street-light manufacturer whose ads bring buyers from many countries to WhatsApp.
          </SectionHead>
          <ul className="stats cs-stats">
            {proof.map((h) => (
              <li key={h.figure}>
                <b>
                  <Figure value={h.figure} />
                </b>
                <span className="stat-note">{h.label}</span>
              </li>
            ))}
          </ul>
          {testimonial && <Testimonial t={testimonial} />}
        </div>
      </section>

      <section className="sec" aria-labelledby="demo-title">
        <div className="wrap">
          <SectionHead n="04" label="See it work" id="demo-title" title="One voice note, handled end to end.">
            Someone sends an Arabic voice note about a Dubai Marina flat at 11:42 pm. Choose a step to see what the assistant does with it.
          </SectionHead>
          <AgentDemo variant="uae" />
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="price-title">
        <div className="wrap">
          <SectionHead n="05" label="Pricing" id="price-title" title="From AED 1,000, fixed price.">
            You know the full project price before any work starts. No per-seat chatbot subscription afterwards.
          </SectionHead>
          <div className="svc-cols">
            <div>
              <h3 className="label">What sets the price</h3>
              <ul className="checks-list">
                {PRICE_FACTORS.map((d) => (
                  <li key={d}>
                    <Check />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label">Included in every project</h3>
              <ul className="checks-list">
                {INCLUDED.map((d) => (
                  <li key={d}>
                    <Check />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="lp-running">
            Running costs after launch: Meta’s WhatsApp message fees, billed to you directly, plus hosting and AI usage.
            Your quote includes an estimate.
          </p>
          <div className="actions lp-price-cta">
            <WhatsAppLink from="whatsapp-pricing" text="Hi MJAsrar, I'd like a quote for a WhatsApp assistant for my business.">
              Get a quote on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="steps-title">
        <div className="wrap">
          <SectionHead n="06" label="How it works" id="steps-title" title="From first chat to live.">
            You try a working assistant on your own data before it goes anywhere near a customer.
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

      <section className="sec sec-tint" aria-labelledby="lp-faq-title">
        <div className="wrap">
          <SectionHead n="07" label="Questions" id="lp-faq-title" title="Before you ask." />
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

      <section className="sec band-dark lp-brief" id="brief" aria-labelledby="brief-title" data-theme="dark">
        <div className="wrap">
          <SectionHead n="08" label="Start" id="brief-title" title="Tell us about your business.">
            Two minutes is enough. We’ll reply on WhatsApp.
          </SectionHead>
          <div className="contact-grid">
            <ProjectBrief source="whatsapp-assistant" short />
            <aside className="contact-aside" aria-label="Other ways to reach us">
              <div>
                <h2 className="label">Faster on WhatsApp</h2>
                <p>Message us directly. Junaid, the founder, replies personally.</p>
                <p className="aside-cta">
                  <WhatsAppLink from="whatsapp-brief" />
                </p>
              </div>
              {COMPANY.booking && (
                <div>
                  <h2 className="label">Prefer to talk?</h2>
                  <p>Pick a time for a 30-minute video call.</p>
                  <p className="aside-cta">
                    <BookCall from="whatsapp-brief" className="btn btn-ghost" />
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
                <p>{COMPANY.city}, {COMPANY.country}. One hour ahead of the UAE, working with you remotely.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <WhatsAppLink from="whatsapp-float" className="wa-float" label="Chat with us on WhatsApp">
        <span>Chat with us</span>
      </WhatsAppLink>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import BookCall from "@/components/site/BookCall";
import CopyEmail from "@/components/site/CopyEmail";
import { Check } from "@/components/site/Icons";
import ProjectBrief from "@/components/site/ProjectBrief";
import SectionHead from "@/components/site/SectionHead";
import SiteMock from "@/components/site/SiteMock";
import Testimonial from "@/components/site/Testimonial";
import WhatsAppLink from "@/components/site/WhatsAppLink";
import { COMPANY, TESTIMONIALS } from "@/lib/site";

// Landing page for the small-business website offer, aimed at UAE businesses that have
// Google reviews but no website. Outreach emails link here; it has no site menu (see SiteHeader).
export const metadata: Metadata = {
  title: "Websites for UAE businesses, from AED 1,000",
  description:
    "A professional website of up to 10 pages with a WhatsApp button on every page. Domain and hosting included for the first year, 3–4 rounds of revisions. From AED 1,000, fixed price.",
  alternates: { canonical: "/websites" },
};

const WA_TEXT = "Hi MJAsrar, I'd like a quote for a website for my business.";
const testimonial = TESTIMONIALS[0];

const INDUSTRIES = [
  { name: "Clinics and salons", text: "Services, prices and a booking button customers can trust." },
  { name: "Car rental", text: "Your fleet, daily and monthly rates, and booking on WhatsApp." },
  { name: "Cleaning and maintenance", text: "Clear services and areas covered, so the right jobs message you." },
  { name: "Movers and contractors", text: "Photos of past jobs and a quick way to ask for a quote." },
  { name: "Restaurants and cafés", text: "Menu, location and opening hours, with ordering on WhatsApp." },
  { name: "Real estate", text: "Listings and an agent one tap away, instead of a social media page." },
];

const INCLUDED = [
  "Up to 10 pages: home, services, about, gallery, contact and more",
  "Built for phones first, where most of your customers will find you",
  "A WhatsApp button and click-to-call on every page",
  "An enquiry form that sends straight to your email",
  "Your Google Maps location, reviews and Business Profile linked",
  "Search basics: page titles, descriptions, a sitemap and fast loading",
  "Domain and hosting included for the first year",
  "3–4 rounds of revisions",
  "Analytics, so you can see visitors and WhatsApp clicks",
];

const PRICE_FACTORS = [
  "How many pages you need, up to 10",
  "Extras such as online booking or several branches",
  "Whether we write the text with you or you provide it",
];

const STEPS = [
  {
    title: "Chat or call",
    text: "A WhatsApp chat or a 30-minute call about your business, your customers and what the site needs to do.",
    outputs: ["Fit or not"],
  },
  {
    title: "Fixed-price quote",
    text: "A written quote with the pages, features, timeline and a fixed price in AED.",
    outputs: ["Quote"],
  },
  {
    title: "Design",
    text: "We design your homepage first, so you see the look before the full site is built.",
    outputs: ["Homepage design"],
  },
  {
    title: "Build and revise",
    text: "We build the rest of the pages, then refine them with you over 3–4 rounds of revisions.",
    outputs: ["Full site", "Revisions"],
  },
  {
    title: "Launch",
    text: "We connect your domain, link your Google Business Profile and set up analytics.",
    outputs: ["Live site"],
  },
];

const QUESTIONS = [
  {
    q: "What does it cost?",
    a: "From AED 1,000, at a fixed price agreed before we start. The price depends on the number of pages and any extras, and your quote lists everything included.",
  },
  {
    q: "Are the domain and hosting really included?",
    a: "Yes, for the first year. We set up the domain and hosting for you, so there is nothing extra to buy before launch.",
  },
  {
    q: "How long does it take?",
    a: "It depends on the number of pages and how quickly we get your photos and text. Your quote includes a timeline.",
  },
  {
    q: "Can I see examples first?",
    a: "Every site is designed for the business it belongs to, so we design your homepage first and you approve it before we build the rest.",
  },
  {
    q: "Will I be talking to a bot when I contact you?",
    a: "No. Our WhatsApp is answered by Junaid, the founder, who also builds your site.",
  },
  {
    q: "You’re based in Pakistan. How does that work for a UAE business?",
    a: "We’re in Islamabad, one hour ahead of the UAE, so our working day overlaps yours. Everything happens over WhatsApp, video calls and shared documents.",
  },
  {
    q: "Can you add a WhatsApp assistant later?",
    a: "Yes. When messages start coming in faster than you can answer, we can add an AI assistant that replies, books and qualifies customers on your WhatsApp number.",
  },
];

export default function WebsitesPage() {
  return (
    <>
      <section className="hero lp-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="label hero-label">Websites · for UAE businesses</p>
            <h1>A website that turns visitors into WhatsApp leads.</h1>
            <p className="hero-lead">
              A professional website of up to 10 pages, built for phones, with your Google reviews on show and a
              WhatsApp button on every page, so customers reach you in one tap.
            </p>
            <p className="lp-price">
              <b>From AED 1,000</b> · fixed price · domain and hosting included
            </p>
            <div className="actions">
              <WhatsAppLink from="websites-hero" text={WA_TEXT}>
                Get a quote on WhatsApp
              </WhatsAppLink>
              <BookCall from="websites-hero" className="btn btn-ghost" />
            </div>
            <p className="lp-human">You’ll chat with Junaid, the founder. A person, not a bot.</p>
          </div>
          <SiteMock />
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="who-title">
        <div className="wrap">
          <SectionHead n="01" label="Who it’s for" id="who-title" title="You have the reviews. Get the website.">
            Customers find you on Google Maps, then look for a website before they call. Without one, many choose a
            business that has one.
          </SectionHead>
          <ul className="lp-industries">
            {INDUSTRIES.map((x) => (
              <li key={x.name}>
                <h3>{x.name}</h3>
                <p>{x.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="inc-title">
        <div className="wrap">
          <SectionHead n="02" label="What you get" id="inc-title" title="Everything you need to go live.">
            One fixed price covers the design, the build, the domain and the first year of hosting.
          </SectionHead>
          <ul className="checks-list lp-auto">
            {INCLUDED.map((d) => (
              <li key={d}>
                <Check />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-tint" aria-labelledby="price-title">
        <div className="wrap">
          <SectionHead n="03" label="Pricing" id="price-title" title="From AED 1,000, fixed price.">
            You know the full price before any work starts, and it includes the domain and a year of hosting.
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
              <h3 className="label">Always included</h3>
              <ul className="checks-list">
                <li>
                  <Check />A written quote and a fixed price before we start
                </li>
                <li>
                  <Check />
                  Your homepage design to approve first
                </li>
                <li>
                  <Check />
                  3–4 rounds of revisions
                </li>
                <li>
                  <Check />
                  Domain and hosting for the first year
                </li>
              </ul>
            </div>
          </div>
          <div className="actions lp-price-cta">
            <WhatsAppLink from="websites-pricing" text={WA_TEXT}>
              Get a quote on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="steps-title">
        <div className="wrap">
          <SectionHead n="04" label="How it works" id="steps-title" title="From first chat to live.">
            You see and approve your homepage design before the rest of the site is built.
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

      <section className="sec sec-tint" aria-labelledby="why-title">
        <div className="wrap">
          <SectionHead n="05" label="Who builds it" id="why-title" title="Built by a software studio.">
            MJAsrar builds AI assistants and custom software for businesses. The same team builds your website, and you
            deal directly with the founder.
          </SectionHead>
          {testimonial && <Testimonial t={testimonial} />}
          <p className="lp-running">
            Want to see the kind of work we do?{" "}
            <Link className="u-link" href="/work">
              Browse our projects
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="sec" aria-labelledby="lp-faq-title">
        <div className="wrap">
          <SectionHead n="06" label="Questions" id="lp-faq-title" title="Before you ask." />
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
          <SectionHead n="07" label="Start" id="brief-title" title="Tell us about your business.">
            Two minutes is enough. We’ll reply on WhatsApp with questions or a quote.
          </SectionHead>
          <div className="contact-grid">
            <ProjectBrief
              source="websites"
              short
              need="Website"
              question="What does your business do, and do you have a website today?"
              example="For example: car rental in Sharjah, 150 Google reviews, no website yet. We want customers to see our cars and message us on WhatsApp."
            />
            <aside className="contact-aside" aria-label="Other ways to reach us">
              <div>
                <h2 className="label">Faster on WhatsApp</h2>
                <p>Message us directly. Junaid, the founder, replies personally.</p>
                <p className="aside-cta">
                  <WhatsAppLink from="websites-brief" text={WA_TEXT} />
                </p>
              </div>
              {COMPANY.booking && (
                <div>
                  <h2 className="label">Prefer to talk?</h2>
                  <p>Pick a time for a 30-minute video call.</p>
                  <p className="aside-cta">
                    <BookCall from="websites-brief" className="btn btn-ghost" />
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
                  {COMPANY.city}, {COMPANY.country}. One hour ahead of the UAE, working with you remotely.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <WhatsAppLink from="websites-float" className="wa-float" label="Chat with us on WhatsApp" text={WA_TEXT}>
        <span>Chat with us</span>
      </WhatsAppLink>
    </>
  );
}

import Link from "next/link";
import { COMPANY } from "@/lib/site";
import BookCall from "./BookCall";
import { ArrowUpRight } from "./Icons";
import TwistedRing from "./TwistedRing";

// The dark closing band used at the end of most pages.
export default function ContactBand({ n }: { n?: string }) {
  return (
    <section className="band-dark" aria-labelledby="contact-title" data-theme="dark">
      <div className="wrap band-grid">
        <div className="band-copy">
          <p className="label">
            {n && <b>{n}</b>}
            Contact
          </p>
          <h2 id="contact-title">
            Tell us what you want to automate.
          </h2>
          <p className="band-lead">
            Book a call, send a short brief or email us. If AI isn’t the right answer, we’ll say so.
          </p>
          <div className="actions">
            <BookCall from="contact-band" />
            <Link className={COMPANY.booking ? "btn btn-ghost" : "btn"} href="/contact">
              Send a project brief <ArrowUpRight />
            </Link>
            {!COMPANY.booking && (
              <a className="btn btn-ghost" href={`mailto:${COMPANY.email}`}>
                Email us
              </a>
            )}
          </div>
          <dl className="band-facts">
            <div>
              <dt className="label">Email</dt>
              <dd>
                <a className="u-link" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">Studio</dt>
              <dd>
                {COMPANY.city}, {COMPANY.country} ({COMPANY.timezone})
              </dd>
            </div>
          </dl>
        </div>
        <TwistedRing className="band-ring" />
      </div>
    </section>
  );
}

import Link from "next/link";
import { COMPANY } from "@/lib/site";
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
            Tell us what you want to <em>automate.</em>
          </h2>
          <p className="band-lead">
            Send a short brief or email us. We’ll reply with questions or a time to talk, and if AI isn’t the right answer,
            we’ll say so.
          </p>
          <div className="actions">
            <Link className="btn" href="/contact">
              Send a project brief <ArrowUpRight />
            </Link>
            <a className="btn btn-ghost" href={`mailto:${COMPANY.email}`}>
              Email us
            </a>
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

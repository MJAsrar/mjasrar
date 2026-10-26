import type { Metadata } from "next";
import CopyEmail from "@/components/site/CopyEmail";
import ProjectBrief from "@/components/site/ProjectBrief";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Tell MJAsrar what you want to build or automate. Send a short project brief or email us directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="label">Contact</p>
          <h1>Start a project.</h1>
          <p className="page-lead">
            Tell us what you want to build or automate. A few sentences is enough; we’ll reply with questions or a time to
            talk.
          </p>
        </div>
      </header>

      <section className="sec">
        <div className="wrap contact-grid">
          <ProjectBrief />
          <aside className="contact-aside" aria-label="Other ways to reach us">
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
                {COMPANY.city}, {COMPANY.country}. Working with clients remotely across time zones ({COMPANY.timezone}).
              </p>
            </div>
            <div>
              <h2 className="label">What happens next</h2>
              <ol>
                <li>We read your brief and reply with questions.</li>
                <li>A call to understand the problem and your systems.</li>
                <li>A written scope, timeline and price.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

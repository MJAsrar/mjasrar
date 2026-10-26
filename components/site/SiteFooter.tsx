import Link from "next/link";
import { COMPANY, FOUNDER_LINKS, NAV, SERVICES } from "@/lib/site";
import { ArrowUpRight } from "./Icons";
import Mark from "./Mark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <p className="footer-statement">Built in Islamabad, for businesses anywhere.</p>
            <p className="footer-sub">AI agents, chatbots, voice AI, document search and custom software.</p>
          </div>
          <Link className="btn" href="/contact">
            Start a project <ArrowUpRight />
          </Link>
        </div>

        <div className="footer-cols">
          <div>
            <h2 className="label">Studio</h2>
            <p>
              {COMPANY.city}, {COMPANY.country}
              <br />
              {COMPANY.timezone}
            </p>
          </div>
          <div>
            <h2 className="label">New business</h2>
            <p>
              <a className="u-link" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
            </p>
            <h2 className="label footer-gap">Founder</h2>
            <ul>
              {FOUNDER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <ArrowUpRight />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="Services">
            <h2 className="label">Services</h2>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`}>{s.short}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2 className="label">Company</h2>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li>
                <a href={COMPANY.portfolio}>Founder’s portfolio</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-legal">
          <span className="footer-brand">
            <Mark size={20} />
            <span>
              © {new Date().getFullYear()} {COMPANY.legalName}
            </span>
          </span>
          <span>{COMPANY.registration}</span>
        </div>
      </div>
      <p className="footer-wordmark" aria-hidden="true">
        MJAsrar
      </p>
    </footer>
  );
}

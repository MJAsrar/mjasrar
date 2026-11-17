"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { NAV } from "@/lib/portfolio/content";
import Clock from "./Clock";
import { ArrowDown } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};

export default function Header() {
  // Past the top of the page the bar condenses into a floating pill.
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 24, () => false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled || open} data-open={open}>
      <div className="nav-shell">
        <a href="#top" className="brand" aria-label="Junaid Asrar, back to top">
          <svg className="mark" width="26" height="26" viewBox="0 0 48 48" aria-hidden="true">
            <rect className="mark-tile" width="48" height="48" rx="12" />
            <path
              className="mark-line"
              d="M11.5 32V22.25a5.25 5.25 0 0 1 10.5 0V32M22 22.25a5.25 5.25 0 0 1 10.5 0V35.5a5 5 0 0 1-5 5H26"
              fill="none"
              strokeWidth="4.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle className="mark-dot" cx="32.5" cy="10.25" r="2.7" />
          </svg>
          <span>Junaid Asrar</span>
        </a>
        <nav className="nav" aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-end">
          <span className="clock label">
            Islamabad <Clock />
          </span>
          <ThemeToggle />
          <a className="btn btn-sm header-cta" href="/Junaid-Asrar-CV.pdf" download>
            Résumé <ArrowDown />
          </a>
          <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav id="mobile-nav" className="mobile-nav" aria-label="Sections" hidden={!open}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="btn" href="/Junaid-Asrar-CV.pdf" download>
            Download résumé <ArrowDown />
          </a>
        </nav>
      </div>
    </header>
  );
}

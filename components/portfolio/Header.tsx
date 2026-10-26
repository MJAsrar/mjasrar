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
          <svg className="mark" width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
            <rect className="mark-tile" width="32" height="32" rx="8" />
            <path className="mark-letter" d="M8 23V9h4.2l3.8 6 3.8-6H24v14h-4v-7.6l-4 6-4-6V23z" />
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

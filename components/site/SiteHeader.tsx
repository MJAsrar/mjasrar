"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { NAV } from "@/lib/site";
import { ArrowUpRight } from "./Icons";
import Mark from "./Mark";
import ThemeToggle from "./ThemeToggle";

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};

export default function SiteHeader() {
  const pathname = usePathname();
  // Past the top of the page the bar condenses into a floating pill.
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 24, () => false);
  // The mobile menu remembers the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header" data-scrolled={scrolled || open} data-open={open}>
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="MJAsrar home">
          <Mark size={26} />
          <span>MJAsrar</span>
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isCurrent(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="nav-end">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-sm header-cta">
            Start a project <ArrowUpRight />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav id="mobile-nav" className="mobile-nav" aria-label="Main" hidden={!open}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isCurrent(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn">
            Start a project <ArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}

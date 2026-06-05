"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { id: "about",      label: "About"      },
  { id: "projects",   label: "Projects"   },
  { id: "experience", label: "Experience" },
  { id: "skills",     label: "Skills"     },
  { id: "contact",    label: "Contact"    },
];

export function Nav() {
  const [hover, setHover]       = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router   = useRouter();

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    return () => document.documentElement.classList.remove("menu-open");
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (pathname === "/") {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      router.push(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    setMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(14px) saturate(160%)",
          WebkitBackdropFilter: "blur(14px) saturate(160%)",
          background: "rgba(10,10,11,0.62)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            height: 60,
            maxWidth: "var(--container)",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          {/* Brand */}
          <button
            onClick={scrollToTop}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", color: "var(--fg)" }}>Junaid Asrar</span>
            <span style={{ color: "var(--mute-2)", fontFamily: "var(--font-geist-mono), monospace", fontSize: 13 }}>/</span>
            <span style={{ color: "var(--mute)", fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}>portfolio</span>
          </button>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 4, marginLeft: 18 }} className="nav-links">
            {NAV_ITEMS.map((it) => (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                style={{
                  height: 32,
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 13.5,
                  borderRadius: 8,
                  cursor: "pointer",
                  background: hover === it.id ? "rgba(255,255,255,0.05)" : "transparent",
                  color: hover === it.id ? "var(--fg)" : "var(--fg-2)",
                  border: "none",
                  transition: "background 120ms ease, color 120ms ease",
                }}
                onMouseEnter={() => setHover(it.id)}
                onMouseLeave={() => setHover(null)}
              >
                {it.label}
              </button>
            ))}
          </div>

          <div style={{ flex: 1 }} />

          {/* Status badge */}
          <div
            className="nav-right"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11.5,
              color: "var(--mute)",
              padding: "0 10px",
              height: 26,
              borderRadius: 999,
              border: "1px solid var(--line)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 0 3px var(--accent-2)",
              }}
            />
            open to work
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              width: 36,
              height: 36,
              background: "none",
              border: "1px solid var(--line)",
              borderRadius: 8,
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <span style={{ display: "block", width: 16, height: 1.5, background: "var(--fg)", borderRadius: 2 }} />
            <span style={{ display: "block", width: 16, height: 1.5, background: "var(--fg)", borderRadius: 2 }} />
            <span style={{ display: "block", width: 16, height: 1.5, background: "var(--fg)", borderRadius: 2 }} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 98,
            background: "rgba(0,0,0,0.6)",
          }}
        />
      )}

      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          width: 280,
          background: "var(--surface)",
          borderLeft: "1px solid var(--line-2)",
          display: "flex",
          flexDirection: "column",
          padding: "20px 0",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms cubic-bezier(.4,0,.2,1)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px 20px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <button
            onClick={scrollToTop}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <span style={{ fontWeight: 600, fontSize: 15, color: "var(--fg)" }}>Junaid Asrar</span>
            <span style={{ color: "var(--mute)", fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}>/portfolio</span>
          </button>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--line)",
              borderRadius: 8,
              cursor: "pointer",
              color: "var(--fg-2)",
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <div style={{ flex: 1, padding: "12px 12px", display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV_ITEMS.map((it) => (
            <button
              key={it.id}
              onClick={() => scrollTo(it.id)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "11px 12px",
                fontSize: 15,
                color: "var(--fg-2)",
                background: "transparent",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 120ms ease, color 120ms ease",
              }}
            >
              {it.label}
            </button>
          ))}
        </div>

        <div
          style={{
            padding: "16px 20px",
            borderTop: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11.5,
              color: "var(--mute)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 0 3px var(--accent-2)",
                flexShrink: 0,
              }}
            />
            Open to AI roles & freelance
          </div>
        </div>
      </aside>
    </>
  );
}

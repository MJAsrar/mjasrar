"use client";

import { ArrowIcon } from "@/lib/icons";

export function HeroCTAs() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const btnBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    height: 40,
    padding: "0 16px",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
  };

  return (
    <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
      <button
        onClick={() => scrollTo("tools")}
        style={{ ...btnBase, background: "var(--fg)", color: "#0a0a0b", border: "1px solid var(--fg)" }}
      >
        Explore tools <ArrowIcon />
      </button>
      <button
        onClick={() => scrollTo("ecosystem")}
        style={{ ...btnBase, background: "rgba(255,255,255,0.03)", color: "var(--fg)", border: "1px solid var(--line-2)" }}
      >
        View ecosystem
      </button>
      <button
        onClick={() => scrollTo("founder")}
        style={{ ...btnBase, background: "rgba(255,255,255,0.03)", color: "var(--fg)", border: "1px solid var(--line-2)" }}
      >
        About founder
      </button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { ENGAGEMENTS } from "@/lib/site";
import { ArrowUpRight, Check } from "./Icons";

export default function EngagementTabs() {
  const [active, setActive] = useState(1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const e = ENGAGEMENTS[active];

  const onKey = (ev: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const delta = ev.key === "ArrowRight" ? 1 : ev.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    ev.preventDefault();
    const n = (i + delta + ENGAGEMENTS.length) % ENGAGEMENTS.length;
    setActive(n);
    tabs.current[n]?.focus();
  };

  return (
    <div className="engage">
      <div className="engage-tabs" role="tablist" aria-label="Ways to work with us">
        {ENGAGEMENTS.map((x, i) => (
          <button
            key={x.key}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`engage-tab-${x.key}`}
            aria-selected={i === active}
            aria-controls="engage-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(ev) => onKey(ev, i)}
          >
            <span className="label">
              <b>{String(i + 1).padStart(2, "0")}</b>
              {x.meta}
            </span>
            <span className="engage-name">{x.name}</span>
            <span className="engage-fit">{x.fit}</span>
          </button>
        ))}
      </div>

      <div className="engage-panel" role="tabpanel" id="engage-panel" aria-labelledby={`engage-tab-${e.key}`}>
        <div className="engage-main">
          <p className="engage-body">{e.body}</p>
          <p className="label">How it runs</p>
          <ol className="phase-bar">
            {e.phases.map((p, i) => (
              <li key={p} data-first={i === 0}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {p}
              </li>
            ))}
          </ol>
          <p className="label">What’s included</p>
          <ul className="checks-list">
            {e.included.map((x) => (
              <li key={x}>
                <Check />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="engage-outcome">
          <p className="label">What you end up with</p>
          <p className="engage-outcome-text">{e.outcome}</p>
          <Link className="btn btn-block" href="/contact">
            Discuss a {e.name.toLowerCase()} <ArrowUpRight />
          </Link>
          <p className="engage-note">Scope and price are quoted for each engagement.</p>
        </div>
      </div>
    </div>
  );
}

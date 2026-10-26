"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/site";
import { ArrowUpRight } from "./Icons";
import WorkCover from "./WorkCover";

// A sticky cover on the left follows whichever case study is in the middle of
// the screen. On narrow screens each item carries its own cover instead.
export default function WorkShowcase({ items }: { items: CaseStudy[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="showcase">
      <div className="showcase-sticky" aria-hidden="true">
        <WorkCover w={items[active]} index={active} total={items.length} key={active} />
      </div>
      <ol className="showcase-list">
        {items.map((w, i) => (
          <li
            key={w.slug}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            data-active={i === active}
          >
            <div className="showcase-cover-inline" aria-hidden="true">
              <WorkCover w={w} index={i} total={items.length} />
            </div>
            <p className="label">
              <b>{String(i + 1).padStart(2, "0")}</b>
              {w.sector}, {w.place}
              <span className="status" data-status={w.status}>
                {w.status}
              </span>
            </p>
            <h3>
              <Link href={`/work/${w.slug}`}>{w.title}</Link>
            </h3>
            <p className="showcase-summary">{w.summary}</p>
            <ul className="tags">
              {w.stack.slice(0, 4).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Link className="u-link mono-link" href={`/work/${w.slug}`}>
              Read the case study <ArrowUpRight />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

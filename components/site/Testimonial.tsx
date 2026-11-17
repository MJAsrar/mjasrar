import Link from "next/link";
import type { Testimonial as T } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

// A client quote, with a link to the matching case study unless we're already on it.
export default function Testimonial({ t, link = true }: { t: T; link?: boolean }) {
  return (
    <figure className="quote">
      <blockquote>
        <p>“{t.quote}”</p>
      </blockquote>
      <figcaption>
        <span className="quote-who">{t.who}</span>
        <span className="quote-where">{t.where}</span>
        {link && (
          <Link className="u-link mono-link quote-link" href={`/work/${t.caseStudy}`}>
            Read the case study <ArrowUpRight />
          </Link>
        )}
      </figcaption>
    </figure>
  );
}

"use client";

import { trackEvent } from "@/lib/analytics";
import { COMPANY } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

// "Book a call" button. Renders nothing until COMPANY.booking holds a link.
export default function BookCall({
  className = "btn",
  from,
  children = "Book a 30-minute call",
}: {
  className?: string;
  from: string;
  children?: string;
}) {
  if (!COMPANY.booking) return null;
  return (
    <a
      className={className}
      href={COMPANY.booking}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("Book call clicked", "book_call_click", { from })}
    >
      {children} <ArrowUpRight />
    </a>
  );
}

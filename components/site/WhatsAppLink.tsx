"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { whatsappLink } from "@/lib/site";
import { WhatsApp } from "./Icons";

const DEFAULT_TEXT = "Hi MJAsrar, I saw your WhatsApp assistant page and I'd like to know more for my business.";

// Opens a WhatsApp chat with the team (a person replies, not a bot) and records
// a `whatsapp_click` event, which can be imported into Google Ads as a conversion.
export default function WhatsAppLink({
  from,
  className = "btn",
  text = DEFAULT_TEXT,
  label,
  children = "Chat with us on WhatsApp",
}: {
  from: string;
  className?: string;
  text?: string;
  label?: string;
  children?: ReactNode;
}) {
  return (
    <a
      className={className}
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() => trackEvent("WhatsApp clicked", "whatsapp_click", { from })}
    >
      <WhatsApp /> {children}
    </a>
  );
}

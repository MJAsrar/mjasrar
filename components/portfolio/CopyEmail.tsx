"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/portfolio/content";

export default function CopyEmail() {
  const [status, setStatus] = useState("");
  return (
    <>
      <button
        type="button"
        className="copy-btn"
        aria-label="Copy email address"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(EMAIL);
            setStatus("Email copied.");
          } catch {
            setStatus("Select the email address to copy it.");
          }
        }}
      >
        Copy email
      </button>
      <span role="status" className="copy-status">
        {status}
      </span>
    </>
  );
}

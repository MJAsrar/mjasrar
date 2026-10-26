"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/site";

export default function CopyEmail() {
  const [status, setStatus] = useState("");
  return (
    <>
      <button
        type="button"
        className="copy-btn"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(COMPANY.email);
            setStatus("Email address copied.");
          } catch {
            setStatus("Couldn’t copy. Select the address above instead.");
          }
        }}
      >
        Copy address
      </button>
      <span role="status" className="copy-status">
        {status && ` ${status}`}
      </span>
    </>
  );
}

"use client";

import { useActionState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { sendBrief, type BriefState } from "@/lib/brief";
import { COMPANY, SERVICES } from "@/lib/site";

const TIMING = ["As soon as possible", "In the next 1–3 months", "Later this year", "Just exploring"];

const initial: BriefState = { status: "idle", message: "" };

// The brief is sent straight to the company inbox by a server action.
// `source` says which page it came from, so ad and outreach traffic can be told apart.
export default function ProjectBrief({ source = "contact", preselect = [] }: { source?: string; preselect?: string[] }) {
  const [state, action, pending] = useActionState(sendBrief, initial);

  useEffect(() => {
    if (state.status === "sent") trackEvent("Brief sent", "generate_lead", { from: source });
  }, [state, source]);

  if (state.status === "sent") {
    return (
      <div className="brief">
        <p className="form-status" role="status">
          Thanks, your brief is on its way. We’ll reply by email with questions or a time to talk. If you don’t hear
          back, write to{" "}
          <a className="text-link" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="brief" action={action}>
      <input type="hidden" name="source" value={source} />
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="two">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={200} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="company">
          Company <span className="optional">(optional)</span>
        </label>
        <input id="company" name="company" autoComplete="organization" maxLength={160} />
      </div>
      <fieldset>
        <legend>
          What do you need? <span className="optional">(choose any)</span>
        </legend>
        <div className="checks">
          {SERVICES.map((s) => (
            <label key={s.slug} className="check">
              <input type="checkbox" name="needs" value={s.short} defaultChecked={preselect.includes(s.slug)} />
              {s.short}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="details">What do you want to build or automate?</label>
        <textarea
          id="details"
          name="details"
          required
          maxLength={1200}
          placeholder="For example: our ads bring in hundreds of WhatsApp messages a week, in Arabic and English, and we lose leads after hours."
        />
      </div>
      <div className="field">
        <label htmlFor="timing">
          When would you like to start? <span className="optional">(optional)</span>
        </label>
        <select id="timing" name="timing" defaultValue="">
          <option value="">Choose one</option>
          {TIMING.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn" disabled={pending}>
        {pending ? "Sending…" : "Send brief"}
      </button>
      {state.status === "error" && (
        <p className="form-error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}

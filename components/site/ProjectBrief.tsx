"use client";

import { useActionState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { sendBrief, type BriefState } from "@/lib/brief";
import { COMPANY, SERVICES } from "@/lib/site";

const TIMING = ["As soon as possible", "In the next 1–3 months", "Later this year", "Just exploring"];

const initial: BriefState = { status: "idle", message: "" };

// The brief is sent straight to the company inbox by a server action.
// `source` says which page it came from, so ad and outreach traffic can be told apart.
// `short` is the landing-page version: name, WhatsApp number, optional email and one question.
// `need`, `question` and `example` tailor the short form to the landing page it sits on.
export default function ProjectBrief({
  source = "contact",
  preselect = [],
  short = false,
  need = "WhatsApp assistant",
  question = "What kind of business, and what should WhatsApp handle?",
  example = "For example: dental clinic in Dubai. We get 40+ WhatsApp messages a day from Instagram ads, in Arabic and English, and miss most of them after 8 pm.",
}: {
  source?: string;
  preselect?: string[];
  short?: boolean;
  need?: string;
  question?: string;
  example?: string;
}) {
  const [state, action, pending] = useActionState(sendBrief, initial);

  useEffect(() => {
    if (state.status === "sent") trackEvent("Brief sent", "generate_lead", { from: source });
  }, [state, source]);

  if (state.status === "sent" && short) {
    return (
      <div className="brief">
        <p className="form-status" role="status">
          Thanks, we’ve got it. Junaid will message you on WhatsApp to talk it through.
        </p>
      </div>
    );
  }

  if (short) {
    return (
      <form className="brief" action={action}>
        <input type="hidden" name="source" value={source} />
        <input type="hidden" name="needs" value={need} />
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
            <label htmlFor="phone">WhatsApp number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              maxLength={40}
              placeholder="+971 50 123 4567"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">
            Email <span className="optional">(optional)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={200} />
        </div>
        <div className="field">
          <label htmlFor="details">{question}</label>
          <textarea id="details" name="details" required maxLength={1200} placeholder={example} />
        </div>
        <button type="submit" className="btn" disabled={pending}>
          {pending ? "Sending…" : "Send"}
        </button>
        {state.status === "error" && (
          <p className="form-error" role="alert">
            {state.message}
          </p>
        )}
      </form>
    );
  }

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

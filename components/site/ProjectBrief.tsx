"use client";

import { useState, type FormEvent } from "react";
import { COMPANY, SERVICES } from "@/lib/site";

const TIMING = ["As soon as possible", "In the next 1–3 months", "Later this year", "Just exploring"];

// There is no mail backend, so the brief is composed into an email in the
// visitor's own mail app. The status line says so plainly after submitting.
export default function ProjectBrief() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const company = get("company");
    const needs = data.getAll("needs").map(String);
    const timing = get("timing");

    const lines = [
      `Name: ${name}`,
      `Email: ${get("email")}`,
      ...(company ? [`Company: ${company}`] : []),
      ...(needs.length ? [`Looking for: ${needs.join(", ")}`] : []),
      ...(timing ? [`Timing: ${timing}`] : []),
      "",
      get("details"),
    ];
    const subject = `Project brief from ${name}${company ? ` (${company})` : ""}`;
    const href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    // Some mail apps truncate or refuse very long mailto links.
    if (href.length > 2000) {
      setError("That brief is too long to send through your email app. Shorten the description, or email us directly.");
      return;
    }
    setError("");
    window.location.href = href;
    setSent(true);
  };

  return (
    <form className="brief" onSubmit={onSubmit}>
      <div className="two">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="company">
          Company <span className="optional">(optional)</span>
        </label>
        <input id="company" name="company" autoComplete="organization" />
      </div>
      <fieldset>
        <legend>
          What do you need? <span className="optional">(choose any)</span>
        </legend>
        <div className="checks">
          {SERVICES.map((s) => (
            <label key={s.slug} className="check">
              <input type="checkbox" name="needs" value={s.short} />
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
          placeholder="For example: our sales team answers the same WhatsApp questions all day, in Urdu and English, and we lose leads after hours."
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
      <button type="submit" className="btn">
        Email this brief
      </button>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <p className="form-status" role="status" hidden={!sent}>
        Your email app should now be open with the brief filled in. Press send there. If nothing opened, email{" "}
        <a className="text-link" href={`mailto:${COMPANY.email}`}>
          {COMPANY.email}
        </a>{" "}
        instead.
      </p>
    </form>
  );
}

"use server";

import { COMPANY } from "@/lib/site";

export type BriefState = { status: "idle" | "sent" | "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sends a project brief from the contact form to the company inbox through
// Resend. Needs RESEND_API_KEY in the environment; RESEND_FROM is optional and
// must be an address on a domain verified in Resend.
export async function sendBrief(_prev: BriefState, data: FormData): Promise<BriefState> {
  const get = (k: string, max: number) => String(data.get(k) ?? "").trim().slice(0, max);

  // Hidden field that people never see; bots that fill every input do.
  if (get("website", 200)) return { status: "sent", message: "" };

  const name = get("name", 120);
  const email = get("email", 200);
  const company = get("company", 160);
  const timing = get("timing", 80);
  const source = get("source", 80);
  const details = get("details", 1200);
  const needs = data
    .getAll("needs")
    .map((n) => String(n).slice(0, 40))
    .slice(0, 12);

  if (!name || !details || !EMAIL_RE.test(email)) {
    return { status: "error", message: "Please add your name, a valid email and a few words about the project." };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("sendBrief: RESEND_API_KEY is not set");
    return { status: "error", message: `The form isn’t working right now. Please email ${COMPANY.email} instead.` };
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(company ? [`Company: ${company}`] : []),
    ...(needs.length ? [`Looking for: ${needs.join(", ")}`] : []),
    ...(timing ? [`Timing: ${timing}`] : []),
    ...(source ? [`Sent from: ${source}`] : []),
    "",
    details,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || `MJAsrar website <website@mjasrar.site>`,
        to: [COMPANY.email],
        reply_to: email,
        subject: `Project brief from ${name}${company ? ` (${company})` : ""}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("sendBrief: Resend responded", res.status, await res.text());
      throw new Error("send failed");
    }
  } catch {
    return { status: "error", message: `That didn’t send. Please try again, or email ${COMPANY.email}.` };
  }

  return { status: "sent", message: "" };
}

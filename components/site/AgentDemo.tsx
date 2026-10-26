"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

const BARS = [6, 10, 16, 9, 22, 28, 18, 12, 24, 30, 20, 14, 8, 18, 26, 32, 22, 16, 10, 20, 28, 24, 14, 9, 16, 22, 12, 7, 14, 20, 26, 18, 11, 7, 12, 6];

type Step = { name: string; time: string; title: string; tags: string[]; body: ReactNode };

const STEPS: Step[] = [
  {
    name: "Heard",
    time: "11:42:03 pm",
    title: "A voice note arrives after hours",
    tags: ["Speech-to-text", "Urdu"],
    body: (
      <>
        <div className="demo-wave" aria-hidden="true">
          {BARS.map((h, i) => (
            <i key={i} style={{ height: h }} />
          ))}
          <span>0:14</span>
        </div>
        <p className="ur" lang="ur" dir="rtl">
          السلام علیکم، کیا آپ کے پاس 60 واٹ کی سولر اسٹریٹ لائٹس دستیاب ہیں؟ ایک ہاؤسنگ سوسائٹی کے لیے 200 چاہئیں۔
        </p>
        <p className="gloss">“Do you have 60-watt solar street lights? We need 200 for a housing society.”</p>
      </>
    ),
  },
  {
    name: "Checked",
    time: "11:42:05 pm",
    title: "It looks the answer up in your own documents",
    tags: ["RAG", "Inventory lookup"],
    body: (
      <dl className="demo-sources">
        <div>
          <dt>Product catalogue</dt>
          <dd>Page 14, 60-watt all-in-one model</dd>
        </div>
        <div>
          <dt>Price list</dt>
          <dd>October, bulk tier from 100 units</dd>
        </div>
        <div>
          <dt>Inventory</dt>
          <dd>640 units in the Lahore warehouse</dd>
        </div>
      </dl>
    ),
  },
  {
    name: "Replied",
    time: "11:42:09 pm",
    title: "It replies in the customer’s language",
    tags: ["Urdu", "WhatsApp Cloud API"],
    body: (
      <>
        <p className="ur" lang="ur" dir="rtl">
          وعلیکم السلام! جی ہاں، 60 واٹ ماڈل اسٹاک میں موجود ہے۔ 200 یونٹس پر بلک ریٹ لگے گا، کوٹیشن ابھی بھیج رہے ہیں۔
        </p>
        <p className="gloss">“Yes, the 60-watt model is in stock. 200 units gets bulk pricing; sending your quote now.”</p>
      </>
    ),
  },
  {
    name: "Handed over",
    time: "11:42:12 pm",
    title: "And passes a qualified lead to your team",
    tags: ["CRM", "Human handoff"],
    body: (
      <dl className="demo-sources">
        <div>
          <dt>Lead type</dt>
          <dd>B2B, housing society</dd>
        </div>
        <div>
          <dt>Quantity</dt>
          <dd>200 units, 60-watt model</dd>
        </div>
        <div>
          <dt>Quote</dt>
          <dd>Sent as a PDF on WhatsApp</dd>
        </div>
        <div>
          <dt>Next</dt>
          <dd>Assigned to sales for 9:00 am</dd>
        </div>
      </dl>
    ),
  },
];

export default function AgentDemo() {
  const [active, setActive] = useState(0);
  // Auto-advance until the visitor picks a step themselves.
  const [auto, setAuto] = useState(true);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let inView = false;
    const io = new IntersectionObserver(([e]) => (inView = e.isIntersecting), { threshold: 0.4 });
    if (root.current) io.observe(root.current);
    const id = setInterval(() => inView && setActive((a) => (a + 1) % STEPS.length), 4200);
    return () => {
      clearInterval(id);
      io.disconnect();
    };
  }, [auto]);

  const choose = (i: number) => {
    setAuto(false);
    setActive(i);
  };
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const delta = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const n = (i + delta + STEPS.length) % STEPS.length;
    choose(n);
    tabs.current[n]?.focus();
  };

  const step = STEPS[active];
  return (
    <div className="demo" ref={root}>
      <div className="demo-list" role="tablist" aria-orientation="vertical" aria-label="What the agent did">
        {STEPS.map((s, i) => (
          <button
            key={s.name}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`demo-tab-${i}`}
            aria-selected={i === active}
            aria-controls="demo-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => choose(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="demo-n">{String(i + 1).padStart(2, "0")}</span>
            <span className="demo-name">{s.name}</span>
            <span className="demo-time">{s.time}</span>
          </button>
        ))}
      </div>
      <div className="demo-card" role="tabpanel" id="demo-panel" aria-labelledby={`demo-tab-${active}`}>
        <div className="demo-card-body" key={active}>
          <p className="label">
            <b>{String(active + 1).padStart(2, "0")}</b>
            {step.name}
          </p>
          <h3>{step.title}</h3>
          <div className="demo-content">{step.body}</div>
          <ul className="tags">
            {step.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <p className="demo-caption">An example modelled on WhatsApp assistants we’ve built.</p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ContactBand from "@/components/site/ContactBand";
import WorkCover from "@/components/site/WorkCover";
import { COMPANY, WORK, type CaseStudy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: a multilingual WhatsApp sales assistant, an offline investigation platform for government, an offline-first point of sale, and our own AI and 3D products.",
  alternates: { canonical: "/work" },
};

function Grid({ items }: { items: CaseStudy[] }) {
  return (
    <ul className="work-grid">
      {items.map((w) => (
        <li key={w.slug}>
          <Link className="work-card" href={`/work/${w.slug}`}>
            <WorkCover w={w} index={WORK.indexOf(w)} total={WORK.length} />
            <p className="label">
              {w.place}
              <span className="status" data-status={w.status}>
                {w.status}
              </span>
            </p>
            <h3>{w.title}</h3>
            <p>{w.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function WorkPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <p className="label">Work</p>
          <h1>Shipped, and in use.</h1>
          <p className="page-lead">
            Systems running for clients in government, retail and export, and products we build to push our own skills
            further. More is in{" "}
            <a className="u-link" href={COMPANY.portfolio}>
              {COMPANY.founder}’s portfolio
            </a>
            .
          </p>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="work-group">
            <p className="label">
              <b>01</b>Client work
            </p>
            <Grid items={WORK.filter((w) => w.kind === "client")} />
          </div>
          <div className="work-group">
            <p className="label">
              <b>02</b>Our own products
            </p>
            <Grid items={WORK.filter((w) => w.kind === "product")} />
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

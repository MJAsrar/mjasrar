import type { CaseStudy } from "@/lib/site";
import Figure from "./Figure";

// A typographic cover for a case study: its headline figure, set large.
export default function WorkCover({ w, index, total }: { w: CaseStudy; index: number; total: number }) {
  const lead = w.highlights[0];
  return (
    <div className="cover">
      <div className="cover-top">
        <span>{w.sector}</span>
        <span>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <p className="cover-figure">
        <Figure value={lead.figure} />
      </p>
      <div className="cover-foot">
        <span className="cover-name">{w.short}</span>
        <span>{lead.label}</span>
      </div>
    </div>
  );
}

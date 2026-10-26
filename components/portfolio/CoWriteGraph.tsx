"use client";

import { useEffect, useState } from "react";
import { STAGES, STAGE_LABELS } from "@/lib/portfolio/content";

// Three-stage pipeline. It cycles on its own; clicking a node takes over.
export default function CoWriteGraph() {
  const [stage, setStage] = useState(0);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    if (manual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setStage((s) => (s + 1) % 3), 3200);
    return () => clearInterval(id);
  }, [manual]);

  return (
    <div className="graph-panel">
      <div className="graph" role="group" aria-label="Document indexing, retrieval, and generation pipeline">
        <svg viewBox="0 0 520 350" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeOpacity="0.28">
            <ellipse cx="260" cy="175" rx="194" ry="135" />
            <ellipse cx="260" cy="175" rx="120" ry="135" transform="rotate(45 260 175)" />
            <ellipse cx="260" cy="175" rx="120" ry="135" transform="rotate(-45 260 175)" />
            <path d="M85 205L260 67L434 205Z" />
          </g>
          <g fill="currentColor">
            <circle cx="260" cy="67" r="5" />
            <circle cx="85" cy="205" r="5" />
            <circle cx="434" cy="205" r="5" />
          </g>
        </svg>
        <span className="graph-center">
          Co<span>W</span>
        </span>
        {STAGE_LABELS.map((label, i) => (
          <button
            key={label}
            type="button"
            className={`node node${i + 1}${stage === i ? " active" : ""}`}
            aria-pressed={stage === i}
            onClick={() => {
              setManual(true);
              setStage(i);
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="stage-copy" aria-live="polite">
        {STAGES[stage]}
      </p>
      <div className="graph-bottom">
        <span>
          100+<small>DOCUMENTS CONNECTED</small>
        </span>
        <span>
          GraphRAG<small>CONTEXT-AWARE REASONING</small>
        </span>
      </div>
    </div>
  );
}

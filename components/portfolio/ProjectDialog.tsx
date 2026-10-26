"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS, type Project } from "@/lib/portfolio/content";
import { OPEN_PROJECT_EVENT } from "./OpenProject";

export default function ProjectDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const open = (e: Event) => {
      const p = PROJECTS[(e as CustomEvent<string>).detail];
      if (!p) return;
      setProject(p);
      ref.current?.showModal();
      document.body.classList.add("modal-open");
      window.dispatchEvent(new Event("lenis:stop"));
    };
    window.addEventListener(OPEN_PROJECT_EVENT, open);
    return () => window.removeEventListener(OPEN_PROJECT_EVENT, open);
  }, []);

  const onClose = () => {
    document.body.classList.remove("modal-open");
    window.dispatchEvent(new Event("lenis:start"));
  };

  return (
    <dialog
      ref={ref}
      id="project-dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
          e.currentTarget.close();
        }
      }}
      data-lenis-prevent
    >
      <div className="dialog-top">
        <span className="tiny-label">PROJECT NOTES</span>
        <button type="button" onClick={() => ref.current?.close()} aria-label="Close project details">
          Close ×
        </button>
      </div>
      {project && (
        <div className="dialog-body">
          <h2 id="dialog-title">{project.title}</h2>
          <p>{project.subtitle}</p>
          <h4>THE PROJECT</h4>
          <p>{project.body}</p>
          <h4>UNDER THE HOOD</h4>
          <p>{project.approach}</p>
          {project.results && (
            <>
              <h4>{project.resultsLabel ?? "VALIDATION & COST"}</h4>
              <p>{project.results}</p>
            </>
          )}
          <div className="tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {project.url && (
            <a className="btn" href={project.url} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}

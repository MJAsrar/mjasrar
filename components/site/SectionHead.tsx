import type { ReactNode } from "react";

// Numbered section label, heading, and an optional note set to the right.
export default function SectionHead({
  n,
  label,
  title,
  id,
  children,
}: {
  n: string;
  label: string;
  title: ReactNode;
  id: string;
  children?: ReactNode;
}) {
  return (
    <div className="sec-head">
      <div>
        <p className="label">
          <b>{n}</b>
          {label}
        </p>
        <h2 id={id}>{title}</h2>
      </div>
      {children && <p className="sec-note">{children}</p>}
    </div>
  );
}

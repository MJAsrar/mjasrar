"use client";

import type { ReactNode } from "react";

export const OPEN_PROJECT_EVENT = "open-project";

export default function OpenProject({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_PROJECT_EVENT, { detail: id }))}
    >
      {children}
    </button>
  );
}

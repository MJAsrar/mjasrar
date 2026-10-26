// Small stroke icons, sized by the surrounding font.
const base = { width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export function ArrowUpRight() {
  return (
    <svg {...base} className="icon">
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}

export function Sun() {
  return (
    <svg {...base} className="icon">
      <circle cx="8" cy="8" r="2.6" />
      <path d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" />
    </svg>
  );
}

export function Moon() {
  return (
    <svg {...base} className="icon">
      <path d="M13.2 9.6A5.6 5.6 0 0 1 6.4 2.8a5.6 5.6 0 1 0 6.8 6.8Z" />
    </svg>
  );
}

export function Check() {
  return (
    <svg {...base} className="icon">
      <path d="m3.5 8.5 3 3 6-7" />
    </svg>
  );
}

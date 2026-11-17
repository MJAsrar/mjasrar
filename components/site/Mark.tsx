// The MJAsrar mark ("Arches"): a lowercase m and j drawn as one line, on a tile.
// It follows the theme through CSS (.mark-tile / .mark-line / .mark-dot);
// /favicon.svg and the files in /public/brand are the same drawing.
export default function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <rect className="mark-tile" width="48" height="48" rx="12" />
      <path
        className="mark-line"
        d="M11.5 32V22.25a5.25 5.25 0 0 1 10.5 0V32M22 22.25a5.25 5.25 0 0 1 10.5 0V35.5a5 5 0 0 1-5 5H26"
        fill="none"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="mark-dot" cx="32.5" cy="10.25" r="2.7" />
    </svg>
  );
}

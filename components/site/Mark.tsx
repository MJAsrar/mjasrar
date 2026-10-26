// The MJAsrar mark: a geometric M on a tile. It follows the theme through CSS
// (.mark-tile / .mark-letter); /favicon.svg is the same drawing in black.
export default function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect className="mark-tile" width="32" height="32" rx="8" />
      <path className="mark-letter" d="M8 23V9h4.2l3.8 6 3.8-6H24v14h-4v-7.6l-4 6-4-6V23z" />
    </svg>
  );
}

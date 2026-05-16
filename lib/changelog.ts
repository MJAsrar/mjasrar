export type ChangelogTag = "PDF" | "Image" | "AI" | "Platform" | "Dev";

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  bullets: string[];
  tag?: ChangelogTag;
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "v0.4.2",
    date: "2026-05-12",
    title: "PDF Toolkit — batch compress & password protect",
    bullets: [
      "Added batch compress: drop multiple PDFs, get a single ZIP of optimised files.",
      "Password-protect PDF now supports owner vs user password distinction.",
      "WASM runtime updated; average processing time down 38% on large documents.",
    ],
    tag: "PDF",
  },
  {
    version: "v0.4.1",
    date: "2026-05-05",
    title: "AI layer — summarise and rewrite go stable",
    bullets: [
      "Summarise and Rewrite ops promoted from beta; no longer behind the AI toggle.",
      "Added tone selector (formal / casual / technical) to the Rewrite op.",
      "Translate op now supports 12 languages via the on-device model.",
    ],
    tag: "AI",
  },
  {
    version: "v0.4.0",
    date: "2026-04-28",
    title: "Image toolkit public beta",
    bullets: [
      "Launched SYS.01 Image: resize, crop, convert (AVIF/WebP/PNG/JPEG), and strip EXIF metadata.",
      "All processing runs in-browser via WASM — no file ever leaves your device.",
      "Bulk export as ZIP for batch workflows.",
    ],
    tag: "Image",
  },
  {
    version: "v0.3.8",
    date: "2026-04-14",
    title: "Platform — changelog + SEO infrastructure",
    bullets: [
      "Shipped this changelog page; linked from nav and footer.",
      "Added sitemap.xml and robots.txt for search indexing.",
      "OG image and Twitter card meta now auto-generated from the Next.js edge runtime.",
    ],
    tag: "Platform",
  },
  {
    version: "v0.3.5",
    date: "2026-03-31",
    title: "Dev tools alpha — JSON formatter and base64 codec",
    bullets: [
      "JSON formatter with syntax highlighting and error line detection.",
      "Base64 encode/decode handles binary-safe blobs up to 10 MB.",
      "Word-count op now reports characters, words, sentences, and reading time.",
    ],
    tag: "Dev",
  },
];

export type ToolState = "stable" | "beta";
export type ToolCat = "pdf" | "image" | "text" | "ai" | "dev";
export type ToolIcon = "pdf" | "image" | "text" | "code" | "spark";

export interface Tool {
  id: string;
  cat: ToolCat;
  icon: ToolIcon;
  name: string;
  desc: string;
  state: ToolState;
  ai: boolean;
  hot: boolean;
  v: string;
}

export interface ToolCategory {
  id: string;
  label: string;
  count: number;
}

export type ModuleStatus = "shipped" | "building" | "planned";

export interface EcosystemModule {
  name: string;
  status: ModuleStatus;
  v: string;
}

export interface EcosystemSystem {
  id: string;
  code: string;
  name: string;
  blurb: string;
  modules: EcosystemModule[];
}

export interface Project {
  id: string;
  code: string;
  name: string;
  desc: string;
  tag: string;
}

export interface HeroLine {
  kicker: string;
  main: string;
  accentSuffix: string;
}

export const HERO_LINES: HeroLine[] = [
  { kicker: "Indie SaaS · building in public", main: "Building systems,",    accentSuffix: "not standalone software." },
  { kicker: "Tools-first founder",             main: "A growing ecosystem",   accentSuffix: "of software utilities."   },
  { kicker: "AI as infrastructure",            main: "AI-enhanced tooling,",  accentSuffix: "wired into everyday work." },
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  { id: "all",   label: "All",       count: 24 },
  { id: "pdf",   label: "PDF",       count: 6  },
  { id: "image", label: "Image",     count: 5  },
  { id: "text",  label: "Text",      count: 4  },
  { id: "ai",    label: "AI",        count: 5  },
  { id: "dev",   label: "Developer", count: 4  },
];

export const TOOLS: Tool[] = [
  { id: "pdf-compress",  cat: "pdf",   icon: "pdf",   name: "Compress PDF",       desc: "Shrink documents up to 90%",          state: "stable", ai: false, hot: true,  v: "1.4.0" },
  { id: "pdf-merge",     cat: "pdf",   icon: "pdf",   name: "Merge PDF",          desc: "Combine files, reorder, drag",         state: "stable", ai: false, hot: false, v: "1.2.1" },
  { id: "pdf-split",     cat: "pdf",   icon: "pdf",   name: "Split PDF",          desc: "Extract pages or ranges",              state: "stable", ai: false, hot: false, v: "1.1.0" },
  { id: "pdf-sign",      cat: "pdf",   icon: "pdf",   name: "Sign PDF",           desc: "Local signing, no upload",             state: "beta",   ai: false, hot: false, v: "0.6.2" },
  { id: "pdf-extract",   cat: "pdf",   icon: "pdf",   name: "Extract Text",       desc: "Clean prose from any PDF",             state: "stable", ai: true,  hot: false, v: "2.0.0" },
  { id: "pdf-translate", cat: "pdf",   icon: "pdf",   name: "Translate PDF",      desc: "Layout-preserving, 40+ languages",     state: "beta",   ai: true,  hot: true,  v: "0.4.1" },
  { id: "img-compress",  cat: "image", icon: "image", name: "Compress Image",     desc: "WebP, AVIF, JPEG — visually lossless", state: "stable", ai: false, hot: false, v: "1.3.0" },
  { id: "img-convert",   cat: "image", icon: "image", name: "Convert Format",     desc: "PNG · JPG · WebP · AVIF · HEIC",       state: "stable", ai: false, hot: false, v: "1.5.0" },
  { id: "img-bgremove",  cat: "image", icon: "image", name: "Remove Background",  desc: "On-device, no upload",                 state: "stable", ai: true,  hot: true,  v: "1.0.0" },
  { id: "img-upscale",   cat: "image", icon: "image", name: "Upscale 2×/4×",      desc: "Real-ESRGAN local pipeline",           state: "beta",   ai: true,  hot: false, v: "0.7.0" },
  { id: "img-crop",      cat: "image", icon: "image", name: "Smart Crop",         desc: "Subject-aware framing",                state: "beta",   ai: true,  hot: false, v: "0.5.0" },
  { id: "txt-summarize", cat: "text",  icon: "text",  name: "Summarize",          desc: "Long-form → essentials",               state: "stable", ai: true,  hot: false, v: "1.1.0" },
  { id: "txt-rewrite",   cat: "text",  icon: "text",  name: "Rewrite",            desc: "Tone, length, audience",               state: "stable", ai: true,  hot: false, v: "1.2.0" },
  { id: "txt-diff",      cat: "text",  icon: "text",  name: "Diff & Merge",       desc: "Side-by-side comparison",              state: "stable", ai: false, hot: false, v: "1.0.0" },
  { id: "txt-format",    cat: "text",  icon: "text",  name: "Format / Clean",     desc: "Whitespace, casing, encoding",         state: "stable", ai: false, hot: false, v: "1.4.0" },
  { id: "ai-chat",       cat: "ai",    icon: "spark", name: "Workbench",          desc: "Multi-model scratchpad",               state: "beta",   ai: true,  hot: true,  v: "0.4.2" },
  { id: "ai-extract",    cat: "ai",    icon: "spark", name: "Structured Extract", desc: "Files → JSON, schema-aware",           state: "beta",   ai: true,  hot: false, v: "0.3.0" },
  { id: "ai-vision",     cat: "ai",    icon: "spark", name: "Image Inspect",      desc: "Caption, OCR, tagging",                state: "beta",   ai: true,  hot: false, v: "0.2.0" },
  { id: "ai-voice",      cat: "ai",    icon: "spark", name: "Transcribe",         desc: "Audio → text + speakers",              state: "beta",   ai: true,  hot: false, v: "0.5.0" },
  { id: "ai-translate",  cat: "ai",    icon: "spark", name: "Translate",          desc: "40+ languages, context-aware",         state: "stable", ai: true,  hot: false, v: "1.0.0" },
  { id: "dev-json",      cat: "dev",   icon: "code",  name: "JSON Toolkit",       desc: "Format, query, validate",              state: "stable", ai: false, hot: false, v: "1.2.0" },
  { id: "dev-regex",     cat: "dev",   icon: "code",  name: "Regex Lab",          desc: "Build, test, explain",                 state: "stable", ai: true,  hot: false, v: "1.1.0" },
  { id: "dev-uuid",      cat: "dev",   icon: "code",  name: "UUID / Hash",        desc: "Generate, decode, verify",             state: "stable", ai: false, hot: false, v: "1.0.0" },
  { id: "dev-jwt",       cat: "dev",   icon: "code",  name: "JWT Inspector",      desc: "Decode, validate, sign",               state: "stable", ai: false, hot: false, v: "1.0.0" },
];

export const ECOSYSTEM: EcosystemSystem[] = [
  {
    id: "utility", code: "SYS.01", name: "Utility Layer",
    blurb: "Document, image, and text tools. The foundation everything else builds on.",
    modules: [
      { name: "PDF Toolkit",   status: "shipped",  v: "1.4" },
      { name: "Image Toolkit", status: "shipped",  v: "1.3" },
      { name: "Text Toolkit",  status: "shipped",  v: "1.2" },
      { name: "Audio Toolkit", status: "building", v: "0.3" },
      { name: "Video Toolkit", status: "planned",  v: "—"   },
    ],
  },
  {
    id: "ai", code: "SYS.02", name: "AI Layer",
    blurb: "Models exposed as small, sharp tools — not a chat box. Composes onto Utility.",
    modules: [
      { name: "Workbench",          status: "building", v: "0.4" },
      { name: "Structured Extract", status: "building", v: "0.3" },
      { name: "Vision Inspect",     status: "building", v: "0.2" },
      { name: "Voice / Transcribe", status: "building", v: "0.5" },
      { name: "Agents",             status: "planned",  v: "—"   },
    ],
  },
  {
    id: "identity", code: "SYS.03", name: "Account & Sync",
    blurb: "Lightweight identity. Cross-device history, shared workspaces, no lock-in.",
    modules: [
      { name: "Local-first store", status: "shipped",  v: "1.0" },
      { name: "Sync",              status: "building", v: "0.6" },
      { name: "Workspaces",        status: "planned",  v: "—"   },
      { name: "Teams",             status: "planned",  v: "—"   },
    ],
  },
  {
    id: "platform", code: "SYS.04", name: "Platform & API",
    blurb: "The same primitives, surfaced for developers. Every tool callable from code.",
    modules: [
      { name: "Public API", status: "planned", v: "—" },
      { name: "CLI",        status: "planned", v: "—" },
      { name: "Webhooks",   status: "planned", v: "—" },
      { name: "SDKs",       status: "planned", v: "—" },
    ],
  },
];

export const PROJECTS: Project[] = [
  { id: "p1", code: "M.01", name: "PDF runtime",       desc: "Wasm-based document pipeline powering the PDF Toolkit.",  tag: "Infra"    },
  { id: "p2", code: "M.02", name: "On-device matting", desc: "Background removal that never sees a server.",           tag: "AI"       },
  { id: "p3", code: "M.03", name: "Local-first store", desc: "Sync engine for cross-device tool history.",             tag: "Platform" },
  { id: "p4", code: "M.04", name: "Workbench",         desc: "Multi-model scratchpad — primitive for everything AI.",  tag: "AI"       },
];

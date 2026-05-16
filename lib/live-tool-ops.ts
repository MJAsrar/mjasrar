export type OpId = "clean" | "format" | "base64" | "wc" | "summarize" | "rewrite" | "translate";

export interface Op {
  id: OpId;
  label: string;
  ai: boolean;
  kind: "text" | "json";
}

export const OPS: Op[] = [
  { id: "clean",     label: "Clean text",         ai: false, kind: "text" },
  { id: "format",    label: "Format JSON",         ai: false, kind: "json" },
  { id: "base64",    label: "Base64",              ai: false, kind: "text" },
  { id: "wc",        label: "Word count",          ai: false, kind: "text" },
  { id: "summarize", label: "Summarize",           ai: true,  kind: "text" },
  { id: "rewrite",   label: "Rewrite — concise",   ai: true,  kind: "text" },
  { id: "translate", label: "Translate → FR",      ai: true,  kind: "text" },
];

export const SAMPLE_TEXT =
  "mjasrar is an indie-built software platform that bundles small utility tools into one cohesive product surface. Each tool has the same shape: input on the left, output on the right, with optional AI enhancement that runs as a quiet layer underneath. The goal is to build a real software ecosystem one module at a time — not a portfolio, not a side project, but a serious tools platform that grows every week.";

export const SAMPLE_JSON =
  '{"product":"mjasrar","modules":[{"id":"pdf","status":"shipped"},{"id":"ai","status":"building"}],"version":"0.4.2","privacy":"local-first"}';

export function runOp(opId: OpId, input: string): string {
  switch (opId) {
    case "clean":
      return input
        .replace(/[ \t]+/g, " ")
        .replace(/[ \t]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    case "format":
      try {
        return JSON.stringify(JSON.parse(input), null, 2);
      } catch (e) {
        return `// invalid JSON — ${(e as Error).message ?? "parse error"}\n${input}`;
      }
    case "base64":
      try {
        return btoa(unescape(encodeURIComponent(input)));
      } catch {
        return "// could not encode";
      }
    case "wc": {
      const words = (input.trim().match(/\S+/g) ?? []).length;
      const chars = input.length;
      const lines = input.split("\n").length;
      const sentences = (input.match(/[.!?]+/g) ?? []).length;
      const readMin = Math.max(1, Math.round(words / 220));
      return [
        `words ........... ${words}`,
        `characters ...... ${chars}`,
        `lines ........... ${lines}`,
        `sentences ....... ${sentences}`,
        `read time ....... ~${readMin} min`,
      ].join("\n");
    }
    case "summarize":
      return `→ mjasrar bundles small utility tools into one product surface\n→ Each tool: input · process · output. AI is an optional quiet layer\n→ Goal: build a real platform incrementally, weekly releases\n\n— summary generated locally · ai-haiku-4-5 · 312ms`;
    case "rewrite":
      return "mjasrar is one product surface for many small tools. Same shape every time: input, output, optional AI underneath. The plan is a real platform — built weekly, module by module.";
    case "translate":
      return "mjasrar est une plateforme logicielle développée en solo qui regroupe de petits outils utilitaires au sein d'une même surface produit cohérente. Chaque outil a la même structure : entrée à gauche, sortie à droite, avec une couche d'IA optionnelle. L'objectif est de construire un véritable écosystème logiciel, module par module.";
    default:
      return input;
  }
}

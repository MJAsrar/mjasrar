import { useSyncExternalStore } from "react";

// Light/dark lives on <html data-theme>, set before paint by the layout script
// and shared with the company site through the same localStorage key.
export type Theme = "light" | "dark";

const subscribe = (cb: () => void) => {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
};
const read = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export function useTheme() {
  return useSyncExternalStore(subscribe, read, () => "light" as Theme);
}

export function setTheme(t: Theme) {
  document.documentElement.dataset.theme = t;
  try {
    localStorage.setItem("theme", t);
  } catch {}
}

"use client";

import { setTheme, useTheme } from "@/lib/portfolio/theme";
import { Moon, Sun } from "./Icons";

export default function ThemeToggle() {
  const theme = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button type="button" className="theme-toggle" aria-label={`Switch to ${next} theme`} onClick={() => setTheme(next)}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}

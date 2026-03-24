"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem("lss-theme") as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem("lss-theme", theme);
  }, [theme]);

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("lss-theme", nextTheme);
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={handleToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] text-[var(--text-main)] transition hover:bg-[var(--surface)]"
    >
      <span className="sr-only">
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-[var(--accent)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2" />
      <path d="M12 19.3v2.2" />
      <path d="M21.5 12h-2.2" />
      <path d="M4.7 12H2.5" />
      <path d="M18.7 5.3l-1.6 1.6" />
      <path d="M6.9 17.1l-1.6 1.6" />
      <path d="M18.7 18.7l-1.6-1.6" />
      <path d="M6.9 6.9L5.3 5.3" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-[var(--accent)]"
      fill="currentColor"
    >
      <path d="M20.2 14.1a8.7 8.7 0 0 1-10.3-10 9.2 9.2 0 1 0 10.3 10Z" />
    </svg>
  );
}

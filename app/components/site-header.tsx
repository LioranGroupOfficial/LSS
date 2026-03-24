"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#support", label: "Support" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-4 z-30 mb-8">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-[var(--border-strong)] bg-[var(--surface)]/90 px-4 py-3 shadow-[0_12px_40px_var(--shadow-soft)] backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-4xl bg-[var(--accent)] text-sm font-black uppercase tracking-[0.32em] text-[var(--accent-contrast)]">
              LSS
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase sm:text-sm">
                Lioran Group
              </p>
              <p className="truncate text-sm font-semibold sm:text-base">
                Lioran Software Solutions
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-6 text-sm font-medium text-[var(--text-soft)]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-[var(--text-main)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-contrast)] transition hover:translate-y-[-1px] hover:shadow-[0_10px_24px_rgba(10,120,106,0.28)]"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] text-[var(--text-main)] transition hover:bg-[var(--surface)]"
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6 6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="mt-4 border-t border-[var(--border-soft)] pt-4 md:hidden">
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-3 text-sm font-medium text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Theme
                </p>
                <p className="text-sm text-[var(--text-soft)]">Toggle appearance</p>
              </div>
              <ThemeToggle />
            </div>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:translate-y-[-1px] hover:shadow-[0_10px_24px_rgba(10,120,106,0.28)]"
            >
              Start a Project
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}

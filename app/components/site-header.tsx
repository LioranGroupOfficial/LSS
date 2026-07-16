"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { AppRoute } from "@/lib/site";
import { GITHUB_ORG_URL, LIORAN_GROUP_URL } from "@/lib/site";
import { ChevronDownIcon, CloseIcon, GitHubIcon, MenuIcon } from "./icons";

type MenuGroup = {
  key: string;
  label: string;
  links: Array<{ href: string; label: string; external?: boolean }>;
};

const desktopGroups: MenuGroup[] = [
  {
    key: "products",
    label: "Products",
    links: [
      { href: "/products/liorandb", label: "LioranDB" },
      { href: "/products/lioran-bastion", label: "LioranBastion" },
      { href: "/products/lioran-auth", label: "Lioran Auth" },
      { href: "/roadmap", label: "Product Roadmap" },
    ],
  },
  {
    key: "company",
    label: "Company",
    links: [
      { href: "/about", label: "About LDS" },
      { href: "/mission", label: "Mission" },
      { href: "/engineering", label: "Engineering Principles" },
      { href: "/founder", label: "Founder" },
      { href: LIORAN_GROUP_URL, label: "Lioran Group", external: true },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    links: [
      { href: GITHUB_ORG_URL, label: "GitHub", external: true },
      { href: "/security", label: "Security" },
      { href: "/status", label: "Status" },
      { href: "/changelog", label: "Changelog" },
      { href: "/brand", label: "Brand Assets" },
      { href: "/contact", label: "Contact" },
      { href: "https://discord.gg/WsWWThjPMp", label: "Discord", external: true },
    ],
  },
];

const directLinks: Array<{ href: AppRoute; label: string }> = [
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const mobileSections = [
  {
    key: "products",
    label: "Products",
    links: [
      { href: "/products", label: "Products Overview" },
      { href: "/products/liorandb", label: "LioranDB" },
      { href: "/products/lioran-bastion", label: "LioranBastion" },
      { href: "/products/lioran-auth", label: "Lioran Auth" },
      { href: "/roadmap", label: "Roadmap" },
    ],
  },
  {
    key: "company",
    label: "Company",
    links: [
      { href: "/about", label: "About LDS" },
      { href: "/mission", label: "Mission" },
      { href: "/engineering", label: "Engineering" },
      { href: "/founder", label: "Founder" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
      { href: LIORAN_GROUP_URL, label: "Lioran Group", external: true },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    links: [
      { href: GITHUB_ORG_URL, label: "GitHub", external: true },
      { href: "https://discord.gg/WsWWThjPMp", label: "Discord", external: true },
      { href: "/security", label: "Security" },
      { href: "/status", label: "Status" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/license", label: "License" },
    ],
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuId = useId();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setOpenDropdown(null);
      setMobileOpen(false);
      setMobileSection(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
      if (
        mobileOpen &&
        mobileRef.current &&
        !mobileRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setMobileOpen(false);
        setMobileSection(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        if (mobileOpen) {
          setMobileOpen(false);
          setMobileSection(null);
          menuButtonRef.current?.focus();
        }
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen || !mobileRef.current) {
      return;
    }

    const focusable = mobileRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    function trap(event: KeyboardEvent) {
      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="border-b border-[var(--border-color)] bg-[rgba(34,40,49,0.96)]">
      <nav
        ref={navRef}
        className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="min-w-0">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] text-sm font-semibold text-[var(--text-primary)]">
              LDS
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-[var(--text-primary)]">
                Lioran Developer Solutions
              </span>
              <span className="block truncate text-[12px] text-[var(--text-muted)]">
                A Lioran Group company
              </span>
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ul className="flex items-center gap-2">
            {desktopGroups.map((group) => {
              const panelId = `${menuId}-${group.key}`;
              const expanded = openDropdown === group.key;

              return (
                <li key={group.key} className="relative">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenDropdown((current) => (current === group.key ? null : group.key))
                    }
                    className="inline-flex h-[42px] items-center gap-2 rounded-[5px] border border-transparent px-4 text-sm font-medium text-[var(--text-primary)] transition-colors duration-150 hover:border-[var(--border-color)] hover:bg-[var(--background-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
                  >
                    {group.label}
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded ? (
                    <div
                      id={panelId}
                      role="menu"
                      className="absolute left-0 top-[calc(100%+8px)] z-30 min-w-[260px] rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-2"
                    >
                      {group.links.map((link) =>
                        link.external ? (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            role="menuitem"
                            className="block rounded-[5px] px-4 py-3 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:bg-[rgba(148,137,121,0.12)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            role="menuitem"
                            className="block rounded-[5px] px-4 py-3 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:bg-[rgba(148,137,121,0.12)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
                          >
                            {link.label}
                          </Link>
                        ),
                      )}
                    </div>
                  ) : null}
                </li>
              );
            })}
            {directLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-flex h-[42px] items-center rounded-[5px] px-4 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)] ${
                    isActive(link.href)
                      ? "border border-[var(--border-color)] bg-[var(--background-secondary)] text-[var(--text-primary)]"
                      : "text-[var(--text-primary)] hover:border hover:border-[var(--border-color)] hover:bg-[var(--background-secondary)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[42px] items-center gap-2 rounded-[5px] border border-[var(--accent)] px-4 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-150 hover:bg-[var(--background-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-controls={menuId}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[5px] border border-[var(--border-color)] bg-[var(--background-secondary)] text-[var(--text-primary)] lg:hidden"
        >
          {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-[var(--border-color)] lg:hidden">
          <div
            id={menuId}
            ref={mobileRef}
            className="mx-auto max-h-[calc(100vh-78px)] max-w-[1180px] overflow-y-auto px-4 py-4 sm:px-6"
          >
            <div className="grid gap-3">
              <Link href="/" className="rounded-[5px] border border-[var(--border-color)] px-4 py-3 text-sm text-[var(--text-primary)]">
                Home
              </Link>
              {mobileSections.map((section) => {
                const expanded = mobileSection === section.key;
                return (
                  <div key={section.key} className="rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)]">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileSection((current) => (current === section.key ? null : section.key))
                      }
                      className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]"
                    >
                      <span>{section.label}</span>
                      <ChevronDownIcon
                        className={`h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded ? (
                      <div className="border-t border-[var(--border-color)] px-3 py-3">
                        <div className="grid gap-2">
                          {section.links.map((link) =>
                            link.external ? (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-[5px] px-3 py-3 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:bg-[rgba(148,137,121,0.12)] hover:text-[var(--text-primary)]"
                              >
                                {link.label}
                              </a>
                            ) : (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-[5px] px-3 py-3 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:bg-[rgba(148,137,121,0.12)] hover:text-[var(--text-primary)]"
                              >
                                {link.label}
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

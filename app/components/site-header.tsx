"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { AppRoute } from "@/lib/site";
import { GITHUB_ORG_URL, LIORAN_GROUP_URL } from "@/lib/site";
import { ChevronDownIcon, CloseIcon, GitHubIcon, MenuIcon } from "./icons";
import { BrandLogo } from "./site-ui";
import { ThemeToggle } from "./theme-toggle";

type MenuGroup = {
  key: string;
  label: string;
  links: Array<{ href: string; label: string; external?: boolean; description?: string }>;
};

const desktopGroups: MenuGroup[] = [
  {
    key: "products",
    label: "Products",
    links: [
      { href: "/products/liorandb", label: "LioranDB", description: "Rust database system for backend applications" },
      { href: "/products/lioran-bastion", label: "LioranBastion", description: "Storage and object infrastructure" },
      { href: "/products/lioran-auth", label: "Lioran Auth", description: "Authentication and identity research" },
      { href: "/roadmap", label: "Product Roadmap", description: "Current work, next milestones, and research tracks" },
    ],
  },
  {
    key: "company",
    label: "Company",
    links: [
      { href: "/about", label: "About LDS", description: "Developer infrastructure company under Lioran Group" },
      { href: "/mission", label: "Mission", description: "Strengthening domestic digital infrastructure in India" },
      { href: "/engineering", label: "Engineering Principles", description: "Technical standards before marketing claims" },
      { href: "/founder", label: "Founder", description: "Swaraj Puppalwar, Founder & CTO" },
      { href: LIORAN_GROUP_URL, label: "Lioran Group", external: true, description: "Parent organization ecosystem" },
      { href: "/careers", label: "Careers", description: "Internship opportunities and structure" },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    links: [
      { href: GITHUB_ORG_URL, label: "GitHub", external: true, description: "Public repositories and source code" },
      { href: "/security", label: "Security", description: "Security baseline and responsible disclosure" },
      { href: "/status", label: "Status", description: "Service overview and infrastructure references" },
      { href: "/changelog", label: "Changelog", description: "Public releases and updates" },
      { href: "/brand", label: "Brand Assets", description: "Identity, colors, and usage guidance" },
      { href: "/contact", label: "Contact", description: "Inquiries, partnerships, and collaborations" },
      { href: "https://discord.gg/WsWWThjPMp", label: "Discord", external: true, description: "Developer community" },
    ],
  },
];

const directLinks: Array<{ href: AppRoute; label: string }> = [
  { href: "/products", label: "Overview" },
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
      { href: "/changelog", label: "Changelog" },
      { href: "/brand", label: "Brand Assets" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/license", label: "License" },
      { href: "/sitemap", label: "Sitemap" },
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
    <header className="sticky top-0 z-40 h-16 border-b border-[var(--hairline-strong)] bg-[var(--canvas)]/95 backdrop-blur-md">
      <nav
        ref={navRef}
        className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-3">
            <BrandLogo size={36} />
            <div className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[-0.2px] text-[var(--ink)]">
                Lioran Developer Solutions
              </span>
              <span className="hidden truncate text-[11px] font-medium text-[var(--body)] sm:block">
                A Lioran Group company
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 lg:flex">
          <ul className="flex items-center gap-1">
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
                    className={`inline-flex h-9 items-center gap-1.5 rounded-[8px] px-3 text-sm font-medium transition-colors ${
                      expanded
                        ? "bg-[var(--surface-strong)] text-[var(--ink)]"
                        : "text-[var(--body)] hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {group.label}
                    <ChevronDownIcon
                      className={`h-3.5 w-3.5 transition-transform duration-150 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expanded ? (
                    <div
                      id={panelId}
                      role="menu"
                      className="absolute left-0 top-[calc(100%+8px)] z-50 min-w-[280px] rounded-[12px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-2 shadow-lg"
                    >
                      {group.links.map((link) =>
                        link.external ? (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            role="menuitem"
                            className="block rounded-[8px] px-3 py-2.5 transition-colors hover:bg-[var(--surface-strong)]"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-[var(--ink)]">
                                {link.label}
                              </span>
                              <span className="text-[11px] text-[var(--body)]">↗</span>
                            </div>
                            {link.description ? (
                              <p className="mt-0.5 text-[12px] text-[var(--body)]">
                                {link.description}
                              </p>
                            ) : null}
                          </a>
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            role="menuitem"
                            className="block rounded-[8px] px-3 py-2.5 transition-colors hover:bg-[var(--surface-strong)]"
                          >
                            <span className="block text-sm font-medium text-[var(--ink)]">
                              {link.label}
                            </span>
                            {link.description ? (
                              <p className="mt-0.5 text-[12px] text-[var(--body)]">
                                {link.description}
                              </p>
                            ) : null}
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
                  className={`inline-flex h-9 items-center rounded-[8px] px-3 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-[var(--surface-strong)] text-[var(--ink)]"
                      : "text-[var(--body)] hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-2 flex items-center gap-2 border-l border-[var(--hairline-strong)] pl-3">
            <ThemeToggle />
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)]"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <Link
              href="/products/liorandb"
              className="btn-primary !h-9 !px-3.5"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile menu button and theme toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls={menuId}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] text-[var(--ink)]"
          >
            {mobileOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen ? (
        <div className="border-b border-[var(--hairline-strong)] bg-[var(--canvas)] lg:hidden">
          <div
            id={menuId}
            ref={mobileRef}
            className="mx-auto max-h-[calc(100vh-64px)] max-w-[1200px] overflow-y-auto px-4 py-4 sm:px-6"
          >
            <div className="grid gap-2">
              <Link
                href="/"
                className="flex items-center justify-between rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)]"
              >
                Home
              </Link>
              {mobileSections.map((section) => {
                const expanded = mobileSection === section.key;
                return (
                  <div
                    key={section.key}
                    className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)]"
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileSection((current) =>
                          current === section.key ? null : section.key,
                        )
                      }
                      className="flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm font-semibold text-[var(--ink)]"
                    >
                      <span>{section.label}</span>
                      <ChevronDownIcon
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expanded ? (
                      <div className="border-t border-[var(--hairline)] px-2 py-2">
                        <div className="grid gap-1">
                          {section.links.map((link) =>
                            link.external ? (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-[6px] px-3 py-2 text-sm text-[var(--body)] hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
                              >
                                <span>{link.label}</span>
                                <span className="text-xs text-[var(--body)]">↗</span>
                              </a>
                            ) : (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-[6px] px-3 py-2 text-sm text-[var(--body)] hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
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

              <div className="mt-2 grid grid-cols-2 gap-2 pt-2">
                <a
                  href={GITHUB_ORG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !h-10 w-full"
                >
                  <GitHubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </a>
                <Link
                  href="/products/liorandb"
                  className="btn-primary !h-10 w-full"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

import Link from "next/link";
import {
  DISCORD_URL,
  GITHUB_ORG_URL,
  LIORAN_DB_URL,
  LIORAN_GROUP_URL,
  SITE_URL,
  WEBSITE_VERSION,
} from "@/lib/site";
import { GitHubIcon } from "./icons";

const linkGroups = [
  {
    title: "Products",
    links: [
      { href: "/products", label: "Overview" },
      { href: "/products/liorandb", label: "LioranDB" },
      { href: "/products/lioran-bastion", label: "LioranBastion" },
      { href: "/products/lioran-auth", label: "Lioran Auth" },
      { href: "/roadmap", label: "Roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About LDS" },
      { href: "/mission", label: "Mission" },
      { href: "/engineering", label: "Engineering" },
      { href: "/founder", label: "Founder" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/status", label: "Status" },
      { href: "/security", label: "Security" },
      { href: "/changelog", label: "Changelog" },
      { href: "/brand", label: "Brand Assets" },
      { href: "/sitemap", label: "Sitemap" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/license", label: "Licensing" },
    ],
  },
] as const;

const ecosystem = [
  { href: LIORAN_GROUP_URL, label: "Lioran Group" },
  { href: GITHUB_ORG_URL, label: "GitHub" },
  { href: DISCORD_URL, label: "Discord" },
  { href: LIORAN_DB_URL, label: "LioranDB" },
  { href: `${SITE_URL}/security`, label: "Security" },
  { href: `${SITE_URL}/status`, label: "Status" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--hairline-strong)] bg-[var(--canvas)] text-[var(--body)]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,minmax(0,1fr))]">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-strong)] text-[12px] font-bold text-[var(--ink)]">
                LDS
              </span>
              <span className="text-sm font-semibold tracking-[-0.2px] text-[var(--ink)]">
                Lioran Developer Solutions
              </span>
            </div>
            <p className="max-w-[34ch] text-sm leading-relaxed text-[var(--body)]">
              Developer infrastructure, built in India. LDS builds databases, storage systems, and backend platforms for Indian products and global engineers.
            </p>
            <p className="text-xs font-medium text-[var(--body)]">
              A company under <a href={LIORAN_GROUP_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] hover:underline">Lioran Group</a>
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {ecosystem.slice(0, 4).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-[6px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-2.5 py-1 text-xs font-medium text-[var(--body)] transition-colors hover:bg-[var(--surface-strong)] hover:text-[var(--ink)]"
                >
                  {link.label}
                  <span className="ml-1 text-[10px] text-[var(--body)]">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {linkGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--body)]">
                {group.title}
              </p>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--body)] transition-colors hover:text-[var(--ink)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--hairline)] pt-8 text-xs text-[var(--body)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lioran Developer Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center rounded-[4px] border border-[var(--hairline-strong)] bg-[var(--surface-strong)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--ink)]">
              {WEBSITE_VERSION}
            </span>
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--body)] hover:text-[var(--ink)]"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--body)] hover:text-[var(--ink)]"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

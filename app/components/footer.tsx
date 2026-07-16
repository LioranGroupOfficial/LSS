import Link from "next/link";
import {
  DISCORD_URL,
  GITHUB_ORG_URL,
  LIORAN_DB_URL,
  LIORAN_GROUP_URL,
  SITE_URL,
  WEBSITE_VERSION,
} from "@/lib/site";
import { GitHubIcon, LinkIcon } from "./icons";

const groups = [
  {
    title: "Products",
    links: [
      { href: "/products/liorandb", label: "LioranDB" },
      { href: "/products/lioran-bastion", label: "LioranBastion" },
      { href: "/products/lioran-auth", label: "Lioran Auth" },
      { href: "/roadmap", label: "Roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/mission", label: "Mission" },
      { href: "/engineering", label: "Engineering" },
      { href: "/founder", label: "Founder" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/license", label: "License" },
      { href: "/sitemap", label: "Sitemap" },
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
    <footer className="border-t border-[var(--border-color)] bg-[rgba(34,40,49,0.98)]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] lg:px-8">
        <div className="space-y-4">
          <div>
            <p className="text-lg font-semibold text-[var(--text-primary)]">Lioran Developer Solutions</p>
            <p className="mt-2 max-w-[32ch] text-sm leading-7 text-[var(--text-muted)]">
              Developer infrastructure, built in India. LDS is the infrastructure
              company under Lioran Group.
            </p>
          </div>
          <p className="text-sm text-[var(--text-muted)]">A Lioran Group company</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {ecosystem.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[5px] border border-[var(--border-color)] px-3 py-2 text-[var(--text-muted)] transition-colors duration-150 hover:bg-[var(--background-secondary)] hover:text-[var(--text-primary)]"
              >
                <LinkIcon className="h-4 w-4 shrink-0" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {group.title}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--border-color)]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-4 py-4 text-sm text-[var(--text-muted)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Lioran Developer Solutions. Built by Lioran Developer Solutions.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span>{WEBSITE_VERSION}</span>
            <span>A Lioran Group company</span>
            <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--text-primary)]">
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

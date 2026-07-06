import Link from "next/link";

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy Policy" },
];

const brandLinks = [
  { href: "https://lioran.group", label: "Lioran Group" },
  { href: "https://github.com/LioranGroupOfficial", label: "GitHub" },
  { href: "mailto:contact@lioransolutions.com", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border-soft)] py-12">
      <div className="space-y-4">
        <p className="text-sm text-[var(--text-muted)]">
          © 2026 Lioran Developer Solutions. India-based developer infrastructure
          for startups and builders.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-[var(--text-soft)]">
          {brandLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-[var(--text-soft)]">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

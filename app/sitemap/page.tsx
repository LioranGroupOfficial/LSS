import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { humanSitemapLinks } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { Container, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Sitemap",
  description:
    "Human-readable sitemap for the Lioran Developer Solutions website.",
  path: "/sitemap",
});

export default function HumanSitemapPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Navigation Directory"
            title="Human-readable sitemap"
            description="All major public routes and sections for the Lioran Developer Solutions website."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="rounded-[12px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <ul className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {humanSitemapLinks.map((entry) => (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    className="flex items-center justify-between rounded-[8px] border border-[var(--hairline)] bg-[var(--canvas-soft)] p-3 font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)]"
                  >
                    <span>{entry.label}</span>
                    <span className="font-mono text-xs text-[var(--muted)]">{entry.href}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

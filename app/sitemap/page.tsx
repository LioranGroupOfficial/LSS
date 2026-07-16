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
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Sitemap"
            title="Human-readable sitemap"
            description="All major public routes for the LDS website."
          />
          <div className="mt-10 rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-6">
            <ul className="grid gap-3 text-sm text-[var(--text-muted)] sm:grid-cols-2">
              {humanSitemapLinks.map((entry) => (
                <li key={entry.href}>
                  <a href={entry.href} className="hover:text-[var(--text-primary)]">
                    {entry.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

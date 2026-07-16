import { createMetadata } from "@/lib/metadata";
import { changelogEntries } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { Container, InfoCard, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Changelog",
  description:
    "Public LDS changelog entries for website and product updates.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Changelog"
            title="Public updates"
            description="The changelog starts with the website redesign entry and avoids invented product release history."
          />
          <div className="mt-10 grid gap-6">
            {changelogEntries.map((entry) => (
              <InfoCard
                key={`${entry.product}-${entry.date}`}
                title={`${entry.product} • ${entry.version}`}
                meta={entry.date}
                description={entry.summary}
              >
                <p className="text-sm text-[var(--text-muted)]">{entry.details}</p>
              </InfoCard>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

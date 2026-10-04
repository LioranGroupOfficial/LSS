import { createMetadata } from "@/lib/metadata";
import { changelogEntries } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import {
  Badge,
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Changelog",
  description:
    "Public LDS changelog entries for website and product updates.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Releases & Updates"
            title="Public changelog"
            description="The changelog starts with the website redesign entry and avoids invented product release history."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            {changelogEntries.map((entry) => (
              <InfoCard
                key={`${entry.product}-${entry.date}`}
                title={entry.summary}
                meta={
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[var(--ink)]">
                      {entry.date}
                    </span>
                    <Badge variant="default">{entry.version}</Badge>
                    <span className="text-xs text-[var(--body)]">{entry.product}</span>
                  </div>
                }
              >
                <div className="border-t border-[var(--hairline)] pt-3">
                  <p className="text-sm leading-relaxed text-[var(--body)]">{entry.details}</p>
                </div>
              </InfoCard>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

import { createMetadata } from "@/lib/metadata";
import { roadmapGroups } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { Container, InfoCard, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Roadmap",
  description:
    "Honest LDS roadmap categories across current work, next steps, later directions, and research themes.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Roadmap"
            title="Now, next, later, and research"
            description="The roadmap is structured by direction rather than launch promises. Exact release dates are intentionally omitted."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {Object.entries(roadmapGroups).map(([label, items]) => (
              <InfoCard key={label} title={label}>
                <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoCard>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

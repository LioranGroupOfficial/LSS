import { createMetadata } from "@/lib/metadata";
import { roadmapGroups } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import {
  Badge,
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Roadmap",
  description:
    "Honest LDS roadmap categories across current work, next steps, later directions, and research themes.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  const badgeMap: Record<string, "success" | "warning" | "default" | "accent"> = {
    Now: "success",
    Next: "warning",
    Later: "default",
    Research: "accent",
  };

  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Product & Engineering Roadmap"
            title="Now, next, later, and research"
            description="The roadmap is structured by direction rather than launch promises. Exact release dates are intentionally omitted."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {Object.entries(roadmapGroups).map(([label, items]) => (
              <InfoCard
                key={label}
                title={label}
                meta={<Badge variant={badgeMap[label] || "default"}>{label} Milestone</Badge>}
              >
                <ul className="mt-2 space-y-3 text-sm text-[var(--body)]">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
                      <span>{item}</span>
                    </li>
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

import { createMetadata } from "@/lib/metadata";
import { engineeringPrinciples } from "@/lib/site";
import { CodeIcon, ShieldIcon, TerminalIcon } from "../components/icons";
import { PageShell } from "../components/page-shell";
import {
  Container,
  InfoCard,
  Section,
  SectionHeading,
  TechnicalTable,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Engineering",
  description:
    "Engineering principles, technical standards, and public product discipline at Lioran Developer Solutions.",
  path: "/engineering",
});

export default function EngineeringPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Engineering"
            title="Technical standards before marketing claims"
            description="LDS communicates through source code, documentation, product boundaries, and operational trade-offs. The public website follows the same philosophy."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {engineeringPrinciples.map((principle, index) => {
              const Icon =
                index % 3 === 0 ? CodeIcon : index % 3 === 1 ? TerminalIcon : ShieldIcon;
              return (
                <InfoCard
                  key={principle.title}
                  title={principle.title}
                  description={principle.description}
                >
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-[6px] border border-[var(--hairline-strong)] bg-[var(--surface-strong)] text-[var(--ink)]">
                    <Icon className="h-4 w-4" />
                  </div>
                </InfoCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section variant="canvas">
        <Container>
          <TechnicalTable
            caption="Technical standards represented on the site"
            headers={["Area", "Approach"]}
            rows={[
              ["Routing", "App Router pages with human-readable URLs and page-level metadata."],
              ["Content", "Typed shared constants and product data instead of repeated strings."],
              ["Accessibility", "Keyboard-safe navigation, visible focus states, semantic markup, and reduced-motion support."],
              ["Performance", "Static-first pages, limited client components, and restrained interactions."],
              ["Truthfulness", "Unknowns remain unknown; research stays labeled as research."],
            ]}
          />
        </Container>
      </Section>
    </PageShell>
  );
}

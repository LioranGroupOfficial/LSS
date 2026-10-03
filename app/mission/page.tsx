import { createMetadata } from "@/lib/metadata";
import { PageShell } from "../components/page-shell";
import {
  ButtonLink,
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Mission",
  description:
    "Read the LDS mission around domestic developer infrastructure, infrastructure ownership, and engineering clarity.",
  path: "/mission",
});

export default function MissionPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Mission"
            title="Strengthen domestic developer infrastructure through product work"
            description="LDS is aligned with the broader objective of strengthening India’s domestic digital infrastructure. The mission is expressed through engineering, product capability, and infrastructure ownership rather than political messaging."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <InfoCard
              title="Domestic Capability"
              description="Build core developer systems in India so Indian products have more credible infrastructure options across databases, storage, and identity."
            />
            <InfoCard
              title="Calm Technical Language"
              description="The mission is presented through architecture, documentation, public code, and measurable progress. Unsupported claims are intentionally excluded."
            />
          </div>

          <div className="mt-12 rounded-[12px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-8">
            <h3 className="text-xl font-semibold text-[var(--ink)]">Core Infrastructure Mandate</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--body)]">
              Infrastructure resilience is achieved when developers have full transparency into their data plane, runtime constraints, and storage primitives. LDS builds foundational software so teams can operate without unnecessary external leverage or vendor lock-in.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/products" variant="primary">
                View Infrastructure Tracks
              </ButtonLink>
              <ButtonLink href="/engineering" variant="secondary">
                Our Engineering Standards
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

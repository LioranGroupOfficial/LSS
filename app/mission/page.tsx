import { createMetadata } from "@/lib/metadata";
import { PageShell } from "../components/page-shell";
import { Container, InfoCard, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Mission",
  description:
    "Read the LDS mission around domestic developer infrastructure, infrastructure ownership, and engineering clarity.",
  path: "/mission",
});

export default function MissionPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Mission"
            title="Strengthen domestic developer infrastructure through product work"
            description="LDS is aligned with the broader objective of strengthening India’s domestic digital infrastructure. The mission is expressed through engineering, product capability, and infrastructure ownership rather than political messaging."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <InfoCard
              title="Domestic capability"
              description="Build core developer systems in India so Indian products have more credible infrastructure options across databases, storage, and identity."
            />
            <InfoCard
              title="Calm technical language"
              description="The mission is presented through architecture, documentation, public code, and measurable progress. Unsupported claims are intentionally excluded."
            />
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

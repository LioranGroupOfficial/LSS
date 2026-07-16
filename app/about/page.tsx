import { createMetadata } from "@/lib/metadata";
import { PageShell } from "../components/page-shell";
import { Container, InfoCard, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "About LDS",
  description:
    "Learn about Lioran Developer Solutions, the developer-infrastructure company under Lioran Group.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="About LDS"
            title="A developer-infrastructure company under Lioran Group"
            description="Lioran Developer Solutions is positioned as an Indian deep-technology company focused on databases, backend infrastructure, and the systems developers depend on to ship products."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <InfoCard
              title="Company role"
              description="LDS is the infrastructure company within the Lioran Group ecosystem. It is not presented as a generic services agency or unrelated product catalogue."
            />
            <InfoCard
              title="Current focus"
              description="The main visible product direction is LioranDB, with future LDS work extending into storage and authentication infrastructure."
            />
            <InfoCard
              title="Who it serves"
              description="The site is written for backend engineers, SaaS founders, startups, educational institutions, enterprises, and teams that care about infrastructure decisions."
            />
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

import { createMetadata } from "@/lib/metadata";
import { GITHUB_ORG_URL, LIORAN_GROUP_URL } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import {
  ButtonLink,
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "About LDS",
  description:
    "Learn about Lioran Developer Solutions, the developer-infrastructure company under Lioran Group.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About LDS"
              title="A developer-infrastructure company under Lioran Group"
              description="Lioran Developer Solutions is positioned as an Indian deep-technology company focused on databases, backend infrastructure, and the systems developers depend on to ship products."
            />
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <ButtonLink href="/mission" variant="primary">
                Our Infrastructure Mission
              </ButtonLink>
              <ButtonLink href={LIORAN_GROUP_URL} variant="secondary" external>
                Visit Lioran Group
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <InfoCard
              title="Company Role"
              description="LDS is the infrastructure company within the Lioran Group ecosystem. It is not presented as a generic services agency or unrelated product catalogue."
            />
            <InfoCard
              title="Current Focus"
              description="The main visible product direction is LioranDB, with future LDS work extending into storage and authentication infrastructure."
            />
            <InfoCard
              title="Who It Serves"
              description="The site is written for backend engineers, SaaS founders, startups, educational institutions, enterprises, and teams that care about infrastructure decisions."
            />
          </div>
        </Container>
      </Section>

      <Section variant="canvas">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 rounded-[12px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-8">
            <h3 className="text-xl font-semibold text-[var(--ink)]">Ecosystem Context</h3>
            <p className="text-sm leading-relaxed text-[var(--body)]">
              Lioran Developer Solutions operates with a single unified purpose: creating durable, reliable, and domestic developer primitives. Through public repositories, open documentation, and disciplined engineering, LDS prioritizes architecture and testability over ephemeral marketing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink href={GITHUB_ORG_URL} variant="secondary" external>
                Explore GitHub Org
              </ButtonLink>
              <ButtonLink href="/engineering" variant="secondary">
                Read Engineering Principles
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

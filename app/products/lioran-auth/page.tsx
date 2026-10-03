import { createMetadata } from "@/lib/metadata";
import { products } from "@/lib/site";
import { PageShell } from "../../components/page-shell";
import {
  Badge,
  ButtonLink,
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../../components/site-ui";

const product = products[2];

export const metadata = createMetadata({
  title: "Lioran Auth",
  description:
    "Lioran Auth is a future LDS authentication infrastructure product currently in research.",
  path: product.slug,
});

export default function LioranAuthPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="subtle">Research Track</Badge>
              <span className="text-xs text-[var(--muted)]">{product.category}</span>
            </div>

            <SectionHeading
              eyebrow="Authentication Infrastructure"
              title="Lioran Auth"
              description={product.summary}
            />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <ButtonLink href="/contact" variant="primary">
                Contact for Research Collaboration
              </ButtonLink>
              <ButtonLink href="/security" variant="secondary">
                Security Baseline
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <InfoCard title="Current Research Status" description={product.detail} />
            <InfoCard title="Intended Users & Workloads" description={product.audience} />
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <InfoCard title="Planned Capabilities">
              <ul className="space-y-2.5 text-sm text-[var(--body)]">
                {product.capabilities.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Research Areas">
              <ul className="space-y-2.5 text-sm text-[var(--body)]">
                {product.roadmap.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

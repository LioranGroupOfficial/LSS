import { createMetadata } from "@/lib/metadata";
import { products } from "@/lib/site";
import { PageShell } from "../../components/page-shell";
import { ButtonLink, Container, InfoCard, Section, SectionHeading } from "../../components/site-ui";

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
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Lioran Auth"
            title="Authentication infrastructure in research"
            description={product.summary}
          />
          <div className="mt-8">
            <ButtonLink href="/contact" variant="secondary">
              Contact for collaboration
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <InfoCard title="Current status" description={product.detail} />
            <InfoCard title="Intended users" description={product.audience} />
            <InfoCard title="Planned capabilities">
              <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                {product.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Research areas">
              <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                {product.roadmap.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

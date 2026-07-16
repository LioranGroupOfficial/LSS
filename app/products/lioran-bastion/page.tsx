import { createMetadata } from "@/lib/metadata";
import { products } from "@/lib/site";
import { PageShell } from "../../components/page-shell";
import { ButtonLink, Container, InfoCard, Section, SectionHeading } from "../../components/site-ui";

const product = products[1];

export const metadata = createMetadata({
  title: "LioranBastion",
  description:
    "LioranBastion is a future LDS storage infrastructure product currently in architecture planning.",
  path: product.slug,
});

export default function LioranBastionPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="LioranBastion"
            title="Storage infrastructure under architecture planning"
            description={product.summary}
          />
          <div className="mt-8">
            <ButtonLink href="/contact" variant="secondary">
              Register interest
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <InfoCard title="Problem space" description={product.detail} />
            <InfoCard title="Intended users" description={product.audience} />
            <InfoCard title="Planned capabilities">
              <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                {product.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Roadmap themes">
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

import { createMetadata } from "@/lib/metadata";
import { LIORAN_DB_URL, products } from "@/lib/site";
import { PageShell } from "../../components/page-shell";
import { ButtonLink, Container, InfoCard, Section, SectionHeading } from "../../components/site-ui";

const product = products[0];

export const metadata = createMetadata({
  title: "LioranDB",
  description:
    "LioranDB is the current flagship LDS product: a database system under active development for backend applications and Indian technology products.",
  path: product.slug,
});

export default function LioranDbPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="LioranDB"
            title="Database infrastructure under active development"
            description={product.summary}
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={LIORAN_DB_URL} external>
              Visit LioranDB
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact LDS
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <InfoCard title="Intended users" description={product.audience} />
            <InfoCard title="Current status" description={product.detail} />
            <InfoCard title="Planned capabilities">
              <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                {product.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Near-term roadmap">
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

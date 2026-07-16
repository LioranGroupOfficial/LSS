import { createMetadata } from "@/lib/metadata";
import { products } from "@/lib/site";
import { DatabaseIcon, ServerIcon, ShieldIcon } from "../components/icons";
import { PageShell } from "../components/page-shell";
import { Container, InfoCard, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Explore the current and future LDS product portfolio: LioranDB, LioranBastion, and Lioran Auth.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="The LDS product portfolio"
            description="LDS is building a developer-infrastructure stack. The current product line is LioranDB, with storage and authentication tracks under active architecture or research."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = index === 0 ? DatabaseIcon : index === 1 ? ServerIcon : ShieldIcon;
              return (
                <InfoCard
                  key={product.slug}
                  title={product.name}
                  meta={`${product.category} • ${product.status}`}
                  description={product.summary}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    <p className="text-sm text-[var(--text-muted)]">{product.detail}</p>
                  </div>
                </InfoCard>
              );
            })}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

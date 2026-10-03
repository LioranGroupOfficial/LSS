import { createMetadata } from "@/lib/metadata";
import { products } from "@/lib/site";
import { DatabaseIcon, ServerIcon, ShieldIcon } from "../components/icons";
import { PageShell } from "../components/page-shell";
import {
  Badge,
  ButtonLink,
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Explore the current and future LDS product portfolio: LioranDB, LioranBastion (Lioran S3), and Lioran Auth.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Products & Tracks"
            title="The LDS product portfolio"
            description="LDS is building an integrated developer-infrastructure stack. The active product lines are LioranDB and LioranBastion (Lioran S3), with authentication infrastructure under research."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = index === 0 ? DatabaseIcon : index === 1 ? ServerIcon : ShieldIcon;

              return (
                <InfoCard
                  key={product.slug}
                  title={product.name}
                  meta={
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-medium text-[var(--muted)]">{product.category}</span>
                      <Badge variant="default">{product.status}</Badge>
                    </div>
                  }
                  description={product.summary}
                  className="flex flex-col justify-between"
                >
                  <div className="space-y-4 pt-2">
                    <div className="rounded-[8px] border border-[var(--hairline)] bg-[var(--canvas-soft)] p-3">
                      <div className="flex items-start gap-2.5">
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ink)]" />
                        <p className="text-xs leading-relaxed text-[var(--body)]">{product.detail}</p>
                      </div>
                    </div>

                    <div className="border-t border-[var(--hairline)] pt-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Intended Audience
                      </p>
                      <p className="mt-1 text-xs text-[var(--ink)]">{product.audience}</p>
                    </div>

                    <div className="pt-2">
                      <ButtonLink href={product.slug} variant="secondary" className="w-full text-xs">
                        View Product Details →
                      </ButtonLink>
                    </div>
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

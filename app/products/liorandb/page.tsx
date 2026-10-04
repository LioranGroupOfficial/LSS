import { createMetadata } from "@/lib/metadata";
import { GITHUB_ORG_URL, LIORAN_DB_URL, products } from "@/lib/site";
import { PageShell } from "../../components/page-shell";
import {
  Badge,
  ButtonLink,
  CodeBlock,
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../../components/site-ui";

const product = products[0];

export const metadata = createMetadata({
  title: "LioranDB",
  description:
    "LioranDB is the current flagship LDS product: a database system under active development for backend applications and Indian technology products.",
  path: product.slug,
});

const sampleCode = `import { LioranManager } from "@liorandb/core";

// Connect to LioranDB Rust storage engine
const db = new LioranManager({
  rootPath: "./var/liorandb",
  databaseName: "app_production",
});

await db.connect();

// Perform transactional record operations
await db.insert("users", {
  uid: "usr_99812",
  email: "dev@company.in",
  created_at: Date.now(),
});`;

export default function LioranDbPage() {
  return (
    <PageShell>
      {/* Header Band */}
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">Active Development</Badge>
              <span className="text-xs text-[var(--body)]">{product.category}</span>
            </div>

            <SectionHeading
              eyebrow="Flagship Database Product"
              title="LioranDB"
              description={product.summary}
            />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <ButtonLink href={LIORAN_DB_URL} variant="primary" external>
                Visit LioranDB Site
              </ButtonLink>
              <ButtonLink href={GITHUB_ORG_URL} variant="secondary" external>
                View GitHub Repositories
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact LDS Team
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Code & Architectural Detail */}
      <Section variant="soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="min-w-0 space-y-6">
              <InfoCard title="Current Status & Positioning" description={product.detail} />
              <InfoCard title="Intended Users & Workloads" description={product.audience} />
            </div>
            <div className="min-w-0">
              <CodeBlock label="LioranDB Node.js SDK" code={sampleCode} language="TypeScript" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities and Roadmap Grid */}
      <Section variant="canvas">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
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

            <InfoCard title="Near-Term Roadmap">
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

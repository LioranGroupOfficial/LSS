import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { engineeringPrinciples, GITHUB_ORG_URL, LIORAN_GROUP_URL, products } from "@/lib/site";
import { CodeIcon, DatabaseIcon, ServerIcon, ShieldIcon, TerminalIcon } from "./components/icons";
import { PageShell } from "./components/page-shell";
import {
  Badge,
  ButtonLink,
  CodeBlock,
  Container,
  InfoCard,
  Section,
  SectionHeading,
  TechnicalTable,
} from "./components/site-ui";

export const metadata = createMetadata({
  title: "Developer infrastructure, built in India",
  description:
    "Lioran Developer Solutions builds databases, storage systems, authentication infrastructure, and backend platforms for developers, SaaS companies, and Indian technology products.",
  path: "/",
});

const heroCode = `import { LioranManager } from "@liorandb/core";

// Initialize the LioranDB embedded Rust engine
const database = new LioranManager({
  rootPath: "./data",
  databaseName: "production",
  wal: { sync: true, intervalMs: 50 },
});

await database.connect();

// Insert record with structured indexing
await database.insert("accounts", {
  id: "acct_001",
  region: "in-central",
  status: "active",
  tier: "production",
});`;

export default function HomePage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative border-b border-[var(--hairline-strong)] bg-[var(--canvas)] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="default">Engineering First</Badge>
                <span className="text-[12px] font-medium text-[var(--body)]">Built in India</span>
              </div>

              <h1 className="text-4xl font-semibold tracking-[-1.44px] text-[var(--ink)] sm:text-5xl lg:text-[58px] lg:leading-[1.08] lg:tracking-[-1.92px]">
                Developer infrastructure, built in India.
              </h1>

              <p className="max-w-[62ch] text-base leading-relaxed text-[var(--ink)] sm:text-lg">
                Lioran Developer Solutions builds databases, storage systems, authentication infrastructure, and backend platforms for developers, SaaS companies, and Indian technology products.
              </p>

              <p className="max-w-[62ch] text-sm leading-relaxed text-[var(--body)]">
                Reduce dependence on foreign developer infrastructure while keeping performance, reliability, security, and developer experience at the centre.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <ButtonLink href="/products" variant="primary">
                  Explore Our Products
                </ButtonLink>
                <ButtonLink href={GITHUB_ORG_URL} variant="secondary" external>
                  View on GitHub
                </ButtonLink>
                <ButtonLink href={LIORAN_GROUP_URL} variant="text" external>
                  Part of Lioran Group
                </ButtonLink>
              </div>
            </div>

            {/* Right Column: Technical Surface / Code Chrome */}
            <div className="space-y-4">
              <CodeBlock label="LioranDB Engine API" code={heroCode} language="TypeScript" />

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3.5">
                  <TerminalIcon className="h-4 w-4 text-[var(--ink)]" />
                  <p className="mt-2 text-xs font-semibold text-[var(--ink)]">Repository-led</p>
                  <p className="mt-1 text-xs leading-normal text-[var(--body)]">Source & docs close.</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3.5">
                  <ServerIcon className="h-4 w-4 text-[var(--ink)]" />
                  <p className="mt-2 text-xs font-semibold text-[var(--ink)]">Backend Systems</p>
                  <p className="mt-1 text-xs leading-normal text-[var(--body)]">DB, storage & auth.</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3.5">
                  <ShieldIcon className="h-4 w-4 text-[var(--ink)]" />
                  <p className="mt-2 text-xs font-semibold text-[var(--ink)]">Measured Scope</p>
                  <p className="mt-1 text-xs leading-normal text-[var(--body)]">Honest status.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Infrastructure Mission */}
      <Section variant="canvas">
        <Container>
          <SectionHeading
            eyebrow="Infrastructure Mission"
            title="Why domestic developer infrastructure matters"
            description="LDS is an Indian deep-technology infrastructure company. The mission is technical and practical: build core systems in India, support Indian products, and keep infrastructure decisions closer to the teams that depend on them."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <InfoCard
              title="Why infrastructure ownership matters"
              description="Developer platforms shape cost, deployment options, data handling, and operational risk. LDS focuses on the layers where those choices become product constraints."
            />
            <InfoCard
              title="Why data location matters"
              description="For many teams, infrastructure strategy is tied to where systems run, how control is exercised, and what dependencies sit underneath the product stack."
            />
            <InfoCard
              title="Why affordability matters"
              description="Founders and engineering teams need infrastructure they can reason about, operate, and budget for without enterprise-only assumptions."
            />
            <InfoCard
              title="Why engineering leads the message"
              description="The website is documentation-first by design. It communicates through architecture, product boundaries, and implementation direction rather than decorative claims."
            />
          </div>
        </Container>
      </Section>

      {/* Product Portfolio */}
      <Section variant="soft">
        <Container>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Product Portfolio"
              title="Three infrastructure tracks across the LDS ecosystem"
              description="LioranDB and LioranBastion (Lioran S3) are active product lines. Lioran Auth is under active architecture and research."
            />
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-medium text-[var(--text-link)] underline-offset-4 hover:underline"
            >
              All products overview →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = index === 0 ? DatabaseIcon : index === 1 ? ServerIcon : ShieldIcon;

              return (
                <InfoCard
                  key={product.slug}
                  title={product.name}
                  meta={
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-medium text-[var(--body)]">{product.category}</span>
                      <Badge variant="default">{product.status}</Badge>
                    </div>
                  }
                  description={product.summary}
                >
                  <div className="border-t border-[var(--hairline)] pt-3 text-xs text-[var(--body)]">
                    <div className="flex items-center gap-2 text-[var(--ink)]">
                      <Icon className="h-4 w-4 shrink-0 text-[var(--body)]" />
                      <span className="font-medium text-[var(--ink)]">{product.audience}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <ButtonLink href={product.slug} variant="secondary" className="w-full text-xs">
                      View product details
                    </ButtonLink>
                  </div>
                </InfoCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Engineering Principles */}
      <Section variant="canvas">
        <Container>
          <SectionHeading
            eyebrow="Engineering Principles"
            title="Public positioning backed by technical standards"
            description="The LDS website reflects a stable design system, typed content, and clear product boundaries because the company itself is presented as a systems builder."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engineeringPrinciples.map((principle, index) => {
              const Icon = index % 3 === 0 ? CodeIcon : index % 3 === 1 ? TerminalIcon : ShieldIcon;
              return (
                <InfoCard
                  key={principle.title}
                  title={principle.title}
                  description={principle.description}
                >
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-[6px] border border-[var(--hairline-strong)] bg-[var(--surface-strong)] text-[var(--ink)]">
                    <Icon className="h-4 w-4" />
                  </div>
                </InfoCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Ecosystem Topology */}
      <Section variant="soft">
        <Container>
          <TechnicalTable
            caption="LDS ecosystem topology & roles"
            headers={["Layer", "Entity", "Role"]}
            rows={[
              ["Parent organization", "Lioran Group", "Holds the broader ecosystem and company structure."],
              ["Infrastructure company", "Lioran Developer Solutions", "Builds developer infrastructure and product direction."],
              ["Database engine", "LioranDB", "Rust database system developed by LDS."],
              ["Object storage", "LioranBastion (Lioran S3)", "High-performance object storage launched Oct 1, 2026; Alpha planned Oct 29, 2026."],
              ["Authentication", "Lioran Auth", "Planned authentication infrastructure effort under LDS."],
            ]}
          />
        </Container>
      </Section>

      {/* CTA Pre-Footer Band */}
      <Section variant="canvas" className="border-t border-[var(--hairline-strong)]">
        <Container>
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <Badge variant="default">Get Involved</Badge>
            <h2 className="text-3xl font-semibold tracking-[-1.08px] text-[var(--ink)] sm:text-4xl">
              Build infrastructure with LDS.
            </h2>
            <p className="text-base text-[var(--body)]">
              Explore our products, review public development repositories on GitHub, or reach out to discuss collaboration.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <ButtonLink href="/products" variant="primary">
                Explore Products
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact the Team
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

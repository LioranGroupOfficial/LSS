import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { engineeringPrinciples, GITHUB_ORG_URL, LIORAN_GROUP_URL, products } from "@/lib/site";
import { CodeIcon, DatabaseIcon, ServerIcon, ShieldIcon, TerminalIcon } from "./components/icons";
import { PageShell } from "./components/page-shell";
import {
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

const heroCode = `
import { LioranManager } from "@liorandb/core";

const database = new LioranManager({
  rootPath: "./data",
  databaseName: "production",
});

await database.connect();
await database.insert("accounts", {
  id: "acct_001",
  region: "in-central",
  status: "active",
});
`;

export default function HomePage() {
  return (
    <PageShell>
      <Section className="border-b border-[var(--border-color)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Engineering First. Built in India."
                title="Developer infrastructure, built in India."
                description="Lioran Developer Solutions builds databases, storage systems, authentication infrastructure, and backend platforms for developers, SaaS companies, and Indian technology products."
              />
              <p className="max-w-[70ch] text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                Reduce dependence on foreign developer infrastructure while keeping
                performance, reliability, security, and developer experience at the centre.
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/products">Explore Our Products</ButtonLink>
                <ButtonLink href={GITHUB_ORG_URL} variant="secondary" external>
                  View on GitHub
                </ButtonLink>
                <ButtonLink href={LIORAN_GROUP_URL} variant="text" external>
                  Part of Lioran Group
                </ButtonLink>
              </div>
            </div>

            <div className="space-y-4">
              <CodeBlock label="Connection sample" code={heroCode} />
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-4">
                  <TerminalIcon className="h-5 w-5 text-[var(--accent)]" />
                  <p className="mt-3 text-sm font-semibold">Repository-led work</p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">Source, docs, and product direction stay close together.</p>
                </div>
                <div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-4">
                  <ServerIcon className="h-5 w-5 text-[var(--accent)]" />
                  <p className="mt-3 text-sm font-semibold">Backend systems</p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">Database, storage, auth, and infrastructure foundations.</p>
                </div>
                <div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-4">
                  <ShieldIcon className="h-5 w-5 text-[var(--accent)]" />
                  <p className="mt-3 text-sm font-semibold">Clear trade-offs</p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">Honest status, security baseline work, and measured scope.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Infrastructure Mission"
            title="Why domestic developer infrastructure matters"
            description="LDS is an Indian deep-technology infrastructure company. The mission is technical and practical: build core systems in India, support Indian products, and keep infrastructure decisions closer to the teams that depend on them."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
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

      <Section className="border-y border-[var(--border-color)] bg-[rgba(57,62,70,0.2)]">
        <Container>
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Three infrastructure tracks across the LDS ecosystem"
            description="LioranDB is the active product line today. LioranBastion and Lioran Auth are future infrastructure efforts with their current status stated plainly."
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
                  <div className="flex items-center gap-3 text-sm text-[var(--text-primary)]">
                    <Icon className="h-5 w-5 text-[var(--accent)]" />
                    <span>{product.audience}</span>
                  </div>
                  <Link
                    href={product.slug}
                    className="inline-flex text-sm font-semibold text-[var(--text-primary)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                  >
                    View product details
                  </Link>
                </InfoCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Engineering Principles"
            title="Public positioning backed by technical standards"
            description="The LDS website reflects a stable design system, typed content, and clear product boundaries because the company itself is presented as a systems builder."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {engineeringPrinciples.map((principle, index) => {
              const Icon = index % 3 === 0 ? CodeIcon : index % 3 === 1 ? TerminalIcon : ShieldIcon;
              return (
                <InfoCard
                  key={principle.title}
                  title={principle.title}
                  description={principle.description}
                >
                  <Icon className="h-5 w-5 text-[var(--accent)]" />
                </InfoCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-[var(--border-color)] bg-[rgba(57,62,70,0.2)]">
        <Container>
          <TechnicalTable
            caption="LDS ecosystem overview"
            headers={["Layer", "Entity", "Role"]}
            rows={[
              ["Parent organization", "Lioran Group", "Holds the broader ecosystem and company structure."],
              ["Infrastructure company", "Lioran Developer Solutions", "Builds developer infrastructure and product direction."],
              ["Current product", "LioranDB", "Database product developed by LDS."],
              ["Future product", "LioranBastion", "Planned storage infrastructure effort under LDS."],
              ["Future product", "Lioran Auth", "Planned authentication infrastructure effort under LDS."],
            ]}
          />
        </Container>
      </Section>
    </PageShell>
  );
}

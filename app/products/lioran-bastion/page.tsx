import { createMetadata } from "@/lib/metadata";
import { GITHUB_ORG_URL, LIORAN_S3_DOCS_URL, LIORAN_S3_URL, products } from "@/lib/site";
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

const product = products[1];

export const metadata = createMetadata({
  title: "LioranBastion (Lioran S3)",
  description:
    "LioranBastion (Lioran S3) is high-performance object storage built in Rust, launched in v1 pre-alpha on Oct 1, 2026. Alpha release scheduled for Oct 29, 2026.",
  path: product.slug,
});

const tsDriverSnippet = `import { BastionClient } from "@liorans3/driver";

// Connect to Lioran S3 cluster
const client = new BastionClient("bastion://admin:secret@127.0.0.1:27118");
const bucket = client.bucket("media");

// High-performance parallel multipart upload with chunk verification
await bucket.uploadMultipart("video.mp4", "./video.mp4", {
  concurrency: 4,
  onProgress: (p) => console.log(\`Upload: \${p.percent}%\`),
});`;

const cliSnippet = `# Install official CLI pre-alpha
npm install -g @liorans3/cli@prealpha

# Configure cluster endpoint
liorans3 configure --endpoint http://127.0.0.1:27118

# Create bucket with quota limit
liorans3 bucket create assets --quota-gb 50

# Parallel multipart object upload
liorans3 multipart upload media video.mp4 ./video.mp4 --concurrency 4`;

export default function LioranBastionPage() {
  return (
    <PageShell>
      {/* Header Band */}
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success">v1 Pre-Alpha Live</Badge>
              <Badge variant="default">Alpha: Oct 29, 2026</Badge>
              <span className="text-xs text-[var(--muted)]">{product.category}</span>
            </div>

            <SectionHeading
              eyebrow="High-Performance Object Storage"
              title="LioranBastion (Lioran S3)"
              description={product.summary}
            />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <ButtonLink href={LIORAN_S3_URL} variant="primary" external>
                Visit Lioran S3 (liorans3.sbs)
              </ButtonLink>
              <ButtonLink href={LIORAN_S3_DOCS_URL} variant="secondary" external>
                Read Documentation
              </ButtonLink>
              <ButtonLink href={GITHUB_ORG_URL} variant="secondary" external>
                GitHub Repositories
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Code & Developer Quickstart */}
      <Section variant="soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <CodeBlock label="TypeScript Driver (@liorans3/driver)" code={tsDriverSnippet} language="TypeScript" />
            </div>
            <div>
              <CodeBlock label="CLI Quickstart (@liorans3/cli)" code={cliSnippet} language="Bash" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Release Status & Architecture Overview */}
      <Section variant="canvas">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <InfoCard title="Release Timeline & Status">
              <div className="space-y-3 text-sm text-[var(--body)]">
                <p>{product.detail}</p>
                <div className="mt-4 rounded-[8px] border border-[var(--hairline)] bg-[var(--canvas-soft)] p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[var(--ink)]">v1 Pre-Alpha Launch</span>
                    <span className="font-mono text-[var(--semantic-success)]">October 1, 2026</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[var(--ink)]">Alpha Release</span>
                    <span className="font-mono text-[var(--text-link)]">October 29, 2026</span>
                  </div>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Engineered Storage Architecture">
              <ul className="space-y-2.5 text-sm text-[var(--body)]">
                {product.capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <InfoCard title="Target Workloads & Users" description={product.audience} />
            <InfoCard title="Roadmap Milestones">
              <ul className="space-y-2.5 text-sm text-[var(--body)]">
                {product.roadmap.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-link)]" />
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

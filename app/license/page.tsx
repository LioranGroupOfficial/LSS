import { createMetadata } from "@/lib/metadata";
import { LAST_UPDATED } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { Container, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "License",
  description:
    "General licensing information for the Lioran Developer Solutions website and published materials.",
  path: "/license",
});

export default function LicensePage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Intellectual Property & Licensing"
            title="Licensing information"
            description="This page describes general licensing context for the website and is not a substitute for product-specific repository licenses."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[12px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-6 sm:p-8 text-sm leading-relaxed text-[var(--body)] shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Last updated: {LAST_UPDATED}
            </p>
            <div className="space-y-3 pt-2">
              <p>
                <strong className="text-[var(--ink)]">1. Website Copyright:</strong> The website content, branding, and copy remain subject to the rights held by Lioran Developer Solutions and related ecosystem entities where applicable.
              </p>
              <p className="pl-4 border-l-2 border-[var(--hairline-strong)]">
                1.1 Product repositories may use separate open-source or proprietary licenses that should be reviewed in their respective source repositories.
              </p>
              <p>
                <strong className="text-[var(--ink)]">2. Brand & Trademarks:</strong> Reuse of logos, product names, or brand identity should preserve attribution and avoid misleading association.
              </p>
              <p className="pl-4 border-l-2 border-[var(--hairline-strong)]">
                2.1 When in doubt, contact LDS for clarification before redistribution or commercial reuse.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

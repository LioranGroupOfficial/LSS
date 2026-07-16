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
      <Section>
        <Container>
          <SectionHeading
            eyebrow="License"
            title="Licensing information"
            description="This page describes general licensing context for the website and is not a substitute for product-specific repository licenses."
          />
          <div className="mt-10 rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-6 text-sm leading-8 text-[var(--text-muted)]">
            <p className="mb-4 text-[var(--text-primary)]">Last updated: {LAST_UPDATED}</p>
            <p>1. The website content, branding, and copy remain subject to the rights held by Lioran Developer Solutions and related ecosystem entities where applicable.</p>
            <p>1.1 Product repositories may use separate licenses that should be reviewed in their respective source repositories.</p>
            <p>2. Reuse of logos, product names, or brand identity should preserve attribution and avoid misleading association.</p>
            <p>2.1 When in doubt, contact LDS for clarification before redistribution or commercial reuse.</p>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

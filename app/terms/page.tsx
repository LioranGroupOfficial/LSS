import { createMetadata } from "@/lib/metadata";
import { LAST_UPDATED } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { Container, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Terms of Use",
  description:
    "General terms of use for the Lioran Developer Solutions website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Terms & Governance"
            title="Terms of use"
            description="These general website terms are provided for clarity and are not presented as formal legal advice."
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
                <strong className="text-[var(--ink)]">1. General Scope:</strong> The LDS website is intended to provide information about the company, its products, and contact methods.
              </p>
              <p className="pl-4 border-l-2 border-[var(--hairline-strong)]">
                1.1 Content may change as LDS products and public materials evolve.
              </p>
              <p className="pl-4 border-l-2 border-[var(--hairline-strong)]">
                1.2 Development and research references do not create product availability guarantees.
              </p>
              <p>
                <strong className="text-[var(--ink)]">2. External Resources:</strong> External links are provided for ecosystem context, including Lioran Group, GitHub, Discord, and founder references.
              </p>
              <p className="pl-4 border-l-2 border-[var(--hairline-strong)]">
                2.1 LDS is not responsible for third-party site content or availability.
              </p>
              <p>
                <strong className="text-[var(--ink)]">3. Acceptable Use:</strong> Visitors should use the contact and security channels responsibly and avoid sending unlawful, abusive, or misleading submissions.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

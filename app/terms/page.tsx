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
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Terms of Use"
            title="Terms of use"
            description="These general website terms are provided for clarity and are not presented as formal legal advice."
          />
          <div className="mt-10 rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-6 text-sm leading-8 text-[var(--text-muted)]">
            <p className="mb-4 text-[var(--text-primary)]">Last updated: {LAST_UPDATED}</p>
            <p>1. The LDS website is intended to provide information about the company, its products, and contact methods.</p>
            <p>1.1 Content may change as LDS products and public materials evolve.</p>
            <p>1.2 Development and research references do not create product availability guarantees.</p>
            <p>2. External links are provided for ecosystem context, including Lioran Group, GitHub, Discord, and founder references.</p>
            <p>2.1 LDS is not responsible for third-party site content or availability.</p>
            <p>3. Visitors should use the contact and security channels responsibly and avoid sending unlawful, abusive, or misleading submissions.</p>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

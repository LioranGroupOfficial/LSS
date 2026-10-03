import { createMetadata } from "@/lib/metadata";
import { LAST_UPDATED } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { Container, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "General privacy policy for the Lioran Developer Solutions website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Legal & Privacy"
            title="Privacy policy"
            description="This page provides general website privacy information and is not presented as legal advice."
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
                <strong className="text-[var(--ink)]">1. Information Collection:</strong> LDS collects only the information that visitors actively submit through the contact form.
              </p>
              <p className="pl-4 border-l-2 border-[var(--hairline-strong)]">
                1.1 Submitted information may include name, email address, company or project name, inquiry topic, and message content.
              </p>
              <p className="pl-4 border-l-2 border-[var(--hairline-strong)]">
                1.2 The site avoids collecting unnecessary personal data through decorative or hidden tracking workflows.
              </p>
              <p>
                <strong className="text-[var(--ink)]">2. Purpose & Usage:</strong> Contact submissions are used to respond to product, support, security, or career inquiries.
              </p>
              <p className="pl-4 border-l-2 border-[var(--hairline-strong)]">
                2.1 LDS does not state broader data-sharing practices beyond what is operationally necessary for running the website and responding to inquiries.
              </p>
              <p>
                <strong className="text-[var(--ink)]">3. Security Considerations:</strong> Visitors should avoid sending highly sensitive material unless required for a security disclosure or technical issue report.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

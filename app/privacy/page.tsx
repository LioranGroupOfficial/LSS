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
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Privacy Policy"
            title="Privacy policy"
            description="This page provides general website privacy information and is not presented as legal advice."
          />
          <div className="mt-10 rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-6 text-sm leading-8 text-[var(--text-muted)]">
            <p className="mb-4 text-[var(--text-primary)]">Last updated: {LAST_UPDATED}</p>
            <p>1. LDS collects only the information that visitors actively submit through the contact form.</p>
            <p>1.1 Submitted information may include name, email address, company or project name, inquiry topic, and message content.</p>
            <p>1.2 The site avoids collecting unnecessary personal data through decorative or hidden workflows.</p>
            <p>2. Contact submissions are used to respond to product, support, security, or career inquiries.</p>
            <p>2.1 LDS does not state broader data-sharing practices beyond what is operationally necessary for running the website and responding to inquiries.</p>
            <p>3. Visitors should avoid sending highly sensitive material unless required for a security disclosure or technical issue report.</p>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

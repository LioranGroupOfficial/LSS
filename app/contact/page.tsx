import { createMetadata } from "@/lib/metadata";
import {
  CONTACT_EMAIL,
  DISCORD_URL,
  FOUNDER_PORTFOLIO_URL,
  GITHUB_ORG_URL,
  LIORAN_GROUP_URL,
  SECURITY_EMAIL,
  SITE_URL,
} from "@/lib/site";
import { ContactForm } from "../components/contact-form";
import { PageShell } from "../components/page-shell";
import { Container, InfoCard, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Lioran Developer Solutions for product inquiries, early access, technical collaboration, careers, or security disclosures.",
  path: "/contact",
});

const cards = [
  ["Product inquiries", CONTACT_EMAIL],
  ["LioranDB early access", CONTACT_EMAIL],
  ["Technical collaboration", CONTACT_EMAIL],
  ["Infrastructure partnerships", CONTACT_EMAIL],
  ["Careers", "careers@lioransolutions.com"],
  ["Security disclosure", SECURITY_EMAIL],
  ["Media", CONTACT_EMAIL],
  ["General inquiries", CONTACT_EMAIL],
] as const;

export default function ContactPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to Lioran Developer Solutions"
            description="Use the form for product and engineering conversations. The page only claims successful delivery when the backend confirms the submission."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="grid gap-6">
              <InfoCard title="Contact categories">
                <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                  {cards.map(([label, email]) => (
                    <li key={label}>
                      <strong className="text-[var(--text-primary)]">{label}:</strong> {email}
                    </li>
                  ))}
                </ul>
              </InfoCard>
              <InfoCard title="Reference links">
                <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                  <li><a href={SITE_URL} target="_blank" rel="noopener noreferrer">LDS website</a></li>
                  <li><a href={LIORAN_GROUP_URL} target="_blank" rel="noopener noreferrer">Lioran Group</a></li>
                  <li><a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord</a></li>
                  <li><a href={FOUNDER_PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">Founder portfolio</a></li>
                  <li><a href="/security">Security page</a></li>
                </ul>
              </InfoCard>
            </div>
            <div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

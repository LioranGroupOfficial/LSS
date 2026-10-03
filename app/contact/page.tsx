import { createMetadata } from "@/lib/metadata";
import { CAREERS_EMAIL, CONTACT_EMAIL, DISCORD_URL, GITHUB_ORG_URL, SECURITY_EMAIL } from "@/lib/site";
import { ContactForm } from "../components/contact-form";
import { PageShell } from "../components/page-shell";
import {
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Lioran Developer Solutions for product inquiries, developer collaboration, careers, or security disclosures.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Contact & Collaboration"
            title="Get in touch with the LDS team"
            description="Whether you have an infrastructure requirement, want early access to LioranDB, or wish to collaborate on developer systems in India, use the form below or our direct desks."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            {/* Contact Form */}
            <div className="rounded-[12px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <h2 className="mb-6 text-lg font-semibold text-[var(--ink)]">Send a Direct Message</h2>
              <ContactForm />
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-6">
              <InfoCard title="Direct Email Channels">
                <ul className="space-y-3 text-sm">
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      General & Product
                    </span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-medium text-[var(--ink)] hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Careers & Internships
                    </span>
                    <a href={`mailto:${CAREERS_EMAIL}`} className="text-sm font-medium text-[var(--ink)] hover:underline">
                      {CAREERS_EMAIL}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Security & Disclosures
                    </span>
                    <a href={`mailto:${SECURITY_EMAIL}`} className="text-sm font-medium text-[var(--ink)] hover:underline">
                      {SECURITY_EMAIL}
                    </a>
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Developer Community & Code">
                <p className="text-xs leading-relaxed text-[var(--body)]">
                  For bug reports, feature discussions, and technical issues, consider reaching us via our public community channels.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={GITHUB_ORG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--canvas-soft)] p-3 text-xs font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)]"
                  >
                    <span>GitHub Issues & Repositories</span>
                    <span className="text-[var(--muted)]">↗</span>
                  </a>
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--canvas-soft)] p-3 text-xs font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)]"
                  >
                    <span>Discord Developer Server</span>
                    <span className="text-[var(--muted)]">↗</span>
                  </a>
                </div>
              </InfoCard>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

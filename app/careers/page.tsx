import { createMetadata } from "@/lib/metadata";
import { careers, CAREERS_EMAIL } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { ButtonLink, Container, InfoCard, Section, SectionHeading, TechnicalTable } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Careers at Lioran Developer Solutions, including current internship roles and transparent structure details.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Careers"
            title="Careers at Lioran Developer Solutions"
            description="LDS internships are shown with the scope, commitment, and compensation details visible up front. The internships are unpaid and focused on real developer-infrastructure work."
          />
          <div className="mt-8">
            <ButtonLink href={`mailto:${CAREERS_EMAIL}`} external>
              Apply by email
            </ButtonLink>
          </div>
          <div className="mt-10">
            <TechnicalTable
              caption="Current internship structure"
              headers={["Field", "Details"]}
              rows={[
                ["Duration", "3 months"],
                ["Daily commitment", "4 hours"],
                ["Working time", "6:00 PM to 10:00 PM IST"],
                ["Compensation", "Unpaid"],
                ["Benefits", "Practical experience, mentorship, certificates, and possible future consideration without guaranteed employment"],
              ]}
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {careers.map((role) => (
              <InfoCard key={role.title} title={role.title}>
                <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                  {role.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoCard>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

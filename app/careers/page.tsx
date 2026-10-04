import { createMetadata } from "@/lib/metadata";
import { careers, CAREERS_EMAIL } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import {
  ButtonLink,
  Container,
  InfoCard,
  Section,
  SectionHeading,
  TechnicalTable,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Careers at Lioran Developer Solutions, including current internship roles and transparent structure details.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Careers & Internships"
              title="Careers at Lioran Developer Solutions"
              description="LDS internships are shown with the scope, commitment, and compensation details visible up front. The internships are unpaid and focused on real developer-infrastructure work."
            />
            <div className="pt-2">
              <ButtonLink href={`mailto:${CAREERS_EMAIL}`} variant="primary" external>
                Apply via Email ({CAREERS_EMAIL})
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <TechnicalTable
            caption="Current internship structure & terms"
            headers={["Field", "Details"]}
            rows={[
              ["Duration", "3 months"],
              ["Daily commitment", "4 hours"],
              ["Working time", "6:00 PM to 10:00 PM IST"],
              ["Compensation", "Unpaid"],
              [
                "Benefits",
                "Practical experience, mentorship, certificates, and possible future consideration without guaranteed employment",
              ],
            ]}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {careers.map((role) => (
              <InfoCard key={role.title} title={role.title}>
                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--body)]">
                    Focus Areas & Tech
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-[6px] border border-[var(--hairline-strong)] bg-[var(--canvas)] px-2 py-1 text-xs text-[var(--ink)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </InfoCard>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

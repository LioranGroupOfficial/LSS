import { createMetadata } from "@/lib/metadata";
import { SECURITY_EMAIL } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import {
  ButtonLink,
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Security",
  description:
    "Security principles, responsible disclosure guidance, and patching approach for Lioran Developer Solutions.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Security & Trust"
              title="Security principles and responsible disclosure"
              description="LDS does not claim formal certifications or audits that are not verified. This page describes practical disclosure guidance and product-security expectations."
            />
            <div className="pt-2">
              <ButtonLink href={`mailto:${SECURITY_EMAIL}`} variant="primary" external>
                Contact Security Desk ({SECURITY_EMAIL})
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard
              title="Security Principles"
              description="Secure defaults, dependency hygiene, data minimization, and ongoing patching are treated as baseline product work."
            />
            <InfoCard
              title="Responsible Disclosure"
              description={`Report vulnerabilities to ${SECURITY_EMAIL}. Include affected component, reproduction steps, impact, and any proof-of-concept material needed for verification.`}
            />
            <InfoCard
              title="Scope and Support"
              description="Published LDS website routes and public product documentation are in scope for disclosure. Future products are described as architecture or research unless there is a public release."
            />
            <InfoCard
              title="What We Do Not Claim"
              description="This site does not claim SOC 2, ISO 27001, HIPAA, PCI DSS, bug-bounty payments, or government certification."
            />
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

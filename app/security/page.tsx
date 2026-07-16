import { createMetadata } from "@/lib/metadata";
import { SECURITY_EMAIL } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { Container, InfoCard, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Security",
  description:
    "Security principles, responsible disclosure guidance, and patching approach for Lioran Developer Solutions.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Security"
            title="Security principles and responsible disclosure"
            description="LDS does not claim formal certifications or audits that are not verified. This page describes practical disclosure guidance and product-security expectations."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <InfoCard
              title="Security principles"
              description="Secure defaults, dependency hygiene, data minimization, and ongoing patching are treated as baseline product work."
            />
            <InfoCard
              title="Responsible disclosure"
              description={`Report vulnerabilities to ${SECURITY_EMAIL}. Include affected component, reproduction steps, impact, and any proof-of-concept material needed for verification.`}
            />
            <InfoCard
              title="Scope and support"
              description="Published LDS website routes and public product documentation are in scope for disclosure. Future products are described as architecture or research unless there is a public release."
            />
            <InfoCard
              title="What we do not claim"
              description="This site does not claim SOC 2, ISO 27001, HIPAA, PCI DSS, bug-bounty payments, or government certification."
            />
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import {
  FOUNDER_GITHUB_URL,
  FOUNDER_IMAGE_URL,
  FOUNDER_PORTFOLIO_URL,
  FOUNDER_X_URL,
  founderHighlights,
  founderRecognition,
  GITHUB_ORG_URL,
  LIORAN_GROUP_URL,
} from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { ButtonLink, Container, InfoCard, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Founder",
  description:
    "Founder profile for Swaraj Puppalwar, founder of Lioran Developer Solutions and Lioran Group.",
  path: "/founder",
});

export default function FounderPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Swaraj Puppalwar",
    jobTitle: "Founder & CTO",
    image: FOUNDER_IMAGE_URL,
    worksFor: {
      "@type": "Organization",
      name: "Lioran Developer Solutions",
    },
    sameAs: [FOUNDER_GITHUB_URL, FOUNDER_X_URL, FOUNDER_PORTFOLIO_URL],
  };

  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Founder"
            title="Swaraj Puppalwar"
            description="Founder & CTO of Lioran Developer Solutions and Founder of Lioran Group. The founder page stays focused on developer infrastructure, public work, and relevant recognition."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)] p-6">
              <Image
                src={FOUNDER_IMAGE_URL}
                alt="Swaraj Puppalwar"
                width={160}
                height={160}
                className="h-40 w-40 rounded-full border border-[var(--border-color)] object-cover"
              />
              <div className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
                <p>Founder & CTO, Lioran Developer Solutions</p>
                <p>Founder, Lioran Group</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <ButtonLink href={FOUNDER_PORTFOLIO_URL} external>
                    Portfolio
                  </ButtonLink>
                  <ButtonLink href={FOUNDER_GITHUB_URL} variant="secondary" external>
                    GitHub
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <InfoCard title="Profile summary">
                <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                  {founderHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoCard>
              <InfoCard title="Verified recognition and participation">
                <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                  {founderRecognition.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoCard>
              <InfoCard title="Relevant links">
                <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                  <li><a href={FOUNDER_PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">Portfolio</a></li>
                  <li><a href={FOUNDER_GITHUB_URL} target="_blank" rel="noopener noreferrer">Founder GitHub</a></li>
                  <li><a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer">Lioran Group GitHub</a></li>
                  <li><a href={LIORAN_GROUP_URL} target="_blank" rel="noopener noreferrer">Lioran Group</a></li>
                  <li><a href={FOUNDER_X_URL} target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Section>
    </PageShell>
  );
}

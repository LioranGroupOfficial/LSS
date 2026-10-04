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
import {
  ButtonLink,
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../components/site-ui";

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
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Founder"
            title="Swaraj Puppalwar"
            description="Founder & CTO of Lioran Developer Solutions and Founder of Lioran Group. The founder page stays focused on developer infrastructure, public work, and relevant recognition."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
            {/* Founder Profile Card */}
            <div className="rounded-[12px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="flex justify-center">
                <Image
                  src={FOUNDER_IMAGE_URL}
                  alt="Swaraj Puppalwar"
                  width={140}
                  height={140}
                  className="h-36 w-36 rounded-full border border-[var(--hairline-strong)] object-cover"
                />
              </div>
              <div className="mt-6 space-y-2 text-center">
                <h3 className="text-base font-semibold text-[var(--ink)]">Swaraj Puppalwar</h3>
                <p className="text-xs text-[var(--body)]">Founder & CTO, Lioran Developer Solutions</p>
                <p className="text-xs text-[var(--body)]">Founder, Lioran Group</p>
              </div>
              <div className="mt-6 flex flex-col gap-2 border-t border-[var(--hairline)] pt-4">
                <ButtonLink href={FOUNDER_PORTFOLIO_URL} variant="primary" external className="w-full text-xs">
                  Personal Portfolio
                </ButtonLink>
                <ButtonLink href={FOUNDER_GITHUB_URL} variant="secondary" external className="w-full text-xs">
                  GitHub Profile
                </ButtonLink>
              </div>
            </div>

            {/* Content Cards */}
            <div className="space-y-6">
              <InfoCard title="Profile Summary">
                <ul className="space-y-2.5 text-sm text-[var(--body)]">
                  {founderHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard title="Verified Recognition and Participation">
                <ul className="space-y-2 text-sm text-[var(--body)]">
                  {founderRecognition.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-link)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard title="Verified Profiles & Ecosystem Links">
                <div className="grid gap-2 sm:grid-cols-2">
                  <a
                    href={FOUNDER_PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--canvas-soft)] p-3 text-xs font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)]"
                  >
                    <span>Portfolio Website</span>
                    <span className="text-[var(--body)]">↗</span>
                  </a>
                  <a
                    href={FOUNDER_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--canvas-soft)] p-3 text-xs font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)]"
                  >
                    <span>Founder GitHub</span>
                    <span className="text-[var(--body)]">↗</span>
                  </a>
                  <a
                    href={GITHUB_ORG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--canvas-soft)] p-3 text-xs font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)]"
                  >
                    <span>Lioran Group GitHub</span>
                    <span className="text-[var(--body)]">↗</span>
                  </a>
                  <a
                    href={LIORAN_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--canvas-soft)] p-3 text-xs font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)]"
                  >
                    <span>Lioran Group Official</span>
                    <span className="text-[var(--body)]">↗</span>
                  </a>
                  <a
                    href={FOUNDER_X_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--canvas-soft)] p-3 text-xs font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)] sm:col-span-2"
                  >
                    <span>X / Twitter (@PuppalwarSwaraj)</span>
                    <span className="text-[var(--body)]">↗</span>
                  </a>
                </div>
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

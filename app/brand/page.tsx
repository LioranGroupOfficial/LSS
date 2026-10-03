import { createMetadata } from "@/lib/metadata";
import { LAST_UPDATED } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import {
  Container,
  InfoCard,
  Section,
  SectionHeading,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Brand",
  description:
    "Brand guidance for Lioran Developer Solutions, including naming, colors, and usage notes.",
  path: "/brand",
});

export default function BrandPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="Brand Assets & Guidelines"
            title="Identity and usage"
            description="Use the full company name, short name, and approved color palette consistently across ecosystem references."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <InfoCard
              title="Primary Naming & Hierarchy"
              description="Use “Lioran Developer Solutions” for formal references and “LDS” as the short name. Present Lioran Group as the parent organization."
            />

            <InfoCard title="Color System & Tokens">
              <p className="text-sm text-[var(--body)]">
                The LDS visual system is light-first, high contrast, and strictly gradient-free.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-white p-3">
                  <div className="h-6 w-full rounded border border-[#dcdee0] bg-white" />
                  <p className="mt-2 text-xs font-semibold text-[#171717]">Canvas</p>
                  <p className="font-mono text-[10px] text-[#60646c]">#ffffff</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-white p-3">
                  <div className="h-6 w-full rounded bg-[#171717]" />
                  <p className="mt-2 text-xs font-semibold text-[#171717]">Ink / Text</p>
                  <p className="font-mono text-[10px] text-[#60646c]">#171717</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-white p-3">
                  <div className="h-6 w-full rounded bg-[#000000]" />
                  <p className="mt-2 text-xs font-semibold text-[#171717]">Primary CTA</p>
                  <p className="font-mono text-[10px] text-[#60646c]">#000000</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-white p-3">
                  <div className="h-6 w-full rounded bg-[#0d74ce]" />
                  <p className="mt-2 text-xs font-semibold text-[#171717]">Text Link</p>
                  <p className="font-mono text-[10px] text-[#60646c]">#0d74ce</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-white p-3">
                  <div className="h-6 w-full rounded bg-[#dcdee0]" />
                  <p className="mt-2 text-xs font-semibold text-[#171717]">Hairline Border</p>
                  <p className="font-mono text-[10px] text-[#60646c]">#dcdee0</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-white p-3">
                  <div className="h-6 w-full rounded bg-[#fafafa]" />
                  <p className="mt-2 text-xs font-semibold text-[#171717]">Canvas Soft</p>
                  <p className="font-mono text-[10px] text-[#60646c]">#fafafa</p>
                </div>
              </div>
            </InfoCard>

            <InfoCard
              title="Usage Discipline"
              description="Do not present LDS as a generic agency, do not invent sub-brands, and do not use unrelated bright palette extensions or gradients."
            />

            <InfoCard
              title="Version & Last Updated"
              description={`Current brand system version aligned with website v2.0. Last updated: ${LAST_UPDATED}.`}
            />
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

import Image from "next/image";
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
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3">
                  <div className="h-6 w-full rounded border border-[#dcdee0] bg-[#ffffff]" />
                  <p className="mt-2 text-xs font-semibold text-[var(--ink)]">Canvas</p>
                  <p className="font-mono text-xs text-[var(--body)]">#ffffff</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3">
                  <div className="h-6 w-full rounded bg-[#171717]" />
                  <p className="mt-2 text-xs font-semibold text-[var(--ink)]">Ink / Text</p>
                  <p className="font-mono text-xs text-[var(--body)]">#171717</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3">
                  <div className="h-6 w-full rounded bg-[#000000]" />
                  <p className="mt-2 text-xs font-semibold text-[var(--ink)]">Primary CTA</p>
                  <p className="font-mono text-xs text-[var(--body)]">#000000</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3">
                  <div className="h-6 w-full rounded bg-[#0d74ce]" />
                  <p className="mt-2 text-xs font-semibold text-[var(--ink)]">Text Link</p>
                  <p className="font-mono text-xs text-[var(--body)]">#0d74ce</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3">
                  <div className="h-6 w-full rounded bg-[#dcdee0]" />
                  <p className="mt-2 text-xs font-semibold text-[var(--ink)]">Hairline Border</p>
                  <p className="font-mono text-xs text-[var(--body)]">#dcdee0</p>
                </div>
                <div className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3">
                  <div className="h-6 w-full rounded bg-[#fafafa] border border-[var(--hairline)]" />
                  <p className="mt-2 text-xs font-semibold text-[var(--ink)]">Canvas Soft</p>
                  <p className="font-mono text-xs text-[var(--body)]">#fafafa</p>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Official Logomark & Monogram">
              <p className="text-sm text-[var(--body)]">
                The official LDS geometric monogram for light and dark backgrounds.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center justify-center rounded-[8px] border border-[#dcdee0] bg-[#ffffff] p-6 text-center">
                  <div className="relative h-16 w-16">
                    <Image
                      src="/logo/dark.png"
                      alt="LDS Light Mode Logo"
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="mt-3 font-mono text-xs text-[#171717]">Light Mode</span>
                  <span className="text-[11px] text-[#60646c]">/logo/dark.png</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-[8px] border border-[#22252c] bg-[#0c0d0e] p-6 text-center">
                  <div className="relative h-16 w-16">
                    <Image
                      src="/logo/light.png"
                      alt="LDS Dark Mode Logo"
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="mt-3 font-mono text-xs text-[#f8fafc]">Dark Mode</span>
                  <span className="text-[11px] text-[#94a3b8]">/logo/light.png</span>
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

import { createMetadata } from "@/lib/metadata";
import { LAST_UPDATED } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { Container, InfoCard, Section, SectionHeading } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Brand",
  description:
    "Brand guidance for Lioran Developer Solutions, including naming, colors, and usage notes.",
  path: "/brand",
});

export default function BrandPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Brand Assets"
            title="Identity and usage"
            description="Use the full company name, short name, and approved color palette consistently across ecosystem references."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <InfoCard
              title="Primary naming"
              description="Use “Lioran Developer Solutions” for formal references and “LDS” as the short name. Present Lioran Group as the parent organization."
            />
            <InfoCard
              title="Color system"
              description="Background primary: #222831. Background secondary: #393E46. Accent: #948979. Text primary: #DFD0B8."
            />
            <InfoCard
              title="What not to do"
              description="Do not present LDS as a generic agency, do not invent sub-brands, and do not use unrelated bright palette extensions."
            />
            <InfoCard
              title="Last updated"
              description={LAST_UPDATED}
            />
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

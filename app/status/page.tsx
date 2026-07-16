import { createMetadata } from "@/lib/metadata";
import { statusEntries } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import { Container, Section, SectionHeading, TechnicalTable } from "../components/site-ui";

export const metadata = createMetadata({
  title: "Status",
  description:
    "A manually maintained LDS status overview for websites, community links, and public development surfaces.",
  path: "/status",
});

export default function StatusPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Status"
            title="Manually maintained service overview"
            description="This page is a service directory and status overview. It does not publish uptime percentages or incident history without real monitoring data."
          />
          <div className="mt-10">
            <TechnicalTable
              caption="Public services and references"
              headers={["Service", "Status", "Notes"]}
              rows={statusEntries.map((entry) => [
                <a key={entry.href} href={entry.href} target="_blank" rel="noopener noreferrer">
                  {entry.name}
                </a>,
                entry.status,
                entry.notes,
              ])}
            />
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

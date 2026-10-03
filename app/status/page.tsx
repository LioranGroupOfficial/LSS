import { createMetadata } from "@/lib/metadata";
import { statusEntries } from "@/lib/site";
import { PageShell } from "../components/page-shell";
import {
  Badge,
  Container,
  Section,
  SectionHeading,
  TechnicalTable,
} from "../components/site-ui";

export const metadata = createMetadata({
  title: "Status",
  description:
    "A manually maintained LDS status overview for websites, community links, and public development surfaces.",
  path: "/status",
});

export default function StatusPage() {
  return (
    <PageShell>
      <Section variant="canvas" className="border-b border-[var(--hairline-strong)]">
        <Container>
          <SectionHeading
            eyebrow="System & Service Overview"
            title="Manually maintained service overview"
            description="This page is a service directory and status overview. It does not publish uptime percentages or incident history without real monitoring data."
          />
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <TechnicalTable
            caption="Public services, development surfaces and status"
            headers={["Service / Platform", "Operational Status", "Engineering Notes"]}
            rows={statusEntries.map((entry) => [
              <a
                key={entry.href}
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--ink)] underline-offset-4 hover:underline"
              >
                {entry.name} <span className="text-[11px] text-[var(--muted)]">↗</span>
              </a>,
              <Badge key={`${entry.name}-status`} variant="default">
                {entry.status}
              </Badge>,
              entry.notes,
            ])}
          />
        </Container>
      </Section>
    </PageShell>
  );
}

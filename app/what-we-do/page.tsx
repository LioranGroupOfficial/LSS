import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { SectionHeading } from "../components/section-heading";

const sections = [
  {
    title: "Managed LioranDB",
    points: [
      "We host and manage LioranDB servers.",
      "Includes setup, monitoring, basic support, and server provisioning.",
    ],
  },
  {
    title: "Self-hosted License",
    points: [
      "Customers can run LioranDB on their own VPS or server.",
      "A license is provided after purchase.",
    ],
  },
  {
    title: "Developer Infrastructure",
    points: [
      "Database is available now.",
      "Storage and auth products are coming soon.",
    ],
  },
  {
    title: "Support",
    points: [
      "Managed DB plans include support.",
      "Self-hosted paid plans include support depending on the selected plan.",
    ],
  },
  {
    title: "Not allowed",
    points: [
      "We do not support illegal use, spam, fraud, abuse, malware, phishing, illegal data storage, or activity violating Indian law.",
    ],
  },
];

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Explore Lioran Developer Solutions services including managed LioranDB hosting, self-hosted licensing, infrastructure products, and support scope.",
  alternates: {
    canonical: "/what-we-do",
  },
};

export default function WhatWeDoPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Database products, hosting, and practical startup support"
          description="Lioran Developer Solutions focuses on backend infrastructure that startup teams can actually buy, deploy, and operate. We stay clear on what is included, what is planned, and what is not permitted."
        />
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <ul className="mt-6 space-y-4 text-[var(--text-soft)]">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-[var(--accent)]">+</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

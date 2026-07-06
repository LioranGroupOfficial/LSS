import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { SectionHeading } from "../components/section-heading";

const privacySections = [
  {
    title: "Information we collect",
    content:
      "Through the contact form, we may collect name, email, company or project, topic, and message details submitted by the user.",
  },
  {
    title: "How we use information",
    content:
      "We use submitted information only for communication, support, sales, service delivery, and security-related purposes connected to operating Lioran Developer Solutions.",
  },
  {
    title: "No sale of personal data",
    content:
      "We do not sell personal data.",
  },
  {
    title: "Technical logs",
    content:
      "We may store technical logs and related operational records for security, abuse prevention, stability, and service troubleshooting.",
  },
  {
    title: "Managed database customer data",
    content:
      "For managed LioranDB customers, customer data belongs to the customer.",
  },
  {
    title: "Access to customer data",
    content:
      "We do not access customer data unless needed for support, maintenance, legal requirement, or abuse investigation.",
  },
  {
    title: "Service providers",
    content:
      "Data may be shared only with hosting, payment, email, or similar providers required to operate the service.",
  },
  {
    title: "Privacy questions",
    content:
      "Users can contact Lioran Developer Solutions for privacy questions or requests related to the handling of submitted information.",
  },
  {
    title: "Governing law",
    content:
      "This privacy policy is governed by the laws of India.",
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Lioran Developer Solutions, including contact form data, technical logs, customer data access, and India-based governing law.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Privacy Policy"
          title="How Lioran Developer Solutions handles submitted and operational data"
          description="This policy explains the types of information we collect, how we use it, when it may be shared, and how customer data is treated for managed database services."
        />
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <div className="grid gap-6">
          {privacySections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-4 max-w-4xl leading-8 text-[var(--text-soft)]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

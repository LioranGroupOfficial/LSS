import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { SectionHeading } from "../components/section-heading";

const termsSections = [
  {
    title: "Service provider",
    content:
      "Services on this website are provided by Lioran Developer Solutions. These services may include managed LioranDB hosting, self-hosted LioranDB licensing, support, and related developer infrastructure offerings.",
  },
  {
    title: "Governing law",
    content:
      "These terms are governed by the laws of India. Any disputes, claims, or legal matters related to the services are subject to applicable Indian law.",
  },
  {
    title: "Pricing, GST, and payments",
    content:
      "Prices are exclusive of GST unless stated otherwise. Payments are non-refundable. Setup within 24 hours after confirmed payment applies to server or license provisioning, but timing may vary in rare operational cases.",
  },
  {
    title: "Customer responsibilities",
    content:
      "Customers are responsible for legal use of the service and for ensuring that their applications, workloads, stored content, and operational behavior comply with applicable law and these terms.",
  },
  {
    title: "Prohibited usage",
    content:
      "Lioran Developer Solutions is not responsible for illegal activity, abusive usage, fraud, spam, phishing, malware, illegal hosting, illegal content, or misuse carried out by customers. Such activity is strictly prohibited.",
  },
  {
    title: "Suspension and termination",
    content:
      "We may suspend or terminate service if abuse, illegal activity, non-payment, or policy violation is found. Suspension or termination may happen without advance notice when required for security, compliance, or abuse prevention.",
  },
  {
    title: "Backups and support",
    content:
      "Backups and support are provided according to the purchased plan. Customers should maintain their own backups and recovery processes even when a plan includes backups or operational help.",
  },
  {
    title: "Service availability",
    content:
      "We do not guarantee uninterrupted service. Maintenance, provider issues, internet failures, software bugs, hardware events, abuse mitigation, and other operational conditions may affect availability.",
  },
  {
    title: "Limitation of liability",
    content:
      "Lioran Developer Solutions is not responsible for indirect loss, business loss, data loss, profit loss, or misuse by the customer. Liability is limited to the maximum extent permitted by applicable law.",
  },
  {
    title: "Legal review notice",
    content:
      "This page is provided for operational clarity and is not legal advice. The content should be reviewed by a qualified legal professional before production use.",
  },
];

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Read the Terms and Conditions for Lioran Developer Solutions, including governing law, payment, provisioning, prohibited use, and liability limitations.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Terms and Conditions"
          title="Clear service terms for an India-based infrastructure business"
          description="These terms are intended to explain service scope, payment rules, usage limits, and legal responsibilities for customers using Lioran Developer Solutions."
        />
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <div className="grid gap-6">
          {termsSections.map((section) => (
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

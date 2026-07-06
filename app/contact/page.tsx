import type { Metadata } from "next";
import { ContactForm } from "../components/contact-form";
import { PageShell } from "../components/page-shell";
import { SectionHeading } from "../components/section-heading";

const contactCards = [
  {
    title: "General",
    value: "contact@lioransolutions.com",
    href: "mailto:contact@lioransolutions.com",
  },
  {
    title: "Founder/CTO",
    value: "cto@lioransolutions.com",
    href: "mailto:cto@lioransolutions.com",
  },
  {
    title: "GitHub",
    value: "github.com/LioranGroupOfficial",
    href: "https://github.com/LioranGroupOfficial",
  },
  {
    title: "Lioran Group",
    value: "lioran.group",
    href: "https://lioran.group",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lioran Developer Solutions for managed LioranDB hosting, self-hosted licensing, and general infrastructure questions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to Lioran Developer Solutions"
          description="Use the contact form for product, sales, support, or founder conversations. We keep communication direct and practical."
        />
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 transition hover:border-[var(--border-strong)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  {card.title}
                </p>
                <p className="mt-3 break-all text-[var(--text-soft)]">{card.value}</p>
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { SectionHeading } from "../components/section-heading";

const founderCards = [
  {
    title: "Founder-led support",
    description:
      "Early customers can speak directly with the person shaping the product and the infrastructure direction.",
  },
  {
    title: "Technical product ownership",
    description:
      "LioranDB and the surrounding platform are guided by hands-on backend and systems work.",
  },
  {
    title: "Startup-first mindset",
    description:
      "The focus stays on practical rollout, clear trade-offs, and shipping without unnecessary process.",
  },
];

const links = [
  {
    href: "https://github.com/UltronTheAI",
    label: "Founder GitHub",
  },
  {
    href: "https://github.com/LioranGroupOfficial",
    label: "Lioran Group GitHub",
  },
];

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Meet Swaraj Puppalwar, Founder & CTO of Lioran Developer Solutions, building LioranDB and developer infrastructure products.",
  alternates: {
    canonical: "/founder",
  },
};

export default function FounderPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Founder"
          title="Swaraj Puppalwar, Founder & CTO"
          description="Swaraj Puppalwar is a full-stack developer and system builder working on LioranDB, developer infrastructure, databases, backend systems, and scalable products."
        />
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Founder profile
            </p>
            <p className="mt-6 text-lg leading-8 text-[var(--text-soft)]">
              Lioran Developer Solutions is being built with a founder-led
              approach to product and infrastructure. That means technical
              decisions stay close to product reality, customer feedback reaches
              the builder quickly, and support conversations remain grounded in
              implementation details.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-lg border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:opacity-90"
              >
                Contact Founder
              </Link>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-[var(--text-main)] transition hover:bg-[var(--surface-muted)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {founderCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8"
              >
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="mt-4 text-[var(--text-soft)]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "./components/page-shell";
import { SectionHeading } from "./components/section-heading";

const offerings = [
  {
    title: "Developer-first database",
    description:
      "We build LioranDB for developers who want a simple backend foundation with clean APIs and practical deployment options.",
  },
  {
    title: "Managed LioranDB hosting",
    description:
      "We provision and manage hosted LioranDB servers with setup, monitoring, maintenance, and support included in managed plans.",
  },
  {
    title: "Self-hosted licenses",
    description:
      "Teams that want their own VPS or server can run LioranDB under paid self-hosted licenses after purchase.",
  },
  {
    title: "Founder-friendly database help",
    description:
      "We help startups deploy, maintain, back up, monitor, and scale their database setup without overcomplicating operations.",
  },
];

const productRoadmap = [
  {
    name: "LioranDB",
    status: "Available now",
    summary: "Developer-first database for modern apps and startup workloads.",
  },
  {
    name: "LioranBastion",
    status: "Coming soon",
    summary: "Object storage for developer workloads and application assets.",
  },
  {
    name: "Lioran Auth",
    status: "Coming soon",
    summary: "Authentication and identity tools designed for builders.",
  },
];

const reasons = [
  "Built for developers, startups, SaaS builders, and small businesses.",
  "Managed and self-hosted options so teams can choose how they operate.",
  "India-based operations with Indian law and startup-friendly support in mind.",
  "Clean product direction across database now, storage and auth next.",
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Build your backend with Lioran Developer Infrastructure. Explore LioranDB, managed hosting, self-hosted licensing, and startup-friendly database support.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <PageShell>
      <section className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Lioran Developer Solutions
            </p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Build your backend with Lioran Developer Infrastructure.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
              Lioran Developer Solutions is building practical infrastructure for
              startups and developers. LioranDB is our database product, with
              managed hosting, self-hosted licensing, and operational support for
              teams that need a simpler way to run backend systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="inline-flex rounded-lg border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:opacity-90"
            >
              View Pricing
            </Link>
            <Link
              href="/founder"
              className="inline-flex rounded-lg border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-[var(--text-main)] transition hover:bg-[var(--surface-muted)]"
            >
              Contact Founder
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Built for startup teams
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-4">
                <p className="text-sm text-[var(--text-muted)]">Managed plans</p>
                <p className="mt-2 text-2xl font-semibold">Setup + support</p>
              </div>
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-4">
                <p className="text-sm text-[var(--text-muted)]">Self-hosted</p>
                <p className="mt-2 text-2xl font-semibold">Licensing options</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-[var(--text-soft)]">
              Setup within 24 hours after confirmed payment for managed hosting
              and license provisioning.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <SectionHeading
          eyebrow="What we exactly do"
          title="Infrastructure products and practical support for builders"
          description="We focus on clear developer products, simple commercial options, and support that helps startups move into production with less friction."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8"
            >
              <h2 className="text-2xl font-semibold">{offering.title}</h2>
              <p className="mt-4 text-[var(--text-soft)]">{offering.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <SectionHeading
          eyebrow="Product roadmap"
          title="LioranDB now, storage and auth next"
          description="The Lioran Group product direction starts with database infrastructure and expands into related backend building blocks."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {productRoadmap.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {product.status}
              </p>
              <h2 className="mt-4 text-2xl font-semibold">{product.name}</h2>
              <p className="mt-4 text-[var(--text-soft)]">{product.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <SectionHeading
          eyebrow="Why Lioran"
          title="Simple language, clear scope, founder-led execution"
          description="We stay focused on infrastructure that early teams can understand, budget for, and run with confidence."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-[var(--text-soft)]"
            >
              {reason}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

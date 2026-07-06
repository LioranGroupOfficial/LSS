import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { SectionHeading } from "../components/section-heading";

const focusAreas = [
  "Built for developers, startups, SaaS builders, and small businesses.",
  "Focused on self-hosting, managed database operations, clean APIs, and reliable support.",
  "Operated from India with Indian law as the governing business framework.",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Lioran Developer Solutions, an India-first developer infrastructure startup building backend products for startups and developers.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="About"
          title="An India-first developer infrastructure startup"
          description="Lioran Developer Solutions builds practical backend infrastructure for developers and growing teams. We keep the product direction simple: useful systems, transparent commercial models, and support that helps teams ship."
        />
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Mission
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Make production-grade backend infrastructure simple, affordable,
              and founder-friendly.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
              We are building Lioran Developer Solutions for teams that need
              real infrastructure decisions without enterprise-level complexity.
              That includes self-hosting where it makes sense, managed database
              offerings where speed matters, and support that is grounded in how
              startups actually operate.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <h2 className="text-2xl font-semibold">What matters to us</h2>
            <ul className="mt-6 space-y-4 text-sm text-[var(--text-soft)]">
              {focusAreas.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--accent)]">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <h2 className="text-xl font-semibold">Products with clear scope</h2>
            <p className="mt-4 text-[var(--text-soft)]">
              Database now, storage and auth next. We only describe what we are
              actively building and supporting.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <h2 className="text-xl font-semibold">Operational flexibility</h2>
            <p className="mt-4 text-[var(--text-soft)]">
              Teams can choose managed hosting or self-hosting depending on
              budget, control, and deployment needs.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <h2 className="text-xl font-semibold">India-based operations</h2>
            <p className="mt-4 text-[var(--text-soft)]">
              Lioran Developer Solutions operates under Indian law with an
              India-first business and support approach.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

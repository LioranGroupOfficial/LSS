import { ContactForm } from "./components/contact-form";
import { SiteHeader } from "./components/site-header";

const serviceGroups = [
  "Custom website development",
  "Backend and frontend engineering",
  "Database architecture",
  "DevOps and deployment",
  "Hosting and infrastructure management",
  "Ongoing maintenance and technical support",
];

const processSteps = [
  {
    title: "Commit",
    description:
      "A 30% non-refundable commitment fee secures the timeline and lets us begin delivery with clear ownership.",
  },
  {
    title: "Build",
    description:
      "We work through structured milestones, written scope control, and no-open-ended revisions.",
  },
  {
    title: "Launch",
    description:
      "Final deployment happens only after approval and the final 30% payment, keeping risk low for both sides.",
  },
];

const planCards = [
  {
    name: "Basic",
    monthly: "₹500",
    yearly: "₹4,800",
    summary: "Lean maintenance for brochure websites and small business builds.",
    features: [
      "Hosting management",
      "Basic monitoring",
      "Monthly backup",
      "Minor content updates",
    ],
  },
  {
    name: "Mid",
    monthly: "₹2,500",
    yearly: "₹24,000",
    summary: "Balanced support for active marketing sites and growing platforms.",
    features: [
      "Everything in Basic",
      "Weekly backups",
      "Performance optimization",
      "Security updates",
      "Moderate content changes",
    ],
    featured: true,
  },
  {
    name: "Pro",
    monthly: "₹5,000",
    yearly: "₹48,000",
    summary: "Priority technical ownership for teams that need uptime and speed.",
    features: [
      "Everything in Mid",
      "Priority support",
      "Uptime monitoring",
      "Advanced security management",
      "Regular technical consultation",
    ],
  },
];

const contacts = [
  "cto@lioransolutions.com",
  "ceo@lioransolutions.com",
  "contact@lioransolutions.com",
  "info@lioransolutions.com",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--text-main)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top_left,_rgba(12,142,124,0.28),transparent_42%),radial-gradient(circle_at_top_right,_rgba(247,148,29,0.18),transparent_35%),linear-gradient(180deg,var(--hero-glow),transparent_72%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <SiteHeader />

        <section
          id="top"
          className="grid gap-10 rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)]/88 px-6 py-8 shadow-[0_25px_80px_var(--shadow-soft)] backdrop-blur sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-14"
        >
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              Full-stack builds. Managed infrastructure. Sustainable growth.
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Software delivery for brands that want clean execution and long-term technical ownership.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-soft)] sm:text-lg">
              Lioran Software Solutions builds custom websites, engineers robust systems, manages hosting, and stays on for maintenance. Minimum project engagement starts at ₹10,000.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--text-main)] px-6 py-3 text-sm font-semibold text-[var(--page-bg)] transition hover:scale-[1.01]"
              >
                Book Discovery
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold transition hover:bg-[var(--surface-muted)]"
              >
                Explore Plans
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-5">
                <p className="text-3xl font-semibold tracking-[-0.05em]">30 / 40 / 30</p>
                <p className="mt-2 text-sm text-[var(--text-soft)]">
                  Structured payment model with advance, milestone, and pre-deployment release.
                </p>
              </div>
              <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-5">
                <p className="text-3xl font-semibold tracking-[-0.05em]">25% to 35%</p>
                <p className="mt-2 text-sm text-[var(--text-soft)]">
                  Target sustainable net margin built around operational discipline.
                </p>
              </div>
              <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-5">
                <p className="text-3xl font-semibold tracking-[-0.05em]">2 to 3</p>
                <p className="mt-2 text-sm text-[var(--text-soft)]">
                  Major revision cap to protect timelines and keep scope accountable.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--panel)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Positioning
              </p>
              <div className="mt-5 space-y-3">
                {serviceGroups.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-soft)]"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Domain
                </p>
                <p className="mt-3 text-xl font-semibold">lioransolutions.com</p>
              </div>
              <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Revenue Model
                </p>
                <p className="mt-3 text-xl font-semibold">Project + Subscription</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              How LSS works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              An agency model designed to protect quality, margin, and delivery speed.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-soft)]">
              LSS operates with a build team for project execution and a maintenance team for long-term uptime, support, and monitoring. That separation keeps launches fast without sacrificing aftercare.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[0_12px_40px_var(--shadow-soft)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="mt-14 rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Project economics
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Clear numbers from the first conversation.
              </h2>
            </div>
            <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-5 py-4 text-sm text-[var(--text-soft)]">
              Example ₹1,00,000 project: ₹40,000 dev, ₹15,000 infra, ₹10,000 ops, ₹35,000 net profit.
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--panel)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Minimum engagement
              </p>
              <p className="mt-4 text-5xl font-semibold tracking-[-0.06em]">₹10k+</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                Every build starts with a commercially viable scope and a commitment to real delivery.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--panel)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Referral model
              </p>
              <p className="mt-4 text-5xl font-semibold tracking-[-0.06em]">40%</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                Collaborator commission is paid from net profit only, keeping delivery economics healthy.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--panel)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Risk controls
              </p>
              <p className="mt-4 text-xl font-semibold leading-8">
                No work without advance. No unpaid deployment. No unlimited revisions.
              </p>
            </article>
          </div>
        </section>

        <section id="support" className="mt-14">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Maintenance subscriptions
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Recurring support plans built for stability, security, and retention.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {planCards.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-6 ${
                  plan.featured
                    ? "border-[var(--accent)] bg-[linear-gradient(180deg,var(--accent-fade),var(--surface))] shadow-[0_18px_60px_rgba(10,120,106,0.18)]"
                    : "border-[var(--border-soft)] bg-[var(--surface)]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">{plan.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{plan.summary}</p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-[var(--text-main)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--page-bg)]">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 flex items-end gap-3">
                  <p className="text-5xl font-semibold tracking-[-0.06em]">{plan.monthly}</p>
                  <p className="pb-2 text-sm text-[var(--text-muted)]">/month</p>
                </div>
                <p className="mt-2 text-sm text-[var(--text-soft)]">{plan.yearly} billed yearly</p>

                <div className="mt-6 h-px bg-[var(--border-soft)]" />

                <ul className="mt-6 space-y-3 text-sm text-[var(--text-soft)]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--panel)] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Growth roadmap
            </p>
            <div className="mt-5 space-y-5">
              <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Phase 1
                </p>
                <p className="mt-2 text-xl font-semibold">Service-based agency</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                  Manual custom development projects with tight scope and healthy margins.
                </p>
              </div>
              <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Phase 2
                </p>
                <p className="mt-2 text-xl font-semibold">Internal frameworks and templates</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                  Reusable delivery systems that lower development cost and increase speed.
                </p>
              </div>
              <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Phase 3
                </p>
                <p className="mt-2 text-xl font-semibold">Productized SaaS and subscriptions</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                  Software products under Lioran Group that compound recurring revenue over time.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--surface),var(--surface-muted))] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Contract baseline
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Every project runs through written scope, milestones, ownership, and change control.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Scope of work",
                "Timeline and milestones",
                "Payment structure",
                "Revision limits",
                "Hosting terms",
                "Maintenance terms",
                "IP ownership clause",
                "Termination and refund policy",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-soft)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section
          id="contact"
          className="mt-14 grid gap-6 rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[0_25px_80px_var(--shadow-soft)] sm:p-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Contact LSS
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Tell us what you need and we&apos;ll turn it into a scoped project conversation.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-soft)]">
              Use the form for new builds, redesigns, maintenance takeovers, or infrastructure support. Your message can be routed to the right inbox instantly.
            </p>

            <div className="mt-8 grid gap-3">
              {contacts.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-3 text-sm font-medium text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--text-main)]"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </section>
      </div>
    </main>
  );
}

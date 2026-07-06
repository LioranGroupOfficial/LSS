import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { PricingCard } from "../components/pricing-card";
import { SectionHeading } from "../components/section-heading";

const managedPlans = [
  {
    name: "Personal Self-hosted Managed",
    price: "₹3,499/month + GST",
    yearlyPrice: "₹33,590/year + GST",
    description:
      "Entry managed plan for small apps and early deployments with LioranDB hosting handled by us.",
    meta: "Base server cost: ₹1,160/month",
    features: [
      "1 vCPU, 1 GiB RAM",
      "25 GiB storage",
      "50 GiB outbound",
      "10k baseline IOPS",
      "Managed provisioning, basic setup, monitoring, maintenance, and support",
    ],
  },
  {
    name: "Startup Plan",
    price: "₹8,799/month + GST",
    yearlyPrice: "₹84,470/year + GST",
    description:
      "For startup production usage that needs more headroom for application growth.",
    meta: "Base server cost: ₹2,920/month",
    features: [
      "2 vCPU, 4 GiB RAM",
      "100 GiB storage",
      "200 GiB outbound",
      "30k baseline IOPS",
      "Managed provisioning, basic setup, monitoring, maintenance, and support",
    ],
    highlight: true,
  },
  {
    name: "Business Basic",
    price: "₹15,499/month + GST",
    yearlyPrice: "₹1,48,790/year + GST",
    description:
      "For teams that need more database memory, storage, and consistent managed operations.",
    meta: "Base server cost: ₹5,100/month",
    features: [
      "2 vCPU, 8 GiB RAM",
      "150 GiB storage",
      "300 GiB outbound",
      "60k baseline IOPS",
      "Managed provisioning, basic setup, monitoring, maintenance, and support",
    ],
  },
  {
    name: "Business Medium",
    price: "₹25,999/month + GST",
    yearlyPrice: "₹2,49,590/year + GST",
    description:
      "For heavier workloads that need larger capacity and ongoing managed database support.",
    meta: "Base server cost: ₹8,560/month",
    features: [
      "4 vCPU, 16 GiB RAM",
      "500 GiB storage",
      "1 TiB outbound",
      "60k baseline IOPS",
      "Managed provisioning, basic setup, monitoring, maintenance, and support",
    ],
  },
];

const licensePlans = [
  {
    name: "Developer",
    price: "Free",
    description:
      "For local development, learning, testing, and small experiments.",
  },
  {
    name: "Starter License",
    price: "Starts at ₹500/month + GST",
    description: "For small self-hosted apps and early projects.",
  },
  {
    name: "Startup License",
    price: "Starts at ₹5,000/month + GST",
    description: "For production startup usage.",
  },
  {
    name: "Custom / Enterprise",
    price: "Custom pricing",
    description:
      "For high traffic, custom limits, custom SLA discussions, enterprise support, or special deployment requirements.",
  },
];

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View LioranDB managed hosting pricing and self-hosted license pricing for Lioran Developer Solutions.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Pricing"
          title="Managed hosting and self-hosted licensing for LioranDB"
          description="Prices are listed separately from GST. Setup within 24 hours after confirmed payment applies to managed hosting and license provisioning."
        />
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <SectionHeading
          eyebrow="Section A"
          title="Managed LioranDB Hosting"
          description="Monthly pricing is shown below. Yearly billing includes a 20% discount. Managed database plans include server provisioning, basic setup, monitoring, maintenance, and support."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {managedPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              yearlyPrice={plan.yearlyPrice}
              description={plan.description}
              meta={plan.meta}
              features={plan.features}
              highlight={plan.highlight}
              cta={
                <Link
                  href="/contact"
                  className="inline-flex rounded-lg border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:opacity-90"
                >
                  Contact for Managed DB
                </Link>
              }
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
          <ul className="space-y-3 text-sm text-[var(--text-soft)]">
            <li>Prices are exclusive of GST.</li>
            <li>Yearly billing includes a 20% discount.</li>
            <li>
              Managed DB includes server provisioning, basic setup, monitoring,
              maintenance, and support.
            </li>
            <li>
              Server or license setup may take up to 24 hours after confirmed
              payment.
            </li>
            <li>Payments are non-refundable after payment.</li>
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] py-16 sm:py-24">
        <SectionHeading
          eyebrow="Section B"
          title="Self-hosted License"
          description="Run LioranDB on your own VPS or server with the plan that matches your stage and support requirements."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {licensePlans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={[
                "License scope and limits depend on the selected plan.",
                "Paid self-hosted plans include support depending on the plan.",
                "Setup within 24 hours after confirmed payment.",
              ]}
              cta={
                <Link
                  href="/contact"
                  className="inline-flex rounded-lg border border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--text-main)] transition hover:bg-[var(--surface-muted)]"
                >
                  Request Self-hosted License
                </Link>
              }
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

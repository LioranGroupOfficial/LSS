import { ReactNode } from "react";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  yearlyPrice?: string;
  meta?: string;
  features: string[];
  highlight?: boolean;
  cta?: ReactNode;
};

export function PricingCard({
  name,
  price,
  description,
  yearlyPrice,
  meta,
  features,
  highlight = false,
  cta,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl border p-8 ${
        highlight
          ? "border-[var(--accent)] bg-[var(--accent-fade)]"
          : "border-[var(--border-soft)] bg-[var(--surface)]"
      }`}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-sm text-[var(--text-soft)]">{description}</p>
          <div className="space-y-1">
            <p className="text-3xl font-bold tracking-tight">{price}</p>
            {yearlyPrice ? (
              <p className="text-sm text-[var(--text-soft)]">{yearlyPrice}</p>
            ) : null}
            {meta ? <p className="text-xs text-[var(--text-muted)]">{meta}</p> : null}
          </div>
        </div>

        <ul className="space-y-3 border-t border-[var(--border-soft)] pt-6 text-sm text-[var(--text-soft)]">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="text-[var(--accent)]">+</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {cta ? <div className="pt-2">{cta}</div> : null}
      </div>
    </div>
  );
}

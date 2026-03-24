"use client";

import { FormEvent, useMemo, useState } from "react";

const inboxes = [
  "contact@lioransolutions.com",
  "info@lioransolutions.com",
  "cto@lioransolutions.com",
  "ceo@lioransolutions.com",
] as const;

type FormState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  service: string;
  recipient: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "₹10,000 - ₹25,000",
  service: "Custom website development",
  recipient: inboxes[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = `LSS inquiry from ${form.name || "New lead"}${form.company ? ` - ${form.company}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "Not provided"}`,
      `Service Needed: ${form.service}`,
      `Estimated Budget: ${form.budget}`,
      "",
      "Project Details:",
      form.message,
    ].join("\n");

    return `mailto:${form.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return;
    }

    setSubmitted(true);
    window.location.href = mailtoHref;
  };

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (submitted) {
      setSubmitted(false);
    }
  };

  return (
    <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--panel)] p-5 sm:p-6">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Your name"
            type="text"
            name="name"
            value={form.name}
            onChange={(value) => updateField("name", value)}
            placeholder="Ravi Sharma"
            required
          />
          <Field
            label="Work email"
            type="email"
            name="email"
            value={form.email}
            onChange={(value) => updateField("email", value)}
            placeholder="you@company.com"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Company"
            type="text"
            name="company"
            value={form.company}
            onChange={(value) => updateField("company", value)}
            placeholder="Your company"
          />
          <SelectField
            label="Primary inbox"
            name="recipient"
            value={form.recipient}
            onChange={(value) => updateField("recipient", value)}
            options={inboxes}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField
            label="Service needed"
            name="service"
            value={form.service}
            onChange={(value) => updateField("service", value)}
            options={[
              "Custom website development",
              "Full-stack web application",
              "UI redesign and frontend upgrade",
              "Database and backend architecture",
              "DevOps and deployment",
              "Maintenance and support",
            ]}
          />
          <SelectField
            label="Estimated budget"
            name="budget"
            value={form.budget}
            onChange={(value) => updateField("budget", value)}
            options={[
              "₹10,000 - ₹25,000",
              "₹25,000 - ₹50,000",
              "₹50,000 - ₹1,00,000",
              "₹1,00,000+",
            ]}
          />
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[var(--text-main)]">Project brief</span>
          <textarea
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us what you're building, your timeline, and what success looks like."
            className="min-h-36 rounded-[1.5rem] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
          />
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[var(--text-soft)]">
            Submitting opens your email app with the inquiry pre-filled so you can send it instantly.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:translate-y-[-1px] hover:shadow-[0_12px_28px_rgba(10,120,106,0.24)]"
          >
            Send Inquiry
          </button>
        </div>

        {submitted ? (
          <p className="rounded-2xl border border-[var(--accent)] bg-[var(--accent-fade)] px-4 py-3 text-sm text-[var(--text-main)]">
            Your draft is ready. If no mail app opened, use the direct inbox links on the left.
          </p>
        ) : null}
      </form>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, name, type, value, onChange, placeholder, required }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-[var(--text-main)]">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="rounded-[1.5rem] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
};

function SelectField({ label, name, value, onChange, options }: SelectFieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-[var(--text-main)]">{label}</span>
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-[1.5rem] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition focus:border-[var(--accent)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

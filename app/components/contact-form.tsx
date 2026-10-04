"use client";

import { type FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  topic: "Product inquiry",
  message: "",
};

const topics = [
  "Product inquiry",
  "LioranDB early access",
  "Technical collaboration",
  "Infrastructure partnerships",
  "Careers",
  "Security disclosure",
  "Media",
  "General inquiry",
] as const;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.message ?? "Unable to submit your message.");
        return;
      }

      setStatus("success");
      setFeedback(result.message ?? "Your message has been received. We will respond promptly.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setFeedback("We could not reach the contact endpoint. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Full name" htmlFor="name" description="Required for follow-up">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-11 w-full rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-3.5 text-sm text-[var(--ink)] placeholder-[var(--muted)] transition-colors focus:border-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--ink)]"
            placeholder="Ada Lovelace"
          />
        </FormField>
        <FormField label="Work email" htmlFor="email" description="Where we can reach you">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-11 w-full rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-3.5 text-sm text-[var(--ink)] placeholder-[var(--muted)] transition-colors focus:border-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--ink)]"
            placeholder="ada@company.com"
          />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Company or project" htmlFor="company" description="Optional context">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="h-11 w-full rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-3.5 text-sm text-[var(--ink)] placeholder-[var(--muted)] transition-colors focus:border-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--ink)]"
            placeholder="Acme Corp"
          />
        </FormField>
        <FormField label="Inquiry category" htmlFor="topic" description="Select the closest subject">
          <select
            id="topic"
            name="topic"
            value={form.topic}
            onChange={(event) => updateField("topic", event.target.value)}
            className="h-11 w-full rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-3.5 text-sm text-[var(--ink)] transition-colors focus:border-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--ink)]"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField
        label="Message"
        htmlFor="message"
        description="Include product, workload, or technical context"
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] p-3.5 text-sm leading-relaxed text-[var(--ink)] placeholder-[var(--muted)] transition-colors focus:border-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--ink)]"
          placeholder="Describe what you are building or exploring..."
        />
      </FormField>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
        <p className="text-xs text-[var(--body)]">
          Submissions are directly routed to the LDS engineering and founder desk.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary !h-10 !px-6 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit Message"}
        </button>
      </div>

      {feedback ? (
        <div
          role="status"
          className="rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-strong)] p-4 text-sm font-medium text-[var(--ink)]"
        >
          {feedback}
        </div>
      ) : null}
    </form>
  );
}

function FormField({
  label,
  htmlFor,
  description,
  children,
}: {
  label: string;
  htmlFor: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={htmlFor} className="text-sm font-medium text-[var(--ink)]">
          {label}
        </label>
        <span className="text-[11px] text-[var(--body)]">{description}</span>
      </div>
      {children}
    </div>
  );
}

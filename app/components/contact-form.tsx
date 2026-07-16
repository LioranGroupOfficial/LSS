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
      setFeedback(result.message ?? "Your message has been recorded.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setFeedback("We could not reach the contact endpoint. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Full name" htmlFor="name" description="Required for follow-up.">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-11 rounded-[5px] border border-[var(--border-color)] bg-[var(--background-primary)] px-4 text-sm text-[var(--text-primary)]"
          />
        </FormField>
        <FormField label="Email" htmlFor="email" description="Required for a reply.">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-11 rounded-[5px] border border-[var(--border-color)] bg-[var(--background-primary)] px-4 text-sm text-[var(--text-primary)]"
          />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Company or project" htmlFor="company" description="Optional context.">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="h-11 rounded-[5px] border border-[var(--border-color)] bg-[var(--background-primary)] px-4 text-sm text-[var(--text-primary)]"
          />
        </FormField>
        <FormField label="Inquiry type" htmlFor="topic" description="Choose the closest category.">
          <select
            id="topic"
            name="topic"
            value={form.topic}
            onChange={(event) => updateField("topic", event.target.value)}
            className="h-11 rounded-[5px] border border-[var(--border-color)] bg-[var(--background-primary)] px-4 text-sm text-[var(--text-primary)]"
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
        description="Include the product, context, and any technical requirements."
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="rounded-[5px] border border-[var(--border-color)] bg-[var(--background-primary)] px-4 py-3 text-sm leading-7 text-[var(--text-primary)]"
        />
      </FormField>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[var(--text-muted)]">
          Submissions are stored only when the backend request succeeds.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-[42px] items-center justify-center rounded-[5px] border border-[var(--accent)] bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--background-primary)] disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Submit"}
        </button>
      </div>

      {feedback ? (
        <p
          role="status"
          className={`rounded-[5px] border px-4 py-3 text-sm ${
            status === "success"
              ? "border-[var(--accent)] bg-[rgba(148,137,121,0.12)] text-[var(--text-primary)]"
              : "border-[var(--border-color)] bg-[var(--background-secondary)] text-[var(--text-primary)]"
          }`}
        >
          {feedback}
        </p>
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
    <label htmlFor={htmlFor} className="grid gap-2">
      <span className="text-sm font-medium text-[var(--text-primary)]">{label}</span>
      <span className="text-sm text-[var(--text-subtle)]">{description}</span>
      {children}
    </label>
  );
}

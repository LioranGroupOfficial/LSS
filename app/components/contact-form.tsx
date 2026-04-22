"use client";

import { FormEvent, useState } from "react";

const inboxes = [
  "contact@lioransolutions.com",
  "cto@lioransolutions.com",
] as const;

type FormState = {
  name: string;
  email: string;
  company: string;
  topic: string;
  recipient: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  topic: "Product inquiry",
  recipient: inboxes[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and message.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit your message.");
      }

      setStatus("success");
      setFeedback(result.message || "Your message has been sent successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.",
      );
    }
  };

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          type="text"
          name="name"
          value={form.name}
          onChange={(value) => updateField("name", value)}
          placeholder="Your name"
          required
        />
        <Field
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={(value) => updateField("email", value)}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Company / Project"
          type="text"
          name="company"
          value={form.company}
          onChange={(value) => updateField("company", value)}
          placeholder="Your company"
        />
        <SelectField
          label="Topic"
          name="topic"
          value={form.topic}
          onChange={(value) => updateField("topic", value)}
          options={[
            "Product inquiry",
            "Partnership",
            "Bug report",
            "Feature request",
            "Documentation issue",
            "Other",
          ]}
        />
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-[var(--text-main)]">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us what you need..."
          className="rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--text-soft)]">
          We'll get back to you within 24 hours.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-2 text-sm font-semibold text-[var(--accent-contrast)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send"}
        </button>
      </div>

      {feedback ? (
        <p
          className={`rounded-lg px-4 py-3 text-sm ${
            status === "success"
              ? "border border-[var(--accent)] bg-[var(--accent-fade)] text-[var(--text-main)]"
              : "border border-red-400/40 bg-red-500/10 text-[var(--text-main)]"
          }`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
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
        className="rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
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
        className="rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-main)] outline-none transition focus:border-[var(--accent)]"
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

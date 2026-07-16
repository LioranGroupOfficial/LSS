import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return <section className={`py-14 sm:py-16 lg:py-24 ${className}`.trim()}>{children}</section>;
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-[70ch] text-base leading-7 text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type CardProps = {
  title: string;
  description?: string;
  meta?: string;
  children?: ReactNode;
};

export function InfoCard({ title, description, meta, children }: CardProps) {
  return (
    <article className="rounded-[6px] border border-[var(--border-color)] bg-[var(--background-secondary)]">
      <div className="border-b border-[var(--border-color)] bg-[var(--accent)] px-6 py-4 text-[var(--background-primary)]">
        <h2 className="text-lg font-semibold">{title}</h2>
        {meta ? <p className="mt-1 text-sm text-[rgba(34,40,49,0.8)]">{meta}</p> : null}
      </div>
      <div className="space-y-4 px-6 py-6">
        {description ? (
          <p className="text-sm leading-7 text-[var(--text-muted)]">{description}</p>
        ) : null}
        {children}
      </div>
    </article>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex h-[42px] items-center justify-center rounded-[5px] border border-[var(--accent)] bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--background-primary)] transition-colors duration-150 hover:bg-transparent hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
      : variant === "secondary"
        ? "inline-flex h-[42px] items-center justify-center rounded-[5px] border border-[var(--accent)] bg-transparent px-5 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-150 hover:bg-[var(--background-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]"
        : "inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] underline-offset-4 transition-colors duration-150 hover:text-[var(--accent)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <span>{children}</span>
        {variant === "text" ? <ArrowUpRightIcon className="h-4 w-4" /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

type TableProps = {
  caption: string;
  headers: string[];
  rows: ReactNode[][];
};

export function TechnicalTable({ caption, headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-[5px] border border-[var(--border-color)] bg-[var(--background-secondary)]">
      <table className="min-w-full border-collapse text-left text-sm">
        <caption className="border-b border-[var(--border-color)] px-6 py-4 text-left text-sm text-[var(--text-muted)]">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-[var(--border-color)] text-[var(--text-primary)]">
            {headers.map((header) => (
              <th key={header} scope="col" className="px-6 py-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${caption}-${index}`}
              className={index % 2 === 0 ? "bg-transparent" : "bg-[rgba(34,40,49,0.32)]"}
            >
              {row.map((cell, cellIndex) => (
                <td key={`${caption}-${index}-${cellIndex}`} className="px-6 py-4 align-top text-[var(--text-muted)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type CodeBlockProps = {
  label: string;
  code: string;
};

export function CodeBlock({ label, code }: CodeBlockProps) {
  const lines = code.trim().split("\n");

  return (
    <div className="overflow-hidden rounded-[5px] border border-[var(--border-color)] bg-[#1a1f26]">
      <div className="flex items-center justify-between border-b border-[var(--border-color)] bg-[var(--background-secondary)] px-4 py-3">
        <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          {label}
        </span>
        <span className="text-[12px] text-[var(--text-muted)]">TypeScript</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-7 text-[var(--text-primary)]">
        <code>
          {lines.map((line, index) => (
            <span key={`${label}-${index}`} className="block">
              {line}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[5px] focus:border focus:border-[var(--text-primary)] focus:bg-[var(--background-primary)] focus:px-4 focus:py-3 focus:text-sm focus:text-[var(--text-primary)]"
    >
      Skip to content
    </a>
  );
}

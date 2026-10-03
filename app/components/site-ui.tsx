"use client";

import Link from "next/link";
import { type ReactNode, useState } from "react";
import { ArrowUpRightIcon, CheckIcon, CopyIcon } from "./icons";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  variant?: "canvas" | "soft" | "bordered";
};

export function Section({ children, className = "", variant = "canvas" }: SectionProps) {
  const bgClass =
    variant === "soft"
      ? "bg-[var(--canvas-soft)] border-y border-[var(--hairline)]"
      : variant === "bordered"
        ? "border-b border-[var(--hairline)]"
        : "bg-[var(--canvas)]";

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${bgClass} ${className}`.trim()}>
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`min-w-0 space-y-3 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.88px] text-[var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-[-0.84px] text-[var(--ink)] sm:text-3xl lg:text-[36px] lg:leading-[1.15] lg:tracking-[-1.08px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[70ch] text-base leading-[1.6] text-[var(--body)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "accent";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const colorMap = {
    default: "bg-[var(--surface-strong)] text-[var(--ink)] border-[var(--hairline-strong)]",
    success: "bg-[#16a34a]/10 text-[var(--semantic-success)] border-[#16a34a]/30",
    warning: "bg-[#ab6400]/10 text-[var(--accent-warning)] border-[#ab6400]/30",
    accent: "bg-[#8145b5]/10 text-[var(--accent-preview)] border-[#8145b5]/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.88px] ${colorMap[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex h-10 items-center justify-center rounded-[8px] text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]";

  const variantClasses =
    variant === "primary"
      ? "bg-[var(--primary)] text-[var(--on-primary)] px-4 hover:bg-[var(--primary-active)] active:scale-[0.99]"
      : variant === "secondary"
        ? "border border-[var(--hairline-strong)] bg-[var(--surface-card)] text-[var(--ink)] px-4 hover:bg-[var(--surface-strong)]"
        : "h-auto p-0 font-medium text-[var(--text-link)] underline-offset-4 hover:underline";

  const fullClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={fullClasses}>
        <span>{children}</span>
        {variant === "text" ? <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5" /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={fullClasses}>
      {children}
    </Link>
  );
}

type CardProps = {
  title?: string;
  description?: string;
  meta?: ReactNode;
  children?: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "flat";
};

export function InfoCard({
  title,
  description,
  meta,
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={`rounded-[12px] border p-6 transition-all duration-150 sm:p-7 ${
        isDark
          ? "border-[var(--hairline-strong)] bg-[var(--surface-dark)] text-[var(--on-dark)]"
          : "border-[var(--hairline-strong)] bg-[var(--surface-card)] text-[var(--ink)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
      } ${className}`.trim()}
    >
      {meta || title ? (
        <div className="mb-3 space-y-1">
          {meta ? (
            <div className="text-[12px] font-medium text-[var(--muted)]">{meta}</div>
          ) : null}
          {title ? (
            <h3
              className={`text-lg font-semibold tracking-[-0.2px] ${
                isDark ? "text-[var(--on-dark)]" : "text-[var(--ink)]"
              }`}
            >
              {title}
            </h3>
          ) : null}
        </div>
      ) : null}

      {description ? (
        <p
          className={`text-sm leading-relaxed ${
            isDark ? "text-[var(--on-dark-soft)]" : "text-[var(--body)]"
          }`}
        >
          {description}
        </p>
      ) : null}

      {children ? <div className={description || title ? "mt-4 space-y-3" : "space-y-3"}>{children}</div> : null}
    </article>
  );
}

type TableProps = {
  caption: string;
  headers: string[];
  rows: ReactNode[][];
};

export function TechnicalTable({ caption, headers, rows }: TableProps) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="border-b border-[var(--hairline)] bg-[var(--canvas-soft)] px-6 py-3.5">
        <span className="text-[12px] font-semibold uppercase tracking-[0.88px] text-[var(--muted)]">
          {caption}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--hairline)] bg-[var(--canvas-soft)]/50 text-[var(--ink)]">
              {headers.map((header) => (
                <th key={header} scope="col" className="px-6 py-3.5 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--hairline)]">
            {rows.map((row, index) => (
              <tr
                key={`${caption}-${index}`}
                className="transition-colors hover:bg-[var(--canvas-soft)]/60"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${caption}-${index}-${cellIndex}`}
                    className="px-6 py-4 align-top text-sm text-[var(--body)]"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type CodeBlockProps = {
  label: string;
  code: string;
  language?: string;
};

export function CodeBlock({ label, code, language = "TypeScript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  // Basic syntax colorizer for solid, colorful developer surfaces without gradients
  const formatCodeLine = (line: string, lineIndex: number) => {
    // Quick token parsing for clean visual presentation
    if (line.startsWith("//")) {
      return <span key={lineIndex} className="text-[#717888]">{line}</span>;
    }
    if (line.startsWith("import ") || line.startsWith("export ") || line.startsWith("const ") || line.startsWith("await ") || line.startsWith("new ")) {
      return (
        <span key={lineIndex}>
          {line.split(/(\bimport\b|\bfrom\b|\bconst\b|\bnew\b|\bawait\b|\bexport\b|"[^"]*"|'[^']*')/g).map((token, i) => {
            if (["import", "from", "const", "new", "await", "export"].includes(token)) {
              return <span key={i} className="text-[#ec4899] font-medium">{token}</span>;
            }
            if (token.startsWith('"') || token.startsWith("'")) {
              return <span key={i} className="text-[#38bdf8]">{token}</span>;
            }
            if (token.includes("LioranManager") || token.includes("database")) {
              return <span key={i} className="text-[#a78bfa]">{token}</span>;
            }
            return <span key={i} className="text-[#e2e8f0]">{token}</span>;
          })}
        </span>
      );
    }

    return (
      <span key={lineIndex}>
        {line.split(/("[^"]*"|'[^']*'|\btrue\b|\bfalse\b|\b\d+\b)/g).map((token, i) => {
          if (token.startsWith('"') || token.startsWith("'")) {
            return <span key={i} className="text-[#38bdf8]">{token}</span>;
          }
          if (/^\d+$/.test(token) || ["true", "false"].includes(token)) {
            return <span key={i} className="text-[#f59e0b]">{token}</span>;
          }
          if (token.includes("connect") || token.includes("insert")) {
            return <span key={i} className="text-[#34d399]">{token}</span>;
          }
          return <span key={i} className="text-[#e2e8f0]">{token}</span>;
        })}
      </span>
    );
  };

  const lines = code.trim().split("\n");

  return (
    <div className="overflow-hidden rounded-[12px] border border-[#2b2f3a] bg-[#171717] shadow-lg">
      <div className="flex items-center justify-between border-b border-[#26282e] bg-[#1a1a1a] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]/80" />
          <span className="ml-2 font-mono text-[12px] font-medium text-[#94a3b8]">
            {label}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-[4px] bg-[#262626] px-2 py-0.5 font-mono text-[11px] font-medium text-[#94a3b8]">
            {language}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code snippet"
            className="inline-flex h-7 items-center gap-1.5 rounded-[6px] border border-[#333742] bg-[#22252c] px-2 text-[12px] font-medium text-[#cbd5e1] transition-colors hover:bg-[#2c303a] hover:text-white"
          >
            {copied ? (
              <>
                <CheckIcon className="h-3.5 w-3.5 text-[#10b981]" />
                <span className="text-[#10b981]">Copied</span>
              </>
            ) : (
              <>
                <CopyIcon className="h-3.5 w-3.5 text-[#94a3b8]" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.65] text-[#e2e8f0]">
        <code>
          {lines.map((line, idx) => (
            <div key={idx} className="table-row">
              <span className="table-cell select-none pr-4 text-right font-mono text-[12px] text-[#4b5563]">
                {idx + 1}
              </span>
              <span className="table-cell">{formatCodeLine(line, idx)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

export function EcosystemTile({
  name,
  category,
  icon,
}: {
  name: string;
  category?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="flex h-16 w-full items-center gap-3 rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-4 transition-colors hover:bg-[var(--surface-strong)]">
      {icon ? <div className="shrink-0 text-[var(--ink)]">{icon}</div> : null}
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-[var(--ink)]">{name}</p>
        {category ? (
          <p className="truncate text-[12px] text-[var(--muted)]">{category}</p>
        ) : null}
      </div>
    </div>
  );
}

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[8px] focus:border focus:border-[var(--ink)] focus:bg-[var(--canvas)] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--ink)] focus:shadow-lg"
    >
      Skip to content
    </a>
  );
}

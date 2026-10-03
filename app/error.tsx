"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[1200px] flex-col items-center justify-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
      <span className="inline-flex rounded-full border border-[var(--semantic-error)]/30 bg-[var(--semantic-error)]/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--semantic-error)]">
        Application Error
      </span>
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
        Something went wrong.
      </h1>
      <p className="max-w-[50ch] text-base leading-relaxed text-[var(--body)]">
        The page could not be rendered successfully. You can retry the operation or return to a stable route.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-10 items-center justify-center rounded-[8px] bg-[var(--primary)] px-5 text-sm font-medium text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-active)]"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-5 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface-strong)]"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

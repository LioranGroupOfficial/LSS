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
    <main className="mx-auto flex min-h-screen max-w-[1180px] flex-col items-start justify-center gap-6 px-4 py-16 text-[var(--text-primary)] sm:px-6 lg:px-8">
      <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
        Error
      </p>
      <h1 className="text-4xl font-semibold tracking-[-0.04em]">Something went wrong.</h1>
      <p className="max-w-[60ch] text-base leading-7 text-[var(--text-muted)]">
        The page could not be rendered successfully. You can retry or return to a stable route.
      </p>
      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-[42px] items-center justify-center rounded-[5px] border border-[var(--accent)] bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--background-primary)]"
        >
          Retry
        </button>
        <Link href="/" className="inline-flex h-[42px] items-center justify-center rounded-[5px] border border-[var(--accent)] px-5 text-sm font-semibold text-[var(--text-primary)]">
          Go home
        </Link>
      </div>
    </main>
  );
}

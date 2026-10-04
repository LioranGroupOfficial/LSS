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
      <span className="badge-pill">
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
          className="btn-primary !h-10 !px-5"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="btn-secondary !h-10 !px-5"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

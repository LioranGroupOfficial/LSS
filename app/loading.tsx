export default function Loading() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[1200px] items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 rounded-[8px] border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--hairline-strong)] border-t-[var(--ink)]" />
        <span className="text-sm font-medium text-[var(--body)]">Loading LDS platform...</span>
      </div>
    </main>
  );
}

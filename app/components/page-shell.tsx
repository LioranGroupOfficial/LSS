import { ReactNode } from "react";
import { Footer } from "./footer";
import { SiteHeader } from "./site-header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--text-main)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <SiteHeader />
        {children}
        <Footer />
      </div>
    </main>
  );
}

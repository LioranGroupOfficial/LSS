import type { ReactNode } from "react";
import { Footer } from "./footer";
import { SiteHeader } from "./site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-[60vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}

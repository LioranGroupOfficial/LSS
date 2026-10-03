import { PageShell } from "./components/page-shell";
import { ButtonLink, Container, Section } from "./components/site-ui";

export default function NotFound() {
  return (
    <PageShell>
      <Section variant="canvas">
        <Container>
          <div className="mx-auto max-w-2xl py-12 text-center space-y-6">
            <span className="inline-flex rounded-full border border-[var(--hairline-strong)] bg-[var(--surface-strong)] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
              404 • Not Found
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              Page not found
            </h1>
            <p className="text-base leading-relaxed text-[var(--body)]">
              The route you requested does not exist or may have moved to a different location in the LDS hierarchy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <ButtonLink href="/" variant="primary">
                Return to Home
              </ButtonLink>
              <ButtonLink href="/products" variant="secondary">
                View Products
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Support
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

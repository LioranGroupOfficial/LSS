import Link from "next/link";
import { PageShell } from "./components/page-shell";
import { Container, Section, SectionHeading } from "./components/site-ui";

export default function NotFound() {
  return (
    <PageShell>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="404"
            title="Page not found"
            description="The route you requested does not exist or may have moved."
          />
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/" className="underline-offset-4 hover:underline">Home</Link>
            <Link href="/products" className="underline-offset-4 hover:underline">Products</Link>
            <Link href="/products/liorandb" className="underline-offset-4 hover:underline">LioranDB</Link>
            <Link href="/contact" className="underline-offset-4 hover:underline">Contact</Link>
            <a href="https://lioran.group" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              Lioran Group
            </a>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}

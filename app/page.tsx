import { ContactForm } from "./components/contact-form";
import { SiteHeader } from "./components/site-header";

const products = [
  {
    name: "LioranDB",
    status: "🟢 Live & Public",
    description: "Embedded, file-based document database for Node.js",
    details: [
      "No server required by default",
      "Optional server + CLI",
      "TypeScript-first driver",
      "HTTP-based REST API",
      "Perfect for embedded & edge use cases"
    ],
    link: "db.lioransolutions.com",
    github: "github.com/LioranGroupOfficial/liorandb"
  },
  {
    name: "LioranBastion",
    status: "🟡 Launching Soon",
    description: "S3-like storage & asset management layer",
    details: [
      "Secure file storage",
      "Asset management",
      "TypeScript/JavaScript support",
      "Optimized for performance",
      "Built for production workloads"
    ],
    link: "Lioran.group",
    github: "Coming Soon"
  },
  {
    name: "Lioran Auth",
    status: "🟡 Launching Soon",
    description: "Authentication & authorization system",
    details: [
      "Developer-friendly API",
      "TypeScript/JavaScript support",
      "Scalable & secure",
      "Built for the modern web",
      "Production-ready infrastructure"
    ],
    link: "Lioran.group",
    github: "Coming Soon"
  }
];

const features = [
  {
    icon: "⚡",
    title: "Developer First",
    description: "Clean APIs, great documentation, and TypeScript/JavaScript everywhere"
  },
  {
    icon: "🔒",
    title: "Built for Production",
    description: "Reliable infrastructure you can trust to power real applications"
  },
  {
    icon: "🛠️",
    title: "Complete Ecosystem",
    description: "Database, storage, and auth—all the tools you need to build"
  },
  {
    icon: "🚀",
    title: "No Vendor Lock-in",
    description: "Own your infrastructure, control your destiny"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--text-main)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <SiteHeader />

        {/* Hero Section */}
        <section id="top" className="py-16 sm:py-24">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                Build Your Backend
              </h1>
              <h2 className="text-2xl font-normal text-[var(--text-soft)] sm:text-3xl">
                with Lioran's Developer Infrastructure
              </h2>
            </div>
            <p className="max-w-2xl text-lg text-[var(--text-soft)] leading-8">
              We're building a complete developer ecosystem. LioranDB is live now. Database, storage, and auth—all designed for developers who want clean APIs, TypeScript support, and production-grade reliability.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://db.lioransolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 bg-[var(--accent)] text-[var(--accent-contrast)] font-semibold rounded border border-[var(--accent)] hover:opacity-90 transition"
              >
                Explore LioranDB
              </a>
              <a
                href="https://github.com/LioranGroupOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 border border-[var(--border-strong)] text-[var(--text-main)] font-semibold rounded hover:bg-[var(--surface-muted)] transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 sm:py-24 border-t border-[var(--border-soft)]">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Products</h2>
            <p className="text-lg text-[var(--text-soft)] max-w-2xl">
              A complete infrastructure built by developers, for developers.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="border border-[var(--border-soft)] bg-[var(--surface)] rounded-lg p-8 hover:border-[var(--border-strong)] transition"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <span className="text-sm font-semibold px-3 py-1 rounded bg-[var(--surface-muted)] whitespace-nowrap">
                        {product.status}
                      </span>
                    </div>
                    <p className="text-[var(--text-soft)]">{product.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-soft)]">
                        <span className="text-[var(--accent)] font-bold mt-0.5">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[var(--border-soft)] space-y-2">
                    <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                      Documentation
                    </div>
                    <a
                      href={`https://${product.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[var(--accent)] hover:underline font-semibold break-all"
                    >
                      {product.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-24 border-t border-[var(--border-soft)]">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Lioran</h2>
            <p className="text-lg text-[var(--text-soft)] max-w-2xl">
              Built by engineers who understand what developers need.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-[var(--border-soft)] bg-[var(--surface)] rounded-lg p-8"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-soft)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Code Example Section */}
        <section id="example" className="py-16 sm:py-24 border-t border-[var(--border-soft)]">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Started</h2>
            <p className="text-lg text-[var(--text-soft)]">
              LioranDB requires zero configuration
            </p>
          </div>

          <div className="border border-[var(--border-soft)] bg-[var(--surface-muted)] rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-[var(--text-soft)] font-mono">
{`import { LioranManager } from "@liorandb/core";

const manager = new LioranManager({ rootPath: "./data" });
const db = await manager.db("app");
const users = db.collection("users");

// Insert
await users.insertOne({ email: "dev@lioran.dev" });

// Query
const user = await users.findOne({ email: "dev@lioran.dev" });
console.log(user);

await manager.close();`}
            </pre>
          </div>

          <div className="mt-8 p-6 border border-[var(--border-soft)] bg-[var(--surface)] rounded-lg">
            <h3 className="font-semibold mb-3">Install @liorandb/core</h3>
            <code className="text-[var(--accent)] font-mono text-sm">
              npm install @liorandb/core
            </code>
          </div>
        </section>

        {/* About Lioran Section */}
        <section id="about" className="py-16 sm:py-24 border-t border-[var(--border-soft)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Lioran</h2>
              <p className="text-lg text-[var(--text-soft)] leading-8 max-w-3xl">
                Lioran is building a complete developer ecosystem from the ground up. Started by Swaraj Puppalwar (CTO) and the Lioran team, we're creating infrastructure that developers actually want to use. No black boxes. No corporate nonsense. Just clean, reliable tools.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="border border-[var(--border-soft)] bg-[var(--surface)] rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Lioran Group</h3>
                <p className="text-[var(--text-soft)] text-sm mb-4">
                  The parent organization driving the vision for a better developer ecosystem.
                </p>
                <a
                  href="https://lioran.group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] font-semibold hover:underline"
                >
                  Visit lioran.group →
                </a>
              </div>

              <div className="border border-[var(--border-soft)] bg-[var(--surface)] rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">CTO & Founder</h3>
                <p className="text-[var(--text-soft)] text-sm mb-4">
                  Swaraj Puppalwar, system architect and full-stack engineer building production infrastructure.
                </p>
                <a
                  href="https://github.com/UltronTheAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] font-semibold hover:underline"
                >
                  GitHub Profile →
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Connect</h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="https://github.com/LioranGroupOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  GitHub Organization →
                </a>
                <a
                  href="mailto:cto@lioransolutions.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  Email CTO →
                </a>
                <a
                  href="https://lioran.group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  Lioran.group →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16 sm:py-24 border-t border-[var(--border-soft)]">
          <div className="max-w-2xl">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="text-lg text-[var(--text-soft)]">
                Have questions about our products? Interested in partnerships? Let's talk.
              </p>
            </div>

            <div className="border border-[var(--border-soft)] bg-[var(--surface)] rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-[var(--border-soft)] mt-16">
          <div className="space-y-4">
            <p className="text-sm text-[var(--text-muted)]">
              © 2026 Lioran Software Solutions. Built with focus on developer experience.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--text-soft)]">
              <a href="https://lioran.group" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                Lioran Group
              </a>
              <a href="https://github.com/LioranGroupOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                GitHub
              </a>
              <a href="mailto:cto@lioransolutions.com" className="hover:text-[var(--accent)]">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}


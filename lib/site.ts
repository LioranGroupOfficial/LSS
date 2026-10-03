export const SITE_URL = "https://lioransolutions.com";
export const LIORAN_GROUP_URL = "https://lioran.group";
export const LIORAN_DB_URL = "https://liorandb.com";
export const LIORAN_S3_URL = "https://liorans3.sbs";
export const LIORAN_S3_DOCS_URL = "https://docs.liorans3.sbs";
export const GITHUB_ORG_URL = "https://github.com/LioranGroupOfficial";
export const DISCORD_URL = "https://discord.gg/WsWWThjPMp";
export const FOUNDER_PORTFOLIO_URL = "https://swaraj.lioransolutions.com";
export const FOUNDER_GITHUB_URL = "https://github.com/UltronTheAI";
export const FOUNDER_X_URL = "https://twitter.com/PuppalwarSwaraj";
export const FOUNDER_IMAGE_URL =
  "https://avatars.githubusercontent.com/u/79976106?v=4";
export const CONTACT_EMAIL = "contact@lioransolutions.com";
export const CAREERS_EMAIL = "careers@lioransolutions.com";
export const SECURITY_EMAIL = "security@lioransolutions.com";
export const WEBSITE_VERSION = "v2.0";
export const LAST_UPDATED = "October 4, 2026";

export type AppRoute =
  | "/"
  | "/products"
  | "/products/liorandb"
  | "/products/lioran-bastion"
  | "/products/lioran-auth"
  | "/about"
  | "/mission"
  | "/engineering"
  | "/founder"
  | "/careers"
  | "/contact"
  | "/security"
  | "/status"
  | "/roadmap"
  | "/changelog"
  | "/brand"
  | "/privacy"
  | "/terms"
  | "/license"
  | "/sitemap";

export type Product = {
  slug: Extract<AppRoute, `/products${string}`>;
  name: string;
  category: string;
  status: "Active development" | "Architecture" | "Research" | "Pre-alpha live";
  summary: string;
  audience: string;
  capabilities: string[];
  detail: string;
  roadmap: string[];
};

export const ecosystemLinks = [
  { label: "Lioran Group", href: LIORAN_GROUP_URL },
  { label: "LDS", href: SITE_URL },
  { label: "LioranDB", href: LIORAN_DB_URL },
  { label: "Lioran S3", href: LIORAN_S3_URL },
  { label: "GitHub", href: GITHUB_ORG_URL },
  { label: "Discord", href: DISCORD_URL },
] as const;

export const products: Product[] = [
  {
    slug: "/products/liorandb",
    name: "LioranDB",
    category: "Database engine",
    status: "Active development",
    summary:
      "A Rust-based database system being built for backend services, SaaS products, and Indian software teams that need more control over their infrastructure choices.",
    audience: "Backend engineers, SaaS products, internal platforms, education",
    capabilities: [
      "Rust engine development",
      "Storage, indexing, and recovery work",
      "Developer-facing APIs",
      "Repository-led engineering and documentation",
    ],
    detail:
      "LioranDB is the flagship database product of LDS. The public positioning is product and engineering focused: a database system under active development, not a hosted dashboard wrapped around third-party infrastructure.",
    roadmap: [
      "Reliability testing",
      "Indexing improvements",
      "Recovery workflows",
      "Documentation and developer examples",
    ],
  },
  {
    slug: "/products/lioran-bastion",
    name: "LioranBastion (Lioran S3)",
    category: "Object storage infrastructure",
    status: "Pre-alpha live",
    summary:
      "High-performance object storage and media engine engineered in Rust with bounded-memory streaming, decoupled RocksDB metadata, and an official TypeScript driver.",
    audience: "Application teams, media pipelines, backend engineers, SaaS products, developer platforms",
    capabilities: [
      "Rust storage engine & bounded streaming (64 KiB–4 MiB buffers)",
      "Decoupled RocksDB metadata store for bucket configs, quotas & ETags",
      "Resumable parallel multipart uploads with SHA-256 & CRC32C verification",
      "5-stage atomic staging and promotion commit protocol",
      "HMAC-SHA256 expiring signed URLs and role-based access keys",
      "Official @liorans3/cli and TypeScript/JavaScript streaming driver",
    ],
    detail:
      "LioranBastion (also known as Lioran S3) was publicly launched in v1 pre-alpha on October 1, 2026 at liorans3.sbs. The next major milestone is the Alpha release scheduled for October 29, 2026.",
    roadmap: [
      "v1 pre-alpha public release (Launched October 1, 2026)",
      "Alpha release with expanded driver features (Planned October 29, 2026)",
      "S3 API compatibility layer extensions",
      "Cross-region replication & cluster topology",
    ],
  },
  {
    slug: "/products/lioran-auth",
    name: "Lioran Auth",
    category: "Authentication infrastructure",
    status: "Research",
    summary:
      "A future authentication and identity system intended to reduce reliance on fragmented external auth providers for Indian products.",
    audience: "SaaS teams, product engineers, internal tools",
    capabilities: [
      "Identity architecture planning",
      "Session and policy design",
      "Developer SDK considerations",
      "Security-first product research",
    ],
    detail:
      "Lioran Auth remains in the research phase. The site should frame it as a serious infrastructure direction under study, with intended scope and engineering priorities rather than launch marketing.",
    roadmap: [
      "Threat model definition",
      "Core identity architecture",
      "Developer API design",
      "Security and integration planning",
    ],
  },
] as const;

export const engineeringPrinciples = [
  {
    title: "Engineering first",
    description:
      "The public interface should reflect source code, architecture, testability, documentation, and implementation choices before it reflects marketing language.",
  },
  {
    title: "Honest scope",
    description:
      "Products in development are described as development work. Research is labeled as research. Unknowns stay visible.",
  },
  {
    title: "Operational clarity",
    description:
      "Infrastructure decisions affect reliability, cost, deployment, and data handling. LDS treats those trade-offs as core product work.",
  },
  {
    title: "Developer usability",
    description:
      "The products are intended for builders who need readable APIs, straightforward setup paths, and documentation they can trust.",
  },
  {
    title: "Security as baseline work",
    description:
      "Secure defaults, dependency hygiene, and responsible disclosure matter even before formal compliance programs exist.",
  },
  {
    title: "Domestic infrastructure alignment",
    description:
      "The mission is aligned with the broader objective of strengthening India’s domestic digital infrastructure without leaning on political messaging or unsupported claims.",
  },
] as const;

export const roadmapGroups = {
  Now: [
    "Lioran S3 (LioranBastion) v1 pre-alpha live hardening & CLI updates",
    "LioranDB Rust engine development",
    "Reliability testing and recovery work",
    "Indexing and storage improvements",
    "Developer APIs and documentation",
  ],
  Next: [
    "Lioran S3 Alpha release (Scheduled October 29, 2026)",
    "Early SaaS pilot exploration",
    "Migration tooling",
    "Observability and hardening",
    "Lioran Auth architecture",
  ],
  Later: [
    "Multi-node systems",
    "Replication and high availability",
    "Broader SDK support",
    "Regional infrastructure options inside India",
  ],
  Research: [
    "Distributed storage",
    "Object storage primitives",
    "Authentication infrastructure",
    "Deployment infrastructure",
    "Data-residency tooling",
  ],
} as const;

export const statusEntries = [
  {
    name: "LDS Website",
    status: "Manually maintained",
    notes: "Static site and contact workflows for the LDS public presence.",
    href: SITE_URL,
  },
  {
    name: "Lioran S3 (LioranBastion)",
    status: "v1 Pre-alpha live",
    notes: "High-performance object storage launched Oct 1, 2026; Alpha release planned Oct 29, 2026.",
    href: LIORAN_S3_URL,
  },
  {
    name: "LioranDB Website",
    status: "External product site",
    notes: "Separate product-facing presence for the LioranDB ecosystem.",
    href: LIORAN_DB_URL,
  },
  {
    name: "LioranDB Development",
    status: "Repository activity",
    notes: "Track public code and engineering direction through GitHub.",
    href: GITHUB_ORG_URL,
  },
  {
    name: "Discord Community",
    status: "Community access",
    notes: "Developer community and updates channel.",
    href: DISCORD_URL,
  },
  {
    name: "Lioran Auth",
    status: "Architecture and research",
    notes: "Authentication infrastructure product in active research.",
    href: `${SITE_URL}/roadmap`,
  },
] as const;

export const changelogEntries = [
  {
    date: "2026-10-01",
    product: "Lioran S3 (LioranBastion)",
    version: "v1.0-prealpha",
    summary: "Public launch of Lioran S3 v1 pre-alpha object storage.",
    details:
      "Lioran S3 (also known as LioranBastion) launched publicly on https://liorans3.sbs. Features Rust-based storage engine, bounded-memory streaming, decoupled RocksDB metadata, @liorans3/cli, TypeScript driver, and multipart uploads. Alpha release planned for October 29, 2026.",
    href: LIORAN_S3_URL,
  },
  {
    date: "2026-07-16",
    product: "LDS Website",
    version: WEBSITE_VERSION,
    summary: "Complete redesign of the public LDS website.",
    details:
      "Reframed the site around developer infrastructure, added required product and company pages, improved navigation and metadata, and removed unrelated agency-style positioning.",
    href: `${SITE_URL}/changelog`,
  },
] as const;

export const careers = [
  {
    title: "Full-Stack Developer Intern",
    focus: [
      "TypeScript",
      "React or Next.js",
      "Backend APIs",
      "Documentation",
      "Testing",
      "Accessibility",
      "Performance",
    ],
  },
  {
    title: "Rust Developer Intern",
    focus: [
      "Rust",
      "Storage engines",
      "Database internals",
      "WAL and recovery",
      "Indexes",
      "Benchmarks",
      "Profiling",
    ],
  },
  {
    title: "Developer Support Intern",
    focus: [
      "Documentation",
      "Issue reproduction",
      "GitHub issue triage",
      "Community support",
      "FAQ maintenance",
      "Technical communication",
    ],
  },
] as const;

export const founderHighlights = [
  "Founder and CTO of Lioran Developer Solutions and Founder of Lioran Group",
  "Builder focused on databases, backend systems, and developer products",
  "Public portfolio, GitHub profile, and ecosystem links available",
  "LDS and LioranDB work are presented as engineering-led efforts rather than personal branding projects",
] as const;

export const founderRecognition = [
  "Featured by Nagpur Post in May 2023",
  "Featured by Navarashtra, Chandrapur edition, in May 2023",
  "Featured by Tarun Bharat, Purva Vidarbha edition, in May 2023",
  "Crest Cyber Olympiad Western Region Rank 17",
  "Cyber Olympiad State Rank 1",
  "International Computer Olympiad State Rank 30",
  "International Mathematics Olympiad State Rank 30",
  "Participation in the 30th National Children's Science Congress",
  "Certificate of Excellence in Exam Pe Charcha 2023",
  "Listed in a public collection of active Indian GitHub contributors",
] as const;

export const humanSitemapLinks: { href: AppRoute; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/products/liorandb", label: "LioranDB" },
  { href: "/products/lioran-bastion", label: "LioranBastion (Lioran S3)" },
  { href: "/products/lioran-auth", label: "Lioran Auth" },
  { href: "/about", label: "About LDS" },
  { href: "/mission", label: "Mission" },
  { href: "/engineering", label: "Engineering" },
  { href: "/founder", label: "Founder" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/security", label: "Security" },
  { href: "/status", label: "Status" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/changelog", label: "Changelog" },
  { href: "/brand", label: "Brand" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/license", label: "License" },
  { href: "/sitemap", label: "Sitemap" },
] as const;

export const allRoutes = humanSitemapLinks.map((entry) => entry.href);

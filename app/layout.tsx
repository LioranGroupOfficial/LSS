import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lioransolutions.com"),
  title: {
    default: "Lioran Developer Solutions",
    template: "%s | Lioran",
  },
  description:
    "Build your backend with Lioran. LioranDB is a file-based database for Node.js. Coming soon: LioranBastion (S3-like storage) and Lioran Auth. TypeScript-first developer infrastructure.",
  keywords: [
    "Lioran",
    "LioranDB",
    "database",
    "Node.js",
    "TypeScript",
    "developer tools",
    "backend infrastructure",
    "file-based database",
    "S3 alternative",
    "authentication",
    "developer ecosystem",
    "Lioran Group",
  ],
  applicationName: "Lioran",
  category: "technology",
  authors: [{ name: "Lioran Group" }, { name: "Swaraj Puppalwar" }],
  creator: "Lioran Group",
  publisher: "Lioran Group",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Lioran Developer Solutions",
    description:
      "Build your backend with Lioran. LioranDB is live now. Complete developer infrastructure built by developers.",
    url: "https://lioransolutions.com",
    siteName: "Lioran Developer Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/LSS-smp.png",
        alt: "Lioran Developer Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lioran Developer Solutions",
    description:
      "LioranDB, LioranBastion, Lioran Auth. A complete developer ecosystem built by developers, for developers.",
    images: ["/LSS-smp.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

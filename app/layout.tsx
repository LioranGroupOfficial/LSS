import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lioransolutions.com"),
  title: {
    default: "Lioran Software Solutions",
    template: "%s | Lioran Software Solutions",
  },
  description:
    "Lioran Software Solutions builds custom websites, full-stack systems, and managed infrastructure for modern businesses.",
  keywords: [
    "Lioran Software Solutions",
    "Lioran Group",
    "software agency",
    "website development",
    "full-stack development",
    "frontend development",
    "backend development",
    "database architecture",
    "DevOps",
    "deployment",
    "hosting management",
    "technical support",
    "software company India",
  ],
  applicationName: "Lioran Software Solutions",
  category: "technology",
  authors: [{ name: "Lioran Software Solutions" }],
  creator: "Lioran Software Solutions",
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
    title: "Lioran Software Solutions",
    description:
      "Full-stack development, DevOps, hosting, and maintenance for businesses that need reliable digital systems.",
    url: "https://lioransolutions.com",
    siteName: "Lioran Software Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/LSS-smp.png",
        alt: "Lioran Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lioran Software Solutions",
    description:
      "Custom websites, full-stack systems, hosting, deployment, and ongoing maintenance by Lioran Software Solutions.",
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

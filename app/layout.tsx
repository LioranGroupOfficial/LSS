import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lioransolutions.com"),
  title: {
    default: "Lioran Developer Solutions",
    template: "%s | Lioran Developer Solutions",
  },
  description:
    "Build your backend with Lioran Developer Infrastructure. Lioran Developer Solutions is an India-based developer infrastructure company building LioranDB, managed database hosting, self-hosted licenses, and upcoming storage and auth products.",
  keywords: [
    "Lioran Developer Solutions",
    "LioranDB",
    "managed database hosting",
    "self-hosted database license",
    "developer infrastructure",
    "backend infrastructure",
    "Indian startup infrastructure",
    "database for startups",
    "object storage",
    "authentication",
    "Lioran Group",
  ],
  applicationName: "Lioran Developer Solutions",
  category: "technology",
  authors: [{ name: "Lioran Developer Solutions" }, { name: "Swaraj Puppalwar" }],
  creator: "Lioran Developer Solutions",
  publisher: "Lioran Developer Solutions",
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
      "India-based developer infrastructure for startups and developers. LioranDB, managed hosting, self-hosted licenses, and upcoming storage and auth products.",
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
      "LioranDB, managed database hosting, self-hosted licenses, and developer infrastructure built for startups.",
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

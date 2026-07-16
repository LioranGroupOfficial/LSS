import type { Metadata } from "next";
import "./globals.css";
import { SkipLink } from "./components/site-ui";
import {
  GITHUB_ORG_URL,
  LIORAN_GROUP_URL,
  SITE_URL,
  WEBSITE_VERSION,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lioran Developer Solutions | Indian Developer Infrastructure",
    template: "%s | Lioran Developer Solutions",
  },
  description:
    "Lioran Developer Solutions builds databases, storage systems, authentication infrastructure, and backend platforms in India.",
  applicationName: "Lioran Developer Solutions",
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lioran Developer Solutions | Indian Developer Infrastructure",
    description:
      "Lioran Developer Solutions builds databases, storage systems, authentication infrastructure, and backend platforms in India.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Lioran Developer Solutions",
    images: [
      {
        url: "/LSS-smp.png",
        width: 1200,
        height: 630,
        alt: "Lioran Developer Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lioran Developer Solutions | Indian Developer Infrastructure",
    description:
      "Lioran Developer Solutions builds databases, storage systems, authentication infrastructure, and backend platforms in India.",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lioran Developer Solutions",
    url: SITE_URL,
    parentOrganization: {
      "@type": "Organization",
      name: "Lioran Group",
      url: LIORAN_GROUP_URL,
    },
    sameAs: [GITHUB_ORG_URL, LIORAN_GROUP_URL],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lioran Developer Solutions",
    url: SITE_URL,
    description:
      "Developer infrastructure, built in India. LDS develops database and backend infrastructure products.",
  };

  return (
    <html lang="en">
      <body>
        <SkipLink />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/json"
          id="lds-site-version"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ version: WEBSITE_VERSION }) }}
        />
      </body>
    </html>
  );
}

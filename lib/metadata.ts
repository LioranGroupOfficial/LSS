import type { Metadata } from "next";
import {
  FOUNDER_X_URL,
  LAST_UPDATED,
  SITE_URL,
  WEBSITE_VERSION,
} from "./site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Lioran Developer Solutions",
      locale: "en_US",
      type: "website",
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
      title,
      description,
      creator: "@PuppalwarSwaraj",
      site: FOUNDER_X_URL,
      images: ["/LSS-smp.png"],
    },
    other: {
      "x-last-updated": LAST_UPDATED,
      "x-website-version": WEBSITE_VERSION,
    },
  };
}

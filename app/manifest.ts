import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lioran Developer Solutions",
    short_name: "LDS",
    description:
      "Developer infrastructure, built in India. LDS develops databases and backend infrastructure products.",
    start_url: "/",
    display: "standalone",
    background_color: "#222831",
    theme_color: "#222831",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

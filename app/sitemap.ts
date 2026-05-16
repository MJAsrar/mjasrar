import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/data";

const BASE_URL = "https://mjasrar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolEntries = TOOLS.map((t) => ({
    url: `${BASE_URL}/${t.urlCat}/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/changelog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...toolEntries,
  ];
}

import type { MetadataRoute } from "next";
import { COMPANY, WORK } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${COMPANY.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("", 1),
    page("/services", 0.9),
    page("/work", 0.8),
    ...WORK.map((w) => page(`/work/${w.slug}`, 0.7)),
    page("/about", 0.6),
    page("/contact", 0.8),
  ];
}

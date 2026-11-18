import type { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";
import { SITE_URL } from "@/lib/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/work`, changeFrequency: "monthly", priority: 0.8 },
    ...allPosts.map((p) => ({
      url: `${SITE_URL}/work/${p.slugAsParams}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

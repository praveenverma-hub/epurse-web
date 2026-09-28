import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/privacy", "/security", "/terms", "/delete-account"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(path => ({
    url: `https://epurse.co.in${path}`,
    changeFrequency: path ? "yearly" : "monthly",
    priority: path ? 0.5 : 1,
  }));
}

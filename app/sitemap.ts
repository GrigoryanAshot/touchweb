import type { MetadataRoute } from "next";
import { ROUTES, hreflangLanguages, locales, localizedUrl } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01");

  return ROUTES.flatMap((route) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: hreflangLanguages(route.path),
      },
    })),
  );
}

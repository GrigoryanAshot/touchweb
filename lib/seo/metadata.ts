import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, marketKeywords } from "@/lib/seo/content";
import {
  LOGO,
  SITE_NAME,
  SITE_URL,
  getRoute,
  hreflangLanguages,
  isLocale,
  localizedUrl,
  ogLocales,
  type Locale,
} from "@/lib/seo/site";

export type LangParams = { params: Promise<{ lang: string }> };

export function assertLocale(lang: string): Locale {
  if (!isLocale(lang)) notFound();
  return lang;
}

export function buildPageMetadata(locale: Locale, path: string): Metadata {
  const route = getRoute(path);
  const copy = getContent(locale);
  const page = copy.pages[route.key];
  const canonical = localizedUrl(locale, path);
  const languages = hreflangLanguages(path);
  const keywords = [...marketKeywords[locale], ...page.keywords];

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: page.title,
      description: page.description,
      siteName: SITE_NAME,
      locale: ogLocales[locale],
      alternateLocale: (Object.keys(ogLocales) as Locale[])
        .filter((item) => item !== locale)
        .map((item) => ogLocales[item]),
      images: [
        {
          url: LOGO.src,
          width: LOGO.width,
          height: LOGO.height,
          alt: LOGO.alt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
      images: [LOGO.src],
    },
    other: {
      "content-language": locale,
    },
  };
}

export function metadataFor(path: string) {
  return async function generateMetadata({ params }: LangParams): Promise<Metadata> {
    const { lang } = await params;
    return buildPageMetadata(assertLocale(lang), path);
  };
}

export function localeMetadata(locale: Locale): Metadata {
  const home = buildPageMetadata(locale, "");
  return {
    ...home,
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: { index: true, follow: true },
  };
}

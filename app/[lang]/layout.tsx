import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { armenian, sans } from "@/lib/fonts";
import { assertLocale, localeMetadata, type LangParams } from "@/lib/seo/metadata";
import { buildAgencyGraph } from "@/lib/seo/schema";
import { locales } from "@/lib/seo/site";
import "../globals.css";

export const dynamicParams = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161616",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await params;
  return localeMetadata(assertLocale(lang));
}

export default async function LanguageLayout({
  children,
  params,
}: LangParams & { children: React.ReactNode }) {
  const { lang } = await params;
  const locale = assertLocale(lang);

  return (
    <html lang={locale} className={`${sans.variable} ${armenian.variable}`}>
      <body>
        <SiteHeader locale={locale} />
        <main id="content">{children}</main>
        <SiteFooter locale={locale} />
        <JsonLd data={buildAgencyGraph(locale)} />
      </body>
    </html>
  );
}

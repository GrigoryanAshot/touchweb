"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localizedPath, splitLocale, type Locale } from "@/lib/seo/site";

const labels: Record<Locale, string> = {
  hy: "Հայ",
  ru: "РУ",
  en: "EN",
};

export function LanguageSwitcher({ label }: { label: string }) {
  const pathname = usePathname() || "/hy";
  const { path } = splitLocale(pathname);

  return (
    <ul className="lang-switch" aria-label={label}>
      {locales.map((locale) => {
        const href = localizedPath(locale, path);
        const active = pathname === href;
        return (
          <li key={locale}>
            <Link href={href} hrefLang={locale} lang={locale} aria-current={active ? "page" : undefined}>
              {labels[locale]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

import Link from "next/link";
import { OptimizedImage } from "@/components/media/OptimizedImage";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { getContent } from "@/lib/seo/content";
import { LOGO, localizedPath, type Locale } from "@/lib/seo/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = getContent(locale);
  const homeLabel = { hy: "Գլխավոր", ru: "Главная", en: "Home" }[locale];
  const links = [
    { href: localizedPath(locale), label: homeLabel },
    { href: localizedPath(locale, "services/web-development"), label: copy.services[0].name },
    { href: localizedPath(locale, "services/ecommerce"), label: copy.services[1].name },
    { href: localizedPath(locale, "services/seo-optimization"), label: copy.services[3].name },
    { href: localizedPath(locale, "portfolio"), label: copy.pages.portfolio.h1 },
  ];

  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link href={localizedPath(locale)} className="brand">
          <OptimizedImage
            src={LOGO.src}
            alt={LOGO.alt}
            width={349}
            height={266}
            className="brand-logo"
            sizes="140px"
          />
          <span>Touch Web Agency</span>
        </Link>
        <nav aria-label={copy.navLabel}>
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher label={copy.languageLabel} />
      </div>
    </header>
  );
}

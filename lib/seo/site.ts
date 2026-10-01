export const SITE_URL = "https://touchweb.am";
export const SITE_NAME = "Touch Web Agency";
export const CONTACT_EMAIL = "touchwebagency@gmail.com";
export const CONTACT_PHONE = "+37495147963";
export const CONTACT_PHONE_DISPLAY = "+374 95 147963";

export const locales = ["hy", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "hy";

export const ogLocales: Record<Locale, string> = {
  hy: "hy_AM",
  ru: "ru_RU",
  en: "en_US",
};

export const LOGO = {
  src: "/images/logo3.png",
  width: 698,
  height: 532,
  alt: SITE_NAME,
} as const;

export type RouteKey = "home" | "webDevelopment" | "ecommerce" | "seo" | "portfolio";

export type RouteDef = {
  path: string;
  key: RouteKey;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export const ROUTES: readonly RouteDef[] = [
  { path: "", key: "home", changeFrequency: "weekly", priority: 1 },
  { path: "services/web-development", key: "webDevelopment", changeFrequency: "monthly", priority: 0.9 },
  { path: "services/ecommerce", key: "ecommerce", changeFrequency: "monthly", priority: 0.9 },
  { path: "services/seo-optimization", key: "seo", changeFrequency: "monthly", priority: 0.8 },
  { path: "portfolio", key: "portfolio", changeFrequency: "weekly", priority: 0.8 },
];

export const INDEXABLE_PATHS = new Set(ROUTES.map((route) => route.path));

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = ""): string {
  const [pathname, hash] = path.split("#");
  const suffix = pathname ? `/${pathname}` : "";
  const hashSuffix = hash ? `#${hash}` : "";
  return `/${locale}${suffix}${hashSuffix}`;
}

export function localizedUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

export function hreflangLanguages(path = ""): Record<string, string> {
  return {
    hy: localizedUrl("hy", path),
    ru: localizedUrl("ru", path),
    en: localizedUrl("en", path),
    "x-default": localizedUrl(defaultLocale, path),
  };
}

export function splitLocale(pathname: string): { locale: Locale | null; path: string } {
  const parts = pathname.split("/").filter(Boolean);
  const maybe = parts[0];
  if (isLocale(maybe)) {
    return { locale: maybe, path: parts.slice(1).join("/") };
  }
  return { locale: null, path: parts.join("/") };
}

export function getRoute(path: string): RouteDef {
  const route = ROUTES.find((item) => item.path === path);
  if (!route) {
    throw new Error(`Unknown route: ${path}`);
  }
  return route;
}

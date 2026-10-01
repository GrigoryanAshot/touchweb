import { NextResponse, type NextRequest } from "next/server";

const locales = ["hy", "ru", "en"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "hy";

const indexablePaths = new Set([
  "",
  "services/web-development",
  "services/ecommerce",
  "services/seo-optimization",
  "portfolio",
]);

function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

function splitLocale(pathname: string): { locale: Locale | null; path: string } {
  const parts = pathname.split("/").filter(Boolean);
  const maybe = parts[0];
  if (isLocale(maybe)) {
    return { locale: maybe, path: parts.slice(1).join("/") };
  }
  return { locale: null, path: parts.join("/") };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { locale, path } = splitLocale(pathname);

  if (!locale) {
    if (pathname === "/" || indexablePaths.has(path)) {
      const url = request.nextUrl.clone();
      url.pathname = path ? `/${defaultLocale}/${path}` : `/${defaultLocale}`;
      return NextResponse.redirect(url, 301);
    }
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-pathname", pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|.*\\..*).*)"],
};

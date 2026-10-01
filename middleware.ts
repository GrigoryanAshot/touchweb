import { NextResponse, type NextRequest } from "next/server";
import { INDEXABLE_PATHS, defaultLocale, isLocale, splitLocale } from "@/lib/seo/site";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { locale, path } = splitLocale(pathname);

  if (!locale) {
    if (pathname === "/" || INDEXABLE_PATHS.has(path)) {
      const url = request.nextUrl.clone();
      url.pathname = path ? `/${defaultLocale}/${path}` : `/${defaultLocale}`;
      return NextResponse.redirect(url, 301);
    }
    return NextResponse.next();
  }

  if (!isLocale(locale)) {
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

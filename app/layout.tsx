import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Sans_Armenian } from "next/font/google";
import { headers } from "next/headers";
import { isLocale } from "@/lib/seo/site";
import "./globals.css";

const sans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const armenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-hy",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://touchweb.am"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161616",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerList = await headers();
  const requested = headerList.get("x-locale");
  const lang = isLocale(requested) ? requested : "hy";

  return (
    <html lang={lang} className={`${sans.variable} ${armenian.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import { Noto_Sans, Noto_Sans_Armenian } from "next/font/google";

export const sans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const armenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-hy",
});

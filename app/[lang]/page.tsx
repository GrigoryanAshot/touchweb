import { MarketingPage } from "@/components/site/MarketingPage";
import { assertLocale, metadataFor, type LangParams } from "@/lib/seo/metadata";

export const generateMetadata = metadataFor("");

export default async function HomePage({ params }: LangParams) {
  const { lang } = await params;
  return <MarketingPage locale={assertLocale(lang)} path="" />;
}

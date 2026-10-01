import { MarketingPage } from "@/components/site/MarketingPage";
import { assertLocale, metadataFor, type LangParams } from "@/lib/seo/metadata";

const path = "services/seo-optimization";

export const generateMetadata = metadataFor(path);

export default async function SeoPage({ params }: LangParams) {
  const { lang } = await params;
  return <MarketingPage locale={assertLocale(lang)} path={path} />;
}

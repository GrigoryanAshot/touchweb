import { MarketingPage } from "@/components/site/MarketingPage";
import { assertLocale, metadataFor, type LangParams } from "@/lib/seo/metadata";

const path = "portfolio";

export const generateMetadata = metadataFor(path);

export default async function PortfolioPage({ params }: LangParams) {
  const { lang } = await params;
  return <MarketingPage locale={assertLocale(lang)} path={path} />;
}

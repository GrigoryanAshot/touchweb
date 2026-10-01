import { MarketingPage } from "@/components/site/MarketingPage";
import { assertLocale, metadataFor, type LangParams } from "@/lib/seo/metadata";

const path = "services/ecommerce";

export const generateMetadata = metadataFor(path);

export default async function EcommercePage({ params }: LangParams) {
  const { lang } = await params;
  return <MarketingPage locale={assertLocale(lang)} path={path} />;
}

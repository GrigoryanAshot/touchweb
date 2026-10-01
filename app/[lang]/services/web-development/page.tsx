import { MarketingPage } from "@/components/site/MarketingPage";
import { assertLocale, metadataFor, type LangParams } from "@/lib/seo/metadata";

const path = "services/web-development";

export const generateMetadata = metadataFor(path);

export default async function WebDevelopmentPage({ params }: LangParams) {
  const { lang } = await params;
  return <MarketingPage locale={assertLocale(lang)} path={path} />;
}

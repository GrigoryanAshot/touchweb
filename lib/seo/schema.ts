import { getContent, type FaqItem } from "@/lib/seo/content";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LOGO,
  SITE_NAME,
  SITE_URL,
  localizedUrl,
  type Locale,
} from "@/lib/seo/site";

const BUSINESS_ID = `${SITE_URL}/#business`;

export function buildProfessionalService() {
  return {
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${LOGO.src}`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${LOGO.src}`,
      width: LOGO.width,
      height: LOGO.height,
    },
    priceRange: "$$",
    currenciesAccepted: "AMD",
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yerevan",
      addressRegion: "AM",
      addressCountry: "AM",
    },
    areaServed: [
      { "@type": "City", name: "Yerevan" },
      { "@type": "Country", name: "Armenia" },
    ],
    knowsLanguage: ["hy", "ru", "en"],
    sameAs: [
      "https://www.facebook.com/touchwebagency",
      "https://www.linkedin.com/company/touchwebagency",
      "https://www.instagram.com/touchwebagency",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AMD",
      lowPrice: "50000",
      highPrice: "450000",
    },
  };
}

export function buildServices(locale: Locale) {
  const { services } = getContent(locale);
  return services.map((service) => ({
    "@type": "Service",
    "@id": `${localizedUrl(locale, service.path)}#service`,
    name: service.name,
    description: service.description,
    serviceType: service.name,
    url: localizedUrl(locale, service.path),
    inLanguage: locale,
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Yerevan" },
      { "@type": "Country", name: "Armenia" },
    ],
    ...(service.alternateName ? { alternateName: service.alternateName } : {}),
  }));
}

export function buildFaqPage(locale: Locale, path: string, faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${localizedUrl(locale, path)}#faq`,
    inLanguage: locale,
    url: localizedUrl(locale, path),
    isPartOf: { "@id": BUSINESS_ID },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildAgencyGraph(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [buildProfessionalService(), ...buildServices(locale)],
  };
}

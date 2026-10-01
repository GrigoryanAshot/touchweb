import { buildAgencyGraph, buildFaqPage, buildProfessionalService, buildServices } from "@/lib/seo/schema";

type JsonLdValue = object | object[];

function serialize(data: JsonLdValue) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : data;
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
    />
  );
}

export { buildAgencyGraph, buildFaqPage, buildProfessionalService, buildServices };

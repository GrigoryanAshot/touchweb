import Link from "next/link";
import { getContent } from "@/lib/seo/content";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  localizedPath,
  type Locale,
} from "@/lib/seo/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getContent(locale);

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.footerBlurb}</p>
          <p>Yerevan, Armenia</p>
        </div>
        <div>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <p>
            <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
          </p>
        </div>
        <ul className="footer-links">
          {copy.services.map((service) => (
            <li key={service.key}>
              <Link href={localizedPath(locale, service.path)}>{service.name}</Link>
            </li>
          ))}
          <li>
            <Link href={localizedPath(locale, "portfolio")}>{copy.pages.portfolio.h1}</Link>
          </li>
        </ul>
      </div>
      <p className="container rights">{copy.rights}</p>
    </footer>
  );
}

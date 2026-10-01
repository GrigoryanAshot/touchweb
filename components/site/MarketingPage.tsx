import Link from "next/link";
import { OptimizedImage } from "@/components/media/OptimizedImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/site/FaqList";
import { getContent, getProjects } from "@/lib/seo/content";
import { buildFaqPage } from "@/lib/seo/schema";
import { CONTACT_EMAIL, LOGO, getRoute, localizedPath, type Locale } from "@/lib/seo/site";

export function MarketingPage({ locale, path }: { locale: Locale; path: string }) {
  const route = getRoute(path);
  const copy = getContent(locale);
  const page = copy.pages[route.key];
  const projects = getProjects();

  return (
    <article>
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="lead">{page.lead}</p>
            <a className="button" href={`mailto:${CONTACT_EMAIL}`}>
              {copy.cta}
            </a>
          </div>
          {route.key === "home" ? (
            <OptimizedImage
              src={LOGO.src}
              alt={LOGO.alt}
              width={LOGO.width}
              height={LOGO.height}
              priority
              className="hero-logo"
              sizes="(max-width: 720px) 80vw, 360px"
            />
          ) : null}
        </div>
      </header>

      {route.key === "home" ? (
        <section className="container card-grid" aria-label={copy.services[0].name}>
          {copy.services.map((service) => (
            <Link key={service.key} className="card" href={localizedPath(locale, service.path)}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </Link>
          ))}
        </section>
      ) : null}

      {route.key === "portfolio" ? (
        <section className="container card-grid">
          {projects.map((project) => (
            <article key={project.name} className="card">
              <h2>{project.name}</h2>
              <p>{copy.status[project.status]}</p>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.url.replace("https://", "")}
                </a>
              ) : null}
            </article>
          ))}
        </section>
      ) : null}

      <section className="container point-list">
        {page.points.map((point) => (
          <article key={point.title} id={point.id}>
            <h2>{point.title}</h2>
            <p>{point.text}</p>
          </article>
        ))}
      </section>

      <div className="container">
        <FaqList title={copy.faqTitle} items={page.faqs} />
      </div>
      <JsonLd data={buildFaqPage(locale, path, page.faqs)} />
    </article>
  );
}

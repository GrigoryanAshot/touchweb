import type { FaqItem } from "@/lib/seo/content";

export function FaqList({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading">{title}</h2>
      <div className="faq-list">
        {items.map((item) => (
          <article key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { areaPages, contact } from '@/data/site';

export function generateStaticParams() {
  return Object.keys(areaPages).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = areaPages[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/areas/${slug}` },
    openGraph: { title: page.title, description: page.description, url: `/areas/${slug}` },
  };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const page = areaPages[slug];
  if (!page) notFound();
  const city = page.title.match(/in ([^,]+)/)?.[1] || 'Spring Hill';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    description: page.description,
    url: `https://volperenovations.com/areas/${slug}`,
    provider: { '@type': 'HomeAndConstructionBusiness', name: 'Volpe Renovations Co.', telephone: '+1-813-650-6706', url: 'https://volperenovations.com/' },
    areaServed: { '@type': 'City', name: city },
  };
  return (
    <main className="inner-main" id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="inner-hero">
        <picture className="inner-hero__bg" aria-hidden="true">
          <img src="/assets/services/full-gallery-2.webp" width="960" height="640" alt="" fetchPriority="high" />
        </picture>
        <div className="inner-hero__wash" />
        <div className="container">
          <div className="inner-hero__single">
            <p className="eyebrow eyebrow--light">{page.eyebrow}</p>
            <h1>{city} renovations with <em>lasting craft.</em></h1>
            <p>{page.intro}</p>
            <a className="button button--accent" href={contact.smsHref}>Request a free estimate →</a>
          </div>
        </div>
      </section>
      <section className="inner-content">
        <div className="container inner-grid">
          <article className="article-copy">
            <p className="eyebrow">Renovations in {city}</p>
            <h2>Spaces designed for how you actually live.</h2>
            <p>{page.intro}</p>
            <p>From custom kitchen islands and walk-in tile showers to whole-home flooring and layout updates, we bring transparent communication to every stage.</p>
            <h3>Communities we serve nearby</h3>
            <ul className="check-grid">{page.areas.map(area => <li key={area}>{area}</li>)}</ul>
            <div className="service-note">
              <strong>Not sure whether we cover your neighborhood?</strong>
              <p>Call or include your address in the estimate form and we will confirm availability right away.</p>
            </div>
          </article>
          <aside className="side-quote">
            <h2>Get your free estimate</h2>
            <p>Tell us about your {city} home.</p>
            <ul>
              <li><strong>Call or text:</strong> {contact.phone}</li>
              <li><strong>Email:</strong> {contact.email}</li>
              <li><strong>Area:</strong> {city} &amp; nearby</li>
            </ul>
            <a className="button button--accent" href={contact.smsHref}>Start my estimate →</a>
            <a href={contact.phoneHref}>Call {contact.phone}</a>
          </aside>
        </div>
      </section>
      <section className="inner-cta">
        <div className="container inner-cta__grid">
          <div>
            <h2>Ready to start your project?</h2>
            <p>Request a personalized renovation estimate in {city}.</p>
          </div>
          <a className="button button--accent" href={contact.smsHref}>Get a free estimate →</a>
        </div>
      </section>
    </main>
  );
}

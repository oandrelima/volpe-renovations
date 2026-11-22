import Link from 'next/link';
import { notFound } from 'next/navigation';
import { contact, servicePages } from '@/data/site';

export function generateStaticParams() {
  return Object.keys(servicePages).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: page.title, description: page.description, url: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) notFound();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    description: page.description,
    url: `https://volperenovations.com/services/${slug}`,
    provider: { '@type': 'HomeAndConstructionBusiness', name: 'Volpe Renovations Co.', telephone: '+1-813-650-6706', url: 'https://volperenovations.com/' },
    areaServed: ['Hillsborough County', 'Hernando County', 'Pasco County', 'Pinellas County'].map(name => ({ '@type': 'AdministrativeArea', name })),
  };
  return (
    <main className="inner-main" id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="inner-hero">
        {page.gallery?.[0] && (
          <picture className="inner-hero__bg" aria-hidden="true">
            <img src={page.gallery[0].src} width="960" height="640" alt="" fetchPriority="high" />
          </picture>
        )}
        <div className="inner-hero__wash" />
        <div className="container">
          <div className="inner-hero__single">
            <p className="eyebrow eyebrow--light">{page.eyebrow}</p>
            <h1>{page.shortTitle}.</h1>
            <p>{page.intro}</p>
            <a className="button button--accent" href={contact.smsHref}>Request a free estimate →</a>
          </div>
        </div>
      </section>

      <section className="inner-content">
        <div className="container inner-grid">
          <article className="article-copy">
            <p className="eyebrow">Scope &amp; Craft</p>
            <h2>From plan to <em>final detail.</em></h2>
            <p>{page.details}</p>
            <h3>What is included</h3>
            <ul className="check-grid">{page.bullets.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
          <aside className="side-quote">
            <h2>Request an estimate</h2>
            <p>Share your timeline and project goals with our team.</p>
            <ul>
              <li><strong>Text or WhatsApp:</strong> {contact.phone}</li>
              <li><strong>Email:</strong> {contact.email}</li>
              <li><strong>Area:</strong> {contact.location} &amp; nearby</li>
            </ul>
            <a className="button button--accent" href={contact.smsHref}>Start my estimate →</a>
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
          </aside>
        </div>
      </section>

      {page.gallery?.length > 0 && (
        <section className="section work-gallery" aria-labelledby="gallery-title">
          <div className="container">
            <div className="work-gallery__head" data-reveal="up">
              <p className="eyebrow">Recent projects</p>
              <h2 id="gallery-title">Craftsmanship <em>in detail.</em></h2>
            </div>
            <div className="work-gallery__grid">
              {page.gallery.map((photo, index) => (
                <figure
                  className={`work-gallery__item${index === 0 ? ' work-gallery__item--lead' : ''}`}
                  key={photo.src}
                  data-reveal="up"
                  data-delay={String(index + 1)}
                >
                  <img src={photo.src} width="1200" height="900" alt={photo.alt} loading="lazy" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="inner-cta">
        <div className="container inner-cta__grid">
          <div className="inner-cta__copy">
            <p className="eyebrow eyebrow--light">Start your project</p>
            <h2>Let&apos;s plan your <em>{page.shortTitle.toLowerCase()}.</em></h2>
            <p>Schedule an on-site walkthrough in the Tampa Bay area and receive a clear, itemized estimate.</p>
          </div>
          <div className="inner-cta__actions">
            <a className="button button--accent" href={contact.smsHref}>Get a free estimate →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

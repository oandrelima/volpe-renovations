import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';
import { contact, services } from '@/data/site';

export const metadata = {
  title: 'Renovation Services in Tampa Bay, FL',
  description: 'Kitchens, bathrooms, tile, flooring, and interior renovations across the Tampa Bay area by Volpe Renovations Co.',
  alternates: { canonical: '/services' },
};

export default function ServicesOverviewPage() {
  return (
    <main className="inner-main" id="main">
      <section className="inner-hero">
        <picture className="inner-hero__bg" aria-hidden="true">
          <img src="/assets/services/bathroom-preview.webp" width="960" height="640" alt="" fetchPriority="high" />
        </picture>
        <div className="inner-hero__wash" />
        <div className="container">
          <div className="inner-hero__single">
            <p className="eyebrow eyebrow--light">Renovation Services</p>
            <h1>Seven specialized services,<br /><em>crafted to last.</em></h1>
            <p>
              From complete bathroom remodeling—our signature service—to kitchens, tile &amp; flooring, interior painting, drywall finishes, backsplashes, and custom accent walls.
            </p>
            <a className="button button--accent" href={contact.smsHref}>Request a free estimate →</a>
          </div>
        </div>
      </section>

      <section className="section services-showcase">
        <div className="container">
          <div className="showcase-list">
            {services.map((service, index) => (
              <article
                className={`showcase-row${index % 2 === 1 ? ' showcase-row--reverse' : ''}`}
                key={service.number}
                data-reveal="up"
              >
                <div className="showcase-row__media">
                  <img src={service.image} width="1200" height="825" alt={service.imageAlt} loading="lazy" />
                  <span className="showcase-row__badge">{service.number}</span>
                </div>
                <div className="showcase-row__content">
                  <div className="service-icon"><ServiceIcon slug={service.iconKey} /></div>
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                  <ul className="showcase-row__list">
                    {service.highlights.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="showcase-row__actions">
                    <Link className="button button--dark" href={service.href}>
                      View {service.title.toLowerCase()} details <span>→</span>
                    </Link>
                    <Link className="text-link" href="/contact">Book a walkthrough →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="container inner-cta__grid">
          <div className="inner-cta__copy">
            <p className="eyebrow eyebrow--light">Start your project</p>
            <h2>Planning a <em>remodel?</em></h2>
            <p>Text or WhatsApp {contact.phone} to schedule an on-site walkthrough in the Tampa Bay area.</p>
          </div>
          <div className="inner-cta__actions">
            <a className="button button--accent" href={contact.smsHref}>Get a free estimate →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

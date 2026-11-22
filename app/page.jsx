import Link from 'next/link';
import Faq from '@/components/Faq';
import MapSection from '@/components/MapSection';
import ServiceIcon from '@/components/ServiceIcon';
import ContactIcon from '@/components/ContactIcon';
import HeroCarousel from '@/components/HeroCarousel';
import { contact, faqs, services, social } from '@/data/site';

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': 'https://volperenovations.com/#website', url: 'https://volperenovations.com/', name: 'Volpe Renovations Co.', inLanguage: 'en-US' },
    {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': 'https://volperenovations.com/#business',
      name: 'Volpe Renovations Co.',
      url: 'https://volperenovations.com/',
      telephone: '+1-813-650-6706',
      email: 'groupvolpe@gmail.com',
      image: 'https://volperenovations.com/assets/brand/volpe-team.jpg',
      logo: 'https://volperenovations.com/assets/brand/volpe-logo.png',
      slogan: 'Kitchens • Bathrooms • Full Renovations',
      sameAs: [social.instagram, social.facebook],
      address: { '@type': 'PostalAddress', addressLocality: 'Tampa Bay', addressRegion: 'FL', addressCountry: 'US' },
      geo: { '@type': 'GeoCoordinates', latitude: 28.0395, longitude: -82.4584 },
      areaServed: [
        ...['Hillsborough County', 'Hernando County', 'Pasco County', 'Pinellas County'].map(name => ({ '@type': 'AdministrativeArea', name })),
        ...['Tampa', 'Spring Hill', 'Brandon', 'Riverview', 'Wesley Chapel', 'Brooksville', 'Weeki Wachee', 'Land O\' Lakes'].map(name => ({ '@type': 'City', name })),
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Renovation services',
        itemListElement: services.map(service => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.title } })),
      },
    },
    { '@type': 'FAQPage', mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
  ],
};

function GoogleMark() {
  return (
    <svg className="google-mark" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.6-5.6C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.6-5.6C34 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7Z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      <section className="hero" aria-labelledby="hero-title">
        <HeroCarousel />
        <div className="hero__wash" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light hero__service-area">
              <span>Volpe Renovations Co.</span>
            </p>
            <h1 id="hero-title">
              Thoughtful renovations<br />
              across Tampa Bay,<br />
              <em>built to last.</em>
            </h1>
            <p className="hero__lede">
              Custom kitchens, modern bathrooms, and complete home renovations—built with honest craft and clear timelines.
            </p>
            <div className="hero__actions">
              <a className="button button--accent" href={contact.smsHref}>Get my free estimate <span>→</span></a>
              <a className="text-link text-link--light" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                <span className="icon-circle"><ContactIcon type="phone" /></span>
                <span><small>Text or WhatsApp</small>{contact.phone}</span>
              </a>
            </div>
            <ul className="hero__proof">
              <li className="hero__proof-google">
                <a href={social.googleReviews} target="_blank" rel="noopener noreferrer" aria-label="5★ Client rated — see Volpe Renovations Co. reviews on Google">
                  <GoogleMark />
                  <span>5★<small>Client rated</small></span>
                </a>
              </li>
              <li><span>Since 2019</span> remodeling craft</li>
              <li><span>Local</span> Tampa Bay area team</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our promise">
        <div className="container trust-strip__inner">
          <p className="script-note" data-reveal="up">Craftsmanship you can see. Service you can trust.</p>
          <div className="trust-item trust-item--featured" data-reveal="up" data-delay="1">
            <span className="trust-symbol">✦</span>
            <span><strong>Bathrooms &amp; Kitchens</strong>Signature remodels built to last.</span>
          </div>
          <div className="trust-item" data-reveal="up" data-delay="2">
            <span className="trust-symbol">✓</span>
            <span><strong>Tile, Drywall &amp; Paint</strong>Seamless finishes in every room.</span>
          </div>
          <div className="trust-item" data-reveal="up" data-delay="3">
            <span className="trust-symbol">◇</span>
            <span><strong>Transparent Estimates</strong>Clear scope before work begins.</span>
          </div>
        </div>
      </section>

      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading section-heading--split" data-reveal="up">
            <div>
              <p className="eyebrow">What we build</p>
              <h2 id="services-title">Complete bathrooms first.<br /><em>Seven ways we transform your home.</em></h2>
            </div>
            <p>From our signature bathroom remodels and custom kitchens to flooring, drywall, painting, backsplashes, and accent walls.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <Link
                href={service.href}
                prefetch={false}
                className={`service-card${service.featured ? ' service-card--featured' : ''}`}
                key={service.number}
                data-reveal="up"
                data-delay={String((index % 3) + 1)}
              >
                <div className="service-card__media">
                  <img src={service.image} width="1200" height="750" alt={service.imageAlt} loading="lazy" />
                  <span className="service-card__number">{service.number}</span>
                </div>
                <div className="service-card__body">
                  <div className="service-icon"><ServiceIcon slug={service.iconKey} /></div>
                  {service.tag && <span className="service-card__tag">{service.tag}</span>}
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-card__cta">Explore service <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
          <p className="services__note" data-reveal="up">
            Want a closer look at our scope? <Link href="/services/" prefetch={false}>View all 7 services →</Link>
          </p>
        </div>
      </section>

      <section className="section process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading section-heading--center" data-reveal="up">
            <p className="eyebrow">Simple from the start</p>
            <h2 id="process-title">Your renovation in <em>3 clear steps.</em></h2>
            <p>No guesswork, no hidden surprises — just steady communication from first call to final walkthrough.</p>
          </div>
          <div className="process-grid">
            {[
              ['1', 'Share your vision', 'Tell us about your kitchen, bathroom, or full renovation goals in our quick estimate form.'],
              ['2', 'On-site walkthrough & plan', 'We visit your Tampa Bay home, take measurements, and deliver a clear, itemized proposal.'],
              ['3', 'Craft & final walkthrough', 'Our team builds with precision, keeps your site clean, and walks every detail with you.'],
            ].map((step, index) => (
              <div key={step[0]} className="process-fragment">
                <article className="process-step" data-reveal="up" data-delay={String(index + 1)}>
                  <span className="process-step__number">{step[0]}</span>
                  <div className="process-step__icon">{index === 0 ? '☷' : index === 1 ? '✓' : '✦'}</div>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </article>
                {index < 2 && <div className="process-line"><span /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section area" id="areas" aria-labelledby="area-title">
        <div className="container area__grid">
          <div className="area__copy" data-reveal="up">
            <p className="eyebrow eyebrow--light">Proudly local</p>
            <h2 id="area-title">Tampa Bay area.<br /><em>Serving four counties.</em></h2>
            <p>Serving homeowners across Hillsborough, Hernando, Pasco, and Pinellas Counties. If you do not see your city listed, reach out — we are happy to check availability.</p>
            <div className="location-pills">
              <strong>Hillsborough County</strong>
              <strong>Hernando County</strong>
              <strong>Pasco County</strong>
              <strong>Pinellas County</strong>
              <Link href="/areas/spring-hill-renovations/" prefetch={false}>Spring Hill</Link>
              <Link href="/areas/brooksville-weeki-wachee-renovations/" prefetch={false}>Brooksville &amp; Weeki Wachee</Link>
              {['Tampa', 'Brandon', 'Riverview', 'Wesley Chapel', 'Land O\' Lakes', 'Clearwater'].map(area => <span key={area}>{area}</span>)}
            </div>
            <a className="text-link text-link--light" href={contact.phoneHref}>Check availability for your home <span>→</span></a>
          </div>
          <div className="area__map"><MapSection /></div>
        </div>
      </section>

      <Faq />

      <section className="section difference difference--closing" id="why-us" aria-labelledby="difference-title">
        <div className="container difference__grid">
          <div className="difference__visual" data-reveal="up">
            <div className="team-photo-card">
              <img
                src="/assets/brand/volpe-team.jpg"
                width="900"
                height="1125"
                alt="The Volpe Renovations Co. team"
                loading="lazy"
              />
              <div className="team-photo-card__caption">
                <div>
                  <strong>Volpe Renovations Co.</strong>
                  <span>Tampa Bay, FL · Husband &amp; Wife Team</span>
                </div>
                <em>Since 2019</em>
              </div>
            </div>
            <div className="detail-card detail-card--small">
              <span className="detail-card__spark">✦</span>
              <strong>Owner-led care</strong>
              <p>Direct communication from estimate to final walkthrough.</p>
            </div>
          </div>
          <div className="difference__copy" data-reveal="up" data-delay="1">
            <p className="eyebrow">The Volpe difference</p>
            <h2 id="difference-title">Not just a remodel.<br /><em>A home built around you.</em></h2>
            <p className="intro">We treat every Tampa Bay home as if it were our own — combining clean job sites, reliable scheduling, and lasting finishes.</p>
            <div className="benefit-list">
              {[
                ['01', 'Owner-led communication', 'You work directly with our team from the first walkthrough through every milestone.'],
                ['02', 'Precision in every trade', 'Tight cabinet reveals, level tile lines, proper waterproofing, and clean trim carpentry.'],
                ['03', 'Respect for your daily life', 'Protected floors, organized materials, and a tidy site at the end of every workday.'],
              ].map(item => (
                <article key={item[0]}>
                  <span>{item[0]}</span>
                  <div><h3>{item[1]}</h3><p>{item[2]}</p></div>
                </article>
              ))}
            </div>
            <div className="difference__actions">
              <a className="button button--dark" href={contact.smsHref}>Get my free estimate <span>→</span></a>
              <Link className="text-link" href="/about/" prefetch={false}>About our team <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

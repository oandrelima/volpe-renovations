import MapSection from '@/components/MapSection';
import ContactIcon from '@/components/ContactIcon';
import { contact } from '@/data/site';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Volpe Renovations Co. in the Tampa Bay area for a free kitchen, bathroom, or interior renovation estimate.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="inner-main" id="main">
      <section className="inner-hero">
        <picture className="inner-hero__bg" aria-hidden="true">
          <img src="/assets/services/kitchen-preview.webp" width="960" height="640" alt="" fetchPriority="high" />
        </picture>
        <div className="inner-hero__wash" />
        <div className="container">
          <div className="inner-hero__single">
            <p className="eyebrow eyebrow--light">Contact Volpe Renovations Co.</p>
            <h1>Let&apos;s plan your<br /><em>next renovation.</em></h1>
            <p>
              Reach out directly by text, WhatsApp, or email to schedule your complimentary on-site walkthrough across the Tampa Bay area.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-page">
        <div className="container">
          <div className="section-heading section-heading--split contact-page__header" data-reveal="up">
            <div>
              <p className="eyebrow">Direct contact</p>
              <h2>Reach our <em>Tampa Bay team.</em></h2>
            </div>
            <p>
              Choose the channel that works best for you—we respond promptly to schedule your walkthrough and itemized estimate.
            </p>
          </div>
          <div className="contact-cards contact-cards--grid" data-reveal="up" data-delay="1">
            <a className="contact-card contact-card--featured" href={contact.smsHref}>
              <div className="contact-card__top">
                <span className="contact-card__icon"><ContactIcon type="phone" /></span>
                <span className="contact-card__arrow" aria-hidden="true">→</span>
              </div>
              <small>Text or Call</small>
              <strong>{contact.phone}</strong>
              <em>Tap to text or call directly</em>
            </a>
            <a className="contact-card" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              <div className="contact-card__top">
                <span className="contact-card__icon"><ContactIcon type="whatsapp" /></span>
                <span className="contact-card__arrow" aria-hidden="true">→</span>
              </div>
              <small>WhatsApp</small>
              <strong>{contact.phone}</strong>
              <em>Start a WhatsApp chat</em>
            </a>
            <a className="contact-card" href={contact.emailHref}>
              <div className="contact-card__top">
                <span className="contact-card__icon"><ContactIcon type="email" /></span>
                <span className="contact-card__arrow" aria-hidden="true">→</span>
              </div>
              <small>Email</small>
              <strong>{contact.email}</strong>
              <em>Send project photos &amp; details</em>
            </a>
            <div className="contact-card">
              <div className="contact-card__top">
                <span className="contact-card__icon"><ContactIcon type="location" /></span>
              </div>
              <small>Service Base &amp; Hours</small>
              <strong>{contact.location}</strong>
              <em>{contact.hours}</em>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="contact-map__frame">
          <MapSection />
        </div>
      </section>
    </main>
  );
}

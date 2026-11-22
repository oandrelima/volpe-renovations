import Link from 'next/link';
import { contact, social } from '@/data/site';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer__top">
          <div className="footer__brand">
            <Link className="brand brand--footer" href="/">
              <img
                className="brand__logo"
                src="/assets/brand/volpe-logo.png"
                width="1024"
                height="1024"
                alt="Volpe Renovations & Co. logo"
                loading="lazy"
              />
              <span className="brand__text">
                <strong>VOLPE</strong>
                <small>Renovations &amp; Co.</small>
              </span>
            </Link>
            <p>
              Kitchens · Bathrooms · Interior Renovations.<br />
              Serving Hillsborough, Hernando, Pasco &amp; Pinellas Counties.
            </p>
          </div>
          <div className="footer__links">
            <h3>Explore</h3>
            <Link href="/services/" prefetch={false}>Services</Link>
            <Link href="/about/" prefetch={false}>About Us</Link>
            <Link href="/contact/" prefetch={false}>Contact</Link>
            <Link href="/#faq" prefetch={false}>FAQ</Link>
          </div>
          <div className="footer__links">
            <h3>Services</h3>
            <Link href="/services/complete-bathroom-remodeling/" prefetch={false}>Bathroom Remodeling</Link>
            <Link href="/services/kitchen-remodeling/" prefetch={false}>Kitchen Remodeling</Link>
            <Link href="/services/tile-and-flooring/" prefetch={false}>Tile + Flooring</Link>
            <Link href="/services/" prefetch={false}>All 7 Services</Link>
          </div>
          <div className="footer__contact">
            <h3>Let&apos;s talk</h3>
            <a href={contact.phoneHref}>{contact.phone} (Text &amp; Call)</a>
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp: {contact.phone}</a>
            <a href={contact.emailHref}>{contact.email}</a>
            <div className="footer__social" aria-label="Follow Volpe Renovations Co.">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Volpe Renovations Co. on Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" className="social-icon__dot" />
                </svg>
                <span>Instagram</span>
              </a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Volpe Renovations Co. on Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.7 1.8-1.7H18V3.8c-.4-.1-1.5-.2-2.7-.2-2.7 0-4.6 1.7-4.6 4.8V10H8v3h2.7v8H14Z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
            <a className="button button--outline" href={contact.smsHref}>Get a free quote</a>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} Volpe Renovations Co. All rights reserved.</p>
          <p>Tampa Bay Area, FL · Kitchens · Bathrooms · Interior Renovations</p>
        </div>
      </footer>
      <div className="mobile-actions" aria-label="Quick contact">
        <a href={contact.phoneHref}>☎ Call</a>
        <a href={contact.smsHref}>Free quote <span aria-hidden="true">→</span></a>
      </div>
    </>
  );
}

import Link from 'next/link';
import { contact } from '@/data/site';

export const metadata = {
  title: 'About Us',
  description: 'Meet the Volpe Renovations Co. team in the Tampa Bay area. Learn about our story, owner-led process, and renovation standards.',
  alternates: { canonical: '/about' },
};

const standards = [
  {
    number: '01',
    phase: 'Phase One · Consultation',
    title: 'Walkthrough & Vision',
    text: 'We visit your Tampa Bay home in person, listen to how you use the space, take laser measurements, and discuss layout, tile, cabinetry, and finish options.',
  },
  {
    number: '02',
    phase: 'Phase Two · Clarity',
    title: 'Itemized, Honest Proposal',
    text: 'Before demolition starts, you receive a clear breakdown of scope, materials, and milestones—so there are no surprise invoices midway through your remodel.',
  },
  {
    number: '03',
    phase: 'Phase Three · Execution',
    title: 'Craft Behind the Walls',
    text: 'Beautiful tile and cabinetry only last if the framing, plumbing, electrical, and waterproofing behind them are done right. We protect your home and sweep up daily.',
  },
  {
    number: '04',
    phase: 'Phase Four · Handover',
    title: 'Owner-Led Final Walkthrough',
    text: 'We inspect every grout line, cabinet reveal, and paint edge alongside you to ensure every detail meets our standard before we consider the job complete.',
  },
];

export default function AboutPage() {
  return (
    <main className="inner-main" id="main">
      <section className="inner-hero">
        <picture className="inner-hero__bg" aria-hidden="true">
          <img src="/assets/services/full-renovation-preview.webp" width="960" height="640" alt="" fetchPriority="high" />
        </picture>
        <div className="inner-hero__wash" />
        <div className="container">
          <div className="inner-hero__single">
            <p className="eyebrow eyebrow--light">About Volpe Renovations Co.</p>
            <h1>Built on trust,<br /><em>driven by craft.</em></h1>
            <p>
              Volpe Renovations Co. is a Tampa Bay remodeling company dedicated to transforming bathrooms, kitchens, flooring, and interiors across Hillsborough, Hernando, Pasco, and Pinellas Counties with integrity and lasting workmanship.
            </p>
            <Link className="button button--accent" href="/contact/" prefetch={false}>Schedule a walkthrough →</Link>
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__media" data-reveal="up">
            <div className="team-photo-card">
              <img
                src="/assets/brand/volpe-team.jpg"
                width="900"
                height="1125"
                alt="Founders of Volpe Renovations Co. in Tampa Bay, FL"
              />
              <div className="team-photo-card__caption">
                <div>
                  <strong>Volpe Renovations Co.</strong>
                  <span>Tampa Bay, FL · Husband &amp; Wife Team</span>
                </div>
                <em>Since 2019</em>
              </div>
            </div>
          </div>
          <div className="about-story__copy" data-reveal="up" data-delay="1">
            <p className="eyebrow">Our Story</p>
            <h2>Built by family, <em>crafted with care.</em></h2>
            <p>
              Volpe Renovations Co. is led by husband-and-wife team Sergio and his partner across the Tampa Bay area. Sergio has been working in construction and home remodeling since 2019—earning homeowners&apos; trust through precision tile work, proper waterproofing, and straightforward communication.
            </p>
            <p>
              Alongside his craftsmanship, she brings years of client-first service from running her own cleaning company since 2023. Now stepping into construction alongside Sergio, she brings that same standard of organization, cleanliness, and attention to detail to every renovation project.
            </p>
            <p>
              Together, we combine structural skill behind the walls with spotless job sites and clear scheduling—so remodeling your bathroom, kitchen, or interior feels calm from the first walkthrough to the final polish.
            </p>
            <div className="about-story__stats">
              <div><strong>Since 2019</strong><span>Remodeling experience</span></div>
              <div><strong>4 Counties</strong><span>Tampa Bay service area</span></div>
              <div><strong>100%</strong><span>Owner-led &amp; family-run</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-standards">
        <div className="container">
          <div className="section-heading section-heading--split" data-reveal="up">
            <div>
              <p className="eyebrow">How we work</p>
              <h2>Four disciplined phases behind <em>every build.</em></h2>
            </div>
            <p>Every bathroom, kitchen, and interior project follows a structured, owner-led process designed to keep your home clean and your timeline predictable.</p>
          </div>
          <div className="standards-grid">
            {standards.map((item, idx) => (
              <article className="standard-card" key={item.number} data-reveal="up" data-delay={String((idx % 2) + 1)}>
                <div className="standard-card__head">
                  <span className="standard-card__num">{item.number}</span>
                  <small>{item.phase}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="container inner-cta__grid">
          <div className="inner-cta__copy">
            <p className="eyebrow eyebrow--light">Start your project</p>
            <h2>Ready to talk through <em>your project?</em></h2>
          </div>
          <div className="inner-cta__actions">
            <Link className="button button--accent" href="/contact/" prefetch={false}>Contact our team →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="inner-main" id="main">
      <section className="inner-hero">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow eyebrow--light">404 · Page not found</p>
            <h1>Let&apos;s get you <em>back home.</em></h1>
            <p>The page you requested is not available.</p>
            <Link className="button button--accent" href="/">Return to Volpe Renovations Co. →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

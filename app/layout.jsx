import './globals.css';
import '../inner-pages.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';

export const metadata = {
  metadataBase: new URL('https://volperenovations.com'),
  title: {
    default: 'Kitchens, Bathrooms & Home Renovations in Tampa Bay, FL | Volpe Renovations Co.',
    template: '%s | Volpe Renovations Co.',
  },
  description: 'Kitchens, bathrooms, tile, flooring, and interior renovations across the Tampa Bay area. Serving Hillsborough, Hernando, Pasco, and Pinellas Counties.',
  alternates: { canonical: '/' },
  icons: { icon: '/assets/brand/volpe-logo.png', apple: '/assets/brand/volpe-logo.png' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Volpe Renovations Co.',
    title: 'Kitchens, Bathrooms & Home Renovations in Tampa Bay, FL | Volpe Renovations Co.',
    description: 'Kitchens, bathrooms, and interior renovations across the Tampa Bay area.',
    url: '/',
    images: [{ url: '/assets/brand/volpe-hero.jpg', width: 1408, height: 768, alt: 'Custom kitchen renovation by Volpe Renovations Co.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volpe Renovations Co. | Tampa Bay, FL',
    description: 'Kitchens • Bathrooms • Interior Renovations across Tampa Bay.',
    images: ['/assets/brand/volpe-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/dm-sans-latin-variable.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/playfair-latin-variable.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/assets/brand/volpe-hero-mobile.webp" media="(max-width: 640px)" />
        <link rel="preload" as="image" href="/assets/brand/volpe-hero.webp" media="(min-width: 641px)" />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <ScrollReveal />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}

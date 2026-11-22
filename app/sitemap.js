import { areaPages, servicePages } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://volperenovations.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    ...Object.keys(servicePages).map(slug => ({ url: `${base}/services/${slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 })),
    ...Object.keys(areaPages).map(slug => ({ url: `${base}/areas/${slug}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 })),
  ];
}

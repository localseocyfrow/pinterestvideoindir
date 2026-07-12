import type { APIRoute } from 'astro';
import { SITE, abs } from '../data/site';
import { ROUTES } from '../data/routes';

// Hand-rolled sitemap (no adapter dependency). Uses the shared ROUTES list.
export const GET: APIRoute = () => {
  const lastmod = SITE.updated;

  const urls = ROUTES.map(
    (r) => `  <url>
    <loc>${abs(r.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

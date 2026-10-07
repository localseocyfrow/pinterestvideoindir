import type { APIRoute } from 'astro';
import { abs } from '../data/site';
import { ROUTES } from '../data/routes';

// Hand-rolled sitemap. lastmod comes from each route, not the build clock.
// changefreq and priority are omitted (Google ignores them).
export const GET: APIRoute = () => {
  const urls = ROUTES.map(
    (r) => `  <url>
    <loc>${abs(r.path)}</loc>
    <lastmod>${r.lastmod}</lastmod>
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

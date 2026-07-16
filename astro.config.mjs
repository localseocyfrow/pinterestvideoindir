// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://pinterestvideoindirme.tr',
  trailingSlash: 'ignore',
  // 301: legacy troubleshooting slug renamed to the intended keyword spelling
  // ("indirilemiyor" = cannot be downloaded). Old URL is a redirect only and is
  // not listed in sitemap.xml / llms.txt (those derive from src/data/routes.ts).
  redirects: {
    '/pinterest-video-indirilmiyor': {
      status: 301,
      destination: '/pinterest-video-indirilemiyor',
    },
  },
  // Pages stay static (prerendered) for SEO. Only /api/* routes opt into
  // on-demand rendering via `export const prerender = false`, so an adapter
  // is required — but we deliberately do NOT set `output: 'server'`.
  // Cloudflare Pages: static assets are served from the CDN, the /api/* routes
  // run in a Cloudflare Worker (_worker.js). The downloader API uses only
  // Web-standard fetch/Response/streams, so it runs on the Workers runtime.
  adapter: cloudflare({
    // No astro:assets image optimization is used (only static <img> to files
    // in /public), so skip the runtime image service that would need sharp.
    imageService: 'passthrough',
  }),
  build: {
    inlineStylesheets: 'auto',
  },
});

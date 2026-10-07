// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://pinterestvideoindirme.tr',
  // Force slash URLs so canonicals, sitemap and internal links stay on one
  // form. Cloudflare's default html_handling still 307s slash-less requests;
  // public/_redirects issues 301s first. Also turn on Always Use HTTPS in the
  // Cloudflare dashboard (HTTP→HTTPS cannot be done from this file).
  trailingSlash: 'always',
  // Redirects live only in public/_redirects. Do not also declare them here:
  // the same source in both files duplicates the generated _redirects and
  // previously failed the Cloudflare deploy. /api/* is not listed there, and
  // the downloader posts to the slashed URL so it never follows a 308.
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

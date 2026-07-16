// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://pinterestvideoindirme.tr',
  trailingSlash: 'ignore',
  // 301s for legacy / renamed URLs. Targets are the closest live page. These
  // old URLs are redirect-only and are NOT listed in sitemap.xml / llms.txt
  // (those derive from src/data/routes.ts).
  redirects: {
    // Renamed troubleshooting slug → intended keyword spelling
    // ("indirilemiyor" = cannot be downloaded).
    '/pinterest-video-indirilmiyor': {
      status: 301,
      destination: '/pinterest-video-indirilemiyor',
    },
    // Legacy "About" URL variant → live About page.
    '/hakkimizda': {
      status: 301,
      destination: '/hakkinda',
    },
    // Legacy corporate/legal URL variants → closest live pages.
    '/gizlilik': {
      status: 301,
      destination: '/gizlilik-politikasi',
    },
    '/kullanim-kosullari': {
      status: 301,
      destination: '/kullanim-sartlari',
    },
    '/sikca-sorulan-sorular': {
      status: 301,
      destination: '/sss',
    },
    // Exact legacy 404s from Search Console → closest live pages.
    '/resim-indir': {
      status: 301,
      destination: '/pinterest-resim-indir',
    },
    '/pinterest-fotograf-indirici': {
      status: 301,
      destination: '/pinterest-resim-indir',
    },
    '/bize-ulasin': {
      status: 301,
      destination: '/iletisim',
    },
    '/pinterest-gif-indirici': {
      status: 301,
      destination: '/pinterest-gif-indir',
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

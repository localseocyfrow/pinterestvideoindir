// Single source of truth for site-wide metadata.
// Change the domain here and it propagates to canonical URLs,
// sitemap, robots.txt, llms.txt and all JSON-LD structured data.

export const SITE = {
  name: 'Pinterest Video İndir',
  shortName: 'PinVideoİndir',
  domain: 'pinterestvideoindirme.tr',
  url: 'https://pinterestvideoindirme.tr',
  lang: 'tr',
  locale: 'tr_TR',
  title: 'Pinterest Video İndir – Filigransız HD Pinterest Downloader',
  description:
    'Pinterest video indirici: bağlantıyı yapıştırın, videoyu HD MP4 olarak ' +
    'filigransız ve ücretsiz indirin. iPhone, Android ve PC’de çalışır; kayıt gerekmez.',
  email: 'pinterestvideoindirme2@gmail.com',
  author: 'Pinterest Video İndir Ekibi',
  twitter: '@pinvideoindir',
  youtube: 'https://www.youtube.com/@Pinterestvideoindirme-d6p',
  // Launch/updated dates are used in structured data + footer.
  updated: '2026-10-07',
  founded: '2026-07-12',
} as const;

// Editorial owner of the site's content — reviewed/edited pages credit this
// person, and /yazar/mohsin-ali-bubak/ is their profile page.
export const EDITOR = {
  name: 'Mohsin Ali Bubak',
  path: '/yazar/mohsin-ali-bubak/',
  jobTitle: 'Co-Founder & COO',
  company: 'Cyfrow Solutions',
  linkedin: 'https://www.linkedin.com/in/mohsin-ali-bubak-793',
  website: 'https://mohsinalibubak.com/',
} as const;

export type NavItem = { label: string; href: string };

// Primary navigation, ordered by topical priority from keyword research.
export const NAV: NavItem[] = [
  { label: 'Video İndir', href: '/' },
  { label: 'Fotoğraf İndir', href: '/pinterest-resim-indir/' },
  { label: 'GIF İndir', href: '/pinterest-gif-indir/' },
  { label: 'Karusel İndir', href: '/pinterest-karusel-indir/' },
  { label: 'Nasıl Kullanılır', href: '/pinterest-video-nasil-indirilir/' },
  { label: 'SSS', href: '/sss/' },
];

// Grouped footer navigation.
//
// Deliberately CURATED, not exhaustive. The footer surfaces the highest-intent
// tools, the most-asked guides and every trust/legal page — three balanced
// columns instead of one 25-link dump.
//
// Long-tail pages (device guides, troubleshooting variants, niche formats) are
// intentionally absent here. They stay in src/data/routes.ts, so sitemap.xml
// and llms.txt still list them, and they are reached through in-content links
// plus the <RelatedGuides> blocks on their parent pages — every one of them has
// several contextual inbound links, so none is orphaned by leaving the footer.
export const FOOTER_GROUPS: { title: string; links: NavItem[] }[] = [
  {
    title: 'Popüler Araçlar',
    links: [
      { label: 'Pinterest Video İndir', href: '/' },
      { label: 'Pinterest Fotoğraf İndir', href: '/pinterest-resim-indir/' },
      { label: 'Pinterest GIF İndir', href: '/pinterest-gif-indir/' },
      { label: 'Pinterest Karusel İndir', href: '/pinterest-karusel-indir/' },
      { label: 'Pinterest MP4 İndir', href: '/pinterest-mp4-indir/' },
      { label: 'Video kalitesi', href: '/pinterest-video-kalitesi/' },
    ],
  },
  {
    title: 'Öne Çıkan Rehberler',
    links: [
      { label: 'Video İndirici Nedir?', href: '/pinterest-video-indirici-nedir/' },
      { label: 'Video Nasıl İndirilir?', href: '/pinterest-video-nasil-indirilir/' },
      { label: 'Video İndirilemiyor mu?', href: '/pinterest-video-indirilemiyor/' },
      { label: 'Pinterest Çöktü mü?', href: '/pinterest-coktu-mu/' },
      { label: 'Sıkça Sorulan Sorular', href: '/sss/' },
    ],
  },
  {
    title: 'Güven & Kurumsal',
    links: [
      { label: 'Hakkında', href: '/hakkinda/' },
      { label: 'Yazar: Mohsin Ali Bubak', href: '/yazar/mohsin-ali-bubak/' },
      { label: 'İletişim', href: '/iletisim/' },
      { label: 'DMCA / Telif Talebi', href: '/dmca/' },
      { label: 'Telif Hakkı ve İndirme', href: '/telif-hakki-ve-pinterest-indirme/' },
      { label: 'İndirmek Yasal mı?', href: '/pinterest-video-indirmek-yasal-mi/' },
      { label: 'İndirmek Güvenli mi?', href: '/pinterest-video-indirmek-guvenli-mi/' },
      { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi/' },
      { label: 'Kullanım Şartları', href: '/kullanim-sartlari/' },
    ],
  },
];

// Absolute URL helper — single source for canonical, OG, JSON-LD, sitemap and
// llms.txt URLs, so they can never drift apart.
//
// Trailing-slash policy (must match how the pages are actually served):
// the build emits directory-style routes (`/slug/index.html`), so every content
// page is live at `/slug/` and MUST canonicalise to that exact form — otherwise
// audit tools report the page as canonicalised-away instead of self-referencing.
//   - homepage      -> https://domain/           (slash)
//   - content page  -> https://domain/slug/      (slash)
//   - asset / file  -> https://domain/file.ext   (NO slash — would 404)
//   - /api/* route  -> https://domain/api/x      (NO slash — endpoint, not a page)
export function abs(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return `${SITE.url}/`;

  // Anything ending in a file extension (.svg, .xml, .txt, .png…) is a real
  // file, not a page route; likewise /api/* endpoints. Both stay slash-free.
  const isFile = /\.[a-z0-9]+$/i.test(clean);
  const isApi = clean === '/api' || clean.startsWith('/api/');

  const normalized =
    isFile || isApi
      ? clean.replace(/\/+$/, '')
      : `${clean.replace(/\/+$/, '')}/`;

  return `${SITE.url}${normalized}`;
}

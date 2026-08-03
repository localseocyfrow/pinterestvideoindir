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
  title: 'Pinterest Video İndir – HD MP4 Video İndirici (Ücretsiz)',
  description:
    'Pinterest videolarını HD kalitede, ücretsiz ve filigransız indirin. ' +
    'Kayıt olmadan, reklamsız ve tek tıkla Pinterest MP4, GIF ve görsel indirme aracı.',
  email: 'pinterestvideoindirme2@gmail.com',
  author: 'Pinterest Video İndir Ekibi',
  twitter: '@pinvideoindir',
  // Launch/updated dates are used in structured data + footer.
  updated: '2026-07-10',
  founded: '2026',
} as const;

export type NavItem = { label: string; href: string };

// Primary navigation, ordered by topical priority from keyword research.
export const NAV: NavItem[] = [
  { label: 'Video İndir', href: '/pinterest-video-indir/' },
  { label: 'Resim İndir', href: '/pinterest-resim-indir/' },
  { label: 'GIF İndir', href: '/pinterest-gif-indir/' },
  { label: 'Karusel İndir', href: '/pinterest-karusel-indir/' },
  { label: 'Nasıl Kullanılır', href: '/nasil-kullanilir/' },
  { label: 'SSS', href: '/sss/' },
];

// Grouped footer navigation.
export const FOOTER_GROUPS: { title: string; links: NavItem[] }[] = [
  {
    title: 'Araçlar',
    links: [
      { label: 'Pinterest Video İndir', href: '/pinterest-video-indir/' },
      { label: 'Pinterest Video İndirici', href: '/pinterest-video-indirici/' },
      { label: 'Video İndir Galeriye', href: '/pinterest-video-galeriye-indir/' },
      { label: 'Pinterest 4K Video İndir', href: '/pinterest-4k-video-indir/' },
      { label: 'Pinterest HD Video İndir', href: '/pinterest-hd-video-indir/' },
      { label: 'Pinterest MP4 İndir', href: '/pinterest-mp4-indir/' },
      { label: 'Pinterest Video Link İndir', href: '/pinterest-video-link-indir/' },
      { label: 'Video İndir Ücretsiz', href: '/pinterest-video-indir-ucretsiz/' },
      { label: 'Pinterest Pin İndir', href: '/pinterest-pin-indir/' },
      { label: 'Filigransız Video İndir', href: '/pinterest-filigransiz-video-indir/' },
      { label: 'Pinterest Story İndir', href: '/pinterest-story-indir/' },
      { label: 'Pinterest Resim İndir', href: '/pinterest-resim-indir/' },
      { label: 'Pinterest GIF İndir', href: '/pinterest-gif-indir/' },
      { label: 'Pinterest Karusel İndir', href: '/pinterest-karusel-indir/' },
    ],
  },
  {
    title: 'Rehber',
    links: [
      { label: 'Video Nasıl İndirilir', href: '/pinterest-video-nasil-indirilir/' },
      { label: 'Pinterest Nedir?', href: '/pinterest-nedir/' },
      { label: 'Pinterest Çöktü mü?', href: '/pinterest-coktu-mu/' },
      { label: 'Pinterest Ücretli mi?', href: '/pinterest-ucretli-mi/' },
      { label: 'Video İndirici Nedir?', href: '/pinterest-video-indirici-nedir/' },
      { label: 'Pinterest Downloader Nedir?', href: '/pinterest-downloader-nedir/' },
      { label: 'İndirme Aracı Nasıl Çalışır?', href: '/pinterest-video-indirme-araci-nasil-calisir/' },
      { label: 'İndirme mi, Kaydetme mi?', href: '/pinterest-video-indirme-vs-kaydetme/' },
      { label: 'Video Kalitesi (Neden Bulanık?)', href: '/pinterest-video-kalitesi/' },
      { label: 'Video İndirilemiyor mu?', href: '/pinterest-video-indirilemiyor/' },
      { label: 'Pinterest Açılmıyor mu?', href: '/pinterest-acilmiyor/' },
      { label: 'Video Açılmıyor / Oynatılmıyor mu?', href: '/pinterest-video-acilmiyor/' },
      { label: 'Pinterest Linki Çalışmıyor mu?', href: '/pinterest-link-calismiyor/' },
      { label: 'iPhone’da Video İndir', href: '/iphone-pinterest-video-indir/' },
      { label: 'Android’de Video İndir', href: '/android-pinterest-video-indir/' },
      { label: 'Mac’te Video İndir', href: '/mac-pinterest-video-indir/' },
      { label: 'Windows’ta Video İndir', href: '/windows-pinterest-video-indir/' },
      { label: 'Pinterest Video Yükleme', href: '/pinterest-video-yukleme/' },
      { label: 'Video İndirmek Yasal mı?', href: '/pinterest-video-indirmek-yasal-mi/' },
      { label: 'Video İndirmek Güvenli mi?', href: '/pinterest-video-indirmek-guvenli-mi/' },
      { label: 'Telif Hakkı ve İndirme', href: '/telif-hakki-ve-pinterest-indirme/' },
      { label: 'Nasıl Kullanılır', href: '/nasil-kullanilir/' },
      { label: 'Sıkça Sorulan Sorular', href: '/sss/' },
      { label: 'Hakkında', href: '/hakkinda/' },
    ],
  },
  {
    title: 'Kurumsal',
    links: [
      { label: 'İletişim', href: '/iletisim/' },
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

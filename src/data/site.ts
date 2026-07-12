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
      { label: 'Video İndir Ücretsiz', href: '/pinterest-video-indir-ucretsiz/' },
      { label: 'Pinterest Pin İndir', href: '/pinterest-pin-indir/' },
      { label: 'Pinterest Resim İndir', href: '/pinterest-resim-indir/' },
      { label: 'Pinterest GIF İndir', href: '/pinterest-gif-indir/' },
      { label: 'Pinterest Karusel İndir', href: '/pinterest-karusel-indir/' },
    ],
  },
  {
    title: 'Rehber',
    links: [
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

// Absolute URL helper — keeps canonical/OG/sitemap consistent.
export function abs(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return clean === '/' ? SITE.url : `${SITE.url}${clean.replace(/\/$/, '')}`;
}

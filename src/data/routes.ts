// Canonical list of indexable routes, with sitemap hints.
// Single source consumed by sitemap.xml and llms.txt.
export type Route = {
  path: string;
  title: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
};

export const ROUTES: Route[] = [
  { path: '/', title: 'Pinterest Video İndir (HD, ücretsiz)', changefreq: 'daily', priority: 1.0 },
  { path: '/pinterest-video-indir/', title: 'Pinterest Video İndir — HD/4K MP4', changefreq: 'daily', priority: 0.9 },
  { path: '/pinterest-video-galeriye-indir/', title: 'Pinterest Video İndir Galeriye — telefona kaydet', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-4k-video-indir/', title: 'Pinterest 4K Video İndir — Ultra HD MP4', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-resim-indir/', title: 'Pinterest Fotoğraf & Resim İndir — tam çözünürlük', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-gif-indir/', title: 'Pinterest GIF İndir — GIF & MP4', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-karusel-indir/', title: 'Pinterest Karusel İndir — çoklu görsel', changefreq: 'weekly', priority: 0.7 },
  { path: '/nasil-kullanilir/', title: 'Nasıl Kullanılır — Pinterest indirme rehberi', changefreq: 'monthly', priority: 0.7 },
  { path: '/sss/', title: 'Sıkça Sorulan Sorular', changefreq: 'monthly', priority: 0.6 },
  { path: '/hakkinda/', title: 'Hakkında', changefreq: 'monthly', priority: 0.4 },
  { path: '/iletisim/', title: 'İletişim', changefreq: 'monthly', priority: 0.3 },
  { path: '/gizlilik-politikasi/', title: 'Gizlilik Politikası', changefreq: 'monthly', priority: 0.3 },
  { path: '/kullanim-sartlari/', title: 'Kullanım Şartları', changefreq: 'monthly', priority: 0.3 },
];

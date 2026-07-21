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
  { path: '/pinterest-video-indirici/', title: 'Pinterest Video İndirici — online HD/4K aracı', changefreq: 'weekly', priority: 0.85 },
  { path: '/pinterest-video-galeriye-indir/', title: 'Pinterest Video İndir Galeriye — telefona kaydet', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-4k-video-indir/', title: 'Pinterest 4K Video İndir — Ultra HD MP4', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-video-indir-ucretsiz/', title: 'Pinterest Video İndir Ücretsiz — sınırsız', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-hd-video-indir/', title: 'Pinterest HD Video İndir — Full HD 1080p MP4', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-mp4-indir/', title: 'Pinterest MP4 İndir — HD MP4 video linki', changefreq: 'weekly', priority: 0.75 },
  { path: '/pinterest-video-link-indir/', title: 'Pinterest Video Link İndir — bağlantı yapıştır & indir', changefreq: 'weekly', priority: 0.7 },
  { path: '/pinterest-pin-indir/', title: 'Pinterest Pin İndir — video, görsel & GIF', changefreq: 'weekly', priority: 0.7 },
  { path: '/pinterest-filigransiz-video-indir/', title: 'Pinterest Filigransız Video İndir — logosuz MP4', changefreq: 'weekly', priority: 0.7 },
  { path: '/pinterest-video-nasil-indirilir/', title: 'Pinterest Video Nasıl İndirilir — adım adım rehber', changefreq: 'monthly', priority: 0.7 },
  { path: '/pinterest-video-kalitesi/', title: 'Pinterest Video Kalitesi — neden bulanık & HD indirme', changefreq: 'monthly', priority: 0.6 },
  { path: '/pinterest-video-indirilemiyor/', title: 'Pinterest Videosu İndirilemiyor mu? — nedenleri & çözümü', changefreq: 'monthly', priority: 0.6 },
  { path: '/pinterest-acilmiyor/', title: 'Pinterest Neden Açılmıyor? — nedenleri & çözümü', changefreq: 'monthly', priority: 0.6 },
  { path: '/pinterest-video-acilmiyor/', title: 'Pinterest Videosu Açılmıyor / Oynatılmıyor mu? — çözümü', changefreq: 'monthly', priority: 0.55 },
  { path: '/pinterest-link-calismiyor/', title: 'Pinterest Linki Çalışmıyor mu? — nedenleri & çözümü', changefreq: 'monthly', priority: 0.55 },
  { path: '/iphone-pinterest-video-indir/', title: 'iPhone Pinterest Video İndir — iOS Safari rehberi', changefreq: 'weekly', priority: 0.7 },
  { path: '/android-pinterest-video-indir/', title: 'Android Pinterest Video İndir — galeriye kaydet', changefreq: 'weekly', priority: 0.7 },
  { path: '/mac-pinterest-video-indir/', title: 'Mac Pinterest Video İndir — macOS Safari/Chrome rehberi', changefreq: 'weekly', priority: 0.7 },
  { path: '/windows-pinterest-video-indir/', title: 'Windows Pinterest Video İndir — PC/bilgisayar rehberi', changefreq: 'weekly', priority: 0.7 },
  { path: '/pinterest-story-indir/', title: 'Pinterest Story İndir — hikaye & Idea Pin video', changefreq: 'weekly', priority: 0.65 },
  { path: '/pinterest-video-yukleme/', title: 'Pinterest Video Yükleme — nasıl yüklenir rehberi', changefreq: 'monthly', priority: 0.6 },
  { path: '/pinterest-resim-indir/', title: 'Pinterest Fotoğraf & Resim İndir — tam çözünürlük', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-gif-indir/', title: 'Pinterest GIF İndir — GIF & MP4', changefreq: 'weekly', priority: 0.8 },
  { path: '/pinterest-karusel-indir/', title: 'Pinterest Karusel İndir — çoklu görsel', changefreq: 'weekly', priority: 0.7 },
  { path: '/pinterest-video-indirmek-yasal-mi/', title: 'Pinterest Video İndirmek Yasal mı? — telif hakkı rehberi', changefreq: 'monthly', priority: 0.6 },
  { path: '/pinterest-video-indirmek-guvenli-mi/', title: 'Pinterest Video İndirmek Güvenli mi? — güvenlik rehberi', changefreq: 'monthly', priority: 0.6 },
  { path: '/nasil-kullanilir/', title: 'Nasıl Kullanılır — Pinterest indirme rehberi', changefreq: 'monthly', priority: 0.7 },
  { path: '/sss/', title: 'Sıkça Sorulan Sorular', changefreq: 'monthly', priority: 0.6 },
  { path: '/hakkinda/', title: 'Hakkında', changefreq: 'monthly', priority: 0.4 },
  { path: '/iletisim/', title: 'İletişim', changefreq: 'monthly', priority: 0.3 },
  { path: '/gizlilik-politikasi/', title: 'Gizlilik Politikası', changefreq: 'monthly', priority: 0.3 },
  { path: '/kullanim-sartlari/', title: 'Kullanım Şartları', changefreq: 'monthly', priority: 0.3 },
];

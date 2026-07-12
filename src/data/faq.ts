// FAQ content is defined once and consumed by both the visible <Faq>
// accordion and the FAQPage JSON-LD (AEO/GEO). Keep answers concise,
// self-contained and factual so they can be lifted into AI answers and
// Google's featured snippets / AI Overview.

export type QA = { q: string; a: string };

// Grouped FAQ for the dedicated /sss/ page.
export type FaqGroup = { title: string; items: QA[] };

export const HOME_FAQ: QA[] = [
  {
    q: 'Pinterest video indirme ücretsiz mi?',
    a: 'Evet. Pinterest Video İndir tamamen ücretsizdir. Video indirmek için üyelik, ödeme veya uygulama kurulumu gerekmez. İstediğiniz kadar video indirebilirsiniz.',
  },
  {
    q: 'Pinterest videosu nasıl indirilir?',
    a: 'Pinterest uygulamasında videoyu açın, “Paylaş” düğmesine dokunun ve “Bağlantıyı kopyala” seçeneğini seçin. Kopyaladığınız bağlantıyı sitemizdeki kutuya yapıştırıp “İndir” düğmesine basın; ardından HD veya standart kaliteyi seçerek videoyu kaydedin.',
  },
  {
    q: 'İndirilen Pinterest videolarında filigran olur mu?',
    a: 'Hayır. Videolar orijinal kaynaktan alındığı için üzerinde herhangi bir filigran veya logo bulunmaz. Videoyu temiz ve HD kalitede kaydedersiniz.',
  },
  {
    q: 'Telefondan (Android / iPhone) Pinterest videosu indirebilir miyim?',
    a: 'Evet. Araç tarayıcı tabanlıdır ve Android, iPhone (iOS), tablet ile masaüstünde çalışır. iPhone’da videolar “Dosyalar” uygulamasına, Android’de ise doğrudan galeriye kaydedilir.',
  },
  {
    q: 'HD veya 4K Pinterest videosu indirebilir miyim?',
    a: 'Evet. Kaynak video hangi çözünürlükte yüklendiyse, o kaliteyi (HD 720p, Full HD 1080p ve mümkünse 4K) indirme seçeneği olarak sunarız.',
  },
  {
    q: 'Pinterest video indirmek yasal mı?',
    a: 'Kişisel kullanım, çevrimdışı izleme ve arşivleme amacıyla video indirmek genellikle uygundur. Ancak içerik telif hakkıyla korunuyorsa, videoyu izinsiz yeniden yayınlamak veya ticari amaçla kullanmak telif haklarını ihlal edebilir. İçerik sahibinin haklarına saygı gösterin.',
  },
  {
    q: 'Kayıt olmam veya uygulama indirmem gerekiyor mu?',
    a: 'Hayır. Hesap oluşturmanıza veya herhangi bir uygulama kurmanıza gerek yoktur. Bağlantıyı yapıştırıp doğrudan tarayıcıdan indirebilirsiniz.',
  },
  {
    q: 'Videolarınızı sunucularınızda saklıyor musunuz?',
    a: 'Hayır. İndirdiğiniz videolar sunucularımızda kalıcı olarak saklanmaz; işlem tamamlandıktan sonra geçici veriler temizlenir. Gizliliğiniz korunur.',
  },
];

export const GIF_FAQ: QA[] = [
  {
    q: 'Pinterest GIF nasıl indirilir?',
    a: 'GIF’in Pinterest bağlantısını kopyalayın, sitemizdeki kutuya yapıştırın ve “İndir” düğmesine basın. GIF’i orijinal kalitesinde cihazınıza kaydedebilirsiniz.',
  },
  {
    q: 'Pinterest GIF’lerini MP4 olarak da indirebilir miyim?',
    a: 'Evet. Pinterest bazı hareketli içerikleri MP4 olarak sunar. Aracımız hem GIF hem de MP4 formatında indirme seçeneği sunmayı hedefler.',
  },
  {
    q: 'GIF indirmek ücretsiz mi?',
    a: 'Evet, GIF indirme de tıpkı video indirme gibi tamamen ücretsizdir ve sınırsızdır.',
  },
];

export const IMAGE_FAQ: QA[] = [
  {
    q: 'Pinterest resmi (görseli) nasıl indirilir?',
    a: 'Resmin Pinterest bağlantısını kopyalayın, sitemize yapıştırın ve indirin. Görseli tam çözünürlükte, filigransız olarak kaydedebilirsiniz.',
  },
  {
    q: 'Pinterest resmini en yüksek çözünürlükte indirebilir miyim?',
    a: 'Evet. Görselin Pinterest’te mevcut olan en yüksek çözünürlüklü sürümünü indirmenizi sağlarız.',
  },
  {
    q: 'Resim indirmek telif hakkına takılır mı?',
    a: 'Kişisel kullanım için indirmek genellikle uygundur. Görseli ticari olarak kullanacaksanız veya yeniden yayınlayacaksanız içerik sahibinden izin almanız gerekir.',
  },
];

export const CAROUSEL_FAQ: QA[] = [
  {
    q: 'Pinterest karusel (çoklu görsel) nedir?',
    a: 'Karusel, tek bir pinde birden fazla görsel veya videonun kaydırılarak görüntülendiği içerik türüdür. Bir karusel pini içinde 2 ile 5 arasında medya bulunabilir.',
  },
  {
    q: 'Pinterest karuselindeki tüm görselleri nasıl indiririm?',
    a: 'Karusel pininin bağlantısını kopyalayıp aracımıza yapıştırın. Araç, pindeki tüm görselleri ve videoları tek tek listeler; istediğinizi veya hepsini filigransız olarak indirebilirsiniz.',
  },
  {
    q: 'Karusel indirmek ücretsiz mi?',
    a: 'Evet. Karusel içeriklerini indirmek de tamamen ücretsizdir ve sınırsızdır; kayıt gerektirmez.',
  },
];

// Consumed by the dedicated /sss/ page.
export const ALL_FAQ_GROUPS: FaqGroup[] = [
  { title: 'Genel & Video İndirme', items: HOME_FAQ },
  { title: 'Resim (Görsel) İndirme', items: IMAGE_FAQ },
  { title: 'GIF İndirme', items: GIF_FAQ },
  { title: 'Karusel İndirme', items: CAROUSEL_FAQ },
];

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
  {
    q: 'Pinterest “fotoğraf indir”, “foto indir” ve “resim indir” aynı şey mi?',
    a: 'Evet. “Fotoğraf”, “foto”, “resim” ve “görsel” aynı içeriği ifade eder. Aracımız hepsini aynı şekilde, tam çözünürlükte ve filigransız indirir; hangi kelimeyi kullandığınız fark etmez.',
  },
  {
    q: 'Pinterest fotoğrafını orijinal (tam) boyutta indirebilir miyim?',
    a: 'Evet. Küçük önizleme yerine, görselin Pinterest’te bulunan en büyük ve en yüksek çözünürlüklü sürümünü indirmenizi sağlarız; böylece fotoğraf net ve kırpılmamış olarak kaydedilir.',
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

// Save-to-gallery / mobile cluster — consumed by /pinterest-video-galeriye-indir/.
export const GALLERY_FAQ: QA[] = [
  {
    q: 'Pinterest videosunu galeriye nasıl kaydederim?',
    a: 'Videonun bağlantısını kopyalayıp aracımıza yapıştırın ve “İndir”e basın. Android’de video doğrudan galeriye (Galeri/Fotoğraflar) kaydedilir; iPhone’da videoyu “Dosyalar”a indirip oradan “Videoyu Kaydet” ile Fotoğraflar uygulamasına ekleyebilirsiniz.',
  },
  {
    q: 'iPhone’da Pinterest videosu doğrudan fotoğraflara iner mi?',
    a: 'iOS, tarayıcıdan inen videoları önce “Dosyalar” uygulamasına kaydeder. Dosyalar’dan videoya dokunup “Paylaş → Videoyu Kaydet” dediğinizde video Fotoğraflar (galeri) uygulamanıza taşınır.',
  },
  {
    q: 'Android’de video neden bazen “İndirilenler” klasörüne gidiyor?',
    a: 'Bazı Android tarayıcıları tüm dosyaları önce “İndirilenler” klasörüne koyar. Videoyu Galeri’de görmüyorsanız Dosya Yöneticisi → İndirilenler klasörüne bakın; çoğu galeri uygulaması bu klasörü otomatik tarar.',
  },
  {
    q: 'Pinterest uygulamasından videoyu neden galeriye kaydedemiyorum?',
    a: 'Pinterest uygulaması videoları doğrudan galeriye kaydetme seçeneği sunmaz; yalnızca uygulama içinde saklar. Bağlantıyı kopyalayıp aracımızı kullanarak videoyu MP4 olarak cihazınızın galerisine indirebilirsiniz.',
  },
  {
    q: 'Galeriye indirdiğim videoda filigran olur mu?',
    a: 'Hayır. Video orijinal kaynaktan alındığı için galeriye kaydedilen dosyada logo veya filigran bulunmaz; videoyu temiz ve HD kalitede saklarsınız.',
  },
];

// 4K / HD quality cluster — consumed by /pinterest-4k-video-indir/.
export const VIDEO_4K_FAQ: QA[] = [
  {
    q: 'Pinterest’ten 4K video indirebilir miyim?',
    a: 'Evet. Kaynak video 4K (2160p) olarak yüklendiyse, indirme seçenekleri arasında 4K çözünürlüğü sunarız. Videoyu MP4 formatında, filigransız ve en yüksek kalitede kaydedersiniz.',
  },
  {
    q: 'Video neden 4K yerine daha düşük çözünürlükte iniyor?',
    a: 'İndirilebilecek en yüksek kalite, videonun Pinterest’e yüklendiği çözünürlükle sınırlıdır. İçerik üreticisi videoyu 1080p olarak yüklediyse 4K seçeneği çıkmaz; aracımız yalnızca kaynakta gerçekten var olan kaliteleri listeler.',
  },
  {
    q: 'HD (720p), Full HD (1080p) ve 4K arasındaki fark nedir?',
    a: '720p (HD) dengeli boyut/kalite sunar, 1080p (Full HD) daha keskin ve nettir, 4K (2160p) ise dört kat daha fazla piksel içerir ve büyük ekranlarda en yüksek netliği verir. Daha yüksek çözünürlük daha büyük dosya boyutu demektir.',
  },
  {
    q: '4K video hangi formatta indirilir?',
    a: 'Videolar evrensel olarak uyumlu MP4 (H.264/H.265) formatında indirilir; telefon, tablet, bilgisayar ve akıllı TV’lerde ek uygulama gerekmeden oynatılır.',
  },
  {
    q: '4K Pinterest videosu indirmek ücretsiz mi?',
    a: 'Evet. HD, Full HD ve 4K dahil tüm kalite seçenekleri tamamen ücretsizdir; kayıt, ödeme veya günlük indirme sınırı yoktur.',
  },
];

// "Video indirici" (downloader tool) cluster — /pinterest-video-indirici/.
export const DOWNLOADER_FAQ: QA[] = [
  {
    q: 'Pinterest video indirici nedir?',
    a: 'Pinterest video indirici, bir pinin bağlantısını yapıştırdığınızda videoyu MP4 olarak cihazınıza kaydetmenizi sağlayan çevrimiçi bir araçtır. Tarayıcı üzerinden çalışır; ayrı bir uygulama veya eklenti kurmanız gerekmez.',
  },
  {
    q: 'İndiriciyi kullanmak için uygulama kurmam gerekir mi?',
    a: 'Hayır. Araç tamamen tarayıcı tabanlıdır. Android, iPhone, tablet veya bilgisayarınızdaki tarayıcıdan açıp bağlantıyı yapıştırmanız yeterlidir; kurulum, kayıt ve giriş gerekmez.',
  },
  {
    q: 'Pinterest video indirici HD ve 4K destekliyor mu?',
    a: 'Evet. İndirici, kaynak videoda mevcut olan en yüksek kaliteyi (HD 720p, Full HD 1080p ve mümkünse 4K) seçenek olarak sunar ve videoyu filigransız indirir.',
  },
  {
    q: 'Online indirici ile tarayıcı eklentisi arasındaki fark nedir?',
    a: 'Online indirici herhangi bir eklenti gerektirmez, her cihazda ve her tarayıcıda aynı şekilde çalışır ve güncelleme gerektirmez. Eklentiler ise yalnızca belirli masaüstü tarayıcılarında çalışır ve ek izin ister.',
  },
  {
    q: 'İndirici güvenli mi?',
    a: 'Evet. Yapıştırdığınız bağlantı yalnızca indirme işlemi için kullanılır ve saklanmaz; videolar sunucularımızda kalıcı olarak tutulmaz. Kişisel bilgi veya giriş istemez.',
  },
];

// Free / ücretsiz cluster — /pinterest-video-indir-ucretsiz/.
export const FREE_FAQ: QA[] = [
  {
    q: 'Pinterest video indirmek gerçekten ücretsiz mi?',
    a: 'Evet, tamamen ücretsizdir. Video indirmek için ödeme, abonelik veya kredi kartı bilgisi gerekmez. İstediğiniz kadar video indirebilirsiniz.',
  },
  {
    q: 'Günlük indirme sınırı var mı?',
    a: 'Hayır. Günlük veya aylık bir indirme limiti yoktur; sınırsız sayıda Pinterest videosu indirebilirsiniz.',
  },
  {
    q: 'Ücretsiz sürümde filigran veya kalite kısıtlaması oluyor mu?',
    a: 'Hayır. Ücretsiz olmasına rağmen videolar filigransız ve kaynaktaki en yüksek kalitede (HD, Full HD, 4K) indirilir. “Premium” için saklanan gizli bir özellik yoktur.',
  },
  {
    q: 'Kayıt olmam veya hesap açmam gerekir mi?',
    a: 'Hayır. Üyelik, e-posta veya giriş gerektirmez. Bağlantıyı yapıştırıp doğrudan indirebilirsiniz.',
  },
  {
    q: 'Gizli ücret veya sonradan çıkan abonelik var mı?',
    a: 'Hayır. Hiçbir aşamada ücret talep edilmez; deneme süresi veya otomatik yenilenen abonelik yoktur. Araç kalıcı olarak ücretsizdir.',
  },
];

// Generic "pin" cluster (any media type) — /pinterest-pin-indir/.
export const PIN_FAQ: QA[] = [
  {
    q: 'Pinterest pini nasıl indirilir?',
    a: 'Pinin bağlantısını kopyalayın, aracımıza yapıştırın ve “İndir”e basın. Araç, pindeki içeriği (video, görsel veya GIF) algılar ve uygun formatta filigransız indirmenizi sağlar.',
  },
  {
    q: 'Her tür pini indirebilir miyim?',
    a: 'Evet. Video pinleri MP4, görsel pinleri tam çözünürlüklü resim, hareketli pinler GIF/MP4 ve karusel pinleri içindeki tüm medya olarak indirilebilir.',
  },
  {
    q: 'Pin içinde birden fazla görsel varsa ne olur?',
    a: 'Karusel (çoklu) pinlerde araç pindeki tüm görselleri ve videoları listeler; istediğinizi tek tek veya tümünü indirebilirsiniz.',
  },
  {
    q: 'Pin bağlantısını nereden alırım?',
    a: 'Pini açın, “Paylaş” simgesine dokunun ve “Bağlantıyı kopyala” deyin. Kopyaladığınız bağlantıyı aracımızın kutusuna yapıştırmanız yeterlidir.',
  },
  {
    q: 'Pin indirmek ücretsiz mi?',
    a: 'Evet. Pin türü ne olursa olsun indirme tamamen ücretsiz ve sınırsızdır; kayıt gerektirmez.',
  },
];

// Consumed by the dedicated /sss/ page.
export const ALL_FAQ_GROUPS: FaqGroup[] = [
  { title: 'Genel & Video İndirme', items: HOME_FAQ },
  { title: 'Resim (Görsel) İndirme', items: IMAGE_FAQ },
  { title: 'GIF İndirme', items: GIF_FAQ },
  { title: 'Karusel İndirme', items: CAROUSEL_FAQ },
];

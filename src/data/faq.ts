// FAQ content is defined once and consumed by both the visible <Faq>
// accordion and the FAQPage JSON-LD (AEO/GEO). Keep answers concise,
// self-contained and factual so they can be lifted into AI answers and
// Google's featured snippets / AI Overview.

// `a` is the single source of truth for an answer. It may contain inline links
// (<a href="…">) — the visible accordion renders it as HTML, and faqSchema()
// strips the tags for the JSON-LD, so the structured data and the visible text
// can never drift apart in wording.
export type QA = { q: string; a: string };

// Grouped FAQ for the dedicated /sss/ page. `id` is the anchor target used by
// the on-page table of contents.
export type FaqGroup = { title: string; items: QA[]; id?: string; intro?: string };

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
// NOTE: the "…indirici nedir?" definition question deliberately lives on
// /pinterest-video-indirici-nedir/ instead, so the two pages don't emit
// competing FAQPage answers for the same query. Keep this set tool-focused.
export const DOWNLOADER_FAQ: QA[] = [
  {
    q: 'Bu indirici hangi Pinterest bağlantılarıyla çalışır?',
    a: 'pinterest.com, tr.pinterest.com ve kısaltılmış pin.it adresleriyle çalışır; bağlantının herkese açık bir pine ait olması yeterlidir. Gizli panolardaki, silinmiş veya kısıtlanmış pinler indirilemez. İndirici kavramının tanımını, türlerini ve sınırlarını “Pinterest video indirici nedir?” rehberimizde ayrıntılı olarak açıklıyoruz.',
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

// "How to download" cluster — /pinterest-video-nasil-indirilir/.
export const HOWTO_FAQ: QA[] = [
  {
    q: 'Pinterest videosu nasıl indirilir?',
    a: 'Videoyu Pinterest’te açın, “Paylaş → Bağlantıyı kopyala” deyin. Kopyaladığınız bağlantıyı aracımızdaki kutuya yapıştırıp “İndir”e basın; ardından kaliteyi seçerek videoyu MP4 olarak kaydedin.',
  },
  {
    q: 'Telefondan Pinterest videosu nasıl indirilir?',
    a: 'Android’de Pinterest uygulamasında “Paylaş → Bağlantıyı kopyala” deyin, bağlantıyı tarayıcıdaki aracımıza yapıştırıp indirin; video galeriye kaydedilir. iPhone’da video önce Dosyalar’a iner, oradan “Videoyu Kaydet” ile Fotoğraflar’a eklenir.',
  },
  {
    q: 'Bilgisayardan Pinterest videosu nasıl indirilir?',
    a: 'Pinterest’te videonun altındaki “Paylaş” düğmesinden bağlantıyı kopyalayın (veya tarayıcının adres çubuğundaki URL’yi alın), aracımıza yapıştırın ve “İndir”e basın. Video, İndirilenler klasörüne MP4 olarak kaydedilir.',
  },
  {
    q: 'Pinterest uygulamasında neden “videoyu indir” seçeneği yok?',
    a: 'Pinterest uygulaması videoları yalnızca uygulama içinde kaydeder; cihaza indirme seçeneği sunmaz. Videoyu gerçekten indirmek için bağlantısını kopyalayıp aracımız gibi bir indirici kullanmanız gerekir.',
  },
  {
    q: 'Bağlantıyı kopyalayamıyorum, ne yapmalıyım?',
    a: 'Videoyu tarayıcıda açıp adres çubuğundaki URL’yi kopyalayabilir ya da pinin “...” menüsündeki “Bağlantıyı kopyala” seçeneğini kullanabilirsiniz. Bağlantı pin.it veya pinterest.com ile başlıyorsa araçla çalışır.',
  },
];

// Watermark-free cluster — /pinterest-filigransiz-video-indir/.
export const WATERMARK_FAQ: QA[] = [
  {
    q: 'Pinterest videosunu filigransız nasıl indirebilirim?',
    a: 'Bağlantıyı aracımıza yapıştırıp indirmeniz yeterli. Videolar orijinal kaynağından alındığı için üzerine logo veya filigran eklenmez; dosyayı temiz ve HD kalitede kaydedersiniz.',
  },
  {
    q: 'İndirilen videoda Pinterest logosu veya filigran olur mu?',
    a: 'Hayır. Aracımız videoya kendi damgasını basmaz ve kaynağı olduğu gibi indirir. Bu nedenle indirdiğiniz videoda filigran, logo veya izleme kodu bulunmaz.',
  },
  {
    q: 'Filigransız indirmek ücretsiz mi?',
    a: 'Evet. Filigransız indirme ek bir ücret gerektirmez; tüm videolar ücretsiz, sınırsız ve filigransız olarak kaydedilir.',
  },
  {
    q: 'Videoda içerik üreticisinin kendi eklediği yazı/logo varsa kaldırılır mı?',
    a: 'Hayır. Yalnızca platform kaynaklı filigran olmaması sağlanır. İçeriği üreten kişinin videonun içine yerleştirdiği metin veya logo videonun bir parçasıdır ve kaldırılmaz.',
  },
  {
    q: 'Filigransız video indirmek yasal mı?',
    a: 'Kişisel kullanım ve çevrimdışı izleme için indirmek genellikle uygundur. Videoyu yeniden yayınlar veya ticari olarak kullanırsanız içerik sahibinin telif haklarına saygı göstermelisiniz.',
  },
];

// Upload / share guide cluster — /pinterest-video-yukleme/.
export const UPLOAD_FAQ: QA[] = [
  {
    q: 'Pinterest’e video nasıl yüklenir?',
    a: 'Pinterest uygulamasında sağ üstteki artı (+) simgesine dokunun, “Pin oluştur” deyin, galerinizden videoyu seçin; başlık, açıklama ve pano ekleyip “Yayınla”ya basın. Bilgisayarda pinterest.com’da “Oluştur → Pin oluştur” yolundan videoyu sürükleyip bırakarak yükleyebilirsiniz.',
  },
  {
    q: 'Pinterest’e yüklenen videolar hangi formatta ve boyutta olmalı?',
    a: 'Pinterest MP4, MOV ve M4V formatlarını destekler. Video pinler için önerilen en-boy oranı dikey 9:16 veya kare 1:1’dir; süre 4 saniye ile 15 dakika arasında olabilir. Dosya boyutu için üst sınır uygulamada 2 GB civarındadır.',
  },
  {
    q: 'Telefondan Pinterest’e video yükleyebilir miyim?',
    a: 'Evet. Android ve iPhone’daki Pinterest uygulamasından artı (+) simgesiyle doğrudan video yükleyebilirsiniz. Video, telefonunuzun galerisinden seçilir; ayrıca uygulama içinde kaydederek de çekim yapabilirsiniz.',
  },
  {
    q: 'Pinterest video yükleme ile video paylaşma arasındaki fark nedir?',
    a: '“Yükleme”, kendi videonuzu bir pin olarak Pinterest’e eklemektir. “Paylaşma” ise var olan bir pini başkalarına göndermek veya panolarınıza kaydetmektir. Bu sayfa kendi videonuzu yüklemeyi anlatır; başka birinin pinini kaydetmek için indirme araçlarını kullanın.',
  },
  {
    q: 'Yüklediğim video neden yayınlanmıyor veya hata veriyor?',
    a: 'En sık nedenler: desteklenmeyen format, çok uzun/çok büyük dosya veya zayıf internet bağlantısıdır. Videoyu MP4’e dönüştürün, süresini 15 dakikanın altına indirin ve kararlı bir bağlantıda yeniden deneyin. Telif hakkı ihlali içeren videolar da reddedilebilir.',
  },
  {
    q: 'Pinterest’e yüklediğim videoya bağlantı (link) ekleyebilir miyim?',
    a: 'Evet. Pin oluştururken “Hedef bağlantısı” alanına kendi web sitenizin veya ürün sayfanızın adresini ekleyebilirsiniz. Böylece pine tıklayan kullanıcılar doğrudan ilgili sayfaya yönlendirilir; bu, trafik çekmek için etkili bir yöntemdir.',
  },
  {
    q: 'Yüklediğim videoyu daha sonra düzenleyebilir veya silebilir miyim?',
    a: 'Evet. Profilinizdeki pine gidip üç nokta (•••) menüsünden “Pin’i düzenle” ile başlık, açıklama, pano ve bağlantıyı değiştirebilir; “Sil” ile pini tamamen kaldırabilirsiniz. Videonun kendisi değiştirilemez, ancak silip yeniden yükleyebilirsiniz.',
  },
  {
    q: 'Başkasının videosunu Pinterest’e yükleyebilir miyim?',
    a: 'Yalnızca size ait olan veya paylaşma iznine sahip olduğunuz içerikleri yüklemenizi öneririz. İzinsiz yüklenen telifli videolar kaldırılabilir ve hesabınız kısıtlanabilir. Emin değilseniz içerik sahibinden izin alın veya kaynağı belirtin.',
  },
];

// Story / hikaye download cluster — /pinterest-story-indir/.
export const STORY_FAQ: QA[] = [
  {
    q: 'Pinterest story (hikaye) videosu nasıl indirilir?',
    a: 'Story ya da Idea (fikir) pininin bağlantısını kopyalayın, aracımızdaki kutuya yapıştırın ve “İndir”e basın. Araç, hikayedeki videoyu MP4 olarak, filigransız ve orijinal kalitesinde cihazınıza kaydeder.',
  },
  {
    q: 'Pinterest’te “story” ile “Idea Pin” aynı şey mi?',
    a: 'Büyük ölçüde evet. Pinterest’in daha önce “Story Pin” dediği içerik türü şimdi “Idea Pin” (Fikir Pini) olarak adlandırılır. Her ikisi de birden fazla video/görsel sayfasından oluşabilen tam ekran içeriklerdir; aracımız bu içerikteki medyayı indirmenizi sağlar.',
  },
  {
    q: 'Story bağlantısını nasıl kopyalarım?',
    a: 'Hikayeyi açın, üç nokta (•••) veya “Paylaş” simgesine dokunun ve “Bağlantıyı kopyala” deyin. Kopyalanan bağlantı pin.it veya pinterest.com ile başlıyorsa aracımızla çalışır.',
  },
  {
    q: 'Bir Idea Pin’de birden fazla sayfa varsa hepsini indirebilir miyim?',
    a: 'Evet. Çok sayfalı bir fikir pininde araç, içindeki her video ve görseli ayrı ayrı listeler; istediğiniz sayfayı tek tek veya tümünü sırayla indirebilirsiniz.',
  },
  {
    q: 'İndirilen story videosunda filigran veya kullanıcı adı olur mu?',
    a: 'Hayır. Video orijinal kaynağından alındığı için üzerine platform filigranı veya kullanıcı adı damgası eklenmez. Ancak içeriği üreten kişinin videonun içine yerleştirdiği yazılar videonun bir parçasıdır ve kaldırılmaz.',
  },
  {
    q: 'Story sadece görsellerden oluşuyorsa ne indirilir?',
    a: 'Hikaye yalnızca fotoğraflardan oluşuyorsa araç görselleri tam çözünürlükte indirmenizi sağlar. Video içeren sayfalar MP4, görsel sayfalar ise resim olarak kaydedilir.',
  },
  {
    q: 'Pinterest story indirmek ücretsiz mi?',
    a: 'Evet. Story/Idea Pin indirme de diğer içerikler gibi tamamen ücretsiz ve sınırsızdır; kayıt, üyelik veya uygulama kurulumu gerektirmez.',
  },
  {
    q: 'İndirdiğim story’yi başka yerde paylaşabilir miyim?',
    a: 'Yalnızca size ait olan veya indirme iznine sahip olduğunuz içerikleri kaydetmenizi öneririz. Başkasının hikayesini yeniden yayınlayacaksanız içerik sahibinden izin alın ve telif haklarına saygı gösterin.',
  },
];

// iPhone / iOS device cluster — /iphone-pinterest-video-indir/.
export const IPHONE_FAQ: QA[] = [
  {
    q: 'iPhone’da Pinterest videosu nasıl indirilir?',
    a: 'Safari’de sitemizi açın, Pinterest’te videonun “Paylaş → Bağlantıyı kopyala” bağlantısını alın, kutuya yapıştırıp “İndir”e basın ve kaliteyi seçin. Video önce “Dosyalar” uygulamasına iner; oradan Fotoğraflar’a kaydedebilirsiniz. Ek uygulama gerekmez.',
  },
  {
    q: 'İndirdiğim video iPhone galerisine (Fotoğraflar) neden doğrudan inmiyor?',
    a: 'iOS, tarayıcıdan inen dosyaları güvenlik nedeniyle önce “Dosyalar” uygulamasına kaydeder. Dosyalar → İndirilenler klasöründe videoya dokunup “Paylaş → Videoyu Kaydet” dediğinizde video Fotoğraflar (galeri) uygulamasına taşınır.',
  },
  {
    q: 'iPhone’a Pinterest videosu indirmek için uygulama kurmam gerekir mi?',
    a: 'Hayır. İşlem tamamen Safari (veya Chrome) tarayıcısı üzerinden yapılır. App Store’dan herhangi bir kısayol veya indirme uygulaması kurmanıza gerek yoktur.',
  },
  {
    q: 'iPad’de de aynı yöntem çalışır mı?',
    a: 'Evet. iPadOS, iPhone ile aynı şekilde çalışır. Safari’de bağlantıyı yapıştırıp indirin; dosya “Dosyalar” uygulamasına iner ve oradan Fotoğraflar’a aktarılabilir.',
  },
  {
    q: 'Kısayollar (Shortcuts) uygulaması olmadan indirebilir miyim?',
    a: 'Evet. Aracımız tarayıcı tabanlı olduğu için Kısayollar (Shortcuts) tarifine gerek yoktur. Yalnızca bağlantıyı yapıştırıp indirmeniz yeterlidir; bu yöntem daha hızlı ve daha güvenlidir.',
  },
  {
    q: 'iPhone’da “İndirilenler” klasörünü nerede bulurum?',
    a: '“Dosyalar” uygulamasını açın, “Gözat” sekmesinden “iCloud Drive” veya “Bu iPhone’da” altındaki “İndirilenler” klasörüne girin. Safari ile indirdiğiniz videolar burada listelenir.',
  },
  {
    q: 'Video Safari yerine Chrome’da da indirilebilir mi?',
    a: 'Evet. iPhone’daki Chrome tarayıcısı da desteklenir; işlem aynıdır. Ancak iOS kısıtlamaları nedeniyle dosya yine “Dosyalar” uygulamasına iner ve oradan galeriye kaydedilir.',
  },
  {
    q: 'iPhone’da Pinterest video indirmek güvenli mi?',
    a: 'Evet. Yalnızca size ait olan veya indirme iznine sahip olduğunuz içerikleri kaydetmenizi öneririz. Araç giriş bilgisi istemez, bağlantıyı saklamaz ve cihazınıza uygulama kurmaz; işlem tarayıcıda güvenle tamamlanır.',
  },
];

// Android device cluster — /android-pinterest-video-indir/.
export const ANDROID_FAQ: QA[] = [
  {
    q: 'Android’de Pinterest videosu nasıl indirilir?',
    a: 'Chrome (veya herhangi bir tarayıcı) ile sitemizi açın, Pinterest’te videonun “Paylaş → Bağlantıyı kopyala” bağlantısını alın, kutuya yapıştırıp “İndir”e basın ve kaliteyi seçin. Video doğrudan telefonunuzun galerisine veya “İndirilenler” klasörüne MP4 olarak kaydedilir.',
  },
  {
    q: 'İndirdiğim video Android galerisinde görünmüyor, nerede?',
    a: 'Bazı tarayıcılar dosyaları önce “İndirilenler” klasörüne koyar. Dosya Yöneticisi → İndirilenler klasörüne bakın; çoğu galeri uygulaması bu klasörü otomatik tarar. Görünmüyorsa galeriyi kapatıp açmak veya telefonu yeniden başlatmak yeterli olur.',
  },
  {
    q: 'Android’de Pinterest videosu indirmek için uygulama gerekir mi?',
    a: 'Hayır. İşlem tarayıcı üzerinden yapılır; Play Store’dan ayrı bir indirme uygulaması kurmanıza gerek yoktur. Bu, depolama kazandırır ve reklam/izin riskini ortadan kaldırır.',
  },
  {
    q: 'Samsung, Xiaomi ve diğer Android markalarında çalışır mı?',
    a: 'Evet. Araç markadan bağımsız olarak tüm Android telefon ve tabletlerde (Samsung, Xiaomi, Oppo, Huawei, realme vb.) aynı şekilde çalışır; tek gereken güncel bir tarayıcıdır.',
  },
  {
    q: 'Videoyu doğrudan galeriye kaydetmenin yolu nedir?',
    a: 'İndirme tamamlandığında tarayıcının bildirimi üzerinden dosyayı açıp galeriye taşıyabilirsiniz. Çoğu Android sürümünde video, indirildiği anda otomatik olarak “Galeri/Fotoğraflar” içinde “İndirilenler” albümünde görünür.',
  },
  {
    q: 'Chrome dışında Firefox veya Samsung Internet ile indirebilir miyim?',
    a: 'Evet. Firefox, Samsung Internet, Opera ve diğer Android tarayıcıları desteklenir. Bağlantıyı yapıştırıp indirme adımları her tarayıcıda aynıdır.',
  },
  {
    q: 'İndirme sırasında “depolama izni” isteniyor, güvenli mi?',
    a: 'Tarayıcı, dosyayı cihaza kaydedebilmek için depolama iznini isteyebilir; bu normaldir ve yalnızca indirilen videoyu kaydetmek için kullanılır. Araç kişisel bilgi veya Pinterest giriş bilgisi istemez.',
  },
  {
    q: 'Android’de Pinterest video indirmek ücretsiz ve güvenli mi?',
    a: 'Evet. İndirme tamamen ücretsiz ve sınırsızdır. Yalnızca size ait olan veya indirme iznine sahip olduğunuz içerikleri kaydetmenizi öneririz; araç bağlantıyı saklamaz ve giriş gerektirmez.',
  },
];

// macOS / Mac desktop cluster — /mac-pinterest-video-indir/.
export const MAC_FAQ: QA[] = [
  {
    q: 'Mac’te Pinterest videosu nasıl indirilir?',
    a: 'Mac’te Safari, Chrome veya Firefox ile sitemizi açın. Pinterest’te videoyu açıp “Paylaş → Bağlantıyı kopyala” deyin (ya da adres çubuğundaki URL’yi alın), bağlantıyı kutuya yapıştırıp “İndir”e basın ve kaliteyi seçin. Video MP4 olarak “İndirilenler” klasörüne kaydedilir; uygulama kurmanıza gerek yoktur.',
  },
  {
    q: 'macOS’ta indirdiğim video nereye kaydedilir?',
    a: 'Varsayılan olarak video, kullanıcı klasörünüzdeki “İndirilenler” (Downloads) klasörüne iner ve Dock’taki İndirilenler yığınında görünür. Safari’de indirme konumunu “Ayarlar → Genel → Dosya indirme konumu” bölümünden değiştirebilirsiniz.',
  },
  {
    q: 'Mac’te Safari mi yoksa Chrome mu kullanmalıyım?',
    a: 'İkisi de sorunsuz çalışır ve adımlar aynıdır. Safari, macOS ile tam entegre olduğu için en akıcı ve pil dostu deneyimi sunar; Chrome veya Firefox kullanıyorsanız da videoyu aynı şekilde MP4 olarak indirebilirsiniz.',
  },
  {
    q: 'Mac’e Pinterest videosu indirmek için uygulama veya eklenti gerekir mi?',
    a: 'Hayır. İşlem tamamen tarayıcı üzerinden yapılır. App Store’dan uygulama ya da tarayıcıya eklenti kurmanıza gerek yoktur; bu, disk alanı kazandırır ve gereksiz izin/reklam riskini ortadan kaldırır.',
  },
  {
    q: 'İndirdiğim videoyu Mac’te nasıl açar veya düzenlerim?',
    a: 'MP4 dosyaları Mac’te QuickTime Player ile doğrudan açılır. Düzenlemek isterseniz iMovie’ye sürükleyip kırpabilir, ardından yeniden dışa aktarabilirsiniz. Format evrensel olduğu için ek kod çözücü (codec) gerekmez.',
  },
  {
    q: 'Mac’ten indirdiğim videoyu iPhone’a aktarabilir miyim?',
    a: 'Evet. İndirilen MP4’ü AirDrop ile iPhone veya iPad’inize saniyeler içinde gönderebilir, iCloud Drive ya da Fotoğraflar üzerinden eşitleyebilirsiniz. Böylece bilgisayarda indirip telefonda çevrimdışı izleyebilirsiniz.',
  },
  {
    q: 'Video 4K veya Full HD olarak Mac’e iniyor mu?',
    a: 'Evet. Kaynak video hangi çözünürlükte yüklendiyse (HD 720p, Full HD 1080p ve mümkünse 4K) onu seçenek olarak sunarız. Retina ekranlı Mac’lerde yüksek çözünürlüklü indirme daha net görüntü sağlar.',
  },
  {
    q: 'Mac’te Pinterest video indirmek ücretsiz ve güvenli mi?',
    a: 'Evet. İndirme tamamen ücretsiz ve sınırsızdır. Araç Pinterest giriş bilgisi istemez, yapıştırdığınız bağlantıyı saklamaz ve Mac’inize hiçbir dosya kurmaz. Yalnızca size ait olan veya izniniz olan içerikleri indirmenizi öneririz.',
  },
];

// Windows desktop cluster — /windows-pinterest-video-indir/.
export const WINDOWS_FAQ: QA[] = [
  {
    q: 'Windows’ta Pinterest videosu nasıl indirilir?',
    a: 'Windows bilgisayarda Chrome, Edge veya Firefox ile sitemizi açın. Pinterest’te videoyu açıp “Paylaş → Bağlantıyı kopyala” deyin (ya da adres çubuğundaki URL’yi kopyalayın), bağlantıyı kutuya yapıştırıp “İndir”e basın ve kaliteyi seçin. Video MP4 olarak “İndirilenler” klasörüne kaydedilir.',
  },
  {
    q: 'Bilgisayara inen video hangi klasöre kaydedilir?',
    a: 'Varsayılan olarak video, Dosya Gezgini’ndeki “İndirilenler” (Downloads) klasörüne iner. Tarayıcının sağ üstündeki indirme simgesine tıklayıp “Klasörde göster” diyerek dosyaya hızlıca ulaşabilirsiniz.',
  },
  {
    q: 'Windows’ta hangi tarayıcı en iyisi: Chrome, Edge yoksa Firefox mu?',
    a: 'Üçü de sorunsuz çalışır ve adımlar aynıdır. Chrome ve Edge çoğu Windows bilgisayarında hazır gelir; Firefox da desteklenir. Tarayıcı fark etmeksizin video MP4 olarak İndirilenler klasörüne kaydedilir.',
  },
  {
    q: 'Windows’a Pinterest videosu indirmek için program kurmam gerekir mi?',
    a: 'Hayır. İşlem tamamen tarayıcı tabanlıdır; masaüstü programı, eklenti veya Microsoft Store uygulaması kurmanıza gerek yoktur. Bu, kurulum derdini ve olası reklam yazılımı riskini ortadan kaldırır.',
  },
  {
    q: 'İndirdiğim MP4’ü Windows’ta hangi oynatıcıyla açarım?',
    a: 'MP4 dosyaları Windows’un yerleşik “Medya Yürütücüsü” (Films & TV / Media Player) ile doğrudan açılır. Dilerseniz VLC gibi ücretsiz bir oynatıcı da kullanabilirsiniz; ek codec kurulumu genellikle gerekmez.',
  },
  {
    q: 'Windows 10 ve Windows 11’de yöntem aynı mı?',
    a: 'Evet. Araç tarayıcı üzerinden çalıştığı için Windows 10, Windows 11 ve daha eski sürümlerde tamamen aynı şekilde kullanılır. Tek gereken güncel bir web tarayıcısıdır.',
  },
  {
    q: 'Bilgisayardan Full HD veya 4K Pinterest videosu indirebilir miyim?',
    a: 'Evet. Kaynak videonun yüklendiği çözünürlüğe göre HD 720p, Full HD 1080p ve mümkünse 4K seçeneği sunarız. Büyük monitörlerde izlemek veya düzenlemek için en yüksek kaliteyi seçebilirsiniz.',
  },
  {
    q: 'Windows’ta Pinterest video indirmek ücretsiz ve güvenli mi?',
    a: 'Evet. İndirme tamamen ücretsiz ve sınırsızdır. Araç giriş bilgisi istemez, yapıştırdığınız bağlantıyı saklamaz ve bilgisayarınıza hiçbir program kurmaz. Yalnızca size ait olan veya indirme iznine sahip olduğunuz içerikleri kaydetmenizi öneririz.',
  },
];

// MP4 / HD direct-link cluster — /pinterest-mp4-indir/.
export const MP4_FAQ: QA[] = [
  {
    q: 'Pinterest videosunu MP4 olarak nasıl indiririm?',
    a: 'Pinterest’te videoyu açıp “Paylaş → Bağlantıyı kopyala” deyin, bağlantıyı aracımızdaki kutuya yapıştırın ve “İndir”e basın. Video, ek dönüştürme yapmanıza gerek kalmadan doğrudan MP4 formatında cihazınıza kaydedilir.',
  },
  {
    q: 'Pinterest videosunu ayrı bir MP4 dönüştürücüye ihtiyaç duymadan indirebilir miyim?',
    a: 'Evet. Pinterest videoları zaten MP4 tabanlı sunulduğu için aracımız videoyu doğrudan MP4 olarak verir; ayrı bir “MP4 dönüştürücü” programına veya çevrimiçi dönüştürme adımına gerek yoktur. Bağlantıyı yapıştırıp indirmeniz yeterlidir.',
  },
  {
    q: 'HD (1080p) MP4 indirebilir miyim?',
    a: 'Evet. Kaynak video hangi çözünürlükte yüklendiyse (HD 720p, Full HD 1080p ve mümkünse 4K) o kaliteyi MP4 olarak sunarız. İndirme seçenekleri arasından en yüksek HD kaliteyi seçebilirsiniz.',
  },
  {
    q: 'MP4 dosyasının doğrudan bağlantısını (link) alabilir miyim?',
    a: 'Aracımız videoyu analiz ettikten sonra indirilebilir MP4 bağlantısını size sunar; bağlantıya dokunarak videoyu MP4 olarak kaydeder veya tarayıcıda açabilirsiniz. Bu bağlantı geçicidir ve yalnızca indirme için kullanılır.',
  },
  {
    q: 'İndirilen MP4 hangi cihaz ve oynatıcılarda çalışır?',
    a: 'MP4 evrensel bir formattır; Android, iPhone, Windows, Mac, tablet ve akıllı TV’lerde ek codec veya uygulama gerekmeden oynatılır. WhatsApp, Instagram ve video düzenleyicilerle de sorunsuz uyumludur.',
  },
  {
    q: 'Pinterest MP4 indirme ücretsiz mi?',
    a: 'Evet. MP4 (HD dahil) indirme tamamen ücretsiz ve sınırsızdır; kayıt, ödeme veya günlük indirme limiti yoktur.',
  },
];

// Video quality troubleshooting cluster — /pinterest-video-kalitesi/.
export const QUALITY_FAQ: QA[] = [
  {
    q: 'İndirdiğim Pinterest videosu neden düşük kaliteli veya bulanık?',
    a: 'İndirilebilecek en yüksek kalite, videonun Pinterest’e yüklendiği çözünürlükle sınırlıdır. İçerik üreticisi videoyu düşük çözünürlükte yüklediyse indirilen dosya da o netlikte olur. Ayrıca yanlışlıkla düşük bir kalite seçeneği (ör. 480p) seçmek de bulanık sonuç verebilir.',
  },
  {
    q: 'Pinterest videosunu en yüksek kalitede nasıl indiririm?',
    a: 'Bağlantıyı aracımıza yapıştırdıktan sonra listelenen kalite seçenekleri arasından en yükseğini — mümkünse Full HD (1080p) veya 4K — seçin. Aracımız yalnızca kaynakta gerçekten var olan çözünürlükleri gösterir, böylece şişirilmiş değil gerçek kaliteli bir video indirirsiniz.',
  },
  {
    q: 'Düşük çözünürlüklü bir videoyu 1080p veya 4K’ya yükseltebilir miyim?',
    a: 'Hayır. Hiçbir araç düşük çözünürlüklü bir kaynağı gerçek anlamda HD veya 4K’ya “yükseltemez”; yapay büyütme yalnızca dosya boyutunu artırır, netliği değil. Gerçek yüksek kalite ancak videonun kaynağı yüksek çözünürlükteyse mümkündür.',
  },
  {
    q: 'Aynı videoyu farklı araçlarda indirince kalite neden değişiyor?',
    a: 'Bazı araçlar yalnızca önizleme (düşük çözünürlüklü) sürümü yakalar. Aracımız pinin en yüksek çözünürlüklü kaynağını hedefler; bu yüzden doğru aracı kullanmak indirilen videonun netliğini doğrudan etkiler.',
  },
  {
    q: 'MP4 formatı video kalitesini düşürür mü?',
    a: 'Hayır. MP4 yalnızca bir kapsayıcı formattır; kaliteyi belirleyen, videonun çözünürlüğü ve bit hızıdır. Kaynaktaki MP4 videoyu yeniden sıkıştırmadan indirdiğimiz için kalite kaybı yaşanmaz.',
  },
];

// HD / Full HD download cluster — /pinterest-hd-video-indir/.
export const HD_FAQ: QA[] = [
  {
    q: 'Pinterest videosunu HD olarak nasıl indiririm?',
    a: 'Pinterest’te videoyu açıp “Paylaş → Bağlantıyı kopyala” deyin, bağlantıyı aracımızdaki kutuya yapıştırın ve “İndir”e basın. İndirme seçenekleri arasından HD (720p) veya Full HD (1080p) kaliteyi seçtiğinizde video, filigransız MP4 olarak cihazınıza kaydedilir.',
  },
  {
    q: 'Full HD (1080p) Pinterest videosu indirebilir miyim?',
    a: 'Evet. Kaynak video Full HD yüklendiyse 1080p seçeneğini sunarız. Aracımız yalnızca kaynakta gerçekten var olan çözünürlükleri listeler; böylece net ve keskin bir HD video indirirsiniz.',
  },
  {
    q: 'Video neden HD yerine daha düşük çözünürlükte iniyor?',
    a: 'İndirilebilecek en yüksek kalite, videonun Pinterest’e yüklendiği çözünürlükle sınırlıdır. İçerik üreticisi videoyu 480p yüklediyse HD seçeneği çıkmaz. Ayrıntılı nedenler ve çözümü için video kalitesi rehberimize bakabilirsiniz.',
  },
  {
    q: 'HD video hangi formatta indirilir?',
    a: 'HD videolar evrensel olarak uyumlu MP4 formatında indirilir ve telefon, tablet, bilgisayar ile akıllı TV’lerde ek uygulama gerekmeden oynatılır.',
  },
  {
    q: 'HD Pinterest videosu indirmek ücretsiz mi?',
    a: 'Evet. HD ve Full HD dahil tüm kalite seçenekleri tamamen ücretsiz ve sınırsızdır; kayıt, ödeme veya günlük indirme limiti yoktur.',
  },
  {
    q: 'İndirdiğim HD videoda filigran olur mu?',
    a: 'Hayır. Video orijinal kaynağından alındığı için üzerinde logo veya filigran bulunmaz; HD kaliteyi temiz ve orijinal haliyle kaydedersiniz.',
  },
];

// Link / URL-based download cluster — /pinterest-video-link-indir/.
export const LINK_FAQ: QA[] = [
  {
    q: 'Pinterest video linki (bağlantısı) ile nasıl indirilir?',
    a: 'Videonun bağlantısını (linkini) kopyalayın, aracımızdaki kutuya yapıştırın ve “İndir”e basın. Araç, linkteki videoyu analiz edip MP4 olarak filigransız indirmenizi sağlar; başka bir program gerekmez.',
  },
  {
    q: 'Pin bağlantısını (linkini) nereden kopyalarım?',
    a: 'Pini açın, “Paylaş” simgesine dokunun ve “Bağlantıyı kopyala” deyin. Tarayıcıda ise adres çubuğundaki URL’yi de kopyalayabilirsiniz. Link pin.it veya pinterest.com ile başlıyorsa araçla çalışır.',
  },
  {
    q: 'pin.it kısa linki ile de çalışır mı?',
    a: 'Evet. Pinterest’in paylaşım menüsünden gelen kısa “pin.it” bağlantıları da desteklenir. Aracımız kısa linki otomatik olarak asıl pin adresine çözümleyip videoyu indirir.',
  },
  {
    q: 'Adres çubuğundaki URL’yi doğrudan kullanabilir miyim?',
    a: 'Evet. Videoyu tarayıcıda açtığınızda adres çubuğunda görünen pinterest.com/pin/... bağlantısını kopyalayıp kutuya yapıştırmanız yeterlidir; “Paylaş” menüsünü kullanmak zorunda değilsiniz.',
  },
  {
    q: 'Linki yapıştırdım ama video inmiyor, ne yapmalıyım?',
    a: 'Bağlantının herkese açık bir pine ait olduğundan ve pinterest.com veya pin.it ile başladığından emin olun. Özel (gizli) panolardaki veya silinmiş pinlerin linkleri indirilemez. Farklı, herkese açık bir pin bağlantısı deneyin.',
  },
  {
    q: 'Link ile Pinterest videosu indirmek ücretsiz mi?',
    a: 'Evet. Bağlantı yapıştırarak indirme tamamen ücretsiz ve sınırsızdır; kayıt gerektirmez ve yapıştırdığınız link saklanmaz.',
  },
];

// "Pinterest açılmıyor / çalışmıyor" troubleshooting cluster — /pinterest-acilmiyor/.
export const ACILMIYOR_FAQ: QA[] = [
  {
    q: 'Pinterest neden açılmıyor?',
    a: 'En sık nedenler: Pinterest sunucularında geçici bir kesinti, zayıf veya kararsız internet bağlantısı, uygulamanın güncel olmaması, dolan önbellek (cache) ve nadiren hesap/yaş doğrulama sorunudur. Önce başka bir site açılıyor mu diye bakın; açılıyorsa sorun büyük olasılıkla Pinterest tarafında ya da uygulamadadır.',
  },
  {
    q: 'Pinterest açılmıyorsa ilk ne yapmalıyım?',
    a: 'Sırasıyla şunları deneyin: (1) internet bağlantınızı kontrol edin veya Wi‑Fi ile mobil veri arasında geçiş yapın, (2) uygulamayı tamamen kapatıp yeniden açın, (3) telefonu yeniden başlatın, (4) uygulama önbelleğini temizleyin, (5) Pinterest’i güncelleyin. Sorun tarayıcıdaysa farklı bir tarayıcı veya gizli sekme deneyin.',
  },
  {
    q: 'Sorun bende mi yoksa Pinterest’te mi, nasıl anlarım?',
    a: 'Aynı anda başka uygulama ve siteler normal çalışıyor, yalnızca Pinterest açılmıyorsa sorun büyük ihtimalle Pinterest sunucularında veya uygulamadadır. Bunu, Pinterest’i hem uygulamada hem tarayıcıda (pinterest.com) hem de mobil veriyle deneyerek doğrulayabilirsiniz; hepsinde açılmıyorsa beklemek dışında yapılacak bir şey yoktur.',
  },
  {
    q: 'Pinterest önbelleğini (cache) nasıl temizlerim?',
    a: 'Android’de Ayarlar → Uygulamalar → Pinterest → Depolama → “Önbelleği temizle” yolunu izleyin. iPhone’da doğrudan önbellek temizleme yoktur; uygulamayı silip App Store’dan yeniden kurmak aynı işi görür. Tarayıcıda ise tarayıcı ayarlarından site verilerini/çerezleri temizleyip sayfayı yenileyin.',
  },
  {
    q: 'Pinterest sadece Türkiye’de mi açılmıyor?',
    a: 'Zaman zaman bölgesel erişim sorunları veya operatör kaynaklı kesintiler yaşanabilir. Böyle bir durumda mobil veri ile Wi‑Fi arasında geçiş yapmak veya güvenilir bir bağlantı kullanmak sorunu çözebilir. Erişim yeniden sağlandığında beğendiğiniz videoları çevrimdışı saklamak için bağlantıyı kopyalayıp indirme aracımızı kullanabilirsiniz.',
  },
  {
    q: 'Pinterest açılıyor ama videolar oynamıyor/yüklenmiyor, neden?',
    a: 'Bu genelde yavaş bağlantı, dolu önbellek veya eski uygulama sürümünden kaynaklanır. Bağlantınızı kontrol edin, önbelleği temizleyin ve uygulamayı güncelleyin. Belirli bir videoyu sorunsuz izlemek isterseniz bağlantısını kopyalayıp aracımızla MP4 olarak indirip çevrimdışı oynatabilirsiniz.',
  },
  {
    q: 'Pinterest açılmıyorken beğendiğim videoyu yine de indirebilir miyim?',
    a: 'Videonun bağlantısına (pinterest.com/pin/... veya pin.it linki) sahipseniz, uygulama sizde açılmasa bile bağlantıyı indirme aracımıza yapıştırarak videoyu MP4 olarak kaydedebilirsiniz. Böylece içeriği çevrimdışı arşivleyip erişim geri geldiğinde de saklamış olursunuz.',
  },
  {
    q: 'Pinterest açılır açılmaz kapanıyor (çöküyor), nasıl düzeltirim?',
    a: 'Uygulamanın açılır açılmaz kapanması genellikle yetersiz boş depolama/bellek ya da bozuk bir kurulumdan kaynaklanır. Uygulamayı arka plandan tamamen kapatın, cihazınızda birkaç yüz MB boş alan açın ve telefonu yeniden başlatın. Sorun sürerse Pinterest’i kaldırıp mağazadan (Play Store / App Store) yeniden kurun; bu, güncel ve temiz bir sürüm yükleyerek çökme sorununu çoğu zaman giderir.',
  },
];

// Download/save failure troubleshooting cluster — /pinterest-video-indirilemiyor/.
export const INDIRILMIYOR_FAQ: QA[] = [
  {
    q: 'Pinterest videosu neden indirilemiyor?',
    a: 'En yaygın nedenler: Pinterest uygulamasının cihaza indirme seçeneği sunmaması, bağlantının özel/silinmiş bir pine ait olması, yanlış veya eksik kopyalanmış link, tarayıcının indirmeyi engellemesi ya da zayıf internet bağlantısıdır. Çoğu durumda doğru bağlantıyı kopyalayıp indirme aracımıza yapıştırmak sorunu çözer.',
  },
  {
    q: 'Pinterest uygulamasında “videoyu indir” seçeneği neden yok?',
    a: 'Pinterest uygulaması videoları yalnızca uygulama içinde kaydeder; cihazınızın galerisine indirme seçeneği sunmaz. Videoyu gerçekten indirmek için pinin “Paylaş → Bağlantıyı kopyala” bağlantısını alıp aracımıza yapıştırmanız ve videoyu MP4 olarak kaydetmeniz gerekir.',
  },
  {
    q: 'Bağlantıyı yapıştırdım ama video indirilemiyor, ne yapmalıyım?',
    a: 'Bağlantının herkese açık bir pine ait olduğundan ve pinterest.com/pin/... ya da pin.it ile başladığından emin olun. Özel (gizli) panolardaki veya silinmiş pinlerin bağlantıları indirilemez. Linki baştan kopyalayıp yeniden deneyin; sorun sürerse farklı, herkese açık bir pin bağlantısı kullanın.',
  },
  {
    q: 'Bağlantı (link) kopyalanmıyor veya yanlış kopyalanıyor, çözümü nedir?',
    a: 'Pinin üç nokta (•••) veya “Paylaş” menüsünden “Bağlantıyı kopyala” deyin. Bu çalışmazsa videoyu tarayıcıda açıp adres çubuğundaki pinterest.com/pin/... adresini elle kopyalayabilirsiniz. Kopyaladığınız metnin başında/sonunda boşluk kalmadığından emin olun.',
  },
  {
    q: 'İndirdiğim video telefonda galeriye/fotoğraflara kaydedilmiyor, neden?',
    a: 'Android’de bazı tarayıcılar dosyayı önce “İndirilenler” klasörüne koyar; Dosya Yöneticisi → İndirilenler klasörüne bakın. iPhone’da video önce “Dosyalar” uygulamasına iner, oradan videoya dokunup “Paylaş → Videoyu Kaydet” diyerek Fotoğraflar’a taşıyabilirsiniz.',
  },
  {
    q: 'Video indirme yarıda kesiliyor veya “başarısız oldu” hatası veriyor, ne yapmalıyım?',
    a: 'Bu genellikle bağlantı kopması veya kararsız internetten kaynaklanır. Kararlı bir Wi‑Fi’ye geçin, tarayıcının indirilenler listesinden indirmeyi yeniden başlatın ve gerekirse bağlantıyı aracımıza tekrar yapıştırın. Depolama alanınızın dolu olmadığından da emin olun.',
  },
  {
    q: 'Hangi cihaz ve tarayıcılarda indirme sorunsuz çalışır?',
    a: 'Araç tarayıcı tabanlıdır; Android, iPhone (iOS), tablet ve bilgisayarda Chrome, Safari, Edge, Firefox ve Samsung Internet gibi güncel tarayıcılarla çalışır. En sağlıklı sonuç için tarayıcınızı güncel tutun ve gizli/özel sekme yerine normal sekmede indirmeyi deneyin.',
  },
  {
    q: '“İndir” düğmesine basınca hiçbir şey olmuyor, sorun nedir?',
    a: 'Genellikle bir reklam engelleyici veya tarayıcının açılır pencere (pop‑up) engeli, indirmenin başlamasını durdurur. Reklam engelleyiciyi bu site için kapatın, tarayıcının açılır pencere iznini verin ve sayfayı yenileyip normal (gizli olmayan) sekmede yeniden deneyin. Ayrıca tarayıcıda JavaScript’in etkin olduğundan emin olun; araç, videoyu çözümlemek için JavaScript kullanır.',
  },
];

// "Pinterest linki çalışmıyor" troubleshooting cluster — /pinterest-link-calismiyor/.
export const LINK_CALISMIYOR_FAQ: QA[] = [
  {
    q: 'Pinterest linki neden çalışmıyor?',
    a: 'En sık nedenler: bağlantının eksik/yanlış kopyalanması, linkin özel (gizli) ya da silinmiş bir pine ait olması, pin.it kısa bağlantısının doğru çözülememesi veya bağlantının başında/sonunda fazladan boşluk kalmasıdır. Bağlantının pinterest.com/pin/... ya da pin.it ile başladığından ve herkese açık bir pine ait olduğundan emin olun.',
  },
  {
    q: 'pin.it bağlantısı açılmıyor, ne yapmalıyım?',
    a: 'Önce linki bir tarayıcıda açıp asıl pinterest.com/pin/... adresine yönlenip yönlenmediğine bakın. Açılmıyorsa pini yeniden paylaşıp yeni bir pin.it linki oluşturun. İndirmek için kısa linki doğrudan aracımıza da yapıştırabilirsiniz; aracımız pin.it bağlantısını otomatik olarak asıl pin adresine çözer.',
  },
  {
    q: 'Pinterest bağlantısını nasıl doğru kopyalarım?',
    a: 'Pini açın, üç nokta (•••) veya “Paylaş” simgesine dokunun ve “Bağlantıyı kopyala” deyin. Tarayıcıda ise videoyu açıp adres çubuğundaki pinterest.com/pin/... adresini kopyalayabilirsiniz. Kopyaladıktan sonra bağlantının tamamının alındığından ve başında/sonunda boşluk kalmadığından emin olun.',
  },
  {
    q: 'Linki yapıştırdım ama araç videoyu bulamıyor?',
    a: 'Bağlantının herkese açık bir pine ait olduğundan emin olun; özel panolardaki veya silinmiş pinler indirilemez. Linki baştan, eksiksiz kopyalayıp yeniden yapıştırın. Sorun sürerse aynı içeriğin farklı, herkese açık bir pin bağlantısını deneyin.',
  },
  {
    q: 'Özel (gizli) pano bağlantısı çalışır mı?',
    a: 'Hayır. Gizli panolardaki veya yalnızca sizin görebildiğiniz pinlerin bağlantıları dışarıdan açılamaz ve indirilemez. Yalnızca herkese açık pinlerin bağlantıları hem tarayıcıda açılır hem de indirme aracıyla çalışır.',
  },
  {
    q: 'Link tarayıcıda açılıyor ama uygulamada açılmıyor (veya tersi), neden?',
    a: 'Bu genellikle uygulamanın güncel olmaması, dolan önbellek veya derin bağlantı (deep link) ayarlarından kaynaklanır. Uygulamayı güncelleyip önbelleği temizleyin. İndirmek istiyorsanız uygulamaya hiç ihtiyaç yoktur; bağlantıyı tarayıcıdaki aracımıza yapıştırmanız yeterlidir.',
  },
  {
    q: 'Kopyaladığım linkin başında/sonunda fazladan karakter olabilir mi?',
    a: 'Evet. Bazen kopyalama sırasında bağlantının başına veya sonuna boşluk, tırnak ya da metin karışır ve link çalışmaz. Yapıştırdıktan sonra yalnızca pinterest.com/pin/... veya pin.it ile başlayıp biten kısmı bırakın; fazlalıkları silin.',
  },
  {
    q: 'Link ile Pinterest videosu indirmek ücretsiz ve güvenli mi?',
    a: 'Evet. Bağlantı yapıştırarak indirme tamamen ücretsiz ve sınırsızdır; kayıt gerektirmez. Yapıştırdığınız bağlantı yalnızca indirme işlemi için kullanılır, saklanmaz. Yalnızca size ait olan veya indirme iznine sahip olduğunuz içerikleri kaydetmenizi öneririz.',
  },
];

// "Pinterest videosu açılmıyor / oynatılmıyor" troubleshooting cluster — /pinterest-video-acilmiyor/.
export const VIDEO_ACILMIYOR_FAQ: QA[] = [
  {
    q: 'Pinterest videosu neden açılmıyor veya oynatılmıyor?',
    a: 'En sık nedenler: zayıf veya kararsız internet bağlantısı, dolan uygulama önbelleği, güncel olmayan uygulama/tarayıcı ve zaman zaman Pinterest sunucularındaki geçici sorunlardır. Önce bağlantınızı kontrol edin, uygulamayı yeniden başlatın, önbelleği temizleyip güncelleyin.',
  },
  {
    q: 'Video siyah/boş ekranda kalıyor, nasıl düzeltirim?',
    a: 'Siyah ekran genellikle önbellek veya oynatıcı sorunudur. Uygulamayı tamamen kapatıp açın, önbelleği temizleyin ve gerekirse cihazı yeniden başlatın. Tarayıcıda ise sayfayı yenileyin, farklı bir tarayıcı veya normal (gizli olmayan) sekme deneyin.',
  },
  {
    q: 'Videonun sesi gelmiyor, sorun nedir?',
    a: 'Önce cihaz sesinin açık ve videonun sessize alınmamış olduğundan emin olun; Pinterest videoları çoğu zaman sessiz başlar, videoya dokunup ses simgesini açmanız gerekir. Sorun sürerse uygulamayı güncelleyin. Videoyu indirip oynatıcınızda açtığınızda ses de dosyayla birlikte gelir.',
  },
  {
    q: 'Videolar sürekli yükleniyor / dönüp duruyor, ne yapmalıyım?',
    a: 'Bu neredeyse her zaman bağlantı hızıyla ilgilidir. Wi‑Fi ile mobil veri arasında geçiş yapın, sinyalin güçlü olduğu bir yere geçin ve arka planda indirme yapan uygulamaları kapatın. Videoyu kesintisiz izlemek isterseniz bağlantısını kopyalayıp aracımızla MP4 olarak indirip çevrimdışı oynatabilirsiniz.',
  },
  {
    q: 'Video uygulamada oynamıyor ama tarayıcıda oynuyor (veya tersi), neden?',
    a: 'Bu, uygulamanın eski sürümü veya bozuk önbelleğiyken sık görülür. Uygulamayı güncelleyip önbelleği temizleyin; gerekiyorsa uygulamayı kaldırıp yeniden kurun. Tarayıcıda sorun varsa çerez/önbellek temizleyip farklı bir tarayıcı deneyin.',
  },
  {
    q: 'Video Wi‑Fi’de oynuyor ama mobil veride oynamıyor, çözümü?',
    a: 'Mobil veride veri tasarrufu modu veya zayıf sinyal videoların yüklenmesini engelleyebilir. Telefon ayarlarından Pinterest için veri tasarrufunu kapatın ve arka plan verisine izin verin. Sık izlediğiniz videoları Wi‑Fi’deyken indirip çevrimdışı saklamak da veri sorununu tamamen ortadan kaldırır.',
  },
  {
    q: 'Açılmayan videoyu izlemek için indirebilir miyim?',
    a: 'Evet. Videonun bağlantısına (pinterest.com/pin/... veya pin.it) sahipseniz, video uygulamada düzgün oynamasa bile bağlantıyı indirme aracımıza yapıştırıp videoyu MP4 olarak kaydedebilir ve cihazınızın oynatıcısında sorunsuz izleyebilirsiniz.',
  },
  {
    q: 'Pinterest videosu açılmıyorken indirmek ücretsiz mi?',
    a: 'Evet. İndirme tamamen ücretsiz ve sınırsızdır; kayıt, uygulama veya ödeme gerektirmez. Yalnızca size ait olan veya indirme iznine sahip olduğunuz içerikleri kaydetmenizi öneririz; bu site Pinterest ile resmi olarak bağlantılı değildir.',
  },
];

// Legality / copyright cluster — /pinterest-video-indirmek-yasal-mi/.
export const LEGAL_FAQ: QA[] = [
  {
    q: 'Pinterest video indirmek yasal mı?',
    a: 'Bir Pinterest videosunu yalnızca kendiniz için, çevrimdışı izlemek veya arşivlemek amacıyla indirmek çoğu durumda sorun oluşturmaz. Yasal risk, indirmenin kendisinden değil, videoyu nasıl kullandığınızdan doğar: telif hakkıyla korunan bir içeriği hak sahibinin izni olmadan yeniden yayımlamak, kendi içeriğinizmiş gibi paylaşmak veya ticari olarak kullanmak telif haklarını ihlal edebilir.',
  },
  {
    q: 'Pinterest videolarının telif hakkı var mı?',
    a: 'Evet. Pinterest’teki videolar, görseller ve GIF’ler onları oluşturan kişi veya markaya aittir ve genellikle telif hakkıyla korunur. İçeriğin herkese açık olması, onu izinsiz kullanabileceğiniz anlamına gelmez. İndirdiğiniz içeriğin haklarının kaynak sahibine ait olduğunu varsaymanız en güvenlisidir.',
  },
  {
    q: 'İndirdiğim Pinterest videosunu nerede kullanabilirim?',
    a: 'Kişisel kullanım — videoyu kendi cihazınızda izlemek, ilham panosu olarak saklamak veya çevrimdışı arşivlemek — genellikle güvenli kabul edilir. Videoyu başka bir platformda paylaşacak, bir projede kullanacak ya da gelir elde edeceğiniz bir işte kullanacaksanız önce içerik sahibinden izin almanız gerekir.',
  },
  {
    q: 'İndirdiğim videoyu sosyal medyada paylaşabilir miyim?',
    a: 'Başkasına ait bir videoyu izinsiz olarak Instagram, TikTok, YouTube gibi platformlarda yeniden paylaşmak telif hakkı ihlali sayılabilir ve içeriğin kaldırılmasına ya da hesabınızın kısıtlanmasına yol açabilir. Paylaşmak istiyorsanız içerik sahibinden izin alın veya orijinal kaynağı açıkça belirterek etiketleyin.',
  },
  {
    q: 'Telif hakkıyla korunan bir videoyu ticari amaçla kullanabilir miyim?',
    a: 'Hayır — hak sahibinin açık izni olmadan olmaz. Reklam, ürün tanıtımı, para kazandıran bir kanal ya da müşteri işi gibi ticari kullanımlar için mutlaka lisans veya yazılı izin almanız gerekir. İzinsiz ticari kullanım, tazminat talepleri dahil ciddi hukuki sonuçlar doğurabilir.',
  },
  {
    q: 'Filigransız (logosuz) indirmek telif hakkını ihlal eder mi?',
    a: 'İndirme sırasında platform filigranının bulunmaması, içeriğin size ait olduğu anlamına gelmez ve tek başına ihlali önlemez ya da doğurmaz. Belirleyici olan kullanım amacınızdır: kişisel kullanım genellikle uygundur, izinsiz yeniden yayımlama veya ticari kullanım ise filigran olsun olmasın telif ihlali sayılabilir.',
  },
  {
    q: 'İçerik sahibinden nasıl izin alırım?',
    a: 'Pinin sahibinin profiline gidip Pinterest üzerinden mesaj gönderebilir, profilde bağlı web sitesi veya diğer sosyal hesaplar varsa oradan iletişime geçebilirsiniz. İzin isterken videoyu nerede ve nasıl kullanacağınızı net biçimde belirtin; yazılı bir onay almanız ileride olası anlaşmazlıklara karşı sizi korur.',
  },
  {
    q: 'Bu site Pinterest ile bağlantılı mı ve içerikten sorumlu mu?',
    a: 'Hayır. Bu araç Pinterest, Inc. ile bağlantılı, onun tarafından desteklenen veya onaylanan bir hizmet değildir; “Pinterest” markası sahibine aittir. Araç yalnızca herkese açık içeriklerin indirilmesini kolaylaştırır. İndirdiğiniz içeriğin nasıl kullanılacağına dair sorumluluk tümüyle kullanıcıya aittir.',
  },
];

// Safety / trust cluster — /pinterest-video-indirmek-guvenli-mi/.
export const SAFETY_FAQ: QA[] = [
  {
    q: 'Pinterest video indirmek güvenli mi?',
    a: 'Evet — doğru bir araç kullandığınız sürece güvenlidir. Aracımız tamamen tarayıcı üzerinden çalışır; cihazınıza hiçbir dosya veya uygulama kurmaz, Pinterest giriş bilgilerinizi istemez ve yapıştırdığınız bağlantıyı yalnızca indirme işlemi için kullanır. Riskler genelde şüpheli sitelerin gösterdiği sahte “indir” reklamlarından doğar; bunlara tıklamaktan kaçının.',
  },
  {
    q: 'Pinterest güvenilir mi?',
    a: 'Pinterest, milyonlarca kişinin kullandığı, HTTPS ile şifrelenen köklü bir görsel keşif platformudur ve genel olarak güvenilirdir. Yine de her platformda olduğu gibi güçlü bir parola ve iki adımlı doğrulama kullanmanız, tanımadığınız bağlantılara temkinli yaklaşmanız önerilir. Videoları çevrimdışı saklamak için ise bağlantıyı kopyalayıp güvenli bir indirme aracı kullanmanız yeterlidir.',
  },
  {
    q: 'İndirme sırasında cihazıma virüs veya zararlı yazılım bulaşır mı?',
    a: 'Aracımız videoyu doğrudan MP4 dosyası olarak sunar; herhangi bir kurulum dosyası (.apk, .exe) veya eklenti indirtmez. Zararlı yazılım riski genellikle “önce şu uygulamayı kurun” diyen veya sürekli açılır pencere/yönlendirme gösteren sitelerden gelir. Yalnızca beklenen MP4 dosyasını indirin; farklı bir dosya türü sunuluyorsa indirmeyin.',
  },
  {
    q: 'Pinterest video indirici siteleri Pinterest şifremi ister mi?',
    a: 'Güvenilir bir indirici asla Pinterest kullanıcı adınızı veya şifrenizi istemez. Aracımız yalnızca herkese açık pin bağlantısına ihtiyaç duyar; hesabınıza giriş yapmanızı ya da kişisel bilgi vermenizi gerektirmez. Sizden Pinterest giriş bilgisi isteyen hiçbir siteye bu bilgileri girmeyin — bu, hesap çalma (phishing) girişimi olabilir.',
  },
  {
    q: 'İndirdiğim videolar sunucularınızda saklanıyor mu?',
    a: 'Hayır. Yapıştırdığınız bağlantılar ve işlenen videolar sunucularımızda kalıcı olarak saklanmaz; işlem tamamlandıktan sonra geçici veriler temizlenir. Ne indirdiğinizi izlemez, kişisel profilinizi oluşturmayız. Gizliliğinizin korunması için ayrıca üyelik veya e-posta da istemeyiz.',
  },
  {
    q: 'Video indirmek için uygulama kurmak güvenli mi, gerekli mi?',
    a: 'Gerekli değildir ve tarayıcı yöntemi daha güvenlidir. Bilinmeyen kaynaklardan kurulan indirme uygulamaları, gereksiz izinler isteyerek reklam yazılımı veya casus yazılım riski taşıyabilir. Araç tarayıcı tabanlı olduğu için hiçbir uygulama kurmadan, depolama alanı harcamadan ve ek izin vermeden indirme yapabilirsiniz.',
  },
  {
    q: 'Güvenli indirme için nelere dikkat etmeliyim?',
    a: 'Şu ipuçlarına uyun: (1) yalnızca beklediğiniz MP4 dosyasını indirin, (2) Pinterest şifresi isteyen sitelere bilgi girmeyin, (3) “önce uygulama kur” diyen sayfalardan uzak durun, (4) cihazınızı ve tarayıcınızı güncel tutun, (5) çok sayıda açılır pencere/yönlendirme gösteren sitelerden kaçının. Aracımız bu risklerin hiçbirini içermez.',
  },
  {
    q: 'Pinterest video indirmek yasal ve etik açıdan uygun mu?',
    a: 'Kişisel kullanım için indirmek genellikle hem güvenli hem uygundur. Etik ve yasal sınır, içeriği nasıl kullandığınızdır: başkasının videosunu izinsiz yeniden yayımlamak veya ticari olarak kullanmak telif haklarını ihlal edebilir. Ayrıntılar için Pinterest video indirmenin yasal olup olmadığını anlatan rehberimize bakın.',
  },
];

// Copyright explainer cluster — /telif-hakki-ve-pinterest-indirme/.
export const COPYRIGHT_FAQ: QA[] = [
  {
    q: 'Telif hakkı nedir ve Pinterest içerikleri için neden önemli?',
    a: 'Telif hakkı, bir eseri (fotoğraf, video, tasarım, metin) oluşturan kişiye o eser üzerinde otomatik olarak tanınan haklardır. Pinterest’teki görseller ve videolar da birer eserdir; bu yüzden onları kopyalamak, yeniden yayımlamak veya ticari olarak kullanmak, kural olarak hak sahibinin iznine tabidir. Bir içeriğin herkese açık görünmesi, telifsiz olduğu anlamına gelmez.',
  },
  {
    q: 'Pinterest görsellerinin ve videolarının telif hakkı var mı?',
    a: 'Çoğunlukla evet. Pinterest’e yüklenen içeriklerin telif hakkı, aksi belirtilmedikçe onları oluşturan kişiye veya markaya aittir. Pinterest yalnızca bu içeriklerin paylaşıldığı bir platformdur; içeriklerin haklarına sahip değildir ve size kullanım hakkı devretmez. Bu nedenle bir pini kullanmadan önce kaynağını ve iznini değerlendirmek gerekir.',
  },
  {
    q: 'Pinterest’teki bir içeriği indirmek telif hakkını ihlal eder mi?',
    a: 'İçeriği yalnızca kendiniz için, çevrimdışı görüntülemek veya ilham amacıyla saklamak genellikle bir sorun oluşturmaz. Telif hakkı açısından belirleyici olan indirmenin kendisi değil, sonrasında yaptığınız kullanımdır: yeniden yayımlama, dağıtma veya ticari kullanım hak sahibinin iznini gerektirir.',
  },
  {
    q: 'Hangi kullanımlar genellikle güvenli kabul edilir?',
    a: 'Kişisel ve özel nitelikteki kullanımlar düşük risklidir: içeriği kendi cihazınızda görüntülemek, özel bir ilham panosunda saklamak, çevrimdışı arşivlemek veya yalnızca kendinizin göreceği bir koleksiyon oluşturmak. Bu kullanımlar içeriği kamuya yeniden dağıtmadığı için çoğunlukla güvenli sayılır.',
  },
  {
    q: 'Hangi kullanımlar risklidir?',
    a: 'Başkasına ait içeriği izinsiz olarak başka platformlarda yeniden yayımlamak, kendi içeriğinizmiş gibi göstermek, üzerinde değişiklik yapıp paylaşmak, bir ürün/hizmet tanıtımında ya da gelir elde eden bir işte kullanmak yüksek risklidir. Bu tür kullanımlar telif hakkı ihlali sayılabilir ve içeriğin kaldırılmasına yol açabilir.',
  },
  {
    q: 'Kaynak göstermek (etiketlemek) izin yerine geçer mi?',
    a: 'Hayır. Orijinal içerik sahibini etiketlemek veya bağlantı vermek nazik bir davranıştır ancak kullanım iznini yerine koymaz. Telif hakkıyla korunan bir içeriği yeniden yayımlamak veya ticari kullanmak için, kaynağı göstermiş olsanız bile hak sahibinden ayrıca izin almanız gerekir.',
  },
  {
    q: 'İçeriğin izinli kullanılabildiğini nasıl anlarım?',
    a: 'Bir içeriğin serbest kullanılabildiğini yalnızca hak sahibinin açık izni, içeriğe eklenmiş bir lisans bilgisi (örneğin Creative Commons) veya içeriğin telifsiz olduğunu belirten bir kaynak gösterir. Emin değilseniz, içeriği izinli varsaymak yerine hak sahibiyle iletişime geçip yazılı onay almak en doğrusudur.',
  },
  {
    q: 'Kendi içeriğim izinsiz kullanılırsa ne yapabilirim?',
    a: 'Size ait bir içerik izniniz olmadan paylaşıldıysa, önce içeriği paylaşan kişiyle iletişime geçip kaldırılmasını isteyebilirsiniz. Pinterest gibi platformlar, hak sahiplerinin telif ihlali bildirimi (kaldırma talebi) gönderebileceği resmi kanallar sunar. Bu, platformun kendi süreci üzerinden yürüyen genel bir yoldur.',
  },
];

// Definition cluster — /pinterest-video-indirici-nedir/.
// Kept deliberately distinct from DOWNLOADER_FAQ (the tool page): these answers
// explain the concept, its variants and its limits rather than selling the tool.
export const INDIRICI_NEDIR_FAQ: QA[] = [
  {
    q: 'Pinterest video indirici tam olarak ne işe yarar?',
    a: 'Bir pinin herkese açık bağlantısını alıp o pine bağlı video dosyasının adresini çözer ve videoyu MP4 olarak cihazınıza kaydetmenizi sağlar. Tek işlevi budur: Pinterest’te zaten yayımlanmış bir videoyu, uygulamanın dışına, kendi cihazınıza taşımak. Yeni içerik üretmez, videoyu değiştirmez ve Pinterest hesabınızda hiçbir işlem yapmaz.',
  },
  {
    q: 'Pinterest video indirici ile Pinterest’in “Kaydet” düğmesi aynı şey mi?',
    a: 'Hayır. Pinterest’teki “Kaydet”, pini yalnızca hesabınızdaki bir panoya ekler; video internetten gelmeye devam eder ve cihazınıza inmez. İndirici ise videonun dosyasını cihazınızın depolama alanına yazar. Bu ayrımı ayrıntılı olarak kaydetme ile indirme farkını anlattığımız rehberde bulabilirsiniz.',
  },
  {
    q: 'Kaç tür Pinterest video indirici var?',
    a: 'Pratikte dört tür vardır: tarayıcıdan çalışan çevrimiçi araçlar, masaüstü tarayıcılara kurulan eklentiler, telefona kurulan mobil uygulamalar ve bilgisayara kurulan masaüstü programlar. Çevrimiçi araçlar kurulum ve izin gerektirmediği, her işletim sisteminde aynı çalıştığı için en düşük riskli seçenektir; diğer üçü cihaza yazılım kurmayı ve ek izin vermeyi gerektirir.',
  },
  {
    q: 'İndirici kullanmak için Pinterest hesabı veya giriş gerekir mi?',
    a: 'Düzgün çalışan bir indirici için gerekmez. Araç yalnızca herkese açık bir pin bağlantısıyla çalışır; kullanıcı adı, parola veya hesap erişimi istemez. Sizden Pinterest giriş bilgisi isteyen bir site varsa bu bir kimlik avı (phishing) işaretidir ve o siteyi kapatmanız gerekir.',
  },
  {
    q: 'Her Pinterest videosu indirilebilir mi?',
    a: 'Hayır. Yalnızca herkese açık pinler indirilebilir. Gizli panolardaki, silinmiş, bölgesel olarak kısıtlanmış veya yalnızca belirli kişilerle paylaşılmış pinlere hiçbir araç erişemez. Ayrıca bazı pinlerde video yoktur; bağlantı yalnızca bir görsele ya da dış siteye çıkıyor olabilir.',
  },
  {
    q: 'İndirici videoyu yeniden sıkıştırıp kalitesini düşürür mü?',
    a: 'İyi bir indirici düşürmez. Videoyu kaynaktaki hâliyle, yeniden kodlamadan aktarır; dolayısıyla indirdiğiniz dosya Pinterest’te izlediğinizle aynı çözünürlüktedir. Kalite tavanını belirleyen tek şey, videoyu yükleyen kişinin seçtiği çözünürlüktür — 720p yüklenmiş bir video hiçbir araçla 4K’ya çıkarılamaz.',
  },
  {
    q: 'İndirilen dosya hangi formatta olur?',
    a: 'Videolar MP4 (H.264) olarak iner; bu format Android, iPhone, Windows, macOS ve neredeyse tüm oynatıcılarla ek kod paketi gerektirmeden uyumludur. Hareketli içerikler duruma göre GIF veya MP4, görseller ise JPG/PNG olarak kaydedilir.',
  },
  {
    q: 'İyi bir Pinterest video indiricisinde hangi özellikler bulunmalı?',
    a: 'Kurulum ve kayıt istememesi, giriş bilgisi sormaması, kaynaktaki gerçek çözünürlükleri sunması, filigran eklememesi, yapıştırdığınız bağlantıyı ve indirilen dosyayı kalıcı olarak saklamaması ve sizi kurulum dosyası (.apk/.exe) indirmeye yönlendirmemesi gerekir. Bu maddelerden biri bile eksikse başka bir araç tercih edin.',
  },
];

// Terminology / umbrella-definition cluster — /pinterest-downloader-nedir/.
export const DOWNLOADER_NEDIR_FAQ: QA[] = [
  {
    q: 'Pinterest downloader ne demek?',
    a: '“Downloader” İngilizce “indirici” demektir; “Pinterest downloader” da Türkçedeki “Pinterest indirici” ifadesinin birebir karşılığıdır. Aynı aracı anlatan iki addır: pin bağlantısını yapıştırdığınızda içeriği cihazınıza kaydeden çevrimiçi araç. Türkiye’de her iki terim de yaygın olarak aranır.',
  },
  {
    q: 'Pinterest downloader ile Pinterest indirici arasında bir fark var mı?',
    a: 'İşlev olarak fark yoktur, yalnızca dil farkıdır. Uygulamada küçük bir vurgu farkı görülür: “downloader” genellikle video, görsel, GIF ve karusel dahil tüm içerik türlerini kapsayan şemsiye bir terim olarak, “video indirici” ise özellikle video için kullanılır.',
  },
  {
    q: 'Bir Pinterest downloader sadece video mu indirir?',
    a: 'Hayır. Kapsamlı bir downloader pinin türünü tanır: video pinlerinde MP4, görsel pinlerinde tam çözünürlüklü fotoğraf, hareketli pinlerde GIF/MP4, çoklu görsel (karusel) pinlerinde ise kareleri tek tek verir. Hangi türü indirmek istediğinize göre ilgili araç sayfasını kullanmanız en hızlı yoldur.',
  },
  {
    q: 'Pinterest downloader bir uygulama mı, yoksa web sitesi mi?',
    a: 'İkisi de olabilir, ancak web tabanlı olanı belirgin şekilde daha pratiktir: tarayıcıda açılır, güncelleme istemez, depolama alanı kaplamaz ve kamera/rehber gibi gereksiz izinler talep etmez. Mağaza dışından kurulan “downloader” uygulamaları ise reklam ve casus yazılım riski taşıdığı için önerilmez.',
  },
  {
    q: 'Pinterest’in kendi resmî downloader’ı var mı?',
    a: 'Hayır. Pinterest, videoyu cihaza indiren resmî bir özellik sunmaz; uygulamadaki seçenekler pini panoya kaydetmek, paylaşmak veya bağlantısını kopyalamakla sınırlıdır. Bu boşluk, üçüncü taraf indiricilerin neden var olduğunu açıklar. Bizim de Pinterest ile resmî bir bağlantımız yoktur.',
  },
  {
    q: 'Downloader kullanmak hesabımı riske atar mı?',
    a: 'Hesabınıza dokunmayan, giriş istemeyen ve yalnızca herkese açık bağlantıyla çalışan bir araçta hesap riski oluşmaz — çünkü araç hesabınızla hiçbir bağlantı kurmaz. Risk, sizden Pinterest parolası isteyen ya da hesabınıza “erişim izni” vermenizi isteyen sitelerdedir; bu tür sayfalara asla bilgi girmeyin.',
  },
  {
    q: 'İngilizce “download” ve Türkçe “indir” aramaları aynı araca mı çıkar?',
    a: 'Genellikle evet. “Pinterest video download”, “pinterest downloader” ve “pinterest video indir” aramaları aynı ihtiyacı tanımlar ve aynı türde araçlara ulaştırır. Bu sitede arayüz ve tüm rehberler Türkçedir; İngilizce terimle geldiyseniz de aynı aracı kullanırsınız.',
  },
  {
    q: 'Bir Pinterest downloader seçerken nelere bakmalıyım?',
    a: 'Beş ölçüte bakın: kurulum istemiyor mu, giriş bilgisi sormuyor mu, kaynaktaki gerçek kaliteyi sunuyor mu, filigran eklemiyor mu ve verilerinizi saklamadığını açıkça belirtiyor mu. Ayrıca sürekli açılır pencere gösteren, indirme yerine başka sayfalara yönlendiren siteler baştan elenmelidir.',
  },
];

// Comparison cluster — /pinterest-video-indirme-vs-kaydetme/.
export const SAVE_VS_DOWNLOAD_FAQ: QA[] = [
  {
    q: 'Pinterest’te kaydetmek ile indirmek arasındaki fark nedir?',
    a: 'Kaydetmek, pini Pinterest hesabınızdaki bir panoya eklemektir; içerik Pinterest’te kalır ve görüntülemek için her seferinde internet gerekir. İndirmek ise videonun dosyasını cihazınızın depolamasına yazmaktır; dosya artık sizindir, internet olmadan da açılır ve Pinterest’ten bağımsızdır.',
  },
  {
    q: 'Pinterest’te kaydettiğim videoyu internetsiz izleyebilir miyim?',
    a: 'Hayır. Kaydedilen pin yalnızca bir kısayoldur; video her açılışta Pinterest sunucularından akış olarak gelir. Uçakta, metroda veya çekim olmayan bir yerde bu videolar açılmaz. Çevrimdışı izlemek istiyorsanız videoyu gerçekten indirmeniz gerekir.',
  },
  {
    q: 'Kaydettiğim pinler telefonumun galerisine gider mi?',
    a: 'Gitmez. Kaydedilen pinler yalnızca Pinterest uygulaması içindeki panolarda görünür; telefonun galerisinde, Fotoğraflar uygulamasında veya dosya yöneticisinde yer almaz. Videonun galeride görünmesi ancak indirme ile mümkündür.',
  },
  {
    q: 'Pin silinirse panoma kaydettiğim video ne olur?',
    a: 'Kaybolur. İçeriği yükleyen kişi pini silerse ya da hesabını kapatırsa, panonuzdaki kayıt boş bir yere işaret eder ve video artık açılmaz. İndirilmiş bir dosya ise bundan etkilenmez; kaynak silinse bile cihazınızda kalmaya devam eder.',
  },
  {
    q: 'Videoyu kaydetmek mi indirmek mi daha iyi?',
    a: 'İhtiyaca göre değişir. Fikir biriktiriyor, koleksiyon yapıyor ve Pinterest’in önerilerinden yararlanmak istiyorsanız kaydetmek yeterlidir. Çevrimdışı izleyecek, videoyu düzenleyecek, başka bir cihaza aktaracak veya kalıcı olarak arşivleyecekseniz indirmek gerekir. İkisi birbirinin alternatifi değil, tamamlayıcısıdır.',
  },
  {
    q: 'Bir pini kaydettiğimde içerik sahibi bunu görür mü?',
    a: 'Pinterest kaydetme sayısını genel bir istatistik olarak gösterir, ancak kaydetme işlemi kişisel bir bildirim değildir. Kayıtlarınızın başkalarına görünmesini istemiyorsanız pini gizli panoya ekleyebilirsiniz. İndirme ise tamamen cihazınızda gerçekleşen bir işlemdir ve Pinterest tarafında bir iz bırakmaz.',
  },
  {
    q: 'İndirdiğim video telefonumda nereye kaydedilir?',
    a: 'Android’de dosya genellikle “İndirilenler” klasörüne iner ve galeride görünür. iPhone’da önce Dosyalar uygulamasına iner; oradan videoya dokunup “Videoyu Kaydet” dediğinizde Fotoğraflar’a eklenir. Bilgisayarda ise tarayıcınızın İndirilenler klasörüne kaydedilir.',
  },
  {
    q: 'Telif hakkı açısından kaydetmek ile indirmek arasında fark var mı?',
    a: 'İkisi de içeriğin sahipliğini size geçirmez. Belirleyici olan işlemin adı değil, sonrasındaki kullanımdır: kişisel arşiv ve çevrimdışı izleme genellikle sorun oluşturmazken, başkasına ait bir videoyu izinsiz yeniden yayımlamak veya ticari olarak kullanmak her iki durumda da telif hakkı ihlali sayılabilir.',
  },
];

// Mechanism / explainer cluster — /pinterest-video-indirme-araci-nasil-calisir/.
export const HOW_TOOL_WORKS_FAQ: QA[] = [
  {
    q: 'Pinterest video indirme aracı nasıl çalışır?',
    a: 'Yapıştırdığınız bağlantıyı okur, pinin herkese açık sayfasını çözümler, o pine bağlı gerçek video dosyasının adresini ve mevcut çözünürlükleri bulur, ardından bu seçenekleri size listeler. Bir kaliteyi seçtiğinizde dosya doğrudan cihazınıza aktarılır. Tüm süreç genellikle birkaç saniye sürer.',
  },
  {
    q: 'Araç videoyu tam olarak nereden alıyor?',
    a: 'Videoyu Pinterest’in kendi genel altyapısındaki, pinin zaten yayımlandığı kaynaktan alır. Yeni bir kopya oluşturmaz, başka bir kullanıcının arşivinden çekmez ve gizli bir alana erişmez; yalnızca herkese açık pinin bağlı olduğu dosyayı hedefler.',
  },
  {
    q: 'Bağlantıyı yapıştırdıktan sonra arka planda neler oluyor?',
    a: 'Dört adım işler: (1) bağlantı doğrulanır ve pin kimliği ayrıştırılır, (2) pinin herkese açık verisi çözümlenir, (3) videonun kalite varyantları listelenir, (4) seçtiğiniz varyant indirme bağlantısı olarak size sunulur. Bu adımların hiçbirinde hesabınıza giriş yapılmaz.',
  },
  {
    q: 'Video sizin sunucunuza mı yükleniyor?',
    a: 'Hayır, video bir arşive alınmaz. İşlem yalnızca dosyayı size ulaştırmak için gereken süre boyunca geçicidir; yapıştırdığınız bağlantı ve indirdiğiniz dosya kalıcı olarak saklanmaz, işlem bitince geçici veriler temizlenir. İndirme geçmişinizi tutan bir profil de oluşturulmaz.',
  },
  {
    q: 'İndirme neden bazen birkaç saniye sürüyor?',
    a: 'Süre üç şeye bağlıdır: pinin çözümlenme hızı, videonun boyutu ve internet bağlantınızın hızı. 4K veya uzun bir video, kısa bir HD videodan doğal olarak daha uzun sürer. Bekleme genellikle birkaç saniyeyi geçmez; çok uzarsa bağlantıyı yeniden kopyalayıp denemek çoğu zaman yeterlidir.',
  },
  {
    q: 'Araç neden bazen birden fazla kalite seçeneği gösteriyor?',
    a: 'Pinterest aynı videoyu farklı çözünürlüklerde saklar; böylece yavaş bağlantılarda daha küçük dosya oynatılabilir. Araç bu varyantların gerçekte var olanlarını listeler. Listede 4K yoksa, video Pinterest’e o çözünürlükte yüklenmemiş demektir — yapay büyütme uygulanmaz.',
  },
  {
    q: 'Kısaltılmış pin.it bağlantıları da çalışır mı?',
    a: 'Evet. pin.it ile başlayan kısa bağlantılar, pinterest.com veya tr.pinterest.com adresleriyle aynı şekilde işlenir; araç kısaltmayı çözüp asıl pine ulaşır. Bağlantının sonundaki takip parametreleri de sonucu etkilemez.',
  },
  {
    q: 'Araç neden bazı bağlantılarda hata veriyor?',
    a: 'En sık nedenler: pinin gizli bir panoda olması, silinmiş ya da kısıtlanmış olması, bağlantının eksik kopyalanması veya pinin video değil yalnızca görsel içermesi. Bağlantıyı doğrudan pin sayfasından yeniden kopyalamak çoğu durumu çözer; devam ederse indirme sorunlarını anlattığımız rehbere bakabilirsiniz.',
  },
];

// ---------------------------------------------------------------------------
// /sss/ — the FAQ hub.
//
// These entries are written specifically for the hub: short, orientation-style
// answers that resolve the question and then point at the page covering it in
// depth. They deliberately do NOT reuse the per-page FAQ sets above — two pages
// answering the identical question would compete for the same rich result, so
// every question here is worded differently from every per-page question.
// ---------------------------------------------------------------------------
export const HUB_FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'genel',
    title: 'Genel sorular',
    intro: 'Siteyi ilk kez kullanıyorsanız buradan başlayın.',
    items: [
      {
        q: 'Bu SSS sayfası ne işe yarar?',
        a: 'Bu sayfa sitenin yardım merkezidir: Pinterest içeriklerini indirmeyle ilgili en sık gelen soruları kategorilere ayırıp kısa yanıtlarla topladık. Her yanıtın sonunda, konuyu ayrıntılı anlatan sayfaya bağlantı bulunur. Aradığınızı hızlıca bulmak için yukarıdaki kategori listesini kullanabilirsiniz.',
      },
      {
        q: 'Hangi Pinterest içerik türlerini indirebiliyorum?',
        a: 'Video, görsel, hareketli (GIF) içerik ve çoklu görsel içeren pinler desteklenir. Ne indirmek istediğinize göre ilgili araca gidin: <a href="/pinterest-video-indir/">video</a>, <a href="/pinterest-resim-indir/">görsel</a>, <a href="/pinterest-gif-indir/">GIF</a> veya <a href="/pinterest-karusel-indir/">karusel</a>. Her araç, yapıştırdığınız pinin türünü tanıyıp uygun dosyayı sunar.',
      },
      {
        q: 'Hizmet için ödeme yapmam ya da üye olmam gerekiyor mu?',
        a: 'Hayır. Araçların tamamı ücretsizdir; üyelik, e-posta adresi veya ödeme bilgisi istemez. Deneme süresi ya da sonradan devreye giren bir abonelik de yoktur. Ayrıntılar için <a href="/pinterest-video-indir-ucretsiz/">ücretsiz indirme sayfamıza</a> bakabilirsiniz.',
      },
      {
        q: 'Bu site Pinterest’in resmî bir hizmeti mi?',
        a: 'Değil. Bağımsız, tarayıcı tabanlı bir araçtır ve Pinterest ile resmi bir bağlantımız yoktur; “Pinterest” markası sahibine aittir. Yalnızca herkese açık pin bağlantılarıyla çalışır ve Pinterest hesabınıza erişmez.',
      },
      {
        q: 'Aradığım yanıt bu sayfada yoksa ne yapmalıyım?',
        a: 'Önce sorunuza en yakın kategoriye ve orada bağlantı verilen ayrıntılı rehbere bakın; çoğu konu için ayrı bir sayfa var. Yine de yanıt bulamazsanız <a href="/iletisim/">iletişim</a> sayfasından bize yazabilirsiniz. Sorunuzu bildirirken kullandığınız cihazı ve tarayıcıyı belirtmeniz yardımcı olur.',
      },
    ],
  },
  {
    id: 'video-indirme',
    title: 'Pinterest video indirme',
    items: [
      {
        q: 'Video indirmek için hangi sayfayı kullanmalıyım?',
        a: 'Ana araç <a href="/pinterest-video-indir/">Pinterest video indir</a> sayfasındadır; çoğu ihtiyaç için bu sayfa yeterlidir. Belirli bir amaç için özel sayfalar da vardır: en yüksek çözünürlük için <a href="/pinterest-hd-video-indir/">HD indirme</a>, doğrudan dosya biçimi için <a href="/pinterest-mp4-indir/">MP4 indirme</a>.',
      },
      {
        q: 'İndirme işlemi kaç adımda tamamlanıyor?',
        a: 'Üç adım: pinin bağlantısını kopyalayın, kutuya yapıştırın, çıkan seçeneklerden kaliteyi seçip kaydedin. Tamamı genellikle birkaç saniye sürer ve hiçbir aşamada kurulum ya da giriş istenmez. Adımların ekran ekran anlatımı <a href="/pinterest-video-nasil-indirilir/">video nasıl indirilir</a> rehberinde.',
      },
      {
        q: 'Videoyu indirmek yerine Pinterest’te kaydetmem yeterli olur mu?',
        a: 'Amacınıza bağlı. Panoya kaydetmek yalnızca bir yer imi oluşturur; içerik Pinterest’te kalır ve izlemek için internet gerekir. Çevrimdışı izleyecek, düzenleyecek veya kalıcı olarak saklayacaksanız indirmeniz gerekir. İki yöntemin farkını <a href="/pinterest-video-indirme-vs-kaydetme/">indirme ve kaydetme karşılaştırmasında</a> tablo hâlinde bulabilirsiniz.',
      },
      {
        q: 'Aynı videoyu birden çok kez indirebilir miyim?',
        a: 'Evet, bir sınır yoktur. Aynı bağlantıyı tekrar yapıştırıp farklı bir kalite seçeneğiyle yeniden indirebilirsiniz. Dosya her seferinde kaynaktan alınır, bu yüzden kalite tekrarlı indirmelerde düşmez.',
      },
      {
        q: 'Birden fazla videoyu tek seferde indirebilir miyim?',
        a: 'Araç her seferinde tek bir pin bağlantısını işler; toplu (liste hâlinde) indirme yapmaz. Birkaç video indirecekseniz bağlantıları sırayla yapıştırmanız gerekir. Bu, işlemi öngörülebilir tutar ve yanlış pinin inmesini önler.',
      },
      {
        q: 'İndirdiğim video ne kadar süre kullanılabilir kalır?',
        a: 'Dosya cihazınıza indiği andan itibaren tamamen sizindir; süre sınırı yoktur ve silmediğiniz sürece durur. Kaynak pin daha sonra kaldırılsa bile indirdiğiniz dosya etkilenmez. Bu, indirmenin panoya kaydetmeye göre en belirgin avantajıdır.',
      },
    ],
  },
  {
    id: 'terimler',
    title: 'Pinterest video indirici / downloader terimleri',
    items: [
      {
        q: 'Sitede geçen “indirici” ve “downloader” sözcükleri neyi anlatıyor?',
        a: 'İkisi de aynı şeyi anlatır: bir pin bağlantısını çözüp içeriği cihazınıza kaydeden aracı. “Downloader” bu ifadenin İngilizcesidir ve Türkiye’de her iki biçim de yaygın olarak aranır. Kavramları <a href="/pinterest-video-indirici-nedir/">video indirici nedir</a> ve <a href="/pinterest-downloader-nedir/">downloader nedir</a> sayfalarında ayrıntılı ele alıyoruz.',
      },
      {
        q: 'Aracın çalışma mantığını nereden öğrenebilirim?',
        a: 'Bağlantıyı yapıştırdıktan sonra arka planda işleyen adımları — doğrulama, pin çözümleme, kalite listeleme ve dosya aktarımı — <a href="/pinterest-video-indirme-araci-nasil-calisir/">aracın nasıl çalıştığını</a> anlatan sayfada aşama aşama açıklıyoruz. Gizlilik tarafı da aynı sayfada yer alır.',
      },
      {
        q: 'Kaç çeşit indirici var ve hangisi daha pratik?',
        a: 'Dört biçim yaygındır: tarayıcıdan çalışan çevrimiçi araçlar, tarayıcı eklentileri, mobil uygulamalar ve masaüstü programlar. Çevrimiçi araçlar kurulum ve ek izin istemediği, hem telefonda hem bilgisayarda aynı çalıştığı için en pratik olanıdır. Karşılaştırma tablosu <a href="/pinterest-video-indirici-nedir/">video indirici nedir</a> sayfasında.',
      },
      {
        q: 'Kurulum gerektiren araçlardan kaçınmam için bir neden var mı?',
        a: 'Kurulum gerektiren araçlar yalnızca kuruldukları cihazda çalışır, güncelleme bekler ve çoğu zaman işlevinden fazla izin ister. Mağaza dışından indirilen kurulum dosyaları ayrıca reklam veya casus yazılım riski taşır. Tarayıcı tabanlı bir araçta bu risklerin hiçbiri oluşmaz.',
      },
      {
        q: 'Araç Pinterest hesabımla bir bağlantı kuruyor mu?',
        a: 'Kurmuyor. Yalnızca herkese açık pinin bağlantısıyla çalışır; kullanıcı adı, parola veya hesap erişimi istemez. Sizden Pinterest giriş bilgisi isteyen bir site görürseniz bu bir kimlik avı işaretidir ve o sayfayı kapatmanız gerekir.',
      },
    ],
  },
  {
    id: 'link',
    title: 'Pinterest link ile indirme',
    items: [
      {
        q: 'Bağlantı yapıştırarak indirmeye odaklanan bir sayfa var mı?',
        a: 'Evet, <a href="/pinterest-video-link-indir/">Pinterest video link indir</a> sayfası tam bu iş için hazırlanmıştır. Elinizde yalnızca bir bağlantı varsa en hızlı yol bu sayfadır. Çalışma biçimi ana araçla aynıdır.',
      },
      {
        q: 'Hangi bağlantı biçimleri kabul ediliyor?',
        a: 'pinterest.com, tr.pinterest.com ve kısaltılmış pin.it adresleri desteklenir; kısa bağlantılar otomatik olarak asıl pin adresine çözülür. Bağlantının sonundaki takip parametreleri sonucu etkilemez. Tek koşul, pinin herkese açık olmasıdır.',
      },
      {
        q: 'Bağlantıyı kopyalamanın en kolay yolu nedir?',
        a: 'Pinterest uygulamasında pini açıp “Paylaş → Bağlantıyı kopyala” demek en hızlı yoldur. Tarayıcı kullanıyorsanız adres çubuğundaki adresi doğrudan kopyalayabilirsiniz. Yapıştırdıktan sonra bağlantının başında veya sonunda boşluk kalmadığından emin olun.',
      },
      {
        q: 'Bağlantı yerine pinin adını veya ekran görüntüsünü kullanabilir miyim?',
        a: 'Kullanamazsınız. Araç, hangi içerikten söz ettiğinizi yalnızca bağlantıdaki pin kimliğinden anlar; başlık ya da görüntü bu bilgiyi taşımaz. Bu yüzden indirme için mutlaka pinin kendi adresine ihtiyaç vardır.',
      },
    ],
  },
  {
    id: 'kalite',
    title: 'Pinterest MP4, HD ve kalite',
    items: [
      {
        q: 'Videolar hangi dosya biçiminde iniyor?',
        a: 'Videolar MP4 olarak iner; bu biçim telefon, bilgisayar ve televizyonlarda ek kod paketi gerektirmeden açılır. Ayrı bir dönüştürücüye ihtiyaç duymazsınız. Biçime özel ayrıntılar <a href="/pinterest-mp4-indir/">MP4 indirme</a> sayfasında.',
      },
      {
        q: 'En yüksek kaliteyi nasıl seçerim?',
        a: 'Bağlantıyı yapıştırdıktan sonra listelenen çözünürlükler arasından en büyüğünü seçin; araç yalnızca kaynakta gerçekten var olan seçenekleri gösterir. Full HD ve üzeri indirme için <a href="/pinterest-hd-video-indir/">HD video indirme</a> sayfasını kullanabilirsiniz.',
      },
      {
        q: 'Neden bazı videolarda yüksek çözünürlük seçeneği çıkmıyor?',
        a: 'İndirilebilecek en yüksek kalite, videoyu yükleyen kişinin seçtiği çözünürlükle sınırlıdır. 720p olarak yüklenmiş bir video hiçbir araçla gerçek 1080p veya 4K’ya çıkarılamaz; yapay büyütme yalnızca dosyayı şişirir. Konunun ayrıntısı <a href="/pinterest-video-kalitesi/">video kalitesi</a> sayfasında.',
      },
      {
        q: 'İndirme sırasında kalite kaybı oluyor mu?',
        a: 'Olmuyor. Dosya kaynaktaki hâliyle aktarılır, yeniden kodlanmaz; indirdiğiniz video Pinterest’te izlediğinizle aynı netliktedir. Bu nedenle aynı videoyu tekrar indirmek kaliteyi düşürmez.',
      },
      {
        q: 'Dosya boyutu neye göre değişiyor?',
        a: 'Boyutu üç şey belirler: videonun çözünürlüğü, süresi ve kaynaktaki sıkıştırma oranı. Aynı süredeki bir 1080p video, 720p sürümünden belirgin şekilde büyüktür. Sınırlı depolama alanınız varsa daha düşük bir çözünürlük seçmek yeterlidir.',
      },
    ],
  },
  {
    id: 'gorsel',
    title: 'Pinterest resim / fotoğraf / görsel indirme',
    items: [
      {
        q: 'Görsel indirmek için hangi sayfayı kullanmalıyım?',
        a: '<a href="/pinterest-resim-indir/">Pinterest resim indir</a> sayfası tüm görsel pinleri için kullanılır. Bağlantıyı yapıştırdığınızda görselin tam çözünürlüklü hâli sunulur. Tek bir pini bütün olarak indirmek isterseniz <a href="/pinterest-pin-indir/">pin indir</a> sayfası da işinizi görür.',
      },
      {
        q: '“Fotoğraf”, “resim” ve “görsel” için ayrı araçlar mı gerekiyor?',
        a: 'Gerekmiyor; üçü de aynı içerik türünü anlatan farklı sözcüklerdir ve tek araçla indirilir. Hangi kelimeyle aradığınızın bir önemi yoktur. Aynı sayfa fotoğraf, resim ve görsel pinlerinin tamamını işler.',
      },
      {
        q: 'Görseller hangi biçimde kaydediliyor?',
        a: 'Görseller kaynaktaki biçimiyle, genellikle JPG veya PNG olarak iner. Dosya yeniden sıkıştırılmadığı için ayrıntı kaybı yaşanmaz. Böylece görseli baskı veya tasarım çalışmalarında da kullanabileceğiniz boyutta alırsınız.',
      },
      {
        q: 'Görselin küçük hâli yerine büyük hâlini nasıl alırım?',
        a: 'Aracı kullandığınızda zaten kaynaktaki en büyük sürüm sunulur; Pinterest akışında gördüğünüz küçültülmüş önizleme değil. Ekran görüntüsü almak yerine bağlantıyı yapıştırmanız bu yüzden önemlidir. Ekran görüntüsü, gerçek çözünürlüğün yalnızca bir kısmını korur.',
      },
      {
        q: 'Bir pinde hem video hem görsel varsa ne iniyor?',
        a: 'Araç pinin içindeki uygun dosyaları listeler ve hangisini kaydedeceğinizi siz seçersiniz. Video pinlerinde MP4 ile birlikte kapak görseli de görünebilir. Listeden yalnızca ihtiyacınız olan dosyayı indirmeniz yeterlidir.',
      },
    ],
  },
  {
    id: 'gif',
    title: 'Pinterest GIF indirme',
    items: [
      {
        q: 'Hareketli içerik indirmek için hangi sayfaya gitmeliyim?',
        a: '<a href="/pinterest-gif-indir/">Pinterest GIF indir</a> sayfası hareketli pinler için hazırlanmıştır. Bağlantıyı yapıştırdığınızda içeriğin kaynakta bulunan biçimleri listelenir. Kullanım adımları diğer araçlarla aynıdır.',
      },
      {
        q: 'GIF mi MP4 mi seçmeliyim?',
        a: 'Paylaşımda kolaylık ve otomatik oynatma istiyorsanız GIF, daha küçük dosya ve daha akıcı görüntü istiyorsanız MP4 uygundur. Aynı içerik için ikisi de sunulabiliyorsa seçim tamamen kullanım amacınıza bağlıdır. Video düzenleyicide çalışacaksanız MP4 daha rahattır.',
      },
      {
        q: 'Hareketli pin ile video pin arasındaki fark nedir?',
        a: 'Hareketli pinler kısa, sessiz ve döngü hâlinde oynayan içeriklerdir; video pinler ise ses içerebilir ve genellikle daha uzundur. Pinterest bu iki türü farklı saklar, bu yüzden sunulan indirme biçimleri de değişir. Araç türü otomatik olarak tanır.',
      },
      {
        q: 'İndirdiğim dosyada animasyon korunuyor mu?',
        a: 'Evet. Dosya kaynaktaki hâliyle indiği için hareket ve döngü yapısı bozulmaz. GIF olarak kaydettiğinizde çoğu görüntüleyici ve sohbet uygulaması animasyonu doğrudan oynatır.',
      },
    ],
  },
  {
    id: 'karusel-story',
    title: 'Pinterest karusel, story ve galeriye kaydetme',
    items: [
      {
        q: 'Çoklu görsel içeren pinleri nasıl indiririm?',
        a: '<a href="/pinterest-karusel-indir/">Pinterest karusel indir</a> sayfasını kullanın. Bağlantıyı yapıştırdığınızda pindeki kareler ayrı ayrı listelenir ve istediklerinizi tek tek kaydedebilirsiniz. Tüm kareler kaynaktaki çözünürlükte sunulur.',
      },
      {
        q: 'Story ve Idea Pin içerikleri için ayrı bir sayfa var mı?',
        a: 'Var: <a href="/pinterest-story-indir/">Pinterest story indir</a> sayfası hikâye ve Idea Pin içerikleri için kullanılır. Yalnızca herkese açık olanlar indirilebilir. Birden çok sayfası olan içeriklerde bölümler ayrı dosyalar hâlinde sunulur.',
      },
      {
        q: 'Videoyu doğrudan telefon galerime kaydedebilir miyim?',
        a: 'Android’de indirilen video genellikle doğrudan galeride görünür. iPhone’da dosya önce Dosyalar uygulamasına iner, oradan “Videoyu Kaydet” ile Fotoğraflar’a eklenir. Cihaza göre adımların tamamı <a href="/pinterest-video-galeriye-indir/">galeriye indirme</a> sayfasında.',
      },
      {
        q: 'Karuselin yalnızca tek bir karesini indirebilir miyim?',
        a: 'Evet. Kareler ayrı ayrı listelendiği için yalnızca ihtiyacınız olanı seçip kaydedebilirsiniz; tamamını indirmek zorunda değilsiniz. Bu, gereksiz dosya biriktirmemenizi sağlar.',
      },
      {
        q: 'Kaydettiğim pinler otomatik olarak cihazıma iniyor mu?',
        a: 'İnmiyor. Pinterest’te “Kaydet” demek içeriği yalnızca hesabınızdaki bir panoya ekler; dosya cihazınıza gelmez ve görüntülemek için internet gerekir. Cihazınızda dosya olarak durmasını istiyorsanız indirmeniz gerekir; ayrıntı <a href="/pinterest-video-indirme-vs-kaydetme/">indirme ve kaydetme farkı</a> sayfasında.',
      },
    ],
  },
  {
    id: 'cihazlar',
    title: 'iPhone, Android, Windows ve macOS kullanımı',
    items: [
      {
        q: 'iPhone’da hangi adımları izlemem gerekiyor?',
        a: 'Safari’de aracı açın, bağlantıyı yapıştırın ve indirin; dosya önce Dosyalar uygulamasına iner, oradan Fotoğraflar’a aktarabilirsiniz. Ek uygulama veya kısayol kurmanız gerekmez. Ekran ekran anlatım <a href="/iphone-pinterest-video-indir/">iPhone rehberinde</a>.',
      },
      {
        q: 'Android’de indirme nasıl yapılıyor?',
        a: 'Pinterest uygulamasında bağlantıyı kopyalayıp tarayıcıdaki araca yapıştırmanız yeterlidir; dosya İndirilenler klasörüne iner ve genellikle galeride görünür. Marka farkı gözetmez. Ayrıntılar <a href="/android-pinterest-video-indir/">Android rehberinde</a>.',
      },
      {
        q: 'Mac’te hangi tarayıcıyı kullanmalıyım?',
        a: 'Safari, Chrome, Edge ve Firefox’un tümü çalışır; birinin diğerine belirgin bir üstünlüğü yoktur. Dosya tarayıcınızın İndirilenler klasörüne kaydedilir. macOS’a özgü adımlar <a href="/mac-pinterest-video-indir/">Mac rehberinde</a>.',
      },
      {
        q: 'Windows bilgisayarda nasıl indirebilirim?',
        a: 'Herhangi bir tarayıcıdan aracı açıp bağlantıyı yapıştırmanız yeterlidir; program kurmanız gerekmez. İnen MP4, Windows’un yerleşik oynatıcısıyla doğrudan açılır. Adımlar <a href="/windows-pinterest-video-indir/">Windows rehberinde</a>.',
      },
      {
        q: 'Tablet veya akıllı TV tarayıcısında da çalışır mı?',
        a: 'Güncel bir tarayıcı ve internet bağlantısı olan her cihazda çalışır; tabletlerde deneyim telefonla aynıdır. Akıllı TV tarayıcılarında sayfa açılsa bile dosya yönetimi kısıtlı olabileceği için indirmeyi telefon veya bilgisayarda yapmak daha rahattır.',
      },
    ],
  },
  {
    id: 'sorun-giderme',
    title: 'Sorun giderme',
    items: [
      {
        q: 'İndirme başlamıyorsa ilk olarak ne denemeliyim?',
        a: 'Bağlantıyı doğrudan pinin sayfasından yeniden kopyalayıp tekrar yapıştırın; sorunların çoğu eksik kopyalanmış adresten kaynaklanır. Pinin herkese açık ve hâlâ yayında olduğundan da emin olun. Diğer nedenler ve çözümleri <a href="/pinterest-video-indirilemiyor/">video indirilemiyor</a> sayfasında.',
      },
      {
        q: 'Bağlantı geçersiz görünüyorsa ne yapmalıyım?',
        a: 'Adresin pinterest.com veya pin.it ile başladığını, başında ya da sonunda fazladan karakter kalmadığını kontrol edin. Kısa bağlantı açılmıyorsa pini yeniden paylaşıp yeni bir bağlantı oluşturmak çözüm olur. Ayrıntılı adımlar <a href="/pinterest-link-calismiyor/">link çalışmıyor</a> sayfasında.',
      },
      {
        q: 'İndirdiğim dosyayı cihazımda bulamıyorum, nereye bakmalıyım?',
        a: 'Android ve bilgisayarlarda ilk bakılacak yer İndirilenler klasörüdür; Android’de dosya kısa süre sonra galeride de görünür. iPhone’da dosya Dosyalar uygulamasındadır ve Fotoğraflar’a elle aktarılır. Tarayıcınızın indirme listesi de dosyanın yerini gösterir.',
      },
      {
        q: 'İndirdiğim videonun sesi yoksa sorun nerede?',
        a: 'Çoğu durumda kaynak videonun kendisi sessizdir; Pinterest’te bazı içerikler sessiz yüklenir. Farklı bir kalite seçeneği deneyebilirsiniz, ancak orijinalinde ses yoksa hiçbir araç ses ekleyemez. Videoyu başka bir oynatıcıda açmak da ses ayarı kaynaklı sorunları ayırt etmeye yardımcı olur.',
      },
      {
        q: 'Karşılaştığım bir hatayı size nasıl bildirebilirim?',
        a: '<a href="/iletisim/">İletişim</a> sayfasından ulaşabilirsiniz. Bildiriminizde kullandığınız cihazı, tarayıcıyı ve varsa ekrandaki hata metnini paylaşmanız sorunu hızlı anlamamızı sağlar. Çalışmayan pin bağlantısını da eklemeniz yararlı olur.',
      },
    ],
  },
  {
    id: 'guvenlik-telif',
    title: 'Güvenlik, yasal kullanım ve telif hakkı',
    items: [
      {
        q: 'İndirme yaparken güvenlik açısından nelere dikkat etmeliyim?',
        a: 'Sizden Pinterest parolası isteyen, kurulum dosyası indirtmeye çalışan veya sürekli açılır pencere gösteren siteleri kullanmayın. Güvenilir bir araç yalnızca herkese açık bağlantıyla çalışır ve giriş bilgisi istemez. Riskler ve korunma yolları <a href="/pinterest-video-indirmek-guvenli-mi/">indirmek güvenli mi</a> sayfasında.',
      },
      {
        q: 'Bir içeriği indirmek her durumda uygun mudur?',
        a: 'Kişisel kullanım, çevrimdışı izleme ve arşivleme genellikle sorun oluşturmaz. Belirleyici olan indirmenin kendisi değil, sonrasındaki kullanımdır: başkasına ait içeriği izinsiz yeniden yayımlamak veya ticari amaçla kullanmak sorun yaratabilir. Konunun genel çerçevesi <a href="/pinterest-video-indirmek-yasal-mi/">yasal mı</a> sayfasında.',
      },
      {
        q: 'Telif hakkı konusunda akılda tutulması gereken temel kural nedir?',
        a: 'Bir içeriğin herkese açık görünmesi, serbestçe kullanılabildiği anlamına gelmez; haklar aksi belirtilmedikçe içeriği üretene aittir. Kaynak göstermek de izin yerine geçmez. Ayrıntılı açıklama <a href="/telif-hakki-ve-pinterest-indirme/">telif hakkı ve indirme</a> sayfasında. Bu sayfa genel bilgilendirme amaçlıdır, hukuki tavsiye değildir.',
      },
      {
        q: 'Yapıştırdığım bağlantılar veya indirdiğim dosyalar saklanıyor mu?',
        a: 'Saklanmıyor. Bağlantı yalnızca indirme işlemi süresince kullanılır ve işlem bitince geçici veriler temizlenir; dosyalar sunucularımızda arşivlenmez. İndirme geçmişinizi tutan bir profil de oluşturulmaz. Veri işleme ayrıntıları <a href="/gizlilik-politikasi/">Gizlilik Politikası</a> sayfasındadır.',
      },
      {
        q: 'Kendime ait bir içerik izinsiz paylaşıldıysa ne yapabilirim?',
        a: 'Önce içeriği paylaşan kişiyle iletişime geçip kaldırılmasını isteyebilirsiniz. Pinterest gibi platformlar, hak sahiplerinin telif ihlali bildirimi gönderebileceği resmî kanallar sunar ve süreç platformun kendi kuralları üzerinden yürür. Genel çerçeveyi <a href="/telif-hakki-ve-pinterest-indirme/">telif hakkı rehberimizde</a> anlatıyoruz.',
      },
    ],
  },
];

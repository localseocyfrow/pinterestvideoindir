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

// Consumed by the dedicated /sss/ page.
export const ALL_FAQ_GROUPS: FaqGroup[] = [
  { title: 'Genel & Video İndirme', items: HOME_FAQ },
  { title: 'Resim (Görsel) İndirme', items: IMAGE_FAQ },
  { title: 'GIF İndirme', items: GIF_FAQ },
  { title: 'Karusel İndirme', items: CAROUSEL_FAQ },
];

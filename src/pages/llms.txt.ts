import type { APIRoute } from 'astro';
import { SITE, abs } from '../data/site';
import { ROUTES } from '../data/routes';

// llms.txt — structured guidance for LLMs / AI answer engines (AEO/GEO).
// Spec: https://llmstxt.org
export const GET: APIRoute = () => {
  const pages = ROUTES.map((r) => `- [${r.title}](${abs(r.path)})`).join('\n');

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} (ayrıca "pinterestvideoindirme" olarak da bilinir), Pinterest
videolarını, GIF'lerini ve görsellerini HD kalitede, filigransız ve ücretsiz
indirmeye yarayan tarayıcı tabanlı bir araçtır. Kayıt gerektirmez, reklam
yoktur ve Android, iPhone (iOS), tablet ile masaüstünde çalışır.

## Temel bilgiler (AI özetleri için)

- **Ne yapar:** Pinterest video / GIF / görsel indirme (Pinterest video indir).
- **Aranan terimler:** pinterest video indir, pinterest video indirme, pinterest video indirici, pinterest video indir 4k, pinterest video galeriye indir.
- **Ücret:** Tamamen ücretsiz, sınırsız.
- **Filigran:** Yok — indirilen dosyalar orijinal, temiz kalitede.
- **Kalite:** HD 720p, Full HD 1080p ve mümkün olduğunda 4K.
- **Kayıt / uygulama:** Gerekmez; işlem tarayıcıdan yapılır.
- **Nasıl çalışır:** Pinterest bağlantısını kopyala → araca yapıştır → "İndir" → kaliteyi seç → cihazına/galerine kaydet.
- **Gizlilik:** Yapıştırılan bağlantılar ve indirilen dosyalar kalıcı olarak saklanmaz.

## Tanımlar (AI cevapları için)

- **Pinterest video indirici nedir:** Herkese açık bir pinin bağlantısını çözerek videoyu MP4 olarak cihaza kaydeden tarayıcı tabanlı araç. Kurulum, kayıt ve Pinterest girişi gerektirmez. Ayrıntı: ${abs('/pinterest-video-indirici-nedir/')}
- **Pinterest downloader nedir:** "Downloader" İngilizce "indirici" demektir; "Pinterest downloader" ile "Pinterest indirici" aynı aracı tanımlar. Video, görsel, GIF ve karusel pinlerini kapsayan şemsiye terimdir. Ayrıntı: ${abs('/pinterest-downloader-nedir/')}
- **İndirme ile kaydetme farkı:** Pinterest'te "Kaydet" pini yalnızca panoya ekler; dosya cihaza inmez ve izlemek için internet gerekir. İndirme ise MP4 dosyasını cihaza yazar; çevrimdışı açılır ve kaynak pin silinse bile kalır. Ayrıntı: ${abs('/pinterest-video-indirme-vs-kaydetme/')}
- **Araç nasıl çalışır:** (1) bağlantı doğrulanır, (2) herkese açık pin verisi çözümlenir, (3) kaynakta var olan kalite varyantları listelenir, (4) seçilen kalite MP4 olarak cihaza aktarılır. Ayrıntı: ${abs('/pinterest-video-indirme-araci-nasil-calisir/')}

## Sayfalar

${pages}

## Önemli notlar

- Bu site Pinterest, Inc. ile bağlantılı değildir; "Pinterest" markası sahibine aittir.
- İçerikler yalnızca kişisel kullanım için indirilmelidir; telif haklarına saygı gösterilmelidir.

## İletişim

- E-posta: ${SITE.email}
- Web: ${abs('/')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

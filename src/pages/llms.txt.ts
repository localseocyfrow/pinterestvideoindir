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

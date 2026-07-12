type MediaType = "video" | "image";

export interface DownloadItem {
  type: MediaType;
  url: string;
  quality?: string;
}

export interface DownloadResult {
  platform: "pinterest";
  originalUrl: string;
  normalizedUrl: string;
  items: DownloadItem[];
}

const COMMON_HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "accept-language": "en-US,en;q=0.9",
};

function decodeEscaped(raw: string): string {
  const unescaped = raw
    .replace(/\\u0025/g, "%")
    .replace(/\\u0026/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/\\\//g, "/")
    .replace(/\\\\/g, "\\");

  try {
    if (/%[0-9A-Fa-f]{2}/.test(unescaped)) {
      return decodeURIComponent(unescaped);
    }
  } catch {
    // Keep original string if URI decode fails.
  }

  return unescaped;
}

function toAbsolute(input: string): URL {
  try {
    return new URL(input.trim());
  } catch {
    throw new Error("Lütfen geçerli bir bağlantı girin.");
  }
}

function assertPinterestUrl(url: URL): void {
  const host = url.hostname.toLowerCase();
  if (!host.includes("pinterest.") && !host.includes("pin.it")) {
    throw new Error("Desteklenmeyen bağlantı. Lütfen geçerli bir Pinterest pin bağlantısı yapıştırın.");
  }
}

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    method: "GET",
    headers: COMMON_HEADERS,
    redirect: "follow",
  });
  const html = await response.text();
  if (!html || html.trim().length === 0) {
    throw new Error("Bağlantıdaki içerik okunamadı.");
  }
  return html;
}

function uniqueItems(items: DownloadItem[]): DownloadItem[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}

function collectPatternMatches(
  html: string,
  pattern: RegExp,
  itemType: MediaType,
  quality?: string,
): DownloadItem[] {
  const items: DownloadItem[] = [];
  for (const match of html.matchAll(pattern)) {
    if (match[1]) {
      items.push({ type: itemType, quality, url: decodeEscaped(match[1]) });
    }
  }
  return items;
}

async function parsePinterestMedia(normalizedUrl: string): Promise<DownloadItem[]> {
  const html = await fetchHtml(normalizedUrl);
  const items: DownloadItem[] = [];

  const imagePatterns = [
    /"images":\{"url":"(.*?)"/g,
    /"orig":\{"url":"(.*?)"/g,
    /"image_url":"(.*?)"/g,
    /"image_large_url":"(.*?)"/g,
    /"url":"(https:\\\/\\\/i\.pinimg\.com[^"]+)"/g,
  ];
  for (const pattern of imagePatterns) {
    items.push(...collectPatternMatches(html, pattern, "image"));
  }

  for (const match of html.matchAll(/"contentUrl":\s*"(.*?)"/g)) {
    if (match[1]) items.push({ type: "video", quality: "Original", url: decodeEscaped(match[1]) });
  }

  const gif = html.match(/"embed":\s*\{\s*"src":\s*"(.*?)"/)?.[1];
  if (gif) items.push({ type: "image", quality: "GIF", url: decodeEscaped(gif) });

  const ogVideo = html.match(/<meta\s+property="og:video"\s+content="([^"]+)"/i)?.[1];
  const ogImage = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)?.[1];
  if (ogVideo) items.push({ type: "video", quality: "Standard", url: decodeEscaped(ogVideo) });
  if (ogImage) items.push({ type: "image", url: decodeEscaped(ogImage) });

  // Fallback: the logged-out / lightweight pin page exposes media as plain CDN
  // URLs (CSS backgrounds, inline JSON with escaped slashes) rather than the
  // structured keys above. Normalise escaped slashes, then pick any pin video
  // (v.pinimg.com/....mp4) and the main full-resolution image
  // (i.pinimg.com/originals/...). Videos are collected first so they preview first.
  const normalized = html.replace(/\\\//g, "/");

  const videoFallback = /https:\/\/v\.pinimg\.com\/[A-Za-z0-9/._-]+\.mp4/g;
  for (const match of normalized.matchAll(videoFallback)) {
    items.push({ type: "video", quality: "Video", url: match[0] });
  }

  const imageFallback =
    /https:\/\/i\.pinimg\.com\/originals\/[A-Za-z0-9/._-]+\.(?:jpg|jpeg|png|webp|gif)/g;
  for (const match of normalized.matchAll(imageFallback)) {
    const isGif = match[0].toLowerCase().endsWith(".gif");
    items.push({ type: "image", quality: isGif ? "GIF" : "Orijinal", url: match[0] });
  }

  return uniqueItems(items);
}

async function resolvePinterestUrl(inputUrl: string): Promise<string> {
  const response = await fetch(inputUrl, {
    method: "GET",
    headers: COMMON_HEADERS,
    redirect: "follow",
  }).catch(() => null);

  const finalUrl = response?.url ?? inputUrl;
  const html = response ? await response.text().catch(() => "") : "";

  if (finalUrl.includes("pinterest.") && finalUrl.includes("/pin/")) {
    return finalUrl;
  }

  const canonical = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i,
  )?.[1];
  if (canonical && canonical.includes("pinterest.") && canonical.includes("/pin/")) {
    return canonical;
  }

  return finalUrl;
}

export async function resolveDownload(inputUrl: string): Promise<DownloadResult> {
  const initialUrl = toAbsolute(inputUrl);
  assertPinterestUrl(initialUrl);

  const normalizedUrl = await resolvePinterestUrl(initialUrl.toString());
  const items = await parsePinterestMedia(normalizedUrl);

  if (items.length === 0) {
    throw new Error("İndirilebilir medya bulunamadı. Herkese açık başka bir pin bağlantısı deneyin.");
  }

  return {
    platform: "pinterest",
    originalUrl: inputUrl,
    normalizedUrl,
    items,
  };
}

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

export class DownloadError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "DownloadError";
    this.status = status;
  }
}

const NOT_FOUND =
  "Bu pin bulunamadı veya herkese açık değil. Bağlantıyı kontrol edip başka bir pin deneyin.";

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
    // Keep the original string if URI decoding fails.
  }

  return unescaped;
}

function toAbsolute(input: string): URL {
  try {
    return new URL(input.trim());
  } catch {
    throw new DownloadError("Lütfen geçerli bir bağlantı girin.");
  }
}

function assertPinterestUrl(url: URL): void {
  const host = url.hostname.toLowerCase();
  if (!host.includes("pinterest.") && !host.includes("pin.it")) {
    throw new DownloadError(
      "Desteklenmeyen bağlantı. Lütfen geçerli bir Pinterest pin bağlantısı yapıştırın.",
    );
  }
}

function uniqueItems(items: DownloadItem[]): DownloadItem[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = item.url.split("?")[0];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isPinimg(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === "pinimg.com" || host.endsWith(".pinimg.com");
  } catch {
    return false;
  }
}

/** Static chrome, avatars and tiny thumbs — the gradient icon lives here. */
function isUiAsset(url: string): boolean {
  const path = url.toLowerCase();
  if (path.includes("s.pinimg.com")) return true;
  if (/\/(?:30x30|45x45|60x60|75x75|136x136|150x150|170x|200x|216x|222x|236x)\//.test(path)) {
    return true;
  }
  return /avatar|profile_image|default_|placeholder|gradient|empty-state|user_icon/.test(path);
}

function resolutionLabel(url: string, width?: number, height?: number): string {
  const fromPath = url.match(/\/(\d{3,4})p(?:\/|_|\.)/i)?.[1]
    ?? url.match(/[_/-](\d{3,4})w(?:\/|_|\.)/i)?.[1];
  const px = Number(fromPath) || height || width || 0;
  if (px >= 200) return `${px}p`;
  return "MP4";
}

function pushVideo(
  items: DownloadItem[],
  rawUrl: string,
  width?: number,
  height?: number,
): void {
  const url = decodeEscaped(rawUrl);
  if (!url.includes(".mp4") || !isPinimg(url) || isUiAsset(url)) return;
  items.push({ type: "video", url, quality: resolutionLabel(url, width, height) });
}

function pushImage(items: DownloadItem[], rawUrl: string, quality = "Görsel"): void {
  const url = decodeEscaped(rawUrl);
  if (!isPinimg(url) || isUiAsset(url)) return;
  if (/\.(mp4|m3u8)(\?|$)/i.test(url)) return;
  const isGif = url.toLowerCase().includes(".gif");
  items.push({ type: "image", url, quality: isGif ? "GIF" : quality });
}

/**
 * Pull only the media Pinterest actually embeds for this pin.
 * Labels come from the file (720p, 1080p, …). Nothing is called 4K
 * unless the URL or dimensions say so, and low-res files are never
 * relabelled "Orijinal".
 */
export function parsePinterestHtml(html: string): DownloadItem[] {
  const normalized = html.replace(/\\\//g, "/");
  const items: DownloadItem[] = [];

  const videoList = normalized.match(/"video_list"\s*:\s*\{[\s\S]{0,20000}?\n?\s*\}\s*,/);
  const videoScope = videoList?.[0] ?? "";
  if (videoScope) {
    for (const block of videoScope.matchAll(/\{[^{}]{0,800}\}/g)) {
      const chunk = block[0];
      const url = chunk.match(/"url"\s*:\s*"([^"]+\.mp4[^"]*)"/)?.[1];
      if (!url) continue;
      const width = Number(chunk.match(/"width"\s*:\s*(\d+)/)?.[1] ?? 0);
      const height = Number(chunk.match(/"height"\s*:\s*(\d+)/)?.[1] ?? 0);
      pushVideo(items, url, width, height);
    }
  }

  if (!items.some((item) => item.type === "video")) {
    for (const match of normalized.matchAll(/https:\/\/(?:v\d*\.)?pinimg\.com\/[^"'\s<>]+\.mp4/g)) {
      pushVideo(items, match[0]);
    }
  }

  const carouselAt = normalized.indexOf('"carousel_data"');
  const carousel = carouselAt >= 0 ? normalized.slice(carouselAt, carouselAt + 30000) : "";
  const imageScope = carousel || normalized;
  const imagePattern = /"(?:orig|736x|originals)"\s*:\s*\{[^{}]{0,400}?"url"\s*:\s*"([^"]+)"/g;
  for (const match of imageScope.matchAll(imagePattern)) {
    const width = Number(match[0].match(/"width"\s*:\s*(\d+)/)?.[1] ?? 0);
    if (width > 0 && width < 400) continue;
    pushImage(items, match[1], "Görsel");
  }

  const gif = normalized.match(/"embed"\s*:\s*\{\s*"src"\s*:\s*"([^"]+)"/)?.[1];
  if (gif) pushImage(items, gif, "GIF");

  const ogImage = normalized.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)?.[1];
  if (ogImage && !items.some((item) => item.type === "image")) {
    pushImage(items, ogImage, "Görsel");
  }

  return uniqueItems(items);
}

function looksMissing(html: string, finalUrl: string): boolean {
  if (!/\/pin\//.test(finalUrl)) return true;
  const missing = /couldn.?t find that page|sorry! we couldn|sayfa bulunamad|pin bulunamadı|this page isn.?t available/i.test(html);
  const hasMedia = /"video_list"|og:video|og:image|"carousel_data"/i.test(html);
  return missing && !hasMedia;
}

async function resolvePinterestUrl(inputUrl: string): Promise<{ url: string; html: string }> {
  const response = await fetch(inputUrl, {
    method: "GET",
    headers: COMMON_HEADERS,
    redirect: "follow",
  }).catch(() => null);

  if (!response) {
    throw new DownloadError("Bağlantıdaki içerik okunamadı. Biraz sonra tekrar deneyin.", 502);
  }

  const html = await response.text().catch(() => "");
  const finalUrl = response.url || inputUrl;

  if (response.status === 404 || looksMissing(html, finalUrl)) {
    throw new DownloadError(NOT_FOUND, 404);
  }

  if (!response.ok || !html.trim()) {
    throw new DownloadError("Bağlantıdaki içerik okunamadı. Biraz sonra tekrar deneyin.", 502);
  }

  if (finalUrl.includes("/pin/")) return { url: finalUrl, html };

  const canonical = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i,
  )?.[1];
  if (canonical && canonical.includes("/pin/")) {
    return { url: canonical, html };
  }

  throw new DownloadError(NOT_FOUND, 404);
}

export async function resolveDownload(inputUrl: string): Promise<DownloadResult> {
  const initialUrl = toAbsolute(inputUrl);
  assertPinterestUrl(initialUrl);

  const { url: normalizedUrl, html } = await resolvePinterestUrl(initialUrl.toString());
  const items = parsePinterestHtml(html);

  if (items.length === 0) {
    throw new DownloadError(NOT_FOUND, 404);
  }

  return {
    platform: "pinterest",
    originalUrl: inputUrl,
    normalizedUrl,
    items,
  };
}

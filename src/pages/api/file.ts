import type { APIRoute } from "astro";

export const prerender = false;

const FETCH_HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  accept: "*/*",
};

function safeFileName(input: string): string {
  return input.replace(/[^a-zA-Z0-9._-]/g, "_");
}

function inferExtension(contentType: string | null, fallbackUrl: URL): string {
  if (contentType?.includes("video/mp4")) return "mp4";
  if (contentType?.includes("image/jpeg")) return "jpg";
  if (contentType?.includes("image/png")) return "png";
  if (contentType?.includes("image/webp")) return "webp";
  if (contentType?.includes("image/gif")) return "gif";

  const path = fallbackUrl.pathname.toLowerCase();
  const known = ["mp4", "jpg", "jpeg", "png", "webp", "gif"];
  const found = known.find((ext) => path.endsWith(`.${ext}`));
  if (found) return found === "jpeg" ? "jpg" : found;

  return "bin";
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const remoteUrl = url.searchParams.get("url");
    const requestedName = url.searchParams.get("name") ?? "pin-download";

    if (!remoteUrl) {
      return new Response("Missing file URL.", { status: 400 });
    }

    let parsed: URL;
    try {
      parsed = new URL(remoteUrl);
    } catch {
      return new Response("Invalid file URL.", { status: 400 });
    }

    if (!["http:", "https:"].includes(parsed.protocol)) {
      return new Response("Unsupported protocol.", { status: 400 });
    }

    const upstream = await fetch(parsed.toString(), {
      method: "GET",
      redirect: "follow",
      headers: FETCH_HEADERS,
    });

    if (!upstream.ok || !upstream.body) {
      return new Response("Unable to fetch file.", { status: 502 });
    }

    const contentType =
      upstream.headers.get("content-type") ?? "application/octet-stream";

    const ext = inferExtension(contentType, parsed);
    const downloadName = `${safeFileName(requestedName)}.${ext}`;

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "content-type": contentType,
        "content-disposition": `attachment; filename="${downloadName}"`,
        "cache-control": "no-store",
      },
    });
  } catch {
    return new Response("Unexpected download error.", { status: 500 });
  }
};

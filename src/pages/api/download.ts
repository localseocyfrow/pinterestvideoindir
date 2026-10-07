import type { APIRoute } from "astro";
import { DownloadError, resolveDownload } from "../../lib/downloader";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => null);
    const rawUrl = typeof body?.url === "string" ? body.url : "";

    if (!rawUrl.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Lütfen önce bir bağlantı yapıştırın.",
        }),
        { status: 400, headers: { "content-type": "application/json" } },
      );
    }

    const data = await resolveDownload(rawUrl);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Bağlantı işlenirken beklenmeyen bir hata oluştu.";
    const status = error instanceof DownloadError ? error.status : 400;

    return new Response(
      JSON.stringify({
        success: false,
        message,
      }),
      { status, headers: { "content-type": "application/json" } },
    );
  }
};

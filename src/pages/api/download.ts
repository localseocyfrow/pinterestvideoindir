import type { APIRoute } from "astro";
import { resolveDownload } from "../../lib/downloader";

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

    if (data.items.length === 0) {
      throw new Error("İndirilebilir medya bulunamadı. Herkese açık başka bir pin bağlantısı deneyin.");
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Bağlantı işlenirken beklenmeyen bir hata oluştu.";

    return new Response(
      JSON.stringify({
        success: false,
        message,
      }),
      { status: 400, headers: { "content-type": "application/json" } },
    );
  }
};

import type { APIRoute } from 'astro';
import { SITE } from '../../data/site';

export const prerender = false;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  const company = typeof body?.company === 'string' ? body.company.trim() : '';

  if (company) {
    return Response.json({ success: true });
  }

  if (name.length < 2 || name.length > 80) {
    return Response.json(
      { success: false, message: 'Lütfen adınızı yazın.' },
      { status: 400 },
    );
  }
  if (!EMAIL.test(email) || email.length > 120) {
    return Response.json(
      { success: false, message: 'Geçerli bir e-posta adresi yazın.' },
      { status: 400 },
    );
  }
  if (message.length < 10 || message.length > 4000) {
    return Response.json(
      { success: false, message: 'Mesaj en az 10 karakter olmalı.' },
      { status: 400 },
    );
  }

  const upstream = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `İletişim: ${SITE.domain}`,
      _template: 'table',
    }),
  }).catch(() => null);

  if (!upstream || !upstream.ok) {
    return Response.json(
      {
        success: false,
        message: `Mesaj gönderilemedi. Doğrudan ${SITE.email} adresine yazabilirsiniz.`,
      },
      { status: 502 },
    );
  }

  return Response.json({
    success: true,
    message: 'Mesajınız alındı. Genellikle 1–2 iş günü içinde yanıtlarız.',
  });
};

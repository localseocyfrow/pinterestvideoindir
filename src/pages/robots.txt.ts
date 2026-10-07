import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

// Dynamic robots.txt — allows everything and points to the sitemap + llms.txt.
export const GET: APIRoute = () => {
  const body = `# robots.txt — ${SITE.name}
User-agent: *
Allow: /
Disallow: /api/

# AI / answer engines are welcome (AEO/GEO)
User-agent: GPTBot
Allow: /
Disallow: /api/
User-agent: OAI-SearchBot
Allow: /
Disallow: /api/
User-agent: ChatGPT-User
Allow: /
Disallow: /api/
User-agent: PerplexityBot
Allow: /
Disallow: /api/
User-agent: Google-Extended
Allow: /
Disallow: /api/
User-agent: ClaudeBot
Allow: /
Disallow: /api/
User-agent: Applebot-Extended
Allow: /
Disallow: /api/

Sitemap: ${SITE.url}/sitemap.xml
# LLM guidance: ${SITE.url}/llms.txt
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

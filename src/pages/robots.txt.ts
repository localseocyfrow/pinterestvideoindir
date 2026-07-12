import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

// Dynamic robots.txt — allows everything and points to the sitemap + llms.txt.
export const GET: APIRoute = () => {
  const body = `# robots.txt — ${SITE.name}
User-agent: *
Allow: /

# AI / answer engines are welcome (AEO/GEO)
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
# LLM guidance: ${SITE.url}/llms.txt
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

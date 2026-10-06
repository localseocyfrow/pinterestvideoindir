// JSON-LD structured data builders (schema.org).
// These power rich results + AEO/GEO: search engines and AI answer
// engines read them to understand the tool, steps and Q&A.
import { SITE, EDITOR, abs } from '../data/site';
import type { QA } from '../data/faq';

type JsonLd = Record<string, unknown>;

// Organization + WebSite are emitted site-wide (in the base layout).
export function organizationSchema(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: 'pinterestvideoindirme',
    url: abs('/'),
    email: SITE.email,
    foundingDate: SITE.founded,
    logo: {
      '@type': 'ImageObject',
      url: abs('/logo.svg'),
    },
    description: SITE.description,
    sameAs: [SITE.youtube],
    parentOrganization: {
      '@type': 'Organization',
      name: EDITOR.company,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE.email,
      contactType: 'customer support',
      availableLanguage: ['tr', 'en'],
    },
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: abs('/'),
    inLanguage: SITE.lang,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

// The core "tool" entity — models the downloader as a free web application.
export function webAppSchema(): JsonLd {
  return {
    '@type': 'WebApplication',
    '@id': `${SITE.url}/#webapp`,
    name: SITE.name,
    url: abs('/'),
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web (Android, iOS, Windows, macOS)',
    inLanguage: SITE.lang,
    browserRequirements: 'Requires JavaScript. Modern web browser.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY',
    },
    featureList: [
      'Kaynakta mevcut en yüksek kalitede Pinterest video indirme (HD)',
      'Filigransız indirme',
      'Videoyu galeriye / cihaza kaydetme',
      'Pinterest GIF indirme',
      'Pinterest görsel indirme',
      'Ücretsiz ve sınırsız',
      'Kayıt gerektirmez',
    ],
  };
}

// Answers may carry inline links for the visible accordion; the JSON-LD wants
// plain prose. Stripping here (rather than storing two copies of every answer)
// guarantees the schema text and the rendered text always say the same thing.
function stripHtml(value: string): string {
  return value
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

export function faqSchema(items: QA[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: stripHtml(item.q),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(item.a),
      },
    })),
  };
}

export type Step = { name: string; text: string };

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: Step[];
  totalTime?: string; // ISO 8601 duration, e.g. PT1M
}): JsonLd {
  return {
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    inLanguage: SITE.lang,
    totalTime: opts.totalTime ?? 'PT1M',
    tool: [{ '@type': 'HowToTool', name: SITE.name }],
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

// Article node — used by informational guide pages (e.g. the upload guide)
// that are NOT a downloader tool, so they signal editorial content rather
// than a WebApplication.
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}): JsonLd {
  return {
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    inLanguage: SITE.lang,
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.path) },
    datePublished: opts.datePublished ?? SITE.updated,
    dateModified: opts.dateModified ?? SITE.updated,
    author: {
      '@type': 'Person',
      name: EDITOR.name,
      url: abs(EDITOR.path),
    },
    // Content is produced by the site team (author) and editorially reviewed
    // by a named person; the full Person node lives on their profile page.
    editor: { '@type': 'Person', name: EDITOR.name, url: abs(EDITOR.path) },
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

// VideoObject node — emitted ONLY for a video that is actually embedded and
// visible on the page (schema.org + Google video rich-result requirement:
// structured data must match the on-page media). Thumbnail + embedUrl point at
// the real YouTube asset behind the youtube-nocookie iframe.
export function videoObjectSchema(opts: {
  name: string;
  description: string;
  videoId: string; // YouTube video id
  uploadDate?: string; // ISO date
  path?: string; // page the video is embedded on
}): JsonLd {
  return {
    '@type': 'VideoObject',
    name: opts.name,
    description: opts.description,
    thumbnailUrl: [`https://i.ytimg.com/vi/${opts.videoId}/hqdefault.jpg`],
    uploadDate: opts.uploadDate ?? SITE.updated,
    contentUrl: `https://www.youtube.com/watch?v=${opts.videoId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${opts.videoId}`,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: SITE.lang,
    ...(opts.path
      ? { mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.path) } }
      : {}),
  };
}

// Person node for the site's named editor. Only verifiable, public facts go in
// here (role, employer, working languages, profile links) — no invented awards,
// credentials or locations. Emitted on the author profile page, which owns the
// canonical @id every other reference resolves to.
export function personSchema(opts: { knowsAbout?: string[] } = {}): JsonLd {
  return {
    '@type': 'Person',
    '@id': `${SITE.url}${EDITOR.path}#person`,
    name: EDITOR.name,
    url: abs(EDITOR.path),
    jobTitle: EDITOR.jobTitle,
    worksFor: { '@type': 'Organization', name: EDITOR.company },
    knowsLanguage: ['en', 'ur'],
    ...(opts.knowsAbout ? { knowsAbout: opts.knowsAbout } : {}),
    // Verified profiles only — do not pad this with unconfirmed links.
    sameAs: [EDITOR.linkedin, EDITOR.website],
  };
}

// ProfilePage node — the author page's own WebPage type, whose mainEntity is
// the Person above (schema.org's recommended shape for an author profile).
export function profilePageSchema(opts: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
}): JsonLd {
  return {
    '@type': 'ProfilePage',
    '@id': `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    inLanguage: SITE.lang,
    isPartOf: { '@id': `${SITE.url}/#website` },
    dateModified: opts.dateModified ?? SITE.updated,
    mainEntity: { '@id': `${SITE.url}${EDITOR.path}#person` },
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; href: string }[],
): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

// Wrap one or more schema objects into a single @graph document.
export function graph(...nodes: JsonLd[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes,
  });
}

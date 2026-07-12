// JSON-LD structured data builders (schema.org).
// These power rich results + AEO/GEO: search engines and AI answer
// engines read them to understand the tool, steps and Q&A.
import { SITE, abs } from '../data/site';
import type { QA } from '../data/faq';

type JsonLd = Record<string, unknown>;

// Organization + WebSite are emitted site-wide (in the base layout).
export function organizationSchema(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    foundingDate: SITE.founded,
    logo: {
      '@type': 'ImageObject',
      url: abs('/favicon.svg'),
    },
    description: SITE.description,
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
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
    url: SITE.url,
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
      'HD ve 4K Pinterest video indirme',
      'Filigransız indirme',
      'Pinterest GIF indirme',
      'Pinterest görsel indirme',
      'Ücretsiz ve sınırsız',
      'Kayıt gerektirmez',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2143',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function faqSchema(items: QA[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
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

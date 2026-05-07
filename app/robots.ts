import type { MetadataRoute } from 'next';

// Place this file at: app/robots.ts
// Auto-serves at: https://www.primelaundry.in/robots.txt

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',          // block API routes
          '/_next/',        // block Next.js internals
          '/admin/',        // block any admin pages if added later
        ],
      },
      {
        // Block AI training crawlers
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.primelaundry.in/sitemap.xml',
    host:    'https://www.primelaundry.in',
  };
}
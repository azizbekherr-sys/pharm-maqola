'use client';

/**
 * Optional analytics integration point.
 *
 * To enable Vercel Web Analytics:
 * 1. Install: npm i @vercel/analytics
 * 2. Set NEXT_PUBLIC_ANALYTICS_ENABLED=true in .env.local
 * 3. Uncomment the Analytics import and component below
 *
 * IMPORTANT: Medical searches may contain sensitive health information.
 * Do not send raw search queries to analytics. The beforeSend callback
 * below strips query parameters from /qidiruv routes.
 */

// import { Analytics } from '@vercel/analytics/react';

export default function AnalyticsProvider() {
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== 'true') {
    return null;
  }

  // Uncomment when @vercel/analytics is installed:
  // return (
  //   <Analytics
  //     beforeSend={(event) => {
  //       const url = new URL(event.url);
  //       if (url.pathname === '/qidiruv') {
  //         url.search = '';
  //         return { ...event, url: url.toString() };
  //       }
  //       return event;
  //     }}
  //   />
  // );

  return null;
}

# Maqola — Deployment Guide

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL without trailing slash (e.g. `https://maqola.uz`) |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | No | Set to `true` to enable Vercel Web Analytics |

Copy `.env.example` to `.env.local` for local development. The app falls back to `http://localhost:3000` when `NEXT_PUBLIC_SITE_URL` is not set.

## Vercel Deployment

1. Push the repository to GitHub
2. Import the project in [vercel.com/new](https://vercel.com/new)
3. Set environment variable: `NEXT_PUBLIC_SITE_URL` = `https://maqola.uz`
4. Deploy — Vercel auto-detects Next.js and runs `next build`

### Production Domain Setup

1. In Vercel project settings, go to **Domains**
2. Add `maqola.uz`
3. Configure DNS: add the CNAME or A record Vercel provides
4. Vercel provisions TLS automatically
5. Verify `https://maqola.uz/robots.txt` and `/sitemap.xml` after deployment

## Scripts

```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Serve production build locally
npm run lint       # ESLint
npm run typecheck  # TypeScript type checking
npm run check      # Lint + typecheck + build (CI)
```

## Security Headers

Configured in `next.config.ts`. Production CSP:

- `default-src 'self'`
- `script-src 'self' 'unsafe-inline'`
- `style-src 'self' 'unsafe-inline'`
- `img-src 'self' data:`
- `font-src 'self'`
- `frame-ancestors 'none'`
- HSTS with 2-year max-age and preload

Development adds `'unsafe-eval'` to script-src for React debugging.

## Analytics (Optional)

The analytics integration point is in `src/components/analytics/AnalyticsProvider.tsx`.

To enable Vercel Web Analytics:

1. `npm i @vercel/analytics`
2. Set `NEXT_PUBLIC_ANALYTICS_ENABLED=true`
3. Uncomment the `Analytics` component in `AnalyticsProvider.tsx`

**Important**: Medical search queries are stripped from analytics events via the `beforeSend` callback — `/qidiruv` URLs have their query parameters removed before sending to protect sensitive health information.

## Monitoring (Optional)

### Application Errors

- **Vercel**: Built-in error tracking in the Functions tab
- **Sentry**: Add `@sentry/nextjs`, configure with `SENTRY_DSN` env var

### Core Web Vitals

- **Vercel**: Enable Web Analytics or Speed Insights in project settings
- No code changes required — Vercel collects CWV automatically

### Build Failures

- **Vercel**: Deployment notifications via email or Slack integration
- **GitHub Actions**: Add the `check` script to CI workflow

### Broken Links

- Run `npx next build` — generates all static routes; missing pages cause build errors
- External link checking: use a tool like `linkinator` post-deploy

## Architecture Notes

- All pages are statically generated (SSG) — no server-side runtime needed
- Fonts loaded via `next/font/google` with `display: swap`
- No external API dependencies — all data is in `src/data/mock.ts`
- Node.js 18+ required (tested on 22.14.0)

# mjasrar.site

Two sites in one Next.js app, each with its own root layout, styles and fonts:

| Site | Route | Code |
| --- | --- | --- |
| MJAsrar company site | `/`, `/services`, `/work`, `/work/[slug]`, `/about`, `/contact` | `app/(site)/`, `components/site/`, `lib/site.ts` |
| Junaid Asrar's portfolio | `portfolio.mjasrar.site` (route `/portfolio`) | `app/(portfolio)/`, `components/portfolio/`, `lib/portfolio/` |

Company copy, services, case studies, FAQ and company details (legal name, email) all live in `lib/site.ts`.

## Portfolio subdomain

The portfolio is served at `portfolio.mjasrar.site`, a domain on the same Vercel project. `proxy.ts` rewrites any `portfolio.*` host to the `/portfolio` route, and `next.config.ts` permanently redirects `mjasrar.site/portfolio` to the subdomain.

Locally, use `http://localhost:3000/portfolio` or `http://portfolio.localhost:3000`.

## Develop

```bash
npm run dev
npm run lint
npm run build
```

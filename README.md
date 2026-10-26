# mjasrar.site

Two sites in one Next.js app, each with its own root layout, styles and fonts:

| Site | Route | Code |
| --- | --- | --- |
| MJAsrar company site | `/`, `/services`, `/work`, `/work/[slug]`, `/about`, `/contact` | `app/(site)/`, `components/site/`, `lib/site.ts` |
| Junaid Asrar's portfolio | `/portfolio` | `app/(portfolio)/`, `components/portfolio/`, `lib/portfolio/` |

Company copy, services, case studies, FAQ and company details (legal name, email) all live in `lib/site.ts`.

## Portfolio subdomain

`proxy.ts` already serves the portfolio for any `portfolio.*` host. To go live on `portfolio.mjasrar.site`:

1. Add `portfolio.mjasrar.site` as a domain on this Vercel project and create the DNS record Vercel asks for.
2. Optionally redirect `mjasrar.site/portfolio` to the subdomain, and update the portfolio's `openGraph.url` in `app/(portfolio)/layout.tsx`.

Test locally at `http://portfolio.localhost:3000`.

## Develop

```bash
npm run dev
npm run lint
npm run build
```

# AvyuktAIverse® — Website

Marketing website for **AvyuktAIverse® Private Limited**.
Built with Next.js 16 (App Router), React 19, and Tailwind v4.

> *"Engineers who think. AI that helps."*

---

## Tech stack

| Layer          | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | Next.js 16 App Router (Server Components default)   |
| Runtime        | Node.js 20+                                         |
| UI             | React 19, Tailwind v4, custom token system          |
| Content        | TSX pages + (planned) MDX for Insights/Case Studies |
| Forms          | React 19 Server Actions + Zod validation            |
| Email          | Resend                                              |
| Hosting        | Vercel (Fluid Compute)                              |
| Package mgr    | pnpm                                                |

## Prerequisites

- **Node.js** 20 LTS or newer (`.nvmrc` pins `20`)
- **pnpm** 9+
  ```bash
  corepack enable
  corepack prepare pnpm@latest --activate
  ```
- A **Resend** API key *(optional in dev — the contact form logs to console when missing)*

## Quick start

```bash
# 1. Clone and install
git clone git@github.com:sreedhargs89/avyuktaiverse-web.git
cd avyuktaiverse-web
pnpm install

# 2. Configure environment
cp .env.example .env.local
# open .env.local and fill in any values you need

# 3. Run the dev server
pnpm dev
# → http://localhost:3000
```

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `pnpm dev`        | Start Next.js dev server on port 3000         |
| `pnpm build`      | Production build                              |
| `pnpm start`      | Serve the production build                    |
| `pnpm lint`       | Run ESLint (flat config)                      |
| `pnpm typecheck`  | `tsc --noEmit`                                |

## Project structure

```
app/                # Next.js App Router routes
  [lang]/           # Locale segment: /en/... and /ja/...
    page.tsx        # Home
    about/          # About
    capabilities/   # Capabilities
    how-we-work/    # Process
    insights/       # Insights (coming soon)
    contact/        # Contact page + server action
    privacy/        # Privacy policy
    layout.tsx      # Root layout (metadata, fonts, JSON-LD)
    not-found.tsx   # Localized 404 (+ [...rest] catch-all)
  globals.css       # Tokens + Tailwind + base styles
  sitemap.ts        # Both locales with hreflang alternates

components/
  home/             # Homepage sections (hero, problem, etc.)
  layout/           # Header, footer, container, mobile menu
  ui/               # Reusable primitives (button, badge, logo…)

lib/
  constants.ts      # Company facts (email, address, routes)
  i18n/             # Locale config, path helpers, dictionaries (en.ts, ja.ts)
  utils.ts          # cn() and helpers
  seo.ts            # Metadata + JSON-LD helpers
  validation/       # Zod schemas

hooks/              # Client hooks (scroll reveal…)
public/             # Static assets
styles/             # Design tokens (imported by globals.css)
```

## Languages

The site is bilingual (English / Japanese). Every page lives under a locale
prefix — `/en/...` and `/ja/...` — and `proxy.ts` redirects unprefixed URLs
to the visitor's preferred language (explicit choice cookie → `Accept-Language`
→ English). All visitor-facing copy lives in `lib/i18n/dictionaries/`;
`en.ts` is the type source, so a missing Japanese key fails `pnpm typecheck`.

## Environment variables

See [`.env.example`](./.env.example). All variables are documented inline there.

## Brand

The official brand name is **AvyuktAIverse®** (one word, capital `A` and `I`, registered trademark).
Do not split it to "Avyukt AIverse". The only acceptable lowercase form is in DNS
and URLs: `avyuktaiverse.com`.

## License

Proprietary. © AvyuktAIverse® Private Limited. All rights reserved.

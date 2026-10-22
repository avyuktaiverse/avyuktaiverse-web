# Changelog

All notable changes to the AvyuktAIverse® website.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] — Unreleased — Revamp

### Added
- Leadership portraits on `/about` (`public/team/`), rendered with `next/image`; Sreedhara GS retitled Co-Founder & CEO.
- Leadership: Kuniaki Kudo joins as Chief Corporate Advisor — bilingual profile card on `/about`, Person JSON-LD, Organization `member`, and `llms.txt` entry.
- Design token system in `styles/tokens.css` consumed by Tailwind v4 `@theme`.
- `lib/seo.ts` — metadata + JSON-LD helpers (`organizationJsonLd`, `personJsonLd`).
- `lib/validation/contact.ts` — Zod schema for the contact form.
- `proxy.ts` — security headers (CSP, HSTS, frame-ancestors, referrer policy, permissions policy).
- `public/llms.txt` — guidance for LLM crawlers.
- `.env.example`, `.nvmrc`, `engines` field in `package.json`.
- Rewritten `README.md` with real setup instructions.
- Skip-to-content link, JSON-LD structured data in root layout.
- `typecheck` script.
- Viewport + theme-color metadata.

### Changed
- **Brand name unified to `AvyuktAIverse®`** (one word) across all copy, metadata, and components.
- `package.json` `name` renamed from `01_website` → `avyuktaiverse-web`.
- Contact server action: uses Zod, returns typed field errors, logs in dev when `RESEND_API_KEY` is missing.
- Logo component: restructured for tighter typography and hover animation.
- Root layout: richer metadata (OpenGraph, Twitter, authors, keywords), dark theme color.

### Fixed
- Footer was referencing `APP_VERSION` without importing it (latent runtime error).

### Security
- Strict CSP and standard security headers via `proxy.ts`.
- Server-side input validation with Zod on the contact form.

---

## [1.1.0] — 2026-04-10

- Added ® trademark to brand name.
- Expanded About page founder metrics (4 stat cards including MTTR and OpEx).
- Reframed founder bio around AI, digital transformation, and talent.
- Mobile menu fix: force viewport dimensions to escape sticky header containing-block.

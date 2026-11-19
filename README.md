# icrmahin Portfolio

A personal portfolio for **A. Mahin** — an independent product builder working across product thinking, interface design, and software engineering.

The visual direction is a playful editorial portfolio built around a warm paper canvas, ruled notebook texture, condensed display typography, small utility navigation, handwritten annotations, taped-photo details, and a restrained set of bright paper accents. It borrows the tactile energy of a personal scrapbook without turning the site into a game or sacrificing readable project storytelling.

## Stack

| Concern | Technology |
| --- | --- |
| Framework | Next.js 16.4.6 App Router |
| UI | React 19.3 + TypeScript 5.9 |
| Styling | Tailwind CSS 4.3 + custom CSS |
| Scroll choreography | GSAP 3.15 + ScrollTrigger |
| Interface motion | Motion 14.14 |
| Smooth scrolling | Lenis 1.3 |
| Typography | Manrope, Instrument Serif, DM Mono, Bebas Neue, Caveat |
| Images | Next.js Image + locally bundled WebP / PNG assets |
| Deployment target | Vercel or another Node-compatible Next.js host |

Direct dependency versions are pinned in `package.json`. Keep the motion stack coordinated; do not add more animation libraries for the same job.

## Requirements

- Node.js 22 or newer
- npm 10 or newer

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Or run the full sequence:

```bash
npm run check
```

## Project structure

```text
src/
├── app/
│   ├── about/                 # About page
│   ├── work/[slug]/           # Static project case studies
│   ├── globals.css            # Tokens, notebook paper, components, responsive rules
│   ├── layout.tsx             # Global layout, metadata, local font loading
│   ├── page.tsx               # Homepage composition
│   ├── robots.ts              # Crawler rules
│   └── sitemap.ts             # Generated sitemap
├── components/
│   ├── lenis-provider.tsx     # Lenis + GSAP ticker integration
│   ├── project-card.tsx       # Selected-work card
│   ├── project-visual.tsx     # Project-specific editorial artwork
│   ├── scroll-effects.tsx     # Accessible GSAP reveal choreography
│   ├── section-heading.tsx
│   ├── site-footer.tsx
│   └── site-header.tsx        # Responsive navigation
├── content/
│   └── projects.ts            # Typed project and case-study content
└── lib/
    └── site.ts                # Identity, email, social URLs

public/
├── icons/icon.svg
└── images/
    ├── autumn-cover.webp
    ├── hibbullah-logo.png
    ├── mahin-portrait.webp
    └── pixel-portrait.webp

docs/
└── CONTENT.md                 # Publishing and content rules
```

## Content editing

### Site identity

Update `src/lib/site.ts` to change the public role, email, location label, and social URLs.

### Projects

Edit `src/content/projects.ts`. The `slug` controls the `/work/[slug]` URL. The case-study routes are generated statically from this data.

Keep project statements verifiable. Do not add user counts, revenue, performance claims, testimonials, or client outcomes unless they are supported and approved for publication.

### Project imagery

- The profile portrait and pixel-art illustrations are the owner's previously generated portfolio assets.
- The Hibbullah mark is copied from the Hibbullah application's own `assets/images/logo/hibbullah-main.png`.
- The Hibbullah and DigitalPathways project-card compositions are editorial artwork, not screenshots of shipped software.

Replace the illustrative artwork with actual product screenshots as they become available. Do not present invented interface mockups as real shipped screens.

## Motion and accessibility

- GSAP + ScrollTrigger handle section reveals and the hero image entrance.
- Motion handles the responsive navigation panel.
- Lenis provides restrained wheel-scroll interpolation and is synchronized with the GSAP ticker.
- Reduced-motion preferences disable Lenis and entrance choreography.
- Motion is progressive enhancement; core content remains readable without it.
- Use native links and buttons, descriptive image alt text, visible focus styles, and semantic section headings.

Keep motion subordinate to content. Test keyboard navigation and `prefers-reduced-motion` after changes.

## Environment

Set the production URL in `.env.local` for canonical sitemap and social metadata generation:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

No database or private environment variables are required.

## Deployment

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Deploy using the default Next.js preset.
5. Verify `/`, `/about`, `/work/hibbullah`, `/work/digitalpathways`, `/robots.txt`, and `/sitemap.xml`.

## Engineering conventions

- Keep Server Components as the default.
- Use Client Components only for browser APIs and interactions.
- Keep content separate from presentation.
- Keep imagery local, optimized, and accurately labeled.
- Avoid speculative backend services and unnecessary dependencies.
- Run lint, typecheck, and production build before merging.

## License

All rights reserved. Portfolio content, photography, and generated visual assets are personal materials unless otherwise credited. Do not reuse them without permission.

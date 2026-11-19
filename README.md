# icrmahin Portfolio

A personal portfolio for **A. Mahin** — an independent product builder working across product thinking, interface design, and software engineering.

The site is intentionally editorial rather than template-like: warm paper surfaces, expressive typography, a restrained burnt-orange accent, custom project visuals, and a small amount of deliberate motion. It presents real work without invented client outcomes or inflated metrics.

## Stack

| Concern | Technology |
| --- | --- |
| Framework | Next.js 16.4.6 App Router |
| UI | React 19.3 + TypeScript 5.9 |
| Styling | Tailwind CSS 4.3 + modern component CSS |
| Scroll choreography | GSAP 3.15 + ScrollTrigger |
| Interface motion | Motion 14.14 |
| Smooth scrolling | Lenis 1.3 |
| Typography | Manrope, Instrument Serif, DM Mono via `next/font` |
| Images | Next.js Image + locally bundled WebP assets |
| Deployment target | Vercel or any Node-compatible Next.js host |

Direct dependency versions are pinned in `package.json`. The first successful `npm install` will generate `package-lock.json`; commit that generated lockfile before making routine dependency updates. Keep the motion stack coordinated rather than upgrading animation packages independently.

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
│   ├── globals.css            # Design tokens, components, responsive rules
│   ├── layout.tsx             # Global layout, metadata, local font loading
│   ├── page.tsx               # Homepage composition
│   ├── robots.ts              # Crawler rules
│   └── sitemap.ts             # Sitemap generated from public routes
├── components/
│   ├── lenis-provider.tsx     # Lenis + GSAP ticker integration
│   ├── project-card.tsx       # Selected-work card
│   ├── project-visual.tsx     # CSS-built product artwork
│   ├── scroll-effects.tsx     # Accessible GSAP reveal choreography
│   ├── section-heading.tsx    # Shared editorial section heading
│   ├── site-footer.tsx
│   └── site-header.tsx        # Responsive navigation
├── content/
│   └── projects.ts            # Typed project content and case-study data
└── lib/
    └── site.ts                # Site identity, email, and social URLs

public/
├── icons/icon.svg
└── images/
    ├── mahin-portrait.webp
    ├── autumn-cover.webp
    └── pixel-portrait.webp

scripts/
└── create-github-repo.sh      # Create the new GitHub repository and push

docs/
└── CONTENT.md                 # Updating portfolio content safely
```

## Content editing

### Site identity

Update `src/lib/site.ts` to change the public role, email, location label, and social links.

### Projects

Edit `src/content/projects.ts` to add or revise projects. Each project is rendered from typed data; its `slug` controls the `/work/[slug]` route. `generateStaticParams()` produces the case-study routes at build time.

Keep project statements evidence-based. Do not add revenue, user counts, performance claims, or client endorsements unless they can be verified and published.

### Images

Replace files in `public/images/` while keeping the expected filenames, or update the `src` values in the relevant components. Prefer WebP or AVIF, provide meaningful alt text, and keep large originals out of the repository.

The included portrait and pixel-art assets were supplied from the owner's previous portfolio image-generation work and optimized into WebP for this site. The project-card artwork is an illustrative CSS composition, not a claim that it is a screenshot of the shipped product.

## Motion and accessibility

- GSAP + ScrollTrigger handle section entrances and the hero cover reveal.
- Motion handles the responsive navigation panel.
- Lenis provides a light wheel-scroll interpolation and is synchronized with GSAP's ticker.
- Reduced-motion preferences disable Lenis and GSAP entrance animations.
- Core content remains in the document without JavaScript; the motion layer is progressive enhancement.
- Interactive controls have accessible labels, focus states, and native semantics.

Do not animate every element. Keep movement subordinate to hierarchy and content. Test keyboard navigation and `prefers-reduced-motion` after changes.

## Environment

Set the public deployment URL in `.env.local` for canonical sitemap generation:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Do not commit `.env.local` or secrets. This project does not require a database or private environment secrets.

## Create the GitHub repository

The project is prepared for `icrmahin/icrmahin-portfolio`. After extracting this source folder, authenticate the GitHub CLI and run the included publishing script:

```bash
gh auth login
./scripts/create-github-repo.sh
```

The script creates a **public** repository and pushes the current branch. Set `GITHUB_REPOSITORY=owner/name` to use a different repository name.

## Deployment

1. Push the project to GitHub (the script above can do this).
2. Import the repository into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Deploy using the default Next.js preset.
5. Verify `/`, `/about`, `/work/hibbullah`, `/work/digitalpathways`, `/robots.txt`, and `/sitemap.xml`.

## Engineering conventions

- Keep Server Components as the default. Add `"use client"` only for interactions or browser APIs.
- Keep content separate from presentation.
- Use semantic HTML and descriptive image alt text.
- Avoid unnecessary client state, generic UI libraries, and speculative backend services.
- Keep business/project claims accurate and clearly label work in progress.
- Run lint, typecheck, and production build before merging changes.

## License

All rights reserved. Portfolio content, photography, and generated visual assets are personal materials unless otherwise credited. Do not reuse them without permission.
# icrmahin-portfolio

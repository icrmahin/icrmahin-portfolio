# icrmahin Portfolio

A personal portfolio for **A. Mahin** — an independent product builder working across product thinking, interface design, and software engineering.

The visual system combines ruled notebook paper, compact utility navigation, expressive display type, handwritten notes, taped photography, and restrained pastel accents. It is an editorial portfolio, not a developer-terminal gimmick or a game.

## Stack

| Concern | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19 + TypeScript 5 |
| Styling | Tailwind CSS 4 + custom CSS |
| Typography | Manrope + Instrument Serif |
| Motion | Native browser scrolling + small CSS interaction states |
| Images | Next.js Image + local WebP / PNG assets |
| Package manager | pnpm 12 |
| Hosting | Vercel |

The portfolio uses native browser scrolling. There is no global smooth-scroll override, scroll-triggered reveal system, parallax layer, or animation sequence that hides essential content. The visual system is intentionally small: two type families, one compact spacing scale, a warm neutral palette, and a single accent.

## Requirements

- Node.js 22 or newer
- pnpm 12.22.0 (Corepack can activate the version declared in `package.json`)

## Getting started

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm smoke
```

Run the complete sequence:

```bash
pnpm check
```

The smoke test starts the production server and verifies the homepage, About page, published case study, unpublished project 404, crawler endpoints, and icon asset.

## Project structure

```text
src/
├── app/
│   ├── about/                 # About page
│   ├── work/[slug]/           # Published case studies
│   ├── globals.css            # Design system and responsive rules
│   ├── layout.tsx             # Fonts, metadata, structured data, providers
│   ├── page.tsx               # Homepage composition
│   ├── robots.ts              # Crawler rules
│   └── sitemap.ts             # Published routes only
├── components/
│   ├── project-card.tsx       # Published and in-progress project cards
│   ├── project-visual.tsx     # Editorial project artwork
│   ├── site-footer.tsx
│   └── site-header.tsx        # Responsive keyboard-operable navigation
├── content/
│   └── projects.ts            # Typed project and case-study content
└── lib/
    └── site.ts                # Identity, canonical URL and nav data

public/
├── icons/icon.svg
└── images/
    ├── autumn-cover.webp
    ├── hibbullah-logo.png
    ├── mahin-portrait.webp
    └── pixel-portrait.webp

scripts/
└── smoke-test.mjs
```

## Content editing

### Site identity

Update `src/lib/site.ts` to change the role, email, location label, and social URLs.

### Projects

Edit `src/content/projects.ts`. The `slug` controls the `/work/[slug]` URL.

- Set `published: true` only when the case study is ready for public viewing.
- Unpublished projects remain visible as in-progress cards, but do not receive a case-study route or sitemap entry.
- Do not add unverified client outcomes, revenue, user counts, testimonials, or performance metrics.

### Project imagery

- The profile portrait and pixel-art illustrations are previously generated portfolio assets.
- The Hibbullah mark comes from the Hibbullah application repository.
- Project cover compositions are editorial artwork, not screenshots of shipped software.

Use actual product captures when they are approved and available. Never present illustrative artwork as a live product screen.

## Layout, motion, and accessibility

The detailed design rules are documented in [docs/UI-SYSTEM.md](./docs/UI-SYSTEM.md).

- Layout is mobile-first. Images and content remain in normal document flow; columns collapse to one column when the viewport narrows.
- The page is designed to reflow at 320 CSS pixels without horizontal scrolling.
- Body text stays readable and long-form content is kept to a comfortable measure.
- Native browser scrolling is used. Essential content is never hidden behind an animation.
- Focus styles, semantic landmarks, descriptive image text, and keyboard-operable navigation are required.
- Reduced-motion preferences are respected.
- The case study distinguishes system diagrams from actual product screenshots. Illustrative artwork is never labelled as shipped UI.

## Environment and canonical URLs

The site resolves its canonical base URL in this order:

1. `NEXT_PUBLIC_SITE_URL` (recommended for a custom domain)
2. `VERCEL_PROJECT_PRODUCTION_URL` (Vercel's production domain)
3. `VERCEL_URL` (deployment URL, primarily for previews)
4. `http://localhost:3000` (local development)

For a custom domain, set this Vercel environment variable for Production and Preview:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

No database or private environment variables are required.

## Deployment

1. Push the repository to GitHub.
2. Import it into Vercel with the repository root as the project root.
3. Confirm the framework preset is Next.js and the build command is `pnpm build`.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain if using a custom domain.
5. Deploy.
6. Verify `/`, `/about`, `/work/hibbullah`, `/robots.txt`, and `/sitemap.xml`.

The GitHub Actions workflow runs install, lint, type-check, production build, and route smoke tests for every push to `main` and every pull request.

## Engineering conventions

- Keep Server Components as the default.
- Use Client Components only for browser APIs and interactions.
- Keep content separate from presentation.
- Keep images local, optimized, and accurately labeled.
- Respect reduced-motion preferences.
- Keep package versions exact and the pnpm lockfile committed.
- Run `pnpm check` before merging.

## License

All rights reserved. Portfolio content, photography, and generated visual assets are personal materials unless otherwise credited. Do not reuse them without permission.

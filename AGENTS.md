# Repository guide for coding agents

## Project intent

Build and maintain the personal portfolio for A. Mahin. The site should feel editorial, human, and product-minded. It is not a developer-terminal gimmick, game, or generic agency template.

## Architecture

- Next.js App Router with TypeScript.
- Server Components by default.
- Project content lives in `src/content/projects.ts`.
- Site identity lives in `src/lib/site.ts`.
- Shared visual components live in `src/components/`.
- Global visual system and responsive rules live in `src/app/globals.css`.

## Non-negotiable quality rules

1. Never invent client outcomes, revenue, user counts, testimonials, or performance metrics.
2. Mark unfinished work as in progress. Do not imply that an unreleased product is shipped.
3. Use semantic HTML, descriptive alt text, keyboard-operable controls, and visible focus styles.
4. Respect `prefers-reduced-motion`. Motion is enhancement, never a requirement for understanding content.
5. Avoid `any`, unexplained type assertions, duplicated project content, and broad client components.
6. Keep browser APIs inside Client Components or effects.
7. Keep images local, optimized, and appropriately sized.
8. Do not add a backend, authentication, database, or CMS without a demonstrated content need.

## Before finishing a change

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Report any check that could not be run. Never claim a build passed if it was not executed successfully.

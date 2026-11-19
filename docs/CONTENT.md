# Content guide

## Voice

Write in first person. Keep statements specific, calm, and verifiable. The site should communicate product judgment and engineering capability without presenting an inflated résumé.

## Project publishing checklist

Before marking a project as public:

- Confirm that the work can be shown publicly and that no client information is exposed.
- Describe the problem and the actual role performed.
- Distinguish shipped capabilities from work still in development.
- Remove metrics that cannot be verified.
- Add screenshots or artifacts only when they represent the real product.
- Keep the technology list limited to tools used on that project.

## Adding a project

1. Add a typed entry to `src/content/projects.ts`.
2. Give it a unique URL-safe `slug` and display `number`.
3. Add a matching `cover` visual variant to `ProjectVisual` if needed.
4. Add the entry to the `projects` array.
5. Review the homepage card and generated case-study route.
6. Run `npm run lint`, `npm run typecheck`, and `npm run build`.

## Owner details to review before launch

- Confirm the final public title/role.
- Confirm the location wording.
- Confirm that the email address should be public.
- Add the production domain to `NEXT_PUBLIC_SITE_URL`.
- Review the DigitalPathways entry before publishing its detailed case study.

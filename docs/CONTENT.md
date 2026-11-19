# Content guide

## Voice

Write in first person. Keep statements specific, calm, and verifiable. The site should communicate product judgment and engineering capability without presenting an inflated résumé.

## Project publishing checklist

Before marking a project as public:

- Confirm the work can be shown publicly and client information is not exposed.
- Describe the problem and the actual role performed.
- Distinguish shipped capabilities from work still in development.
- Remove metrics that cannot be verified.
- Add screenshots or artifacts only when they represent the real product.
- Keep the technology list limited to tools used on that project.
- Set `published: true` only when the case study is ready.

Unpublished work can remain in the project grid as an in-progress entry. It should not have a public detail route or sitemap entry.

## Adding a project

1. Add a typed entry to `src/content/projects.ts`.
2. Give it a unique URL-safe `slug` and display `number`.
3. Add a matching `cover` visual variant to `ProjectVisual` if needed.
4. Add the entry to the `projects` array.
5. Set `published` based on whether the case study is complete.
6. Review the homepage card and generated case-study route.
7. Run `pnpm check`.

## Owner details to review before launch

- Confirm the final public title/role.
- Confirm location wording.
- Confirm that the email address should be public.
- Set `NEXT_PUBLIC_SITE_URL` when a custom production domain is configured.
- Review the DigitalPathways entry before publishing its detailed case study.

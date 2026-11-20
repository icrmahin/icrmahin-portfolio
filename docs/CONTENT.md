# Content guide

## Voice

Write in first person. Be specific, calm, and verifiable. The site should show product judgement through the choices made, not by describing itself as exceptional. Avoid labels, numbers, badges, and metadata that do not help a reader understand the work.

## Case-study standard

A public case study must help a potential client or collaborator understand the work without needing the author in the room.

Cover the following, in this order where relevant:

1. **Context and brief** — what the product is, who it serves, what was requested, and the environment in which it operates.
2. **Constraints** — commercial, operational, technical, regulatory, platform, or time constraints that materially shaped the solution.
3. **Users and workflows** — the distinct people using the product and the jobs they need to complete.
4. **Product approach** — the end-to-end journey, information structure, important states, and how the experience works.
5. **Engineering structure** — the systems, data boundaries, integrations, and responsibility split between client and server.
6. **Important decisions** — the problem behind a decision, the alternative or risk it addressed, and what was implemented.
7. **Delivered scope** — capabilities that exist in the product, distinguished from planned work.
8. **Current state and evidence** — what can be verified today. Never invent metrics, outcomes, customers, testimonials, or screenshots.

A case study is not complete because it contains a title, a stack list, a short paragraph, and a few generic bullets. If there is not enough verified material, keep the project marked in progress and do not publish a detailed route.

## Visual evidence

- Prefer real screenshots from the actual product, after confirming that they can be shared publicly and contain no customer data, credentials, or internal information.
- Do not draw illustrative cards and present them as live product screens.
- If actual screenshots are not available, use a clearly labelled architecture diagram, workflow map, or product explanation instead.
- Diagrams must explain a real system or journey. Do not use decorative node diagrams, meaningless numbers, or invented analytics.

## Project publishing checklist

Before marking a project as public:

- Confirm the work can be shown publicly and client information is not exposed.
- Describe the problem and the actual role performed.
- Distinguish shipped capabilities from work still in development.
- Remove metrics that cannot be verified.
- Add screenshots or artifacts only when they represent the real product.
- Keep the technology list limited to tools used on that project.
- Set `published: true` only when the case study is ready.
- Verify the complete case-study route, mobile layout, metadata, and sitemap.

Unpublished work can remain in the project grid as an in-progress entry. It should not have a public detail route or sitemap entry.

## Adding a project

1. Add a typed entry to `src/content/projects.ts`.
2. Give it a unique URL-safe `slug`.
3. Add a matching visual variant to `ProjectVisual` if needed.
4. Add the entry to the `projects` array.
5. Set `published` based on whether the case study is complete.
6. Review the homepage card and generated case-study route.
7. Run `pnpm check`.
8. Check the route at 320px, 375px, 768px, and desktop widths.

## Owner details to review before launch

- Confirm the final public title/role.
- Confirm location wording.
- Confirm that the email address should be public.
- Set `NEXT_PUBLIC_SITE_URL` when a custom production domain is configured.
- Review the DigitalPathways entry before publishing its detailed case study.

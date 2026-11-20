# UI system and responsive standards

## Design intent

The site is an editorial product portfolio. It should feel authored, calm, and useful: a clear point of view, carefully chosen typography, a small number of surfaces, and enough visual character to make the work memorable.

It is not a scrapbook, a game, a terminal mock-up, or a dashboard template. Visual personality comes from composition, type, image selection, and precise spacing — not from piles of labels, counters, badges, ornaments, or animation.

## Visual language

- Warm paper background, readable ink, muted secondary text, and one coral accent.
- A small amount of soft colour may distinguish a product illustration or a section surface. It must not become an arbitrary rainbow of cards.
- Use two type families: a legible sans for information and a serif for a small number of expressive moments.
- Avoid tiny uppercase metadata. Use labels only when they clarify content or navigation.
- Avoid decorative sequence numbers, pseudo-statistics, fake status indicators, and copy that narrates obvious interface structure.
- Use real product material only when it is approved and available. An architectural diagram must be labelled as a diagram; illustrative artwork must not be presented as a shipped product screenshot.

## Layout and spacing

- Start with a single-column reading experience, then add columns when the available width supports them.
- Main content is capped at approximately 1,100px. Long-form reading is kept to a comfortable measure rather than spanning the whole desktop screen.
- The shared page gutter is responsive: 16px on narrow phones, 18px on common phones, and 24px or more on desktop.
- Use a consistent spacing rhythm. Closely related content stays together; new sections receive deliberate separation. Avoid empty full-screen gaps.
- Grid children use `minmax(0, 1fr)`, and content columns have `min-width: 0`. Long text and technology names must wrap rather than force horizontal scrolling.
- Images remain in normal document flow. Give them intrinsic dimensions or an explicit aspect ratio, use `object-fit: cover` only when cropping is intended, and provide accurate `sizes` values.
- Do not position meaningful images, captions, titles, or content cards absolutely over one another. Absolute positioning is reserved for purely decorative details that can be removed without losing information.

## Responsive behaviour

- The page must work from 320 CSS pixels upward. Do not target named devices; introduce breakpoints when the layout itself stops working.
- The desktop two-column hero, project grid, About layout, and case-study intro all become one column on narrow screens.
- The mobile navigation has a 44px minimum touch target and does not compress or overlap the wordmark.
- Case-study metadata stacks into readable rows. Architecture diagrams become vertically stacked nodes. The project journey changes from a horizontal sequence to a vertical reading order.
- No horizontal page scrolling at 320px. Text must not be clipped, truncated, or hidden to preserve a decorative composition.
- Test at 320px, 375px, 390px, 768px, 1024px, and a wide desktop viewport. Also test browser zoom and increased text size where possible.

## Typography and content

- Body copy starts at 15–16px on small screens and uses a comfortable line height.
- Headlines scale with `clamp()`, but must not create overflow or push essential content out of view.
- Keep headings descriptive. A section title should tell a client what they are about to read, not display a decorative label.
- Keep the number of type styles small. Emphasis should come from size, weight, or a restrained serif accent, not a different typeface for every role.
- A case study is a narrative, not a stack of cards. Explain the context, who the product serves, constraints, user journey, important decisions, technical structure, delivered scope, and current state.

## Motion and interaction

- Native browser scrolling is the default. Do not override it with global smooth-scroll interpolation.
- No entrance choreography, scroll-triggered fade of essential content, parallax, or animation applied to every card.
- Small hover and focus transitions may be used when they help communicate affordance. Keep them short and subtle.
- Reduced-motion preferences are respected. The full content and hierarchy must be available without animation or JavaScript.
- Focus indicators remain visible. All actionable controls have a clear label and a practical touch target.

## Accessibility and verification

- Follow WCAG 2.2 AA reflow: at a 320 CSS pixel viewport, content must remain available without two-dimensional scrolling except for genuinely two-dimensional content.
- Keep text contrast strong and do not use colour alone to convey a state.
- Use semantic headings, landmarks, alt text, and keyboard-operable navigation.
- Automated route tests verify the primary content and case-study sections. They do not replace visual checks at real viewport sizes.
- Before release, check the layout at the listed widths, verify there is no horizontal overflow, inspect image cropping, and confirm that the mobile navigation and case-study diagrams remain readable.

## Reference material

These references informed the rules above; they are not templates to copy.

- [MDN — Responsive web design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design): mobile-first thinking, flexible grids, relative sizing, and breakpoints based on content rather than device names.
- [W3C — WCAG 2.2, Success Criterion 1.4.10 Reflow](https://www.w3.org/TR/WCAG22/#reflow): content must remain usable at a 320 CSS pixel viewport without two-dimensional scrolling.
- [Apple Human Interface Guidelines — Typography](https://developer.apple.com/design/human-interface-guidelines/typography): legibility, hierarchy, restraint in the number of typefaces, and adapting layouts when text grows.
- [GOV.UK Design System — Layout](https://design-system.service.gov.uk/styles/layout/) and [Spacing](https://design-system.service.gov.uk/styles/spacing/): content width, readable line length, and a deliberate spacing scale.
- [web.dev — Optimize Cumulative Layout Shift](https://web.dev/articles/optimize-cls): stable image dimensions and predictable layout.
- [web.dev — Responsive images](https://web.dev/learn/images/responsive-images): appropriately sized image sources for the viewport.
- [Awwwards — The Lookback](https://www.awwwards.com/sites/the-lookback): an editorial portfolio reference for storytelling and art direction, not a layout to reproduce.
- [Hibbullah repository — Design system](https://github.com/icrmahin/hibbullah/blob/main/docs/DESIGN-SYSTEM.md): the user's own compact UI contract for typography, spacing, surfaces, accessibility, and restrained motion.


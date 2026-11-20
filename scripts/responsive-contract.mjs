import { readFile } from "node:fs/promises";

const [css, layout, header, packageJson] = await Promise.all([
  readFile("src/app/globals.css", "utf8"),
  readFile("src/app/layout.tsx", "utf8"),
  readFile("src/components/site-header.tsx", "utf8"),
  readFile("package.json", "utf8"),
]);

const manifest = JSON.parse(packageJson);
const mobile = css.slice(css.indexOf("@media (max-width: 760px)"));
const compact = css.slice(css.indexOf("@media (max-width: 480px)"));

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
  process.stdout.write("✓ " + message + "\n");
}

assert(css.includes("min-width: 320px"), "320px minimum layout width is supported");
assert(css.includes("@media (max-width: 760px)"), "tablet/mobile layout breakpoint exists");
assert(css.includes("@media (max-width: 480px)"), "narrow-phone layout breakpoint exists");
assert(
  /\.hero\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/s.test(mobile),
  "hero collapses to a single column on mobile",
);
assert(
  /\.case-intro\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/s.test(mobile),
  "case-study intro collapses to a single column on mobile",
);
assert(
  /\.case-facts\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/s.test(mobile),
  "case-study facts become stacked rows on mobile",
);
assert(
  /\.case-journey\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/s.test(mobile),
  "journey becomes a vertical reading sequence on mobile",
);
assert(
  /\.case-surface-grid[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\)/.test(compact),
  "case-study surfaces become one column on narrow phones",
);
assert(
  !/position\s*:\s*absolute/i.test(css),
  "content layout does not depend on absolute positioning",
);
assert(
  !/LenisProvider|ScrollEffects|gsap|lenis|motion\/react/.test(layout + header),
  "initial app shell has no scroll-animation runtime",
);
assert(
  !manifest.dependencies?.gsap && !manifest.dependencies?.lenis && !manifest.dependencies?.motion,
  "unused animation runtimes are not installed as direct dependencies",
);
assert(
  css.includes("@media (prefers-reduced-motion: reduce)"),
  "reduced-motion preference is respected",
);

process.stdout.write("\nResponsive source contract passed.\n");

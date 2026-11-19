import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <nav aria-label="Social links" className="footer-socials">
          <a href={site.github} rel="noreferrer" target="_blank">GitHub ↗</a>
          <a href={site.x} rel="noreferrer" target="_blank">X ↗</a>
          <a href={`mailto:${site.email}`}>Email ↗</a>
        </nav>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

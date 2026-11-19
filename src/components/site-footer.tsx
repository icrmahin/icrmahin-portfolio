import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <LinkMark />
        <span className="footer-note">MADE WITH INTENT. UPDATED WHEN THERE IS SOMETHING TO SAY.</span>
        <nav aria-label="Social links" className="footer-socials">
          <a href={site.github} rel="noreferrer" target="_blank">GitHub ↗</a>
          <a href={site.x} rel="noreferrer" target="_blank">X ↗</a>
          <a href={"mailto:" + site.email}>Email ↗</a>
        </nav>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function LinkMark() {
  return (
    <a aria-label="Back to home" className="footer-wordmark" href="/">
      icrmahin<span>.</span>
    </a>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link aria-label="Back to home" className="footer-wordmark" href="/">
          icrmahin<span>.</span>
        </Link>
        <nav aria-label="Social links" className="footer-socials">
          <a href={site.github} rel="noreferrer" target="_blank">GitHub ↗</a>
          <a href={site.x} rel="noreferrer" target="_blank">X ↗</a>
          <a href={"mailto:" + site.email}>Email ↗</a>
        </nav>
        <Link className="back-to-top" href="/#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}

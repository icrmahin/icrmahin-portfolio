"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="wordmark" href="/" aria-label="icrmahin home">
          icrmahin<span>.</span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => {
            const isHome = pathname === "/" && item.label === "Home";

            return (
              <Link
                aria-current={isHome ? "page" : undefined}
                className="nav-tab"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-right">
          <span aria-label="Available for selected projects" className="header-signals">
            <i />
            <i />
            <i />
          </span>
          <a className="header-contact" href={"mailto:" + site.email}>
            Contact <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="mobile-nav"
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
          >
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
            <a href={"mailto:" + site.email} onClick={() => setMenuOpen(false)}>
              Contact
              <span aria-hidden="true">↗</span>
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

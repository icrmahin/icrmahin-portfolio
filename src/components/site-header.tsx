"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  const [openedOnPath, setOpenedOnPath] = useState<string | null>(null);
  const pathname = usePathname();
  const menuOpen = openedOnPath === pathname;
  const reduceMotion = useReducedMotion();
  const mobileNavRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!menuOpen) return;

    mobileNavRef.current?.querySelector<HTMLElement>("a")?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenedOnPath(null);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  function toggleMenu() {
    setOpenedOnPath(menuOpen ? null : pathname);
  }

  function isCurrent(label: string): boolean {
    if (label === "Home") return pathname === "/";
    if (label === "About") return pathname === "/about";
    if (label === "Work") return pathname.startsWith("/work");
    return false;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="scroll-progress"
        style={{ scaleX: scrollProgress }}
      />

      <header className="site-header">
        <div className="header-inner shell">
          <Link className="wordmark" href="/" aria-label="icrmahin home">
            icrmahin<span>.</span>
          </Link>

          <nav aria-label="Main navigation" className="desktop-nav">
            {navigation.map((item) => (
              <Link
                aria-current={isCurrent(item.label) ? "page" : undefined}
                className="nav-tab"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-right">
            <span className="header-status">
              <i aria-hidden="true" />
              Independent practice
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
            onClick={toggleMenu}
            ref={menuButtonRef}
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
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              id="mobile-navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              ref={mobileNavRef}
              transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
            >
              {navigation.map((item) => (
                <Link
                  aria-current={isCurrent(item.label) ? "page" : undefined}
                  href={item.href}
                  key={item.label}
                  onClick={() => setOpenedOnPath(null)}
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
              <a href={"mailto:" + site.email} onClick={() => setOpenedOnPath(null)}>
                Contact
                <span aria-hidden="true">↗</span>
              </a>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}

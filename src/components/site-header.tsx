"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  const [openedOnPath, setOpenedOnPath] = useState<string | null>(null);
  const pathname = usePathname();
  const menuOpen = openedOnPath === pathname;
  const mobileNavRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  function isCurrent(label: string): boolean {
    if (label === "Home") return pathname === "/";
    if (label === "About") return pathname === "/about";
    if (label === "Work") return pathname.startsWith("/work");
    return false;
  }

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="wordmark" href="/" aria-label="icrmahin home">
          icrmahin<span>.</span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => (
            <Link
              aria-current={isCurrent(item.label) ? "page" : undefined}
              className="nav-link"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-contact" href={"mailto:" + site.email}>
          Contact <span aria-hidden="true">↗</span>
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setOpenedOnPath(menuOpen ? null : pathname)}
          ref={menuButtonRef}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="mobile-nav"
          id="mobile-navigation"
          ref={mobileNavRef}
        >
          {navigation.map((item) => (
            <Link
              aria-current={isCurrent(item.label) ? "page" : undefined}
              href={item.href}
              key={item.label}
              onClick={() => setOpenedOnPath(null)}
            >
              {item.label}
            </Link>
          ))}
          <a href={"mailto:" + site.email} onClick={() => setOpenedOnPath(null)}>
            Contact
          </a>
        </nav>
      ) : null}
    </header>
  );
}

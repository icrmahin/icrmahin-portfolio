"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const motionMedia = window.matchMedia(
      "(min-width: 681px) and (prefers-reduced-motion: no-preference)",
    );

    let cancelled = false;
    let timer: number | null = null;
    let revertMedia: (() => void) | null = null;

    const initialize = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled || !motionMedia.matches) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();

      media.add(
        "(min-width: 681px) and (prefers-reduced-motion: no-preference)",
        () => {
          const heroTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          const introMeta = document.querySelector<HTMLElement>('[data-hero-intro="meta"]');
          const introKicker = document.querySelector<HTMLElement>('[data-hero-intro="kicker"]');
          const introTitle = document.querySelector<HTMLElement>('[data-hero-intro="title"]');
          const introTagline = document.querySelector<HTMLElement>('[data-hero-intro="tagline"]');
          const introSummary = document.querySelector<HTMLElement>('[data-hero-intro="summary"]');
          const introActions = document.querySelector<HTMLElement>('[data-hero-intro="actions"]');
          const introPortrait = document.querySelector<HTMLElement>('[data-hero-intro="portrait"]');
          const introNote = document.querySelector<HTMLElement>('[data-hero-intro="note"]');

          if (introTitle) {
            heroTimeline
              .fromTo(introMeta, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, immediateRender: false }, 0)
              .fromTo(introKicker, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.5, immediateRender: false }, 0.08)
              .fromTo(
                introTitle,
                { autoAlpha: 0, y: 26, rotate: -2, clipPath: "inset(0 0 100% 0)" },
                { autoAlpha: 1, y: 0, rotate: -0.8, clipPath: "inset(0 0 0% 0)", duration: 0.8, immediateRender: false },
                0.14,
              )
              .fromTo(introTagline, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.55, immediateRender: false }, "-=0.34")
              .fromTo(introSummary, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5, immediateRender: false }, "-=0.32")
              .fromTo(introActions, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, immediateRender: false }, "-=0.28")
              .fromTo(
                introPortrait,
                { autoAlpha: 0, y: 28, rotate: 9, scale: 0.96 },
                { autoAlpha: 1, y: 0, rotate: 4, scale: 1, duration: 0.8, ease: "back.out(1.3)", immediateRender: false },
                "-=0.62",
              )
              .fromTo(introNote, { autoAlpha: 0, x: -12, rotate: -8 }, { autoAlpha: 1, x: 0, rotate: -4, duration: 0.5, immediateRender: false }, "-=0.52");
          }

          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.fromTo(
              element,
              { autoAlpha: 0, y: 22 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.72,
                ease: "power3.out",
                immediateRender: false,
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });

          gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card) => {
            const visual = card.querySelector<HTMLElement>(".project-visual");
            const copy = card.querySelector<HTMLElement>(".project-card-copy");
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 84%",
                once: true,
              },
            });

            if (visual) {
              timeline.fromTo(
                visual,
                { autoAlpha: 0, y: 24, scale: 0.985, clipPath: "inset(0 0 10% 0)" },
                { autoAlpha: 1, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 0.85, ease: "power3.out", immediateRender: false },
              );
            }

            if (copy) {
              timeline.fromTo(
                copy,
                { autoAlpha: 0, y: 18 },
                { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out", immediateRender: false },
                visual ? "-=0.38" : 0,
              );
            }
          });

          const parallaxImage = document.querySelector<HTMLElement>("[data-parallax-image]");
          const playground = document.querySelector<HTMLElement>(".playground-board-editorial");

          if (parallaxImage && playground && window.matchMedia("(min-width: 900px)").matches) {
            gsap.to(parallaxImage, {
              yPercent: -7,
              ease: "none",
              scrollTrigger: {
                trigger: playground,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }

          const refresh = () => ScrollTrigger.refresh();
          let active = true;
          window.addEventListener("load", refresh, { once: true });
          void document.fonts.ready.then(() => {
            if (active) refresh();
          });

          return () => {
            active = false;
            window.removeEventListener("load", refresh);
          };
        },
      );

      revertMedia = () => media.revert();
    };

    const schedule = () => {
      if (!motionMedia.matches || cancelled || revertMedia || timer !== null) return;

      // GSAP is not part of the initial render path; load it after the first paint.
      timer = window.setTimeout(() => {
        timer = null;
        void initialize();
      }, 350);
    };

    motionMedia.addEventListener("change", schedule);
    schedule();

    return () => {
      cancelled = true;
      motionMedia.removeEventListener("change", schedule);
      if (timer !== null) window.clearTimeout(timer);
      revertMedia?.();
    };
  }, [pathname]);

  return null;
}

"use client";

import { useEffect, type ReactNode } from "react";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
  on: (event: "scroll", callback: () => void) => void;
};

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 900px)");

    let lenis: LenisInstance | null = null;
    let removeTicker: (() => void) | null = null;
    let timer: number | null = null;
    let cancelled = false;

    const stop = () => {
      removeTicker?.();
      removeTicker = null;
      lenis?.destroy();
      lenis = null;
    };

    const start = async () => {
      if (cancelled || reducedMotion.matches || !desktop.matches || lenis) {
        return;
      }

      const [lenisModule, gsapModule, scrollTriggerModule] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled || reducedMotion.matches || !desktop.matches || lenis) {
        return;
      }

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const instance = new lenisModule.default({
        autoRaf: false,
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        syncTouch: false,
      });

      lenis = instance;
      instance.on("scroll", ScrollTrigger.update);

      const update = (time: number) => {
        instance.raf(time * 1000);
      };

      gsap.ticker.add(update);
      removeTicker = () => gsap.ticker.remove(update);
    };

    const schedule = () => {
      if (cancelled || reducedMotion.matches || !desktop.matches || lenis || timer !== null) {
        return;
      }

      // Let the first paint and primary interaction finish before loading scroll extras.
      timer = window.setTimeout(() => {
        timer = null;
        void start();
      }, 350);
    };

    const syncPreferences = () => {
      if (reducedMotion.matches || !desktop.matches) {
        stop();
        if (timer !== null) {
          window.clearTimeout(timer);
          timer = null;
        }
        return;
      }

      schedule();
    };

    reducedMotion.addEventListener("change", syncPreferences);
    desktop.addEventListener("change", syncPreferences);
    schedule();

    return () => {
      cancelled = true;
      reducedMotion.removeEventListener("change", syncPreferences);
      desktop.removeEventListener("change", syncPreferences);
      if (timer !== null) window.clearTimeout(timer);
      stop();
    };
  }, []);

  return children;
}

"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let lenis: Lenis | null = null;

    const update = (time: number) => {
      lenis?.raf(time * 1000);
    };

    const start = () => {
      if (lenis) return;

      lenis = new Lenis({
        autoRaf: false,
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        syncTouch: false,
      });

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(update);
    };

    const stop = () => {
      if (!lenis) return;

      gsap.ticker.remove(update);
      lenis.destroy();
      lenis = null;
    };

    if (!reducedMotion.matches) start();

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) {
        stop();
      } else {
        start();
      }
    };

    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", handleMotionPreference);
      stop();
    };
  }, []);

  return children;
}

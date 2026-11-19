"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.fromTo(
        "[data-hero-art]",
        { clipPath: "inset(8% 0 8% 0 round 2px)", scale: 1.045 },
        {
          clipPath: "inset(0% 0 0% 0 round 2px)",
          scale: 1,
          duration: 1.3,
          ease: "power3.inOut",
          delay: 0.25,
        },
      );
    });

    return () => media.revert();
  }, [pathname]);

  return null;
}

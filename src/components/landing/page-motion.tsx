"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function PageMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      anchors: { offset: -80, duration: 1.1 },
      duration: 1.05,
      smoothWheel: true,
    });
    const updateScrollTrigger = () => ScrollTrigger.update();
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const scope = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-enter]").forEach((element) => {
        gsap.from(element, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
    }, rootRef);

    return () => {
      scope.revert();
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return <main id="top" ref={rootRef}>{children}</main>;
}

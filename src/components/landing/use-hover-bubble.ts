"use client";

import { gsap } from "gsap";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useCallback, useEffect, useRef } from "react";

export function useHoverBubble() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const hideCursor = useCallback(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.killTweensOf(cursor);
    gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.18, overwrite: true });
  }, []);

  const moveCursor = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.to(cursor, {
      left: event.clientX,
      top: event.clientY,
      scale: 1,
      opacity: 1,
      duration: 0.24,
      ease: "power3.out",
      overwrite: true,
    });
  }, []);

  useEffect(() => {
    const hideOnVisibilityChange = () => {
      if (document.hidden) hideCursor();
    };
    const hideOnWindowExit = (event: PointerEvent) => {
      if (event.relatedTarget === null) hideCursor();
    };

    window.addEventListener("scroll", hideCursor, { capture: true, passive: true });
    window.addEventListener("blur", hideCursor);
    window.addEventListener("pointerout", hideOnWindowExit);
    document.addEventListener("visibilitychange", hideOnVisibilityChange);

    return () => {
      window.removeEventListener("scroll", hideCursor, true);
      window.removeEventListener("blur", hideCursor);
      window.removeEventListener("pointerout", hideOnWindowExit);
      document.removeEventListener("visibilitychange", hideOnVisibilityChange);

      if (cursorRef.current) {
        gsap.killTweensOf(cursorRef.current);
        gsap.set(cursorRef.current, { scale: 0, opacity: 0 });
      }
    };
  }, [hideCursor]);

  return { cursorRef, moveCursor, hideCursor };
}

"use client";

import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export function useCarousel(options: EmblaOptionsType) {
  const [viewportRef, api] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(options.startIndex ?? 0);

  useEffect(() => {
    if (!api) return;

    const updateSelection = () => setSelectedIndex(api.selectedScrollSnap());
    updateSelection();
    api.on("select", updateSelection);
    api.on("reInit", updateSelection);

    return () => {
      api.off("select", updateSelection);
      api.off("reInit", updateSelection);
    };
  }, [api]);

  const scrollPrevious = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return { viewportRef, selectedIndex, scrollPrevious, scrollNext };
}

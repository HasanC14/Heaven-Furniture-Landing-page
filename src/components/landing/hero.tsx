"use client";

import { useEffect, useState } from "react";

import { heroSlides, WHATSAPP_URL } from "./data";
import { useHoverBubble } from "./use-hover-bubble";

const cinematicSlides = [
  { image: heroSlides[0].image, alt: heroSlides[0].alt, label: "Living", title: ["Objects with", "quiet gravity."] },
  { image: heroSlides[1].image, alt: heroSlides[1].alt, label: "Gathering", title: ["A slower way", "to come together."] },
  { image: heroSlides[2].image, alt: heroSlides[2].alt, label: "Craft", title: ["Made by hand.", "Kept for years."] },
] as const;

function HeroVideo({ poster, label }: { poster: string; label: string }) {
  return (
    <div className="hero-video">
      <video autoPlay loop muted playsInline preload="none" poster={poster} aria-label={label}>
        Your browser does not support background video.
      </video>
    </div>
  );
}

export function Hero() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const { cursorRef, moveCursor, hideCursor } = useHoverBubble();

  useEffect(() => {
    window.localStorage.removeItem("heaven-hero-direction");
    const timer = window.setInterval(() => setSliderIndex((index) => (index + 1) % cinematicSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="denton-hero hero-mode-cinematic" aria-label="Heaven Furniture Mart">
      <div className="hero-cinematic">
        {cinematicSlides.map((slide, index) => (
          <article className={sliderIndex === index ? "hero-cinematic-slide active" : "hero-cinematic-slide"} aria-hidden={sliderIndex !== index} key={slide.image}>
            <HeroVideo poster={slide.image} label={slide.alt} />
            <div className="hero-cinematic-shade" />
            <div className="hero-cinematic-copy">
              <span className="outline-label">{slide.label}</span>
              <h1>{slide.title[0]}<br /><em>{slide.title[1]}</em></h1>
            </div>
          </article>
        ))}
        <a
          className="hero-link-hit"
          href={WHATSAPP_URL}
          aria-label="Explore Heaven Furniture Mart"
          onPointerMove={moveCursor}
          onPointerLeave={hideCursor}
          onPointerCancel={hideCursor}
        />
        <div className="hero-cursor" aria-hidden="true" ref={cursorRef}><span>Explore</span></div>
      </div>
    </section>
  );
}

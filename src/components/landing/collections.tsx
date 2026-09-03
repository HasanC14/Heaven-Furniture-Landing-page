"use client";

import Image from "next/image";

import { collections, WHATSAPP_URL } from "./data";
import { SlideCounter, SliderControl, ThemeButton } from "./ui";
import { useCarousel } from "./use-carousel";
import { useHoverBubble } from "./use-hover-bubble";

export function Collections() {
  const { cursorRef, moveCursor, hideCursor } = useHoverBubble();
  const { viewportRef, selectedIndex, scrollPrevious, scrollNext } = useCarousel({
    align: "center",
    containScroll: false,
    duration: 32,
    loop: true,
  });
  const selected = collections[selectedIndex] ?? collections[0];

  return (
    <section className="projects-section" id="projects">
      <div className="module-header" data-enter>
        <div><span className="section-kicker">The furniture edit</span><h2>Designed to <em>settle in.</em></h2></div>
        <ThemeButton href="#services" variant="split">Explore the edit</ThemeButton>
      </div>
      <div className="projects-slider-window" onPointerMove={moveCursor} onPointerLeave={hideCursor} onPointerCancel={hideCursor}>
        <div className="project-cursor" ref={cursorRef}><span>Explore</span></div>
        <div className="project-viewport" ref={viewportRef}>
          <div className="project-track">
            {collections.map((collection, index) => (
              <div className={selectedIndex === index ? "project-slide is-selected" : "project-slide"} key={collection.title}>
                <a className="project-card" href={WHATSAPP_URL} aria-label={`Explore ${collection.title}`}>
                  <div className="project-image"><Image src={collection.image} alt={collection.title} fill sizes="(max-width: 820px) 100vw, 50vw" /></div>
                  <span className="project-card-caption"><strong>{collection.title}</strong><small>{collection.service}</small></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="project-info" key={selected.title}>
        <span className="project-info-label"><i>In focus</i>{selected.service}</span>
        <p>{selected.description}</p>
        <span className="project-info-meta">{selected.location}<br />{selected.size}</span>
      </div>
      <div className="slider-controls light-controls">
        <div><SliderControl direction="left" onClick={scrollPrevious} label="Previous collection" /><SliderControl direction="right" onClick={scrollNext} label="Next collection" /></div>
        <SlideCounter current={selectedIndex + 1} total={collections.length} />
      </div>
    </section>
  );
}

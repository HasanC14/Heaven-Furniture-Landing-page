"use client";

import Image from "next/image";

import { inspirations } from "./data";
import { SlideCounter, SliderControl, ThemeButton } from "./ui";
import { useCarousel } from "./use-carousel";
import { useHoverBubble } from "./use-hover-bubble";

export function Inspiration() {
  const { cursorRef, moveCursor, hideCursor } = useHoverBubble();
  const { viewportRef, selectedIndex, scrollPrevious, scrollNext } = useCarousel({
    align: "center",
    containScroll: false,
    duration: 32,
    loop: true,
    startIndex: 2,
  });

  return (
    <section className="insights-section" id="insights">
      <div className="insights-header" data-enter>
        <div><span className="section-kicker">The journal</span><h2>Notes on <em>living well.</em></h2></div>
        <ThemeButton dark variant="split">Read the journal</ThemeButton>
      </div>
      <div className="insight-cursor" aria-hidden="true" ref={cursorRef}><span>Drag</span></div>
      <div className="insight-viewport" ref={viewportRef} onPointerMove={moveCursor} onPointerLeave={hideCursor} onPointerCancel={hideCursor}>
        <div className="insight-rail">
          {inspirations.map((item, index) => (
            <div className="insight-slide" key={item.title}>
              <article className={selectedIndex === index ? "insight-card expanded" : "insight-card"}>
                <div className="insight-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 90vw, 35vw" /></div>
                <div className="insight-copy"><span>{String(index + 1).padStart(2, "0")}</span><p>{item.tag}</p><h3>{item.title}</h3></div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="insight-controls slider-controls dark-controls">
        <div><SliderControl direction="left" onClick={scrollPrevious} label="Previous inspiration" /><SliderControl direction="right" onClick={scrollNext} label="Next inspiration" /></div>
        <SlideCounter current={selectedIndex + 1} total={inspirations.length} />
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

import { testimonials } from "./data";
import { SlideCounter, SliderControl } from "./ui";

export function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const change = (delta: number) => setSelectedIndex((index) => (index + delta + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials" id="about">
      <div className="testimonials-inner">
        <span className="section-kicker">Notes from home</span>
        <div className="testimonial-stage">
          {testimonials.map((item, index) => (
            <article className={selectedIndex === index ? "testimonial active" : "testimonial"} key={item.name} aria-hidden={selectedIndex !== index}>
              <div className="testimonial-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 968px) 100vw, 50vw" /></div>
              <div className="testimonial-copy"><span className="quote-icon">“</span><blockquote>{item.quote}</blockquote><p>{item.role}</p><h3>{item.name}</h3></div>
            </article>
          ))}
        </div>
        <div className="slider-controls dark-controls">
          <div><SliderControl direction="left" onClick={() => change(-1)} label="Previous testimonial" /><SliderControl direction="right" onClick={() => change(1)} label="Next testimonial" /></div>
          <SlideCounter current={selectedIndex + 1} total={testimonials.length} />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

import { faqs, WHATSAPP_URL } from "./data";
import { ThemeButton } from "./ui";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section faq-layout-night" id="faq">
      <div className="faq-inner">
        <div className="faq-header" data-enter>
          <div><span className="section-kicker">Good to know</span><h2>Before we begin.</h2><p>A few useful answers before starting a piece with our studio.</p></div>
          <ThemeButton href={WHATSAPP_URL} variant="split">Ask A Question</ThemeButton>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <article className={open ? "faq-item open" : "faq-item"} key={faq.title}>
                <button type="button" onClick={() => setOpenIndex(open ? null : index)} aria-expanded={open}><small>{String(index + 1).padStart(2, "0")}</small><h3>{faq.title}</h3><span /></button>
                <div className="faq-answer"><p>{faq.answer}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

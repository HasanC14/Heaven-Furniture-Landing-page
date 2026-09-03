import Image from "next/image";

import { WHATSAPP_URL } from "./data";
import { Arrow, Logo, ThemeButton } from "./ui";

export function ProjectCallout() {
  return <section className="simple-cta"><div><span>Have something particular in mind?</span><h2>Let&apos;s make room for it.</h2><ThemeButton>Talk to the studio</ThemeButton></div></section>;
}

export function ShowroomCallout() {
  return (
    <>
      <section className="project-mind" id="showroom">
        <div className="project-mind-copy"><span className="section-kicker">Visit our studio</span><h2>See the grain. Feel the finish.</h2><ThemeButton dark>Plan your visit</ThemeButton></div>
        <div className="project-mind-image"><Image src="/images/craft-detail.jpg" alt="A Heaven furniture maker finishing a carved timber detail" fill sizes="(max-width: 820px) 100vw, 50vw" /></div>
      </section>
      <section className="three-marquee" aria-label="Heaven values">
        <div>{Array.from({ length: 4 }).flatMap((_, group) => [<span className="light" key={`${group}-quality`}>Quietly expressive</span>, <i key={`${group}-dot-a`} />, <span className="accent" key={`${group}-craft`}>Made for you</span>, <i key={`${group}-dot-b`} />, <span key={`${group}-custom`}>Built to remain</span>, <i key={`${group}-dot-c`} />])}</div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <Logo />
          <div><a href="https://www.instagram.com/heaven_furniture_ltd" target="_blank" rel="noreferrer">IG</a><a href="https://www.facebook.com/HeavenFurnitureMart" target="_blank" rel="noreferrer">FB</a><a href="https://www.youtube.com/@HeavenFurnitureMart" target="_blank" rel="noreferrer">YT</a></div>
        </div>
        <div className="footer-columns">
          <div className="footer-links">
            <div><a href="#projects">Furniture</a><a href="#services">Made to measure</a><a href="#about">People</a><a href="#insights">Journal</a><a href="#showroom">Visit</a></div>
            <div><a href="tel:+8801960481983">+880 1960-481983</a><a href="mailto:heavenfurnituremart@gmail.com">Email Us</a><a href="https://maps.google.com/?q=Agrabad+Access+Road+Chattogram">Directions</a></div>
          </div>
          <div className="newsletter"><h3>Bring us an idea.</h3><p>A room, a reference, a feeling—we will help you shape what comes next.</p><a href={WHATSAPP_URL}>Start a conversation <Arrow /></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} HEAVEN FURNITURE MART</span><span>Agrabad Access Road · Chattogram</span><a href="#top">Scroll To Top</a></div>
      </div>
    </footer>
  );
}

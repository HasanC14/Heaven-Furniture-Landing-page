import Image from "next/image";

import { services, WHATSAPP_URL } from "./data";
import { ThemeButton } from "./ui";

export function Services() {
  return (
    <section className="services-section services-gallery" id="services">
      <div className="services-inner">
        <div className="services-header" data-enter>
          <div><span className="section-kicker">Made to measure</span><h2>Made around the way <em>you live.</em></h2><p>We make furniture for every part of the home, with a complete bespoke service that keeps you involved at every stage.</p></div>
          <ThemeButton>Begin a piece</ThemeButton>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <a className="service-card" href={WHATSAPP_URL} key={service.title}>
              <div className="service-card-media">
                <Image src={service.image} alt={service.title} fill loading="eager" sizes="(max-width: 820px) 100vw, 40vw" />
              </div>
              <div className="service-card-copy">
                <div className="service-card-meta"><small>{String(index + 1).padStart(2, "0")}</small><span>Made to measure</span></div>
                <div className="service-card-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

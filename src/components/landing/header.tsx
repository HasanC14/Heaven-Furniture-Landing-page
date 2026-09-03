"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { navigation, WHATSAPP_URL } from "./data";
import { Arrow, Logo } from "./ui";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [compact, setCompact] = useState(false);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateHeader = () => {
      const hero = document.querySelector<HTMLElement>(".denton-hero");
      setCompact(window.innerWidth <= 950 && window.scrollY > lastScrollY && window.scrollY > 20);
      setDocked(window.innerWidth > 950 && (hero ? hero.getBoundingClientRect().bottom <= 0 : window.scrollY >= window.innerHeight));
      lastScrollY = window.scrollY;
    };
    const onResize = () => {
      if (window.innerWidth > 950) {
        setMenuOpen(false);
        setMobileSubmenu(null);
        setCompact(false);
      }
      updateHeader();
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const activeMobileItem = navigation.find((item) => item.label === mobileSubmenu);
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <>
      <header className={["main-nav", compact ? "compact" : "", docked ? "docked" : ""].filter(Boolean).join(" ")}>
        <div className="nav-shell">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <div className={item.dropdown ? "nav-item has-submenu" : "nav-item"} key={item.label}>
                <a className="nav-primary" href={item.href}>
                  <span><i>{item.label}</i><i>{item.label}</i></span>
                  {item.dropdown ? <b aria-hidden="true" /> : null}
                </a>
                {item.dropdown === "mega" ? (
                  <div className="nav-dropdown nav-dropdown-mega">
                    <div className="nav-mega-inner">
                      <div className="nav-mega-intro">
                        <span>01 / Collection directory</span>
                        <h2>Furniture shaped around the way you live.</h2>
                        <a href={item.href}>Explore all furniture <Arrow /></a>
                      </div>
                      <div className="nav-mega-groups">
                        {item.groups?.map((group) => (
                          <div className="nav-link-group" key={group.heading}>
                            <div><h3>{group.heading}</h3><a href={group.href}>All</a></div>
                            <ul>{group.links.map((link) => <li key={link.label}><a href={link.href}>{link.label}<span>↗</span></a></li>)}</ul>
                          </div>
                        ))}
                      </div>
                      <div className="nav-feature-cards">
                        {item.cards?.map((card, cardIndex) => (
                          <a href={card.href} className="nav-feature-card" key={card.title}>
                            <div><Image src={card.image} alt="" fill sizes="220px" /></div>
                            <span>{String(cardIndex + 1).padStart(2, "0")}</span>
                            <h3>{card.title}</h3>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
                {item.dropdown === "normal" ? (
                  <div className="nav-dropdown nav-dropdown-fixed">
                    <div>
                      <span className="nav-dropdown-label">Explore / {item.label}</span>
                      <div className="nav-dropdown-links">
                        {item.links?.map((link, linkIndex) => (
                          <a href={link.href} key={link.label}>
                            <small>{String(linkIndex + 1).padStart(2, "0")}</small>
                            <span>{link.label}</span>
                            <b>↗</b>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <a className="nav-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span>Begin a piece</span><b>↗</b></a>
          <button
            className={menuOpen ? "nav-toggle active" : "nav-toggle"}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open);
              setMobileSubmenu(null);
            }}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      <div className="nav-backdrop" aria-hidden="true" />

      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"} aria-hidden={!menuOpen}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-meta"><span>Navigation index</span><span>Chattogram / BD</span></div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => item.dropdown ? (
              <button type="button" key={item.label} onClick={() => setMobileSubmenu(item.label)}><small>{String(index + 1).padStart(2, "0")}</small><span>{item.label}</span><b>↗</b></button>
            ) : (
              <a href={item.href} key={item.label} onClick={closeMenu}><small>{String(index + 1).padStart(2, "0")}</small><span>{item.label}</span><b>↓</b></a>
            ))}
          </nav>
          <a className="mobile-contact" href={WHATSAPP_URL}><span>Begin a piece</span><b>↗</b></a>
        </div>
        <div className={mobileSubmenu ? "mobile-submenu active" : "mobile-submenu"}>
          <button className="mobile-back" type="button" onClick={() => setMobileSubmenu(null)}><span>← Back to index</span><b>Close</b></button>
          <div className="mobile-submenu-content">
            <span className="mobile-submenu-kicker">Selected directory</span>
            <h2>{activeMobileItem?.label}</h2>
            <nav aria-label={activeMobileItem ? `${activeMobileItem.label} navigation` : "Submenu"}>
              {activeMobileItem?.groups?.flatMap((group) => group.links).map((link, index) => <a href={link.href} key={link.label} onClick={closeMenu}><small>{String(index + 1).padStart(2, "0")}</small><span>{link.label}</span><b>↗</b></a>)}
              {activeMobileItem?.links?.map((link, index) => <a href={link.href} key={link.label} onClick={closeMenu}><small>{String(index + 1).padStart(2, "0")}</small><span>{link.label}</span><b>↗</b></a>)}
            </nav>
            {activeMobileItem ? <a className="mobile-view-all" href={activeMobileItem.href} onClick={closeMenu}><span>View all {activeMobileItem.label}</span><b>→</b></a> : null}
          </div>
        </div>
      </div>
    </>
  );
}

import type { ReactNode } from "react";

import { WHATSAPP_URL } from "./data";

export function Arrow({ left = false }: { left?: boolean }) {
  return (
    <svg className={left ? "arrow left" : "arrow"} viewBox="0 0 30 24" aria-hidden="true">
      <path d="M2 12h25M19 3l9 9-9 9" />
    </svg>
  );
}

export function Logo() {
  return <a href="#top" className="wordmark" aria-label="Heaven Furniture Mart home"><span>HEAVEN</span><small>Furniture studio</small></a>;
}

export function ThemeButton({
  children,
  href = WHATSAPP_URL,
  dark = false,
  variant = "denton",
}: {
  children: ReactNode;
  href?: string;
  dark?: boolean;
  variant?: "denton" | "split";
}) {
  const external = href.startsWith("http");
  const className = ["theme-button", dark ? "dark" : "", variant === "split" ? "split" : ""].filter(Boolean).join(" ");

  return (
    <a
      className={className}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <i />
    </a>
  );
}

export function SliderControl({
  direction,
  onClick,
  label,
}: {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  return (
    <button className="slider-control" type="button" onClick={onClick} aria-label={label}>
      <Arrow left={direction === "left"} />
    </button>
  );
}

export function SlideCounter({ current, total }: { current: number; total: number }) {
  const format = (value: number) => String(value).padStart(2, "0");

  return (
    <span className="slide-counter" role="status" aria-live="polite" aria-label={`Slide ${current} of ${total}`}>
      <strong aria-hidden="true">{format(current)}</strong>
      <i aria-hidden="true">/</i>
      <span aria-hidden="true">{format(total)}</span>
    </span>
  );
}

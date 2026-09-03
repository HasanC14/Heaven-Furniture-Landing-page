import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

const humanistFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-humanist",
});

export const metadata: Metadata = {
  title: "Heaven Furniture Mart | Furniture Made for a Life",
  description:
    "Quietly expressive furniture, designed around real homes and crafted in Chattogram.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={humanistFont.variable}>
      <body>{children}</body>
    </html>
  );
}

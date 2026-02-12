import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Para el amor de mi vida ❤️",
  description: "Kenzie, eres lo mejor que me ha pasado. He preparado esta sorpresa para ti.",
  openGraph: {
    title: "Para el amor de mi vida ❤️",
    description: "Kenzie, un pequeño detalle para recordarte cuánto te amo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased font-sans bg-cream text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}

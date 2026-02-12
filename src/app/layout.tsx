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
  title: "For Kenzie ❤️",
  description: "A special Valentine's surprise for my hermosa.",
  openGraph: {
    title: "For Kenzie ❤️",
    description: "A special Valentine's surprise for my hermosa.",
    type: "website",
  },
  twitter: {
    title: "For Kenzie ❤️",
    description: "A special Valentine's surprise for my hermosa.",
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

import type { Metadata } from "next";
import {
  Manrope,
  Playfair_Display,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import LenisProvider from "@/components/LenisProvider";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif-alt",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Luxe Jewelry - Timeless Elegance",
  description:
    "Discover our collection of handcrafted luxury jewelry. Timeless pieces that transcend trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable} font-sans antialiased`}
      >
        <LenisProvider>
          <ScrollAnimationProvider>{children}</ScrollAnimationProvider>
        </LenisProvider>
      </body>
    </html>
  );
}

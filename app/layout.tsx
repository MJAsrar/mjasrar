import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "mjasrar — building a software ecosystem",
  description:
    "A growing suite of utility and AI tools built by an indie founder. One identity, one interface, dozens of small, sharp products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body data-density="compact">
        <div className="bg-glow-overlay" aria-hidden="true" />
        <div className="bg-grid-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

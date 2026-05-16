import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const DESCRIPTION =
  "A growing suite of utility and AI tools built by an indie founder. One identity, one interface, dozens of small, sharp products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mjasrar.com"),
  title: "mjasrar — building a software ecosystem",
  description: DESCRIPTION,
  openGraph: {
    title: "mjasrar — building a software ecosystem",
    description: DESCRIPTION,
    url: "https://mjasrar.com",
    siteName: "mjasrar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mjasrar — building a software ecosystem",
    description: DESCRIPTION,
  },
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
        <Analytics />
      </body>
    </html>
  );
}

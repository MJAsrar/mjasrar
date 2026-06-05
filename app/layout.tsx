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
  "AI Engineer, Builder & Founder based in Islamabad. I build AI systems that ship — from multi-agent pipelines to products used by real people.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mjasrar.com"),
  title: "Junaid Asrar — AI Engineer · Builder · Founder",
  description: DESCRIPTION,
  openGraph: {
    title: "Junaid Asrar — AI Engineer · Builder · Founder",
    description: DESCRIPTION,
    url: "https://mjasrar.com",
    siteName: "Junaid Asrar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junaid Asrar — AI Engineer · Builder · Founder",
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

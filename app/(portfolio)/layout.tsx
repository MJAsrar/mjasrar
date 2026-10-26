import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./portfolio.css";

// Junaid Asrar's personal portfolio. It has its own root layout so it shares
// no code with the company site and can move to portfolio.mjasrar.site as-is;
// it uses the same type, colours and saved theme so the two feel like one brand.
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

// Applies a saved light/dark choice before first paint, so there is no flash.
const themeInit = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mjasrar.site"),
  title: "Junaid Asrar — Engineering intelligence.",
  description:
    "AI engineer, builder and university leader in Islamabad. Production AI, multilingual automation and agentic systems.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
  },
  openGraph: {
    title: "Junaid Asrar — Engineering intelligence.",
    description: "Production AI, thoughtful products, and the engineering to make them real.",
    url: "https://www.mjasrar.site/portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
  ],
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

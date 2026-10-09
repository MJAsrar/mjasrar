import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mjasrar.site"),
  title: "Junaid Asrar — Engineering intelligence.",
  description: "AI engineer, builder, and university leader in Islamabad. Production AI, multilingual automation, and agentic systems.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Junaid Asrar — Engineering intelligence.",
    description: "Production AI, thoughtful products, and the engineering to make them real.",
    url: "https://www.mjasrar.site",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}<Analytics /></body></html>
}

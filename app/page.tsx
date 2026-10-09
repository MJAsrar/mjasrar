import Script from "next/script"
import { portfolioMarkup } from "./portfolio-markup"

export default function Home() {
  return <>
    <div dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />
    <Script src="/portfolio.js" strategy="afterInteractive" />
  </>
}

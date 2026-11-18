import { track } from "@vercel/analytics";

// Google tag (GA4) for the company site. Its key events can be imported into
// Google Ads as conversions.
export const GA_ID = "G-P1JH1ETML9";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Records an event in Vercel Analytics and, when the Google tag has loaded, in GA4.
export function trackEvent(vercelName: string, gaName: string, params: Record<string, string>) {
  track(vercelName, params);
  window.gtag?.("event", gaName, params);
}

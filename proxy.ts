import { NextResponse, type NextRequest } from "next/server";

// Serves the portfolio at portfolio.mjasrar.site once that domain is pointed at
// this project: portfolio.mjasrar.site/anything renders /portfolio/anything.
// The matcher only fires for that host, so the company site never runs this.
// Locally, portfolio.localhost:3000 works the same way.
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname === "/portfolio" || url.pathname.startsWith("/portfolio/")) return;
  url.pathname = `/portfolio${url.pathname === "/" ? "" : url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    {
      // Skip Next.js assets and any file with an extension (CV, icons, images).
      source: "/((?!_next/|.*\\.[\\w]+$).*)",
      has: [{ type: "header", key: "host", value: "portfolio\\..+" }],
    },
  ],
};

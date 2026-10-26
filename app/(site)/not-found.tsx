import Link from "next/link";
import { ArrowUpRight } from "@/components/site/Icons";

export default function NotFound() {
  return (
    <header className="page-head nf">
      <div className="wrap">
        <p className="label">
          <b>404</b>Page not found
        </p>
        <h1>This page doesn’t exist.</h1>
        <p className="page-lead">The address may be mistyped, or the page has moved. Try one of these instead.</p>
        <div className="actions">
          <Link className="btn" href="/">
            Go to the home page <ArrowUpRight />
          </Link>
          <Link className="btn btn-ghost" href="/work">
            See our work
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}

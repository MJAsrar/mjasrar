import { notFound } from "next/navigation";

// The app has two root layouts (company site and portfolio), so there is no
// app-wide not-found. Unmatched URLs land here and render the site's 404.
export default function Missing() {
  notFound();
}

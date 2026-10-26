import { STACK } from "@/lib/site";

// A slow marquee of the tools we build with. The list is rendered twice so the
// loop is seamless; the copy is hidden from screen readers.
export default function StackRail() {
  return (
    <section className="rail" aria-label="Tools we build with">
      <p className="label rail-label">Built with</p>
      <div className="rail-window">
        <div className="rail-track">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 || undefined}>
              {STACK.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

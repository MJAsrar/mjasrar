"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Page-wide motion: Lenis smooth scrolling on the GSAP clock, heading reveals,
// fade-ins, count-ups and the pinned project gallery. Everything is skipped
// when the visitor prefers reduced motion; content is in the HTML regardless.
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduce ? null : new Lenis({ autoRaf: false, lerp: 0.1, anchors: { offset: -72 } });
    const tick = (time: number) => lenis?.raf(time * 1000);
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }
    // The project dialog pauses scrolling while it is open.
    const stop = () => lenis?.stop();
    const start = () => lenis?.start();
    window.addEventListener("lenis:stop", stop);
    window.addEventListener("lenis:start", start);

    const mm = gsap.matchMedia();
    mm.add({ motion: "(prefers-reduced-motion: no-preference)", wide: "(min-width: 900px)" }, (ctx) => {
      const { motion, wide } = ctx.conditions as { motion: boolean; wide: boolean };
      if (!motion) return;

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const onLoad = el.dataset.reveal === "load";
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.09,
              delay: onLoad ? 0.35 : 0,
              scrollTrigger: onLoad ? undefined : { trigger: el, start: "top 86%", once: true },
            }),
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        const onLoad = el.closest(".hero") !== null;
        gsap.from(el, {
          y: 26,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          delay: onLoad ? 0.7 + Number(el.dataset.fade || 0) * 0.12 : 0,
          scrollTrigger: onLoad ? undefined : { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const to = Number(el.dataset.count);
        const fmt = (v: number) => `${el.dataset.prefix ?? ""}${Math.round(v)}${el.dataset.suffix ?? ""}`;
        const n = { v: 0 };
        gsap.to(n, {
          v: to,
          duration: 1.6,
          ease: "power2.out",
          onStart: () => (el.textContent = fmt(0)),
          onUpdate: () => (el.textContent = fmt(n.v)),
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      // The project gallery scrolls sideways while its section is pinned.
      const gallery = document.querySelector<HTMLElement>(".gallery");
      const track = gallery?.querySelector<HTMLElement>(".gallery-track");
      if (wide && gallery && track) {
        const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: gallery,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => {
      mm.revert();
      window.removeEventListener("lenis:stop", stop);
      window.removeEventListener("lenis:start", start);
      if (lenis) {
        gsap.ticker.remove(tick);
        lenis.destroy();
      }
    };
  }, []);

  return null;
}

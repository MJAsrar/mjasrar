import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowURIcon, GithubIcon, LinkedInIcon, XIcon, MailIcon, DownloadIcon } from "@/lib/icons";
import { PROJECTS, EXPERIENCE, SKILLS } from "@/lib/portfolio-data";

/* ─── Mini Terminal ─────────────────────────────────────────────── */
function MiniTerminal() {
  return (
    <div
      style={{
        background: "#0d0e10",
        border: "1px solid var(--line)",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 14px",
          borderBottom: "1px solid var(--line)",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 11,
          color: "var(--mute)",
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#3a3a3f", display: "inline-block" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#3a3a3f", display: "inline-block" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#3a3a3f", display: "inline-block" }} />
        <span style={{ marginLeft: 8 }}>~/junaid/ai-engineer — main</span>
      </div>

      {/* Terminal body */}
      <pre
        style={{
          margin: 0,
          padding: "14px 16px",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 12.5,
          lineHeight: 1.75,
          color: "var(--fg-2)",
          overflowX: "auto",
        }}
      >
        <span style={{ color: "var(--accent)" }}>$</span>
        {" python deploy.py --project cowrite\n"}
        <span style={{ color: "var(--mute)" }}>{"→ indexing 100+ documents .......... ok\n"}</span>
        <span style={{ color: "var(--mute)" }}>{"→ building agent pipeline .......... ok\n"}</span>
        <span style={{ color: "var(--mute)" }}>{"→ deploying to Vercel .............. ok\n"}</span>
        <span style={{ color: "var(--accent)" }}>✓</span>
        {" CoWriteIA live · A+ FYP\n\n"}
        <span style={{ color: "var(--accent)" }}>$</span>
        {" python status.py\n"}
        <span style={{ color: "var(--fg-2)" }}>{"  CoWriteIA ........ "}</span>
        <span style={{ color: "var(--accent)" }}>● live</span>
        {"\n"}
        <span style={{ color: "var(--fg-2)" }}>{"  ProfyleAI ........ "}</span>
        <span style={{ color: "var(--accent)" }}>● live · paying</span>
        {"\n"}
        <span style={{ color: "var(--fg-2)" }}>{"  Zadqa ............ "}</span>
        <span style={{ color: "oklch(0.82 0.14 75)" }}>● building</span>
        {"\n"}
        <span style={{ color: "var(--fg-2)" }}>{"  chrio-cv ......... "}</span>
        <span style={{ color: "var(--accent)" }}>● prod · 99.5%</span>
      </pre>
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "100px 0 80px" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        {/* Status chip */}
        <div style={{ marginBottom: 32 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 28,
              padding: "0 12px",
              borderRadius: 999,
              border: "1px solid var(--line-2)",
              background: "rgba(255,255,255,0.03)",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 12,
              color: "var(--mute)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 0 3px var(--accent-2)",
              }}
            />
            Islamabad, Pakistan · Open to AI roles &amp; freelance
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            fontWeight: 500,
            marginBottom: 16,
          }}
        >
          Junaid Asrar
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: "clamp(18px, 2.4vw, 26px)",
            color: "var(--mute)",
            letterSpacing: "-0.01em",
            marginBottom: 24,
            fontWeight: 300,
          }}
        >
          AI Engineer · Builder · Founder
        </p>

        {/* Oneliner */}
        <p
          style={{
            fontSize: "clamp(15px, 1.6vw, 18px)",
            color: "var(--fg-2)",
            maxWidth: 560,
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          I build AI systems that actually ship, from multi-agent pipelines to products real people use every day.
        </p>

        {/* CTA row — max-width keeps text clear of the floating terminal */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, maxWidth: 640 }}>
          <a
            href="https://github.com/MJAsrar/mjasrar"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 42,
              padding: "0 18px",
              borderRadius: 10,
              border: "1px solid var(--fg)",
              background: "var(--fg)",
              color: "#0a0a0b",
              fontSize: 13.5,
              fontWeight: 500,
              textDecoration: "none",
              transition: "opacity 140ms ease",
            }}
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/junaid-asrar-88671b226/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-ghost"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 42,
              padding: "0 18px",
              borderRadius: 10,
              border: "1px solid var(--line-2)",
              background: "rgba(255,255,255,0.03)",
              color: "var(--fg)",
              fontSize: 13.5,
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 140ms ease, border-color 140ms ease",
            }}
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a
            href="https://x.com/_mjasrar_"
            target="_blank"
            rel="noopener noreferrer"
            className="link-ghost"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 42,
              padding: "0 18px",
              borderRadius: 10,
              border: "1px solid var(--line-2)",
              background: "rgba(255,255,255,0.03)",
              color: "var(--fg)",
              fontSize: 13.5,
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 140ms ease, border-color 140ms ease",
            }}
          >
            <XIcon /> X / Twitter
          </a>
          <a
            href="mailto:junaidasrar04@gmail.com"
            className="link-ghost"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 42,
              padding: "0 18px",
              borderRadius: 10,
              border: "1px solid var(--line-2)",
              background: "rgba(255,255,255,0.03)",
              color: "var(--fg)",
              fontSize: 13.5,
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 140ms ease, border-color 140ms ease",
            }}
          >
            <MailIcon /> Email
          </a>
        </div>
      </div>

      {/* Floating terminal — visible at ≥1180px */}
      <div className="hero-terminal">
        <MiniTerminal />
      </div>

      <style>{`
        .hero-terminal {
          display: none;
          position: absolute;
          right: max(32px, calc((100vw - var(--container)) / 2 + 32px));
          top: 110px;
          width: 370px;
          transform: rotate(1.4deg);
          pointer-events: none;
          z-index: 2;
        }
        @media (min-width: 1180px) { .hero-terminal { display: block; } }
      `}</style>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{ position: "relative", zIndex: 1, padding: "var(--pad-section) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 64, alignItems: "start" }} className="about-grid">
            {/* Left: bio */}
            <div>
              <Eyebrow style={{ marginBottom: 28 }}>01 — About</Eyebrow>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 680 }}>
                <p style={{ fontSize: 16.5, color: "var(--fg-2)", lineHeight: 1.7 }}>
                  I just graduated from FAST NUCES Islamabad and I&apos;m currently working as an AI Systems Engineer at Chrio.
                  I built their computer vision pipeline from scratch and got it to{" "}
                  <span style={{ color: "var(--fg)" }}>99.5% accuracy at 30 FPS</span> in production.
                </p>
                <p style={{ fontSize: 16.5, color: "var(--fg-2)", lineHeight: 1.7 }}>
                  On the side, I build my own things.{" "}
                  <a href="https://cwrite-rho.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>CoWriteIA</a>{" "}
                  is an AI writing environment for novelists built on GraphRAG, LangGraph, and multi-agent pipelines.{" "}
                  <a href="https://profyleai.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>ProfyleAI</a>{" "}
                  is live, has a Chrome extension, and has paying customers.
                </p>
                <p style={{ fontSize: 16.5, color: "var(--fg-2)", lineHeight: 1.7 }}>
                  I&apos;ve also done freelance work through Upwork, mostly RAG systems and AI pipelines for businesses
                  in Pakistan, China, and a few other places.
                </p>
                <p style={{ fontSize: 16.5, color: "var(--fg-2)", lineHeight: 1.7 }}>
                  Next up is{" "}
                  <span style={{ color: "var(--fg)" }}>Zadqa</span>, Pakistan&apos;s first reward-based crowdfunding platform.
                  Built for local donors and the diaspora, not just one or the other.
                </p>
                <p style={{ fontSize: 16.5, color: "var(--fg)", lineHeight: 1.7, fontStyle: "italic" }}>
                  I care about building things that actually work for Pakistan, not just things that look good in a demo.
                </p>
              </div>
            </div>

            {/* Right: timeline */}
            <div style={{ paddingTop: 4 }}>
              {[
                {
                  year: "2023",
                  current: false,
                  title: "Teaching Assistant",
                  desc: "OOP lab demonstrator · FAST NUCES",
                },
                {
                  year: "2024",
                  current: false,
                  title: "Founded Semester0",
                  desc: "500+ students · 7-person team · grew it, wound it down",
                },
                {
                  year: "2024",
                  current: false,
                  title: "Freelance AI Engineer · Upwork",
                  desc: "RAG systems & pipelines for int'l clients",
                },
                {
                  year: "2025",
                  current: false,
                  title: "Joined Chrio as AI Systems Engineer",
                  desc: "CV pipeline · 99.5% accuracy at 30 FPS · ESOP",
                },
                {
                  year: "2025",
                  current: false,
                  title: "President, FAST Computing Society",
                  desc: "Led the largest CS community at FAST NUCES",
                },
                {
                  year: "2025",
                  current: false,
                  title: "Shipped ProfyleAI",
                  desc: "First paying customer · Chrome extension · live",
                },
                {
                  year: "2026",
                  current: false,
                  title: "Shipped CoWriteIA",
                  desc: "A+ FYP · multi-agent writing environment",
                },
                {
                  year: "2026",
                  current: true,
                  title: "Building Zadqa",
                  desc: "Pakistan's first reward-based crowdfunding platform",
                },
              ].map((item, i, arr) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: 20,
                    paddingBottom: i < arr.length - 1 ? 28 : 0,
                    position: "relative",
                  }}
                >
                  {/* Year + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 40 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: 11,
                        color: item.current ? "var(--accent)" : "var(--mute-2)",
                        lineHeight: 1,
                        marginBottom: 8,
                        visibility: i === 0 || arr[i - 1].year !== item.year ? "visible" : "hidden",
                      }}
                    >
                      {item.year}
                    </span>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: item.current ? "var(--accent)" : "var(--surface-2)",
                        border: `1.5px solid ${item.current ? "var(--accent)" : "var(--line-2)"}`,
                        boxShadow: item.current ? "0 0 0 3px var(--accent-2)" : "none",
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    />
                    {i < arr.length - 1 && (
                      <span
                        style={{
                          flex: 1,
                          width: 1,
                          background: "var(--line)",
                          marginTop: 6,
                          minHeight: 24,
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: 0 }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: item.current ? "var(--fg)" : "var(--fg-2)",
                        lineHeight: 1.35,
                        marginBottom: 4,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: 12.5,
                        color: "var(--mute)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
        <style>{`@media(max-width:860px){.about-grid{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
      </div>
    </section>
  );
}

/* ─── Tag chip (inline, no card) ────────────────────────────────── */
function Tag({ label }: { label: string }) {
  const isFeatured = new Set(["Featured", "Live", "Paying Customers", "Production"]).has(label);
  const isMuted    = label === "Discontinued";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 19,
        padding: "0 7px",
        borderRadius: 4,
        fontSize: 11,
        fontFamily: "var(--font-geist-mono), monospace",
        background: isFeatured ? "oklch(0.86 0.17 138 / 0.1)" : isMuted ? "rgba(255,255,255,0.03)" : "var(--surface-2)",
        color: isFeatured ? "var(--accent)" : isMuted ? "var(--mute-2)" : "var(--mute)",
        border: `1px solid ${isFeatured ? "oklch(0.86 0.17 138 / 0.2)" : "var(--line)"}`,
      }}
    >
      {label}
    </span>
  );
}

/* ─── Projects ───────────────────────────────────────────────────── */
function Projects() {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 1, padding: "var(--pad-section) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div style={{ marginBottom: 40 }}>
            <Eyebrow style={{ marginBottom: 16 }}>02 — Projects</Eyebrow>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", letterSpacing: "-0.025em", fontWeight: 500 }}>
              Things I&apos;ve built
            </h2>
          </div>
        </RevealOnScroll>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {PROJECTS.map((p, i) => (
            <RevealOnScroll key={p.name}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "220px 1fr",
                  gap: 48,
                  padding: "32px 0",
                  borderBottom: i < PROJECTS.length - 1 ? "1px solid var(--line)" : "none",
                  alignItems: "start",
                }}
                className="proj-row"
              >
                {/* Left: name + tags + links */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "var(--fg)", letterSpacing: "-0.01em" }}>
                    {p.name}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {p.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                  {(p.live || p.github) && (
                    <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            fontSize: 12,
                            color: "var(--accent)",
                            textDecoration: "none",
                            fontFamily: "var(--font-geist-mono), monospace",
                          }}
                        >
                          Live <ArrowURIcon width={10} height={10} />
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            fontSize: 12,
                            color: "var(--mute)",
                            textDecoration: "none",
                            fontFamily: "var(--font-geist-mono), monospace",
                          }}
                        >
                          GitHub <ArrowURIcon width={10} height={10} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Right: oneliner + stack + stats/note */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <p style={{ fontSize: 15, color: "var(--fg-2)", lineHeight: 1.55, margin: 0 }}>
                    {p.oneliner}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          height: 22,
                          padding: "0 8px",
                          borderRadius: 5,
                          fontSize: 11.5,
                          fontFamily: "var(--font-geist-mono), monospace",
                          background: "rgba(255,255,255,0.04)",
                          color: "var(--fg-2)",
                          border: "1px solid var(--line)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {(p.stats || p.status || p.note) && (
                    <p style={{ fontSize: 12.5, color: "var(--mute-2)", margin: 0, fontFamily: "var(--font-geist-mono), monospace" }}>
                      {p.stats || p.status || p.note}
                    </p>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:700px){.proj-row{grid-template-columns:1fr!important;gap:16px!important}}`}</style>
    </section>
  );
}

/* ─── Experience ─────────────────────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" style={{ position: "relative", zIndex: 1, padding: "var(--pad-section) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div style={{ marginBottom: 40 }}>
            <Eyebrow style={{ marginBottom: 16 }}>03 — Experience</Eyebrow>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", letterSpacing: "-0.025em", fontWeight: 500 }}>
              Where I&apos;ve worked
            </h2>
          </div>
        </RevealOnScroll>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {EXPERIENCE.map((exp, i) => (
            <RevealOnScroll key={exp.role + exp.company}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 3fr",
                  gap: 40,
                  padding: "28px 0",
                  borderBottom: i < EXPERIENCE.length - 1 ? "1px solid var(--line)" : "none",
                }}
                className="exp-row"
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 13, color: "var(--fg)", fontWeight: 500 }}>{exp.company}</span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: 20,
                      padding: "0 7px",
                      borderRadius: 4,
                      fontSize: 11,
                      fontFamily: "var(--font-geist-mono), monospace",
                      background: exp.duration === "Current" || exp.duration === "Ongoing"
                        ? "oklch(0.86 0.17 138 / 0.1)"
                        : "var(--surface-2)",
                      color: exp.duration === "Current" || exp.duration === "Ongoing"
                        ? "var(--accent)"
                        : "var(--mute)",
                      border: `1px solid ${exp.duration === "Current" || exp.duration === "Ongoing" ? "oklch(0.86 0.17 138 / 0.2)" : "var(--line)"}`,
                      width: "fit-content",
                      marginTop: 2,
                    }}
                  >
                    {exp.duration}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "var(--fg)", letterSpacing: "-0.01em" }}>
                    {exp.role}
                  </span>
                  <p style={{ fontSize: 14, color: "var(--mute)", lineHeight: 1.6 }}>{exp.details}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.exp-row{grid-template-columns:1fr!important;gap:8px!important}}`}</style>
    </section>
  );
}

/* ─── Skills ─────────────────────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" style={{ position: "relative", zIndex: 1, padding: "var(--pad-section) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div style={{ marginBottom: 40 }}>
            <Eyebrow style={{ marginBottom: 16 }}>04 — Skills</Eyebrow>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", letterSpacing: "-0.025em", fontWeight: 500 }}>
              What I work with
            </h2>
          </div>
        </RevealOnScroll>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {Object.entries(SKILLS).map(([category, skills]) => (
            <RevealOnScroll key={category}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--mute)",
                  }}
                >
                  {category}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        height: 30,
                        padding: "0 12px",
                        borderRadius: 7,
                        fontSize: 13,
                        background: "var(--surface)",
                        color: "var(--fg-2)",
                        border: "1px solid var(--line-2)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────── */

const CONTACT_LINKS: { href: string; icon: string; label: string; external?: true }[] = [
  { href: "mailto:junaidasrar04@gmail.com",                        icon: "mail", label: "Email me"    },
  { href: "https://www.linkedin.com/in/junaid-asrar-88671b226/",   icon: "li",   label: "LinkedIn",    external: true },
  { href: "https://github.com/MJAsrar/mjasrar",                    icon: "gh",   label: "GitHub",      external: true },
  { href: "https://x.com/_mjasrar_",                               icon: "x",    label: "X / Twitter", external: true },
];

function ContactIconEl({ icon }: { icon: string }) {
  if (icon === "mail") return <MailIcon />;
  if (icon === "li")   return <LinkedInIcon />;
  if (icon === "gh")   return <GithubIcon />;
  return <XIcon />;
}

function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "var(--pad-section) 0 calc(var(--pad-section) + 20px)",
      }}
    >
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 32px" }}>
        <RevealOnScroll>
          <div
            style={{
              padding: "64px 60px",
              textAlign: "center",
              background: "radial-gradient(ellipse at top, var(--accent-2), transparent 60%), var(--surface)",
              border: "1px solid var(--line-2)",
              borderRadius: 16,
            }}
            className="contact-card"
          >
            <Eyebrow style={{ marginBottom: 24, justifyContent: "center" }}>05 — Contact</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(28px, 3.6vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.028em",
                maxWidth: 640,
                margin: "0 auto 16px",
              }}
            >
              Let&apos;s build something{" "}
              <span style={{ fontStyle: "italic", color: "var(--fg-2)" }}>that ships</span>
            </h2>
            <p style={{ maxWidth: 520, margin: "0 auto 40px", color: "var(--mute)", fontSize: 16 }}>
              Whether you&apos;re hiring, building something, or just want to talk AI, I&apos;m always up for it.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 20 }}>
              {CONTACT_LINKS.map(({ href, icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="link-ghost"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    height: 40,
                    padding: "0 16px",
                    borderRadius: 10,
                    border: "1px solid var(--line-2)",
                    background: "rgba(255,255,255,0.04)",
                    color: "var(--fg-2)",
                    fontSize: 13.5,
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "background 140ms ease, color 140ms ease, border-color 140ms ease",
                  }}
                >
                  <ContactIconEl icon={icon} /> {label}
                </a>
              ))}
            </div>

            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "var(--mute)",
                textDecoration: "none",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              <DownloadIcon /> Download CV <ArrowURIcon />
            </a>
          </div>
        </RevealOnScroll>
      </div>
      <style>{`@media(max-width:640px){.contact-card{padding:40px 24px!important}}`}</style>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import CoWriteGraph from "@/components/portfolio/CoWriteGraph";
import CopyEmail from "@/components/portfolio/CopyEmail";
import Clock from "@/components/portfolio/Clock";
import Header from "@/components/portfolio/Header";
import { ArrowDown, ArrowUpRight } from "@/components/portfolio/Icons";
import Motion from "@/components/portfolio/Motion";
import OpenProject from "@/components/portfolio/OpenProject";
import ParticleField from "@/components/portfolio/ParticleField";
import ProjectDialog from "@/components/portfolio/ProjectDialog";
import { COMPANY_URL, EMAIL, EXPERIENCE, LIST_PROJECTS, SOCIALS, TOOLKIT } from "@/lib/portfolio/content";

function Label({ n, children }: { n?: string; children: React.ReactNode }) {
  return (
    <p className="label">
      {n && <b>{n}</b>}
      {children}
    </p>
  );
}

// Each section names the particle shape it shows (data-shape). The field morphs
// from one to the next as the sections scroll past.
export default function PortfolioPage() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <ParticleField />
      <Header />
      <Motion />

      <main id="main">
        <section className="hero" id="top" data-shape="sphere" aria-labelledby="hero-title">
          <div className="wrap">
            <p className="label hero-label" data-fade="0">
              <span className="live-dot" aria-hidden="true" />
              Independent thinking, applied AI
            </p>
            <h1 id="hero-title" data-reveal="load">
              <span className="caps">Engineering</span> <em>intelligence.</em>
            </h1>
            <p className="hero-lead" data-fade="1">
              I turn complex AI into things people use. Agentic systems, thoughtful products, and the engineering to make
              them real.
            </p>
            <div className="actions" data-fade="2">
              <a className="btn" href="#work">
                See the work <ArrowDown />
              </a>
              <a className="btn btn-ghost" href="/Junaid-Asrar-CV.pdf" download>
                Download résumé
              </a>
            </div>
            <dl className="hero-meta" data-fade="3">
              <div>
                <dt className="label">Currently</dt>
                <dd>Building production AI at Taraz Technologies</dd>
              </div>
              <div>
                <dt className="label">Based in</dt>
                <dd>Islamabad, Pakistan</dd>
              </div>
              <div>
                <dt className="label">Focus</dt>
                <dd>Agents, retrieval and vision</dd>
              </div>
            </dl>
          </div>
          <a className="scroll-cue mono-link" href="#work">
            Scroll <ArrowDown />
          </a>
        </section>

        <section className="sec" id="work" data-shape="wave" aria-labelledby="wa-title">
          <div className="wrap split-right">
            <div>
              <Label n="01">Selected work, international client</Label>
              <h2 id="wa-title" data-reveal>
                Better conversations. <em>Better-qualified leads.</em>
              </h2>
              <p className="sec-lead" data-fade>
                A custom multilingual WhatsApp AI system for a B2B solar street-light manufacturer in China, built to answer
                product questions and tell business buyers from retail inquiries.
              </p>
              <ul className="stats" data-fade>
                <li>
                  <b data-count="98" data-suffix="%">
                    98%
                  </b>
                  <span>Accuracy across 256 pre-launch test queries</span>
                </li>
                <li>
                  <b data-count="4">4</b>
                  <span>Languages: English, Spanish, French, Arabic</span>
                </li>
                <li>
                  <b>
                    $80 → <span className="lt">&lt;</span>$5
                  </b>
                  <span>A month: previous WATI subscription against Railway hosting</span>
                </li>
              </ul>
              <p className="note">Railway deployment cost only; not a total operating-cost comparison.</p>
              <ul className="tags" data-fade>
                {["FastAPI", "LangChain", "ChromaDB", "Qwen API", "WhatsApp Cloud API"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <OpenProject id="whatsapp" className="btn">
                Explore the client project <ArrowUpRight />
              </OpenProject>
            </div>
          </div>
        </section>

        <section className="sec" id="cowrite" data-shape="graph" aria-labelledby="cw-title">
          <div className="wrap split-right">
            <div>
              <Label n="02">Knowledge and multi-agent systems</Label>
              <h2 id="cw-title" data-reveal>
                CoWriteIA. <em>Context is everything.</em>
              </h2>
              <p className="sec-lead" data-fade>
                A multi-agent writing system that connects knowledge across documents to create context-aware narratives.
                Choose a stage to see what it does.
              </p>
              <div className="graph-card" data-fade>
                <CoWriteGraph />
              </div>
              <ul className="tags">
                {["LangGraph", "GraphRAG", "FastAPI", "Celery", "Redis"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <OpenProject id="cowrite" className="btn btn-ghost">
                Inside the project <ArrowUpRight />
              </OpenProject>
            </div>
          </div>
        </section>

        <section className="sec gallery" id="projects" data-shape="clusters" aria-labelledby="projects-title">
          <div className="wrap gallery-head">
            <div>
              <Label n="03">More work</Label>
              <h2 id="projects-title" data-reveal>
                Six more, <em>shipped.</em>
              </h2>
            </div>
            <p className="sec-lead">
              Government software, a retail till, AI products and a 3D atlas of how cars work. Open any of them for the
              details.
            </p>
          </div>
          <div className="gallery-window">
            <ol className="gallery-track">
              {LIST_PROJECTS.map((p, i) => (
                <li key={p.key}>
                  <OpenProject id={p.key} className="card">
                    <span className="card-top">
                      <span>{p.cat}</span>
                      <span>
                        {String(i + 1).padStart(2, "0")} / {String(LIST_PROJECTS.length).padStart(2, "0")}
                      </span>
                    </span>
                    <span className="card-name">{p.name}</span>
                    <span className="card-foot">
                      <span>{p.line}</span>
                      <span className="mono-link">
                        Open project <ArrowUpRight />
                      </span>
                    </span>
                  </OpenProject>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec" id="about" data-shape="initials" aria-labelledby="about-title">
          <div className="wrap split-right">
            <div>
              <Label n="04">The person behind the pipelines</Label>
              <h2 id="about-title" data-reveal>
                A builder’s instinct. <em>A problem solver’s persistence.</em>
              </h2>
              <p className="sec-lead" data-fade>
                I’m Junaid, an AI engineer based in Islamabad. I work across the stack, from retrieval and agent
                orchestration to the interfaces people actually use.
              </p>
              <p className="body" data-fade>
                Competitive programming shaped how I think. Building for real users shaped what I care about: useful
                systems, clear decisions, and getting the details right.
              </p>
              <ul className="stats stats-2" data-fade>
                <li>
                  <b>ICPC</b>
                  <span>Regional qualifier, 2025</span>
                </li>
                <li>
                  <b>2nd</b>
                  <span>All-Pakistan Speed Programming</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="rail" aria-label="Toolkit">
            <p className="label rail-label">Toolkit</p>
            <div className="rail-window">
              <div className="rail-track">
                {[0, 1].map((copy) => (
                  <ul key={copy} aria-hidden={copy === 1 || undefined}>
                    {[...TOOLKIT, ...TOOLKIT].map((t, i) => (
                      <li key={`${t}-${i}`}>{t}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="experience" data-shape="helix" aria-labelledby="lead-title">
          <div className="wrap split-right">
            <div>
              <Label n="05">Leadership and community</Label>
              <h2 id="lead-title" data-reveal>
                Building systems. <em>Leading people.</em>
              </h2>
              <div className="lead-card" data-fade>
                <p className="label">President</p>
                <h3>FAST Computing Society</h3>
                <p>
                  I led the largest society at FAST–NUCES Islamabad, bringing university-level leadership experience to my
                  work as an engineer and builder.
                </p>
                <p className="lead-stat">
                  <b>#1</b>
                  <span>Campus leadership: FAST Islamabad’s largest society</span>
                </p>
              </div>

              <Label n="06">Experience</Label>
              <h2 className="h-sub" data-reveal>
                Where I’ve made an impact.
              </h2>
              <ol className="timeline">
                {EXPERIENCE.map((e) => (
                  <li key={e.org} data-fade>
                    <p className="label">{e.date}</p>
                    <h3>
                      {e.org} <small>{e.role}</small>
                    </h3>
                    <p>{e.text}</p>
                  </li>
                ))}
              </ol>
              <p className="note">Education: BS Computer Science, FAST–NUCES Islamabad, 2022–2026.</p>
            </div>
          </div>
        </section>

        <section className="sec contact" id="contact" data-shape="ring" aria-labelledby="contact-title">
          <div className="wrap split-right">
            <div>
              <Label n="07">What’s next</Label>
              <h2 id="contact-title" data-reveal>
                Let’s build something <em>real.</em>
              </h2>
              <p className="sec-lead" data-fade>
                Open to AI roles and freelance work. Write to me and I’ll get back to you.
              </p>
              <a className="email" href={`mailto:${EMAIL}`} data-fade>
                {EMAIL}
              </a>
              <div className="actions">
                <CopyEmail />
              </div>
              <ul className="socials">
                {SOCIALS.map((s) => (
                  <li key={s.href}>
                    <a className="mono-link" href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label} <ArrowUpRight />
                    </a>
                  </li>
                ))}
                <li>
                  <a className="mono-link" href="/Junaid-Asrar-CV.pdf" download>
                    Résumé <ArrowDown />
                  </a>
                </li>
              </ul>
              <p className="company-line">
                Need a team rather than one engineer?{" "}
                <a className="u-link" href={COMPANY_URL}>
                  MJAsrar, my software company
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-legal">
          <span>© {new Date().getFullYear()} Junaid Asrar</span>
          <span>
            Islamabad, PK <Clock />
          </span>
        </div>
        <p className="footer-wordmark" aria-hidden="true">
          Junaid Asrar
        </p>
      </footer>

      <ProjectDialog />
    </>
  );
}

export interface Project {
  name: string;
  tags: string[];
  oneliner: string;
  problem: string;
  stack: string[];
  stats?: string;
  live?: string;
  github?: string;
  note?: string;
  status?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  details: string;
}

export const PROJECTS: Project[] = [
  {
    name: "CoWriteIA",
    tags: ["Featured", "FYP", "Live"],
    oneliner: "An AI writing environment for novelists. Think Cursor, but for storytelling.",
    problem: "Writers don't have good AI tools. Not the kind that actually understand your characters, your world, and where the story is going.",
    stack: ["GraphRAG", "LangGraph", "FastAPI", "ChromaDB", "Celery", "Redis", "Groq", "Llama 3.3 70B", "SentenceTransformers", "Next.js"],
    stats: "100+ documents indexed · multi-agent pipeline · three-panel UI · A+ FYP grade",
    live: "https://cwrite-rho.vercel.app",
    github: "https://github.com/MJAsrar/mjasrar",
  },
  {
    name: "ProfyleAI",
    tags: ["Featured", "Live", "Paying Customers"],
    oneliner: "AI resume and cover letter platform. Live, with real paying customers.",
    problem: "Job applications are repetitive and exhausting. Every role needs something tailored, and doing that manually doesn't scale.",
    stack: ["Next.js", "Python", "FastAPI", "Chrome Extension", "Speech-to-text", "Facial expression analysis"],
    stats: "First paying customer · Chrome extension for LinkedIn and Indeed · AI interview simulation",
    live: "https://profyleai.com",
    github: "https://github.com/MJAsrar/mjasrar",
  },
  {
    name: "Zadqa",
    tags: ["In Progress", "Building in Public"],
    oneliner: "Reward and donation crowdfunding built for Pakistan.",
    problem: "There's no crowdfunding platform that actually works for Pakistani donors and the diaspora. No Safepay, no zakat support, nothing built for local NGOs.",
    stack: ["Next.js", "FastAPI", "Safepay", "Stripe Connect", "PostgreSQL"],
    status: "Rebuilding from scratch. Following the journey on X.",
  },
  {
    name: "Chrio CV Pipeline",
    tags: ["Professional", "Production"],
    oneliner: "Real-time computer vision pipeline for sports analytics.",
    problem: "The team needed production-grade ball detection that could run fast and be accurate enough to actually rely on.",
    stack: ["Computer Vision", "Python", "GCP"],
    stats: "99.5% detection accuracy · 30 FPS · production deployment",
    note: "Professional work, proprietary codebase",
  },
  {
    name: "DEL Illumination RAG System",
    tags: ["Freelance", "International Client"],
    oneliner: "RAG-powered knowledge base for a China-based solar LED manufacturer.",
    problem: "DEL Illumination had a large amount of unstructured product documentation. Sales and support teams had no good way to search through it.",
    stack: ["RAG", "LangChain", "ChromaDB", "FastAPI", "Python"],
    note: "International freelance via Upwork · DEL Illumination CO., LTD. (China)",
  },
  {
    name: "Semester0",
    tags: ["Discontinued", "Founded"],
    oneliner: "Pre-university prep platform for students heading into FAST NUCES and similar CS programs.",
    problem: "Students going into competitive CS universities had nowhere structured to prepare. We built the thing that should have existed.",
    stack: ["Full-stack web platform"],
    stats: "500+ students · 7-person founding team · formal co-founder agreement",
    status: "Discontinued. Built it, grew it, wound it down, learned how to run a team.",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "AI Systems Engineer",
    company: "Chrio PVT LTD",
    duration: "Current",
    details: "Built the production computer vision pipeline from scratch. Got it to 99.5% ball detection accuracy at 30 FPS. On ESOP track.",
  },
  {
    role: "Freelance AI Engineer",
    company: "Upwork",
    duration: "Ongoing",
    details: "RAG systems, AI pipelines, and automation tools for clients across Pakistan, China, and beyond.",
  },
  {
    role: "Founder",
    company: "Semester0",
    duration: "Past",
    details: "Founded a university prep platform and grew it to 500+ students. Led a 7-person team, handled co-founder agreements, and ran operations until we shut it down.",
  },
  {
    role: "OOP Lab Demonstrator and Teaching Assistant",
    company: "FAST NUCES Islamabad",
    duration: "Past",
    details: "Ran Object Oriented Programming lab sessions, helped students through the material, and handled evaluations.",
  },
  {
    role: "President",
    company: "FAST Computing Society",
    duration: "Past",
    details: "Led the largest CS student community at FAST NUCES. Organized events, competitions, and brought in industry connections.",
  },
];

export const SKILLS: Record<string, string[]> = {
  "AI & ML": ["LangChain", "LangGraph", "GraphRAG", "RAG Pipelines", "Multi-Agent Systems", "Computer Vision", "SentenceTransformers", "ChromaDB", "Groq", "Llama 3.3 70B", "OpenAI APIs", "Prompt Engineering"],
  "Backend & Infra": ["FastAPI", "Python", "Celery", "Redis", "Docker", "GCP Cloud Run", "PostgreSQL", "REST APIs"],
  "Frontend": ["Next.js", "React", "TypeScript", "Vercel"],
  "Integrations & Payments": ["Stripe Connect", "Safepay", "Chrome Extensions"],
};

export const ACHIEVEMENTS = [
  "2nd Place, All Pakistan Speed Programming",
  "ICPC Regionals 2025 Qualifier",
  "FPSC Assistant Director Written Test, ASF",
  "FYP Grade: A+ (CoWriteIA)",
  "FAST NUCES BS Computer Science, Class of 2026",
];

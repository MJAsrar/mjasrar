export type Project = {
  title: string;
  subtitle: string;
  body: string;
  approach: string;
  results?: string;
  resultsLabel?: string;
  tags: string[];
  url?: string;
  link?: string;
};

export const EMAIL = "junaidasrar04@gmail.com";

// The software company, linked from the contact section.
export const COMPANY_URL = "https://www.mjasrar.site";

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const STAGES = [
  "01 — Organize 100+ documents into connected, searchable knowledge.",
  "02 — Retrieve relevant context through semantic search and graph relationships.",
  "03 — Coordinate specialized agents to generate context-aware narratives.",
];

export const STAGE_LABELS = ["01 / INDEX", "02 / RETRIEVE", "03 / GENERATE"];

export const LIST_PROJECTS = [
  { key: "nexus", num: "03", name: "Nexus", line: "Secure investigation software for the National Accountability Bureau.", cat: "GOVERNMENT · SECURE SYSTEMS" },
  { key: "pos", num: "04", name: "Offline-first POS", line: "A paper register, replaced. Even without internet.", cat: "CLIENT · RETAIL SOFTWARE" },
  { key: "profyle", num: "05", name: "ProfyleAI", line: "From job description to your next opportunity.", cat: "AI CAREER PLATFORM" },
  { key: "meeting", num: "06", name: "AI Meeting Agent", line: "Every conversation. Captured and understood.", cat: "PRODUCTION AUTOMATION" },
  { key: "autopsy", num: "07", name: "Autopsy", line: "Take a car apart to see how it works.", cat: "3D · INTERACTIVE" },
  { key: "bioscout", num: "08", name: "BioScout", line: "A closer connection to the natural world.", cat: "AI & GEOSPATIAL" },
];

export const TOOLKIT = [
  "Agentic AI",
  "RAG & GraphRAG",
  "Computer vision",
  "Python & FastAPI",
  "React & Next.js",
  "Cloud & infrastructure",
];

export const EXPERIENCE = [
  {
    date: "2026 — PRESENT",
    org: "Taraz Technologies",
    role: "AI Engineer · Islamabad",
    text: "Building an autonomous meeting agent across Teams, Zoom, and Google Meet. Transcription, speaker attribution, screen understanding, and structured post-meeting summaries—all in one production pipeline.",
  },
  {
    date: "2025 — 2026",
    org: "Chrio PVT LTD",
    role: "AI Systems Engineer · ESOP Track",
    text: "Contributed to a real-time cricket vision pipeline with 99.5% ball-detection accuracy at 30 FPS. Worked across CritRate, Chrio Atlas, and Chrio Flow with Docker and GCP Cloud Run.",
  },
  {
    date: "SUMMER 2024",
    org: "SDD, NASTP",
    role: "Full Stack Engineering Intern",
    text: "Developed hospital management features with Angular and relational databases, integrating REST APIs across scheduling, patient records, and billing.",
  },
];

export const SOCIALS = [
  { href: "https://github.com/MJAsrar", label: "GitHub" },
  { href: "https://www.linkedin.com/in/junaid-asrar-88671b226/", label: "LinkedIn" },
  { href: "https://x.com/_mjasrar_", label: "X / Twitter" },
];

export const PROJECTS: Record<string, Project> = {
  whatsapp: {
    title: "Multilingual WhatsApp AI",
    subtitle: "A production lead-qualification system for an international B2B client.",
    body: "A solar street light manufacturer in China was using WATI to handle WhatsApp inquiries from Facebook Ads in four languages. Many inquiries came from retail customers rather than the B2B buyers the business needed. I replaced the subscription-based workflow with a custom AI system built around direct Meta WhatsApp Cloud API integration.",
    approach:
      "A RAG pipeline retrieves product catalogue information, specifications, and pricing. The bot replies in English, Spanish, French, and Arabic while qualifying retail versus B2B leads. Low-confidence responses trigger a lead form for the sales team. An admin panel supports document uploads and conversation log review. Built with FastAPI, LangChain, ChromaDB, Qwen API, and the Meta WhatsApp Cloud API.",
    results:
      "Before launch, the system achieved 98% accuracy across 256 test queries in four languages. Railway deployment cost was under $5 per month, compared with the previous $80 monthly WATI subscription. The Railway figure is a deployment cost, not a complete total operating-cost comparison.",
    tags: ["FastAPI", "LangChain", "ChromaDB", "Qwen API", "Meta WhatsApp Cloud API", "Railway"],
  },
  cowrite: {
    title: "CoWriteIA",
    subtitle: "Connected knowledge. Coherent narratives.",
    body: "A final-year project built around a GraphRAG knowledge system. LangGraph coordinates specialized indexing, retrieval, and generation agents to reason across more than 100 documents.",
    approach:
      "Semantic search uses SentenceTransformers and ChromaDB. FastAPI, Celery, and Redis handle parallel tasks and asynchronous document indexing, with MongoDB supporting the application.",
    tags: ["LangGraph", "GraphRAG", "FastAPI", "Celery", "Redis"],
    url: "https://cwrite-rho.vercel.app",
    link: "Visit CoWriteIA",
  },
  profyle: {
    title: "ProfyleAI",
    subtitle: "AI for the next step in your career.",
    body: "A production career platform that generates tailored résumés and cover letters from live job descriptions using a RAG pipeline and LangGraph agents.",
    approach:
      "A Chrome extension extracts job data. The platform combines Next.js and FastAPI with semantic retrieval, plus interview features using speech-to-text, text-to-speech, and facial expression analysis.",
    tags: ["Next.js", "FastAPI", "LangGraph", "RAG", "MongoDB"],
  },
  meeting: {
    title: "AI Meeting Agent",
    subtitle: "From meeting recordings to usable knowledge.",
    body: "Built at Taraz Technologies: an autonomous agent that joins Microsoft Teams, Zoom, and Google Meet via browser automation and captures audio, video, shared screens, and chat.",
    approach:
      "Speaker diarization aligns dialogue to timestamps. A computer vision pipeline extracts useful slides, diagrams, and handwritten notes. The post-meeting pipeline generates structured DOCX, PDF, and Markdown summaries with participants and action items.",
    tags: ["Browser automation", "Speech-to-text", "Computer vision", "Production AI"],
  },
  nexus: {
    title: "Nexus",
    subtitle: "Secure, offline investigation software for the National Accountability Bureau.",
    body: "A Windows desktop application built for investigators at Pakistan’s National Accountability Bureau. It brings scattered records together into a single profile for each person, analyses call records for patterns and links between cases, and lays the results out on link graphs and maps, all without ever touching a network.",
    approach:
      "A Rust workspace powers the engine, including a custom encrypted vault format (XChaCha20-Poly1305 and Argon2id) and fast parallel indexing. The Tauri 2 desktop app uses React and TypeScript, with offline MapLibre maps and Sigma.js link graphs. Role-based access, PIN unlock, automatic idle lock, and a tamper-evident audit log keep every search accountable.",
    tags: ["Rust", "Tauri 2", "React", "TypeScript", "MapLibre", "Encryption"],
  },
  pos: {
    title: "Offline-first POS",
    subtitle: "A point-of-sale system for an electronics and spare-parts shop in Punjab.",
    body: "The shop ran on a paper register. I built a Windows counter app that keeps selling with no internet, syncs to the cloud when it can, and gives the owner a phone-friendly view of the day’s takings, stock, customers, and staff. Customer credit (udhaar) is tracked with every sale, and receipts are PDFs ready to send on WhatsApp.",
    approach:
      "A TypeScript monorepo shares money, ledger, and sync rules between an Electron and React desktop app on SQLite and a Next.js owner portal on Vercel, backed by Supabase Postgres with row-level security. Stock and balances are append-only ledgers with a reason for every change, money is stored as whole paisa, and sync runs through a single Postgres function that surfaces conflicts instead of hiding them. Checkout is keyboard-first, with Argon2-hashed PINs, 20 named permissions, and automatic updates.",
    results:
      "332 automated tests across the workspace. The till keeps 14 daily and 4 weekly local backups, plus a 30-day offsite copy in the cloud.",
    resultsLabel: "RELIABILITY",
    tags: ["Electron", "React", "SQLite", "Next.js", "Supabase", "TypeScript"],
  },
  autopsy: {
    title: "Autopsy",
    subtitle: "An interactive 3D atlas of how cars work.",
    body: "Pick one of four cars, from a Civic Type R to a Land Cruiser 300, then orbit, isolate, remove, or explode its parts. Start the engine to watch a six-stage start-up with correct firing orders, see what fails when parts are missing, play a fault-finding game, or take it for a drive with manual, CVT, and 10-speed automatic gearboxes.",
    approach:
      "Built with three.js and Vite, using three-mesh-bvh for fast part picking and rendering only when something changes. A custom model pipeline converts FBX files in headless Chrome, then uses glTF-Transform to cut panels, split wheels, apply PBR materials, and compress with meshopt and WebP. Each car’s engine, gearbox, and drivetrain is generated in code.",
    results:
      "Optimization cut draw calls from 1,679 to 193 and triangles from 643k to 319k, and brought hover picking down from 5.9 ms to 0.3 ms (median). The Civic model shrank from 48.9 MB to 12.6 MB, and the scene does zero renders while idle.",
    resultsLabel: "PERFORMANCE",
    tags: ["three.js", "Vite", "glTF-Transform", "three-mesh-bvh", "WebGL"],
    url: "https://autopsy-rho.vercel.app",
    link: "Visit Autopsy",
  },
  bioscout: {
    title: "BioScout",
    subtitle: "Making biodiversity easier to explore.",
    body: "A full-stack biodiversity tracking application with AI-assisted species identification and map-based observation logging.",
    approach:
      "React and TypeScript power the interface, Leaflet provides interactive maps, and FastAPI supports the backend. An NLP-driven Q&A system helps people explore local wildlife questions.",
    tags: ["React", "TypeScript", "FastAPI", "Leaflet", "NLP"],
  },
};

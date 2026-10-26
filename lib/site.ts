// Content for the MJAsrar company site. Everything a visitor reads lives here
// so copy, services and case studies can be edited without touching layout.

export const COMPANY = {
  name: "MJAsrar",
  legalName: "MJAsrar (SMC-Private) Limited",
  registration: "Single-member company registered with the SECP",
  url: "https://www.mjasrar.site",
  email: "junaidasrar04@gmail.com",
  city: "Islamabad",
  country: "Pakistan",
  timezone: "PKT, UTC+5",
  founder: "Junaid Asrar",
  portfolio: "/portfolio",
  description:
    "MJAsrar is a software company in Islamabad, Pakistan. We build AI agents, chatbots, voice AI, document search and custom software for businesses in Pakistan and abroad.",
};

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOUNDER_LINKS = [
  { href: "https://www.linkedin.com/in/junaid-asrar-88671b226/", label: "LinkedIn" },
  { href: "https://github.com/MJAsrar", label: "GitHub" },
  { href: "https://x.com/_mjasrar_", label: "X" },
];

export type ServiceSlug = "agents" | "chatbots" | "rag" | "voice" | "vision" | "web" | "offline" | "cloud";

export type Service = {
  slug: ServiceSlug;
  name: string;
  short: string;
  summary: string;
  body: string;
  deliverables: string[];
  examples: string[];
  stack: string[];
};

export const SERVICE_GROUPS: { name: string; intro: string; services: Service[] }[] = [
  {
    name: "AI systems",
    intro: "Models that answer, decide and act, connected to the tools and data you already have.",
    services: [
      {
        slug: "agents",
        name: "AI agents and automation",
        short: "AI agents",
        summary:
          "Agents that work across your tools: qualifying leads, booking appointments, updating records and drafting reports, with a person approving anything that matters.",
        body: "Most businesses have work that moves between WhatsApp, email, spreadsheets and a CRM by hand. We build agents that do those steps for you, inside limits you set, and log every action so you can see what happened and why.",
        deliverables: [
          "Agent workflows with approval steps for sensitive actions",
          "Integrations with your CRM, Google Workspace, ERP or database",
          "An activity log for every run",
          "Fallbacks that hand work to a person when the agent is unsure",
        ],
        examples: [
          "Lead qualification and routing",
          "Meeting notes turned into tasks and follow-up emails",
          "Invoice and document intake",
          "Reports compiled from several systems",
        ],
        stack: ["LangGraph", "LangChain", "n8n", "FastAPI", "Python"],
      },
      {
        slug: "chatbots",
        name: "Chatbots and WhatsApp assistants",
        short: "Chatbots",
        summary:
          "Customer assistants on WhatsApp and your website that answer from your own catalogue and policies, in English, Urdu, Roman Urdu, Arabic and more.",
        body: "Your customers already message you. We connect an assistant directly to the WhatsApp Business Platform and your website, ground its answers in your documents, and have it pass the conversation to your team when a person should take over.",
        deliverables: [
          "Direct WhatsApp Cloud API integration, without per-seat chatbot subscriptions",
          "Answers grounded in your catalogue, price lists and FAQs",
          "Lead capture, qualification and handoff to your sales team",
          "An admin panel to update documents and review conversations",
        ],
        examples: [
          "Sales assistant for product and pricing questions",
          "Order status and after-sales support",
          "Appointment booking for clinics and services",
          "Internal helpdesk for staff",
        ],
        stack: ["Meta WhatsApp Cloud API", "FastAPI", "LangChain", "ChromaDB"],
      },
      {
        slug: "rag",
        name: "Document search and RAG",
        short: "RAG systems",
        summary:
          "Ask questions of your contracts, manuals, policies and case files, and get answers that point to the page they came from.",
        body: "Retrieval-augmented generation (RAG) lets a model answer from your documents instead of from memory. We build the ingestion, search and answer pipeline, use graph-based retrieval where the links between records matter, and measure accuracy on real questions before anyone relies on it.",
        deliverables: [
          "Ingestion for PDFs, Word files, spreadsheets and scanned documents",
          "Semantic and graph-based retrieval (GraphRAG)",
          "Answers with citations back to the source",
          "Role-based access, and an accuracy test set agreed with you before launch",
        ],
        examples: [
          "Company knowledge base for staff",
          "Product and specification lookup for sales teams",
          "Policy and compliance questions",
          "Research across large document sets",
        ],
        stack: ["LangGraph", "GraphRAG", "ChromaDB", "SentenceTransformers", "Celery", "Redis"],
      },
      {
        slug: "voice",
        name: "Voice AI",
        short: "Voice AI",
        summary:
          "Voice agents that answer calls and voice notes, and pipelines that turn meetings into transcripts, summaries and action items.",
        body: "A lot of business in Pakistan happens in voice notes and phone calls. We build speech pipelines that transcribe and understand them, in Urdu and English, and agents that reply by voice or text.",
        deliverables: [
          "Speech-to-text and text-to-speech in Urdu, English and other languages",
          "Voice-note handling inside WhatsApp assistants",
          "Meeting transcription with speaker attribution",
          "Structured summaries, decisions and action items",
        ],
        examples: [
          "After-hours answering for calls and voice notes",
          "Meeting notes delivered as DOCX, PDF or Markdown",
          "Call review and quality checks",
          "Voice ordering and booking",
        ],
        stack: ["Speech-to-text", "Text-to-speech", "Speaker diarization", "Python"],
      },
      {
        slug: "vision",
        name: "Computer vision",
        short: "Computer vision",
        summary: "Detection and tracking in live video, and extraction of text, slides and diagrams from images and documents.",
        body: "We build vision pipelines that run at production speed: detecting and tracking objects in video, reading documents and screens, and flagging what needs a person to look at it.",
        deliverables: [
          "Detection and tracking models trained on your footage",
          "Real-time pipelines tuned for your hardware or cloud",
          "Text, slide and handwriting extraction",
          "Accuracy and speed reports on your own data",
        ],
        examples: ["Sports and video analytics", "Visual inspection and counting", "Slide capture from recorded meetings", "Scanned form digitisation"],
        stack: ["Python", "Docker", "GCP Cloud Run"],
      },
    ],
  },
  {
    name: "Software",
    intro: "The applications around the AI, and the ones that need none: built, deployed and looked after.",
    services: [
      {
        slug: "web",
        name: "Web applications",
        short: "Web apps",
        summary: "Customer portals, internal tools, dashboards and SaaS products, designed and built end to end.",
        body: "We design and build web software from database to interface. The people who design it also build it, so nothing gets lost in a handover.",
        deliverables: [
          "Product design and clickable prototypes",
          "Front ends in React and Next.js",
          "APIs and back ends in FastAPI or Node.js",
          "Admin panels, roles and permissions",
        ],
        examples: ["Customer and partner portals", "Operations dashboards", "SaaS products and MVPs", "Browser extensions"],
        stack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "MongoDB"],
      },
      {
        slug: "offline",
        name: "Desktop and offline-first software",
        short: "Desktop & offline",
        summary: "Point-of-sale, field and secure desktop systems that keep working without internet and sync when they can.",
        body: "Internet and power aren’t guaranteed, and some data should never touch a network. We build desktop software that works fully offline, keeps data encrypted on the device, and syncs safely when a connection is available.",
        deliverables: [
          "Windows desktop apps on Electron or Tauri",
          "Local SQLite storage with cloud sync and conflict handling",
          "Encrypted storage, PIN access and audit logs",
          "Automatic updates, plus local and offsite backups",
        ],
        examples: ["Point of sale and inventory", "Secure case and records management", "Field data collection", "Back-office tools for branches"],
        stack: ["Electron", "Tauri", "Rust", "SQLite", "Supabase"],
      },
      {
        slug: "cloud",
        name: "Deployment, hosting and support",
        short: "Hosting & support",
        summary: "We put systems into production, keep running costs low, and stay on to monitor, fix and improve them.",
        body: "Launch is the start. We deploy on infrastructure sized for your traffic, set up monitoring and backups, and offer monthly support so the system keeps up with your business.",
        deliverables: [
          "Deployment on Vercel, Railway, Google Cloud or your own servers",
          "Monitoring, alerts and backups",
          "Cost reviews for hosting and model usage",
          "Monthly support and improvement retainers",
        ],
        examples: [
          "Moving off expensive subscriptions to a system you own",
          "Taking over and stabilising an existing system",
          "Ongoing improvements after launch",
        ],
        stack: ["Docker", "Vercel", "Railway", "GCP Cloud Run", "Supabase"],
      },
    ],
  },
];

export const SERVICES = SERVICE_GROUPS.flatMap((g) => g.services);

export const serviceBySlug = (slug: ServiceSlug) => SERVICES.find((s) => s.slug === slug)!;

export type CaseStudy = {
  slug: string;
  kind: "client" | "product";
  short: string;
  status: "Delivered" | "Live";
  title: string;
  client: string;
  sector: string;
  place: string;
  summary: string;
  challenge: string;
  solution: string;
  highlights: { figure: string; label: string }[];
  note?: string;
  stack: string[];
  services: ServiceSlug[];
  url?: string;
};

export const WORK: CaseStudy[] = [
  {
    slug: "whatsapp-sales-assistant",
    kind: "client",
    short: "WhatsApp assistant",
    status: "Delivered",
    title: "Multilingual WhatsApp sales assistant",
    client: "Solar street-light manufacturer",
    sector: "Manufacturing and export",
    place: "China",
    summary: "Answers product questions in four languages and separates bulk buyers from retail inquiries.",
    challenge:
      "The manufacturer’s Facebook ads sent buyers to WhatsApp, where questions arrived in English, Spanish, French and Arabic. A subscription chatbot handled them, but many leads were retail customers rather than the B2B buyers the business wanted, and the sales team spent its time sorting them out.",
    solution:
      "We replaced the subscription with a custom assistant connected directly to the Meta WhatsApp Cloud API. A RAG pipeline answers from the product catalogue, specifications and pricing, in the customer’s own language. The assistant qualifies each lead as retail or B2B, and when it isn’t confident it sends a lead form to the sales team instead of guessing. An admin panel lets staff upload documents and review conversations.",
    highlights: [
      { figure: "98%", label: "accuracy across 256 test queries in four languages, measured before launch" },
      { figure: "4", label: "languages: English, Spanish, French and Arabic" },
      { figure: "$80 → <$5", label: "a month: the old chatbot subscription against hosting the new system" },
    ],
    note: "The hosting figure covers deployment only. It is not a full operating-cost comparison.",
    stack: ["FastAPI", "LangChain", "ChromaDB", "Qwen API", "Meta WhatsApp Cloud API", "Railway"],
    services: ["chatbots", "rag", "cloud"],
  },
  {
    slug: "nexus",
    kind: "client",
    short: "Nexus",
    status: "Delivered",
    title: "Nexus, an offline investigation platform",
    client: "National Accountability Bureau",
    sector: "Government",
    place: "Pakistan",
    summary: "Brings scattered records into one profile per person, finds links between cases, and never touches a network.",
    challenge:
      "Investigators had to piece together scattered records and call data by hand, and the material was too sensitive for any system that connects to the internet.",
    solution:
      "A Windows desktop application that builds a single profile for each person, analyses call records for patterns and links between cases, and lays the results out on link graphs and maps, entirely offline. A Rust engine provides a custom encrypted vault format and fast parallel indexing. The Tauri 2 app uses React and TypeScript, with offline MapLibre maps and Sigma.js link graphs. Role-based access, PIN unlock, automatic idle lock and a tamper-evident audit log keep every search accountable.",
    highlights: [
      { figure: "Offline", label: "by design: no network connection at any point" },
      { figure: "Encrypted", label: "local vault using XChaCha20-Poly1305 and Argon2id" },
      { figure: "Audited", label: "every search recorded in a tamper-evident log" },
    ],
    stack: ["Rust", "Tauri 2", "React", "TypeScript", "MapLibre", "Sigma.js"],
    services: ["offline"],
  },
  {
    slug: "offline-pos",
    kind: "client",
    short: "Offline POS",
    status: "Delivered",
    title: "Offline-first point of sale",
    client: "Electronics and spare-parts shop",
    sector: "Retail",
    place: "Punjab, Pakistan",
    summary: "Replaced a paper register with a till that keeps selling without internet, and gave the owner a live view of the shop.",
    challenge:
      "The shop ran on a paper register. The owner had no reliable view of daily sales, stock or customer credit, and the internet connection at the counter couldn’t be relied on.",
    solution:
      "A Windows counter app that keeps selling with no internet and syncs to the cloud when it can, plus a phone-friendly portal that shows the owner the day’s takings, stock, customers and staff. Customer credit (udhaar) is tracked with every sale, and receipts are PDFs ready to send on WhatsApp. Stock and balances are append-only ledgers with a reason for every change, money is stored in whole paisa, and sync surfaces conflicts instead of hiding them. Checkout is keyboard-first, with hashed PINs and named staff permissions.",
    highlights: [
      { figure: "332", label: "automated tests across the codebase" },
      { figure: "14 + 4", label: "daily and weekly local backups, plus a 30-day offsite copy" },
      { figure: "20", label: "named staff permissions, each behind a PIN" },
    ],
    stack: ["Electron", "React", "SQLite", "Next.js", "Supabase", "TypeScript"],
    services: ["offline", "web", "cloud"],
  },
  {
    slug: "autopsy",
    kind: "product",
    short: "Autopsy",
    status: "Live",
    title: "Autopsy, a 3D atlas of how cars work",
    client: "Our own product",
    sector: "Education and 3D web",
    place: "Web",
    summary: "Take one of four cars apart in the browser, start its engine, find faults and take it for a drive.",
    challenge:
      "Detailed car models are heavy: thousands of draw calls and tens of megabytes per car, far too slow for a browser on an ordinary laptop.",
    solution:
      "Pick a car, from a Civic Type R to a Land Cruiser 300, then orbit, isolate, remove or explode its parts. Start the engine to watch a six-stage start-up with correct firing orders, see what fails when parts are missing, or drive it with manual, CVT and ten-speed automatic gearboxes. A custom pipeline converts the models, cuts panels, applies materials and compresses everything with meshopt and WebP; the scene renders only when something changes.",
    highlights: [
      { figure: "1,679 → 193", label: "draw calls per frame" },
      { figure: "5.9 → 0.3 ms", label: "median time to pick a part under the cursor" },
      { figure: "48.9 → 12.6 MB", label: "size of the Civic model" },
    ],
    stack: ["three.js", "Vite", "glTF-Transform", "three-mesh-bvh", "WebGL"],
    services: ["web"],
    url: "https://autopsy-rho.vercel.app",
  },
  {
    slug: "cowriteia",
    kind: "product",
    short: "CoWriteIA",
    status: "Live",
    title: "CoWriteIA, a writing environment for novelists",
    client: "Our own product",
    sector: "Knowledge and multi-agent AI",
    place: "Web",
    summary: "A multi-agent system that keeps track of characters, places and plot across a whole manuscript.",
    challenge:
      "General chat assistants lose track of what happened three chapters ago. Long-form writing needs a system that understands how characters, places and events connect across hundreds of pages.",
    solution:
      "A GraphRAG knowledge system in which LangGraph coordinates separate indexing, retrieval and generation agents. Semantic search uses SentenceTransformers and ChromaDB, while FastAPI, Celery and Redis handle parallel work and background indexing, with MongoDB behind the application.",
    highlights: [
      { figure: "100+", label: "documents connected in one knowledge graph" },
      { figure: "3", label: "cooperating agents for indexing, retrieval and writing" },
    ],
    stack: ["LangGraph", "GraphRAG", "ChromaDB", "FastAPI", "Celery", "Redis"],
    services: ["rag", "agents"],
    url: "https://cwrite-rho.vercel.app",
  },
];

export const PROCESS = [
  {
    title: "Talk it through",
    text: "A call about the problem, the tools you already use, and what a good result looks like. If AI isn’t the right answer, we’ll say so.",
    outputs: ["Problem statement", "Systems map"],
  },
  {
    title: "Scope and quote",
    text: "A written scope with deliverables, timeline and price, so you know what you’re paying for before work starts.",
    outputs: ["Written scope", "Timeline", "Price"],
  },
  {
    title: "Prototype on your data",
    text: "An early working version using your real documents and conversations, so decisions are made on something you can try.",
    outputs: ["Working prototype", "Go / no-go"],
  },
  {
    title: "Build and test",
    text: "Regular demos while we build. For AI systems we agree a set of real test questions and measure accuracy against it before launch.",
    outputs: ["Production system", "Accuracy report"],
  },
  {
    title: "Launch and support",
    text: "We deploy, train your team and watch the first weeks closely. Monthly support is available after that.",
    outputs: ["Deployment", "Team training", "Monitoring"],
  },
];

export const ENGAGEMENTS = [
  {
    key: "sprint",
    name: "Discovery sprint",
    meta: "Before you build",
    fit: "You think AI could help, but you’re not sure where, or whether it will work on your data.",
    body: "We map the process, look at your data, and test the riskiest idea with a working prototype before anyone commits to a full build.",
    phases: ["Understand", "Prototype", "Plan"],
    included: [
      "Interviews and process mapping with your team",
      "A data check: what you have and what’s missing",
      "A prototype of the riskiest idea, on your data",
      "A written plan with scope, timeline and running costs",
    ],
    outcome: "A tested idea and a costed plan you can take to any team, including ours.",
  },
  {
    key: "project",
    name: "Project",
    meta: "Scoped and quoted",
    fit: "You know the problem and want a working system.",
    body: "End-to-end delivery. A prototype comes early so the risky parts are tested first, then production engineering, integration and handover.",
    phases: ["Scope", "Prototype", "Build and test", "Launch"],
    included: [
      "A working prototype early in the project",
      "Production engineering and hardening",
      "Integration with your existing systems",
      "An accuracy test set for AI features",
      "Documentation and handover to your team",
      "Close support through the first weeks after launch",
    ],
    outcome: "A working system, deployed and documented, that your team can run and change.",
  },
  {
    key: "retainer",
    name: "Monthly retainer",
    meta: "Ongoing",
    fit: "You have a system in production that needs to keep improving.",
    body: "A set amount of engineering time each month, for a system we built or one we take over from someone else.",
    phases: ["Monitor", "Improve", "Report"],
    included: [
      "Monitoring, alerts and fixes",
      "Model, prompt and retrieval tuning as usage grows",
      "New features and integrations",
      "A short monthly report on usage, accuracy and costs",
    ],
    outcome: "A system that keeps up with your business, and one team accountable for it.",
  },
];

// Real figures from shipped work, shown on the home page.
export const STATS = [
  { figure: "98%", label: "Answer accuracy", note: "Across 256 test queries in four languages, measured before launch." },
  { figure: "4", label: "Languages, one assistant", note: "English, Spanish, French and Arabic on a single WhatsApp number." },
  { figure: "<$5", label: "Monthly hosting", note: "Replacing an $80-a-month chatbot subscription." },
  { figure: "332", label: "Automated tests", note: "Behind an offline-first till for a retail shop." },
];

export const STACK = [
  "LangGraph",
  "LangChain",
  "FastAPI",
  "WhatsApp Cloud API",
  "ChromaDB",
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Supabase",
  "Rust",
  "Tauri",
  "Electron",
  "three.js",
  "Docker",
  "Google Cloud",
  "Railway",
  "n8n",
];

export const PRINCIPLES = [
  {
    title: "Measure before launch",
    text: "AI systems get a test set of real questions and an accuracy number before anyone relies on them.",
  },
  {
    title: "Keep a person in the loop",
    text: "When a model isn’t sure, it hands over instead of guessing, and sensitive actions wait for approval.",
  },
  {
    title: "Keep running costs low",
    text: "We choose models and hosting for your volume, not for a demo. One client went from $80 a month to under $5.",
  },
  {
    title: "Build for real conditions",
    text: "Patchy internet, load-shedding, Urdu voice notes, sensitive data. We design for how your business actually runs.",
  },
];

export const FAQ = [
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. We work remotely and have delivered for clients in Pakistan and abroad, including a manufacturer in China. We’re based in Islamabad (PKT, UTC+5), which overlaps with working hours in the Gulf, Europe and much of Asia.",
  },
  {
    q: "Can an assistant understand Urdu and Roman Urdu?",
    a: "Yes. Current models handle Urdu script, Roman Urdu and mixed English and Urdu well, and Urdu voice notes can be transcribed. We test on real messages from your customers before launch.",
  },
  {
    q: "What does an AI system cost to run?",
    a: "It depends on how many messages or documents it handles and which model it uses. We design for low running costs: one WhatsApp assistant we built costs under $5 a month to host, against the $80 subscription it replaced. Every quote includes an estimate of running costs.",
  },
  {
    q: "What happens when the AI gets something wrong?",
    a: "Every system we build has a fallback. When the model isn’t confident it asks for details or hands over to a person instead of guessing, and conversations are logged so mistakes can be found and fixed.",
  },
  {
    q: "What happens to our data?",
    a: "Your documents and conversations stay in accounts you own. We don’t use client data to train models, and when data can’t leave your premises we deploy on your own servers or build the system to run offline.",
  },
  {
    q: "Do you only build AI?",
    a: "No. We also build web applications, desktop software and offline-first systems, with or without AI in them.",
  },
];

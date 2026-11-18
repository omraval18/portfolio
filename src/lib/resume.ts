export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omraval.live";
export const GITHUB_USER = "omraval18";
export const BOOK_URL = "https://cal.com/omraval/quick-chat-about-my-work";

export const profile = {
  name: "Om Raval",
  role: "AI & Backend Engineer",
  location: "Ahmedabad, India",
  status: "Open to remote & relocation-friendly roles",
  hero: "I build AI agents and the systems underneath them.",
  intro:
    "Software engineer working across AI, backend and infrastructure. I take products from the first architecture decision to production, and I build tools from scratch to understand how they really work.",
  socials: [
    { label: "GitHub", href: "https://github.com/omraval18", handle: "omraval18" },
    { label: "LinkedIn", href: "https://linkedin.com/in/om-raval-dev", handle: "om-raval-dev" },
    { label: "Instagram", href: "https://instagram.com/bitofsys", handle: "@bitofsys" },
    { label: "Email", href: "mailto:omrawal111@gmail.com", handle: "omrawal111@gmail.com" },
  ],
};

export const about = [
  "I'm Om, a software engineer who likes the hard parts.",
  "I started in UI design, and that never left me: I care a lot about whether something feels right to use. Over time I kept pulling at the thread underneath the interface: how the backend works, how data stays correct, how systems fail and recover. Today most of my work lives in that layer: AI agents that take real actions, platforms that keep them reliable, and infrastructure that doesn't wake anyone up at 3am.",
  "Outside work, my favourite way to learn is to build a small version of something and break it. That's how I ended up writing a coding agent, a tiling window manager, a durable workflow engine and an end-to-end encrypted messenger. I also share short systems-design explainers on Instagram at @bitofsys.",
];

export type Job = {
  role: string;
  company: string;
  dates: string;
  place: string;
  summary: string;
  /** one standout win, always visible */
  highlight?: string;
  current?: boolean;
  groups: { title?: string; items: string[] }[];
  skills: string[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "ztudio",
    dates: "Nov 2025 – Present",
    place: "Remote",
    summary:
      "Lead engineer on AI and platform systems for venture-backed US startups in insurance and fintech. I own architecture through production, lead a small team, and work directly with founders.",
    highlight: "Took a production AI insurance agent from zero to launch, and built a B2B payments platform solo in 8 weeks.",
    current: true,
    groups: [
      {
        title: "AI systems",
        items: [
          "Took a production insurance agent from zero to launch. It quotes policies and processes claims end to end, grounded in tenant-isolated knowledge and committing real transactions to downstream services.",
          "Owned the retrieval stack end to end: chunking, retrieval tuning, intent-based routing across knowledge sources, and AI-native search, keeping the agent's context tight and grounded across long sessions.",
          "Built multimodal document ingestion with schema-enforced structured extraction, turning PDFs and images into reliable records the agent acts on.",
          "Introduced eval-driven development: benchmarked agent quality across every prompt, model and retrieval change so nothing regressed in production.",
          "Architected a multi-tenant agent platform with durable, checkpointed execution, per-user sandboxed code runs, team-scoped skills, long-term memory, and Slack, Notion, Linear and Sentry integrations over MCP.",
        ],
      },
      {
        title: "Infrastructure & security",
        items: [
          "Led the migration of the gRPC service tier from EC2 to ECS Fargate behind an Envoy service mesh, running old and new stacks side by side and validating cutover against live transactions.",
          "Root-caused a mesh-only outage: gRPC's c-ares resolver was bypassing the sidecar's DNS interception. Fixed it at the resolver layer.",
          "Built CI/CD on CodePipeline with least-privilege IAM permission boundaries, and decommissioned legacy infrastructure without touching live traffic.",
          "Led AppSec hardening toward SOC 2 Type II: sweeps across 70+ vulnerability classes, closed a token-forgery privilege escalation with HMAC-SHA256 signing and constant-time verification, and added fail-closed rate limiting.",
        ],
      },
      {
        title: "Fintech",
        items: [
          "Built WSL Pay solo, from database to deployment: a multi-currency B2B payments platform on stablecoin rails with KYB onboarding, multi-currency funding, and payouts in 6 currencies.",
          "Engineered for money correctness with a double-entry ledger, idempotent webhooks and state-machine payment lifecycles, so retries never double-credit.",
          "Secured every payment with passkey (WebAuthn) approval, removing passwords and SMS OTP from the money path.",
          "Architected a hexagonal, domain-modular backend in Effect-TS with sanctions screening, audit trails and RBAC, shipped on Cloudflare Workers. About 280 commits in 8 weeks.",
          "Built ACH/wire-to-USDC rails and ERC-4337 multisig treasuries for a second stablecoin neobank serving international B2B payments.",
        ],
      },
    ],
    skills: ["AI Agents", "RAG", "LLM Evaluation", "Distributed Systems", "Application Security"],
  },
  {
    role: "Freelance AI Engineer",
    company: "Self-employed",
    dates: "Mar 2025 – Oct 2025",
    place: "Remote",
    summary:
      "Designed and shipped agent systems for startups, agencies and small businesses across India and Europe.",
    highlight: "Shipped autonomous support agents for European small businesses.",
    groups: [
      {
        items: [
          "Built knowledge-retrieval systems that give teams and customers grounded, source-backed answers over their own documentation.",
          "Deployed autonomous customer support agents for European small businesses that resolve routine queries and escalate edge cases to humans with full context.",
          "Designed multi-step agent workflows that automate HR and operations for agency teams.",
          "Built AI automations and plugins that integrate directly into clients' existing tools.",
        ],
      },
    ],
    skills: ["AI Agents", "RAG", "Agent Orchestration", "Workflow Automation"],
  },
  {
    role: "Software Developer",
    company: "Travelarrow",
    dates: "Aug 2024 – Feb 2025",
    place: "Remote, USA",
    summary:
      "Core engineer across iOS and backend for a US hotel-booking platform, accountable for the reliability of its primary revenue path.",
    highlight: "40% more successful bookings and zero double bookings.",
    groups: [
      {
        items: [
          "Re-architected the booking pipeline around retries with exponential backoff and queue-based processing, increasing successful bookings by 40%.",
          "Solved concurrent multi-room reservations with optimistic concurrency control, eliminating double bookings and increasing reservations by 35%.",
          "Moved heavy booking work to asynchronous workers, cutting processing time by 20%.",
          "Shipped the production iOS app in SwiftUI with Apple Pay and subscription billing, and cut crash incidents by 15%.",
          "Rebuilt navigation and state persistence across core flows, lifting engagement by 11.3%.",
        ],
      },
    ],
    skills: ["System Design", "Concurrency Control", "iOS", "Payments"],
  },
  {
    role: "Freelance Software Engineer",
    company: "Self-employed",
    dates: "Apr 2023 – Jul 2024",
    place: "Remote",
    summary: "Independent contractor building software systems for startups and small businesses.",
    highlight: "Built a real-time telemetry platform for solar IoT devices.",
    groups: [
      {
        items: [
          "Built a real-time telemetry platform for an energy-sector client, ingesting and processing logs from solar IoT devices to monitor generation.",
          "Built AI automations and plugins that eliminated repetitive manual workflows.",
          "Owned every engagement end to end, from requirements and architecture to production and support.",
        ],
      },
    ],
    skills: ["Real-time Systems", "IoT", "Data Pipelines", "Automation"],
  },
  {
    role: "Full Stack Developer",
    company: "AllEvents",
    dates: "Jan 2023 – Mar 2023",
    place: "Ahmedabad, Gujarat",
    summary: "Shipped product and performance work on a large event-discovery platform.",
    highlight: "Cut page load by 18% and grew organic traffic by 12%.",
    groups: [
      {
        items: [
          "Cut page load time by 18%, improving search rankings and growing organic traffic by 12%.",
          "Built a design assets system for event organizers that increased attendance by 8%.",
          "Engineered cross-client email templates that improved deliverability by 10%.",
          "Resolved 28% more customer issues, lifting satisfaction by 15%, and shipped 5 platform features end to end.",
        ],
      },
    ],
    skills: ["Full-Stack", "Web Performance", "SEO", "Vue.js"],
  },
];

export type Project = {
  name: string;
  desc: string;
  stack: string;
  href?: string;
  note?: string;
  tag?: string;
};

export const projects: Project[] = [
  {
    name: "WSL Pay",
    tag: "Featured",
    desc: "Multi-currency B2B payments on stablecoin rails, built solo from database to deployment. KYB onboarding, payouts in 6 currencies, passkey approval on every payment, double-entry ledger with idempotent webhooks.",
    stack: "TypeScript, Effect, Next.js, Postgres, WebAuthn, Cloudflare Workers",
  },
  {
    name: "rig",
    tag: "Daily driver",
    desc: "Terminal coding agent in a single 3 MB static binary. Works with any model, manages its own context, and gates risky commands with four autonomy levels. Replaced Codex as my daily driver.",
    stack: "Rust",
    href: "https://github.com/omraval18/rig",
  },
  {
    name: "nflows",
    desc: "Durable workflow engine: TypeScript SDK, distributed workers, idempotency keys, task leases, retries with backoff, dead-letter queues and Prometheus metrics.",
    stack: "TypeScript, Fastify, Postgres, Redis, BullMQ",
    note: "Private",
  },
  {
    name: "ntrace",
    desc: "Log aggregation engine: API-key ingestion, Kafka-based async processing, Redis-indexed search, live tail over SSE, dead-letter handling.",
    stack: "TypeScript, Kafka, Postgres, Redis",
    note: "Private",
  },
  {
    name: "blox",
    desc: "0.4 MB macOS tiling window manager: virtual workspaces, three layouts, multi-monitor support, hot-reloaded TOML config, no SIP changes.",
    stack: "Swift, Accessibility API",
    href: "https://github.com/omraval18/blox",
  },
  {
    name: "nchat",
    desc: "Local-first, end-to-end encrypted terminal messaging (X25519, AES-256-GCM, Argon2id) with per-device key pinning. The server never stores history.",
    stack: "TypeScript, WebSockets",
    href: "https://github.com/omraval18/nchat",
  },
  {
    name: "prunemymac",
    desc: "Native disk cleaner and health monitor for macOS and Linux on Zed's GPUI. 18 MB binary, about 75 MB RAM idle.",
    stack: "Rust, GPUI",
    href: "https://github.com/omraval18/prunemymac",
  },
  {
    name: "flow-record",
    desc: "Record terminal commands once, replay them as parameterized workflows in zsh, bash and fish.",
    stack: "Rust",
    href: "https://github.com/omraval18/flow-record",
  },
  {
    name: "n3",
    desc: "S3-shaped blob storage with a versioned REST API, API-key auth, pluggable storage and a typed SDK.",
    stack: "TypeScript, Hono, Postgres",
    href: "https://github.com/omraval18/n3",
  },
  {
    name: "nGen",
    desc: "AI music, voice and image generation on open models, on serverless GPUs.",
    stack: "Python, FastAPI, Modal, Next.js",
    href: "https://github.com/omraval18/ngen",
  },
];

export const experiments = [
  ["nbot", "a lightweight terminal AI assistant with a gateway mode."],
  ["nClip", "turns long videos into short clips automatically."],
  ["mini-express", "an Express-compatible framework on Node core modules, built to learn routing and middleware."],
  ["ntypo", "a terminal typing test, published as a package."],
];

export const whatIDo = [
  ["AI agents", "Agents that act on real systems, not just chat: retrieval and context engineering, evals that gate every release, and platforms with durable execution and sandboxing."],
  ["Backend & infrastructure", "Service architecture, migrations, CI/CD and the debugging nobody else wants to do, like a DNS failure that only showed up inside a service mesh."],
  ["Fintech & security", "Money movement where correctness is non-negotiable: double-entry ledgers, idempotent payment flows, passkey approvals, and hardening toward SOC 2."],
  ["Developer tools", "Small, fast, native tools I use every day, mostly in Rust and Swift."],
];

export const principles = [
  ["Ownership over tickets", "I'd rather own a problem end to end than a slice of it."],
  ["Correctness first, speed always", "I move fast, but not where real money or real users are on the line."],
  ["Measure, don't guess", "Evals for agents, metrics for systems."],
  ["Build to understand", "If I can't build a small version of it, I don't really understand it yet."],
];

export const skills: [string, string[]][] = [
  ["AI", ["AI Agents", "Agent Orchestration", "Context Engineering", "RAG", "LLM Evaluation", "LangGraph"]],
  ["Backend", ["Distributed Systems", "System Design", "Application Security", "Payments", "gRPC", "Kafka", "Redis", "PostgreSQL"]],
  ["Languages", ["Rust", "TypeScript", "Python", "Swift"]],
  ["Cloud", ["AWS", "Cloudflare Workers"]],
];

export const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

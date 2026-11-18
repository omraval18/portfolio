export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omraval.com";
export const GITHUB_USER = "omraval18";
export const BOOK_URL = "https://cal.com/omraval/quick-chat-about-my-work";

export const profile = {
  name: "Om Raval",
  role: "AI & Backend Engineer",
  location: "Ahmedabad, India",
  status: "Open to remote & relocation-friendly roles",
  hero: "I build AI agents and the systems underneath them.",
  intro:
    "I work across AI, backend and infrastructure, and I usually own a product from the first architecture decision through to production. When I want to understand a tool, I build a small version of it myself.",
  socials: [
    { label: "GitHub", href: "https://github.com/omraval18", handle: "omraval18" },
    { label: "LinkedIn", href: "https://linkedin.com/in/om-raval-dev", handle: "om-raval-dev" },
    { label: "Instagram", href: "https://instagram.com/bitofsys", handle: "@bitofsys" },
    { label: "Email", href: "mailto:omrawal111@gmail.com", handle: "omrawal111@gmail.com" },
  ],
};

export const about = [
  "I'm Om. I like the hard parts of software.",
  "I started in UI design, and I still care whether something feels right to use. Over time I got more curious about what sits under the interface. How the backend works, how data stays correct, what happens when a system fails and how it comes back. Most of my work is in that layer now. I build AI agents that take real actions, the platforms that keep them running, and infrastructure that doesn't page anyone at 3am.",
  "Outside work, I learn by building small versions of things and breaking them. So far that's a coding agent, a tiling window manager, a durable workflow engine and an end-to-end encrypted messenger. I also post short systems-design explainers on Instagram as @bitofsys.",
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
  type?: "Full-time" | "Freelance";
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
      "I lead engineering on AI and platform systems for venture-backed US startups in insurance and fintech. I own the architecture through to production, lead a small team and work directly with founders.",
    highlight: "Took a production AI insurance agent from zero to launch and built a B2B payments platform solo.",
    current: true,
    type: "Full-time",
    groups: [
      {
        title: "AI systems",
        items: [
          "Took a production insurance agent from zero to launch. It quotes policies and processes claims on its own, answers from each tenant's isolated documents, and writes real transactions into downstream services.",
          "Owned the retrieval stack, including chunking, retrieval tuning, intent-based routing across knowledge sources and AI-native search. The aim was to keep the agent's context small and accurate over long conversations.",
          "Built multimodal ingestion for PDFs and images. Schema-enforced extraction turns them into structured records the agent can act on.",
          "Set up eval-driven development. Every prompt, model and retrieval change runs against a benchmark before release, so regressions get caught before they reach production.",
          "Designed a multi-tenant agent platform with checkpointed durable execution, per-user code sandboxes, team-scoped skills and long-term memory. It connects to Slack, Notion, Linear and Sentry over MCP.",
        ],
      },
      {
        title: "Infrastructure & security",
        items: [
          "Led the move of the gRPC service tier from EC2 to ECS Fargate behind an Envoy service mesh. Old and new stacks ran side by side, and we validated the cutover against live pricing and quote transactions.",
          "Root-caused an outage that only happened inside the mesh. gRPC's c-ares resolver was bypassing the sidecar's DNS interception, so I fixed it at the resolver layer.",
          "Built CI/CD on CodePipeline with least-privilege IAM permission boundaries, then decommissioned the legacy infrastructure without touching live traffic.",
          "Led AppSec hardening toward SOC 2 Type II. I ran static-analysis sweeps across 70+ vulnerability classes, closed a token-forgery privilege escalation with full-payload HMAC-SHA256 signing and constant-time verification, and added fail-closed rate limiting.",
        ],
      },
      {
        title: "Fintech",
        items: [
          "Built WSL Pay solo, from the database to the deploy pipeline. It's a multi-currency B2B payments platform on stablecoin rails with KYB onboarding, multi-currency funding and payouts in 6 currencies.",
          "Engineered **exactly-once settlement** on top of at-least-once webhook delivery. A **double-entry ledger**, **idempotent webhook handlers** and a **payment state machine** that rejects invalid transitions guarantee a retried or duplicated event never double-credits an account.",
          "Every payment needs a WebAuthn passkey approval. There are no passwords or SMS codes anywhere in the money path.",
          "Wrote the backend in Effect-TS with a hexagonal, domain-modular structure. Sanctions screening, audit trails and RBAC are built in, and it runs on Cloudflare Workers.",
          "Built ACH/wire-to-USDC rails and ERC-4337 multisig treasuries for a second stablecoin neobank that handles international B2B payments.",
        ],
      },
    ],
    skills: ["AI Agents", "RAG", "LLM Evaluation", "Distributed Systems", "Application Security"],
  },
  {
    role: "Freelance AI Engineer",
    company: "Self-employed",
    type: "Freelance",
    dates: "Mar 2025 – Oct 2025",
    place: "Remote",
    summary:
      "Designed and shipped agent systems for startups, agencies and small businesses in India and Europe.",
    highlight: "Shipped support agents that handle routine customer queries for small businesses in Europe.",
    groups: [
      {
        items: [
          "Built retrieval systems over clients' own documentation, so their teams and customers get answers with the sources attached.",
          "Deployed customer support agents for small businesses in Europe. They resolve routine queries on their own and hand edge cases to a person with the whole conversation attached.",
          "Designed multi-step agent workflows that automate HR and operations work for agency teams.",
          "Built AI automations and plugins that run inside the tools clients already use.",
        ],
      },
    ],
    skills: ["AI Agents", "RAG", "Agent Orchestration", "Workflow Automation"],
  },
  {
    role: "Software Developer",
    company: "Travelarrow",
    type: "Full-time",
    dates: "Aug 2024 – Feb 2025",
    place: "Remote, USA",
    summary:
      "Core engineer on iOS and backend for a US hotel-booking platform. Bookings were the main revenue path, and keeping them reliable was my job.",
    highlight: "40% more successful bookings, and no more double bookings.",
    groups: [
      {
        items: [
          "Rebuilt the booking pipeline around queue-based processing and retries with exponential backoff. Successful bookings went up 40%.",
          "Used optimistic concurrency control for multi-room reservations. That ended double bookings and raised reservations by 35%.",
          "Moved heavy booking work to background workers, which cut processing time by 20%.",
          "Shipped the production iOS app in SwiftUI with Apple Pay and subscription billing, which opened a new revenue stream. Crash incidents dropped 15%.",
          "Rebuilt navigation and state persistence across the core flows. Engagement went up 11.3%.",
        ],
      },
    ],
    skills: ["System Design", "Concurrency Control", "iOS", "Payments"],
  },
  {
    role: "Freelance Software Engineer",
    company: "Self-employed",
    type: "Freelance",
    dates: "Apr 2023 – Jul 2024",
    place: "Remote",
    summary: "Independent contractor building software for startups and small businesses.",
    highlight: "Built a real-time telemetry platform for solar IoT devices.",
    groups: [
      {
        items: [
          "Built a real-time telemetry platform for an energy client. It ingests logs from solar IoT devices as they arrive and tracks how much power each one generates.",
          "Built AI automations and plugins that replaced repetitive manual work for clients.",
          "Ran each engagement myself, covering requirements, architecture, the production launch and support afterwards.",
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
    summary: "Product and performance work on a large event-discovery platform.",
    highlight: "Cut page load by 18%, which grew organic traffic by 12%.",
    groups: [
      {
        items: [
          "Cut page load time by 18%. Search rankings improved and organic traffic grew 12%.",
          "Built a design-asset system for event organizers. Attendance at their events rose 8%.",
          "Wrote email templates that render the same across mail clients, which improved deliverability by 10%.",
          "Resolved 28% more customer issues, raised satisfaction by 15% and shipped 5 platform features.",
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
    name: "rig",
    tag: "Daily driver",
    desc: "A terminal coding agent that ships as one 3 MB static binary. It works with a ChatGPT subscription, Anthropic, OpenAI, OpenRouter or Ollama, manages its own context, and puts risky commands behind four autonomy levels. It replaced Codex as my daily driver.",
    stack: "Rust",
    href: "https://github.com/omraval18/rig",
  },
  {
    name: "nflows",
    desc: "A durable workflow engine with a TypeScript SDK and distributed workers. It has idempotency keys, task leases, retries with backoff, dead-letter queues, per-run event history and Prometheus metrics.",
    stack: "TypeScript, Fastify, Postgres, Redis, BullMQ",
    note: "Private",
  },
  {
    name: "ntrace",
    desc: "A log aggregation engine. It takes logs in over API keys, processes them through Kafka, indexes them in Redis for search, streams a live tail over SSE and sends failures to a dead-letter queue.",
    stack: "TypeScript, Kafka, Postgres, Redis",
    note: "Private",
  },
  {
    name: "blox",
    desc: "A 0.4 MB tiling window manager for macOS with virtual workspaces, three layouts and multi-monitor support. The TOML config hot-reloads, and you don't have to disable SIP.",
    stack: "Swift, Accessibility API",
    href: "https://github.com/omraval18/blox",
  },
  {
    name: "nchat",
    desc: "End-to-end encrypted messaging in the terminal, using X25519, AES-256-GCM and Argon2id with keys pinned per device. It's local-first, and the server never stores message history.",
    stack: "TypeScript, WebSockets",
    href: "https://github.com/omraval18/nchat",
  },
  {
    name: "prunemymac",
    desc: "A native disk cleaner and health monitor for macOS and Linux, built on Zed's GPUI. The binary is 18 MB and idles at about 75 MB of RAM.",
    stack: "Rust, GPUI",
    href: "https://github.com/omraval18/prunemymac",
  },
  {
    name: "flow-record",
    desc: "Record terminal commands once, then replay them as parameterized workflows in zsh, bash or fish.",
    stack: "Rust",
    href: "https://github.com/omraval18/flow-record",
  },
  {
    name: "n3",
    desc: "Blob storage shaped like S3. It has a versioned REST API, API-key auth, pluggable storage backends and a typed SDK.",
    stack: "TypeScript, Hono, Postgres",
    href: "https://github.com/omraval18/n3",
  },
  {
    name: "nGen",
    desc: "Music, voice and image generation on open models, running on serverless GPUs.",
    stack: "Python, FastAPI, Modal, Next.js",
    href: "https://github.com/omraval18/ngen",
  },
];

export const experiments = [
  ["nbot", "a small terminal AI assistant that can also run as a gateway."],
  ["nClip", "cuts long videos into short clips without manual editing."],
  ["mini-express", "an Express-compatible framework on Node's core modules. I wrote it to learn how routing and middleware work."],
  ["ntypo", "a typing test for the terminal, published as a package."],
];

export const whatIDo = [
  ["AI agents", "Agents that take actions in real systems. That covers retrieval and context engineering, evals that gate every release, and platforms with durable execution and sandboxing."],
  ["Backend & infrastructure", "Service architecture, migrations, CI/CD, and the debugging nobody else wants, like a DNS failure that only showed up inside a service mesh."],
  ["Fintech & security", "Moving money, where a bug costs someone real money. Double-entry ledgers, idempotent payment flows, passkey approvals and SOC 2 hardening."],
  ["Developer tools", "Small, fast native tools I use every day, mostly in Rust and Swift."],
];

export const principles = [
  ["Ownership over tickets", "I'd rather own a whole problem than a slice of it."],
  ["Correct first, then fast", "I move quickly, except where real money or real users are at stake."],
  ["Measure, don't guess", "Evals for agents. Metrics for systems."],
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

export const now =
  "Right now I'm going deeper into database internals, operating systems, networking and how coding agents are built. I'm also looking for AI engineer or backend/infrastructure roles at startups that hire remotely or help with relocation.";

export const EMAIL = "omrawal111@gmail.com";

// What a recruiter should see in the first five seconds. Every line is
// backed by the experience and projects below.
const CAREER_START = new Date("2023-01-01");
export const yearsExperience = () =>
  Math.round((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000));

/** Full-time employment only: ztudio (Nov 2025 onward) + Travelarrow (7 months). */
export const fullTimeExperience = () => {
  const d = new Date();
  const ztudio = (d.getFullYear() - 2025) * 12 + d.getMonth() - 10; // months since Nov 2025
  const total = ztudio + 7;
  const y = Math.floor(total / 12);
  const m = total % 12;
  return [y && `${y}y`, m && `${m}m`].filter(Boolean).join(" ");
};

export const tldr: [string, string][] = [
  ["Now", "Lead engineer on AI and platform systems at ztudio"],
  ["Experience", `${fullTimeExperience()} full-time · ~${yearsExperience()} years including freelance and contract work`],
  ["Shipped", "A production AI insurance agent · a B2B payments platform · SOC 2 hardening"],
  ["Tokens", "5.7B LLM tokens used in the last 30 days"],
  ["Stack", "Rust · TypeScript · Python · Swift · Postgres · AWS · Cloudflare"],
  ["Open to", "AI engineer or backend/infra roles · remote or relocation"],
];

import { ExperienceCardData } from "@/components/global/experience-card";

export const projects: ExperienceCardData[] = [
  {
    title: "Mani AI",
    description:
      "Mani is an coding agent web app like lovable,v0, etc. It uses multiple tools to read,write and run commands, in sandbox environment. It has live preview of built website available and it's code in read only editor.",
    tags: [
      "NextJS",
      "TypeScript",
      "Docker",
      "Postgres",
      "NextAuth",
      "OpenAI",
      "Payments integration",
      "RBAC",
    ],
    working: true,
  },
  {
    title: "nChat AI",
    description:
      "Real-time, streaming AI chat with resumable streams, multimodal input (text/files), performance optimizations, and payment integration.",
    tags: [
      "NextJS",
      "TypeScript",
      "Postgres",
      "Payments integration",
      "NextAuth",
      "AI",
    ],
    working: true,
    live: "https://nchat.omraval.live",
  },
  {
    title: "Plux - Chatting with Your PDFs",
    description:
      "SaaS app to chat with PDFs using AI. Features secure auth, Stripe payments, and a user-friendly interface for data management.",
    tags: ["NextJS", "TypeScript", "Langchain", "TRPC", "Groq", "Stripe", "AI"],
    live: "https://plux.omraval.live",
    code: "https://github.com/omraval18/plux",
  },
  {
    title: "Cabin: Your All-in-One Coding Playground",
    description:
      "A web application that supports multiple programming languages with a real-time code editor and output.",
    tags: ["React", "Monaco Editor", "React Bootstrap", "RapidAPI"],
    code: "https://github.com/omraval18/cabinapp",
  },
  {
    title: "Real-Time IoT Dashboard",
    description:
      "An insights and analytics platform to manage over 500 IoT devices per user, enhancing operational efficiency.",
    tags: ["React", "Recoil", "Java", "Keycloak", "SQL", "Docker"],
  },
  {
    title: "Lakshya 2021: A National Edu-Technical Festival Website",
    description:
      "A dynamic website for a national-level edu-technical festival, built with React and Material-UI.",
    tags: ["React", "Material-UI", "SCSS", "Axios"],
    live: "https://www.lakshyafestldce.in/",
    code: "https://github.com/Neel278/lakshya21-frontend",
  },
  {
    title: "Automating Daily Operations with AI Agents",
    description:
      "AI agents to automate web scraping, keyword research, and resume sorting.",
    tags: ["Langchain", "LlamaIndex", "Puppeteer", "Redis"],
    read: "/work/agents",
    code: undefined,
  },
  {
    title: "Blackhole – Your Easy File Sharing Solution",
    description:
      "Node.js + Bulma file-sharing app with QR codes, auto-cleanup & email notifications.",
    tags: ["Node.js", "Express", "MongoDB", "Bulma", "Nodemailer", "qrcode"],
    read: "/work/blackhole",
    code: "https://github.com/omraval18/blackhole",
  },
];

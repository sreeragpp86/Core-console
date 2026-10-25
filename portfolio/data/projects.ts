export interface Project {
  id: string;
  title: string;
  badge?: string;
  period?: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  stack: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "fluxmedia",
    title: "FluxMedia",
    badge: "Distributed Pipeline",
    period: "Oct. 2026 – Present",
    shortDesc:
      "A fault-tolerant distributed media processing pipeline and task queue. Built with FastAPI, Celery, and Redis to asynchronously transcode and compress heavy video workloads via FFmpeg.",
    fullDesc:
      "Fault-tolerant, asynchronous distributed media processing pipeline engineered to decouple high-load CPU workloads from the main web server.",
    tags: ["FastAPI", "Celery", "Redis", "FFmpeg", "Next.js 14"],
    stack: ["Python", "FastAPI", "Redis", "Celery", "FFmpeg", "Next.js"],
    highlights: [
      "Architected a fault-tolerant, asynchronous media processing pipeline to decouple heavy CPU workloads from the main web server.",
      "Engineered a RESTful API with FastAPI to ingest large media files and dispatch processing tickets to a Redis message broker.",
      "Developed background Celery worker nodes to pull tasks and execute hardware-accelerated H.264 video compression utilizing macOS VideoToolbox.",
      "Built real-time status-tracking endpoints allowing Next.js frontends to poll continuous job states without blocking the event loop.",
    ],
    githubUrl: "https://github.com/sreeragpp86/FluxMedia",
    liveUrl: undefined,
  },
  {
    id: "profzr-academy",
    // Conflict 1: "Profzr's Academy" (portfolio) vs "Profezr's Blog" (resume)
    title: "Profzr's Academy", // TODO: confirm title - "Profzr's Academy" vs "Profezr's Blog"
    badge: "Full-Stack EdTech",
    period: "April 2026",
    // Conflict 2: Django & Kerala Syllabus vs Next.js/FastAPI & Undergraduate Blog
    shortDesc:
      "A full-stack educational web platform delivering chapter-wise academic modules, dynamic PDF resources, and subject-specific learning schemes. [TODO: confirm description]",
    fullDesc:
      "Responsive, full-stack educational web platform dedicated to hosting, organizing, and distributing academic materials for undergraduate students. [TODO: confirm description]",
    // Conflict 3: Stack ["Python", "Django", "JavaScript", "SQLite"] vs ["Next.js", "FastAPI", "Supabase", "PostgreSQL", "Tailwind CSS"]
    tags: ["Python", "Django", "JavaScript", "SQLite"], // TODO: confirm stack
    stack: ["Next.js", "FastAPI", "Supabase", "PostgreSQL", "Tailwind CSS"], // TODO: confirm stack
    highlights: [
      "Engineered a responsive, full-stack educational web application dedicated to hosting and distributing academic materials. [TODO: confirm highlights]",
      "Integrated secure authentication workflows and database models to manage user sessions, document metadata, and fast content retrieval.",
    ],
    githubUrl: "https://github.com/sreeragpp86/Profzr-s-Academy",
    liveUrl: undefined,
  },
  {
    id: "loomo",
    title: "Loomo",
    // Conflict 4: "AI Micro-SaaS" (portfolio) vs "Workflow Engine" (resume)
    badge: "AI Micro-SaaS", // TODO: confirm badge - "AI Micro-SaaS" vs "Workflow Engine"
    period: "Early 2026",
    // Conflict 5: Storefront generator with WhatsApp checkout vs Modular Python execution engine
    // Trimmed to 3-4 lines as requested in Item 8:
    shortDesc:
      "An AI-driven micro-SaaS that generates live mobile storefronts and marketing assets from a single prompt, featuring zero-backend WhatsApp checkout. [TODO: confirm description]",
    fullDesc:
      "Modular Python execution engine designed to automate complex multi-stage generative media workflows with isolated environment runtimes. [TODO: confirm description]",
    // Conflict 6: ["Next.js 15", "Supabase", "Google Gemini"] vs ["Python", "CLI Architecture", "Virtual Environments", "AI Orchestration"]
    tags: ["Next.js 15", "Supabase", "Google Gemini"], // TODO: confirm stack
    stack: ["Python", "CLI Architecture", "Virtual Environments", "AI Orchestration"], // TODO: confirm stack
    highlights: [
      "Developed a modular Python execution engine designed to automate complex generative media workflows. [TODO: confirm highlights]",
      "Configured isolated virtual environments and custom scripting to sequence AI generation tools, handling prompt parsing and output rendering.",
    ],
    githubUrl: undefined, // TODO: confirm GitHub URL (hidden when undefined)
    liveUrl: undefined, // TODO: confirm live site URL (hidden when undefined)
  },
  {
    id: "core-console",
    title: "Core-console",
    badge: "Personal Architecture",
    period: "2026",
    shortDesc:
      "Personal engineering showcase and portfolio platform. Developed with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion springs, and a tactile Soft UI design system.",
    fullDesc:
      "Personal engineering showcase and portfolio platform. Developed with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion springs, and a tactile Soft UI design system.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Engineered an ultra-fast developer portfolio using Next.js 14 App Router and TypeScript with fluid Soft UI aesthetic.",
      "Implemented physics-based gesture interactions, speed-linked scroll kinematics, and full accessible keyboard navigation.",
    ],
    githubUrl: "https://github.com/sreeragpp86/Core-console",
    liveUrl: "https://sreerag-dev.vercel.app",
  },
];

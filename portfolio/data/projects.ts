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
    id: "pulse",
    title: "Pulse",
    badge: "Real-Time Telemetry Engine",
    period: "Nov. 2026",
    shortDesc:
      "A real-time educational telemetry engine handling 500+ concurrent student event streams over dual-path WebSockets, Redis Pub/Sub fan-out, and batched PostgreSQL writes cutting DB overhead by >98%.",
    fullDesc:
      "Real-Time Educational Telemetry Engine — dual-path WebSocket ingestion gateway, write-behind PostgreSQL batching, and bounded-memory Next.js observability console.",
    tags: ["FastAPI", "WebSockets", "PostgreSQL", "Redis", "Next.js"],
    stack: ["FastAPI", "WebSockets", "PostgreSQL", "Redis (Pub/Sub)", "asyncio", "Next.js"],
    highlights: [
      "Engineered a dual-path WebSocket telemetry ingestion gateway capable of handling 500+ concurrent virtual student event streams with sub-second dashboard fan-out over Redis Pub/Sub.",
      "Implemented an asynchronous write-behind memory buffer (asyncio.Queue) that batches high-frequency events into bulk PostgreSQL transactions every 2.0s, cutting database write overhead by >98%.",
      "Designed composite-indexed time-series schemas (course_id, created_at DESC) and built a Next.js observability console with a bounded 60-frame client ring buffer to prevent browser memory leaks.",
    ],
    githubUrl: "https://github.com/sreeragpp86/Pulse",
    liveUrl: undefined,
  },
  {
    id: "conduit",
    title: "Conduit",
    badge: "DAG AI Workflow Orchestrator",
    period: "Nov. 2026",
    shortDesc:
      "A spatial node-based AI workflow builder on React Flow powered by a FastAPI Kahn's Topological Sort engine (O(V + E)) and real-time Server-Sent Events streaming per-node LLM latency telemetry.",
    fullDesc:
      "DAG AI Workflow Orchestrator — spatial node-based pipeline builder with cycle-safe topological execution and live SSE inference streaming.",
    tags: ["Next.js", "React Flow", "FastAPI", "Python", "SSE", "Zustand"],
    stack: ["Next.js", "React Flow", "FastAPI", "Python", "SSE", "Zustand"],
    highlights: [
      "Architected a spatial node-based AI workflow builder allowing users to wire multi-step prompt, LLM inference, and media nodes into automated execution pipelines on an interactive React Flow canvas.",
      "Built a FastAPI execution engine utilizing Kahn's Topological Sort Algorithm (O(V + E)) to resolve multi-parent dependencies and block circular graph loops prior to compute execution.",
      "Integrated real-time Server-Sent Events (SSE) and async httpx inference handlers (Groq / Gemini) to stream per-node status updates and millisecond latency telemetry directly to the UI.",
    ],
    githubUrl: "https://github.com/sreeragpp86/Conduit",
    liveUrl: undefined,
  },
  {
    id: "fluxmedia",
    title: "FluxMedia",
    badge: "Distributed Media Queue",
    period: "Oct. 2026",
    shortDesc:
      "A distributed media processing task queue decoupling CPU-intensive video transcoding via FastAPI, Redis, isolated Celery workers, and hardware-accelerated FFmpeg (h264_videotoolbox) with Supabase persistence.",
    fullDesc:
      "Distributed Media Processing Task Queue — asynchronous video transcoding pipeline backed by FastAPI, Redis, Celery workers, hardware-accelerated FFmpeg, and Supabase PostgreSQL.",
    tags: ["FastAPI", "Celery", "Redis", "FFmpeg", "Supabase"],
    stack: ["FastAPI", "Celery", "Redis", "FFmpeg (VideoToolbox)", "Supabase"],
    highlights: [
      "Decoupled CPU-intensive video transcoding from main API threads by engineering an asynchronous task queue backed by FastAPI, Redis message brokers, and isolated Celery worker nodes.",
      "Accelerated H.264/HEVC video compression pipelines using hardware-accelerated FFmpeg (h264_videotoolbox) and persisted job lifecycle states in Supabase PostgreSQL.",
    ],
    githubUrl: "https://github.com/sreeragpp86/FluxMedia",
    liveUrl: undefined,
  },
  {
    id: "vectra-labs",
    title: "Vectra Labs",
    badge: "Full-Stack LMS · Infocyle",
    period: "2026 – Present",
    shortDesc:
      "Architected and developed the core web-based LMS for Infocyle, handling relational PostgreSQL schemas, role-based access control, real-time student engagement telemetry, and low-latency content delivery.",
    fullDesc:
      "Full-Stack Learning Management & Cohort Analytics Platform — engineered as Co-Founder & CTO at Infocyle.",
    tags: ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Tailwind CSS"],
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Designed multi-tenant relational schemas and REST/WebSocket APIs using FastAPI and Supabase.",
      "Integrated real-time student cohort tracking and automated media processing workflows for scalable course delivery.",
      "Built a responsive, theme-adaptive Next.js interface with modular dashboard components.",
    ],
    githubUrl: "https://github.com/sreeragpp86",
    liveUrl: "https://vectralabs.vercel.app",
  },
];

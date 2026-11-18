# sreerag.dev

**Personal Engineering Portfolio & Interactive Systems Index**

[![Live Site](https://img.shields.io/badge/Live_Deployment-sreerag--dev.vercel.app-10B981?style=flat-square)](https://sreerag-dev.vercel.app)
[![Framework](https://img.shields.io/badge/Next.js-App_Router-000000?style=flat-square)](https://nextjs.org/)
[![Styling](https://img.shields.io/badge/Tailwind_CSS-Onyx_%26_Alabaster-09090B?style=flat-square)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-white?style=flat-square)](LICENSE)

Minimalist developer portfolio engineered around an **Onyx & Alabaster** DevTool aesthetic (`#09090B` obsidian surfaces, crisp `1px` structural borders, high-contrast `tabular-nums` monospace metadata, and zero marketing bloat). Built to serve as a fast, interactive index for my backend systems, distributed infrastructure projects, and compiled LaTeX resume.

**Live Production URL:** [sreerag-dev.vercel.app](https://sreerag-dev.vercel.app)

---

## Featured Systems Index

* **[Pulse](https://github.com/sreeragpp86/Pulse)** — *Real-Time Educational Telemetry Engine* (`FastAPI`, `WebSockets`, `PostgreSQL`, `Redis`, `Next.js`)  
  Dual-path WebSocket ingestion gateway handling 500+ concurrent event streams with an asynchronous write-behind memory buffer that cuts PostgreSQL transaction overhead by >98%.

* **[Conduit](https://github.com/sreeragpp86/Conduit)** — *DAG AI Workflow Orchestrator* (`Next.js`, `React Flow`, `FastAPI`, `SSE`, `Zustand`)  
  Spatial node-based workflow engine utilizing Kahn's Topological Sort ($O(V + E)$) for cycle detection and Server-Sent Events (SSE) for live per-node execution telemetry.

* **[FluxMedia](https://github.com/sreeragpp86/FluxMedia)** — *Distributed Media Processing Task Queue* (`FastAPI`, `Celery`, `Redis`, `FFmpeg`, `Supabase`)  
  Asynchronous media transcoding pipeline decoupling CPU-bound H.264/HEVC compression (`VideoToolbox`) from main API threads via isolated Celery workers.

* **[Vectra Labs (Infocyle)](https://github.com/sreeragpp86)** — *Full-Stack Learning Management Platform* (`Next.js`, `FastAPI`, `Supabase`)  
  Core web LMS and cohort analytics infrastructure engineered as Co-Founder & CTO.

---

## Architecture & Design Decisions

* **Zero-Clutter Spatial Hierarchy:** Built with Next.js (App Router), TypeScript, and Tailwind CSS using strict Bento-grid geometry and subtle `1px` border illumination (`border-white/10` $\rightarrow$ `border-white/25`) rather than heavy drop shadows.
* **Keyboard-First Navigation:** Includes a `⌘K` Command Palette for instant navigation across projects, external GitHub repositories, direct email copy, and PDF resume download.
* **Performance & Accessibility:** Static-first edge rendering on Vercel with semantic HTML landmarks, skip-to-content navigation, and zero third-party tracking scripts.

---

## Local Development

### Prerequisites
* **Node.js** `>= 18.x`
* **npm** or **pnpm**

### Quickstart
```bash
git clone https://github.com/sreeragpp86/sreerag.dev.git
cd sreerag.dev
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## Connect

* **Portfolio:** [sreerag-dev.vercel.app](https://sreerag-dev.vercel.app)
* **GitHub:** [github.com/sreeragpp86](https://github.com/sreeragpp86)
* **LinkedIn:** [linkedin.com/in/sreerag-pp-42a8b13a3](https://linkedin.com/in/sreerag-pp-42a8b13a3)
* **Email:** [sreeragpp81@gmail.com](mailto:sreeragpp81@gmail.com)

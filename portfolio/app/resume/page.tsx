"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  ArrowLeft,
  Mail,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Cpu,
  Terminal,
  Calendar,
  Award,
} from "lucide-react";

const TECHNICAL_SKILLS = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "SQL", "HTML/CSS"],
  },
  {
    category: "Backend & Infra",
    skills: ["FastAPI", "Redis", "Celery", "Django", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Frontend",
    skills: ["Next.js (App Router)", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Tools & Systems",
    skills: ["Linux", "Git/GitHub", "FFmpeg (Video Toolbox)", "Docker", "Generative AI Workflows"],
  },
];

const EXPERIENCES = [
  {
    role: "Chief Technology Officer & Co-Founder",
    company: "Infocyle",
    type: "Full-Time · Venture",
    period: "July 2026 – Present",
    status: "Current",
    highlights: [
      "Direct the technical strategy, architecture, and product roadmap for an educational technology startup.",
      "Architected and developed Vectra Labs, the core web-based LMS, handling database schemas, backend API routing, and frontend component design.",
      "Authored formal technical incubation proposals and curriculum structures for institutional review.",
      "Designed a 5-day syllabus to teach practical AI tools and generative workflows to beginners.",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "System Architecture", "GenAI Workflows"],
  },
  {
    role: "Software Engineer",
    company: "Freelance Full-Stack Developer",
    type: "Independent Client Engineering",
    period: "Oct. 2025 – Present",
    status: "Active",
    highlights: [
      "Engineer custom, responsive web applications for clients, managing the full software development lifecycle from UI/UX design to backend deployment.",
      "Build high-performance interfaces using Next.js and Tailwind CSS, focusing on minimal, fluid micro-interactions and strict grid architectures.",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "REST APIs"],
  },
];

const PROJECTS = [
  {
    name: "FluxMedia",
    badge: "Distributed Pipeline",
    period: "Oct. 2026 – Present",
    stack: ["Python", "FastAPI", "Redis", "Celery", "FFmpeg", "Next.js"],
    description:
      "Fault-tolerant, asynchronous distributed media processing pipeline engineered to decouple high-load CPU workloads from the main web server.",
    highlights: [
      "Architected a fault-tolerant, asynchronous media processing pipeline to decouple heavy CPU workloads from the main web server.",
      "Engineered a RESTful API with FastAPI to ingest large media files and dispatch processing tickets to a Redis message broker.",
      "Developed background Celery worker nodes to pull tasks and execute hardware-accelerated H.264 video compression utilizing macOS VideoToolbox.",
      "Built real-time status-tracking endpoints allowing Next.js frontends to poll continuous job states without blocking the event loop.",
    ],
  },
  {
    name: "Loomo",
    badge: "Workflow Engine",
    period: "Early 2026",
    stack: ["Python", "CLI Architecture", "Virtual Environments", "AI Orchestration"],
    description:
      "Modular Python execution engine designed to automate complex multi-stage generative media workflows with isolated environment runtimes.",
    highlights: [
      "Developed a modular Python execution engine designed to automate complex generative media workflows.",
      "Configured isolated virtual environments and custom scripting to sequence AI generation tools, handling prompt parsing, output rendering, and file system management.",
    ],
  },
  {
    name: "Profezr's Blog",
    badge: "Full-Stack EdTech",
    period: "April 2026",
    stack: ["Next.js", "FastAPI", "Supabase", "PostgreSQL", "Tailwind CSS"],
    description:
      "Responsive, full-stack educational web platform dedicated to hosting, organizing, and distributing academic materials for undergraduate students.",
    highlights: [
      "Engineered a responsive, full-stack educational web application dedicated to hosting and distributing academic materials for undergraduate students.",
      "Integrated secure authentication workflows and relational database models to manage user sessions, document metadata, and fast content retrieval.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-bg text-secondary selection:bg-accent-primary/20 selection:text-primary">
      {/* Top Floating / Header Bar */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-bg/75 backdrop-blur-md dark:border-white/10 transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-12 lg:px-24">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Small Direct PDF Download Icon */}
            <a
              href="/Sreerag_P_P_Resume.pdf"
              download="Sreerag_P_P_Resume.pdf"
              data-neu-btn=""
              data-neu-btn-primary=""
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md transition-transform hover:scale-105 active:scale-95"
              title="Download Resume (PDF)"
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:px-24">
        {/* Hero Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          data-neu-card=""
          className="relative mb-10 overflow-hidden rounded-2xl border border-black/5 bg-surface p-6 sm:p-10 dark:border-white/10"
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                data-neu-inset=""
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for High-Impact Roles & Ventures
              </span>
              <span
                data-neu-inset=""
                className="rounded-full px-3 py-1 font-mono text-[11px] text-secondary"
              >
                Engineering CV · 2026
              </span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                Sreerag P P
              </h1>
              <p className="mt-1.5 text-base sm:text-lg font-medium text-secondary">
                Chief Technology Officer &amp; Full-Stack Systems Engineer
              </p>
            </div>

            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-secondary/90">
              Specialized in architecting asynchronous distributed pipelines, fault-tolerant backends
              with Python and FastAPI, and fluid, high-performance interfaces with Next.js and Tailwind CSS.
            </p>
          </div>
        </motion.div>

        {/* Main Content: Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* =========================================================
              LEFT COLUMN (4 Cols): Snapshot, Skills Matrix, Education
             ========================================================= */}
          <aside className="space-y-8 lg:col-span-4">
            {/* Quick Info & Verified Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              data-neu-card=""
              className="rounded-2xl border border-black/5 bg-surface p-6 dark:border-white/10"
            >
              <div className="flex items-center gap-2 mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-secondary">
                <Terminal className="h-4 w-4 text-accent-primary" />
                <span>Contact &amp; Profiles</span>
              </div>

              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:sreeragpp81@gmail.com"
                    className="group flex items-center justify-between rounded-lg p-2.5 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <span className="flex items-center gap-3 text-secondary group-hover:text-primary transition-colors">
                      <Mail className="h-4 w-4 text-accent-primary shrink-0" />
                      <span className="font-mono text-xs break-all">sreeragpp81@gmail.com</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sreerag-pp-42a8b13a3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg p-2.5 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <span className="flex items-center gap-3 text-secondary group-hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4 text-blue-500 shrink-0" />
                      <span className="font-mono text-xs">linkedin.com/in/sreerag-pp</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sreeragpp86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg p-2.5 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <span className="flex items-center gap-3 text-secondary group-hover:text-primary transition-colors">
                      <Github className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-mono text-xs">github.com/sreeragpp86</span>
                    </span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Technical Skills Bento Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-neu-card=""
              className="rounded-2xl border border-black/5 bg-surface p-6 dark:border-white/10"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-secondary">
                  <Cpu className="h-4 w-4 text-accent-primary" />
                  <span>Technical Arsenal</span>
                </div>
                <span
                  data-neu-inset=""
                  className="rounded-md px-2 py-0.5 font-mono text-[10px] text-secondary"
                >
                  Core Stack
                </span>
              </div>

              <div className="space-y-5">
                {TECHNICAL_SKILLS.map((grp) => (
                  <div key={grp.category} className="space-y-2">
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary/80">
                      {grp.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {grp.skills.map((skill) => (
                        <span
                          key={skill}
                          data-neu-inset=""
                          className="rounded-md px-2.5 py-1 font-mono text-xs text-secondary hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education & Leadership Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-neu-card=""
              className="rounded-2xl border border-black/5 bg-surface p-6 dark:border-white/10"
            >
              <div className="flex items-center gap-2 mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-secondary">
                <GraduationCap className="h-4 w-4 text-accent-primary" />
                <span>Education &amp; Leadership</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-primary">
                      Indira Gandhi College of Arts and Science
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-secondary font-medium">
                    Bachelor of Science in Computer Science
                  </p>
                  <div className="mt-2 flex items-center gap-2 font-mono text-[11px] text-secondary">
                    <span
                      data-neu-inset=""
                      className="inline-block rounded px-2 py-0.5 text-[10px]"
                    >
                      Kochi, Kerala
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-black/5 bg-black/[0.02] p-3.5 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary">
                    <Award className="h-3.5 w-3.5 text-amber-500" />
                    <span>Leadership Milestone</span>
                  </div>
                  <p className="mt-1.5 text-xs text-secondary leading-relaxed">
                    Lead Organizer for a 24-hour undergraduate campus hackathon{" "}
                    <span className="font-mono text-[11px] font-semibold text-primary">
                      (March 2026)
                    </span>
                    . Orchestrated challenges, mentorship tracks, and participant infrastructure.
                  </p>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* =========================================================
              RIGHT COLUMN (8 Cols): Experience Timeline & Projects
             ========================================================= */}
          <div className="space-y-10 lg:col-span-8">
            {/* Experience Timeline Section */}
            <section aria-labelledby="experience-heading" className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <h2
                      id="experience-heading"
                      className="text-xl sm:text-2xl font-bold tracking-tight text-primary"
                    >
                      Professional Experience
                    </h2>
                    <p className="text-xs sm:text-sm text-secondary">
                      Engineering leadership, startup co-founding, and production systems
                    </p>
                  </div>
                </div>

                <span
                  data-neu-inset=""
                  className="hidden sm:inline-block rounded-full px-3 py-1 font-mono text-xs text-secondary"
                >
                  2 Positions
                </span>
              </div>

              {/* Timeline Container */}
              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-accent-primary before:via-accent-primary/40 before:to-transparent">
                {EXPERIENCES.map((exp, idx) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Glowing Node on Timeline */}
                    <div className="absolute -left-[29px] sm:-left-[37px] top-6 flex h-6 w-6 items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-accent-primary ring-4 ring-bg transition-transform group-hover:scale-125" />
                    </div>

                    <div
                      data-neu-card=""
                      className="rounded-2xl border border-black/5 bg-surface p-6 sm:p-7 transition-all duration-300 dark:border-white/10 group-hover:border-accent-primary/30"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg sm:text-xl font-bold text-primary">
                              {exp.role}
                            </h3>
                            <span
                              data-neu-inset=""
                              className="rounded-full px-2.5 py-0.5 font-mono text-[10px] text-accent-primary font-semibold"
                            >
                              {exp.company}
                            </span>
                          </div>
                          <p className="mt-1 text-xs font-mono text-secondary">
                            {exp.type}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-xs shrink-0">
                          <Calendar className="h-3.5 w-3.5 text-secondary" />
                          <span
                            data-neu-inset=""
                            className="rounded-md px-2.5 py-1 text-primary font-semibold text-xs"
                          >
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2.5 text-sm text-secondary/95">
                        {exp.highlights.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Associated Technologies */}
                      <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-mono text-secondary uppercase tracking-wider mr-1">
                          Stack:
                        </span>
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            data-neu-inset=""
                            className="rounded px-2 py-0.5 font-mono text-[11px] text-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Featured Projects Bento Grid */}
            <section aria-labelledby="projects-heading" className="space-y-6 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <FolderGit2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h2
                      id="projects-heading"
                      className="text-xl sm:text-2xl font-bold tracking-tight text-primary"
                    >
                      Featured Engineering Projects
                    </h2>
                    <p className="text-xs sm:text-sm text-secondary">
                      Distributed asynchronous pipelines, modular tools, and web systems
                    </p>
                  </div>
                </div>

                <span
                  data-neu-inset=""
                  className="hidden sm:inline-block rounded-full px-3 py-1 font-mono text-xs text-secondary"
                >
                  3 Key Architectures
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {PROJECTS.map((proj, pIdx) => (
                  <motion.div
                    key={proj.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                    data-neu-card=""
                    className="group rounded-2xl border border-black/5 bg-surface p-6 sm:p-7 transition-all duration-300 dark:border-white/10 hover:border-accent-primary/40"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-xl font-bold text-primary group-hover:text-accent-primary transition-colors">
                            {proj.name}
                          </h3>
                          <span
                            data-neu-inset=""
                            className="rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400"
                          >
                            {proj.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-secondary">
                          {proj.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs shrink-0">
                        <Calendar className="h-3.5 w-3.5 text-secondary" />
                        <span
                          data-neu-inset=""
                          className="rounded-md px-2.5 py-1 text-primary font-semibold text-xs"
                        >
                          {proj.period}
                        </span>
                      </div>
                    </div>

                    {/* Detailed Technical Bullet Points */}
                    <ul className="mt-4 space-y-2 text-sm text-secondary/95">
                      {proj.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-1.5">
                      {proj.stack.map((item) => (
                        <span
                          key={item}
                          data-neu-inset=""
                          className="rounded-md px-2.5 py-1 font-mono text-xs text-secondary hover:text-primary transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Bottom CTA & Direct Download Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          data-neu-card=""
          className="mt-14 rounded-2xl border border-black/5 bg-surface p-8 text-center dark:border-white/10"
        >
          <div className="mx-auto max-w-xl space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-primary">
              Need a physical or standard PDF copy?
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              Download the complete, ATS-friendly curriculum vitae formatted for offline review or recruitment pipelines.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href="/Sreerag_P_P_Resume.pdf"
                download="Sreerag_P_P_Resume.pdf"
                data-neu-btn=""
                data-neu-btn-primary=""
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
              <Link
                href="/#contact"
                data-neu-btn=""
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-primary transition-transform hover:scale-105 active:scale-95"
              >
                <Mail className="h-4 w-4 text-accent-primary" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <footer className="mt-14 pt-8 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary">
          <div className="flex flex-wrap items-center gap-3">
            <span>$ cat sreerag_cv.json | status --verified</span>
            <span className="text-secondary/50">·</span>
            <span>$ last_updated --Oct_2026</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sreeragpp86"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/sreerag-pp-42a8b13a3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="mailto:sreeragpp81@gmail.com"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

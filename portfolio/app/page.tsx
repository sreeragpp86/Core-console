"use client";
import React from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BackgroundCanvas } from "@/components/ui/BackgroundCanvas";
import { Github, Linkedin, Instagram, Mail, ExternalLink, Cpu, Code2, Rocket, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-24 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-32">
      <BackgroundCanvas />

      {/* Hero Section */}
      <section className="relative flex flex-col items-start justify-center min-h-[70vh] space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight"
        >
          Sreerag P P
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-secondary max-w-2xl font-medium"
        >
          Full-Stack Developer & Tech Founder. Architecting high-performance
          systems and fluid user experiences. Currently CTO @ <span className="text-accent-primary font-semibold">Infocyle</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <MagneticButton href="#projects" className="bg-primary text-bg">
            View Projects
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="bg-surface text-primary border border-black/10 dark:border-white/10"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>
      </section>

      {/* Bento Grid Section (About & Skills) */}
      <section id="about" className="relative z-10 space-y-12 scroll-mt-24">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Capabilities</h2>
          <p className="text-secondary">A blend of technical leadership and deep-stack engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {/* Bio Tile */}
          <SpotlightCard className="md:col-span-2 md:row-span-2 flex flex-col justify-end space-y-4">
            <div className="p-2 w-fit rounded-lg bg-accent-primary/10 text-accent-primary text-xs font-bold uppercase tracking-wider">
              About
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              As CTO at Infocyle, I lead the intersection of scalable backend architecture
              and intuitive frontend design. I specialize in building systems that are
              not just functional, but elegant and maintainable.
            </p>
          </SpotlightCard>

          {/* Tech Stack Ticker Tile */}
          <SpotlightCard className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center space-y-2">
            <Cpu className="w-6 h-6 text-accent-primary mb-2" />
            <h3 className="font-bold">Stack</h3>
            <p className="text-sm text-secondary">Next.js • FastAPI • Python • C++ • Supabase</p>
          </SpotlightCard>

          {/* Focus Area Tile 1 */}
          <SpotlightCard className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center space-y-2">
            <Rocket className="w-6 h-6 text-accent-secondary mb-2" />
            <h3 className="font-bold">GenAI Workflows</h3>
            <p className="text-sm text-secondary">LLM orchestration & Agentic UI</p>
          </SpotlightCard>

          {/* Focus Area Tile 2 */}
          <SpotlightCard className="md:col-span-3 md:row-span-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-accent-primary" />
              <h3 className="font-bold">Engineering Philosophy</h3>
            </div>
            <p className="text-sm text-secondary md:max-w-md text-right">
              "Less, but better." I believe in structural typography, generous whitespace,
              and micro-interactions that provide instant feedback.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 space-y-12 scroll-mt-24">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Selected Works</h2>
          <p className="text-secondary">Products that solve real problems with precision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Vectra Labs",
              desc: "Advanced AI-driven research and analysis platform.",
              tags: ["Next.js", "Python", "LLMs"],
              link: "#"
            },
            {
              title: "Custom VOD Platform",
              desc: "High-scale video on demand architecture with seamless streaming.",
              tags: ["FastAPI", "React", "S3"],
              link: "#"
            },
            {
              title: "Loomo",
              desc: "Interactive learning experience designed for the next generation.",
              tags: ["TypeScript", "Tailwind", "Supabase"],
              link: "#"
            },
            {
              title: "Study Hub Kerala",
              desc: "Regional educational resource aggregator with intuitive discovery.",
              tags: ["Next.js", "PostgreSQL", "Radix UI"],
              link: "#"
            },
          ].map((project, i) => (
            <SpotlightCard key={i} className="group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <ExternalLink className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-secondary mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-black/5 dark:bg-white/5 text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 space-y-8 scroll-mt-24">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-secondary">Have an idea, project, or leadership opportunity? Let's connect.</p>
        </div>

        <SpotlightCard className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 md:p-10">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl font-bold">Let's build something exceptional.</h3>
            <p className="text-secondary leading-relaxed">
              Whether you need scalable backend architecture, GenAI workflows, or engineering leadership for your venture, my inbox is always open.
            </p>
          </div>
          <MagneticButton
            href="mailto:contact@sreerag.dev"
            className="bg-primary text-bg shrink-0"
          >
            Say Hello
          </MagneticButton>
        </SpotlightCard>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 pt-20 pb-12 border-t border-black/5 dark:border-white/10 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="font-mono text-sm space-y-2">
            <p className="text-secondary">
              <span className="text-accent-primary font-bold">$</span> available --consulting
            </p>
            <p className="text-secondary">
              <span className="text-accent-primary font-bold">$</span> available --ventures
            </p>
            <p className="text-secondary">
              <span className="text-accent-primary font-bold">$</span> location --kerala, india
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@sreerag.dev"
              aria-label="Email"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-secondary pt-8">
          © {new Date().getFullYear()} Sreerag P P. Built with precision.
        </div>
      </footer>
    </main>
  );
}

"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BackgroundCanvas } from "@/components/ui/BackgroundCanvas";
import { Github, Linkedin, Instagram, Mail, ExternalLink, Cpu, Code2, Rocket, Globe } from "lucide-react";

export default function Home() {
  const bentoRef = useRef<HTMLElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: bentoRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll progression spring for organic inertia based on scroll speed
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  // Track scroll velocity for speed-dependent glide displacement and subtle tilt
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 220, damping: 28 });
  const velocityOffset = useTransform(smoothVelocity, [-2500, 0, 2500], [-32, 0, 32]);
  const velocityTilt = useTransform(smoothVelocity, [-2500, 0, 2500], [-2, 0, 2]);

  // Section Header glide transforms (glide in from bottom, glide away to top)
  const yTitleProgress = useTransform(smoothProgress, [0.02, 0.22, 0.70, 0.96], [45, 0, 0, -45]);
  const yTitle = useTransform([yTitleProgress, velocityOffset], (values: number[]) => values[0] + values[1] * 0.4);
  const opacityTitle = useTransform(smoothProgress, [0.02, 0.20, 0.72, 0.96], [0, 1, 1, 0]);

  // Tile 1: Bio Tile (2x2, anchor)
  const yBioProgress = useTransform(smoothProgress, [0.03, 0.25, 0.65, 0.95], [75, 0, 0, -85]);
  const yBio = useTransform([yBioProgress, velocityOffset], (values: number[]) => values[0] + values[1] * 0.7);
  const xBio = useTransform(smoothProgress, [0.03, 0.25, 0.65, 0.95], [-20, 0, 0, -30]);
  const opacityBio = useTransform(smoothProgress, [0.03, 0.22, 0.68, 0.95], [0, 1, 1, 0]);
  const scaleBio = useTransform(smoothProgress, [0.03, 0.25, 0.65, 0.95], [0.96, 1, 1, 0.96]);

  // Tile 2: Tech Stack (1x1, top right)
  const yStackProgress = useTransform(smoothProgress, [0.05, 0.27, 0.63, 0.95], [85, 0, 0, -110]);
  const yStack = useTransform([yStackProgress, velocityOffset], (values: number[]) => values[0] + values[1] * 0.9);
  const xStack = useTransform(smoothProgress, [0.05, 0.27, 0.63, 0.95], [20, 0, 0, 30]);
  const opacityStack = useTransform(smoothProgress, [0.05, 0.24, 0.66, 0.95], [0, 1, 1, 0]);
  const scaleStack = useTransform(smoothProgress, [0.05, 0.27, 0.63, 0.95], [0.95, 1, 1, 0.95]);

  // Tile 3: GenAI Workflows (1x1, middle right)
  const yGenAIProgress = useTransform(smoothProgress, [0.07, 0.30, 0.64, 0.96], [95, 0, 0, -100]);
  const yGenAI = useTransform([yGenAIProgress, velocityOffset], (values: number[]) => values[0] + values[1] * 1.1);
  const xGenAI = useTransform(smoothProgress, [0.07, 0.30, 0.64, 0.96], [25, 0, 0, 35]);
  const opacityGenAI = useTransform(smoothProgress, [0.07, 0.26, 0.67, 0.96], [0, 1, 1, 0]);
  const scaleGenAI = useTransform(smoothProgress, [0.06, 0.30, 0.64, 0.96], [0.95, 1, 1, 0.95]);

  // Tile 4: Engineering Philosophy (3x1, bottom banner)
  const yPhilProgress = useTransform(smoothProgress, [0.10, 0.33, 0.66, 0.98], [110, 0, 0, -75]);
  const yPhil = useTransform([yPhilProgress, velocityOffset], (values: number[]) => values[0] + values[1] * 0.8);
  const opacityPhil = useTransform(smoothProgress, [0.10, 0.28, 0.70, 0.98], [0, 1, 1, 0]);
  const scalePhil = useTransform(smoothProgress, [0.10, 0.33, 0.66, 0.98], [0.96, 1, 1, 0.96]);

  return (
    <main id="top" className="relative min-h-screen px-4 py-16 sm:px-6 md:px-12 lg:px-24 md:py-24 max-w-7xl mx-auto space-y-20 md:space-y-32">
      <BackgroundCanvas />

      {/* Hero Section */}
      <section className="relative flex flex-col items-start justify-center min-h-[65vh] md:min-h-[70vh] space-y-5 sm:space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] select-none cursor-default text-primary"
        >
          {["Sreerag", "P", "P"].map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  whileHover={{
                    y: -8,
                    scale: 1.12,
                    transition: { type: "spring", stiffness: 450, damping: 14 },
                  }}
                  className="inline-block transition-colors duration-200 text-primary hover:text-accent-primary"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary max-w-2xl font-medium leading-relaxed"
        >
          {[
            { text: "Full-Stack", highlight: true },
            { text: "Developer", highlight: true },
            { text: "&" },
            { text: "Tech", highlight: true },
            { text: "Founder.", highlight: true },
            { text: "Architecting" },
            { text: "high-performance", highlight: true },
            { text: "systems" },
            { text: "and" },
            { text: "fluid", highlight: true },
            { text: "user", highlight: true },
            { text: "experiences." },
            { text: "Currently" },
            { text: "CTO" },
            { text: "@" },
            { text: "Infocyle.", special: true },
          ].map((token, idx) => (
            <motion.span
              key={idx}
              whileHover={{
                y: -3,
                scale: token.special ? 1.05 : 1.02,
                transition: { type: "spring", stiffness: 400, damping: 15 },
              }}
              className={`inline-block transition-colors duration-200 cursor-default select-none mr-[0.25em] last:mr-0 ${
                token.special
                  ? "text-accent-primary font-semibold hover:opacity-80"
                  : token.highlight
                  ? "text-secondary hover:text-accent-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {token.text}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 pt-3 sm:pt-4"
        >
          <MagneticButton href="#projects" className="bg-primary text-bg w-full sm:w-auto text-center justify-center">
            View Projects
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="bg-surface text-primary border border-black/10 dark:border-white/10 w-full sm:w-auto text-center justify-center"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>
      </section>

      {/* Bento Grid Section (About & Skills) - Speed-linked Glide In & Glide Away */}
      <section id="about" ref={bentoRef} className="relative z-10 space-y-8 sm:space-y-12 scroll-mt-24">
        <motion.div
          style={{
            y: yTitle,
            opacity: opacityTitle,
          }}
          className="flex flex-col space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Capabilities</h2>
          <p className="text-sm sm:text-base text-secondary">A blend of technical leadership and deep-stack engineering.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[200px]">
          {/* Bio Tile */}
          <SpotlightCard
            style={{
              y: yBio,
              x: xBio,
              opacity: opacityBio,
              scale: scaleBio,
              rotateX: velocityTilt,
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-2 md:row-span-2 flex flex-col justify-end space-y-3 sm:space-y-4 min-h-[200px] md:min-h-0"
          >
            <div className="p-2 w-fit rounded-lg bg-accent-primary/10 text-accent-primary text-xs font-bold uppercase tracking-wider">
              About
            </div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-primary/90">
              As CTO at Infocyle, I lead the intersection of scalable backend architecture
              and intuitive frontend design. I specialize in building systems that are
              not just functional, but elegant and maintainable.
            </p>
          </SpotlightCard>

          {/* Tech Stack Ticker Tile */}
          <SpotlightCard
            style={{
              y: yStack,
              x: xStack,
              opacity: opacityStack,
              scale: scaleStack,
              rotateX: velocityTilt,
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center space-y-2 min-h-[150px] md:min-h-0"
          >
            <Cpu className="w-6 h-6 text-accent-primary mb-1 sm:mb-2" />
            <h3 className="font-bold text-base sm:text-lg text-primary">Stack</h3>
            <p className="text-xs sm:text-sm text-secondary">Next.js • FastAPI • Python • C++ • Supabase</p>
          </SpotlightCard>

          {/* Focus Area Tile 1 */}
          <SpotlightCard
            style={{
              y: yGenAI,
              x: xGenAI,
              opacity: opacityGenAI,
              scale: scaleGenAI,
              rotateX: velocityTilt,
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center space-y-2 min-h-[150px] md:min-h-0"
          >
            <Rocket className="w-6 h-6 text-accent-secondary mb-1 sm:mb-2" />
            <h3 className="font-bold text-base sm:text-lg text-primary">GenAI Workflows</h3>
            <p className="text-xs sm:text-sm text-secondary">LLM orchestration & Agentic UI</p>
          </SpotlightCard>

          {/* Focus Area Tile 2 */}
          <SpotlightCard
            style={{
              y: yPhil,
              opacity: opacityPhil,
              scale: scalePhil,
              rotateX: velocityTilt,
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-3 md:row-span-1 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 min-h-[140px] md:min-h-0"
          >
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-accent-primary" />
              <h3 className="font-bold text-base sm:text-lg text-primary">Engineering Philosophy</h3>
            </div>
            <p className="text-xs sm:text-sm text-secondary md:max-w-md text-left md:text-right leading-relaxed">
              "Less, but better." I believe in structural typography, generous whitespace,
              and micro-interactions that provide instant feedback.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Projects Section - Sticky Stacking Cards */}
      <section id="projects" className="relative z-10 space-y-8 sm:space-y-12 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Selected Works</h2>
          <p className="text-sm sm:text-base text-secondary">Products that solve real problems with precision.</p>
        </motion.div>

        <div className="relative space-y-6 pb-8">
          {[
            {
              title: "Vectra Labs",
              desc: "Engineering the next generation of algorithmic thinkers. A mobile-first EdTech platform teaching Python, AI, and computational logic to Classes 5-10.",
              tags: ["Python", "AI", "EdTech"],
              link: "#"
            },
            {
              title: "Profzr's Custom VOD Platform",
              desc: "Engineered with independently decoupled frontend and backend architectures, seamlessly integrated through a dedicated connection and streaming pipeline.",
              tags: ["FastAPI", "React", "S3"],
              link: "#"
            },
            {
              title: "Loomo",
              desc: "An AI-driven micro-SaaS built with Next.js 15, Supabase, and Google Gemini that instantly generates live mobile storefronts and social marketing assets from a single text prompt. It features a zero-backend WhatsApp checkout architecture and automated media rendering, eliminating all technical friction for local MSMEs to launch online.",
              tags: ["Next.js 15", "Supabase", "Google Gemini"],
              link: "#"
            },
            {
              title: "Profzr's Blog-page",
              desc: "Profzr's academy – A modern, responsive educational platform providing chapter-wise resources for Kerala Syllabus (SSLC, Plus One, & Plus Two). Features a clean \"glassmorphic\" UI, dynamic PDF management, and subject-specific color schemes",
              tags: ["Next.js", "PostgreSQL", "Radix UI"],
              link: "#"
            },
            {
              title: "Infocyle",
              desc: "Infocyle is an intelligent educational platform that equips young developers with production-grade backend engineering and AI architecture skills. We bridge the gap between theoretical academics and scalable software development by transforming students from tech consumers into systems architects.",
              tags: ["Backend Engineering", "AI Architecture", "System Design"],
              link: "#"
            },
          ].map((project, i) => (
            <SpotlightCard
              key={i}
              style={{
                top: `calc(4.5rem + ${i * 1}rem)`,
              }}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="sticky group cursor-pointer bg-surface/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-shadow p-5 sm:p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
                <div className="space-y-3 sm:space-y-4 max-w-2xl">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-accent-primary/10 text-accent-primary">
                      0{i + 1}
                    </span>
                    <div className="p-1.5 rounded-md bg-black/5 dark:bg-white/5 text-secondary">
                      <Globe className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1.5 sm:mb-2 group-hover:text-accent-primary transition-colors text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-secondary leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-secondary group-hover:text-primary transition-colors pt-2 md:pt-0">
                  <span>Explore</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 space-y-6 sm:space-y-8 scroll-mt-24"
      >
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Get in Touch</h2>
          <p className="text-sm sm:text-base text-secondary">Have an idea, project, or leadership opportunity? Let's connect.</p>
        </div>

        <SpotlightCard className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 sm:p-8 md:p-10">
          <div className="space-y-2.5 sm:space-y-3 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-primary">Let's build something exceptional.</h3>
            <p className="text-sm sm:text-base text-secondary leading-relaxed">
              Whether you need scalable backend architecture, GenAI workflows, or engineering leadership for your venture, my inbox is always open.
            </p>
          </div>
          <MagneticButton
            href="mailto:sreeragpp435@gmail.com"
            className="bg-primary text-bg shrink-0 w-full sm:w-auto text-center justify-center"
          >
            Say Hello
          </MagneticButton>
        </SpotlightCard>
      </motion.section>

      {/* Footer Section */}
      <footer className="relative z-10 pt-12 md:pt-20 pb-8 md:pb-12 border-t border-black/5 dark:border-white/10 space-y-6 md:space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <div className="font-mono text-xs sm:text-sm space-y-1.5 sm:space-y-2">
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

          <div className="flex gap-5 sm:gap-6 items-center">
            <a
              href="https://github.com/sreeragpp86"
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
              href="https://www.instagram.com/_sreeragpp_?stkn=YWpreTd2d2c3d3Z1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:sreeragpp435@gmail.com"
              aria-label="Email"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-secondary pt-6 md:pt-8">
          © {new Date().getFullYear()} Sreerag P P. Built with precision.
        </div>
      </footer>
    </main>
  );
}

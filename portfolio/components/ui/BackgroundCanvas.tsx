"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  hueOffset: number;
}

export const BackgroundCanvas = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse motion coordinates
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Primary spring: responsive lead color glow (indigo/violet)
  const springX1 = useSpring(mouseX, { stiffness: 95, damping: 22 });
  const springY1 = useSpring(mouseY, { stiffness: 95, damping: 22 });

  // Secondary spring: trailing color glow that follows with momentum (emerald/cyan)
  const springX2 = useSpring(mouseX, { stiffness: 45, damping: 18 });
  const springY2 = useSpring(mouseY, { stiffness: 45, damping: 18 });

  // Tertiary spring: focused core highlight
  const springX3 = useSpring(mouseX, { stiffness: 130, damping: 24 });
  const springY3 = useSpring(mouseY, { stiffness: 130, damping: 24 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let rawMouseX = -1000;
    let rawMouseY = -1000;
    let smoothMouseX = width / 2;
    let smoothMouseY = height / 2;
    let mouseSpeed = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;

    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    let scrollYOffset = 0;

    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX = e.clientX;
      rawMouseY = e.clientY;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      targetTiltY = (e.clientX / width - 0.5) * 0.3;
      targetTiltX = -(e.clientY / height - 0.5) * 0.3;

      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      mouseSpeed = Math.min(Math.hypot(dx, dy), 40);
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.08;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDarkMode = () => document.documentElement.classList.contains("dark");

    // Initialize 3D particles (without any rigid floating shapes)
    const particleCount = 70;
    const particles: Particle3D[] = [];
    const spreadX = Math.max(width * 0.7, 500);
    const spreadY = Math.max(height * 0.7, 500);
    const spreadZ = 450;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * spreadX * 2,
        y: (Math.random() - 0.5) * spreadY * 2,
        z: (Math.random() - 0.5) * spreadZ,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        vz: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.5 + 1.2,
        hueOffset: i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2, // 0: Theme Indigo, 1: Luminous Ice, 2: Electric Indigo
      });
    }

    const rotateY = (x: number, y: number, z: number, angle: number): [number, number, number] => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [x * cos + z * sin, y, -x * sin + z * cos];
    };

    const rotateX = (x: number, y: number, z: number, angle: number): [number, number, number] => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [x, y * cos - z * sin, y * sin + z * cos];
    };

    const fov = 650;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const dark = isDarkMode();
      const centerX = width / 2;
      const centerY = height / 2;

      // Smooth mouse follow interpolation
      smoothMouseX += (rawMouseX - smoothMouseX) * 0.08;
      smoothMouseY += (rawMouseY - smoothMouseY) * 0.08;
      mouseSpeed *= 0.94; // Decay mouse speed

      currentTiltX += (targetTiltX - currentTiltX) * 0.05;
      currentTiltY += (targetTiltY - currentTiltY) * 0.05;

      // Render interactive color radial glow on canvas that follows the cursor
      if (rawMouseX > -500) {
        const glowRadius = Math.min(Math.max(width * 0.35, 300), 550) + mouseSpeed * 3;
        const colorGrad = ctx.createRadialGradient(
          smoothMouseX,
          smoothMouseY,
          0,
          smoothMouseX,
          smoothMouseY,
          glowRadius
        );

        if (dark) {
          // Theme-matched Indigo chromatic gradient following the cursor
          colorGrad.addColorStop(0, "rgba(99, 102, 241, 0.20)"); // Theme Indigo core (#6366f1)
          colorGrad.addColorStop(0.35, "rgba(129, 140, 248, 0.10)"); // Electric Indigo mid (#818cf8)
          colorGrad.addColorStop(0.65, "rgba(79, 70, 229, 0.04)"); // Deep Indigo perimeter
          colorGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        } else {
          colorGrad.addColorStop(0, "rgba(79, 70, 229, 0.12)"); // Theme Indigo core (#4f46e5)
          colorGrad.addColorStop(0.4, "rgba(99, 102, 241, 0.06)"); // Soft Indigo mid (#6366f1)
          colorGrad.addColorStop(0.7, "rgba(129, 140, 248, 0.03)");
          colorGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        }

        ctx.fillStyle = colorGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Project & update particles
      const projected: {
        px: number;
        py: number;
        scale: number;
        color: string;
        highlight: boolean;
        distToMouse: number;
      }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          if (p.x < -spreadX) p.x = spreadX;
          if (p.x > spreadX) p.x = -spreadX;
          if (p.y < -spreadY) p.y = spreadY;
          if (p.y > spreadY) p.y = -spreadY;
          if (p.z < -spreadZ / 2) p.z = spreadZ / 2;
          if (p.z > spreadZ / 2) p.z = -spreadZ / 2;
        }

        // Camera tilt with depth
        const [x1, y1, z1] = rotateY(p.x, p.y - scrollYOffset, p.z, currentTiltY);
        const [x2, y2, z2] = rotateX(x1, y1, z1, currentTiltX);

        const depth = z2 + 250;
        const scale = fov / (fov + depth);
        const px = centerX + x2 * scale;
        const py = centerY + y2 * scale;

        // Interactive distance to cursor
        const distToMouse = Math.hypot(px - smoothMouseX, py - smoothMouseY);
        const isNearCursor = distToMouse < 220;
        const cursorInfluence = isNearCursor ? 1 - distToMouse / 220 : 0;

        // Dynamic color calculation based on proximity to cursor
        let color: string;
        const baseAlpha = Math.max(0.12, Math.min(0.65, (scale - 0.4) * 0.7));
        const activeAlpha = Math.min(baseAlpha + cursorInfluence * 0.6, 0.95);

        if (cursorInfluence > 0.05) {
          // Vibrantly illuminated by the cursor in theme-matched colors
          if (p.hueOffset === 0) {
            color = dark ? `rgba(99, 102, 241, ${activeAlpha})` : `rgba(79, 70, 229, ${activeAlpha})`;
          } else if (p.hueOffset === 1) {
            color = dark ? `rgba(199, 210, 254, ${activeAlpha})` : `rgba(99, 102, 241, ${activeAlpha})`;
          } else {
            color = dark ? `rgba(129, 140, 248, ${activeAlpha})` : `rgba(79, 70, 229, ${activeAlpha * 0.85})`;
          }
        } else {
          // Idle subtle color
          color = dark
            ? `rgba(224, 231, 255, ${baseAlpha * 0.45})`
            : `rgba(100, 116, 139, ${baseAlpha * 0.4})`;
        }

        projected.push({
          px,
          py,
          scale,
          color,
          highlight: isNearCursor,
          distToMouse,
        });

        // Draw particle with size boosting when near cursor
        const dynamicRadius = p.radius * scale * (1 + cursorInfluence * 1.2);
        ctx.beginPath();
        ctx.arc(px, py, dynamicRadius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Extra glowing corona for particles illuminated by cursor
        if (cursorInfluence > 0.3) {
          ctx.beginPath();
          ctx.arc(px, py, dynamicRadius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = dark
            ? `rgba(99, 102, 241, ${cursorInfluence * 0.25})`
            : `rgba(79, 70, 229, ${cursorInfluence * 0.18})`;
          ctx.fill();
        }
      }

      // Connecting lines: dynamic illuminated laser connections near the cursor
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dist = Math.hypot(p1.px - p2.px, p1.py - p2.py);

          // Lines light up when particles are close, especially when near the cursor
          const maxDist = (p1.highlight || p2.highlight) ? 140 : 90;
          if (dist < maxDist) {
            const lineFactor = 1 - dist / maxDist;
            let lineAlpha: number;
            let strokeStyle: string;

            if (p1.highlight || p2.highlight) {
              lineAlpha = lineFactor * 0.35 * Math.min(p1.scale, p2.scale);
              strokeStyle = dark
                ? `rgba(99, 102, 241, ${lineAlpha})`
                : `rgba(79, 70, 229, ${lineAlpha * 0.8})`;
            } else {
              lineAlpha = lineFactor * 0.12 * Math.min(p1.scale, p2.scale);
              strokeStyle = dark
                ? `rgba(148, 163, 184, ${lineAlpha})`
                : `rgba(148, 163, 184, ${lineAlpha * 0.6})`;
            }

            ctx.lineWidth = p1.highlight || p2.highlight ? 0.9 : 0.5;
            ctx.strokeStyle = strokeStyle;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  return (
    <div className={cn("fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-bg transition-colors duration-500 ease-out", className)}>
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise z-10" />

      {/* Aurora Ambient Drifting Blobs */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent-primary/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[10%] w-[45%] h-[45%] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 80, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] left-[20%] w-[55%] h-[55%] rounded-full bg-accent-primary/5 blur-[150px]"
      />

      {/* Interactive Cursor-Following Glows matching the theme */}
      {/* Wide Ambient Indigo Glow (Smooth, soft trailing halo) */}
      <motion.div
        style={{
          left: springX2,
          top: springY2,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[650px] h-[650px] rounded-full bg-indigo-600/10 dark:bg-indigo-500/15 blur-[140px] pointer-events-none"
      />

      {/* Primary Theme Indigo Spotlight (Responsive, follows cursor closely) */}
      <motion.div
        style={{
          left: springX1,
          top: springY1,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-accent-primary/15 dark:bg-accent-primary/20 blur-[100px] pointer-events-none"
      />

      {/* Focused Luminous Core directly beneath cursor */}
      <motion.div
        style={{
          left: springX3,
          top: springY3,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[240px] h-[240px] rounded-full bg-indigo-400/15 dark:bg-indigo-300/20 blur-[50px] pointer-events-none"
      />

      {/* Interactive 3D Perspective Canvas Layer with reactive particles & light wake */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
    </div>
  );
};

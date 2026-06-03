import React, { useEffect } from "react";
import { Navbar } from "./sections/Navbar";
import { ParticleBackground } from "./components/ParticleBackground";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { GithubStats } from "./sections/GithubStats";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";
import { ShieldCheck, Heart } from "lucide-react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";

export const App: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for a luxury lag-inertia cursor trail
  const springConfig = { damping: 40, stiffness: 140, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  // Directly track scroll progress without triggering React state changes
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyber-blue/30 selection:text-cyber-blue no-scrollbar">
      {/* 1. Interactive canvas particles */}
      <ParticleBackground />

      {/* 2. Custom cursor trailing glow (driven directly by springs - 0 re-renders!) */}
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-30 z-0"
        style={{
          x: trailX,
          y: trailY,
          background: "radial-gradient(circle, rgba(123, 97, 255, 0.12) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* 3. Floating static aurora orbs in the background */}
      <div className="glow-orb w-[500px] h-[500px] bg-cyber-blue top-1/4 -left-1/4 animate-aurora" />
      <div className="glow-orb w-[600px] h-[600px] bg-cyber-purple top-2/3 -right-1/4 animate-aurora" style={{ animationDelay: "-5s" }} />
      <div className="glow-orb w-[400px] h-[400px] bg-cyber-pink top-[80%] left-1/3 animate-aurora" style={{ animationDelay: "-10s" }} />

      {/* 4. Fine Grid Pattern Overlay */}
      <div className="fixed inset-0 tech-grid pointer-events-none z-0 opacity-40" />

      {/* 5. Top Scroll Progress Indicator (driven directly by motion value - 0 re-renders!) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 6. Navigation */}
      <Navbar />

      {/* 7. Site Content Sections */}
      <main className="relative z-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <GithubStats />
        <Achievements />
        <Contact />
      </main>

      {/* 8. Modern Footer */}
      <footer className="relative z-20 border-t border-white/[0.05] bg-cyber-bg/80 backdrop-blur-md py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-sm font-bold font-mono tracking-widest bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              AMIYA.SYS // ENG_2026
            </span>
            <p className="text-xs text-slate-500 font-mono">
              Designed with precision. Engineered with React, TS, and Tailwind.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-slate-500 font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-cyber-success" />
              <span>SECURE_SHELL</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart size={12} className="text-cyber-pink fill-cyber-pink" />
              <span>by Amiya</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

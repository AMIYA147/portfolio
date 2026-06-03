import React from "react";
import { motion } from "framer-motion";
import { GlareCard } from "../components/GlareCard";
import { Cpu, Eye, Globe, Lightbulb, Award, Shield, Database } from "lucide-react";

interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const About: React.FC = () => {
  const milestones: JourneyMilestone[] = [
    {
      year: "2024",
      title: "ECE Core Initiation",
      description: "Delved into electromagnetism, semiconductor device physics, and basic analog circuit architectures.",
      icon: <Cpu size={16} />
    },
    {
      year: "2025",
      title: "Data Science Initiation",
      description: "Analyzing large data sets, structuring database models, and training initial predictive models.",
      icon: <Database size={16} />
    },
    {
      year: "2026",
      title: "Cyber Security Core Initiation",
      description: "Auditing network interfaces, mastering encryption protocols, and analyzing cryptographic safeguards.",
      icon: <Shield size={16} />
    },
    {
      year: "2026",
      title: "AI Integration & Full Stack",
      description: "Deployed AI computer vision scripts and designed modern web architectures like React and Next.js.",
      icon: <Globe size={16} />
    },
    {
      year: "2026",
      title: "Founding & Scaling Systems",
      description: "Developing scalable telemetry models and full-stack utilities designed for real-world communities.",
      icon: <Lightbulb size={16} />
    }
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 border-b border-white/[0.03] relative bg-[#040217]/20">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="text-xs font-bold font-mono tracking-widest text-cyber-blue mb-2 uppercase">
            01 // ROOT_BIOGRAPHY
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
            Architecting the Cyber-Physical
          </h2>
          <div className="line-reveal mt-4 max-w-sm" />
        </div>

        {/* Narratives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {/* ECE Focus */}
          <GlareCard className="p-6 h-full flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-cyber-glow">
              <Cpu size={22} />
            </div>
            <h3 className="text-lg font-bold font-mono tracking-wide text-white mb-2">
              The ECE Catalyst
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Studying Electronics and Communication Engineering allows me to dissect complex signals, formulate PCB routing, and master microcontrollers at the silicon level.
            </p>
          </GlareCard>

          {/* AI Focus */}
          <GlareCard className="p-6 h-full flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 shadow-purple-glow">
              <Eye size={22} />
            </div>
            <h3 className="text-lg font-bold font-mono tracking-wide text-white mb-2">
              The AI Engine
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Combining math with predictive algorithms. Building convolutional vision solvers, optimizing local weight nodes, and deploying automated smart neural nets.
            </p>
          </GlareCard>

          {/* Web Architect */}
          <GlareCard className="p-6 h-full flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 shadow-pink-glow">
              <Globe size={22} />
            </div>
            <h3 className="text-lg font-bold font-mono tracking-wide text-white mb-2">
              The Web Craftsman
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Forging beautiful, modern interfaces with optimized performance, dynamic glass styling, real-time micro-services, and responsive grid layouts.
            </p>
          </GlareCard>

          {/* Cyber Security Focus */}
          <GlareCard className="p-6 h-full flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-cyber-glow">
              <Shield size={22} />
            </div>
            <h3 className="text-lg font-bold font-mono tracking-wide text-white mb-2">
              The Cyber Sentinel
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Hardening digital architectures against malicious infiltration. Analyzing cryptographic protocols, reverse-engineering firmware, and securing telemetry signals at transition pipelines.
            </p>
          </GlareCard>

          {/* Entrepreneur */}
          <GlareCard className="p-6 h-full flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-md">
              <Lightbulb size={22} />
            </div>
            <h3 className="text-lg font-bold font-mono tracking-wide text-white mb-2">
              The Startup Mind
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              I don't just code; I construct value. Aiming to transform diagnostic telemetry, medical alerts, or e-commerce routing into viable structural businesses.
            </p>
          </GlareCard>
        </div>

        {/* Timeline Section */}
        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden bg-cyber-bg/20 border-white/[0.04]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-8 font-mono text-xs font-bold tracking-widest text-slate-400">
            <Award size={14} className="text-cyber-blue animate-pulse" />
            <span>JOURNEY_CHRONOLOGY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Horizontal Line connector */}
            <div className="hidden md:block absolute top-6 left-8 right-8 h-[1px] bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-30" />

            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-start text-left relative z-10 group"
              >
                {/* Year Marker */}
                <div className="w-12 h-12 rounded-full bg-cyber-bg border border-white/[0.08] flex items-center justify-center text-cyber-blue group-hover:border-cyber-blue group-hover:shadow-cyber-glow transition-all duration-300 mb-4">
                  {item.icon}
                </div>
                
                <span className="text-xs font-bold font-mono tracking-widest text-cyber-purple mb-1">
                  {item.year}
                </span>
                
                <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-cyber-blue transition-colors duration-200">
                  {item.title}
                </h4>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

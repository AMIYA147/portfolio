import React from "react";
import { motion } from "framer-motion";
import { CircuitTraces } from "../components/CircuitTraces";
import { Magnet } from "../components/Magnet";
import { ArrowDown, Code2, Cpu, Database, Flame, Bot } from "lucide-react";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 200 },
    },
  };

  const badgeVariants = {
    float1: {
      y: [0, -12, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }
    },
    float2: {
      y: [0, -8, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }
    },
    float3: {
      y: [0, -15, 0],
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }
    }
  };

  const name = "Amiya Kumar Behera";

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8 border-b border-white/[0.03]"
    >
      {/* Dynamic Circuit Traces Background */}
      <CircuitTraces />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-20">
        
        {/* Left Text / Info Panel */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue text-xs font-bold font-mono tracking-widest mb-6 shadow-cyber-glow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
            SYS_STATUS: READY_TO_BUILD
          </motion.div>

          {/* Name character reveal */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white select-none flex flex-wrap md:flex-nowrap md:whitespace-nowrap"
          >
            {name.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-3.5 last:mr-0">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={letterVariants}
                    className="inline-block hover:text-cyber-blue transition-colors duration-200"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Bold Core Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-3.5xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 leading-tight mb-5"
          >
            Building AI, Electronics & Software That Solve Real Problems
          </motion.h2>

          {/* Role Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-sm md:text-base text-slate-400 font-mono tracking-wide mb-8 border-l border-cyber-purple/40 pl-4"
          >
            ECE Student &bull; Full Stack Developer &bull; Cyber Security &bull; Future Entrepreneur
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Magnet range={60} strength={0.3}>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full text-xs font-bold font-mono tracking-wider bg-gradient-to-r from-cyber-blue to-cyber-purple text-white shadow-cyber-glow hover:shadow-purple-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <span>INIT_PROJECTS</span>
                <Code2 size={14} />
              </button>
            </Magnet>

            <Magnet range={50} strength={0.35}>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full text-xs font-bold font-mono tracking-wider border border-white/[0.08] bg-white/[0.02] text-slate-300 hover:bg-white/[0.05] hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <span>GET_IN_TOUCH</span>
                <Cpu size={14} />
              </button>
            </Magnet>
          </motion.div>
        </div>

        {/* Right Floating Tech badg cloud */}
        <div className="flex-1 w-full flex items-center justify-center relative min-h-[350px] lg:min-h-[450px]">
          {/* Glowing central orb background */}
          <div className="absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full bg-gradient-to-tr from-cyber-blue/10 to-cyber-purple/10 blur-[60px] animate-pulse-slow" />

          {/* Main Visual Core with scale wrapper for mobile responsiveness */}
          <div className="scale-75 sm:scale-100 transition-transform duration-300">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 border border-white/[0.05] bg-cyber-bg/40 backdrop-blur-md rounded-full flex items-center justify-center p-6 shadow-2xl"
            >
              <div className="absolute inset-2 border border-dashed border-cyber-blue/20 rounded-full animate-spin" style={{ animationDuration: "120s" }} />
              <div className="absolute inset-6 border border-white/[0.03] rounded-full animate-spin" style={{ animationDuration: "90s", animationDirection: "reverse" }} />
              
              {/* Core Neural / CPU logo */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/30 flex items-center justify-center shadow-cyber-glow">
                <Bot size={44} className="text-cyber-blue animate-pulse" />
              </div>

              {/* Floating badges around circle */}
              {/* Badge 1: React */}
              <motion.div
                variants={badgeVariants}
                animate="float1"
                className="absolute -top-6 left-6 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide text-cyan-400"
              >
                <Code2 size={12} />
                <span>React</span>
              </motion.div>

              {/* Badge 2: AI / ML */}
              <motion.div
                variants={badgeVariants}
                animate="float2"
                className="absolute -right-4 top-12 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide text-indigo-400"
              >
                <Bot size={12} />
                <span>AI/PyTorch</span>
              </motion.div>

              {/* Badge 3: Embedded systems */}
              <motion.div
                variants={badgeVariants}
                animate="float3"
                className="absolute -bottom-6 left-12 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide text-emerald-400"
              >
                <Cpu size={12} />
                <span>C++/IoT</span>
              </motion.div>

              {/* Badge 4: Full Stack */}
              <motion.div
                variants={badgeVariants}
                animate="float1"
                className="absolute -left-12 top-28 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide text-pink-400"
              >
                <Database size={12} />
                <span>Next.js</span>
              </motion.div>

              {/* Badge 5: Innovation */}
              <motion.div
                variants={badgeVariants}
                animate="float2"
                className="absolute right-0 bottom-16 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide text-amber-400"
              >
                <Flame size={12} />
                <span>Founder</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">SYS_DESCEND</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-1.5 rounded-full border border-white/[0.08] text-slate-400"
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
};

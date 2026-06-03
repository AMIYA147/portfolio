import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlareCard } from "../components/GlareCard";
import { Binary, Network, Terminal, Activity } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  x: number; // percentage coordinate in SVG
  y: number;
  color: string;
  glowColor: string;
  skills: string[];
  description: string;
  complexity: string;
}

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("cybersecurity");

  const categories: SkillCategory[] = [
    {
      id: "electronics",
      name: "ECE & Electronics",
      x: 18,
      y: 20,
      color: "#00f0ff",
      glowColor: "rgba(0, 240, 255, 0.4)",
      skills: ["Analog/Digital Circuits", "PCB Routing (Altium/KiCad)", "Signal Processing", "Circuit Simulation", "Multisim"],
      description: "Fundamental silicon structures, analyzing noise filters, formulating signal traces, and modeling analog components.",
      complexity: "92%",
    },
    {
      id: "cybersecurity",
      name: "Cyber Security",
      x: 28,
      y: 80,
      color: "#f43f5e",
      glowColor: "rgba(244, 63, 94, 0.4)",
      skills: ["Network Auditing", "Penetration Testing", "Cryptography (AES/RSA)", "Secure APIs", "OWASP Top 10 hardening"],
      description: "Hardening system vectors. Auditing data transmission tunnels, analyzing cipher handshake exchanges, and defending microservices from protocol injection pathways.",
      complexity: "90%",
    },
    {
      id: "embedded",
      name: "Embedded Systems",
      x: 15,
      y: 50,
      color: "#00f5d4",
      glowColor: "rgba(0, 245, 212, 0.4)",
      skills: ["C/C++", "ESP32 / STM32", "Arduino IDE", "FreeRTOS", "LoRaWAN Telemetry"],
      description: "Writing bare-metal drivers, structuring real-time tasks, managing sensor interrupts, and designing LoRa meshes.",
      complexity: "94%",
    },

    {
      id: "frontend",
      name: "Frontend UI",
      x: 82,
      y: 20,
      color: "#ec4899",
      glowColor: "rgba(236, 72, 153, 0.4)",
      skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Canvas APIs"],
      description: "Developing smooth high-frame rate fluid web pages, glass layouts, responsive modules, and custom interactive nodes.",
      complexity: "95%",
    },
    {
      id: "backend",
      name: "Backend Eng",
      x: 85,
      y: 50,
      color: "#f59e0b",
      glowColor: "rgba(245, 158, 11, 0.4)",
      skills: ["Node.js / Express", "FastAPI / Django", "RESTful Interfaces", "WebSockets P2P", "Socket.io"],
      description: "Building responsive routing servers, serverless APIs, real-time messaging tunnels, and local peer sync routes.",
      complexity: "90%",
    },
    {
      id: "databases",
      name: "Databases",
      x: 72,
      y: 80,
      color: "#3b82f6",
      glowColor: "rgba(59, 130, 246, 0.4)",
      skills: ["MongoDB NoSQL", "PostgreSQL", "Redis Cache", "SQL Schemas"],
      description: "Configuring clustered storage indices, data caching routes, relational references, and optimizing transaction speeds.",
      complexity: "86%",
    },
    {
      id: "datascience",
      name: "Data Science",
      x: 50,
      y: 88,
      color: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.4)",
      skills: ["Python (Pandas/NumPy)", "Exploratory Data Analysis", "SQL & NoSQL Schemas", "Statistical Modeling", "Data Wrangling"],
      description: "Formulating statistical structures, cleansing data pipelines, analyzing structural distributions, and predicting trend analytics.",
      complexity: "86%",
    },
    {
      id: "cloud",
      name: "Cloud Infra",
      x: 50,
      y: 12,
      color: "#6366f1",
      glowColor: "rgba(99, 102, 241, 0.4)",
      skills: ["Docker Containers", "AWS (EC2, S3)", "Serverless Functions", "Nginx Proxy"],
      description: "Packaging systems in light virtual environments, managing object nodes, and forwarding proxy server requests.",
      complexity: "82%",
    },
  ];

  const activeCategory = categories.find((cat) => cat.id === selectedCategory) || categories[0];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 border-b border-white/[0.03] relative bg-[#020010]/30">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="text-xs font-bold font-mono tracking-widest text-cyber-blue mb-2 uppercase">
            03 // NEURAL_NETWORK_MAP
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
            Neural Skill Network
          </h2>
          <div className="line-reveal mt-4 max-w-sm" />
        </div>

        {/* Network Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Interactive SVG Network */}
          <div className="lg:col-span-7 bg-[#050515]/50 border border-white/[0.05] p-6 rounded-2xl relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
            
            {/* Absolute instruction badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 font-mono text-[9px] text-slate-500">
              <Activity size={10} className="text-cyber-blue animate-pulse" />
              <span>HOVER_OR_CLICK_NODES_TO_DECRYPT</span>
            </div>

            {/* Neural Net SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connecting paths between central CPU and category nodes */}
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <g key={`path-${cat.id}`}>
                    {/* Background faint wire */}
                    <line
                      x1="50"
                      y1="50"
                      x2={cat.x}
                      y2={cat.y}
                      stroke={isSelected ? cat.color : "rgba(255,255,255,0.06)"}
                      strokeWidth={isSelected ? 1.5 : 0.6}
                      className="transition-all duration-500"
                    />

                    {/* Glowing pulse path */}
                    {isSelected && (
                      <line
                        x1="50"
                        y1="50"
                        x2={cat.x}
                        y2={cat.y}
                        stroke={`url(#pathGrad-${cat.id})`}
                        strokeWidth="2"
                        strokeDasharray="10, 30"
                        style={{
                          animation: "pulsePath 3s infinite linear",
                          filter: "url(#svgGlow)",
                        }}
                      />
                    )}

                    {/* Gradient for pulse paths */}
                    <linearGradient id={`pathGrad-${cat.id}`} x1="50%" y1="50%" x2={`${cat.x}%`} y2={`${cat.y}%`}>
                      <stop offset="0%" stopColor="#7b61ff" stopOpacity="0" />
                      <stop offset="50%" stopColor={cat.color} stopOpacity="1" />
                      <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.2" />
                    </linearGradient>
                  </g>
                );
              })}
            </svg>

            {/* SVG style helper */}
            <style>{`
              @keyframes pulsePath {
                0% { stroke-dashoffset: 40; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>

            {/* Central Processing Node */}
            <div
              className="absolute w-16 h-16 rounded-full bg-cyber-bg border border-cyber-purple/40 flex items-center justify-center z-10 shadow-cyber-glow group cursor-pointer"
              style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            >
              <div className="absolute inset-1 border border-dashed border-cyber-purple/20 rounded-full animate-spin" style={{ animationDuration: "30s" }} />
              <Network size={22} className="text-cyber-purple animate-pulse" />
            </div>

            {/* Surrounding Skill Category Nodes */}
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  onMouseEnter={() => setSelectedCategory(cat.id)}
                  className="absolute p-0.5 rounded-full z-20 group transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${cat.x}%`,
                    top: `${cat.y}%`,
                  }}
                >
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-cyber-bg border flex items-center justify-center transition-all duration-500 ${
                      isSelected
                        ? "scale-125 border-slate-100 shadow-cyber-glow"
                        : "border-white/[0.08] hover:border-slate-400"
                    }`}
                    style={{
                      borderColor: isSelected ? cat.color : "",
                      boxShadow: isSelected ? `0 0 15px ${cat.glowColor}` : "",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-transform duration-300 group-hover:scale-150"
                      style={{ backgroundColor: cat.color }}
                    />
                  </div>

                  {/* Faint text node label */}
                  <span
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded text-[8px] md:text-[9px] font-mono tracking-wide whitespace-nowrap transition-colors duration-300 ${
                      isSelected ? "text-white font-bold" : "text-slate-500"
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Sidebar Terminal Monitor */}
          <div className="lg:col-span-5 h-full">
            <GlareCard className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full min-h-[420px] bg-cyber-card border-white/[0.05]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col text-left h-full justify-between"
                >
                  {/* Monitor header */}
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-5">
                      <div className="flex items-center gap-2">
                        <Terminal size={16} className="text-cyber-blue" />
                        <span className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">
                          NODE_MONITOR // DECRYPTED
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[9px] font-mono text-slate-400">
                        LATENCY: 4ms
                      </span>
                    </div>

                    {/* Skill Category Meta Info */}
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3
                        className="text-2xl font-bold tracking-tight"
                        style={{ color: activeCategory.color }}
                      >
                        {activeCategory.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">
                        Complexity: {activeCategory.complexity}
                      </span>
                    </div>
                    
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                      {activeCategory.description}
                    </p>

                    {/* Skills index list */}
                    <div className="flex flex-col gap-2.5 mb-6">
                      <span className="text-[10px] font-bold font-mono tracking-widest text-slate-500 uppercase">
                        SUB_SYSTEM_PROTOCOLS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeCategory.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="px-3 py-1.5 rounded-lg bg-cyber-bg border border-white/[0.04] text-xs font-mono text-slate-300 flex items-center gap-1.5 hover:border-white/[0.1] hover:text-white transition-all duration-300"
                          >
                            <Binary size={12} style={{ color: activeCategory.color }} />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Monitor diagnostics telemetry */}
                  <div className="border-t border-white/[0.05] pt-4 mt-auto">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mb-2">
                      <span>INTEGRITY_INDEX:</span>
                      {(activeCategory.id === "embedded" || activeCategory.id === "cybersecurity") ? (
                        <span className="text-rose-500 font-bold">20% ONLINE</span>
                      ) : (activeCategory.id === "electronics" || activeCategory.id === "datascience") ? (
                        <span className="text-amber-500 font-bold">50% ONLINE</span>
                      ) : (
                        <span className="text-emerald-400 font-bold">100% ONLINE</span>
                      )}
                    </div>
                    <div className="w-full bg-white/[0.02] border border-white/[0.05] h-2.5 rounded-full overflow-hidden p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: (activeCategory.id === "embedded" || activeCategory.id === "cybersecurity")
                            ? "20%"
                            : (activeCategory.id === "electronics" || activeCategory.id === "datascience")
                            ? "50%"
                            : "100%"
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${activeCategory.color}, #7b61ff)`,
                        }}
                      />
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </GlareCard>
          </div>

        </div>

      </div>
    </section>
  );
};

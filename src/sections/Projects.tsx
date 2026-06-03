import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlareCard } from "../components/GlareCard";
import { Magnet } from "../components/Magnet";
import { ExternalLink, AlertCircle, TrendingUp, CheckCircle, Lock } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  github: string;
  demo: string;
  preview: React.ReactNode;
  status: "deployed" | "production" | "maintenance" | "upcoming";
}

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Record<number, "overview" | "metrics">>({
    1: "overview",
    2: "overview",
    3: "overview",
    4: "overview",
    5: "overview",
  });

  // Simulated live states for interactive previews
  const [qrProgress, setQrProgress] = useState(0);
  const [circuitHealth, setCircuitHealth] = useState("STABLE");
  const [budgetSavings, setBudgetSavings] = useState(230);

  useEffect(() => {
    // QR progress bar ticker
    const qrInterval = setInterval(() => {
      setQrProgress((prev) => (prev >= 100 ? 0 : prev + 4));
    }, 250);

    // Circuit diagnostics ticker
    const circuitInterval = setInterval(() => {
      const statuses = ["OPTIMIZING", "STABLE", "DECODING", "STABLE"];
      setCircuitHealth(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 3000);

    // Financial budgeting crawler
    const budgetInterval = setInterval(() => {
      setBudgetSavings((prev) => {
        const delta = Math.random() > 0.6 ? 5 : -3;
        return Math.max(150, Math.min(500, prev + delta));
      });
    }, 2000);

    return () => {
      clearInterval(qrInterval);
      clearInterval(circuitInterval);
      clearInterval(budgetInterval);
    };
  }, []);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Ecom Platform",
      category: "Full Stack / E-Commerce",
      tagline: "High-throughput modular inventory and sales portal for regional consumers.",
      problem: "Traditional physical parts distribution suffered from catalog lag and stock synchronization deficits.",
      solution: "Engineered a reactive React-driven parts manager with lightning-fast localized caching layers.",
      impact: "Boosted operational throughput by 40% and served 10k+ local product queries monthly.",
      stack: ["React", "TypeScript", "Node.js", "MongoDB", "Redux ToolKit"],
      github: "https://github.com/AMIYA147/e-com",
      demo: "https://e-com-eh69.vercel.app/",
      status: "deployed",
      preview: (
        <div className="w-full h-full bg-[#050515] rounded-lg p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 border border-white/[0.04] overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.05] pb-2 mb-2">
            <span className="text-cyan-400 font-bold">ECOM_STORE // ACTIVE</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="flex-1 flex flex-col gap-1.5 justify-center">
            <div className="flex justify-between">
              <span>Catalog Synced:</span>
              <span className="text-white">99.98%</span>
            </div>
            <div className="flex justify-between">
              <span>Order Latency:</span>
              <span className="text-cyan-400">12ms</span>
            </div>
            <div className="flex justify-between">
              <span>Server Load:</span>
              <span className="text-amber-400">14%</span>
            </div>
            <div className="w-full bg-white/[0.03] h-2 rounded-full mt-2 overflow-hidden relative">
              <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-cyan-400 to-purple-400 w-3/4 rounded-full" />
            </div>
          </div>
          <div className="text-[8px] text-slate-500 mt-2 text-right">DB_REF: MONGODB_SECURE_PORT_27017</div>
        </div>
      ),
    },
    {
      id: 2,
      title: "AI Circuit Analyzer",
      category: "Deep Learning / Computer Vision",
      tagline: "Real-time computer vision circuit solver using convolutional neural networks.",
      problem: "Students and engineering juniors struggle to audit complex circuit schematics and detect routing bugs.",
      solution: "Trained a customized lightweight CNN model to identify components (resistors, diodes, ICs) and traces from mobile photos.",
      impact: "Achieved a 94.6% component classification accuracy and solved nodal voltages dynamically.",
      stack: ["Python", "PyTorch", "OpenCV", "FastAPI", "TailwindCSS"],
      github: "https://github.com",
      demo: "https://google.com",
      status: "upcoming",
      preview: (
        <div className="relative w-full h-full bg-[#060419] rounded-lg p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 border border-white/[0.04] overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.05] pb-2">
            <span className="text-purple-400 font-bold">CIRCUIT_VISION_V1</span>
            <span className="text-slate-500">FPS: 60</span>
          </div>
          
          {/* Schematic visual simulation */}
          <div className="flex-1 relative flex items-center justify-center my-2">
            <div className="w-full h-24 border border-dashed border-white/[0.08] rounded flex items-center justify-center relative bg-cyber-bg/50">
              {/* Bounding Box 1 */}
              <div className="absolute top-2 left-6 border border-cyan-400 p-0.5 rounded text-[7px] text-cyan-400 bg-cyan-400/10">
                Resistor_10k [99.2%]
              </div>
              {/* Bounding Box 2 */}
              <div className="absolute bottom-4 right-10 border border-purple-400 p-0.5 rounded text-[7px] text-purple-400 bg-purple-400/10 animate-pulse">
                Node_A_Gnd [98.5%]
              </div>
              <svg className="w-full h-full p-2 opacity-30" viewBox="0 0 100 50">
                <line x1="10" y1="25" x2="30" y2="25" stroke="#fff" strokeWidth="1" />
                <path d="M 30,25 L 35,20 L 40,30 L 45,20 L 50,30 L 55,20 L 60,30 L 65,25" fill="none" stroke="#fff" strokeWidth="1" />
                <line x1="65" y1="25" x2="90" y2="25" stroke="#fff" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between text-[8px]">
            <span>NODE_STATUS:</span>
            <span className="text-emerald-400 font-bold">{circuitHealth}</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "QR Offline File Transfer",
      category: "Networking / WebRTC",
      tagline: "Direct serverless browser-to-browser P2P local file transfer utility.",
      problem: "Transferring heavy design blocks and files in classrooms without cloud access or web connections is tedious.",
      solution: "Devised a system that generates dynamic data-packed QR markers establishing direct peer connections via WebRTC.",
      impact: "Eliminated server dependencies entirely, maintaining full security on offline local bands.",
      stack: ["JavaScript", "WebRTC", "Socket.io", "QRCodes", "CSSGlass"],
      github: "https://github.com",
      demo: "https://google.com",
      status: "production",
      preview: (
        <div className="w-full h-full bg-[#030010] rounded-lg p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 border border-white/[0.04] overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.05] pb-2">
            <span className="text-pink-400 font-bold">WEBRTC_SECURE_TUNNEL</span>
            <span className="text-pink-400 font-bold">{qrProgress}%</span>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            {/* Pulsing QR icon */}
            <div className="w-16 h-16 border border-white/[0.08] p-1 bg-white/[0.02] flex flex-wrap gap-0.5 rounded shadow-cyber-glow animate-pulse">
              {Array.from({ length: 16 }).map((_, idx) => (
                <div key={idx} className={`w-3.5 h-3.5 rounded-sm ${(idx % 3 !== 0 && idx % 4 !== 0) ? "bg-slate-300" : "bg-transparent"}`} />
              ))}
            </div>
            <div className="text-[7px] text-slate-500">P2P_LINK: SECURE_ESTABLISHED</div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-white/[0.03] h-1 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300" style={{ width: `${qrProgress}%` }} />
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Personal Finance Advisor",
      category: "Machine Learning / Fintech",
      tagline: "Predictive financial planning budget portal powered by forecasting LSTMs.",
      problem: "Retail budget users struggle to forecast mid-month deficits and design actionable saving pools.",
      solution: "Constructed recurrent neural LSTM models feeding on banking patterns to run dynamic cashflow calculations.",
      impact: "Averted mid-month overdraft alerts for test users and improved budget discipline by 25%.",
      stack: ["Python", "Keras", "FastAPI", "React", "PostgreSQL"],
      github: "https://github.com/AMIYA147/dap_frontend",
      demo: "https://google.com",
      status: "maintenance",
      preview: (
        <div className="w-full h-full bg-[#050314] rounded-lg p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 border border-white/[0.04] overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.05] pb-2">
            <span className="text-amber-400 font-bold">LSTM_PREDICTOR</span>
            <span className="text-slate-500">SAVINGS</span>
          </div>

          <div className="flex-1 flex flex-col justify-center my-2 relative">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-[8px]">EST_NET_SAVED:</span>
              <span className="text-white font-bold text-xs">${budgetSavings.toFixed(2)}</span>
            </div>
            {/* Draw a dynamic visual wave representing forecasted trend */}
            <div className="w-full h-12 flex items-end gap-[2px] bg-white/[0.01] border border-white/[0.05] p-1 rounded overflow-hidden">
              {Array.from({ length: 18 }).map((_, idx) => {
                const height = Math.abs(Math.sin((idx + budgetSavings / 50) * 0.4) * 80) + 10;
                return (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-purple-500 to-amber-400 rounded-t-sm transition-all duration-500"
                    style={{ height: `${height}%` }}
                  />
                );
              })}
            </div>
          </div>

          <div className="text-[7px] text-slate-500 flex justify-between">
            <span>TRAIN_EPOCH: 80</span>
            <span className="text-emerald-400">ACCURACY: 98.7%</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 border-b border-white/[0.03] relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="text-xs font-bold font-mono tracking-widest text-cyber-blue mb-2 uppercase">
            02 // CASE_STUDIES
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            High-Impact Engineering Solvers
          </h2>
          <div className="line-reveal mt-4 max-w-sm" />
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const currentTab = activeTab[project.id] || "overview";
            
            return (
              <GlareCard key={project.id} className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full bg-cyber-card border-white/[0.05]">
                <div>
                  {/* Card Header Info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.05] pb-4 mb-6">
                    <span className="text-xs font-bold font-mono tracking-widest text-cyber-purple uppercase">
                      ID_0{project.id} &bull; {project.category}
                    </span>
                    {project.status === "deployed" ? (
                      <span className="px-2 py-0.5 rounded bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-[10px] font-bold font-mono">
                        DEPLOYED
                      </span>
                    ) : project.status === "maintenance" ? (
                      <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-bold font-mono animate-pulse">
                        UNDER MAINTENANCE
                      </span>
                    ) : project.status === "upcoming" ? (
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold font-mono animate-pulse">
                        UPCOMING
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold font-mono animate-pulse">
                        UNDER PRODUCTION
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2 text-left">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 text-left mb-6 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Visual Interface & Tab Panels Side-by-Side */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
                    {/* Live Preview Monitor Screen */}
                    <div className="md:col-span-5 w-full h-36 relative rounded-lg bg-cyber-bg border border-white/[0.05] shadow-2xl p-1 flex items-center justify-center">
                      <div className="absolute -top-1 left-4 px-2 py-0.5 rounded bg-cyber-bg border border-white/[0.05] text-[7px] font-mono tracking-widest text-slate-500 uppercase">
                        LIVE_SYSTEM_TELEMETRY
                      </div>
                      {project.preview}
                    </div>

                    {/* Interactive Tab Content */}
                    <div className="md:col-span-7 flex flex-col h-full min-h-[144px]">
                      {/* Tab buttons */}
                      <div className="flex gap-2 mb-3 border-b border-white/[0.03] pb-1.5">
                        <button
                          onClick={() => setActiveTab((prev) => ({ ...prev, [project.id]: "overview" }))}
                          className={`text-[10px] font-bold font-mono pb-1 tracking-wider uppercase border-b-2 transition-colors duration-200 ${
                            currentTab === "overview"
                              ? "border-cyber-blue text-cyber-blue"
                              : "border-transparent text-slate-500 hover:text-slate-300"
                          }`}
                        >
                          System_Overview
                        </button>
                        <button
                          onClick={() => setActiveTab((prev) => ({ ...prev, [project.id]: "metrics" }))}
                          className={`text-[10px] font-bold font-mono pb-1 tracking-wider uppercase border-b-2 transition-colors duration-200 ${
                            currentTab === "metrics"
                              ? "border-cyber-purple text-cyber-purple"
                              : "border-transparent text-slate-500 hover:text-slate-300"
                          }`}
                        >
                          Audit_Metrics
                        </button>
                      </div>

                      {/* Tab panels */}
                      <div className="text-left text-xs text-slate-400 flex-1">
                        <AnimatePresence mode="wait">
                          {currentTab === "overview" ? (
                            <motion.div
                              key="overview"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                              className="flex flex-col gap-2.5"
                            >
                              <div className="flex gap-2">
                                <AlertCircle size={14} className="text-cyber-purple shrink-0 mt-0.5" />
                                <div>
                                  <strong className="text-slate-300 text-[10px] font-mono block">PROBLEM:</strong>
                                  <span className="leading-relaxed">{project.problem}</span>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <CheckCircle size={14} className="text-cyber-blue shrink-0 mt-0.5" />
                                <div>
                                  <strong className="text-slate-300 text-[10px] font-mono block">SOLUTION:</strong>
                                  <span className="leading-relaxed">{project.solution}</span>
                                </div>
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="metrics"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                              className="flex flex-col gap-3"
                            >
                              <div className="flex gap-2">
                                <TrendingUp size={14} className="text-cyber-success shrink-0 mt-0.5" />
                                <div>
                                  <strong className="text-slate-300 text-[10px] font-mono block">REALIZED_IMPACT:</strong>
                                  <span className="text-slate-200 leading-relaxed font-medium">{project.impact}</span>
                                </div>
                              </div>
                              <div>
                                <strong className="text-slate-300 text-[10px] font-mono block mb-1">AUDITABLE_STACK:</strong>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.stack.map((tech, idx) => (
                                    <span key={idx} className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.05] text-[9px] font-mono text-slate-400">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card CTA Trigger Buttons */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-t border-white/[0.05] pt-4 mt-auto">
                  <Magnet range={40} strength={0.3}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.05] text-slate-300 hover:text-white text-[10px] sm:text-xs font-bold font-mono transition-all duration-300 flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      <span>SOURCE_CODE</span>
                    </a>
                  </Magnet>

                  {project.status === "deployed" ? (
                    <Magnet range={40} strength={0.3}>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/30 text-cyber-blue hover:from-cyber-blue hover:to-cyber-purple hover:text-white text-[10px] sm:text-xs font-bold font-mono transition-all duration-300 flex items-center gap-1.5 hover:shadow-cyber-glow"
                      >
                        <ExternalLink size={12} />
                        <span>EXECUTE_DEMO</span>
                      </a>
                    </Magnet>
                  ) : project.status === "maintenance" ? (
                    <span
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-400/60 text-[10px] sm:text-xs font-bold font-mono flex items-center gap-1.5 cursor-not-allowed select-none opacity-60"
                      title="Demo locked - System under maintenance"
                    >
                      <Lock size={12} className="text-rose-500 animate-pulse" />
                      <span>UNDER MAINTENANCE</span>
                    </span>
                  ) : project.status === "upcoming" ? (
                    <span
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/[0.05] bg-white/[0.02] text-slate-500 text-[10px] sm:text-xs font-bold font-mono flex items-center gap-1.5 cursor-not-allowed select-none opacity-50"
                      title="Demo locked - Upcoming release"
                    >
                      <Lock size={12} className="text-slate-600 animate-pulse" />
                      <span>COMING_SOON</span>
                    </span>
                  ) : (
                    <span
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/[0.05] bg-white/[0.02] text-slate-500 text-[10px] sm:text-xs font-bold font-mono flex items-center gap-1.5 cursor-not-allowed select-none opacity-50"
                      title="Demo locked - System under production"
                    >
                      <Lock size={12} className="text-slate-600 animate-pulse" />
                      <span>DEMO_WIP</span>
                    </span>
                  )}
                </div>
              </GlareCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

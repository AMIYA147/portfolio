import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnet } from "../components/Magnet";
import { Cpu, Terminal, Briefcase, FileCode, Award, Mail, User, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  id: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Home", id: "hero", icon: <Terminal size={16} /> },
  { label: "About", id: "about", icon: <User size={16} /> },
  { label: "Projects", id: "projects", icon: <Briefcase size={16} /> },
  { label: "Skills", id: "skills", icon: <Cpu size={16} /> },
  { label: "Activity", id: "github", icon: <FileCode size={16} /> },
  { label: "Achievements", id: "achievements", icon: <Award size={16} /> },
  { label: "Contact", id: "contact", icon: <Mail size={16} /> },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      let currentSection = "hero";

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // If top of section is within the top third of the viewport
          if (rect.top <= window.innerHeight * 0.3) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-5xl px-4 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div className="glass-panel rounded-full px-4 md:px-8 py-3 flex items-center justify-between bg-cyber-bg/50 backdrop-blur-cyber border-white/[0.05] shadow-2xl relative">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => { scrollTo("hero"); setIsMenuOpen(false); }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyber-blue to-cyber-purple flex items-center justify-center p-[1px] transition-transform duration-500 group-hover:rotate-180">
            <div className="w-full h-full rounded-full bg-cyber-bg flex items-center justify-center">
              <span className="text-sm font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">AB</span>
            </div>
          </div>
          <span className="hidden sm:block text-sm font-bold font-mono tracking-wider text-slate-100 group-hover:text-cyber-blue transition-colors duration-300">
            AMIYA.SYS
          </span>
        </div>

        {/* Desktop Navigation items */}
        <ul className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <Magnet range={40} strength={0.3}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-cyber-blue font-semibold"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                  >
                    {/* Active highlight background */}
                    {isActive && (
                      <div className="absolute inset-0 bg-cyber-blue/10 rounded-full border border-cyber-blue/20 -z-10 shadow-cyber-glow" />
                    )}
                    <span>{item.label}</span>
                  </button>
                </Magnet>
              </li>
            );
          })}
        </ul>

        {/* CTA Launch terminal button (Desktop) */}
        <div className="hidden md:block">
          <Magnet range={50} strength={0.4}>
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-1.5 rounded-full text-xs font-bold font-mono border border-cyber-purple/30 bg-cyber-purple/10 text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300 hover:shadow-purple-glow"
            >
              EXECUTE_CONTACT
            </button>
          </Magnet>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-slate-100 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 p-4 rounded-3xl glass-panel bg-cyber-bg/95 backdrop-blur-xl border-white/[0.08] shadow-2xl flex flex-col gap-2 relative z-50 overflow-hidden"
          >
            {/* Background design accents */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-cyber-blue/5 -top-1/4 -right-1/4 blur-3xl pointer-events-none" />
            <div className="absolute w-[150px] h-[150px] rounded-full bg-cyber-purple/5 -bottom-1/4 -left-1/4 blur-3xl pointer-events-none" />

            <div className="text-[9px] font-bold font-mono text-slate-500 border-b border-white/[0.05] pb-2 mb-2 tracking-widest uppercase">
              SYS_NAVIGATION_MENU
            </div>

            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        scrollTo(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono transition-all duration-200 ${
                        isActive
                          ? "bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue font-bold shadow-cyber-glow"
                          : "border border-transparent text-slate-400 hover:bg-white/[0.02] hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={isActive ? "text-cyber-blue" : "text-slate-500"}>
                          {item.icon}
                        </span>
                        <span>{item.label.toUpperCase()}</span>
                      </span>
                      <span className="text-[10px] text-slate-600 font-bold">&gt;&gt;</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

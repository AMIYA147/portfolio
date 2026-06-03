import React, { useState, useEffect } from "react";
import { Magnet } from "../components/Magnet";
import { Cpu, Terminal, Briefcase, FileCode, Award, Mail, User } from "lucide-react";

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
      <div className="glass-panel rounded-full px-4 md:px-8 py-3 flex items-center justify-between bg-cyber-bg/50 backdrop-blur-cyber border-white/[0.05] shadow-2xl">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo("hero")}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyber-blue to-cyber-purple flex items-center justify-center p-[1px] transition-transform duration-500 group-hover:rotate-180">
            <div className="w-full h-full rounded-full bg-cyber-bg flex items-center justify-center">
              <span className="text-sm font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">AB</span>
            </div>
          </div>
          <span className="hidden sm:block text-sm font-bold font-mono tracking-wider text-slate-100 group-hover:text-cyber-blue transition-colors duration-300">
            AMIYA.SYS
          </span>
        </div>

        {/* Navigation items */}
        <ul className="flex items-center gap-1 sm:gap-2">
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
                    <span className="sm:hidden">{item.icon}</span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                </Magnet>
              </li>
            );
          })}
        </ul>

        {/* CTA Launch terminal button */}
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
      </div>
    </nav>
  );
};

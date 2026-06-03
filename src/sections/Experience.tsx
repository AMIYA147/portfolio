import React from "react";
import { motion } from "framer-motion";
import { GlareCard } from "../components/GlareCard";
import { GraduationCap, Globe, Database, Shield, Cpu } from "lucide-react";

interface ExpItem {
  period: string;
  role: string;
  org: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
}

export const Experience: React.FC = () => {
  const experiences: ExpItem[] = [
    {
      period: "Oct 2024 - Present",
      role: "Electronics & Communication Engineering Student",
      org: "Odisha University of Technology and Research (OUTR)",
      desc: "Building a strong foundation in electronics, communication systems, digital logic, embedded systems, and engineering problem-solving.",
      bullets: [
        "Studying core ECE subjects including Digital Electronics, Basic Electronics, Communication Systems, and Microprocessors.",
        "Developing practical engineering skills through laboratory work and technical projects.",
        "Exploring embedded systems, IoT technologies, and hardware-software integration."
      ],
      icon: <GraduationCap size={16} />
    },
    {
      period: "Mar 2025 - Present",
      role: "Full Stack Development Journey",
      org: "Modern Web Technologies",
      desc: "Designing and developing full-stack applications with modern frontend and backend technologies.",
      bullets: [
        "Built and deployed Electronic World, a premium electronics e-commerce platform.",
        "Implemented authentication, admin dashboards, product management, and order workflows.",
        "Working with React, JavaScript, Supabase, REST APIs, and responsive UI design."
      ],
      icon: <Globe size={16} />
    },
    {
      period: "Jan 2025 - Present",
      role: "Data Science & Analytics Learner",
      org: "Python & Data Exploration",
      desc: "Developing analytical and data-driven problem-solving skills through Python and statistical analysis.",
      bullets: [
        "Learning data cleaning, preprocessing, and exploratory data analysis techniques.",
        "Working with Python libraries for data visualization and analysis.",
        "Exploring machine learning fundamentals and predictive analytics concepts."
      ],
      icon: <Database size={16} />
    },
    {
      period: "Aug 2025 - Present",
      role: "Cybersecurity Enthusiast",
      org: "Security Fundamentals & Best Practices",
      desc: "Exploring modern cybersecurity concepts, secure systems, and defensive security techniques.",
      bullets: [
        "Learning networking fundamentals, authentication systems, and encryption concepts.",
        "Studying common web vulnerabilities and secure coding practices.",
        "Building awareness of security-focused software development principles."
      ],
      icon: <Shield size={16} />
    },
    {
      period: "Jan 2026 - Present",
      role: "AI & Innovation Projects",
      org: "Intelligent Systems Development",
      desc: "Applying software engineering and AI concepts to create practical real-world solutions.",
      bullets: [
        "Developing a Personal Financial Advisor application.",
        "Building an Agriculture Platform connecting farmers and district officers.",
        "Exploring AI-assisted automation, decision-support systems, and future technology solutions."
      ],
      icon: <Cpu size={16} />
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8 border-b border-white/[0.03] relative bg-[#040217]/10">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-20 text-left">
          <div className="text-xs font-bold font-mono tracking-widest text-cyber-blue mb-2 uppercase">
            04 // CYBER_CHRONOLOGY
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Engineering Chronology
          </h2>
          <div className="line-reveal mt-4 max-w-sm" />
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-white/[0.06] pl-6 md:pl-10 ml-4 md:ml-6 flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative text-left"
            >
              {/* Timeline dot node */}
              <div className="absolute -left-[36px] md:-left-[56px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-cyber-bg border border-white/[0.08] flex items-center justify-center text-cyber-purple group transition-all duration-300">
                <div className="absolute inset-0 bg-cyber-purple/10 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
                {exp.icon}
              </div>

              {/* Card Container */}
              <GlareCard className="p-4 sm:p-6 md:p-8 bg-cyber-card border-white/[0.05]">
                {/* Visual top border glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-purple to-transparent opacity-40" />

                {/* Period info */}
                <span className="text-[10px] font-bold font-mono tracking-widest text-cyber-blue mb-2 block uppercase">
                  {exp.period}
                </span>

                {/* Role / Org */}
                <h3 className="text-xl font-bold text-white mb-0.5">
                  {exp.role}
                </h3>
                <h4 className="text-xs font-bold font-mono text-slate-400 mb-4 tracking-wide">
                  {exp.org}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {exp.desc}
                </p>

                {/* Bullet details */}
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlareCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

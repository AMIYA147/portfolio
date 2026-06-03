import React from "react";
import { motion } from "framer-motion";
import { GlareCard } from "../components/GlareCard";
import { ShieldCheck, Users } from "lucide-react";

interface AchievementItem {
  id: number;
  title: string;
  category: string;
  metric: string;
  desc: string;
  details: string;
  icon: React.ReactNode;
  accent: string;
}

export const Achievements: React.FC = () => {
  const achievements: AchievementItem[] = [
    {
      id: 3,
      title: "Academic Telemetry Pilot Deploy",
      category: "Real-World Deployment",
      metric: "200+ Nodes Deployed",
      desc: "Successfully deployed custom-built telemetry hardware loggers monitoring regional ground acidity metrics.",
      details: "Partnered with local district offices to deliver critical warnings to localized telemetry user networks.",
      icon: <Users size={20} />,
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 border-b border-white/[0.03] relative bg-[#040217]/10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="text-xs font-bold font-mono tracking-widest text-cyber-blue mb-2 uppercase">
            06 // VALOR_CREDENTIALS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
            Systemic Honors
          </h2>
          <div className="line-reveal mt-4 max-w-sm" />
        </div>

        {/* Achievements Grid */}
        <div className="flex justify-center w-full">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="max-w-2xl w-full"
            >
              <GlareCard className="p-4 sm:p-6 md:p-8 bg-cyber-card border-white/[0.05] h-full flex flex-col justify-between text-left">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${item.accent}`}>
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                        {item.category}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[9px] font-mono text-cyber-blue font-bold">
                      {item.metric}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                {/* Sub details */}
                <div className="border-t border-white/[0.05] pt-4 mt-auto">
                  <div className="flex items-start gap-2 text-[10px] font-mono text-slate-500 leading-relaxed">
                    <ShieldCheck size={12} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-400">AUDIT_DETAIL:</strong> {item.details}
                    </div>
                  </div>
                </div>
              </GlareCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


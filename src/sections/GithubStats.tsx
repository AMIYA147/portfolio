import React, { useState, useMemo } from "react";

import { GlareCard } from "../components/GlareCard";
import { GitBranch, GitCommit, Flame, Award, Globe, Code2 } from "lucide-react";

interface ContributionCell {
  date: string;
  commits: number;
  level: 0 | 1 | 2 | 3 | 4;
}

// Generate simulated contribution grid data (approx 200 tiles for layout)
const generateGrid = (): ContributionCell[] => {
  const grid: ContributionCell[] = [];
  const days = 168; // 24 weeks * 7 days
  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() - days);

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(baseDate);
    currentDate.setDate(currentDate.getDate() + i);

    // Random weight commits, busier mid-week and random active bursts
    const dayOfWeek = currentDate.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const noise = Math.random();
    let commits = 0;

    if (!isWeekend && noise > 0.3) {
      commits = Math.floor(Math.random() * 8) + 1;
    } else if (isWeekend && noise > 0.8) {
      commits = Math.floor(Math.random() * 4) + 1;
    }

    let level: 0 | 1 | 2 | 3 | 4;
    if (commits === 0) level = 0;
    else if (commits <= 2) level = 1;
    else if (commits <= 4) level = 2;
    else if (commits <= 6) level = 3;
    else level = 4;

    grid.push({
      date: currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      commits,
      level,
    });
  }
  return grid;
};

export const GithubStats: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<ContributionCell | null>(null);

  const contributionCells = useMemo(() => generateGrid(), []);

  const stats = [
    { label: "TOTAL_COMMITS", value: "368", sub: "Total commits", icon: <GitCommit size={16} className="text-emerald-400" /> },
    { label: "MAX_STREAK", value: "20 Days", sub: "20 days", icon: <Flame size={16} className="text-amber-500" /> },
    { label: "PULL_REQUESTS", value: "SOON", sub: "Soon", icon: <GitBranch size={16} className="text-cyan-400" /> },
    { label: "GLOBAL_RANK", value: "SOON", sub: "Soon", icon: <Award size={16} className="text-purple-400" /> },
  ];

  const levelsColors = {
    0: "bg-white/[0.03] border-white/[0.02]",
    1: "bg-emerald-950/30 border-emerald-950/60 text-emerald-300",
    2: "bg-emerald-900/60 border-emerald-900 text-emerald-200",
    3: "bg-emerald-700/80 border-emerald-600 text-emerald-100",
    4: "bg-emerald-400 border-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.3)] text-emerald-950",
  };

  return (
    <section id="github" className="py-24 px-4 md:px-8 border-b border-white/[0.03] relative bg-[#020010]/20">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="text-xs font-bold font-mono tracking-widest text-cyber-blue mb-2 uppercase">
            05 // ACTIVITY_LOGS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
            Carbon Coding Telemetry
          </h2>
          <div className="line-reveal mt-4 max-w-sm" />
        </div>

        {/* Outer Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left stats cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <GlareCard key={idx} className="p-4 md:p-6 bg-cyber-card border-white/[0.05] flex flex-col justify-between text-left h-full">
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-2 mb-3">
                  <span className="text-[9px] font-bold font-mono tracking-wider text-slate-500">
                    {stat.label}
                  </span>
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-mono text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-[9px] font-mono text-slate-500">
                    {stat.sub}
                  </p>
                </div>
              </GlareCard>
            ))}
          </div>

          {/* Right Contribution Panel */}
          <div className="lg:col-span-8">
            <GlareCard className="p-4 sm:p-6 md:p-8 bg-cyber-card border-white/[0.05] h-full flex flex-col justify-between text-left relative overflow-hidden">
              
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Code2 size={16} className="text-emerald-400" />
                    <span className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">
                      COMMIT_ACTIVITY_FEED // AMIYA147
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYS_SYNC: SECONDS_AGO</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                  Simulated live developer contribution patterns logging real-time commits across repository channels (WebRTC, computer vision cores, financial budget engines, and component databases).
                </p>

                {/* Contribution Board Grid */}
                <div className="w-full overflow-x-auto no-scrollbar relative mb-6 pb-2">
                  <div
                    className="grid grid-flow-col gap-[3px]"
                    style={{
                      gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                    }}
                  >
                    {contributionCells.map((cell, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredCell(cell)}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-[11px] h-[11px] rounded-[2px] border transition-all duration-200 cursor-pointer ${
                          levelsColors[cell.level]
                        } hover:scale-125 hover:z-10`}
                      />
                    ))}
                  </div>

                  {/* Tooltip Overlay */}
                  {hoveredCell && (
                    <div className="absolute top-[-36px] left-1/2 -translate-x-1/2 px-3 py-1.5 rounded bg-cyber-bg border border-emerald-400/40 text-[9px] font-mono text-emerald-300 shadow-cyber-glow z-30 transition-all duration-150 pointer-events-none">
                      {hoveredCell.commits} commits on {hoveredCell.date}
                    </div>
                  )}
                </div>
              </div>

              {/* Grid Legend Footer */}
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 border-t border-white/[0.05] pt-4 mt-auto">
                <span className="flex items-center gap-1">
                  <Globe size={10} />
                  <span>REMOTE: GITHUB.COM/AMIYA147</span>
                </span>
                
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.03] border border-white/[0.02]" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950/30 border border-emerald-950/60" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900/60 border border-emerald-900" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700/80 border border-emerald-600" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400 border border-emerald-300" />
                  <span>More</span>
                </div>
              </div>

            </GlareCard>
          </div>

        </div>

      </div>
    </section>
  );
};

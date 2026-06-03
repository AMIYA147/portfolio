import React from "react";

export const CircuitTraces: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Glowing filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glowing gradient blue to purple */}
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="50%" stopColor="#7b61ff" />
            <stop offset="100%" stopColor="#ff007a" />
          </linearGradient>
        </defs>

        {/* Trace 1 - Top Left Flow */}
        <path
          d="M -50,100 L 200,100 L 300,200 L 600,200 L 700,300 M 600,200 L 650,150 L 800,150"
          fill="none"
          stroke="url(#traceGrad)"
          strokeWidth="1.5"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-trace"
          style={{
            animation: "circuitFlow 8s infinite linear",
          }}
        />
        {/* Nodes for Trace 1 */}
        <circle cx="200" cy="100" r="3" fill="#00f0ff" filter="url(#glow)" className="animate-pulse" />
        <circle cx="300" cy="200" r="3" fill="#7b61ff" filter="url(#glow)" />
        <circle cx="600" cy="200" r="3.5" fill="#ff007a" filter="url(#glow)" className="animate-ping" style={{ animationDuration: "3s" }} />
        <circle cx="800" cy="150" r="3" fill="#00f5d4" filter="url(#glow)" />

        {/* Trace 2 - Bottom Right Flow */}
        <path
          d="M 1500,700 L 1200,700 L 1100,600 L 800,600 L 700,500 L 400,500"
          fill="none"
          stroke="url(#traceGrad)"
          strokeWidth="1.5"
          strokeDasharray="1200"
          strokeDashoffset="1200"
          style={{
            animation: "circuitFlow 10s infinite linear reverse",
          }}
        />
        {/* Nodes for Trace 2 */}
        <circle cx="1200" cy="700" r="3" fill="#ff007a" filter="url(#glow)" />
        <circle cx="1100" cy="600" r="3.5" fill="#7b61ff" filter="url(#glow)" className="animate-ping" style={{ animationDuration: "4s" }} />
        <circle cx="800" cy="600" r="3" fill="#00f0ff" filter="url(#glow)" />
        <circle cx="400" cy="500" r="3" fill="#00f5d4" filter="url(#glow)" />

        {/* Trace 3 - Center Cross Flow */}
        <path
          d="M 100,750 L 300,750 L 450,600 L 450,400 L 600,250 L 900,250 L 1050,100 L 1300,100"
          fill="none"
          stroke="url(#traceGrad)"
          strokeWidth="1"
          strokeOpacity="0.8"
          strokeDasharray="1500"
          strokeDashoffset="1500"
          style={{
            animation: "circuitFlow 12s infinite linear",
            animationDelay: "2s",
          }}
        />
        <circle cx="300" cy="750" r="2.5" fill="#7b61ff" />
        <circle cx="450" cy="400" r="3" fill="#00f0ff" filter="url(#glow)" />
        <circle cx="900" cy="250" r="2.5" fill="#ff007a" />
        <circle cx="1050" cy="100" r="3" fill="#00f5d4" filter="url(#glow)" />
      </svg>

      {/* Embedded CSS for keyframes */}
      <style>{`
        @keyframes circuitFlow {
          0% {
            stroke-dashoffset: 1500;
            opacity: 0.2;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

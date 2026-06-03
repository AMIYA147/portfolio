import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlareCard } from "../components/GlareCard";
import { Magnet } from "../components/Magnet";
import { Send, Mail, MapPin, Terminal, ShieldCheck, AlertTriangle } from "lucide-react";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "transmitting" | "success" | "error">("idle");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const executeHandshake = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setFormState("transmitting");
    setConsoleLogs([
      "INITIALIZING SECURE PORT 443...",
      "RESOLVING PROTOCOL ROUTING SHELL..."
    ]);

    await new Promise((resolve) => setTimeout(resolve, 600));

    // Validate email structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setConsoleLogs((prev) => [
        ...prev,
        "ERROR: INVALID_CORP_COMMS_FORMAT",
        "The entered email address structure is invalid.",
        "SYS_ABORT: HANDSHAKE REJECTED."
      ]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState("error");
      return;
    }

    setConsoleLogs((prev) => [
      ...prev,
      "PACKAGING ENCRYPTED DATA BLOCKS...",
      "CONNECTING TO EMAILJS SECURE TUNNEL..."
    ]);

    await new Promise((resolve) => setTimeout(resolve, 800));

    try {
      // 3. Add console debugging
      console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      console.log("SERVICE ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log("TEMPLATE ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("MISSING_ENVIRONMENT_KEYS");
      }

      // 2. Remove all hardcoded fallbacks in key masking logic
      const maskKey = (key: string) => {
        if (!key) return "UNDEFINED";
        if (key.length <= 8) return "INVALID_LENGTH";
        return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
      };

      setConsoleLogs((prev) => [
        ...prev,
        `VERIFYING PUBLIC_KEY: ${maskKey(publicKey)}`,
        "AUTHENTICATING HOST ENVIRONMENT SECURITY KEY...",
        "DISPATCHING DATA SIGNAL TO EMAILJS..."
      ]);

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // 8. Print the actual values being passed to EmailJS before sending
      console.log("DISPATCHING TO EMAILJS:", {
        serviceId,
        templateId,
        templateParams,
        publicKey
      });

      // 6. Inspect and ensure emailjs.send uses the requested signature
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setConsoleLogs((prev) => [
        ...prev,
        "CONNECTION ONLINE & VERIFIED.",
        "DELIVERED TO NODE: kumar.amiya2006@gmail.com",
        "TRANSMISSION SUCCESSFUL!"
      ]);
      
      await new Promise((resolve) => setTimeout(resolve, 800));
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const error = err as { status?: number; text?: string; message?: string };
      // 9. Add detailed error logging (status, text, full error object)
      console.error("EmailJS Full Error Object:", error);
      console.error("EmailJS Error Status:", error?.status);
      console.error("EmailJS Error Text:", error?.text);

      let errorDetail = "ERR_CONNECTION_REFUSED: System tunnel failed.";
      
      if (error.message === "MISSING_ENVIRONMENT_KEYS") {
        errorDetail = "ERROR: VITE_EMAILJS_* keys are missing in the .env configuration.";
      } else if (error.text) {
        errorDetail = `ERROR_API: ${error.text}`;
      } else if (error.status) {
        errorDetail = `ERROR_HTTP_${error.status}: Transmission rejected by service.`;
      }

      setConsoleLogs((prev) => [
        ...prev,
        "FATAL: SECURE HANDSHAKE REJECTED!",
        errorDetail,
        "TRANSMISSION_FAILED. RETRY RECOMMENDED."
      ]);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState("error");
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setFormState("idle");
    setConsoleLogs([]);
  };

  const socials = [
    { label: "GITHUB", url: "https://github.com/AMIYA147", icon: <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>, color: "hover:text-white" },
    { label: "LINKEDIN", url: "https://linkedin.com", icon: <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, color: "hover:text-cyber-blue" },
    { label: "TWITTER", url: "https://twitter.com", icon: <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, color: "hover:text-pink-400" },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative bg-[#030014]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="text-xs font-bold font-mono tracking-widest text-cyber-blue mb-2 uppercase">
            07 // TERMINAL_COMMS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
            Retrieve Connection
          </h2>
          <div className="line-reveal mt-4 max-w-sm" />
        </div>

        {/* Outer Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: System Telemetry Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <GlareCard className="p-4 sm:p-6 md:p-8 bg-cyber-card border-white/[0.05] flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 font-mono tracking-widest bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                  AMIYA_NODE_COORDS
                </h3>

                <div className="flex flex-col gap-4 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-3 border-b border-white/[0.03] pb-3">
                    <Mail size={16} className="text-cyber-blue" />
                    <div>
                      <span className="text-slate-600 block text-[9px]">SECURE_MAIL:</span>
                      <a href="mailto:kumar.amiya2006@gmail.com" className="hover:text-cyber-blue transition-colors">
                        kumar.amiya2006@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-b border-white/[0.03] pb-3">
                    <MapPin size={16} className="text-cyber-purple" />
                    <div>
                      <span className="text-slate-600 block text-[9px]">LOCAL_LATENCY:</span>
                      <span>Bhubaneswar, Odisha, India (IST)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-b border-white/[0.03] pb-3">
                    <ShieldCheck size={16} className="text-cyber-success" />
                    <div>
                      <span className="text-slate-600 block text-[9px]">SYS_AVAILABILITY:</span>
                      <span className="text-emerald-400 font-bold">READY_FOR_STARTUP_FOUNDING</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Magnetic Social Links */}
              <div className="border-t border-white/[0.05] pt-6 mt-6 flex gap-4">
                {socials.map((soc, idx) => (
                  <Magnet key={idx} range={50} strength={0.4}>
                    <a
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-slate-400 transition-all duration-300 ${soc.color} hover:border-white/[0.2] hover:shadow-cyber-glow`}
                    >
                      {soc.icon}
                    </a>
                  </Magnet>
                ))}
              </div>
            </GlareCard>
          </div>

          {/* Right Side: Futuristic Input Form / Terminal Console */}
          <div className="lg:col-span-7 w-full h-full">
            <GlareCard className="p-4 sm:p-6 md:p-8 bg-cyber-card border-white/[0.05] min-h-[400px] flex flex-col justify-between relative overflow-hidden">
              <AnimatePresence mode="wait">
                
                {/* 1. Idle Form State */}
                {formState === "idle" && (
                  <motion.form
                    key="idle-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={executeHandshake}
                    className="flex flex-col gap-5 text-left"
                  >
                    <div className="flex items-center gap-2 border-b border-white/[0.05] pb-3 mb-2">
                      <Terminal size={14} className="text-cyber-blue" />
                      <span className="text-xs font-bold font-mono tracking-widest text-slate-500 uppercase">
                        TRANSMIT_INQUIRY // FORM_PORT_443
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-slate-500">CORP_IDENTITY (NAME):</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-[#050515]/60 border border-white/[0.08] px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-cyber-blue focus:shadow-cyber-glow transition-all duration-300 font-mono"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-slate-500">CORP_COMMS (EMAIL):</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@corporation.com"
                        className="w-full bg-[#050515]/60 border border-white/[0.08] px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-cyber-purple focus:shadow-purple-glow transition-all duration-300 font-mono"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-slate-500">TRANSMISSION_DETAILS (MESSAGE):</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Define system query parameters..."
                        className="w-full bg-[#050515]/60 border border-white/[0.08] px-4 py-3 rounded-lg text-sm text-white focus:outline-none focus:border-pink-400 focus:shadow-pink-glow transition-all duration-300 font-mono resize-none"
                      />
                    </div>

                    <Magnet range={60} strength={0.3} className="w-full mt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-xs font-bold font-mono tracking-wider transition-all duration-300 hover:shadow-purple-glow flex items-center justify-center gap-2"
                      >
                        <span>EXECUTE_HANDSHAKE</span>
                        <Send size={14} />
                      </button>
                    </Magnet>
                  </motion.form>
                )}

                {/* 2. Transmitting Terminal State */}
                {formState === "transmitting" && (
                  <motion.div
                    key="transmitting-panel"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col justify-between flex-1 text-left font-mono text-xs text-cyber-blue min-h-[350px]"
                  >
                    <div className="flex items-center gap-2 border-b border-white/[0.05] pb-3 mb-4">
                      <Terminal size={14} className="text-cyber-purple animate-pulse" />
                      <span className="text-xs font-bold font-mono tracking-widest text-slate-500 uppercase">
                        TRANSMITTING_SYS_SIGNAL...
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col gap-2.5 bg-black/40 border border-white/[0.03] p-4 rounded-lg overflow-y-auto mb-6">
                      {consoleLogs.map((log, idx) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <span className="text-[10px] text-slate-600 font-bold">&gt;&gt;</span>
                          <span className={`${log.includes("SUCCESSFUL") || log.includes("ONLINE") ? "text-cyber-success font-bold" : "text-cyber-blue"}`}>{log}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress pulse bar */}
                    <div className="w-full bg-white/[0.02] border border-white/[0.05] h-2.5 rounded-full overflow-hidden p-[1px]">
                      <div className="h-full bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink w-full rounded-full animate-pulse" />
                    </div>
                  </motion.div>
                )}

                {/* 3. Success Signal State */}
                {formState === "success" && (
                  <motion.div
                    key="success-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center flex-1 text-center min-h-[350px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-cyber-success mb-6 shadow-cyber-glow">
                      <ShieldCheck size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-white font-mono tracking-wide mb-2">
                      HANDSHAKE_ESTABLISHED
                    </h3>
                    
                    <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-8">
                      Your signal transmission has crossed the tunnel successfully. Amiya Kumar Behera's node is alerted and will issue response parameters shortly.
                    </p>

                    <Magnet range={40} strength={0.35}>
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-300 hover:bg-white/[0.05] hover:text-white text-xs font-bold font-mono transition-all duration-300"
                      >
                        RESET_TERMINAL_CHANNEL
                      </button>
                    </Magnet>
                  </motion.div>
                )}

                {/* 4. Error Signal State */}
                {formState === "error" && (
                  <motion.div
                    key="error-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center flex-1 text-center min-h-[350px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mb-6 shadow-cyber-glow animate-pulse">
                      <AlertTriangle size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-white font-mono tracking-wide mb-2 uppercase text-red-500">
                      TRANSMISSION_FAILED
                    </h3>
                    
                    <div className="w-full max-w-md bg-black/50 border border-red-500/20 text-red-400 font-mono text-[10px] text-left p-4 rounded-lg mb-6 max-h-[120px] overflow-y-auto">
                      <div className="text-[11px] font-bold border-b border-red-500/10 pb-1.5 mb-2 flex items-center gap-1.5">
                        <Terminal size={12} className="text-red-500" />
                        <span>DIAGNOSTIC_REPORT // PROTOCOL_ERR</span>
                      </div>
                      {consoleLogs.filter(log => log.startsWith("ERROR") || log.startsWith("FATAL") || log.includes("missing") || log.includes("invalid") || log.includes("ERR_") || log.includes("REJECTED") || log.startsWith("VERIFYING")).map((log, idx) => (
                        <div key={idx} className="flex gap-2">
                          <span className="text-red-600 font-bold">&gt;&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))}
                      {consoleLogs.filter(log => log.startsWith("ERROR") || log.startsWith("FATAL") || log.includes("missing") || log.includes("invalid") || log.includes("ERR_") || log.includes("REJECTED") || log.startsWith("VERIFYING")).length === 0 && (
                        <div className="flex gap-2">
                          <span className="text-red-600 font-bold">&gt;&gt;</span>
                          <span>ERR_CONNECTION_REFUSED: SECURE HANDSHAKE COMPROMISED.</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-8">
                      The secure data envelope failed to clear the network tunnel. Verify your network or environment configurations.
                    </p>

                    <div className="flex gap-4">
                      <Magnet range={40} strength={0.35}>
                        <button
                          onClick={() => setFormState("idle")}
                          className="px-6 py-2.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 hover:bg-red-500/15 hover:text-white text-xs font-bold font-mono transition-all duration-300 shadow-cyber-glow"
                        >
                          RETRY_HANDSHAKE
                        </button>
                      </Magnet>
                      <Magnet range={40} strength={0.35}>
                        <button
                          onClick={resetForm}
                          className="px-6 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-300 hover:bg-white/[0.05] hover:text-white text-xs font-bold font-mono transition-all duration-300"
                        >
                          ABORT_CHANNEL
                        </button>
                      </Magnet>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </GlareCard>
          </div>

        </div>

      </div>
    </section>
  );
};

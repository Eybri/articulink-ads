"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mic2, Cpu, BarChart3, Cloud, ArrowRight, Play, CheckCircle2, Sparkles, Activity, Layers, Zap } from "lucide-react";

const C = {
  cream: "#FAF8F4",
  deepNavy: "#0F2847",
  teal: "#2A8FA0",
  tealLight: "#3DAFC4",
  royalBlue: "#1A4480",
  textDark: "#1C2B3A",
  textMid: "#4A5A6A",
  accent: "#FF6B6B",
};

const steps = [
  {
    icon: Mic2,
    title: "Capture & Select",
    short: "Two Ways to Communicate",
    desc: "Choose between 'Normal Mode' for high-precision translations or 'Simultaneous Mode' for real-time, continuous speech streaming.",
    image: "/images/step1.png",
    color: "#2A8FA0",
    tech: "Dual-Mode Input"
  },
  {
    icon: Cpu,
    title: "AI Neural Processing",
    short: "Whisper & Gemini Synergy",
    desc: "Our backend uses Whisper AI for phonetic transcription and Google Gemini to process intent, ensuring your message is captured with 98% accuracy.",
    image: "/images/step2.png",
    color: "#1A4480",
    tech: "Multi-Model Inference"
  },
  {
    icon: BarChart3,
    title: "Interactive Mastery",
    short: "Review & Articulate",
    desc: "In Normal mode, review the translated text and click 'Speak' to hear the perfect pronunciation. In Simultaneous mode, watch text appear as you speak.",
    image: "/images/step3.png",
    color: "#3DAFC4",
    tech: "Dynamic Feedback"
  },
  {
    icon: Cloud,
    title: "Data Persistence",
    short: "Visualizing Your Growth",
    desc: "Every session is securely saved, allowing the AI to learn your speech patterns and provide personalized clarity metrics over time.",
    image: "/images/step4.png",
    color: "#0F2847",
    tech: "Smart History"
  }
];


export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      // Auto-advance or some interaction? Let's leave it manual for now but maybe add a subtle hint.
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pt-20 overflow-hidden" style={{ backgroundColor: C.cream }}>
      {/* Hero Section with Dynamic Background */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: C.deepNavy }}>
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3DAFC4,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Next-Gen Communication</span>
            </div>
            <h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Simple steps to <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3DAFC4] via-[#2A8FA0] to-[#FAF8F4] animate-gradient-x">clearer speech</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
              Experience the Articulink journey. Switch between precise translations and real-time streaming to master your communication in any environment.
            </p>
          </motion.div>
        </div>

        {/* Decorative Wave at Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-20 fill-[#FAF8F4]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,106.34,124.93,103,184.7,93,243.83,83.1,289.44,68.45,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-32 relative mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left: The Roadmap */}
            <div className="w-full lg:w-1/2 sticky top-32">
              <div className="relative pl-12 border-l-2 border-black/5 space-y-12">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setActiveStep(i)}
                    onClick={() => setActiveStep(i)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative group cursor-pointer transition-all duration-500`}
                  >
                    {/* Circle Indicator on Line */}
                    <div className={`absolute -left-[3.75rem] top-0 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center transition-all duration-500 shadow-sm ${
                      activeStep === i ? "scale-125 z-10" : "scale-100 bg-gray-100"
                    }`}
                    style={{ backgroundColor: activeStep === i ? step.color : "#E5E7EB" }}
                    >
                      <step.icon className={`w-4 h-4 transition-colors ${activeStep === i ? "text-white" : "text-gray-400"}`} />
                    </div>

                    <div className={`transition-all duration-500 ${activeStep === i ? "translate-x-2" : "opacity-60 group-hover:opacity-100"}`}>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Step 0{i + 1}</span>
                        <div className="h-px w-8 bg-black/10" />
                        <span className="text-xs font-medium px-2 py-0.5 rounded bg-black/5" style={{ color: step.color }}>{step.tech}</span>
                      </div>
                      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${C.textDark}`}>
                        {step.title}
                      </h3>
                      <p className="text-lg font-medium mb-4" style={{ color: step.color }}>
                        {step.short}
                      </p>
                      
                      <AnimatePresence>
                        {activeStep === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-lg leading-relaxed" style={{ color: C.textMid }}>
                              {step.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Immersive Mockup */}
            <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
              {/* Main Phone Stage */}
              <div className="relative group">
                <motion.div
                  animate={{ 
                    boxShadow: `0 50px 100px -20px ${steps[activeStep].color}33`,
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    boxShadow: { duration: 0.5 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative w-[300px] aspect-[9/19] border-[12px] border-[#1C2B3A] rounded-[3rem] bg-white overflow-hidden z-10"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1C2B3A] rounded-b-2xl z-30" />
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full bg-gray-50"
                    >
                      <Image
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Floating Holographic Elements */}
                <AnimatePresence>
                   <motion.div
                     key={`floating-${activeStep}`}
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: 50 }}
                     className="absolute -right-24 top-1/4 z-20 w-48 p-4 rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50"
                   >
                      <div className="flex items-center gap-2 mb-2">
                         <Activity className="w-4 h-4" style={{ color: steps[activeStep].color }} />
                         <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live Metric</span>
                      </div>
                      <p className="text-sm font-bold text-gray-800">{steps[activeStep].short}</p>
                      <div className="mt-2 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: "85%" }}
                           className="h-full"
                           style={{ backgroundColor: steps[activeStep].color }}
                         />
                      </div>
                   </motion.div>

                   <motion.div
                     key={`floating-2-${activeStep}`}
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -50 }}
                     className="absolute -left-20 bottom-1/4 z-20 w-40 p-4 rounded-2xl bg-[#0F2847] text-white shadow-2xl"
                   >
                      <Layers className="w-4 h-4 mb-2 text-teal-400" />
                      <p className="text-[10px] font-medium opacity-60">Engine State</p>
                      <p className="text-xs font-bold truncate">Syncing AI Node...</p>
                      <div className="mt-2 flex gap-1">
                         {[1,2,3,4].map(b => (
                           <div key={b} className="w-full h-1 rounded-full bg-white/20 overflow-hidden">
                              <motion.div 
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1, repeat: Infinity, delay: b * 0.2 }}
                                className="w-full h-full bg-teal-400" 
                              />
                           </div>
                         ))}
                      </div>
                   </motion.div>
                </AnimatePresence>

                {/* Perspective Shadows */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/10 blur-2xl rounded-full -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

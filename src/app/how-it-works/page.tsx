"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mic2, Cpu, BarChart3, Cloud, ArrowRight, Play, CheckCircle2 } from "lucide-react";

const C = {
  cream: "#FAF8F4",
  deepNavy: "#0F2847",
  teal: "#2A8FA0",
  tealLight: "#3DAFC4",
  royalBlue: "#1A4480",
  textDark: "#1C2B3A",
  textMid: "#4A5A6A",
};

const steps = [
  {
    icon: Mic2,
    title: "Audio Capture",
    short: "Record your speech clearly.",
    desc: "Our high-fidelity capture engine focuses on your voice while suppressing background noise.",
    image: "/images/step1.png",
    color: "#2A8FA0"
  },
  {
    icon: Cpu,
    title: "AI Processing",
    short: "Whisper AI analyzes phonemes.",
    desc: "OpenAI's Whisper Small model processes your audio to detect subtle articulation nuances.",
    image: "/images/step2.png",
    color: "#1A4480"
  },
  {
    icon: BarChart3,
    title: "Clarity Analysis",
    short: "Get your objective score.",
    desc: "Receive instant feedback with a clarity percentage and specific pronunciation tips.",
    image: "/images/step3.png",
    color: "#3DAFC4"
  },
  {
    icon: Cloud,
    title: "Progress Sync",
    short: "Track your voice journey.",
    desc: "Your data is securely saved so you can visualize your improvement over weeks and months.",
    image: "/images/step4.png",
    color: "#0F2847"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: C.cream }}>
      {/* Header Section */}
      <section className="py-24" style={{ backgroundColor: C.deepNavy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Simple steps to <br />
              <span style={{ color: C.tealLight }}>clearer speech</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(200, 216, 238, 0.8)" }}>
              Experience the Articulink journey. Hover or click through the steps to see how our AI empowers your voice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Interaction Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Step List */}
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`relative p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border ${
                    activeStep === i 
                    ? "bg-white shadow-2xl scale-[1.02] border-transparent" 
                    : "bg-transparent border-black/5 hover:bg-white/50"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg transition-transform duration-500 ${activeStep === i ? "scale-110" : "scale-100"}`}
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 
                        className={`text-xl font-bold mb-2 transition-colors duration-500 ${activeStep === i ? "text-[#1C2B3A]" : "text-[#1C2B3A]/60"}`}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className={`font-medium mb-3 transition-colors duration-500 ${activeStep === i ? "text-[#2A8FA0]" : "text-[#2A8FA0]/40"}`}
                      >
                        {step.short}
                      </p>
                      <AnimatePresence>
                        {activeStep === i && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm leading-relaxed"
                            style={{ color: C.textMid }}
                          >
                            {step.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Active Indicator Line */}
                  {activeStep === i && (
                    <motion.div 
                      layoutId="active-line"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right: Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Outer Glow based on active step color */}
              <motion.div
                animate={{ 
                  backgroundColor: steps[activeStep].color,
                  opacity: 0.15
                }}
                className="absolute inset-0 blur-[100px] rounded-full scale-75 -z-10"
              />

              <div className="relative w-full max-w-[320px] aspect-[9/19] border-[14px] border-[#1C2B3A] rounded-[3rem] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
                {/* Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1C2B3A] rounded-b-2xl z-20" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Floating Tech Badge (Inside Phone) */}
                    <div className="absolute bottom-10 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                       <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Status</p>
                       <p className="text-sm font-bold flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                          {steps[activeStep].title} active
                       </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10">
                 <div className="w-full h-full rounded-full border-4 border-dashed border-[#1C2B3A] animate-[spin_20s_linear_infinite]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Spotlight Footer */}
      <section className="py-24" style={{ backgroundColor: C.deepNavy }}>
         <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#3DAFC4] to-transparent mx-auto mb-12" />
            <p className="text-lg italic" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
              &ldquo;The synergy between Whisper AI and our proprietary clarity engine 
              is what makes Articulink a category-defining tool in speech therapy.&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#3DAFC4]" />
               </div>
               <span className="text-white font-semibold">Clinically Validated Engine</span>
            </div>
         </div>
      </section>
    </main>
  );
}

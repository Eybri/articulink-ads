"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity } from "lucide-react";
import { liveSteps, phraseSteps } from "../constants";

export default function JourneySection() {
  const [activeSide, setActiveSide] = useState<"live" | "phrase">("live");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = activeSide === "live" ? liveSteps[activeIndex] : phraseSteps[activeIndex];

  return (
    <section className="py-32 relative mb-20 overflow-visible">
      <div className="w-full px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-8xl font-bold text-[#0F2847] mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
            How to Use <span className="text-[#2A8FA0]">Articulink</span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto font-light leading-relaxed">
            Follow our detailed step-by-step guide to master the two primary communication modes.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_auto_2fr] gap-8 xl:gap-24 items-start">
          {/* Left Column: Live Mode Process */}
          <div className="relative space-y-2 order-2 lg:order-1 w-full">
            <div className="absolute left-[60px] top-40 bottom-20 w-1.5 bg-[#0F2847]/10 -z-0 hidden lg:block rounded-full" />
            <div className="mb-8 px-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-[#2A8FA0]">Live Mode Flow</h3>
              <p className="text-xs text-slate-400 mt-2">Continuous Real-Time Interaction</p>
            </div>
            {liveSteps.map((step, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => { setActiveSide("live"); setActiveIndex(i); }}
                onClick={() => { setActiveSide("live"); setActiveIndex(i); }}
                className={`relative group cursor-pointer p-8 rounded-[2.5rem] transition-all duration-500 border border-transparent hover:bg-[#0F2847] hover:shadow-2xl ${(activeSide === "live" && activeIndex === i) ? "bg-white border-black/5 shadow-sm" : ""}`}
              >
                <div className="relative z-10">
                  <div className={`flex items-center gap-6 transition-all duration-500 ${(activeSide === "live" && activeIndex === i) ? "mb-6" : "mb-0"}`}>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 shrink-0 shadow-sm"
                      style={{ backgroundColor: (activeSide === "live" && activeIndex === i) ? step.color : `${step.color}15` }}
                    >
                      <step.icon
                        className="w-7 h-7 transition-colors group-hover:text-white"
                        style={{ color: (activeSide === "live" && activeIndex === i) ? "#FFFFFF" : step.color }}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 text-[#0F2847] group-hover:text-teal-400 transition-colors">Step 0{i + 1}</span>
                      <h3 className="text-2xl font-bold transition-colors duration-500 text-[#0F2847] group-hover:text-white">{step.title}</h3>
                    </div>
                  </div>

                  <AnimatePresence>
                    {(activeSide === "live" && activeIndex === i) && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <p className="text-base font-bold mb-4 text-[#0F2847] group-hover:text-teal-400 transition-colors">
                          {step.short}
                        </p>
                        <p className="text-base leading-relaxed font-normal text-[#0F2847] group-hover:text-white transition-colors">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Immersive Phone Stage */}
          <div className="flex flex-col items-center order-1 lg:order-2 lg:sticky lg:top-[20rem] mt-31">
            <div className="relative group scale-100 lg:scale-100">
              <motion.div
                animate={{
                  boxShadow: `0 50px 100px -20px ${activeStep.color}33`,
                  y: [0, -10, 0]
                }}
                transition={{
                  boxShadow: { duration: 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative w-[340px] aspect-[9/19] border-[14px] border-[#1C2B3A] rounded-[3.5rem] bg-white overflow-hidden z-10 shadow-2xl"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1C2B3A] rounded-b-2xl z-30" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeSide}-${activeIndex}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full bg-gray-50 flex items-center justify-center p-8"
                  >
                    <div className="text-center">
                      <activeStep.icon className="w-20 h-20 mx-auto mb-6 opacity-20" style={{ color: activeStep.color }} />
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-2">{activeSide} Mode Mockup</p>
                      <h4 className="text-lg font-bold text-gray-400">{activeStep.title}</h4>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <AnimatePresence>
                <motion.div
                  key={`floating-${activeSide}-${activeIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  className="absolute -right-16 top-1/4 z-20 w-40 p-4 rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4" style={{ color: activeStep.color }} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live Status</span>
                  </div>
                  <div className="text-xl font-bold text-[#0F2847]">98.2% <span className="text-[10px] font-medium text-green-500 ml-1">Accuracy</span></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Phrase Mode Process */}
          <div className="relative space-y-2 order-3 lg:text-right w-full">
            <div className="absolute right-[60px] top-40 bottom-20 w-1.5 bg-[#0F2847]/10 -z-0 hidden lg:block rounded-full" />
            <div className="mb-8 px-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-[#2A8FA0]">Phrase Mode Flow</h3>
              <p className="text-xs text-slate-400 mt-2">Precision Capture & Synthesis</p>
            </div>
            {phraseSteps.map((step, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => { setActiveSide("phrase"); setActiveIndex(i); }}
                onClick={() => { setActiveSide("phrase"); setActiveIndex(i); }}
                className={`relative group cursor-pointer p-8 rounded-[2.5rem] transition-all duration-500 border border-transparent hover:bg-[#0F2847] hover:shadow-2xl ${(activeSide === "phrase" && activeIndex === i) ? "bg-white border-black/5 shadow-sm" : ""}`}
              >
                <div className="relative z-10">
                  <div className={`flex items-center lg:flex-row-reverse gap-6 transition-all duration-500 ${(activeSide === "phrase" && activeIndex === i) ? "mb-6" : "mb-0"}`}>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 shrink-0 shadow-sm"
                      style={{ backgroundColor: (activeSide === "phrase" && activeIndex === i) ? step.color : `${step.color}15` }}
                    >
                      <step.icon
                        className="w-7 h-7 transition-colors group-hover:text-white"
                        style={{ color: (activeSide === "phrase" && activeIndex === i) ? "#FFFFFF" : step.color }}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 text-[#0F2847] group-hover:text-teal-400 transition-colors">Step 0{i + 1}</span>
                      <h3 className="text-2xl font-bold transition-colors duration-500 text-[#0F2847] group-hover:text-white">{step.title}</h3>
                    </div>
                  </div>

                  <AnimatePresence>
                    {(activeSide === "phrase" && activeIndex === i) && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <p className="text-base font-bold mb-4 text-[#0F2847] group-hover:text-teal-400 transition-colors">
                          {step.short}
                        </p>
                        <p className="text-base leading-relaxed font-normal text-[#0F2847] group-hover:text-white transition-colors">
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
      </div>
    </section>
  );
}

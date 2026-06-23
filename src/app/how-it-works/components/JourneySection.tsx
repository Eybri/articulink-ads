git t"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Mic2, Play } from "lucide-react";
import { liveSteps, phraseSteps } from "../constants";

export default function JourneySection() {
  const [activeSide, setActiveSide] = useState<"live" | "phrase">("live");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = activeSide === "live" ? liveSteps[activeIndex] : phraseSteps[activeIndex];

  return (
    <section className="py-32 relative mb-20 overflow-visible">
      {/* Background Aesthetic Waves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
            fill="#2A8FA0"
            animate={{ d: ["M0,50 Q25,30 50,50 T100,50 V100 H0 Z", "M0,50 Q25,70 50,50 T100,50 V100 H0 Z", "M0,50 Q25,30 50,50 T100,50 V100 H0 Z"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
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
          <div className="flex flex-col items-center order-1 lg:order-2 lg:sticky lg:top-[12rem] mt-2">
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full bg-[#FAF8F4] flex flex-col p-4 pt-10"
                  >
                    {/* Status Badge */}
                    <div className="flex flex-col items-center gap-1 mb-4">
                      <div
                        className="px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest"
                        style={{
                          backgroundColor: activeSide === "live" ? "#2A8FA010" : "#1A448010",
                          borderColor: activeSide === "live" ? "#2A8FA020" : "#1A448020",
                          color: activeSide === "live" ? "#2A8FA0" : "#1A4480"
                        }}
                      >
                        {activeSide === "live" ? "Live Mode Active" : "Phrase Mode Active"}
                      </div>
                    </div>

                    {/* Mode Toggle Mockup */}
                    <div className="bg-white p-1 rounded-full border border-[#DDD6C8]/40 shadow-sm flex relative mb-6">
                      <div
                        className="absolute top-1 bottom-1 rounded-full transition-all duration-500"
                        style={{
                          left: activeSide === "phrase" ? "4px" : "calc(50% + 0px)",
                          right: activeSide === "phrase" ? "calc(50% + 0px)" : "4px",
                          backgroundColor: activeSide === "phrase" ? "#1A4480" : "#2A8FA0"
                        }}
                      />
                      <div className={`flex-1 py-2 text-center text-[10px] font-bold z-10 ${activeSide === "phrase" ? "text-white" : "text-[#4A5A6A]"}`}>Phrase Mode</div>
                      <div className={`flex-1 py-2 text-center text-[10px] font-bold z-10 ${activeSide === "live" ? "text-white" : "text-[#4A5A6A]"}`}>Live Mode</div>
                    </div>

                    {/* Mic Section */}
                    <div className="flex flex-col items-center gap-4 mb-6">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Pulse Ring effect */}
                        {activeStep.mockup?.isRecording && (
                          <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: activeSide === "live" ? "#2A8FA0" : "#1A4480" }}
                          />
                        )}
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10 transition-colors duration-500"
                          style={{
                            backgroundColor: activeStep.mockup?.isRecording ? "#DC2626" : (activeSide === "live" ? "#2A8FA0" : "#1A4480")
                          }}
                        >
                          <Mic2 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#1C2B3A] text-center px-4">
                        {activeStep.mockup?.status}
                      </span>
                    </div>

                    {/* Transcript Card */}
                    <div className="bg-white rounded-3xl p-4 shadow-md border border-[#DDD6C8]/40 flex-1 flex flex-col overflow-hidden">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: activeSide === "live" ? "#2A8FA010" : "#1A448010" }}>
                          <Activity className="w-3 h-3" style={{ color: activeSide === "live" ? "#2A8FA0" : "#1A4480" }} />
                        </div>
                        <span className="text-[10px] font-extrabold text-[#1C2B3A]">{activeSide === "live" ? "Live Transcript" : "Phrase Transcript"}</span>
                        <div className="flex-1 h-px bg-gray-100 ml-2" />
                        {(activeStep.mockup as any)?.confidence > 0 && (
                          <div className="px-1.5 py-0.5 rounded bg-[#2A8FA010] text-[#2A8FA0] text-[7px] font-black uppercase">
                            {(activeStep.mockup as any).confidence}% CLARITY
                          </div>
                        )}
                      </div>

                      <div className="flex-1 text-[13px] text-[#4A5A6A] font-medium leading-relaxed">
                        {activeStep.mockup?.isLoading ? (
                          <div className="flex items-center justify-center h-full">
                            <div className="w-6 h-6 border-2 border-[#2A8FA0] border-t-transparent rounded-full animate-spin" />
                          </div>
                        ) : activeStep.mockup?.words?.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5">
                            {activeStep.mockup.words.map((w: any, i: number) => {
                              const wordText = typeof w === "string" ? w : w.word;
                              const confidence = typeof w === "string" ? 100 : w.confidence;
                              return (
                                <span
                                  key={i}
                                  className="px-1.5 py-0.5 rounded transition-colors duration-500"
                                  style={{
                                    backgroundColor: confidence > 90 ? (activeSide === "live" ? "#2A8FA010" : "#1A448010") : confidence > 70 ? "#F59E0B10" : "#EF444410",
                                    border: `1px solid ${confidence > 90 ? (activeSide === "live" ? "#2A8FA020" : "#1A448020") : confidence > 70 ? "#F59E0B20" : "#EF444420"}`,
                                    color: confidence > 90 ? "#1C2B3A" : confidence > 70 ? "#B45309" : "#B91C1C"
                                  }}
                                >
                                  {wordText}
                                </span>
                              );
                            })}
                            {activeStep.mockup.isRecording && <span className="animate-pulse">|</span>}
                          </div>
                        ) : (
                          <p className="opacity-40 italic">
                            {activeStep.mockup?.transcript || (activeStep.mockup?.isRecording ? "Listening..." : "Start speaking...")}
                          </p>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 flex flex-col gap-2">
                        <motion.div
                          animate={activeStep.mockup?.isSpeaking ? { scale: [1, 1.02, 1] } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-500"
                          style={{
                            backgroundColor: activeSide === "live" ? "#2A8FA0" : "#1A4480",
                            opacity: (activeStep.mockup?.transcript || activeStep.mockup?.words?.length > 0) ? 1 : 0.3
                          }}
                        >
                          <Play className="w-3 h-3 text-white fill-white" />
                          <span className="text-[10px] font-black text-white uppercase tracking-wider">Play Clarity Voice</span>
                        </motion.div>
                      </div>
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {activeSide === "live" ? "System Health" : "Transcription"}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#0F2847]">
                    {(activeStep.mockup as any)?.confidence > 0
                      ? `${(activeStep.mockup as any).confidence}%`
                      : (activeStep.mockup?.isRecording ? "Live" : "Optimal")}
                    <span className="text-[10px] font-medium text-green-500 ml-1">
                      {(activeStep.mockup as any)?.confidence > 0 ? "Clarity" : "Active"}
                    </span>
                  </div>
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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mic2, Cpu, BarChart3, Cloud, ArrowRight, Play, CheckCircle2, Sparkles, Activity, Layers, Zap, MapPin, Globe } from "lucide-react";

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

const liveSteps = [
  {
    icon: Zap,
    title: "Enable Live Mode",
    short: "Activate Streaming",
    desc: "Start by toggling the 'Simultaneous' switch in the app. This initializes the live neural engine, preparing Articulink for continuous, real-time audio processing.",
    color: "#2A8FA0", // Teal
    tech: "Step 01"
  },
  {
    icon: Mic2,
    title: "One-Tap Start",
    short: "Hands-Free Flow",
    desc: "Simply tap the microphone icon once to begin. Unlike Phrase mode, you don't need to hold or tap again for every sentence—just speak naturally as you would in a normal conversation.",
    color: "#FF6B6B", // Coral
    tech: "Step 02"
  },
  {
    icon: Activity,
    title: "Real-Time Streaming",
    short: "3-Second Intervals",
    desc: "Our AI processes your voice in rapid 3-second segments. You'll see the transcription appear instantly on the screen as the engine captures every phonetic nuance without delay.",
    color: "#1A4480", // Royal Blue
    tech: "Step 03"
  },
  {
    icon: Globe,
    title: "Bilingual Intelligence",
    short: "Tagalog-English Sync",
    desc: "The system automatically detects whether you're speaking Tagalog or English. It provides fluid, context-aware transcriptions that adapt to your natural code-switching patterns.",
    color: "#FF9F43", // Orange
    tech: "Step 04"
  },
  {
    icon: CheckCircle2,
    title: "End Session",
    short: "Session Close",
    desc: "Tap the microphone one last time to end the session. Live mode is built for real-time, immediate communication and does not persist data to your history, keeping your interactions lightweight.",
    color: "#3DAFC4", // Teal Light
    tech: "Step 05"
  }
];

const phraseSteps = [
  {
    icon: Layers,
    title: "Precision Capture",
    short: "Record Full Phrases",
    desc: "Use Phrase Mode for high-accuracy transactions. Tap the microphone and speak a complete sentence or phrase. This mode focuses on maximum phonetic clarity and spelling precision.",
    color: "#1A4480", // Royal Blue
    tech: "Step 01"
  },
  {
    icon: Cpu,
    title: "Neural Transcription",
    short: "Whisper Optimization",
    desc: "Tap the mic again to stop recording. Our fine-tuned Whisper Small model then performs a deep analysis of your speech, generating a highly accurate text output in seconds.",
    color: "#FF9F43", // Orange
    tech: "Step 02"
  },
  {
    icon: BarChart3,
    title: "Clarity Feedback",
    short: "WER & Accuracy Metrics",
    desc: "Instantly view your Word Error Rate (WER) and clarity score. The app provides visual feedback on which parts of your phrase were articulated clearly and where you can improve.",
    color: "#2A8FA0", // Teal
    tech: "Step 03"
  },
  {
    icon: Play,
    title: "Audio Synthesis",
    short: "The 'Speak' Button",
    desc: "Once transcribed, click the large 'Speak' button. Articulink will play back your phrase with perfect articulation, acting as your vocal proxy in shops or official appointments.",
    color: "#FF6B6B", // Coral
    tech: "Step 04"
  },
  {
    icon: Cloud,
    title: "Dashboard Sync",
    short: "Long-term Tracking",
    desc: "Every phrase is logged into your personal growth dashboard. Track how your accuracy improves over time across different categories like 'Daily Essentials' or 'Medical'.",
    color: "#0F2847", // Deep Navy
    tech: "Step 05"
  }
];


export default function HowItWorks() {
  const [activeSide, setActiveSide] = useState<"live" | "phrase">("live");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeStep = activeSide === "live" ? liveSteps[activeIndex] : phraseSteps[activeIndex];

  return (
    <main className="min-h-screen pt-20 overflow-hidden" style={{ backgroundColor: C.cream }}>
      {/* Hero Section */}
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

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-20 fill-[#FAF8F4]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,106.34,124.93,103,184.7,93,243.83,83.1,289.44,68.45,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* The Journey Section - Full Width Immersive Tutorial */}
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
              {/* Vertical Progress Line */}
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
              {/* Vertical Progress Line */}
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

      {/* Designed for Communication Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}>
              Designed for <span style={{ color: C.teal }}>Communication</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: C.textMid }}>
              Articulink isn&apos;t just a tool; it&apos;s a companion in your journey to clearer, more confident communication and meaningful connection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Interaction",
                desc: "Real-time transcription for meetings, classes, and social events.",
                icon: Zap,
                color: "#2A8FA0", // Teal
                accent: "#3DAFC4"
              },
              {
                title: "Phrase Precision",
                desc: "Record specific sentences for high-accuracy vocal proxies.",
                icon: Mic2,
                color: "#FF6B6B", // Coral
                accent: "#FF8E8E"
              },
              {
                title: "Progress Tracking",
                desc: "Visualize your journey to clearer speech with data-driven insights.",
                icon: BarChart3,
                color: "#1A4480", // Royal Blue
                accent: "#60A5FA"
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-[3rem] transition-all duration-500 bg-white border border-black/5 hover:bg-[#0F2847] hover:shadow-2xl cursor-default"
                style={{ "--hover-accent": feature.accent } as React.CSSProperties}
              >
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-white/10 shadow-sm"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-8 h-8 transition-colors group-hover:text-[var(--hover-accent)]" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#0F2847] group-hover:text-[var(--hover-accent)] transition-colors duration-500">{feature.title}</h3>
                  <p className="text-lg leading-relaxed font-normal text-[#0F2847] group-hover:text-white transition-colors duration-500 opacity-70 group-hover:opacity-100">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Pillars Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: C.deepNavy }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#3DAFC4,transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
                The Engine of <br />
                <span style={{ color: C.tealLight }}>Intelligence</span>
              </h2>
              <p className="text-xl mb-12" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
                We combine industry-leading AI models to create a seamless communication experience. No lag, no complexity—just results.
              </p>

              <div className="space-y-6">
                {[
                  { name: "Fine-tuned Whisper Small", role: "Optimized ASR Model", color: "#3DAFC4" },
                  { name: "Google Gemini", role: "Intelligent Chatbot", color: "#2A8FA0" },
                  { name: "Articulink Engine", role: "Clarity & Scoring", color: "#FAF8F4" }
                ].map((tech, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-2 h-10 rounded-full" style={{ backgroundColor: tech.color }} />
                    <div>
                      <h4 className="text-white font-bold">{tech.name}</h4>
                      <p className="text-sm opacity-60 text-white">{tech.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-4/5 h-4/5 border border-white/10 rounded-full flex items-center justify-center"
              >
                <div className="w-3/4 h-3/4 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-1/2 h-1/2 border border-white/40 rounded-full animate-pulse" />
                </div>
              </motion.div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <Cpu className="w-16 h-16 text-teal-400 mb-4 opacity-50" />
                <p className="text-xs font-mono text-teal-400 opacity-60 uppercase tracking-[0.3em]">System Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mastery Suite Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}>
              The Full <span style={{ color: C.teal }}>Articulink Experience</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed text-slate-500">
              See how our app works to help you speak clearer and connect with others more easily.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left Column: Features 1-3 */}
            <div className="space-y-8 order-2 lg:order-1">
              {[
                {
                  icon: Mic2,
                  title: "Voice to Text",
                  desc: "Turn your speech into text instantly. Choose between High Precision for perfect spelling or Real-Time for fast, live conversations.",
                  color: "#1A4480", // Royal Blue
                  accent: "#60A5FA"
                },
                {
                  icon: Zap,
                  title: "AI Chat Assistant",
                  desc: "Use our smart chatbot powered by Google Gemini to help you find the right words or translate thoughts between Tagalog and English.",
                  color: "#2A8FA0", // Teal
                  accent: "#3DAFC4"
                },
                {
                  icon: MapPin,
                  title: "Find a Clinic",
                  desc: "Easily find and contact speech clinics and specialists near you across the Philippines with our built-in interactive map.",
                  color: "#FF6B6B", // Coral
                  accent: "#FF8E8E"
                }
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial="initial"
                  whileHover="hover"
                  className="group relative p-10 rounded-[3rem] bg-white border border-black/5 hover:bg-[#0F2847] transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl"
                  style={{ "--hover-accent": feat.accent } as React.CSSProperties}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-6">
                      <div
                        className="w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-white/10 shadow-sm"
                        style={{ backgroundColor: `${feat.color}15` }}
                      >
                        <feat.icon className="w-8 h-8 transition-colors group-hover:text-[var(--hover-accent)]" style={{ color: feat.color }} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F2847] group-hover:text-[var(--hover-accent)] transition-colors duration-500">{feat.title}</h3>
                    </div>

                    <motion.div
                      variants={{
                        initial: { height: 0, opacity: 0 },
                        hover: { height: "auto", opacity: 1 }
                      }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-lg leading-relaxed font-normal text-[#0F2847] group-hover:text-white transition-colors duration-500 pt-2 opacity-70 group-hover:opacity-100">
                        {feat.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Column: Phone Demo */}
            <div className="flex flex-col items-center order-1 lg:order-2 lg:sticky lg:top-40">
              <div className="relative group scale-110 lg:scale-110 mb-12">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2A8FA0] mb-2 block">App Demonstration</span>
                </div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative w-[320px] aspect-[9/19] border-[14px] border-[#1C2B3A] rounded-[3.5rem] bg-[#0F2847] overflow-hidden shadow-[0_40px_80px_-15px_rgba(15,40,71,0.4)] flex items-center justify-center cursor-pointer"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1C2B3A] rounded-b-2xl z-20" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1A4480] to-[#0F2847] opacity-80" />
                  <div className="relative z-10 flex flex-col items-center p-10 text-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </div>
                    <p className="text-white text-xs font-bold tracking-[0.2em] uppercase opacity-70">Play Video Demo</p>
                  </div>

                  <motion.div
                    animate={{ x: ["-100%", "250%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-32 bg-white/5 skew-x-12"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Column: Features 4-6 */}
            <div className="space-y-8 order-3">
              {[
                {
                  icon: BarChart3,
                  title: "Track Progress",
                  desc: "See how much you've improved. Our app automatically records your speech clarity and speed so you can celebrate your milestones.",
                  color: "#FF9F43", // Orange
                  accent: "#FFB347"
                },
                {
                  icon: Globe,
                  title: "English & Tagalog",
                  desc: "Speak naturally in both English and Tagalog. Articulink is specially designed to understand and translate between both languages smoothly.",
                  color: "#2A8FA0", // Teal
                  accent: "#3DAFC4"
                },
                {
                  icon: Cloud,
                  title: "Safe & Private",
                  desc: "Your data is always protected. All your recordings and history are securely saved and encrypted, so only you can access them.",
                  color: "#3DAFC4", // Teal Light
                  accent: "#7EE7F7"
                }
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial="initial"
                  whileHover="hover"
                  className="group relative p-10 rounded-[3rem] bg-white border border-black/5 hover:bg-[#0F2847] transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl lg:text-right"
                  style={{ "--hover-accent": feat.accent } as React.CSSProperties}
                >
                  <div className="relative z-10">
                    <div className="flex items-center lg:flex-row-reverse gap-6 mb-6">
                      <div
                        className="w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-white/10 shadow-sm"
                        style={{ backgroundColor: `${feat.color}15` }}
                      >
                        <feat.icon className="w-8 h-8 transition-colors group-hover:text-[var(--hover-accent)]" style={{ color: feat.color }} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F2847] group-hover:text-[var(--hover-accent)] transition-colors duration-500">{feat.title}</h3>
                    </div>

                    <motion.div
                      variants={{
                        initial: { height: 0, opacity: 0 },
                        hover: { height: "auto", opacity: 1 }
                      }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-lg leading-relaxed font-medium text-[#0F2847] group-hover:text-white transition-colors duration-500 pt-2 opacity-70 group-hover:opacity-100">
                        {feat.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

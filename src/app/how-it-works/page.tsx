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
    short: "Fine-tuned Whisper Small",
    desc: "Our backend leverages a fine-tuned Whisper Small model optimized for ASR, providing rapid and precise phonetic transcription for any speaker.",
    image: "/images/step2.png",
    color: "#1A4480",
    tech: "Optimized ASR"
  },
  {
    icon: BarChart3,
    title: "Intelligent Interaction",
    short: "Gemini-Powered Chatbot",
    desc: "Engage with our Gemini-powered chatbot to translate text or refine your communication. Click 'Speak' in Normal mode to master pronunciation.",
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
                    <div className={`absolute -left-[3.75rem] top-0 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center transition-all duration-500 shadow-sm ${activeStep === i ? "scale-125 z-10" : "scale-100 bg-gray-100"
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
                      {[1, 2, 3, 4].map(b => (
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
      {/* Designed for Growth Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}>
              Designed for <span style={{ color: C.teal }}>Your Growth</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: C.textMid }}>
              Articulink isn&apos;t just a tool; it&apos;s a companion in your journey to clearer, more confident communication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Articulation",
                desc: "Our 'Normal Mode' allows you to perfect every syllable with instant text-to-speech playback.",
                icon: Zap,
                label: "Mastery"
              },
              {
                title: "Natural Conversation",
                desc: "Use 'Simultaneous Mode' to keep the flow in real-world meetings and social gatherings.",
                icon: Activity,
                label: "Real-time"
              },
              {
                title: "Intelligent Insights",
                desc: "Visualize your progress with data-driven metrics that track your clarity over weeks and months.",
                icon: BarChart3,
                label: "Analysis"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2.5rem] bg-[#FAF8F4] border border-black/5 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" style={{ color: C.teal }} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2 block">{feature.label}</span>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
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

            {/* Placeholder for Technical Diagram */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}>
              Complete <span style={{ color: C.teal }}>Communication Ecosystem</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: C.textMid }}>
              Every tool you need to master your speech and navigate the world with confidence, all in one seamless application.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Column: Features 1-3 */}
            <div className="space-y-10 order-2 lg:order-1">
              {[
                {
                  icon: Mic2,
                  title: "Dual-Mode ASR",
                  desc: "Switch between Precise and Simultaneous modes using fine-tuned Whisper Small.",
                  color: "#1A4480"
                },
                {
                  icon: Zap,
                  title: "Gemini Chatbot",
                  desc: "Get instant Tagalog-English translation and AI-powered conversation support.",
                  color: "#2A8FA0"
                },
                {
                  icon: MapPin,
                  title: "Facility Locator",
                  desc: "Connect with clinical facilities and speech pathologists across the Philippines.",
                  color: "#1A4480"
                }
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="group relative"
                >
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F4] flex items-center justify-center shrink-0 border border-black/5 shadow-sm group-hover:bg-white transition-colors">
                      <feat.icon className="w-6 h-6" style={{ color: feat.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#0F2847]">{feat.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Column: Phone Demo */}
            <div className="flex flex-col items-center order-1 lg:order-2">
              <div className="relative group scale-110 lg:scale-100">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2A8FA0] mb-2 block">Interactive Demo</span>
                </div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative w-[260px] aspect-[9/19] border-[10px] border-[#1C2B3A] rounded-[2.5rem] bg-[#0F2847] overflow-hidden shadow-[0_40px_80px_-15px_rgba(15,40,71,0.4)] flex items-center justify-center cursor-pointer"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1C2B3A] rounded-b-xl z-20" />

                  {/* Video Placeholder content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1A4480] to-[#0F2847] opacity-80" />
                  <div className="relative z-10 flex flex-col items-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                    <p className="text-white text-[10px] font-medium tracking-wide uppercase">Play Mobile Demo</p>
                  </div>

                  <motion.div
                    animate={{ x: ["-100%", "250%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-24 bg-white/5 skew-x-12"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Column: Features 4-6 */}
            <div className="space-y-10 order-3">
              {[
                {
                  icon: BarChart3,
                  title: "Speech Analytics",
                  desc: "Track your clarity, pace, and improvement milestones with detailed visual metrics.",
                  color: "#3DAFC4"
                },
                {
                  icon: Globe,
                  title: "Bilingual Support",
                  desc: "Seamlessly transition between English and Tagalog in any conversation mode.",
                  color: "#2A8FA0"
                },
                {
                  icon: Cloud,
                  title: "Secure History",
                  desc: "Every interaction is encrypted and saved to your personal communication profile.",
                  color: "#0F2847"
                }
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: -10 }}
                  className="group relative lg:text-right"
                >
                  <div className="flex lg:flex-row-reverse gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F4] flex items-center justify-center shrink-0 border border-black/5 shadow-sm group-hover:bg-white transition-colors">
                      <feat.icon className="w-6 h-6" style={{ color: feat.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#0F2847]">{feat.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                    </div>
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

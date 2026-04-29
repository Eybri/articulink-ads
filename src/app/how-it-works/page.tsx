"use client";

import { motion } from "framer-motion";
import { Mic2, Cpu, BarChart3, Cloud, Layers, CheckCircle2 } from "lucide-react";

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
    desc: "High-fidelity recording using your device's microphone, with built-in background noise suppression.",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    desc: "Audio is analyzed using OpenAI's Whisper Small model, specialized for phoneme clarity and recognition.",
  },
  {
    icon: BarChart3,
    title: "Clarity Analysis",
    desc: "Our engine compares the speech to reference datasets to generate an objective clarity score.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    desc: "Sessions are securely synced to your private profile for long-term progress tracking.",
  }
];

export default function HowItWorks() {
  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: C.cream }}>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: C.deepNavy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            How <span style={{ color: C.tealLight }}>Articulink</span> Works
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(200, 216, 238, 0.8)" }}>
            Our technology stack is built on precision, speed, and clinical validation. 
            Here is the journey of your voice through our system.
          </p>
        </div>
      </section>

      {/* The Process Flow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-black/5 -translate-y-1/2 z-0" />
            
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-xl border border-black/5 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg" style={{ backgroundColor: C.teal }}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: C.textDark }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.textMid }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Spotlight */}
      <section className="py-24" style={{ backgroundColor: C.deepNavy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-6 h-6" style={{ color: C.tealLight }} />
                  <span className="uppercase tracking-[0.3em] text-xs font-bold" style={{ color: C.tealLight }}>Tech Spotlight</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  The Whisper <br />Small Engine
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
                  We utilize OpenAI&apos;s Whisper Small model, a robust automatic speech 
                  recognition (ASR) system. Unlike standard ASR, we&apos;ve tuned our 
                  implementation to detect subtle nuances in articulation, making it 
                  the perfect tool for speech therapy and clarity assessment.
                </p>
                <ul className="space-y-4">
                  {[
                    "Optimized for Tagalog & English",
                    "Real-time processing on-device",
                    "Superior performance in noisy environments"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5" style={{ color: C.tealLight }} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#2A8FA0] to-[#1A4480] opacity-20" />
                 <div className="flex items-center justify-center h-full">
                    <Cpu className="w-24 h-24 text-white opacity-20 animate-pulse" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

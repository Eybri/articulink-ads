"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { C } from "../constants";

export default function TechnicalPillarsSection() {
  return (
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
  );
}

"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { C } from "../constants";

export default function HeroSection() {
  return (
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
  );
}

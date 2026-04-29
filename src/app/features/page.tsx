"use client";

import { motion } from "framer-motion";
import Features from "@/components/Features";
import { Brain, Zap, Shield, Globe, Mic2, BarChart3 } from "lucide-react";

const C = {
  cream: "#FAF8F4",
  deepNavy: "#0F2847",
  teal: "#2A8FA0",
  tealLight: "#3DAFC4",
  royalBlue: "#1A4480",
  textDark: "#1C2B3A",
  textMid: "#4A5A6A",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: C.cream }}>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: C.deepNavy }}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(42, 143, 160, 0.15)" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Powerful Features for <br />
            <span style={{ color: C.tealLight }}>Clearer Communication</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "rgba(200, 216, 238, 0.8)" }}
          >
            Articulink combines state-of-the-art AI with clinical expertise to provide 
            a comprehensive toolkit for speech improvement.
          </motion.p>
        </div>
      </section>

      {/* Main Features Grid (Reusing the component) */}
      <Features />

      {/* Deep Dive Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
                AI-Powered <br />
                <span style={{ color: C.teal }}>Clarity Scoring</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
                Our proprietary algorithm analyzes your speech against thousands of 
                high-fidelity audio samples to provide a percentage-based clarity score. 
                This isn&apos;t just about being heard; it&apos;s about being understood.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Sub-millisecond processing latency" },
                  { icon: Brain, text: "Neural-network phoneme analysis" },
                  { icon: Shield, text: "HIPAA-compliant data handling" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-black/5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: C.teal }}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold" style={{ color: C.textDark }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
              style={{ backgroundColor: C.deepNavy }}
            >
              {/* Visual representation of the score */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
                <div className="text-8xl font-bold mb-2" style={{ color: C.tealLight }}>87%</div>
                <div className="text-xl uppercase tracking-[0.2em] opacity-60 mb-8">Clarity Score</div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#2A8FA0] to-[#3DAFC4]" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

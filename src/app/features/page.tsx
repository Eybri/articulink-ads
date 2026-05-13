"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

      {/* Deep Dive: WER Analytics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
                Advanced <br />
                <span style={{ color: C.teal }}>WER Analytics</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
                Articulink uses Word Error Rate (WER) to measure transcription accuracy. 
                In speech recognition, WER is the gold standard—where a score of 0% represents 
                a perfect match between spoken words and text. Our AI monitors every session 
                to help you drive this number down to zero.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Sub-millisecond processing latency" },
                  { icon: Brain, text: "Neural-network phoneme analysis" },
                  { icon: BarChart3, text: "Comparative performance tracking" }
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
              {/* Visual representation of the WER */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
                <div className="text-8xl font-bold mb-2" style={{ color: "#FBBF24" }}>5.2%</div>
                <div className="text-xl uppercase tracking-[0.2em] opacity-60 mb-8">Word Error Rate (WER)</div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    whileInView={{ width: "5.2%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]" 
                  />
                </div>
                <p className="mt-8 text-sm text-white/50 text-center italic">
                  Approaching 0% (Optimal Performance)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updated Section: Ariya AI Companion */}
      <section className="py-24" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative p-8 rounded-[3rem] bg-gradient-to-br from-[#1E6B78] to-[#0F2847] shadow-2xl min-h-[400px] flex flex-col justify-center overflow-hidden"
            >
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-lg">
                    <Image src="/images/ariya.png" alt="Ariya" width={40} height={40} className="object-cover" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl rounded-tl-none max-w-[80%] border border-white/20">
                    <p className="text-white text-sm leading-relaxed">Hello! I&apos;m <strong>Ariya</strong>, your Articulink companion. Ready to practice some phrases today?</p>
                  </div>
                </div>
                
                <div className="bg-[#2A8FA0] p-4 rounded-2xl rounded-br-none max-w-[80%] self-end ml-auto shadow-lg">
                  <p className="text-white text-sm font-medium">I want to practice ordering coffee.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-lg">
                    <Image src="/images/ariya.png" alt="Ariya" width={40} height={40} className="object-cover" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl rounded-tl-none max-w-[80%] border border-white/20">
                    <p className="text-white text-sm leading-relaxed">Great choice! Let&apos;s start with: &quot;I would like a large latte, please.&quot;</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
                Meet Ariya: <br />
                <span style={{ color: C.royalBlue }}>Your AI Companion</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
                Ariya isn&apos;t just a chatbot—she&apos;s a safe space 
                to practice speech. Engage in role-play scenarios, ask for 
                pronunciation tips, or simply have a conversation without 
                the pressure of real-world judgment.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Role-play scenarios", "Taglish Translation", "Speech Guidance"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#F5F1EA] text-[#1A4480] border border-[#DDD6C8]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}

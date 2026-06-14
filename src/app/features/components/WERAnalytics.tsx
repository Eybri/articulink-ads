"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, BarChart3 } from "lucide-react";
import { C } from "./constants";

export function WERAnalytics() {
  return (
    <section className="py-24" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl"
            style={{ backgroundColor: C.deepNavy }}
          >
            {/* Visual representation of the WER */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
              <div className="text-8xl font-bold mb-2" style={{ color: "#FBBF24" }}>15.6%</div>
              <div className="text-xl uppercase tracking-[0.2em] opacity-60 mb-8 font-bold">Word Error Rate (WER)</div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "100%" }}
                  whileInView={{ width: "15.6%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]" 
                />
              </div>
              <p className="mt-8 text-sm text-white/50 text-center italic font-medium">
                Enhancing Real-Time Understanding
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
              Advanced <br />
              <span style={{ color: C.teal }}>WER Analytics</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
              Articulink leverages Word Error Rate (WER) to ensure our AI accurately captures your unique speech patterns. This metric drives our real-time transcription engine, constantly adapting to bridge the gap and deliver perfectly clear text to your listeners.
            </p>
            <div className="space-y-4">
              {[
                { icon: Zap, text: "Sub-millisecond processing latency" },
                { icon: Brain, text: "Neural-network phoneme analysis" },
                { icon: BarChart3, text: "Comparative performance tracking" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-[#FAF8F4] border border-black/5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: C.teal }}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg" style={{ color: C.textDark }}>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

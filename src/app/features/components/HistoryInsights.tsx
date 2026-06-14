"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Activity, BarChart2 } from "lucide-react";
import { C } from "./constants";

export function HistoryInsights() {
  return (
    <section className="py-24 overflow-hidden relative" style={{ backgroundColor: C.cream }}>
      {/* Background blobs for aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl mix-blend-multiply" style={{ backgroundColor: C.orbBlue }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl mix-blend-multiply" style={{ backgroundColor: C.orbTeal }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
              Personalized <br />
              <span style={{ color: C.teal }}>History Insights</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
              Every word you speak is analyzed to give you tailored, actionable feedback. 
              Ariya monitors your historical records, highlighting improvements in accuracy 
              and guiding your future practice sessions.
            </p>
            
            <div className="space-y-4">
              {[
                "Track long-term accuracy improvements",
                "Identify specific phoneme challenges",
                "Receive AI-driven motivational feedback"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: C.teal }} />
                  <span className="text-lg font-bold" style={{ color: C.textDark }}>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* UI Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white rounded-[2.5rem] p-8 shadow-xl border border-black/5"
            style={{ isolation: 'isolate' }}
          >
            {/* Feedback Bubble UI */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-10 text-center sm:text-left">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 drop-shadow-md">
                <Image 
                  src="/images/ariya.png" 
                  alt="Ariya" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1 relative pb-4">
                {/* Speech Bubble Tail (Desktop) */}
                <div 
                  className="hidden sm:block absolute left-[-10px] bottom-[30px] w-5 h-5 rounded-sm transform rotate-45"
                  style={{ backgroundColor: C.royalBlue }}
                />
                
                {/* Speech Bubble Tail (Mobile) */}
                <div 
                  className="sm:hidden absolute top-[-10px] left-[50%] -translate-x-1/2 w-5 h-5 rounded-sm transform rotate-45"
                  style={{ backgroundColor: C.royalBlue }}
                />

                {/* Main Message Box */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative p-5 rounded-2xl sm:rounded-bl-sm shadow-lg text-white"
                  style={{ backgroundColor: C.royalBlue }}
                >
                  <p className="text-base font-semibold leading-relaxed">
                    &quot;I&apos;ve noticed your clarity on &apos;S&apos; sounds has improved by 15% this week. Keep up the great work! Every word brings you closer to your goal.&quot;
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Accuracy Stat */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-4 rounded-2xl bg-white border flex flex-col items-center text-center gap-2 shadow-sm"
                style={{ borderColor: C.sandMid }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: `${C.teal}15` }}>
                  <TrendingUp className="w-5 h-5" style={{ color: C.teal }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-60" style={{ color: C.textMid }}>Accuracy</p>
                  <p className="text-2xl font-black" style={{ color: C.textDark }}>92%</p>
                </div>
              </motion.div>

              {/* Time Stat */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-4 rounded-2xl bg-white border flex flex-col items-center text-center gap-2 shadow-sm"
                style={{ borderColor: C.sandMid }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: `${C.royalBlue}15` }}>
                  <Activity className="w-5 h-5" style={{ color: C.royalBlue }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-60" style={{ color: C.textMid }}>Time</p>
                  <p className="text-2xl font-black" style={{ color: C.textDark }}>4.2h</p>
                </div>
              </motion.div>

              {/* Words Stat */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-4 rounded-2xl bg-white border flex flex-col items-center text-center gap-2 shadow-sm"
                style={{ borderColor: C.sandMid }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "#F59E0B15" }}>
                  <BarChart2 className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-60" style={{ color: C.textMid }}>Words</p>
                  <p className="text-2xl font-black" style={{ color: C.textDark }}>1.2k</p>
                </div>
              </motion.div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

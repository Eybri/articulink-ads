"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { C, masteryFeaturesLeft, masteryFeaturesRight } from "../constants";

export default function MasterySuiteSection() {
  return (
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
            {masteryFeaturesLeft.map((feat, i) => (
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
            {masteryFeaturesRight.map((feat, i) => (
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
                    <p className="text-lg leading-relaxed font-normal text-[#0F2847] group-hover:text-white transition-colors duration-500 pt-2 opacity-70 group-hover:opacity-100">
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
  );
}

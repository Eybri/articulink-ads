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
            See how our app works to help you connect with others more easily and communicate with confidence.
          </p>
        </div>

        {/* Large Cinematic Monitor Section */}
        <div className="flex flex-col items-center mb-32">
          <div className="relative group w-full max-w-5xl">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#2A8FA0] mb-2 block">App Trailer & Video Ads</span>
            </div>

            {/* Monitor Screen */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full aspect-video border-[16px] border-[#1C2B3A] rounded-[2rem] bg-[#0F2847] overflow-hidden shadow-[0_60px_120px_-20px_rgba(15,40,71,0.5)] flex items-center justify-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A4480] to-[#0F2847] opacity-90" />
              
              {/* Video Icon/Placeholder */}
              <div className="relative z-10 flex flex-col items-center p-12 text-center">
                <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-[0_0_60px_rgba(42,143,160,0.4)]">
                  <Play className="w-12 h-12 text-white fill-white ml-1" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2 tracking-wide">Watch The Articulink Experience</h3>
                <p className="text-white/50 text-sm font-medium uppercase tracking-[0.2em]">Click to Play Trailer</p>
              </div>

              {/* Cinematic Reflection */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-[600px] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[35deg]"
              />
            </motion.div>

            {/* Monitor Stand - Premium Design */}
            <div className="relative flex flex-col items-center -mt-1">
              <div className="w-48 h-6 bg-[#1C2B3A] shadow-inner" />
              <div className="w-80 h-3 bg-[#1C2B3A] rounded-full shadow-2xl" />
            </div>

            {/* Ambient Glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-teal-500/15 blur-[80px] -z-10" />
          </div>
        </div>

        {/* Features Grid - Below Monitor */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...masteryFeaturesLeft, ...masteryFeaturesRight].map((feat, i) => (
            <motion.div
              key={i}
              initial="initial"
              whileHover="hover"
              className="group relative p-8 rounded-[2.5rem] bg-white border border-black/5 hover:bg-[#0F2847] transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl"
              style={{ "--hover-accent": feat.accent } as React.CSSProperties}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-white/10 shadow-sm"
                    style={{ backgroundColor: `${feat.color}15` }}
                  >
                    <feat.icon className="w-7 h-7 transition-colors group-hover:text-[var(--hover-accent)]" style={{ color: feat.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2847] group-hover:text-[var(--hover-accent)] transition-colors duration-500">{feat.title}</h3>
                </div>

                <p className="text-sm leading-relaxed font-normal text-[#0F2847] group-hover:text-white transition-colors duration-500 opacity-70 group-hover:opacity-100">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Waves, Mic, Sparkles, Volume2 } from "lucide-react";
import { C } from "../constants";

const SoftOrb = ({ color, top, left, size, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.4, 0.6, 0.4],
      scale: [1, 1.1, 1],
      x: [0, 20, 0],
      y: [0, -20, 0]
    }}
    transition={{ 
      duration: 10 + Math.random() * 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute rounded-full blur-[100px] -z-10"
    style={{ 
      backgroundColor: color, 
      top, 
      left, 
      width: size, 
      height: size 
    }}
  />
);

const FloatingCard = ({ children, delay, x, y, rotate }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 1, 
      y: [y, y - 15, y],
      x: [x, x + 10, x]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut",
      opacity: { duration: 1 }
    }}
    style={{ rotate: `${rotate}deg` }}
    className="absolute z-20"
  >
    {children}
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* ── Background Orbs (Inspired by Mobile) ── */}
      <SoftOrb color={C.orbTeal} top="10%" left="5%" size="400px" delay={0} />
      <SoftOrb color={C.orbBlue} top="50%" left="60%" size="500px" delay={2} />
      <SoftOrb color={C.orbSand} top="20%" left="40%" size="300px" delay={1} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* ── Left Content: The Story ── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${C.sandMid}`,
                  color: C.tealDark,
                }}
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Our Journey & Inspiration</span>
              </div>

              <h1
                className="text-6xl lg:text-8xl font-bold leading-[1.1] mb-8"
                style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
              >
                Where technology <br />
                meets <span className="text-gradient">compassion</span>.
              </h1>

              <p className="text-xl lg:text-2xl mb-12 max-w-xl leading-relaxed opacity-80" style={{ color: C.textMid }}>
                Articulink wasn&apos;t just built in a lab; it was born from a desire to bridge the gap between 
                <span className="font-bold" style={{ color: C.teal }}> silence </span> 
                and <span className="font-bold" style={{ color: C.royalBlue }}> connection</span>.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-3 pr-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center p-2 overflow-hidden">
                    <Image src="/images/tup-logo.png" alt="TUP" width={32} height={32} className="object-contain" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Rooted In</p>
                    <p className="text-sm font-bold" style={{ color: C.textDark }}>TUP Taguig Research</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-3 pr-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center p-2">
                    <Waves className="w-6 h-6" style={{ color: C.teal }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Core Tech</p>
                    <p className="text-sm font-bold" style={{ color: C.textDark }}>AI Speech Clarity</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Content: Interactive "Mobile Bento" ── */}
          <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
            
            {/* Main App Icon (New) */}
            <FloatingCard x={50} y={150} delay={0} rotate={-5}>
              <div className="w-48 h-48 bg-white rounded-[3rem] shadow-2xl p-6 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent" />
                <Image 
                  src="/images/icon-new.png" 
                  alt="Articulink Icon" 
                  width={140} 
                  height={140} 
                  className="object-contain rounded-[2rem] z-10"
                />
              </div>
            </FloatingCard>

            {/* Simulated "Clarity" Card */}
            <FloatingCard x={220} y={60} delay={1.5} rotate={5}>
              <div className="bg-[#0F2847] p-5 rounded-3xl shadow-2xl border border-white/10 w-64 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Live Mode</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ["20%", "95%", "80%", "98%"] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="h-full bg-teal-400" 
                    />
                  </div>
                  <p className="text-sm font-bold text-white">98% Clarity Achieved</p>
                </div>
              </div>
            </FloatingCard>

            {/* Mobile Mode Toggle Snippet */}
            <FloatingCard x={180} y={340} delay={0.8} rotate={-3}>
              <div className="bg-white p-2 rounded-full shadow-xl border border-gray-100 flex items-center gap-1 w-56">
                <div className="h-10 px-4 bg-teal-500 rounded-full flex items-center justify-center flex-1">
                  <span className="text-[10px] font-bold text-white uppercase">Live</span>
                </div>
                <div className="h-10 px-4 rounded-full flex items-center justify-center flex-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Phrase</span>
                </div>
              </div>
            </FloatingCard>

            {/* Waveform Badge */}
            <FloatingCard x={-20} y={380} delay={2.5} rotate={10}>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-rose-500" />
                </div>
                <div className="flex gap-0.5 items-end h-6">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [10, 24, 12, 20, 10] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-rose-200 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </FloatingCard>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/20 rounded-full blur-[100px] -z-10" />
          </div>

          {/* ── Mobile Layout for Interactive Elements ── */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-12">
             <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center">
                <Image src="/images/icon-new.png" alt="Icon" width={80} height={80} className="rounded-2xl mb-4" />
                <p className="text-xs font-bold text-gray-400 uppercase">The Tool</p>
             </div>
             <div className="bg-[#0F2847] p-6 rounded-3xl shadow-lg flex flex-col items-center justify-center">
                <Volume2 className="w-8 h-8 text-teal-400 mb-4" />
                <p className="text-xs font-bold text-white/50 uppercase">The Voice</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

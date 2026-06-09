"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Mic } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(190, 228, 236, 0.4)" }}
        />
        <div
          className="absolute bottom-[10%] right-[-10%] w-[40%] h-[60%] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(200, 216, 238, 0.4)" }}
        />
        <div
          className="absolute top-[30%] right-[20%] w-[20%] h-[30%] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(232, 224, 208, 0.5)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(42, 143, 160, 0.1)",
                border: "1px solid rgba(42, 143, 160, 0.2)",
                color: "#1E6B78",
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Speech Clarity</span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "#1C2B3A",
              }}
            >
              Communicate with <br />
              <span className="text-gradient">Confidence</span>.
            </h1>

            <p
              className="text-xl mb-10 max-w-lg leading-relaxed"
              style={{ color: "#4A5A6A" }}
            >
              Articulink uses advanced AI to enhance speech intelligibility and provide real-time transcription.
              Designed as an <strong>assistive communication tool</strong> for daily life,
              specifically for individuals with cleft-related speech differences, not for clinical diagnosis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#download"
                style={{ backgroundColor: "#2A8FA0" }}
                className="hover:opacity-90 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
                Download Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                style={{
                  backgroundColor: "#F5F1EA",
                  borderColor: "#DDD6C8",
                  color: "#1C2B3A",
                }}
                className="border px-8 py-4 rounded-2xl font-bold transition-all hover:opacity-90 flex items-center justify-center"
              >
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2"
                    style={{
                      borderColor: "#FAF8F4",
                      backgroundColor: "#EDE8DF",
                    }}
                  />
                ))}
              </div>
              <p className="text-sm font-medium" style={{ color: "#4A5A6A" }}>
                Joined by{" "}
                <span style={{ color: "#1C2B3A" }} className="font-bold">
                  2,500+
                </span>{" "}
                users this month
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-[17.5rem] sm:max-w-[20rem] mx-auto">
              {/* Outer Glow */}
              <div
                className="absolute inset-0 rounded-[3rem] blur-3xl -z-10"
                style={{
                  background:
                    "linear-gradient(to top right, rgba(190,228,236,0.6), rgba(42,143,160,0.3))",
                }}
              />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <Mic className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-teal-800">Phrase Mode</p>
                    <p className="text-sm font-bold text-[#1C2B3A]">Clear Playback</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-1/4 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-blue-800">Live Mode</p>
                    <p className="text-sm font-bold text-[#1C2B3A]">Real-time Enhancement</p>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Device Frame */}
              <div className="relative w-full aspect-[9/19.5] border-[12px] sm:border-[16px] border-[#1C2B3A] rounded-[2.5rem] sm:rounded-[3rem] bg-white shadow-2xl overflow-hidden group flex items-center justify-center">
                {/* Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 sm:h-7 bg-[#1C2B3A] rounded-b-2xl z-20" />

                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <Image
                    src="/images/icon-new.png"
                    alt="Articulink App Icon"
                    fill
                    className="object-contain rounded-[2.5rem] group-hover:opacity-0 transition-all duration-700"
                    priority
                  />
                  <Image
                    src="/images/tup-logo.png"
                    alt="TUP Logo"
                    fill
                    className="object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 p-4"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

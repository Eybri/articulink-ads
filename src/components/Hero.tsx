"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

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
              Speak with <br />
              <span className="text-gradient">Confidence</span> Again.
            </h1>

            <p
              className="text-xl mb-10 max-w-lg leading-relaxed"
              style={{ color: "#4A5A6A" }}
            >
              The only app that uses advanced AI to analyze, clarify, and track
              your speech journey in real-time. Built for therapists, patients,
              and survivors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                style={{ backgroundColor: "#2A8FA0" }}
                className="hover:opacity-90 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-2 group"
              >
                Download Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
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
            <div className="relative z-10 w-full max-w-[500px] mx-auto">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl -z-10"
                style={{
                  background:
                    "linear-gradient(to top right, rgba(190,228,236,0.3), rgba(200,216,238,0.3))",
                }}
              />
              <Image
                src="/hero.png"
                alt="Articulink App Mockup"
                width={500}
                height={800}
                className="rounded-[40px] shadow-2xl"
                priority
              />
            </div>

            {/* Floating Clarity Score Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 glass p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: "rgba(42, 143, 160, 0.1)" }}
                >
                  <Image
                    src="/logo-color.png"
                    alt="Articulink"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#1C2B3A" }}
                  >
                    Clarity Score
                  </p>
                  <p
                    className="text-2xl font-black"
                    style={{ color: "#2A8FA0" }}
                  >
                    94%
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

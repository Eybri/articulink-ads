"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { C } from "../constants";

export default function HeroSection() {
  const [iconIndex, setIconIndex] = React.useState(0);
  const icons = ["/images/app-icon.png", "/images/app-icon-white.png"];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [icons.length]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(190, 228, 236, 0.4)" }}
        />
        <div
          className="absolute bottom-[10%] right-[-10%] w-[40%] h-[60%] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(200, 216, 238, 0.4)" }}
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
                color: C.tealDark,
              }}
            >
              <Heart className="w-4 h-4" />
              <span>About Articulink</span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
            >
              Making every <br />
              <span className="text-gradient">voice heard.</span>
            </h1>

            <p className="text-xl mb-10 max-w-lg leading-relaxed" style={{ color: C.textMid }}>
              Articulink exists to give a voice to those who struggle to be understood.
              We turn uncertainty into confidence and silence into meaningful conversations.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-md shadow-xl max-w-sm"
              style={{
                backgroundColor: "rgba(15, 40, 71, 0.95)", // Deep Navy Dark
                borderColor: "rgba(61, 175, 196, 0.3)" // Teal-ish border
              }}
            >
              <div className="relative w-10 h-10 shrink-0 bg-white/10 rounded-xl p-1.5 border border-white/10">
                <Image src="/images/tup-logo.png" alt="TUP Logo" fill className="object-contain p-0.5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-400 mb-0.5">Research Hub</p>
                <p className="text-sm font-bold text-white">
                  TUP Taguig
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-[4rem] flex items-center justify-center shadow-2xl overflow-hidden"
              style={{
                backgroundColor: "white",
                boxShadow: `0 30px 60px -12px ${C.sandMid}80, 0 18px 36px -18px rgba(0,0,0,0.1)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-50/30" />
              <div className="relative w-full h-full">
                <AnimatePresence>
                  <motion.div
                    key={iconIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center p-8"
                  >
                    <Image
                      src={icons[iconIndex]}
                      alt="Articulink App Icon"
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

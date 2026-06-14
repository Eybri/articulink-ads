"use client";
import React from "react";
import { motion } from "framer-motion";
import { C } from "./constants";

export function HeroSection() {
  return (
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
          Articulink uses state-of-the-art AI to bridge communication gaps for individuals 
          with cleft conditions, empowering clear and confident daily interactions.
        </motion.p>
      </div>
    </section>
  );
}

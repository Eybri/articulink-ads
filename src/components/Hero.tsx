"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-orb-teal/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[60%] bg-orb-blue/40 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[20%] w-[20%] h-[30%] bg-orb-sand/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 text-teal-dark text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Speech Clarity</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-text-dark">
              Speak with <br />
              <span className="text-gradient">Confidence</span> Again.
            </h1>
            
            <p className="text-xl text-text-mid mb-10 max-w-lg leading-relaxed">
              The only app that uses advanced AI to analyze, clarify, and track your speech journey in real-time. Built for therapists, patients, and survivors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button style={{ backgroundColor: "#2A8FA0" }} className="hover:opacity-90 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-2 group">
                Download Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button style={{ backgroundColor: "#F5F1EA", borderColor: "#DDD6C8", color: "#1C2B3A" }} className="border px-8 py-4 rounded-2xl font-bold transition-all hover:opacity-90 flex items-center justify-center">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-cream bg-sand-light" />
                ))}
              </div>
              <p className="text-sm font-medium text-text-mid">
                Joined by <span className="text-text-dark font-bold">2,500+</span> users this month
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
              <div className="absolute inset-0 bg-gradient-to-tr from-orb-teal/30 to-orb-blue/30 rounded-3xl blur-3xl -z-10" />
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
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center text-teal">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-dark">Clarity Score</p>
                  <p className="text-2xl font-black text-teal">94%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

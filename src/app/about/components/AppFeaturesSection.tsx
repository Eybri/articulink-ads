"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { C, featuresData } from "../constants";

export default function AppFeaturesSection() {
  const [activeFeature, setActiveFeature] = React.useState<number | null>(null);
  const [radius, setRadius] = React.useState(260);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 160 : 260);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1A2E 0%, #0F2847 40%, #132D4F 70%, #0B1A2E 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.15) 1px, transparent 0), radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.1) 1px, transparent 0), radial-gradient(1px 1px at 50% 80%, rgba(255,255,255,0.12) 1px, transparent 0), radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.08) 1px, transparent 0), radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.1) 1px, transparent 0), radial-gradient(1.5px 1.5px at 90% 70%, rgba(255,255,255,0.15) 1px, transparent 0)" }} />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full blur-[150px] pointer-events-none" style={{ backgroundColor: "rgba(42, 143, 160, 0.08)" }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] rounded-full blur-[150px] pointer-events-none" style={{ backgroundColor: "rgba(26, 68, 128, 0.08)" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-bold tracking-widest uppercase text-sm mb-4" style={{ color: C.tealLight }}>App Features</h2>
          <p className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Everything you need for <span style={{ background: "linear-gradient(135deg, #3DAFC4, #7DD3E8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>clearer communication</span>
          </p>
          <p className="text-lg mt-6 max-w-2xl mx-auto" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
            Articulink is packed with powerful tools designed to make speech assistance seamless, intelligent, and accessible.
          </p>
        </div>

        <div className="relative min-h-[600px] flex items-center justify-center py-12">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] rounded-full absolute" style={{ border: "1px solid rgba(61, 175, 196, 0.15)" }} />
            <div className="w-[500px] h-[500px] rounded-full absolute" style={{ border: "1px solid rgba(61, 175, 196, 0.08)" }} />
            <div className="w-[700px] h-[700px] rounded-full absolute" style={{ border: "1px solid rgba(61, 175, 196, 0.04)" }} />
            <div className="w-[520px] h-[520px] rounded-full absolute blur-xl" style={{ border: "2px solid rgba(42, 143, 160, 0.06)" }} />
          </div>

          <div className="relative z-20 w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center p-8 text-center transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(15, 40, 71, 0.9), rgba(11, 26, 46, 0.95))",
              border: "1px solid rgba(61, 175, 196, 0.2)",
              boxShadow: "0 0 60px rgba(42, 143, 160, 0.15), 0 0 120px rgba(42, 143, 160, 0.05), inset 0 0 30px rgba(42, 143, 160, 0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <AnimatePresence mode="wait">
              {activeFeature !== null ? (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                    style={{
                      backgroundColor: featuresData[activeFeature].bgColor,
                      color: "white",
                      boxShadow: `0 0 20px ${featuresData[activeFeature].bgColor}50`
                    }}
                  >
                    {React.createElement(featuresData[activeFeature].icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {featuresData[activeFeature].title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
                    {featuresData[activeFeature].desc}
                  </p>
                  <button
                    onClick={() => setActiveFeature(null)}
                    className="mt-6 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
                    style={{ color: C.tealLight }}
                  >
                    ← Back to Overview
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 mb-4 rounded-3xl overflow-hidden" style={{ boxShadow: "0 0 30px rgba(42, 143, 160, 0.2)" }}>
                    <Image src="/images/app-icon.png" alt="Articulink" fill className="object-contain" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: C.tealLight }}>
                    Explore Features
                  </p>
                  <p className="text-xs" style={{ color: "rgba(200, 216, 238, 0.5)" }}>Click a planet to learn more</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            animate={{ rotate: activeFeature === null ? -360 : 360 }}
            transition={{ duration: activeFeature === null ? 50 : 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {featuresData.map((feature, i) => {
              const angle = (i * 360) / 8;
              const currentRadius = isMounted ? radius : 260;
              const x = Math.cos((angle * Math.PI) / 180) * currentRadius;
              const y = Math.sin((angle * Math.PI) / 180) * currentRadius;

              return (
                <div
                  key={i}
                  className="absolute group"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <motion.div
                    animate={{ rotate: activeFeature === null ? 360 : -360 }}
                    transition={{ duration: activeFeature === null ? 50 : 25, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.2, boxShadow: `0 0 30px ${feature.glowColor}` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveFeature(i);
                      }}
                      className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all border"
                      style={{
                        background: "linear-gradient(135deg, rgba(15, 40, 71, 0.8), rgba(11, 26, 46, 0.9))",
                        borderColor: activeFeature === i ? feature.color : "rgba(61, 175, 196, 0.15)",
                        boxShadow: activeFeature === i ? `0 0 20px ${feature.glowColor}` : "0 4px 20px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <feature.icon className="w-6 h-6 md:w-8 md:h-8 transition-colors" style={{ color: feature.color }} />
                    </motion.button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded" style={{ color: feature.color, backgroundColor: "rgba(11, 26, 46, 0.8)", border: `1px solid ${feature.color}30` }}>
                        {feature.label}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

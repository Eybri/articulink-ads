"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Radio, FileText, Play } from "lucide-react";
import { C } from "./constants";

export function LivePhraseMode() {
  const [activeMode, setActiveMode] = useState<"live" | "phrase">("live");

  return (
    <section className="py-24 overflow-hidden relative" style={{ backgroundColor: "#F9FBFC" }}>
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full blur-[150px] opacity-40" style={{ backgroundColor: C.tealLight }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full blur-[150px] opacity-30" style={{ backgroundColor: C.royalBlue }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: `${C.teal}15`, border: `1px solid ${C.teal}30` }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: C.teal }}></span>
              <span className="text-sm font-bold tracking-wide uppercase" style={{ color: C.teal }}>Core Feature</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif", lineHeight: 1.2 }}>
              Communicate clearly with <br />
              <span style={{ color: C.royalBlue }}>Dual Processing Modes</span>
            </h2>
            
            <p className="text-lg leading-relaxed mb-10" style={{ color: C.textMid }}>
              Whether you are in a fast-paced meeting or practicing specific sentences, Articulink adapts to your needs with two powerful listening modes designed for distinct communication scenarios.
            </p>
            
            <div className="space-y-6">
              {/* Live Mode Detail */}
              <div 
                className="p-6 rounded-3xl transition-all cursor-pointer border"
                style={{ 
                  backgroundColor: activeMode === "live" ? "white" : "transparent",
                  borderColor: activeMode === "live" ? "rgba(42, 143, 160, 0.2)" : "transparent",
                  boxShadow: activeMode === "live" ? "0 10px 30px -10px rgba(42, 143, 160, 0.15)" : "none"
                }}
                onClick={() => setActiveMode("live")}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: activeMode === "live" ? C.teal : `${C.teal}15` }}>
                    <Radio className={`w-6 h-6 ${activeMode === "live" ? "text-white" : "text-[#2A8FA0]"}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2" style={{ color: C.textDark }}>Live Mode</h4>
                    <p className="text-base leading-relaxed" style={{ color: C.textMid }}>
                      Continuous, real-time speech enhancement. Perfect for natural, flowing conversations where Articulink transcribes and clarifies your speech seamlessly as you talk.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phrase Mode Detail */}
              <div 
                className="p-6 rounded-3xl transition-all cursor-pointer border"
                style={{ 
                  backgroundColor: activeMode === "phrase" ? "white" : "transparent",
                  borderColor: activeMode === "phrase" ? "rgba(26, 68, 128, 0.2)" : "transparent",
                  boxShadow: activeMode === "phrase" ? "0 10px 30px -10px rgba(26, 68, 128, 0.15)" : "none"
                }}
                onClick={() => setActiveMode("phrase")}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: activeMode === "phrase" ? C.royalBlue : `${C.royalBlue}15` }}>
                    <Mic className={`w-6 h-6 ${activeMode === "phrase" ? "text-white" : "text-[#1A4480]"}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2" style={{ color: C.textDark }}>Phrase Mode</h4>
                    <p className="text-base leading-relaxed" style={{ color: C.textMid }}>
                      Record distinct phrases and play them back with perfect clarity. Ideal for ordering at restaurants, saving essential phrases to your vault, and targeted practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
             <div className="w-[320px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-6 flex flex-col gap-6 relative overflow-hidden">
                {/* Mockup Status Bar */}
                <div className="w-full flex justify-between items-center px-2">
                  <span className="text-xs font-bold text-gray-800">9:41</span>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-gray-200 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
                  </div>
                </div>

                {/* Mode Toggle UI */}
                <div className="bg-[#FAF8F4] p-1.5 rounded-full flex relative">
                  <motion.div 
                    layout
                    className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full shadow-sm"
                    style={{ backgroundColor: activeMode === "live" ? C.teal : C.royalBlue }}
                    animate={{ x: activeMode === "live" ? "calc(100% + 12px)" : "0%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                  <div className="flex-1 text-center py-2 z-10 font-bold text-sm cursor-pointer" style={{ color: activeMode === "phrase" ? "white" : C.textMid }} onClick={() => setActiveMode("phrase")}>Phrase Mode</div>
                  <div className="flex-1 text-center py-2 z-10 font-bold text-sm cursor-pointer" style={{ color: activeMode === "live" ? "white" : C.textMid }} onClick={() => setActiveMode("live")}>Live Mode</div>
                </div>

                {/* Mic Button Area */}
                <div className="py-8 flex flex-col items-center justify-center relative">
                  {activeMode === "live" && (
                     <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-32 h-32 rounded-full"
                        style={{ backgroundColor: C.teal }}
                     />
                  )}
                  <motion.div 
                    layout
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg relative z-10 text-white"
                    style={{ backgroundColor: activeMode === "live" ? C.teal : C.royalBlue }}
                  >
                     {activeMode === "live" ? <Radio className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                  </motion.div>
                  <p className="mt-4 font-bold text-sm" style={{ color: activeMode === "live" ? C.teal : C.royalBlue }}>
                     {activeMode === "live" ? "Listening seamlessly..." : "Tap to record phrase"}
                  </p>
                </div>

                {/* Transcript Card Mockup */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-4 flex flex-col gap-3">
                   <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                     <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" style={{ color: activeMode === "live" ? C.teal : C.royalBlue }} />
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                           {activeMode === "live" ? "Live Transcript" : "Phrase Transcript"}
                        </span>
                     </div>
                     <div className="px-2 py-0.5 rounded border font-bold text-[10px]" style={{ color: activeMode === "live" ? C.teal : C.royalBlue, borderColor: activeMode === "live" ? `${C.teal}30` : `${C.royalBlue}30`, backgroundColor: activeMode === "live" ? `${C.teal}10` : `${C.royalBlue}10` }}>
                        98% CLARITY
                     </div>
                   </div>
                   
                   <p className="text-sm font-medium text-gray-800 leading-relaxed min-h-[60px]">
                      {activeMode === "live" 
                        ? "I'd like to order the grilled salmon with a side of roasted vegetables, please." 
                        : "Could you tell me where the nearest train station is located?"}
                   </p>
                   
                   <div className="w-full mt-2 h-10 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-sm cursor-pointer transition-transform hover:scale-[0.98]" style={{ backgroundColor: activeMode === "live" ? C.teal : C.royalBlue }}>
                      <Play className="w-4 h-4 fill-current" /> Play Clarity Voice
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

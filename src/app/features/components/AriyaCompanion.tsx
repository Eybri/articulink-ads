"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Trash2, Send } from "lucide-react";
import { C } from "./constants";

const scenarios = [
  {
    id: 0,
    label: "History & Progress",
    messages: [
      { type: "user", text: "Ariya, can you show me my progress from last week?" },
      { type: "ariya", text: "Of course! Analyzing your recent sessions... You successfully communicated 42 phrases today. Your interactions are becoming much smoother!" },
      { type: "user", text: "What should I try next?" },
      { type: "ariya", text: "Your live transcripts have been very accurate today! If you have important meetings tomorrow, you can pre-save key sentences in Phrase Mode." }
    ]
  },
  {
    id: 1,
    label: "Support & Clarification",
    messages: [
      { type: "user", text: "Is Articulink a speech therapy tool?" },
      { type: "ariya", text: "Articulink is an assistive communication bridge powered by Gemini AI. I'm not a clinical therapy app, but a companion to help you interact seamlessly and confidently every day." },
      { type: "user", text: "So how exactly does it help me talk better?" },
      { type: "ariya", text: "I provide real-time transcription and phoneme feedback. By seeing your speech converted to text instantly, you can adjust your articulation and build confidence!" }
    ]
  },
  {
    id: 2,
    label: "Feature Guidance",
    messages: [
      { type: "user", text: "How do I use Live Mode for a meeting?" },
      { type: "ariya", text: "Just toggle the 'Simultaneous' switch! I'll transcribe your speech in 3-second intervals so you can have fluid, real-time conversations." },
      { type: "user", text: "Is there a delay when I'm speaking?" },
      { type: "ariya", text: "I've been optimized for sub-millisecond latency. Using the Gemini API, I process your voice almost instantly to ensure your listeners stay in sync with you." }
    ]
  }
];

function PhoneFrame({ scenario, isFront }: { scenario: typeof scenarios[0], isFront: boolean }) {
  return (
    <div 
      className="relative w-[290px] h-[600px] border-[12px] border-[#0F2847] rounded-[3rem] bg-[#FAF8F4] shadow-2xl overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      {/* Smooth Dim Overlay */}
      <motion.div 
        initial={false}
        animate={{ opacity: isFront ? 0 : 0.15 }}
        className="absolute inset-0 bg-black z-50 pointer-events-none" 
      />

      <div className="relative h-full flex flex-col">
        {/* Phone Status Bar */}
        <div className="h-8 w-full flex items-center justify-between px-8 pt-4">
          <span className="text-[10px] font-bold text-[#0F2847]">9:41</span>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#0F2847]/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#0F2847]/10" />
          </div>
        </div>

        {/* Chat Header */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-[#DDD6C8]/40 bg-white/60 backdrop-blur-md">
          <div className="flex items-center gap-2.5 bg-[#2A8FA0]/10 px-3 py-1.5 rounded-xl">
            <div className="w-2 h-2 rounded-full bg-[#34C759] shadow-[0_0_8px_#34C759]" />
            <span className="text-[10px] font-extrabold text-[#2A8FA0] uppercase tracking-widest">Ariya</span>
          </div>
          <Trash2 className="w-4 h-4 text-rose-500 opacity-30" />
        </div>

        {/* Chat Body */}
        <div className="flex-1 relative p-5 space-y-5 overflow-hidden">
          {/* Background Watermark - Scaled up to prevent edge artifacts */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none scale-125">
            <Image src="/images/ariya.png" alt="" width={200} height={200} priority />
          </div>

          <div className="relative z-10 space-y-5">
            {scenario.messages.map((msg, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'items-end gap-3'}`}
              >
                {msg.type === 'ariya' && (
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#2A8FA0]/20 bg-white shrink-0 shadow-md">
                    <Image src="/images/ariya.png" alt="Ariya" width={36} height={36} className="object-contain" />
                  </div>
                )}
                <div className={`p-3.5 rounded-2xl shadow-sm max-w-[85%] ${
                  msg.type === 'user' 
                  ? 'bg-[#2A8FA0] text-white rounded-br-none shadow-[#2A8FA0]/20' 
                  : 'bg-white text-[#1C2B3A] border border-[#DDD6C8]/40 rounded-bl-none'
                }`}>
                  <p className="text-[12px] leading-relaxed font-medium">
                    {msg.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat Input Area Mockup */}
        <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-[#DDD6C8]/40 flex items-center gap-3">
          <div className="flex-1 bg-[#F5F1EA] h-10 rounded-full px-5 flex items-center border border-[#DDD6C8]/60">
            <span className="text-[11px] text-[#4A5A6A] font-medium">Type a response...</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#2A8FA0] flex items-center justify-center shadow-lg shadow-[#2A8FA0]/20">
            <Send className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="h-6 w-full flex justify-center pb-3 bg-white/80">
          <div className="w-20 h-1.5 bg-[#0F2847]/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function PhoneStack() {
  const [index, setIndex] = React.useState(1); // Start with middle scenario

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      <div className="relative w-full h-[600px] flex items-center justify-center">
        {scenarios.map((scenario, i) => {
          let diff = i - index;
          
          // Only show the active phone and the immediate neighbors (diff -1, 0, 1)
          // But the user specifically said "only show until 2nd", so we'll limit visibility
          const isVisible = Math.abs(diff) <= 1;
          
          return (
            <motion.div
              key={scenario.id}
              initial={false}
              animate={{ 
                x: diff * 180, // Slightly tighter spread to avoid text
                z: Math.abs(diff) * -180, 
                scale: 1 - (Math.abs(diff) * 0.12),
                rotateY: diff * -25, 
                opacity: isVisible ? (1 - (Math.abs(diff) * 0.6)) : 0, // Sharper opacity drop
                pointerEvents: isVisible ? 'auto' : 'none',
                zIndex: 10 - Math.abs(diff),
              }}
              transition={{ 
                type: "spring", 
                stiffness: 260, // Smoother, less jerky
                damping: 32, // More controlled
                mass: 1
              }}
              className="absolute cursor-pointer"
              onClick={() => setIndex(i)}
            >
              <PhoneFrame scenario={scenario} isFront={diff === 0} />
            </motion.div>
          );
        })}
      </div>
      
      {/* Pagination Controls */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        {scenarios.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-700 ${
              index === i 
              ? "bg-[#2A8FA0] w-16" 
              : "bg-[#2A8FA0]/20 w-4 hover:bg-[#2A8FA0]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function AriyaCompanion() {
  return (
    <section className="py-24" style={{ backgroundColor: "#F5F1EA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-24 items-center">
          {/* Multi-Phone Stack Carousel */}
          <div className="relative h-[550px] sm:h-[700px] flex items-center justify-center perspective-1000 scale-[0.8] sm:scale-100 origin-center -ml-8 sm:ml-0 overflow-hidden sm:overflow-visible">
            <PhoneStack />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
              Interactive <br />
              <span style={{ color: C.royalBlue }}>Conversations</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
              Ariya is more than a chatbot—she&apos;s your vocal progress partner. 
              Experience seamless transitions across multiple support scenarios, 
              from deep analytics to real-time feature walkthroughs.
            </p>
            
            <div className="space-y-4">
              {[
                "Multi-device synchronization",
                "Proactive progress monitoring",
                "Interactive feature discovery"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2A8FA0]" />
                  <span className="text-lg font-bold" style={{ color: C.textDark }}>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

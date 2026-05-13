"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Features from "@/components/Features";
import { Brain, Zap, Shield, Globe, Mic2, BarChart3, Trash2, Send } from "lucide-react";

const C = {
  cream: "#FAF8F4",
  deepNavy: "#0F2847",
  teal: "#2A8FA0",
  tealLight: "#3DAFC4",
  royalBlue: "#1A4480",
  textDark: "#1C2B3A",
  textMid: "#4A5A6A",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: C.cream }}>
      {/* Hero Section */}
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
            Articulink combines state-of-the-art AI with clinical expertise to provide 
            a comprehensive toolkit for speech improvement.
          </motion.p>
        </div>
      </section>

      {/* Main Features Grid (Reusing the component) */}
      <Features />

      {/* Deep Dive: WER Analytics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
                Advanced <br />
                <span style={{ color: C.teal }}>WER Analytics</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
                Articulink uses Word Error Rate (WER) to measure transcription accuracy. 
                In speech recognition, WER is the gold standard—where a score of 0% represents 
                a perfect match between spoken words and text. Our AI monitors every session 
                to help you drive this number down to zero.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Sub-millisecond processing latency" },
                  { icon: Brain, text: "Neural-network phoneme analysis" },
                  { icon: BarChart3, text: "Comparative performance tracking" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-black/5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: C.teal }}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold" style={{ color: C.textDark }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
              style={{ backgroundColor: C.deepNavy }}
            >
              {/* Visual representation of the WER */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
                <div className="text-8xl font-bold mb-2" style={{ color: "#FBBF24" }}>5.2%</div>
                <div className="text-xl uppercase tracking-[0.2em] opacity-60 mb-8">Word Error Rate (WER)</div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    whileInView={{ width: "5.2%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]" 
                  />
                </div>
                <p className="mt-8 text-sm text-white/50 text-center italic">
                  Approaching 0% (Optimal Performance)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Section: Meet Ariya (Slideshow Interface) */}
      <section className="py-24" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
            {/* Mobile Phone Frame with Slideshow */}
            <div className="order-2 md:order-1 relative mx-auto group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-[320px] h-[650px] border-[12px] border-[#1C2B3A] rounded-[3rem] bg-[#FAF8F4] shadow-[0_50px_100px_-20px_rgba(15,40,71,0.3)] overflow-hidden flex flex-col"
              >
                {/* Phone Status Bar */}
                <div className="h-10 w-full flex items-center justify-between px-8 pt-4">
                  <span className="text-[10px] font-bold">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-black/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                  </div>
                </div>

                {/* Chat Header */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-[#DDD6C8]/50 bg-white/50 backdrop-blur-sm relative z-20">
                  <div className="flex items-center gap-2 bg-[#2A8FA0]/10 px-3 py-1.5 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-[#34C759] shadow-[0_0_8px_#34C759]" />
                    <span className="text-[10px] font-bold text-[#2A8FA0] uppercase tracking-wider">Ariya Online</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center border border-rose-100 shadow-sm">
                    <Trash2 className="w-4 h-4 text-rose-500 opacity-70" />
                  </div>
                </div>

                {/* Chat Body with AnimatePresence Slideshow */}
                <div className="flex-1 relative overflow-hidden bg-[#FAF8F4]">
                  {/* Background Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none scale-150">
                    <Image src="/images/ariya.png" alt="" width={300} height={300} />
                  </div>

                  <div className="p-4 space-y-6">
                    <ConversationSlideshow />
                  </div>
                </div>

                {/* Chat Input Area Mockup */}
                <div className="p-4 bg-white border-t border-[#DDD6C8]/50 flex items-center gap-3 relative z-20">
                  <div className="flex-1 bg-[#F5F1EA] h-10 rounded-full px-4 flex items-center border border-[#DDD6C8]">
                    <span className="text-[11px] text-[#4A5A6A]">Type your message...</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#2A8FA0] flex items-center justify-center shadow-lg">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="h-6 w-full flex justify-center pb-2 bg-white">
                  <div className="w-24 h-1 bg-black/10 rounded-full" />
                </div>
              </motion.div>

              {/* Decorative Stack Effect (Phones behind) */}
              <div className="absolute -inset-4 border-2 border-[#1C2B3A]/5 rounded-[3.5rem] -z-10 rotate-2 translate-x-2" />
              <div className="absolute -inset-4 border-2 border-[#1C2B3A]/5 rounded-[3.5rem] -z-20 -rotate-2 -translate-x-2" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
                Interactive <br />
                <span style={{ color: C.royalBlue }}>Conversations</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
                Ariya is more than a chatbot—she&apos;s your vocal progress partner. 
                Whether you need to review your speech history, clarify common 
                misconceptions, or learn how to master the app, Ariya is always 
                ready with a thoughtful response.
              </p>
              
              <div className="space-y-4">
                {[
                  "Reviewing speech history & WER metrics",
                  "Clarifying app capabilities vs medical cures",
                  "Guided walkthroughs of core features"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2A8FA0]" />
                    <span className="text-sm font-medium" style={{ color: C.textDark }}>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

const scenarios = [
  {
    id: 1,
    label: "History & Progress",
    messages: [
      { type: "user", text: "Ariya, can you show me my progress from last week?" },
      { type: "ariya", text: "Of course! Your average Word Error Rate (WER) has dropped from 8.2% to 5.4%. You're making great progress in your 'Daily Essentials' category!" }
    ]
  },
  {
    id: 2,
    label: "Support & Clarification",
    messages: [
      { type: "user", text: "Will Articulink heal my speech disorder?" },
      { type: "ariya", text: "Articulink is an assistive tool, not a medical cure. I'm here to help you communicate more clearly and build confidence in real-time conversations!" }
    ]
  },
  {
    id: 3,
    label: "Feature Guidance",
    messages: [
      { type: "user", text: "How do I use Live Mode?" },
      { type: "ariya", text: "Just toggle the 'Simultaneous' switch and tap the mic! I'll transcribe your speech in 3-second intervals so you can have fluid, real-time conversations." }
    ]
  }
];

function ConversationSlideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % scenarios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative h-full flex flex-col gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
          <div className="flex flex-col gap-6">
            {scenarios[index].messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'items-end gap-2'}`}>
                {msg.type === 'ariya' && (
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#2A8FA0]/20 bg-white shrink-0 shadow-sm">
                    <Image src="/images/ariya.png" alt="Ariya" width={40} height={40} className="object-contain" />
                  </div>
                )}
                <div className={`p-3.5 rounded-2xl shadow-sm max-w-[85%] ${
                  msg.type === 'user' 
                  ? 'bg-[#2A8FA0] text-white rounded-br-none' 
                  : 'bg-white text-[#1C2B3A] border border-[#DDD6C8]/30 rounded-bl-none'
                }`}>
                  <p className="text-[13px] leading-relaxed">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {scenarios.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === i ? "bg-[#2A8FA0] w-4" : "bg-[#2A8FA0]/20"
            }`}
          />
        ))}
      </div>
    </>
  );
}

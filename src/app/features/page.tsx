"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Features from "@/components/Features";
import { Brain, Zap, Shield, Globe, Mic2, BarChart3, Trash2, Send, MapPin, Search, Phone } from "lucide-react";

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

      {/* Main Features Grid (Summary) */}
      <Features />

      {/* Deep Dive 1: WER Analytics */}
      <section className="py-24" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl"
              style={{ backgroundColor: C.deepNavy }}
            >
              {/* Visual representation of the WER */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
                <div className="text-8xl font-bold mb-2" style={{ color: "#FBBF24" }}>5.2%</div>
                <div className="text-xl uppercase tracking-[0.2em] opacity-60 mb-8 font-bold">Word Error Rate (WER)</div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    whileInView={{ width: "5.2%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]" 
                  />
                </div>
                <p className="mt-8 text-sm text-white/50 text-center italic font-medium">
                  Approaching 0% (Optimal Goal)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
                Advanced <br />
                <span style={{ color: C.teal }}>WER Analytics</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
                Articulink uses Word Error Rate (WER) to measure transcription accuracy. 
                In speech recognition, WER is the gold standard—where a score of 0% represents 
                a perfect match between spoken words and text. 
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Sub-millisecond processing latency" },
                  { icon: Brain, text: "Neural-network phoneme analysis" },
                  { icon: BarChart3, text: "Comparative performance tracking" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-[#FAF8F4] border border-black/5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: C.teal }}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg" style={{ color: C.textDark }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2: Support Ecosystem Map */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: C.deepNavy }}>
        {/* Decorative subtle background element */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#2A8FA0]/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Map Visual Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Actual Map Image */}
              <div className="absolute inset-0 overflow-hidden rounded-[3.5rem]">
                <Image 
                  src="/images/map-bg.png" 
                  alt="Manila Map" 
                  fill 
                  className="object-cover scale-125 opacity-90"
                  priority
                />
              </div>

              {/* Border Overlay */}
              <div className="absolute inset-0 border-[10px] border-white/10 rounded-[3.5rem] z-30 pointer-events-none" />

              {/* Map Search Bar Mockup */}
              <div className="absolute top-8 left-8 right-8 z-40">
                <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3">
                  <Search className="w-5 h-5 text-[#2A8FA0]" />
                  <span className="text-sm text-[#4A5A6A] font-bold">Clinics near Quezon City...</span>
                </div>
              </div>

              {/* Map Markers Mockup */}
              <div className="absolute inset-0 p-12 z-20">
                {[
                  { top: "35%", left: "45%", label: "QC Speech Clinic", active: true },
                  { top: "58%", left: "62%", label: "Manila Therapy Center" },
                  { top: "72%", left: "30%", label: "Makati Assistive Hub" }
                ].map((marker, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute group z-10"
                    style={{ top: marker.top, left: marker.left }}
                  >
                    <div className="relative">
                      <MapPin className={`w-10 h-10 ${marker.active ? 'text-[#FF6B6B]' : 'text-[#2A8FA0]'} fill-current opacity-90 drop-shadow-md`} />
                      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#1C2B3A] text-white text-[11px] font-bold py-1.5 px-4 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-2xl border border-white/10">
                        {marker.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map UI Overlay: Results */}
              <div className="absolute bottom-10 left-10 right-10 bg-[#1C2B3A]/95 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/10 shadow-2xl z-40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#2A8FA0] flex items-center justify-center text-white shadow-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-1">Nearest Facility</div>
                      <div className="text-base font-bold text-white">St. Luke&apos;s Speech Center</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 cursor-pointer hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Interactive <br />
                <span style={{ color: C.tealLight }}>Support Map</span>
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
                Articulink connects you with a curated network of speech clinics and specialists 
                across the Philippines. Find professional help right from your current location 
                with real-time clinic discovery.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Clinic Discovery",
                    desc: "Locate specialized centers for hypernasality, cleft palate, and pediatric speech therapy."
                  },
                  {
                    icon: Search,
                    title: "Therapist Registry",
                    desc: "Access a verified list of specialists vetted for their experience with assistive communication."
                  },
                  {
                    icon: Phone,
                    title: "One-Tap Connection",
                    desc: "Bridge the gap between technology and therapy with direct contact options for every facility."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-sm shrink-0 group-hover:bg-[#2A8FA0]/20 transition-all">
                      <item.icon className="w-7 h-7 text-[#2A8FA0]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">{item.title}</h4>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(200, 216, 238, 0.5)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive 3: Ariya AI Companion */}
      {/* Deep Dive 3: Ariya AI Companion */}
      <section className="py-24" style={{ backgroundColor: "#F5F1EA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Multi-Phone Stack Carousel */}
            <div className="relative h-[700px] flex items-center justify-center perspective-1000">
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
    </main>
  );
}

const scenarios = [
  {
    id: 0,
    label: "History & Progress",
    messages: [
      { type: "user", text: "Ariya, can you show me my progress from last week?" },
      { type: "ariya", text: "Of course! Analyzing your recent sessions... Your average Word Error Rate (WER) has dropped from 8.2% to 5.4%. You're making great progress!" },
      { type: "user", text: "That's great! Which areas should I focus on next?" },
      { type: "ariya", text: "Based on your data, your 'Plosive' sounds are much clearer. Let's focus on 'Sibilants' this week. I've prepared some custom drills for you!" }
    ]
  },
  {
    id: 1,
    label: "Support & Clarification",
    messages: [
      { type: "user", text: "Will Articulink heal my speech disorder?" },
      { type: "ariya", text: "Articulink is an assistive tool powered by Gemini AI, not a medical cure. I'm here to help you communicate more clearly in your daily life." },
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
];function PhoneStack() {
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

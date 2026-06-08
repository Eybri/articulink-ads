"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, User, SlidersHorizontal, Mic, Settings2, Music } from "lucide-react";
import { C } from "./constants";

export function VoiceCustomization() {
  return (
    <section className="py-24" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
              Customizable <br />
              <span style={{ color: C.teal }}>Voice Personas</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
              Your voice is your identity. Articulink lets you completely personalize 
              the tone, speed, and pitch of your AI speech output to match your personality 
              across all your devices.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: User,
                  title: "Persona Selection",
                  desc: "Choose from a diverse library of male and female voices tailored to your preference."
                },
                {
                  icon: SlidersHorizontal,
                  title: "Tone & Speed Tuning",
                  desc: "Adjust the pitch and playback speed for maximum comfort and clarity."
                },
                {
                  icon: Globe,
                  title: "Multilingual Support",
                  desc: "Seamlessly switch between Tagalog, English, and local dialects."
                }
              ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: `${C.teal}15`, color: C.teal }}>
                     <item.icon className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1" style={{ color: C.textDark }}>{item.title}</h4>
                     <p className="text-base" style={{ color: C.textMid }}>{item.desc}</p>
                   </div>
                 </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Settings Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/5] rounded-[3.5rem] bg-[#FAF8F4] border border-[#DDD6C8]/50 shadow-2xl p-8 flex flex-col justify-center gap-6"
          >
             {/* Card 1: Persona */}
             <div className="bg-white p-5 rounded-3xl shadow-sm border border-[#DDD6C8]/50">
               <div className="flex items-center gap-2 mb-4">
                  <Mic className="w-5 h-5 text-[#1A4480]" />
                  <span className="font-bold text-[#1C2B3A]">Choose Persona</span>
               </div>
               <div className="flex gap-2 mb-3 bg-[#FAF8F4] p-1.5 rounded-2xl">
                  <div className="flex-1 text-center py-2 bg-transparent text-[#4A5A6A] font-bold text-xs uppercase tracking-wider rounded-xl">Male</div>
                  <div className="flex-1 text-center py-2 bg-[#2A8FA0] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md">Female</div>
               </div>
               <div className="bg-[#2A8FA0] rounded-2xl p-3 flex items-center justify-between shadow-[0_4px_15px_rgba(42,143,160,0.3)]">
                  <div className="flex items-center gap-3">
                     <div className="w-2.5 h-2.5 bg-white rounded-full" />
                     <div>
                        <div className="text-white font-bold text-sm">Maria (Default)</div>
                        <div className="text-white/70 text-xs">Warm, professional tone</div>
                     </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
                     <div className="w-3 h-3 bg-white ml-0.5 rounded-sm" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />
                  </div>
               </div>
             </div>

             {/* Card 2: Tone & Speed */}
             <div className="bg-white p-5 rounded-3xl shadow-sm border border-[#DDD6C8]/50">
               <div className="flex items-center gap-2 mb-5">
                  <Settings2 className="w-5 h-5 text-[#1A4480]" />
                  <span className="font-bold text-[#1C2B3A]">Tone & Speed</span>
               </div>
               
               <div className="space-y-5">
                  <div>
                     <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                           <Music className="w-4 h-4 text-[#4A5A6A]" />
                           <span className="text-xs font-bold text-[#4A5A6A]">Speech Speed</span>
                        </div>
                        <span className="text-xs font-bold text-[#1A4480]">1.0x</span>
                     </div>
                     <div className="h-1.5 bg-[#DDD6C8] rounded-full relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#1A4480] rounded-full" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#1A4480] rounded-full shadow-md" />
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                           <SlidersHorizontal className="w-4 h-4 text-[#4A5A6A]" />
                           <span className="text-xs font-bold text-[#4A5A6A]">Voice Pitch</span>
                        </div>
                        <span className="text-xs font-bold text-[#1A4480]">1.2</span>
                     </div>
                     <div className="h-1.5 bg-[#DDD6C8] rounded-full relative">
                        <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-[#1A4480] rounded-full" />
                        <div className="absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#1A4480] rounded-full shadow-md" />
                     </div>
                  </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

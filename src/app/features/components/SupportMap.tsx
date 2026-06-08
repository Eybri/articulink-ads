"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Search, Phone } from "lucide-react";
import { C } from "./constants";

export function SupportMap() {
  return (
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
  );
}

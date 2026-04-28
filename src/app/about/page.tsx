"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Users,
  Mic,
  Brain,
  Volume2,
  Save,
  Shield,
  Accessibility,
  AlertTriangle,
  GraduationCap,
  Building2,
  Handshake,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  History,
  BarChart3,
  Sparkles,
  Map,
  FileText,
  Lock,
  Waves,
} from "lucide-react";

const C = {
  teal: "#2A8FA0",
  tealDark: "#1E6B78",
  tealLight: "#3DAFC4",
  royalBlue: "#1A4480",
  deepNavy: "#0F2847",
  textDark: "#1C2B3A",
  textMid: "#4A5A6A",
  cream: "#FAF8F4",
  warmWhite: "#F5F1EA",
  sandLight: "#EDE8DF",
  sandMid: "#DDD6C8",
  orbTeal: "#BEE4EC",
  orbBlue: "#C8D8EE",
  orbSand: "#E8E0D0",
};

export default function About() {
  const [iconIndex, setIconIndex] = React.useState(0);
  const [activeFeature, setActiveFeature] = React.useState<number | null>(null);
  const icons = ["/images/app-icon.png", "/images/app-icon-white.png"];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [icons.length]);

  return (
    <main className="min-h-screen" style={{ backgroundColor: C.cream }}>
      {/* ═══════════════ HERO ═══════════════ */}
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
                A speech assistance app designed to help individuals with lisp and hypernasal
                speech communicate more clearly — powered by AI, built with heart.
              </p>
            </motion.div>

            {/* Hero Image */}
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

      {/* ═══════════════ WHAT IS ARTICULINK ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="font-bold tracking-widest uppercase text-sm mb-4"
              style={{ color: C.teal }}
            >
              What is Articulink?
            </h2>
            <p
              className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
            >
              Empowering communication <br />
              <span className="text-gradient">through AI</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: C.textMid }}>
                Articulink is a speech assistance application designed to help individuals with
                lisp and hypernasal speech communicate more clearly.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: C.textMid }}>
                The app processes your voice and converts it into a clearer, more understandable
                speech output — preserving your message while enhancing clarity through advanced
                AI processing.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Individuals with lisp speech patterns",
                "Individuals with hypernasal speech",
                "Speech therapy support users",
                "Students and professionals needing clearer communication",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{
                    backgroundColor: C.cream,
                    border: `1px solid ${C.sandMid}50`,
                  }}
                >
                  <Users className="w-5 h-5 shrink-0" style={{ color: C.teal }} />
                  <span className="font-medium" style={{ color: C.textDark }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ APP FEATURES ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="font-bold tracking-widest uppercase text-sm mb-4"
              style={{ color: C.teal }}
            >
              App Features
            </h2>
            <p
              className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
            >
              Everything you need for{" "}
              <span className="text-gradient">clearer communication</span>
            </p>
            <p className="text-lg mt-6 max-w-2xl mx-auto" style={{ color: C.textMid }}>
              Articulink is packed with powerful tools designed to make speech
              assistance seamless, intelligent, and accessible.
            </p>
          </div>

          <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-12">
            {/* Background Decorative Orbits */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] rounded-full border border-dashed border-teal-200/50 absolute" />
              <div className="w-[500px] h-[500px] rounded-full border border-dashed border-teal-100/30 absolute" />
              <div className="w-[700px] h-[700px] rounded-full border border-dashed border-teal-50/20 absolute" />
            </div>

            {/* Central Sun / Info Hub */}
            <div className="relative z-20 w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center p-8 text-center shadow-2xl transition-all duration-500"
              style={{ 
                backgroundColor: "white",
                border: `8px solid ${C.cream}`,
                boxShadow: `0 0 50px rgba(42, 143, 160, 0.1), inset 0 0 20px rgba(42, 143, 160, 0.05)`
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
                        backgroundColor: [
                          C.teal, C.royalBlue, "#059669", "#7C3AED", 
                          "#D97706", C.tealDark, "#E11D48", C.deepNavy
                        ][activeFeature % 8],
                        color: "white"
                      }}
                    >
                      {React.createElement([
                        Mic, Sparkles, Map, MessageCircle, 
                        History, Volume2, BarChart3, Lock
                      ][activeFeature % 8], { className: "w-8 h-8" })}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: C.textDark }}>
                      {[
                        "Real-Time Transcription", "AI Clarity Engine", "Interactive Clinic Map", "AI Chatbot Assistant",
                        "Speech History & Analytics", "Text-to-Speech Playback", "Word-Level Confidence", "Secure & Private"
                      ][activeFeature % 8]}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.textMid }}>
                      {[
                        "Record your voice and get instant speech-to-text transcription powered by advanced AI recognition.",
                        "Your speech is analyzed and enhanced by our AI model, correcting misarticulations and producing clearer text.",
                        "Find nearby speech therapy clinics, cleft care centers, and support facilities with real-time routing.",
                        "Chat with our intelligent assistant for speech tips, therapy guidance, and answers to your questions.",
                        "Track all your recordings with detailed stats — accuracy percentage, word count, and duration.",
                        "Hear how your corrected text sounds with natural text-to-speech synthesis for comparative learning.",
                        "See confidence scores for every individual word in your transcript to highlight areas for practice.",
                        "Your recordings and personal data are protected with authentication and privacy-first design."
                      ][activeFeature % 8]}
                    </p>
                    <button 
                      onClick={() => setActiveFeature(null)}
                      className="mt-6 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
                      style={{ color: C.teal }}
                    >
                      Back to Overview
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
                    <div className="relative w-24 h-24 mb-4 rounded-3xl overflow-hidden shadow-inner">
                       <Image src="/images/app-icon.png" alt="Articulink" fill className="object-contain" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: C.teal }}>
                      Explore Features
                    </p>
                    <p className="text-xs text-slate-400">Click a planet to learn more</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Rotating Planets Container */}
            <motion.div
              animate={{ rotate: activeFeature === null ? 360 : 0 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {[
                { icon: Mic, color: C.teal, bg: "rgba(42, 143, 160, 0.1)" },
                { icon: Sparkles, color: C.royalBlue, bg: "rgba(26, 68, 128, 0.1)" },
                { icon: Map, color: "#059669", bg: "rgba(5, 150, 105, 0.1)" },
                { icon: MessageCircle, color: "#7C3AED", bg: "rgba(124, 58, 237, 0.1)" },
                { icon: History, color: "#D97706", bg: "rgba(217, 119, 6, 0.1)" },
                { icon: Volume2, color: C.tealDark, bg: "rgba(30, 107, 120, 0.1)" },
                { icon: BarChart3, color: "#E11D48", bg: "rgba(225, 29, 72, 0.1)" },
                { icon: Lock, color: C.deepNavy, bg: "rgba(15, 40, 71, 0.1)" },
              ].map((feature, i) => {
                const angle = (i * 360) / 8;
                // Responsive radius: smaller on mobile
                const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 260;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={i}
                    className="absolute group"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: activeFeature === null ? -360 : 0 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.2, boxShadow: `0 0 25px ${feature.color}40` }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveFeature(i);
                        }}
                        className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all shadow-lg border-2"
                        style={{ 
                          backgroundColor: "white",
                          borderColor: activeFeature === i ? feature.color : "transparent",
                        }}
                      >
                         <feature.icon className="w-6 h-6 md:w-8 md:h-8 transition-colors" style={{ color: feature.color }} />
                      </motion.button>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                         <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/80 backdrop-blur-sm shadow-sm" style={{ color: feature.color }}>
                            {["Transcription", "AI Engine", "Clinic Map", "AI Chatbot", "Analytics", "Playback", "Confidence", "Privacy"][i]}
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

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section id="how-it-works" className="py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="font-bold tracking-widest uppercase text-sm mb-4"
              style={{ color: C.teal }}
            >
              How It Works
            </h2>
            <p
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
            >
              Simple steps to <br />
              <span className="text-gradient">clearer speech</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mic,
                step: "01",
                title: "Tap Record",
                desc: "Press the microphone icon and start speaking naturally.",
                color: C.teal,
              },
              {
                icon: Brain,
                step: "02",
                title: "AI Processing",
                desc: "The app analyzes your speech and enhances clarity using AI.",
                color: C.royalBlue,
              },
              {
                icon: Volume2,
                step: "03",
                title: "Hear the Result",
                desc: "Play the improved audio, view the text, or share the output.",
                color: C.tealDark,
              },
              {
                icon: Save,
                step: "04",
                title: "Save to History",
                desc: "Save the recording to your private history or discard it.",
                color: C.deepNavy,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl transition-all group shadow-sm hover:shadow-xl relative"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${C.sandMid}50`,
                }}
              >
                <span
                  className="absolute top-6 right-6 text-4xl font-black opacity-5"
                  style={{ color: item.color }}
                >
                  {item.step}
                </span>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: C.textDark }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: C.textMid }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SDG SECTION ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="font-bold tracking-widest uppercase text-sm mb-4"
              style={{ color: C.teal }}
            >
              Global Impact
            </h2>
            <p
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
            >
              Advancing Sustainable <br />
              <span className="text-gradient">Development Goals</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "03",
                title: "Good Health & Well-being",
                desc: "Articulink supports emotional and social well-being by providing a tool that helps individuals with speech challenges communicate more effectively.",
                color: "#4C9F38",
                image: "/images/sdg3.jfif",
              },
              {
                number: "04",
                title: "Quality Education",
                desc: "We promote inclusive learning environments by ensuring that speech-impaired students have the technology to express their ideas clearly.",
                color: "#C5192D",
                image: "/images/sdg4.jfif",
              },
              {
                number: "10",
                title: "Reduced Inequalities",
                desc: "By breaking down communication barriers, we empower individuals with lisp and hypernasal speech to participate fully in society.",
                color: "#E11484",
                image: "/images/sdg10.jfif",
              },
            ].map((sdg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                {/* SDG Image */}
                <div
                  className="w-full aspect-square rounded-[2.5rem] mb-8 relative overflow-hidden group-hover:scale-[1.02] transition-transform shadow-lg"
                  style={{ backgroundColor: sdg.color }}
                >
                  <Image
                    src={sdg.image}
                    alt={sdg.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: C.textDark }}>
                  {sdg.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: C.textMid }}>
                  {sdg.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CLIENT & DEVELOPERS ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="font-bold tracking-widest uppercase text-sm mb-4"
              style={{ color: C.teal }}
            >
              Our Partners
            </h2>
            <p
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
            >
              Built with purpose, <br />
              <span className="text-gradient">validated by experts</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Client — Cleft Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] overflow-hidden shadow-xl"
              style={{
                backgroundColor: C.cream,
                border: `1px solid ${C.sandLight}`,
                boxShadow: `0 10px 40px ${C.sandMid}50`,
              }}
            >
              {/* Client Image Placeholder */}
              <div
                className="w-full h-[400px] flex items-center justify-center"
                style={{
                  backgroundColor: C.sandLight,
                  borderBottom: `1px solid ${C.sandMid}50`,
                }}
              >
                <div className="text-center">
                  <Building2 className="w-10 h-10 mx-auto mb-2" style={{ color: C.sandMid }} />
                  <p className="text-xs font-semibold" style={{ color: C.sandMid }}>
                    Client Logo / Photo
                  </p>
                </div>
              </div>

              <div className="p-10">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md"
                    style={{ backgroundColor: `${C.teal}12`, color: C.teal }}
                  >
                    Client
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: C.textDark }}>
                  Cleft Foundation
                </h3>
                <p className="leading-relaxed mb-6" style={{ color: C.textMid }}>
                  {/* PLACEHOLDER — Replace with actual foundation description */}
                  The Cleft Foundation serves as the validation partner for Articulink,
                  working closely with the development team to ensure the app meets the
                  real-world needs of individuals with speech challenges related to cleft
                  lip and palate conditions. Their expertise in craniofacial care and speech
                  rehabilitation guides the clinical accuracy of the platform.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Handshake className="w-4 h-4" style={{ color: C.teal }} />
                    <span className="text-sm font-medium" style={{ color: C.textDark }}>
                      Validation & Clinical Guidance
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4" style={{ color: C.teal }} />
                    <span className="text-sm font-medium" style={{ color: C.textDark }}>
                      {/* PLACEHOLDER */}
                      Patient Testing & Feedback
                    </span>
                  </div>
                  <a
                    href="http://cleft-foundation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: C.teal }}
                  >
                    Visit Website
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Developers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-[2rem] overflow-hidden shadow-xl"
              style={{
                backgroundColor: C.cream,
                border: `1px solid ${C.sandLight}`,
                boxShadow: `0 10px 40px ${C.sandMid}50`,
              }}
            >
              {/* Developer Image */}
              <div
                className="w-full h-[400px] relative overflow-hidden"
                style={{
                  borderBottom: `1px solid ${C.sandMid}50`,
                }}
              >
                <Image
                  src="/images/team-image.jpg"
                  alt="Articulink Development Team"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="p-10">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md"
                    style={{ backgroundColor: `${C.royalBlue}12`, color: C.royalBlue }}
                  >
                    Developers
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: C.textDark }}>
                  {/* PLACEHOLDER — Replace with actual team/org name */}
                  Articulink Development Team
                </h3>
                <p className="leading-relaxed mb-6" style={{ color: C.textMid }}>
                  {/* PLACEHOLDER — Replace with actual team description */}
                  The Articulink development team brings together expertise in information
                  technology, artificial intelligence, and communication technology to build
                  a platform that creates real-world impact through technology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Brain className="w-4 h-4" style={{ color: C.royalBlue }} />
                    <span className="text-sm font-medium" style={{ color: C.textDark }}>
                      AI & Software Development
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mic className="w-4 h-4" style={{ color: C.royalBlue }} />
                    <span className="text-sm font-medium" style={{ color: C.textDark }}>
                      Speech & Communication Tech
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ THE TEAM ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="font-bold tracking-widest uppercase text-sm mb-4"
              style={{ color: C.teal }}
            >
              The Team
            </h2>
            <p
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
            >
              The people behind <br />
              <span className="text-gradient">Articulink</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* PLACEHOLDER — Replace names, roles, and images with real team info */}
            {[
              { name: "Team Member 1", role: "Project Lead" },
              { name: "Team Member 2", role: "Full-Stack Developer" },
              { name: "Team Member 3", role: "AI / ML Engineer" },
              { name: "Team Member 4", role: "UI/UX Designer" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                {/* Member Photo Placeholder */}
                <div
                  className="w-full aspect-square rounded-3xl mb-6 flex items-center justify-center group-hover:scale-[1.02] transition-transform"
                  style={{
                    backgroundColor: C.warmWhite,
                    border: `2px dashed ${C.sandMid}`,
                  }}
                >
                  <div>
                    <Users className="w-10 h-10 mx-auto mb-2" style={{ color: C.sandMid }} />
                    <p className="text-xs" style={{ color: C.sandMid }}>Photo</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold" style={{ color: C.textDark }}>
                  {member.name}
                </h3>
                <p className="text-sm" style={{ color: C.textMid }}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SAFETY DISCLAIMER ═══════════════ */}
      <section className="py-16" style={{ backgroundColor: C.warmWhite }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-start gap-5 p-8 rounded-2xl border"
            style={{ backgroundColor: "#FFFBEB", borderColor: "#FEF3C7" }}
          >
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Important Disclaimer</h3>
              <p className="text-sm leading-relaxed text-amber-800">
                Articulink is a communication tool and <strong>not a replacement for professional
                speech therapy.</strong> We encourage working with a qualified speech-language
                pathologist alongside using Articulink for the best outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT / CTA ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden"
            style={{ backgroundColor: C.deepNavy }}
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div
                className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] rounded-full blur-[100px]"
                style={{ backgroundColor: "rgba(42, 143, 160, 0.15)" }}
              />
              <div
                className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full blur-[100px]"
                style={{ backgroundColor: "rgba(26, 68, 128, 0.15)" }}
              />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Get in <span style={{ color: C.tealLight }}>touch</span>
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: C.orbBlue }}>
                  Have questions, feedback, or want to collaborate? We&apos;d love to hear from you.
                </p>
              </div>

              {/* PLACEHOLDER — Replace with actual contact details */}
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contact@articulink.app",
                    sub: "Replace with actual email",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Metro Manila, Philippines",
                    sub: "Replace with actual address",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+63 XXX XXX XXXX",
                    sub: "Replace with actual number",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "rgba(42, 143, 160, 0.2)" }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: C.tealLight }} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.tealLight }}>
                      {item.label}
                    </p>
                    <p className="text-white font-semibold mb-1">{item.value}</p>
                    <p className="text-[10px] opacity-40 text-white">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

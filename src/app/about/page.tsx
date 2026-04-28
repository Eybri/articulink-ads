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
  Send,
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

/* ─── Contact Form (client-side only — wire to SMTP later) ─── */
function ContactForm() {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !subject.trim() || !message.trim()) return;

    setSending(true);

    // TODO: Replace with actual SMTP API call
    // Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify({ email, subject, message }) });
    await new Promise((r) => setTimeout(r, 1200)); // simulate network delay

    setSending(false);
    setSent(true);
    setEmail("");
    setSubject("");
    setMessage("");
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center backdrop-blur-sm"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: "rgba(42, 143, 160, 0.2)" }}
        >
          <Send className="w-6 h-6" style={{ color: C.tealLight }} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-sm mb-6" style={{ color: C.orbBlue }}>
          Thank you for reaching out. We&apos;ll get back to you at{" "}
          <span className="text-white font-semibold">articulink00@gmail.com</span>.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
          style={{ color: C.tealLight }}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
    >
      <h3 className="text-lg font-bold text-white mb-6">Send us a message</h3>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.tealLight }}>
            Your Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/30"
          />
        </div>
        <div className="flex items-end">
          <p className="text-xs leading-relaxed" style={{ color: "rgba(200, 216, 238, 0.5)" }}>
            Your message will be sent to{" "}
            <a href="mailto:articulink00@gmail.com" className="underline" style={{ color: C.tealLight }}>
              articulink00@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.tealLight }}>
          Subject
        </label>
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Partnership Inquiry"
          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/30"
        />
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.tealLight }}>
          Message
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what's on your mind..."
          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/30 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: C.teal }}
      >
        {sending ? "Sending..." : "Send Message"}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}

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
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1A2E 0%, #0F2847 40%, #132D4F 70%, #0B1A2E 100%)" }}>
        {/* Subtle star-field dots */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.15) 1px, transparent 0), radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.1) 1px, transparent 0), radial-gradient(1px 1px at 50% 80%, rgba(255,255,255,0.12) 1px, transparent 0), radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.08) 1px, transparent 0), radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.1) 1px, transparent 0), radial-gradient(1.5px 1.5px at 90% 70%, rgba(255,255,255,0.15) 1px, transparent 0)" }} />
        {/* Background glow orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full blur-[150px] pointer-events-none" style={{ backgroundColor: "rgba(42, 143, 160, 0.08)" }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] rounded-full blur-[150px] pointer-events-none" style={{ backgroundColor: "rgba(26, 68, 128, 0.08)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2
              className="font-bold tracking-widest uppercase text-sm mb-4"
              style={{ color: C.tealLight }}
            >
              App Features
            </h2>
            <p
              className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto text-white"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Everything you need for{" "}
              <span style={{ background: "linear-gradient(135deg, #3DAFC4, #7DD3E8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>clearer communication</span>
            </p>
            <p className="text-lg mt-6 max-w-2xl mx-auto" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
              Articulink is packed with powerful tools designed to make speech
              assistance seamless, intelligent, and accessible.
            </p>
          </div>

          <div className="relative min-h-[600px] flex items-center justify-center py-12">
            {/* Background Decorative Orbits */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] rounded-full absolute" style={{ border: "1px solid rgba(61, 175, 196, 0.15)" }} />
              <div className="w-[500px] h-[500px] rounded-full absolute" style={{ border: "1px solid rgba(61, 175, 196, 0.08)" }} />
              <div className="w-[700px] h-[700px] rounded-full absolute" style={{ border: "1px solid rgba(61, 175, 196, 0.04)" }} />
              <div className="w-[520px] h-[520px] rounded-full absolute blur-xl" style={{ border: "2px solid rgba(42, 143, 160, 0.06)" }} />
            </div>

            {/* Central Sun / Info Hub */}
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
                        backgroundColor: [
                          C.teal, C.royalBlue, "#059669", "#7C3AED",
                          "#D97706", C.tealDark, "#E11D48", C.deepNavy
                        ][activeFeature % 8],
                        color: "white",
                        boxShadow: `0 0 20px ${[C.teal, C.royalBlue, "#059669", "#7C3AED", "#D97706", C.tealDark, "#E11D48", "#1A4480"][activeFeature % 8]}50`
                      }}
                    >
                      {React.createElement([
                        Mic, Sparkles, Map, MessageCircle,
                        History, Volume2, BarChart3, Lock
                      ][activeFeature % 8], { className: "w-8 h-8" })}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {[
                        "Real-Time Transcription", "AI Clarity Engine", "Interactive Clinic Map", "AI Chatbot Assistant",
                        "Speech History & Analytics", "Text-to-Speech Playback", "Word-Level Confidence", "Secure & Private"
                      ][activeFeature % 8]}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
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

            {/* Rotating Planets Container */}
            <motion.div
              animate={{ rotate: activeFeature === null ? 360 : -360 }}
              transition={{ duration: activeFeature === null ? 30 : 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {[
                { icon: Mic, color: "#4DD8E8", glowColor: "rgba(77, 216, 232, 0.3)" },
                { icon: Sparkles, color: "#6B9AFF", glowColor: "rgba(107, 154, 255, 0.3)" },
                { icon: Map, color: "#34D399", glowColor: "rgba(52, 211, 153, 0.3)" },
                { icon: MessageCircle, color: "#A78BFA", glowColor: "rgba(167, 139, 250, 0.3)" },
                { icon: History, color: "#FBBF24", glowColor: "rgba(251, 191, 36, 0.3)" },
                { icon: Volume2, color: "#5EEAD4", glowColor: "rgba(94, 234, 212, 0.3)" },
                { icon: BarChart3, color: "#FB7185", glowColor: "rgba(251, 113, 133, 0.3)" },
                { icon: Lock, color: "#94A3B8", glowColor: "rgba(148, 163, 184, 0.3)" },
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
                      animate={{ rotate: activeFeature === null ? -360 : 360 }}
                      transition={{ duration: activeFeature === null ? 30 : 12, repeat: Infinity, ease: "linear" }}
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

              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "articulink00@gmail.com",
                    href: "mailto:articulink00@gmail.com",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Metro Manila, Philippines",
                    href: undefined,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+63 XXX XXX XXXX",
                    href: undefined,
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
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold hover:underline transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Form — TODO: wire up to SMTP backend */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

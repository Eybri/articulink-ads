"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  Mic,
  Database,
  Lock,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Trash2,
  ToggleRight,
  HardDrive,
  KeyRound,
  FileKey,
  Landmark,
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
};

export default function PrivacyPolicy() {
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy Protected</span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
            >
              Your voice, <br />
              <span className="text-gradient">your control.</span>
            </h1>

            <p className="text-xl mb-4 max-w-2xl mx-auto leading-relaxed" style={{ color: C.textMid }}>
              We believe your voice is deeply personal. Here&apos;s exactly how we protect it,
              process it, and keep you in total control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ USER CONSENT — FEATURE GRID ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="font-bold tracking-widest uppercase text-sm mb-4"
              style={{ color: C.teal }}
            >
              User Consent & Control
            </h2>
            <p
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
            >
              You decide what happens <br />
              <span className="text-gradient">with your data</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mic,
                title: "Recording Control",
                description:
                  "We never store your recordings unless you explicitly choose to save them to your history.",
                color: C.teal,
              },
              {
                icon: HardDrive,
                title: "Storage Options",
                description:
                  "You choose where your data lives. Full control over your storage permissions at all times.",
                color: C.royalBlue,
              },
              {
                icon: Trash2,
                title: "Instant Deletion",
                description:
                  "Delete any recording instantly from our servers. No questions asked, no lingering copies.",
                color: C.tealDark,
              },
              {
                icon: ToggleRight,
                title: "Opt-out Anytime",
                description:
                  "You have the right to opt-out of our AI model training at any time. Your choice, always.",
                color: C.deepNavy,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl transition-all group shadow-sm hover:shadow-xl"
                style={{
                  backgroundColor: C.cream,
                  border: `1px solid ${C.sandMid}50`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: C.textDark }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: C.textMid }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DATA PROTECTION — SPLIT LAYOUT ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-bold tracking-widest uppercase text-sm mb-4"
                style={{ color: C.teal }}
              >
                Data Protection
              </h2>
              <p
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
              >
                Sensitive data, <br />
                <span className="text-gradient">handled with care</span>
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: C.textMid }}>
                Your audio recordings and transcripts are securely transmitted to our backend for
                processing and analysis. Authentication tokens and personal profile information
                are securely managed and stored using standard mobile storage practices on your device.
              </p>
              <div
                className="flex items-start gap-4 p-6 rounded-2xl border"
                style={{ backgroundColor: `${C.royalBlue}06`, borderColor: `${C.royalBlue}15` }}
              >
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: C.royalBlue }} />
                <p className="text-sm font-semibold leading-relaxed" style={{ color: C.royalBlue }}>
                  Your speech data is transmitted securely and processed separately from your profile information.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {[
                {
                  icon: Database,
                  label: "Sensitive",
                  title: "Audio & Transcripts",
                  desc: "Biometric speech data is treated with the highest priority and transmitted securely.",
                  accent: "#F87171",
                },
                {
                  icon: Eye,
                  label: "Standard",
                  title: "Profile Information",
                  desc: "User profile metrics and preferences are stored securely on device using standard APIs.",
                  accent: C.teal,
                },
                {
                  icon: KeyRound,
                  label: "Auth",
                  title: "Authentication Tokens",
                  desc: "JWT-based tokens are securely managed and stored via standard mobile device storage.",
                  accent: C.royalBlue,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-6 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow"
                  style={{
                    backgroundColor: "white",
                    border: `1px solid ${C.sandMid}50`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                    style={{ backgroundColor: item.accent }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span
                      className="text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md inline-block mb-2"
                      style={{ backgroundColor: `${item.accent}12`, color: item.accent }}
                    >
                      {item.label}
                    </span>
                    <h4 className="font-bold mb-1" style={{ color: C.textDark }}>
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: C.textMid }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ENCRYPTION — DARK CTA-STYLE BLOCK ═══════════════ */}
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
              <div className="text-center mb-14">
                <h2
                  className="font-bold tracking-widest uppercase text-sm mb-4"
                  style={{ color: C.tealLight }}
                >
                  Encryption & Integrity
                </h2>
                <p
                  className="text-3xl md:text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  How we <span style={{ color: C.tealLight }}>secure</span> your voice
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Lock,
                    title: "TLS/HTTPS Transit",
                    desc: "All data is encrypted in transit using industry-standard TLS/HTTPS protocols.",
                  },
                  {
                    icon: FileKey,
                    title: "JWT Authentication",
                    desc: "Token-based authentication ensures only you can access your account and recordings.",
                  },
                  {
                    icon: HardDrive,
                    title: "Device-Level Storage",
                    desc: "Authentication tokens are stored locally via standard, secure device APIs.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: "rgba(42, 143, 160, 0.2)" }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: C.tealLight }} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.orbBlue }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-start gap-4 mt-10 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-amber-200 leading-relaxed">
                  Your voice recordings are transmitted securely. We follow industry-standard practices to protect your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LEGAL — TESTIMONIAL-STYLE ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: `${C.orbTeal}33` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
          >
            Legal & <span style={{ color: C.teal }}>Compliance</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-16 leading-relaxed" style={{ color: C.textMid }}>
            Articulink is built with privacy at its core, fully aligned with Philippine and
            international data protection standards.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2rem] shadow-xl text-left"
              style={{
                backgroundColor: C.cream,
                border: `1px solid ${C.sandLight}`,
                boxShadow: `0 10px 40px ${C.sandMid}50`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg"
                style={{ backgroundColor: C.tealDark }}
              >
                <Landmark className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: C.textDark }}>
                Data Privacy Act of 2012
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: C.textMid }}>
                Fully regulated by the National Privacy Commission (NPC). We undergo regular
                privacy impact assessments to ensure ongoing compliance with Philippine law.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: C.teal }} />
                <span className="text-sm font-semibold" style={{ color: C.teal }}>
                  NPC Compliant
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-10 rounded-[2rem] shadow-xl text-left"
              style={{
                backgroundColor: C.cream,
                border: `1px solid ${C.sandLight}`,
                boxShadow: `0 10px 40px ${C.sandMid}50`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg"
                style={{ backgroundColor: C.royalBlue }}
              >
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: C.textDark }}>
                GDPR Aligned
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: C.textMid }}>
                We align with global best practices including GDPR principles — giving you
                transparency, control, and the right to your own data.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: C.teal }} />
                <span className="text-sm font-semibold" style={{ color: C.teal }}>
                  Global Standards
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING QUOTE ═══════════════ */}
      <section className="py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-10 h-10 mx-auto mb-6" style={{ color: C.sandMid }} />
            <p
              className="text-2xl md:text-3xl italic leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-playfair), serif", color: C.textMid }}
            >
              &ldquo;At Articulink, your voice belongs to you. Our mission is to amplify your
              speech, not compromise your identity.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-2 opacity-40">
              <div className="w-4 h-px" style={{ backgroundColor: C.textMid }} />
              <ShieldCheck className="w-3 h-3" style={{ color: C.textMid }} />
              <div className="w-4 h-px" style={{ backgroundColor: C.textMid }} />
            </div>
            <p className="text-xs font-semibold tracking-wider mt-3 opacity-40" style={{ color: C.textMid }}>
              {new Date().getFullYear()} • Articulink.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

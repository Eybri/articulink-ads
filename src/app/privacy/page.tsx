"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, UserCheck, Database, Lock, Scale, CheckCircle2 } from "lucide-react";

const sections = [
  {
    title: "Your Privacy is Our Priority",
    icon: Shield,
    content: (
      <p className="text-[#4A5A6A] leading-relaxed">
        At Articulink, your voice belongs to you. Our mission is to amplify your speech, not compromise your identity. Your speech data is processed with extreme care, and we prioritize your privacy above all else.
      </p>
    ),
  },
  {
    title: "User Consent & Control",
    icon: UserCheck,
    content: (
      <ul className="space-y-4">
        {[
          { title: "Voice Recording Management", text: "We never store your recordings unless you explicitly choose to save them to your history." },
          { title: "Storage Options", text: "You choose where your data lives." },
          { title: "Data Deletion", text: "You can delete any recording instantly from our servers." },
          { title: "Model Training", text: "You have the right to opt-out of our AI model training at any time." },
        ].map((item, i) => (
          <li key={i} className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2A8FA0] shrink-0 mt-0.5" />
            <span className="text-[#4A5A6A]">
              <strong className="text-[#1C2B3A]">{item.title}:</strong> {item.text}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Data Protection Layers",
    icon: Database,
    content: (
      <div className="space-y-4 text-[#4A5A6A] leading-relaxed">
        <p>
          We handle sensitive speech data with care. Your audio recordings and transcripts are securely transmitted to our backend for processing and analysis.
        </p>
        <p>
          Authentication tokens and your personal profile information are securely managed and stored using standard mobile storage practices on your device.
        </p>
      </div>
    ),
  },
  {
    title: "Encryption & Integrity",
    icon: Lock,
    content: (
      <div className="space-y-4 text-[#4A5A6A]">
        <p>No one at Articulink can access your private voice recordings. We secure your voice through:</p>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            "Secure TLS/HTTPS encryption in transit for all data.",
            "Standard token-based authentication (JWT).",
            "Local token storage via standard device APIs.",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F1EA]/50 border border-[#DDD6C8]/50">
              <Lock className="w-4 h-4 text-[#2A8FA0]" />
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Legal & Compliance",
    icon: Scale,
    content: (
      <p className="text-[#4A5A6A] leading-relaxed">
        Articulink is strictly regulated by the National Privacy Commission (NPC) and is fully compliant with the Data Privacy Act of 2012 (Philippines). We also align with global best practices, including GDPR, and undergo regular privacy impact assessments to ensure ongoing compliance.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] overflow-hidden relative">
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full blur-[120px] bg-[rgba(190,228,236,0.3)]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[60%] rounded-full blur-[120px] bg-[rgba(200,216,238,0.3)]" />
      </div>

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-[rgba(42,143,160,0.1)] border border-[rgba(42,143,160,0.2)] text-[#1E6B78]">
            <Shield className="w-4 h-4" />
            <span>Secure & Transparent</span>
          </div>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-[#1C2B3A]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Privacy Policy
          </h1>
          <p className="text-lg text-[#4A5A6A] max-w-2xl mx-auto">
            We believe your voice is deeply personal. Here is exactly how we protect it, process it, and keep you in total control.
          </p>
        </motion.div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-[rgba(15,40,71,0.03)] border border-[#DDD6C8]/30 group hover:border-[#2A8FA0]/20 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F5F1EA] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[rgba(42,143,160,0.1)] transition-all duration-300">
                  <section.icon className="w-7 h-7 text-[#2A8FA0]" />
                </div>
                <div className="pt-2">
                  <h2 className="text-2xl font-bold text-[#1C2B3A] mb-4 group-hover:text-[#2A8FA0] transition-colors">
                    {section.title}
                  </h2>
                  {section.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm font-medium text-[#4A5A6A]/60"
        >
          Effective Date: {new Date().getFullYear()} • Articulink AI Inc.
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mic2, BarChart3, MapPin, Volume2, Zap, Globe } from "lucide-react";

const COLORS = {
  teal: "#2A8FA0",
  royalBlue: "#1A4480",
  mediumBlue: "#2A5FA8",
  tealDark: "#1E6B78",
  tealLight: "#3DAFC4",
  deepNavy: "#0F2847",
  textDark: "#1C2B3A",
  textMid: "#4A5A6A",
  cream: "#FAF8F4",
  warmWhite: "#F5F1EA",
  sandMid: "#DDD6C8",
};

const features = [
  {
    icon: Mic2,
    title: "Precision Phrase Capture",
    description: "Advanced speech analysis captures your words with clarity and precision for more reliable transcription.",
    color: COLORS.teal,
  },
  {
    icon: Zap,
    title: "Live Neural Streaming",
    description: "Low-latency audio processing for fluid face-to-face interactions. The app listens and transcribes in real-time segments for fast, helpful feedback.",
    color: COLORS.tealLight,
  },
  {
    icon: Globe,
    title: "Bilingual Intelligence",
    description: "Specialized models for Tagalog-English (Taglish) phonetic patterns. Speak naturally in either language without losing context or clarity.",
    color: COLORS.royalBlue,
  },
  {
    icon: MapPin,
    title: "Geographic Support Map",
    description: "Discover a curated ecosystem of speech clinics and specialists across the Philippines. Connect with professional help right from your current location.",
    color: COLORS.mediumBlue,
  },
  {
    icon: BarChart3,
    title: "WER Analytics Suite",
    description: "Track your Word Error Rate (WER) progress. Visualize your communication journey with detailed phonetic breakdowns and historical performance data.",
    color: COLORS.tealDark,
  },
  {
    icon: Volume2,
    title: "Customizable Voice Output",
    description: "Choose from a variety of natural-sounding voices or personalize the tone and pitch to match your unique identity and preferences.",
    color: COLORS.deepNavy,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24" style={{ backgroundColor: COLORS.warmWhite }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className="font-bold tracking-widest uppercase text-sm mb-4"
            style={{ color: COLORS.teal }}
          >
            Core Benefits
          </h2>
          <p
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair), serif", color: COLORS.textDark }}
          >
            Empowering your voice with <br />
            <span className="text-gradient">cutting-edge technology</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl transition-all group shadow-sm hover:shadow-xl"
              style={{
                backgroundColor: COLORS.cream,
                border: `1px solid ${COLORS.sandMid}50`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.textDark }}>
                {feature.title}
              </h3>
              <p className="leading-relaxed" style={{ color: COLORS.textMid }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

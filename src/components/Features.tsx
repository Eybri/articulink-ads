"use client";

import { motion } from "framer-motion";
import { Mic2, LineChart, MapPin, ShieldCheck, Zap, Globe } from "lucide-react";

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
    title: "Phrase Mode",
    description: "Record a single phrase and let our AI clarify it instantly. Perfect for ensuring your message is heard exactly as intended.",
    color: COLORS.teal,
  },
  {
    icon: Zap,
    title: "Live Mode",
    description: "Experience continuous real-time speech enhancement for fluid, natural conversations in any setting.",
    color: COLORS.tealLight,
  },
  {
    icon: MapPin,
    title: "Support Map",
    description: "Find nearby speech resources, support centers, and assistive facilities within your community.",
    color: COLORS.mediumBlue,
  },
  {
    icon: LineChart,
    title: "Clarity Analytics",
    description: "Monitor your communication progress with real-time word-level confidence scores and clarity percentages.",
    color: COLORS.royalBlue,
  },
  {
    icon: Globe,
    title: "Bilingual Support",
    description: "Seamlessly switch between English and Tagalog. Talk naturally in either language with full AI support.",
    color: COLORS.deepNavy,
  },
  {
    icon: ShieldCheck,
    title: "Privacy Protected",
    description: "Your voice and data are yours. We are fully compliant with the Data Privacy Act of 2012 (NPC).",
    color: COLORS.tealDark,
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

"use client";

import { motion } from "framer-motion";
import { Mic2, LineChart, MapPin, ShieldCheck, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Mic2,
    title: "AI Clarity Engine",
    description: "Our neural networks analyze speech patterns in real-time to provide instant feedback and clarity enhancement.",
    color: "bg-teal"
  },
  {
    icon: LineChart,
    title: "Progress Analytics",
    description: "Track your improvement over weeks and months with detailed visualization of your speech milestones.",
    color: "bg-royal-blue"
  },
  {
    icon: MapPin,
    title: "Facility Locator",
    description: "Connect with the nearest certified clinical facilities and speech-language pathologists in your area.",
    color: "bg-medium-blue"
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant",
    description: "Your data is encrypted and secure. We prioritize your privacy above all else with clinical-grade security.",
    color: "bg-teal-dark"
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get real-time visual cues on pronunciation, rhythm, and volume to adjust your speech on the fly.",
    color: "bg-teal-light"
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Available in 12+ languages, helping people across the globe reconnect with their loved ones.",
    color: "bg-deep-navy"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-teal font-bold tracking-widest uppercase text-sm mb-4">Core Benefits</h2>
          <p className="text-4xl md:text-5xl font-bold text-text-dark">
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
              className="p-8 rounded-3xl border border-sand-mid/50 hover:border-teal/30 transition-all group bg-cream shadow-sm hover:shadow-xl hover:shadow-teal/5"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">{feature.title}</h3>
              <p className="text-text-mid leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

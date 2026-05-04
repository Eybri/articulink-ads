"use client";

import { motion } from "framer-motion";
import { C, howItWorksSteps } from "../constants";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24" style={{ backgroundColor: C.cream }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-bold tracking-widest uppercase text-sm mb-4" style={{ color: C.teal }}>
            How It Works
          </h2>
          <p className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}>
            Simple steps to <br />
            <span className="text-gradient">clearer speech</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((item, i) => (
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
  );
}

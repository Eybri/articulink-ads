"use client";

import { motion } from "framer-motion";
import { C, features } from "../constants";

export default function DesignedForCommunicationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}>
            Designed for <span style={{ color: C.teal }}>Communication</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: C.textMid }}>
            Articulink isn&apos;t just a tool; it&apos;s a companion in your daily life, enabling confident communication and meaningful connection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[3rem] transition-all duration-500 bg-white border border-black/5 hover:bg-[#0F2847] hover:shadow-2xl cursor-default"
              style={{ "--hover-accent": feature.accent } as React.CSSProperties}
            >
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-white/10 shadow-sm"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-8 h-8 transition-colors group-hover:text-[var(--hover-accent)]" style={{ color: feature.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0F2847] group-hover:text-[var(--hover-accent)] transition-colors duration-500">{feature.title}</h3>
                <p className="text-lg leading-relaxed font-normal text-[#0F2847] group-hover:text-white transition-colors duration-500 opacity-70 group-hover:opacity-100">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

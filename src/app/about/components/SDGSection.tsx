"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { C, sdgData } from "../constants";

export default function SDGSection() {
  return (
    <section className="py-24" style={{ backgroundColor: C.cream }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-bold tracking-widest uppercase text-sm mb-4" style={{ color: C.teal }}>
            Global Impact
          </h2>
          <p className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}>
            Advancing Sustainable <br />
            <span className="text-gradient">Development Goals</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sdgData.map((sdg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
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
  );
}

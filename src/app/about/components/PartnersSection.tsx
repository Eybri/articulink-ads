"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, ArrowRight, Brain, Mic } from "lucide-react";
import { C } from "../constants";

export default function PartnersSection() {
  return (
    <section className="py-24" style={{ backgroundColor: C.warmWhite }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-bold tracking-widest uppercase text-sm mb-4" style={{ color: C.teal }}>
            Our Partners
          </h2>
          <p className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}>
            Built with purpose, <br />
            <span className="text-gradient">validated by experts</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Academic Partner — TUP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] overflow-hidden shadow-xl"
            style={{
              backgroundColor: C.cream,
              border: `1px solid ${C.sandLight}`,
              boxShadow: `0 10px 40px ${C.sandMid}50`,
            }}
          >
            <div
              className="w-full h-[320px] relative overflow-hidden flex items-center justify-center p-12"
              style={{
                backgroundColor: "white",
                borderBottom: `1px solid ${C.sandMid}50`,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/tup-logo.png"
                  alt="Technological University of the Philippines"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md"
                  style={{ backgroundColor: `${C.royalBlue}12`, color: C.royalBlue }}
                >
                  Academic Partner
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: C.textDark }}>
                TUP Taguig
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: C.textMid }}>
                Technological University of the Philippines - Taguig serves as the primary research
                and development hub for Articulink, fostering innovation in communication
                technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Brain className="w-4 h-4" style={{ color: C.royalBlue }} />
                  <span className="text-xs font-medium" style={{ color: C.textDark }}>
                    Research & Development
                  </span>
                </div>
                <a
                  href="https://www.tup.edu.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ color: C.royalBlue }}
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
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden shadow-xl"
            style={{
              backgroundColor: C.cream,
              border: `1px solid ${C.sandLight}`,
              boxShadow: `0 10px 40px ${C.sandMid}50`,
            }}
          >
            <div
              className="w-full h-[320px] relative overflow-hidden"
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

            <div className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md"
                  style={{ backgroundColor: `${C.teal}12`, color: C.teal }}
                >
                  Developers
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: C.textDark }}>
                Articulink Team
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: C.textMid }}>
                A dedicated team of student researchers and developers focused on creating
                accessible AI tools for the speech-impaired community.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mic className="w-4 h-4" style={{ color: C.teal }} />
                  <span className="text-xs font-medium" style={{ color: C.textDark }}>
                    Software Innovation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4" style={{ color: C.teal }} />
                  <span className="text-xs font-medium" style={{ color: C.textDark }}>
                    Community Impact
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

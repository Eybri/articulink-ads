"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, Users, ArrowRight, Brain, Mic } from "lucide-react";
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
            <div
              className="w-full h-[400px] relative overflow-hidden"
              style={{
                backgroundColor: C.sandLight,
                borderBottom: `1px solid ${C.sandMid}50`,
              }}
            >
              <Image
                src="/images/cleftfoundation.png"
                alt="Cleft Foundation"
                fill
                className="object-cover"
              />
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
                Articulink Development Team
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: C.textMid }}>
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
  );
}

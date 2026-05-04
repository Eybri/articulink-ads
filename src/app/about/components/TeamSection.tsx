"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import { C, teamMembers } from "../constants";

export default function TeamSection() {
  const [isComicMode, setIsComicMode] = React.useState(false);

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: C.deepNavy }}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(42, 143, 160, 0.07)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(26, 68, 128, 0.1)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-bold tracking-widest uppercase text-sm mb-4" style={{ color: C.tealLight }}>
            The Team
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
            The people behind <br />
            <span style={{ background: "linear-gradient(135deg, #3DAFC4, #7DD3E8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Articulink</span>
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => setIsComicMode(!isComicMode)}
              className="group relative flex items-center gap-4 px-6 py-3 rounded-2xl transition-all duration-500 overflow-hidden"
              style={{
                backgroundColor: isComicMode ? "rgba(61, 175, 196, 0.15)" : "rgba(255, 255, 255, 0.03)",
                border: `1px solid ${isComicMode ? `${C.tealLight}50` : "rgba(255, 255, 255, 0.1)"}`,
                boxShadow: isComicMode ? `0 0 30px ${C.tealLight}20` : "none",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative flex items-center gap-3">
                <div className={`p-1.5 rounded-lg transition-all duration-500 ${isComicMode ? 'bg-teal-500/20' : 'bg-white/5'}`}>
                  <Sparkles
                    className={`w-4 h-4 transition-all duration-500 ${isComicMode ? 'text-teal-300 scale-110' : 'text-white/40'}`}
                  />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-500 ${isComicMode ? 'text-white' : 'text-white/60'}`}>
                  {isComicMode ? "Comic" : "Reality"}
                </span>
              </div>

              <div
                className="w-10 h-5 rounded-full relative transition-colors duration-500 p-1"
                style={{ backgroundColor: isComicMode ? C.teal : "rgba(255, 255, 255, 0.1)" }}
              >
                <motion.div
                  animate={{ x: isComicMode ? 20 : 0 }}
                  className="w-3 h-3 rounded-full bg-white shadow-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div
                className="w-full aspect-square rounded-3xl mb-6 flex items-center justify-center group-hover:scale-[1.02] transition-transform shadow-lg overflow-hidden border border-white/10"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                }}
              >
                {member.image ? (
                  <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isComicMode ? "comic" : "reality"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={isComicMode ? (member.hoverImage || member.image) : member.image}
                          alt={member.name}
                          fill
                          className={`object-cover transition-opacity duration-500 ${((isComicMode && member.hoverImage) || (!isComicMode && member.hoverImage)) ? 'group-hover:opacity-0' : ''}`}
                          style={{ objectPosition: member.objectPosition || "center" }}
                        />
                        {member.hoverImage && (
                          <Image
                            src={isComicMode ? member.image : member.hoverImage}
                            alt={`${member.name} hover`}
                            fill
                            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ objectPosition: member.objectPosition || "center" }}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="relative w-full h-full p-8 flex flex-col items-center justify-center bg-white/5">
                    <Users className="w-12 h-12 mb-3 opacity-20 text-white" />
                    <div className="w-8 h-1 rounded-full mb-2" style={{ backgroundColor: [C.teal, C.royalBlue, C.tealLight, "#7DD3E8"][i % 4] }} />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">
                {member.name}
              </h3>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: C.tealLight, fontSize: '0.65rem' }}>
                {member.role}
              </p>
              <p className="text-xs leading-relaxed max-w-[200px] mx-auto" style={{ color: "rgba(200, 216, 238, 0.7)" }}>
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C, foundationData } from "../constants";

export default function FoundationSection() {
  const [foundationIndex, setFoundationIndex] = React.useState(0);

  return (
    <section className="py-24" style={{ backgroundColor: C.warmWhite }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold tracking-widest uppercase text-sm mb-4" style={{ color: C.teal }}>Our Foundation</h2>
          <p className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}>
            The Articulink <span className="text-gradient">Storybook</span>
          </p>
        </div>

        <div className="flex justify-center items-center py-10 perspective-3000">
          <div
            className="relative w-full max-w-5xl h-[550px] bg-[#2A1D15] rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-4 border-[#3D2B1F]"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 0%, #4a3528, #2a1d15)"
            }}
          >
            <div className="absolute top-4 bottom-4 left-4 right-4 bg-[#EDE8DF] rounded-[2.5rem] shadow-inner" />
            <div className="absolute top-5 bottom-5 left-5 right-5 bg-white rounded-[2.3rem] shadow-sm overflow-hidden flex">
              
              <div
                className="w-1/2 bg-white p-16 relative z-10 border-r border-black/10 transition-colors duration-700"
                style={{
                  backgroundImage: "linear-gradient(to right, #ffffff 90%, #f0ede6 100%)",
                }}
              >
                <div className="h-full flex flex-col relative">
                  <div className="my-auto">
                    <div className="w-12 h-1 bg-teal-500 mb-8 rounded-full" />
                    <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
                      Our <br />Foundation
                    </h3>
                    <p className="text-lg leading-relaxed italic opacity-70 max-w-[280px]" style={{ color: C.textMid }}>
                      &ldquo;A clear purpose, guided by meaningful impact.&rdquo;
                    </p>
                  </div>

                  <div className="mt-auto pt-10">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-6 border-t border-black/5 pt-6">Table of Contents</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {foundationData.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => setFoundationIndex(i)}
                          className={`flex items-center gap-3 transition-all ${foundationIndex === i ? "text-teal-700" : "text-gray-400 hover:text-gray-600"}`}
                        >
                          <span className="text-[10px] font-bold opacity-40">0{i + 1}</span>
                          <span className="text-xs font-bold uppercase tracking-tight">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full z-20 pointer-events-none">
                <div className="w-full h-full" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.05) 45%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.05) 55%, rgba(0,0,0,0.1))" }} />
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-black/10" />
              </div>

              <div className="w-1/2 relative bg-[#F9F7F2]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={foundationIndex}
                    initial={{ rotateY: 90, opacity: 0, z: 100 }}
                    animate={{ rotateY: 0, opacity: 1, z: 0 }}
                    exit={{ rotateY: -90, opacity: 0, z: 100 }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 bg-white p-16 origin-left"
                    style={{
                      backgroundImage: "linear-gradient(to left, #ffffff 90%, #f0ede6 100%)",
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <div className="h-full flex flex-col relative">
                      <div className="my-auto">
                        {foundationIndex < 3 ? (
                          <>
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-10 shadow-xl"
                              style={{ backgroundColor: foundationData[foundationIndex].color }}
                            >
                              {foundationData[foundationIndex].icon && React.createElement(foundationData[foundationIndex].icon!, { className: "w-8 h-8" })}
                            </motion.div>

                            <motion.h4
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.4 }}
                              className="text-3xl font-bold mb-6"
                              style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}
                            >
                              {foundationData[foundationIndex].title}
                            </motion.h4>

                            <motion.p
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.5 }}
                              className="text-lg leading-relaxed opacity-80"
                              style={{ color: C.textMid }}
                            >
                              {foundationData[foundationIndex].desc}
                            </motion.p>
                          </>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                          >
                            <h3 className="text-3xl font-bold mb-6 leading-tight" style={{ color: C.textDark, fontFamily: "var(--font-playfair), serif" }}>
                              Because no one <br />should have to <br />
                              <span style={{ color: C.teal }}>stay silent</span>
                            </h3>
                            <div className="space-y-6 text-lg leading-relaxed" style={{ color: C.textMid }}>
                              <p>For many individuals with cleft palate and hypernasal speech, speaking isn&apos;t the hard part—being understood is.</p>
                              <p>Every word can be met with confusion, every sentence with hesitation. Over time, voices grow quieter, confidence fades, and conversations are avoided.</p>

                              <div className="pt-1 border-black/5">
                                <p className="font-bold text-teal-700 mb-2 italic">Articulink changes that.</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <div className="mt-auto flex justify-between items-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400 border-t border-black/5 pt-6">
                        <span>Archive vol. 01</span>
                        <div className="flex gap-6">
                          <button
                            onClick={() => setFoundationIndex((p) => (p > 0 ? p - 1 : 3))}
                            className="hover:text-teal-600 transition-colors"
                          >
                            &larr; Prev
                          </button>
                          <button
                            onClick={() => setFoundationIndex((p) => (p < 3 ? p + 1 : 0))}
                            className="hover:text-teal-600 transition-colors"
                          >
                            Next &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

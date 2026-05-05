"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { QrCode, Smartphone, CheckCircle2 } from "lucide-react";

const C = {
  deepNavy: "#0F2847",
  teal: "#2A8FA0",
  tealLight: "#3DAFC4",
  orbBlue: "#C8D8EE",
  cream: "#FAF8F4",
};

export default function InstallationSection() {
  const steps = [
    { id: 1, text: "Scan the QR code with your phone camera" },
    { id: 2, text: "Allow installation from unknown sources if prompted" },
    { id: 3, text: "Install the APK and open ARTICULINK" },
    { id: 4, text: "Register your account and start communicating" },
  ];

  return (
    <section id="download" className="py-24" style={{ backgroundColor: C.cream }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl"
          style={{ backgroundColor: C.deepNavy }}
        >
          {/* Decorative Orbs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div
              className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] rounded-full blur-[120px]"
              style={{ backgroundColor: "rgba(42, 143, 160, 0.15)" }}
            />
            <div
              className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full blur-[100px]"
              style={{ backgroundColor: "rgba(26, 68, 128, 0.2)" }}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4" style={{ color: C.tealLight }} />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Get the App</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Download <span style={{ color: C.tealLight }}>ARTICULINK</span> <br />
                  <span className="text-2xl md:text-3xl opacity-90 font-medium">for Mobile Devices</span>
                </h2>

                <p className="text-lg mb-10 max-w-lg leading-relaxed" style={{ color: C.orbBlue }}>
                  Scan the QR code with your device to download the ARTICULINK application directly.
                  No Play Store required for Android — just scan, install, and start your speech journey.
                </p>

                <div className="space-y-4">
                  {steps.map((step) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: step.id * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white group-hover:bg-white/10 transition-colors">
                        {step.id}
                      </div>
                      <p className="text-sm md:text-base text-white/90">{step.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* QR Code Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative p-6 bg-white rounded-[2.5rem] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-[2.5rem] blur-xl -z-10" />
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <Image
                    src="/images/qr-code.png"
                    alt="App Download QR Code"
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 whitespace-nowrap">
                  <QrCode className="w-4 h-4 text-gray-800" />
                  <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Scan to Install</span>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-8 opacity-60">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" style={{ color: C.tealLight }} />
                  </div>
                  <span className="text-[10px] text-white uppercase font-bold tracking-widest">Android APK</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" style={{ color: C.tealLight }} />
                  </div>
                  <span className="text-[10px] text-white uppercase font-bold tracking-widest">iOS Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

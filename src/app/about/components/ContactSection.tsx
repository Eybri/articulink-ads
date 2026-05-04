"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { C } from "../constants";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-24" style={{ backgroundColor: C.cream }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden"
          style={{ backgroundColor: C.deepNavy }}
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] rounded-full blur-[100px]"
              style={{ backgroundColor: "rgba(42, 143, 160, 0.15)" }}
            />
            <div
              className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full blur-[100px]"
              style={{ backgroundColor: "rgba(26, 68, 128, 0.15)" }}
            />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Get in <span style={{ color: C.tealLight }}>touch</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: C.orbBlue }}>
                Have questions, feedback, or want to collaborate? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "articulink00@gmail.com",
                  href: "mailto:articulink00@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Metro Manila, Philippines",
                  href: undefined,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+63 XXX XXX XXXX",
                  href: undefined,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(42, 143, 160, 0.2)" }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: C.tealLight }} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.tealLight }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-white font-semibold hover:underline transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MoveRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: "#0F2847",
        backdropFilter: "blur(20px)",
        boxShadow: scrolled 
          ? "0 10px 40px -10px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.05)" 
          : "0 4px 20px -5px rgba(0,0,0,0.1)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(255,255,255,0.02)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/icon-white.png"
              alt="Articulink Logo"
              width={44}
              height={44}
              className="transition-transform group-hover:scale-105 rounded-xl"
            />
            <span className="text-2xl font-bold tracking-tight text-white">
              Articu
              <span style={{ color: "#3DAFC4" }}>link</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {[
              { href: "/features", label: "Features" },
              { href: "/how-it-works", label: "How it Works" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 transition-colors"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#3DAFC4")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#download"
              className="text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #2A8FA0 0%, #1A4480 100%)",
                boxShadow: "0 4px 20px rgba(42, 143, 160, 0.3)",
              }}
            >
              Get Started
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 pb-6 pt-4"
          style={{
            backgroundColor: "#0F2847",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex flex-col gap-4">
            {[
              { href: "/features", label: "Features" },
              { href: "/how-it-works", label: "How it Works" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/75 hover:text-white py-2 text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="text-white px-6 py-3 rounded-xl text-center text-sm font-semibold mt-2"
              style={{
                background: "linear-gradient(135deg, #2A8FA0 0%, #1A4480 100%)",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import React from "react";
import { C } from "./constants";
import HeroSection from "./components/HeroSection";
import FoundationSection from "./components/FoundationSection";
import AppFeaturesSection from "./components/AppFeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import SDGSection from "./components/SDGSection";
import PartnersSection from "./components/PartnersSection";
import TeamSection from "./components/TeamSection";
import SafetyDisclaimer from "./components/SafetyDisclaimer";
import ContactSection from "./components/ContactSection";

export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: C.cream }}>
      {/* HERO */}
      <HeroSection />

      {/* OUR FOUNDATION (Premium 3D Storybook) */}
      <FoundationSection />

      {/* APP FEATURES */}
      <AppFeaturesSection />

      {/* HOW IT WORKS */}
      <HowItWorksSection />

      {/* SDG SECTION */}
      <SDGSection />

      {/* CLIENT & DEVELOPERS */}
      <PartnersSection />

      {/* THE TEAM */}
      <TeamSection />

      {/* SAFETY DISCLAIMER */}
      <SafetyDisclaimer />

      {/* CONTACT / CTA */}
      <ContactSection />
    </main>
  );
}

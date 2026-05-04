"use client";

import { C } from "./constants";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import DesignedForCommunicationSection from "./components/DesignedForCommunicationSection";
import TechnicalPillarsSection from "./components/TechnicalPillarsSection";
import MasterySuiteSection from "./components/MasterySuiteSection";

export default function HowItWorks() {
  return (
    <main className="min-h-screen pt-20 overflow-hidden" style={{ backgroundColor: C.cream }}>
      {/* Hero Section */}
      <HeroSection />

      {/* The Journey Section - Full Width Immersive Tutorial */}
      <JourneySection />

      {/* Designed for Communication Section */}
      <DesignedForCommunicationSection />

      {/* Technical Pillars Section */}
      <TechnicalPillarsSection />

      {/* Mastery Suite Section */}
      <MasterySuiteSection />
    </main>
  );
}

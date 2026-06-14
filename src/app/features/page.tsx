import React from "react";
import Features from "@/components/Features";
import { HeroSection } from "./components/HeroSection";
import { LivePhraseMode } from "./components/LivePhraseMode";
import { WERAnalytics } from "./components/WERAnalytics";
import { SupportMap } from "./components/SupportMap";
import { AriyaCompanion } from "./components/AriyaCompanion";
import { HistoryInsights } from "./components/HistoryInsights";
import { VoiceCustomization } from "./components/VoiceCustomization";
import { C } from "./components/constants";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: C.cream }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Core Feature: Live and Phrase Mode */}
      <LivePhraseMode />

      {/* Main Features Grid (Summary) */}
      <Features />

      {/* Deep Dive 1: WER Analytics */}
      <WERAnalytics />

      {/* Deep Dive 2: Support Ecosystem Map */}
      <SupportMap />

      {/* Deep Dive 3: Ariya AI Companion */}
      <AriyaCompanion />

      {/* Deep Dive 4: History Insights */}
      <HistoryInsights />

      {/* Deep Dive 5: Voice Customization */}
      <VoiceCustomization />
    </main>
  );
}

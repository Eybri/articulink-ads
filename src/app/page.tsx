import Hero from "@/components/Hero";
import Features from "@/components/Features";

const C = {
  cream: "#FAF8F4",
  deepNavy: "#0F2847",
  teal: "#2A8FA0",
  tealLight: "#3DAFC4",
  royalBlue: "#1A4480",
  orbTeal: "#BEE4EC",
  orbBlue: "#C8D8EE",
  orbSand: "#E8E0D0",
  sandLight: "#EDE8DF",
  sandMid: "#DDD6C8",
  textDark: "#1C2B3A",
  textMid: "#4A5A6A",
};

import InstallationSection from "@/components/InstallationSection";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: C.cream }}>
      <Hero />
      <Features />

      {/* Testimonial Section */}
      <section id="testimonials" className="py-24" style={{ backgroundColor: `${C.orbTeal}33` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-16"
            style={{ fontFamily: "var(--font-playfair), serif", color: C.textDark }}
          >
            Trusted by clinicians and <br />
            <span style={{ color: C.teal }}>patients worldwide</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className="p-10 rounded-[2rem] shadow-xl text-left"
              style={{
                backgroundColor: C.cream,
                border: `1px solid ${C.sandLight}`,
                boxShadow: `0 10px 40px ${C.sandMid}50`,
              }}
            >
              <p className="text-xl italic mb-8 leading-relaxed" style={{ color: C.textMid }}>
                &ldquo;Articulink has been a game-changer for my patients. The real-time clarity score motivates them to practice more often, and the progress tracking is invaluable.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full" style={{ backgroundColor: C.orbSand }} />
                <div>
                  <p className="font-bold" style={{ color: C.textDark }}>Dr. Sarah Chen</p>
                  <p className="text-sm" style={{ color: C.textMid }}>Senior Speech Pathologist</p>
                </div>
              </div>
            </div>

            <div
              className="p-10 rounded-[2rem] shadow-xl text-left"
              style={{
                backgroundColor: C.cream,
                border: `1px solid ${C.sandLight}`,
                boxShadow: `0 10px 40px ${C.sandMid}50`,
              }}
            >
              <p className="text-xl italic mb-8 leading-relaxed" style={{ color: C.textMid }}>
                &ldquo;After my stroke, I felt disconnected. This app gave me the tools to practice at home and see real results. I can finally talk to my grandkids again.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full" style={{ backgroundColor: C.orbBlue }} />
                <div>
                  <p className="font-bold" style={{ color: C.textDark }}>James Wilson</p>
                  <p className="text-sm" style={{ color: C.textMid }}>Stroke Survivor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <InstallationSection />

    </main>
  );
}

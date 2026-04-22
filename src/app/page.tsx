import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-teal/30">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Testimonial Section */}
      <section id="testimonials" className="py-24 bg-orb-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-text-dark">
            Trusted by clinicians and <br />
            <span className="text-teal">patients worldwide</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-10 rounded-[2rem] bg-cream shadow-xl shadow-sand-mid/30 text-left border border-sand-light">
              <p className="text-xl italic text-text-mid mb-8 leading-relaxed">
                &ldquo;Articulink has been a game-changer for my patients. The real-time clarity score motivates them to practice more often, and the progress tracking is invaluable.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orb-sand" />
                <div>
                  <p className="font-bold text-text-dark">Dr. Sarah Chen</p>
                  <p className="text-sm text-text-mid">Senior Speech Pathologist</p>
                </div>
              </div>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-cream shadow-xl shadow-sand-mid/30 text-left border border-sand-light">
              <p className="text-xl italic text-text-mid mb-8 leading-relaxed">
                &ldquo;After my stroke, I felt disconnected. This app gave me the tools to practice at home and see real results. I can finally talk to my grandkids again.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orb-blue" />
                <div>
                  <p className="font-bold text-text-dark">James Wilson</p>
                  <p className="text-sm text-text-mid">Stroke Survivor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="py-24" style={{ backgroundColor: "#FAF8F4" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden text-center" style={{ backgroundColor: "#0F2847" }}>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] rounded-full blur-[100px]" style={{ backgroundColor: "rgba(42, 143, 160, 0.2)" }} />
              <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full blur-[100px]" style={{ backgroundColor: "rgba(26, 68, 128, 0.2)" }} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Ready to find your <br />
                <span style={{ color: "#3DAFC4" }}>voice?</span>
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: "#C8D8EE" }}>
                Join thousands of others who are reclaiming their confidence. Download Articulink today and start your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:opacity-90" style={{ backgroundColor: "#2A8FA0" }}>
                  Download for iOS
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm">
                  Download for Android
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

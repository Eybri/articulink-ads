import Link from "next/link";
import Image from "next/image";

const BrandIcons = {
  Twitter: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2847" }} className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/whitelogo.png"
                alt="Articulink Logo"
                width={44}
                height={44}
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                Articu<span style={{ color: "#3DAFC4" }}>link</span>
              </span>
            </Link>
            <p style={{ color: "#C8D8EE" }} className="leading-relaxed mb-8">
              Empowering communication with AI. We provide assistive tools to help people connect and be understood in their daily lives.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                <BrandIcons.Twitter />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                <BrandIcons.Instagram />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                <BrandIcons.Linkedin />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4" style={{ color: "#C8D8EE" }}>
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Technical Stack</h4>
            <ul className="space-y-4 text-sm" style={{ color: "#C8D8EE" }}>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2A8FA0" }} />
                <span>FastAPI & MongoDB Backend</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2A8FA0" }} />
                <span>Next.js 16 (React 19) Web</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2A8FA0" }} />
                <span>React Native (Expo) Mobile</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2A8FA0" }} />
                <span>Whisper & Google Gemini AI</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2A8FA0" }} />
                <span>Supabase & Cloudinary Cloud</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Stay Updated</h4>
            <p style={{ color: "#C8D8EE" }} className="mb-6">Join our newsletter for latest updates and speech tips.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/40"
              />
              <button style={{ backgroundColor: "#2A8FA0" }} className="absolute right-2 top-2 hover:opacity-90 text-white px-4 py-1 rounded-lg text-sm font-semibold transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: "#C8D8EE80" }}>
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© 2026 Articulink. All rights reserved.</p>
            <p className="text-[10px] uppercase tracking-widest opacity-50">Powered by OpenAI&apos;s Whisper Small</p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

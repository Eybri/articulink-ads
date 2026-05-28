import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2847" }} className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/icon-white.png"
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
                <span>Nest & FastAPI Hybrid Backend</span>
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

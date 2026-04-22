"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-sand-mid/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-text-dark">
              Articu<span className="text-teal">link</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="text-text-mid hover:text-teal transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-text-mid hover:text-teal transition-colors">How it Works</Link>
            <Link href="#testimonials" className="text-text-mid hover:text-teal transition-colors">Success Stories</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="#download" 
              className="bg-royal-blue hover:bg-medium-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-royal-blue/20"
            >
              Get Started
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Articulink — AI-Powered Speech Clarity",
  description:
    "Reclaim your voice with Articulink. The only app that uses advanced AI to analyze, clarify, and track your speech journey in real-time.",
  icons: {
    icon: "/images/favicon-zoomed.png",
    apple: "/images/favicon-zoomed.png",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif", backgroundColor: "#FAF8F4" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

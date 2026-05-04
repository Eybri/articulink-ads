"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { C } from "../constants";

export default function ContactForm() {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !subject.trim() || !message.trim()) return;

    setSending(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.detail || "Something went wrong. Please try again.");
      }

      setSent(true);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setError(errorMessage);
      setTimeout(() => setError(""), 6000);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center backdrop-blur-sm"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: "rgba(42, 143, 160, 0.2)" }}
        >
          <Send className="w-6 h-6" style={{ color: C.tealLight }} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-sm mb-6" style={{ color: C.orbBlue }}>
          Thank you for reaching out. We&apos;ll get back to you at{" "}
          <span className="text-white font-semibold">articulink00@gmail.com</span>.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
          style={{ color: C.tealLight }}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
    >
      <h3 className="text-lg font-bold text-white mb-6">Send us a message</h3>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.tealLight }}>
            Your Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/30"
          />
        </div>
        <div className="flex items-end">
          <p className="text-xs leading-relaxed" style={{ color: "rgba(200, 216, 238, 0.5)" }}>
            Your message will be sent to{" "}
            <a href="mailto:articulink00@gmail.com" className="underline" style={{ color: C.tealLight }}>
              articulink00@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.tealLight }}>
          Subject
        </label>
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Partnership Inquiry"
          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/30"
        />
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.tealLight }}>
          Message
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what's on your mind..."
          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/30 resize-none"
        />
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 px-4 py-3 rounded-xl text-sm font-medium border"
          style={{
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            borderColor: "rgba(239, 68, 68, 0.3)",
            color: "#FCA5A5",
          }}
        >
          {error}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: C.teal }}
      >
        {sending ? "Sending..." : "Send Message"}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}

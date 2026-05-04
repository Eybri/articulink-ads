"use client";

import { AlertTriangle } from "lucide-react";
import { C } from "../constants";

export default function SafetyDisclaimer() {
  return (
    <section className="py-16" style={{ backgroundColor: C.warmWhite }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-start gap-5 p-8 rounded-2xl border"
          style={{ backgroundColor: "#FFFBEB", borderColor: "#FEF3C7" }}
        >
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">Important Disclaimer</h3>
            <p className="text-sm leading-relaxed text-amber-800">
              Articulink is a communication tool and <strong>not a replacement for professional
                speech therapy.</strong> We encourage working with a qualified speech-language
              pathologist alongside using Articulink for the best outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

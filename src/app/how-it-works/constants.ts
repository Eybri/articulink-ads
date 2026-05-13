import { Mic2, Cpu, BarChart3, Cloud, Play, CheckCircle2, Zap, Activity, Layers, Globe, MapPin } from "lucide-react";

export const C = {
  cream: "#FAF8F4",
  deepNavy: "#0F2847",
  teal: "#2A8FA0",
  tealLight: "#3DAFC4",
  royalBlue: "#1A4480",
  textDark: "#1C2B3A",
  textMid: "#4A5A6A",
  accent: "#FF6B6B",
};

export const liveSteps = [
  {
    icon: Zap,
    title: "Enable Live Mode",
    short: "Activate Streaming",
    desc: "Start by toggling the 'Simultaneous' switch in the app. This initializes the live neural engine, preparing Articulink for continuous, real-time audio processing.",
    color: "#2A8FA0", // Teal
    tech: "Step 01"
  },
  {
    icon: Mic2,
    title: "One-Tap Start",
    short: "Hands-Free Flow",
    desc: "Simply tap the microphone icon once to begin. Unlike Phrase mode, you don't need to hold or tap again for every sentence—just speak naturally as you would in a normal conversation.",
    color: "#FF6B6B", // Coral
    tech: "Step 02"
  },
  {
    icon: Activity,
    title: "Real-Time Streaming",
    short: "3-Second Intervals",
    desc: "Our AI processes your voice in rapid 3-second segments. You'll see the transcription appear instantly on the screen as the engine captures every phonetic nuance without delay.",
    color: "#1A4480", // Royal Blue
    tech: "Step 03"
  },
  {
    icon: Globe,
    title: "Bilingual Intelligence",
    short: "Tagalog-English Sync",
    desc: "The system automatically detects whether you're speaking Tagalog or English. It provides fluid, context-aware transcriptions that adapt to your natural code-switching patterns.",
    color: "#FF9F43", // Orange
    tech: "Step 04"
  },
  {
    icon: CheckCircle2,
    title: "End Session",
    short: "Session Close",
    desc: "Tap the microphone one last time to end the session. Live mode is built for real-time, immediate communication and does not persist data to your history, keeping your interactions lightweight.",
    color: "#3DAFC4", // Teal Light
    tech: "Step 05"
  }
];

export const phraseSteps = [
  {
    icon: Layers,
    title: "Precision Capture",
    short: "Record Full Phrases",
    desc: "Use Phrase Mode for high-accuracy transactions. Tap the microphone and speak a complete sentence or phrase. This mode focuses on maximum phonetic clarity and spelling precision.",
    color: "#1A4480", // Royal Blue
    tech: "Step 01"
  },
  {
    icon: Cpu,
    title: "Neural Transcription",
    short: "Whisper Optimization",
    desc: "Tap the mic again to stop recording. Our fine-tuned Whisper Small model then performs a deep analysis of your speech, generating a highly accurate text output in seconds.",
    color: "#FF9F43", // Orange
    tech: "Step 02"
  },
  {
    icon: BarChart3,
    title: "WER Feedback",
    short: "Error Rate Tracking",
    desc: "Instantly view your Word Error Rate (WER). The app provides visual feedback on transcription precision, helping you identify exactly where phonetic clarity can be improved toward a 0% error goal.",
    color: "#2A8FA0", // Teal
    tech: "Step 03"
  },
  {
    icon: Play,
    title: "Audio Synthesis",
    short: "The 'Speak' Button",
    desc: "Once transcribed, click the large 'Speak' button. Articulink will play back your phrase with perfect articulation, acting as your vocal proxy in shops or official appointments.",
    color: "#FF6B6B", // Coral
    tech: "Step 04"
  },
  {
    icon: Cloud,
    title: "Dashboard Sync",
    short: "Long-term Tracking",
    desc: "Every phrase is logged into your personal growth dashboard. Track how your accuracy improves over time across different categories like 'Daily Essentials' or 'Medical'.",
    color: "#0F2847", // Deep Navy
    tech: "Step 05"
  }
];

export const features = [
  {
    title: "Live Interaction",
    desc: "Real-time transcription for meetings, classes, and social events.",
    icon: Zap,
    color: "#2A8FA0", // Teal
    accent: "#3DAFC4"
  },
  {
    title: "Phrase Precision",
    desc: "Record specific sentences for high-accuracy vocal proxies.",
    icon: Mic2,
    color: "#FF6B6B", // Coral
    accent: "#FF8E8E"
  },
  {
    title: "Progress Tracking",
    desc: "Visualize your journey to clearer speech with data-driven insights.",
    icon: BarChart3,
    color: "#1A4480", // Royal Blue
    accent: "#60A5FA"
  },
];

export const masteryFeaturesLeft = [
  {
    icon: Mic2,
    title: "Voice to Text",
    desc: "Turn your speech into text instantly. Choose between High Precision for perfect spelling or Real-Time for fast, live conversations.",
    color: "#1A4480", // Royal Blue
    accent: "#60A5FA"
  },
  {
    icon: Zap,
    title: "AI Chat Assistant",
    desc: "Use our smart chatbot powered by Google Gemini to help you find the right words or translate thoughts between Tagalog and English.",
    color: "#2A8FA0", // Teal
    accent: "#3DAFC4"
  },
  {
    icon: MapPin,
    title: "Find a Clinic",
    desc: "Easily find and contact speech clinics and specialists near you across the Philippines with our built-in interactive map.",
    color: "#FF6B6B", // Coral
    accent: "#FF8E8E"
  }
];

export const masteryFeaturesRight = [
  {
    icon: BarChart3,
    title: "Track Progress",
    desc: "See how much you've improved. Our app automatically records your speech clarity and speed so you can celebrate your milestones.",
    color: "#FF9F43", // Orange
    accent: "#FFB347"
  },
  {
    icon: Globe,
    title: "English & Tagalog",
    desc: "Speak naturally in both English and Tagalog. Articulink is specially designed to understand and translate between both languages smoothly.",
    color: "#2A8FA0", // Teal
    accent: "#3DAFC4"
  },
  {
    icon: Cloud,
    title: "Safe & Private",
    desc: "Your data is always protected. All your recordings and history are securely saved and encrypted, so only you can access them.",
    color: "#3DAFC4", // Teal Light
    accent: "#7EE7F7"
  }
];

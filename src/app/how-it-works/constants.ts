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
    title: "Switch to Live Mode",
    short: "Activate Neural Streaming",
    desc: "Start by selecting 'Live Mode' on the top toggle. This prepares the app for continuous, real-time audio processing using our neural streaming engine.",
    color: "#2A8FA0", // Teal
    tech: "Step 01",
    mockup: {
      status: "Tap to start live listening",
      transcript: "",
      isRecording: false,
      isSpeaking: false,
      words: []
    }
  },
  {
    icon: Mic2,
    title: "One-Tap Start",
    short: "Continuous Listening",
    desc: "Tap the microphone once to begin. Unlike Phrase mode, you don't need to hold or tap again for every sentence—just speak naturally and let Articulink handle the rest.",
    color: "#FF6B6B", // Coral
    tech: "Step 02",
    mockup: {
      status: "Listening...",
      transcript: "",
      isRecording: true,
      isSpeaking: false,
      words: []
    }
  },
  {
    icon: Activity,
    title: "Real-Time Streaming",
    short: "3-Second Neural Loops",
    desc: "Our AI processes your voice in rapid 3-second segments. Words appear instantly on screen, providing immediate visual confirmation of your speech.",
    color: "#1A4480", // Royal Blue
    tech: "Step 03",
    mockup: {
      status: "Listening...",
      transcript: "I'm happy to see you",
      isRecording: true,
      isSpeaking: false,
      words: ["I'm", "happy", "to", "see", "you"]
    }
  },
  {
    icon: Globe,
    title: "Simultaneous Playback",
    short: "Your Voice, Clarified",
    desc: "Articulink automatically plays back your clarified speech in real-time. This 'Simultaneous Mode' ensures your listener hears a clear, articulated version of your thoughts without delay.",
    color: "#FF9F43", // Orange
    tech: "Step 04",
    mockup: {
      status: "Simultaneous Playback",
      transcript: "I'm happy to see you",
      isRecording: true,
      isSpeaking: true,
      words: ["I'm", "happy", "to", "see", "you"]
    }
  },
  {
    icon: CheckCircle2,
    title: "Session Wrap-up",
    short: "Easy Stop & Review",
    desc: "Tap the stop button whenever you're done. Your live session remains on screen for review, ensuring you never lose track of the conversation flow.",
    color: "#3DAFC4", // Teal Light
    tech: "Step 05",
    mockup: {
      status: "Session Ended",
      transcript: "I'm happy to see you. How have you been?",
      isRecording: false,
      isSpeaking: false,
      words: ["I'm", "happy", "to", "see", "you.", "How", "have", "you", "been?"]
    }
  }
];

export const phraseSteps = [
  {
    icon: Layers,
    title: "Targeted Capture",
    short: "Record Specific Phrases",
    desc: "Use Phrase Mode for high-precision needs like ordering food or medical consultations. Tap the mic and record a single, complete sentence for maximum accuracy.",
    color: "#1A4480", // Royal Blue
    tech: "Step 01",
    mockup: {
      status: "Tap to record a phrase",
      transcript: "",
      isRecording: false,
      isSpeaking: false,
      confidence: 0
    }
  },
  {
    icon: Cpu,
    title: "Deep Analysis",
    short: "Whisper Optimization",
    desc: "Once you tap stop, our fine-tuned Whisper model performs a deep phonetic analysis, ensuring every word is transcribed with extreme precision.",
    color: "#FF9F43", // Orange
    tech: "Step 02",
    mockup: {
      status: "Processing speech...",
      transcript: "",
      isRecording: false,
      isLoading: true,
      isSpeaking: false,
      confidence: 0
    }
  },
  {
    icon: BarChart3,
    title: "Clarity Scoring",
    short: "Word-Level Feedback",
    desc: "Instantly see your Word Error Rate (WER). Low-confidence words are highlighted in red or orange, helping you identify exactly where your phonetic clarity can be improved.",
    color: "#2A8FA0", // Teal
    tech: "Step 03",
    mockup: {
      status: "Analysis Complete",
      transcript: "I would like to order one chicken adobo please.",
      isRecording: false,
      isSpeaking: false,
      confidence: 98,
      words: [
        { word: "I", confidence: 99 },
        { word: "would", confidence: 98 },
        { word: "like", confidence: 99 },
        { word: "to", confidence: 99 },
        { word: "order", confidence: 97 },
        { word: "one", confidence: 99 },
        { word: "chicken", confidence: 98 },
        { word: "adobo", confidence: 85 },
        { word: "please.", confidence: 99 }
      ]
    }
  },
  {
    icon: Play,
    title: "The 'Speak' Proxy",
    short: "Manual Vocal Playback",
    desc: "Click the 'Play Clarity Voice' button. Articulink acts as your vocal proxy, speaking your phrase with perfect articulation to ensure you are understood every time.",
    color: "#FF6B6B", // Coral
    tech: "Step 04",
    mockup: {
      status: "Speaking phrase...",
      transcript: "I would like to order one chicken adobo please.",
      isRecording: false,
      isSpeaking: true,
      confidence: 98
    }
  },
  {
    icon: Cloud,
    title: "Growth Tracking",
    short: "Sync to Dashboard",
    desc: "Every recorded phrase is automatically synced to your history. Monitor your improvement over time and celebrate your milestones as your clarity percentage grows.",
    color: "#0F2847", // Deep Navy
    tech: "Step 05",
    mockup: {
      status: "Synced to History",
      transcript: "I would like to order one chicken adobo please.",
      isRecording: false,
      isSpeaking: false,
      confidence: 98,
      isSynced: true
    }
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

import { Mic, Sparkles, Map, MessageCircle, History, Volume2, BarChart3, Lock, Brain, Save, Heart, Waves, Accessibility } from "lucide-react";

export const C = {
  teal: "#2A8FA0",
  tealDark: "#1E6B78",
  tealLight: "#3DAFC4",
  royalBlue: "#1A4480",
  deepNavy: "#0F2847",
  textDark: "#1C2B3A",
  textMid: "#4A5A6A",
  cream: "#FAF8F4",
  warmWhite: "#F5F1EA",
  sandLight: "#EDE8DF",
  sandMid: "#DDD6C8",
  orbTeal: "#BEE4EC",
  orbBlue: "#C8D8EE",
  orbSand: "#E8E0D0",
};

export const foundationData = [
  {
    label: "Purpose",
    title: "Purpose",
    icon: Waves,
    color: C.teal,
    desc: "Articulink exists to give a voice to those who struggle to be understood. For individuals with hypernasality caused by cleft palate, everyday conversations can feel isolating. We transform speech into clearer communication—helping users connect and belong without hesitation."
  },
  {
    label: "Mission",
    title: "Mission",
    icon: Heart,
    color: C.royalBlue,
    desc: "To empower individuals with speech differences by turning uncertainty into confidence, isolation into connection, and silence into meaningful conversations through compassionate and innovative technology."
  },
  {
    label: "Vision",
    title: "Vision",
    icon: Accessibility,
    color: C.tealDark,
    desc: "We envision a world where no one is left unheard—where every person, regardless of how they speak, can share their thoughts freely, be understood deeply, and live with confidence, dignity, and connection."
  },
  {
    label: "User Context",
    title: "Because no one should have to stay silent",
    desc: "For many individuals with cleft palate and hypernasal speech, speaking isn't the hard part—being understood is. Every word can be met with confusion, every sentence with hesitation. Over time, voices grow quieter, confidence fades, and conversations are avoided."
  }
];

export const featuresData = [
  {
    title: "Real-Time Transcription",
    desc: "Record your voice and get instant speech-to-text transcription powered by advanced AI recognition.",
    icon: Mic,
    color: "#4DD8E8",
    glowColor: "rgba(77, 216, 232, 0.3)",
    bgColor: C.teal,
    label: "Transcription"
  },
  {
    title: "AI Clarity Engine",
    desc: "Your speech is analyzed and enhanced using OpenAI's Whisper Small model, correcting misarticulations and producing clearer text.",
    icon: Sparkles,
    color: "#6B9AFF",
    glowColor: "rgba(107, 154, 255, 0.3)",
    bgColor: C.royalBlue,
    label: "AI Engine"
  },
  {
    title: "Interactive Clinic Map",
    desc: "Find nearby speech therapy clinics, cleft care centers, and support facilities with real-time routing.",
    icon: Map,
    color: "#34D399",
    glowColor: "rgba(52, 211, 153, 0.3)",
    bgColor: "#059669",
    label: "Clinic Map"
  },
  {
    title: "AI Chatbot Assistant",
    desc: "Chat with our intelligent assistant for speech tips, therapy guidance, and answers to your questions.",
    icon: MessageCircle,
    color: "#A78BFA",
    glowColor: "rgba(167, 139, 250, 0.3)",
    bgColor: "#7C3AED",
    label: "AI Chatbot"
  },
  {
    title: "Speech History & Analytics",
    desc: "Track all your recordings with detailed stats — accuracy percentage, word count, and duration.",
    icon: History,
    color: "#FBBF24",
    glowColor: "rgba(251, 191, 36, 0.3)",
    bgColor: "#D97706",
    label: "Analytics"
  },
  {
    title: "Text-to-Speech Playback",
    desc: "Hear how your corrected text sounds with natural text-to-speech synthesis for comparative learning.",
    icon: Volume2,
    color: "#5EEAD4",
    glowColor: "rgba(94, 234, 212, 0.3)",
    bgColor: C.tealDark,
    label: "Playback"
  },
  {
    title: "Word-Level Confidence",
    desc: "See confidence scores for every individual word in your transcript to highlight areas for practice.",
    icon: BarChart3,
    color: "#FB7185",
    glowColor: "rgba(251, 113, 133, 0.3)",
    bgColor: "#E11D48",
    label: "Confidence"
  },
  {
    title: "Secure & Private",
    desc: "Your recordings and personal data are protected with authentication and privacy-first design.",
    icon: Lock,
    color: "#94A3B8",
    glowColor: "rgba(148, 163, 184, 0.3)",
    bgColor: C.deepNavy,
    label: "Privacy"
  },
];

export const howItWorksSteps = [
  {
    icon: Mic,
    step: "01",
    title: "Tap Record",
    desc: "Press the microphone icon and start speaking naturally.",
    color: C.teal,
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Processing",
    desc: "Speech is processed using OpenAI's Whisper Small model to analyze patterns and enhance clarity.",
    color: C.royalBlue,
  },
  {
    icon: Volume2,
    step: "03",
    title: "Hear the Result",
    desc: "Play the improved audio, view the text, or share the output.",
    color: C.tealDark,
  },
  {
    icon: Save,
    step: "04",
    title: "Save to History",
    desc: "Save the recording to your private history or discard it.",
    color: C.deepNavy,
  },
];

export const sdgData = [
  {
    number: "03",
    title: "Good Health & Well-being",
    desc: "Articulink supports emotional and social well-being by providing a tool that helps individuals with speech challenges communicate more effectively.",
    color: "#4C9F38",
    image: "/images/sdg3.png",
  },
  {
    number: "04",
    title: "Quality Education",
    desc: "We promote inclusive learning environments by ensuring that speech-impaired students have the technology to express their ideas clearly.",
    color: "#C5192D",
    image: "/images/sdg4.png",
  },
  {
    number: "10",
    title: "Reduced Inequalities",
    desc: "By breaking down communication barriers, we empower individuals with lisp and hypernasal speech to participate fully in society.",
    color: "#E11484",
    image: "/images/sdg10.png",
  },
];

export const teamMembers = [
  {
    name: "Rommel Dalisay",
    role: "Technical Adviser",
    badge: "Professor",
    institution: "TUP-Taguig",
    desc: "Provides expert technical guidance and mentorship to the Articulink development team.",
    image: "/images/rommeldalisay.png",
    hoverImage: "/images/dalisay-cartoon.png",
    objectPosition: "top"
  },
  {
    name: "Avey Macasa",
    role: "Project Lead / AI, Mobile & Web Developer",
    badge: "4th Year Student",
    institution: "TUP-Taguig",
    desc: "Lead architect of AI/ML models, cross-platform mobile application, and web ecosystem.",
    image: "/images/macasa.png",
    hoverImage: "/images/macasa-cartoon.png",
    objectPosition: "top"
  },
  {
    name: "Bryan James Batan",
    role: "Admin Designer & Backend Developer",
    badge: "4th Year Student",
    institution: "TUP-Taguig",
    desc: "Focused on administrative interface design and core backend services.",
    image: "/images/batan.jpg",
    hoverImage: "/images/batan-cartoon.png",
    objectPosition: "top"
  },
  {
    name: "Gelgin Del Los Santos",
    role: "Documentation & Data Specialist",
    badge: "4th Year Student",
    institution: "TUP-Taguig",
    desc: "Handles technical documentation and critical dataset collection.",
    image: "/images/gelgin.jpg",
    hoverImage: "/images/gelgincartoons.png",
    objectPosition: "top"
  },
  {
    name: "Tyrone Justine Medina",
    role: "Documentation & Data Specialist",
    badge: "4th Year Student",
    institution: "TUP",
    desc: "Specializes in research documentation and speech dataset management.",
    image: "/images/tyrone.jpg",
    hoverImage: "/images/tyrone-cartoon.png",
    objectPosition: "top"
  },
];

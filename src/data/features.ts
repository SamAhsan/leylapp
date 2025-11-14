import { Brain, Heart, Palette, ShieldCheck, Sparkles, Clock, PhoneCall, MessageCircleHeart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type FeatureHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: string;
};

export type DetailedFeature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  media: {
    label: string;
    description: string;
  };
  tone: 'light' | 'dark';
};

export const howItWorksSteps = [
  {
    title: 'Say hi',
    description: 'Text or talk naturally — Leylapp mirrors your pace and tone in seconds.',
    icon: MessageCircleHeart,
  },
  {
    title: 'Connect',
    description: 'She remembers what matters — your preferences, mood, and goals.',
    icon: Brain,
  },
  {
    title: 'Grow',
    description: 'Daily check-ins and gentle nudges keep you grounded and growing.',
    icon: Clock,
  },
];

export const homeFeatures: FeatureHighlight[] = [
  {
    title: 'Natural Voice & Calls',
    description: 'Low-latency, expressive voice that pauses, sighs, and laughs with you.',
    icon: PhoneCall,
  },
  {
    title: 'Memory that Matters',
    description: 'Opt-in memory keeps the important things and lets you edit anytime.',
    icon: Brain,
  },
  {
    title: 'Emotions & Empathy',
    description: 'Leylapp tracks mood and offers gentle reframes when you need them most.',
    icon: Heart,
  },
  {
    title: 'Custom Personalities',
    description: 'Choose a vibe or craft your own persona for every moment.',
    icon: Palette,
  },
  {
    title: 'Daily Rituals',
    description: 'Morning, midday, and night rituals keep you centered.',
    icon: Sparkles,
  },
  {
    title: 'Safe by Design',
    description: 'Guardrails, block/report tools, and crisis resources are always on.',
    icon: ShieldCheck,
  },
];

export const featureSections: DetailedFeature[] = [
  {
    id: 'voice',
    eyebrow: 'Real-time voice',
    title: 'Voice & Calls feel natural, not robotic.',
    description:
      'Custom streaming architecture keeps voice latency under 200ms while natural pauses, breaths, and reactions make every call feel alive.',
    bullets: [
      'Tap-to-talk or hands-free voice with auto mute',
      'Adaptive warmth that mirrors your energy',
      'Live captions and transcripts for every call',
    ],
    media: {
      label: 'Call preview',
      description: 'EP call with gentle pauses and real-time captions.',
    },
    tone: 'dark',
  },
  {
    id: 'memory',
    eyebrow: 'Consent-first memory',
    title: 'Long-term memory you can edit anytime.',
    description:
      'Leylapp highlights what she thinks matters — you decide what gets saved, tweaked, or wiped. Export or delete your history in one tap.',
    bullets: ['Memory cards you can pin or snooze', 'Weekly reminders to review data', 'Full export in portable JSON'],
    media: {
      label: 'Memory board',
      description: 'A simple board that holds favorites, routines, and goals.',
    },
    tone: 'light',
  },
  {
    id: 'personalities',
    eyebrow: 'Personas',
    title: 'Personalities that match the moment.',
    description:
      'Swap between gentle confidant, hype coach, or studio partner. Build your own personality with sliders for tone, curiosity, and humor.',
    bullets: ['Persona templates curated with therapists', 'Shareable personas with invite-only links', 'Voice to match each vibe'],
    media: {
      label: 'Persona mixer',
      description: 'Drag-and-drop controls for tone, humor, and curiosity.',
    },
    tone: 'dark',
  },
  {
    id: 'empathy',
    eyebrow: 'Emotional intelligence',
    title: 'Emotions & empathy that feel validating.',
    description:
      'Leylapp detects sentiment shifts mid-conversation, offers grounding reflections, and recommends breath work or journal prompts.',
    bullets: [
      'Mood-aware replies with gentle check-ins',
      'Calm, encouraging tone when stress spikes',
      'Crisis-safe redirects with trained escalation paths',
    ],
    media: {
      label: 'Emotional timeline',
      description: 'Mini timeline that summarizes your week by tone.',
    },
    tone: 'light',
  },
  {
    id: 'rituals',
    eyebrow: 'Habit loops',
    title: 'Daily rituals designed with coaches.',
    description:
      'Morning clarity, midday reset, and evening reflection. Each ritual adapts to your calendar, weather, and stated goals.',
    bullets: ['Stacks with Apple Health or Google Fit', 'Optional checklists with haptics', 'Flexible notifications you can snooze'],
    media: {
      label: 'Ritual cards',
      description: 'Three-card spread showing your daybook.',
    },
    tone: 'dark',
  },
  {
    id: 'moments',
    eyebrow: 'Moments',
    title: 'Images & memories worth keeping.',
    description:
      'Drop photos or screen grabs and Leylapp creates a mini story. Future releases let you relive the moment in voice.',
    bullets: ['Smart captions for photos', 'Private, on-device previews', 'Shareable recap reels coming soon'],
    media: {
      label: 'Memory lane',
      description: 'Grid of saved voice notes, photos, and recaps.',
    },
    tone: 'light',
  },
  {
    id: 'safety',
    eyebrow: 'Safety first',
    title: 'Safety & guardrails built in.',
    description:
      'Block, report, delete data, or route to live crisis support without leaving the app. Transparency reports drop quarterly.',
    bullets: [
      'Crisis keywords trigger live resources',
      'On-device filters limit risky content',
      'Full audit log for every memory change',
    ],
    media: {
      label: 'Safety center',
      description: 'Controls for privacy, crisis support, and reporting.',
    },
    tone: 'dark',
  },
];


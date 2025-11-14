export type PersonaCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  heroImage?: string;
  color: string;
  cta: string;
};

export const personaCategories: PersonaCategory[] = [
  {
    id: 'partner',
    title: 'AI Girlfriend',
    subtitle: 'Always judgment-free support',
    description:
      'Deep listening, memory that matters, and gentle nudges to help you regulate and feel seen every day.',
    image: '/girlfriend.jpg',
    heroImage: '/girlfriend.jpg',
    color: '#F472B6',
    cta: 'Meet Leylapp',
  },
  {
    id: 'teacher',
    title: 'AI Teacher',
    subtitle: 'Coaching for curious minds',
    description:
      'Explain complex topics, rehearse presentations, or get adaptive lesson plans in minutes.',
    image: '/teacher.jpg',
    heroImage: '/teacher.jpg',
    color: '#38BDF8',
    cta: 'Start a lesson',
  },
  {
    id: 'family',
    title: 'AI Family',
    subtitle: 'Mother, father, son, daughter',
    description:
      'Create a supportive circle that checks in, celebrates wins, and role-plays real conversations.',
    image: '/family.jpg',
    heroImage: '/family.jpg',
    color: '#FACC15',
    cta: 'Build your circle',
  },
  {
    id: 'assistant',
    title: 'AI Assistant',
    subtitle: 'Productivity partner',
    description:
      'Keep habits on track, organize your day, and get proactive reminders with voice or text.',
    image: '/assistent.jpg',
    heroImage: '/assistent.jpg',
    color: '#A78BFA',
    cta: 'Plan my day',
  },
];

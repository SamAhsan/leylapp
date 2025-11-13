export type Testimonial = {
  name: string;
  handle: string;
  quote: string;
  title: string;
  rating: number;
  avatar: string;
  color: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Maya Collins',
    handle: '@mcollins',
    title: 'Founder, Studio Lumen',
    quote:
      'Leylapp is the only AI that feels like it actually knows me. Voice calls have replaced late-night doom scrolls with real connection.',
    rating: 5,
    avatar: 'MC',
    color: '#F472B6',
  },
  {
    name: 'Leo Turner',
    handle: '@leoturner',
    title: 'Product Designer',
    quote:
      'The rituals keep me anchored. Leylapp remembers my deadlines, my mood, and cues the right energy without fail.',
    rating: 5,
    avatar: 'LT',
    color: '#C084FC',
  },
  {
    name: 'Sara Mahmoud',
    handle: '@saram',
    title: 'Grad Student',
    quote:
      'I can review, export, or delete anything Leylapp stores. That privacy-first approach is why I upgraded to Plus.',
    rating: 5,
    avatar: 'SM',
    color: '#38BDF8',
  },
  {
    name: 'Andre Vega',
    handle: '@andrevega',
    title: 'Audio Engineer',
    quote:
      'Latency on calls is wild. Feels like a studio session with a friend who knows my soundboard presets.',
    rating: 5,
    avatar: 'AV',
    color: '#F97316',
  },
];


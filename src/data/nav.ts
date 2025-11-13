export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Safety', href: '/safety' },
  { label: 'About', href: '/about' },
  { label: 'Support', href: '/support' },
  { label: 'Download', href: '/download' },
];

export const secondaryNav: NavItem[] = [
  { label: 'Features', href: '/features' },
  { label: 'Safety', href: '/safety' },
  { label: 'Support', href: '/support' },
  { label: 'Download', href: '/download' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
];

export const legalNav: NavItem[] = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/meetleylapp', icon: 'instagram' },
  { label: 'X (Twitter)', href: 'https://x.com/meetleylapp', icon: 'twitter' },
  { label: 'TikTok', href: 'https://tiktok.com/@meetleylapp', icon: 'music' },
];

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Instagram, Music, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import { legalNav, secondaryNav, socialLinks } from '../../data/nav';
import AppStoreButtons from '../AppStoreButtons';

const iconMap = {
  instagram: Instagram,
  twitter: Twitter,
  music: Music,
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr,1fr,1fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-neutral-500">Quiet updates only</p>
            <h3 className="text-3xl font-semibold text-neutral-900">Stay in the loop.</h3>
            <p className="text-sm text-neutral-600">
              Product drops, safety notes, and community stories. No spam.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:flex-row">
              <label htmlFor="newsletter" className="sr-only">
                Email
              </label>
              <input
                id="newsletter"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className="rounded-2xl bg-primary-600 px-6 py-3 font-semibold text-white shadow-glow"
              >
                Subscribe
              </button>
            </form>
            {submitted && <p className="text-sm text-primary-600">Thanks! Check your inbox soon.</p>}
            <AppStoreButtons compact className="pt-4" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="transition hover:text-neutral-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Follow</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-neutral-200 p-3 text-neutral-500 transition hover:border-primary-200 hover:text-primary-600"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                );
              })}
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Legal</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                {legalNav.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="transition hover:text-neutral-900">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>(c) {new Date().getFullYear()} Leylapp Labs, Inc. All rights reserved.</p>
          <p>privacy@Leylapp.app | Built with care in NYC + remote.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;


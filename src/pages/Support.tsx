import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import { supportLinks } from '../data/support';

const Support = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('success');
    event.currentTarget.reset();
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <>
      <SEO
        title="Support — Leylapp"
        description="Reset passwords, manage subscriptions, report bugs, or contact the Leylapp team."
        path="/support"
      />
      <section className="section-padding">
        <Container>
          <SectionHeader
            eyebrow="Support"
            title="Help is here — day or night."
            subtitle="Use the quick links below or send a note. We usually respond within a day."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportLinks.map((link) => (
              <Link key={link.label} to={link.href} className="rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-900 shadow-card">
                {link.label} →
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-24">
        <Container className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-neutral-900">Contact us</h3>
          <p className="text-sm text-neutral-600">We reply within 24 hours (faster for Plus/Pro).</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="md:col-span-1">
              <label htmlFor="name" className="text-sm text-neutral-600">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-3 py-3 text-neutral-900"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="email" className="text-sm text-neutral-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-3 py-3 text-neutral-900"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="text-sm text-neutral-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-3 py-3 text-neutral-900"
              />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <CTAButton type="submit" className="rounded-3xl">
                Send message
              </CTAButton>
              {status === 'success' && <span className="text-sm text-primary-600">Sent! We'll reply soon.</span>}
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Support;


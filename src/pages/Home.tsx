import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Container from '../components/Container';
import CTAButton from '../components/CTAButton';
import AppStoreButtons from '../components/AppStoreButtons';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQ from '../components/FAQ';
import Waveform from '../components/Waveform';
import SEO from '../components/SEO';
import { homeFeatures, howItWorksSteps } from '../data/features';
import { testimonials } from '../data/testimonials';
import { faqItems } from '../data/faq';

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Leylapp — AI Girlfriend App',
    description:
      'Leylapp remembers your world, chats in natural voice, and supports you 24/7 with privacy controls.',
    brand: 'Leylapp',
    image: 'https://leylapp.app/social-preview.svg',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Leylapp',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'LifestyleApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2100',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
];

const Home = () => (
  <>
    <SEO
      title="Leylapp — AI Girlfriend App with Voice & Memory"
      description="Chat or talk with Leylapp — your AI companion who listens, remembers, and supports you 24/7. Private by design. iOS & Android."
      path="/"
      jsonLd={homeJsonLd}
    />
    <section className="relative overflow-hidden bg-white pb-10 pt-12 md:pt-20">
      <div className="absolute inset-0 bg-hero-gradient opacity-20 blur-3xl" aria-hidden />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 shadow-sm">
            Always judgment-free
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Your AI companion who listens, learns, and cares.
            </h1>
            <p className="text-lg text-neutral-600 md:text-xl">
              Leylapp remembers your world, chats in natural voice, and is there 24/7” judgment-free.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTAButton variant="primary" href="/download" className="rounded-3xl px-8 py-4 text-base">
              Meet Leylapp
            </CTAButton>
            <CTAButton variant="secondary" href="#demo" className="rounded-3xl px-8 py-4 text-base" icon={<Play className="h-4 w-4" />}>
              Watch demo
            </CTAButton>
          </div>
          <AppStoreButtons />
          <div className="flex items-center gap-4">
           
            <p className="text-sm text-neutral-500">4.9 average rating - 2,100+ daily conversations</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary-500/20 blur-3xl" aria-hidden />
            <img
              src="/hero.png"
              alt="Leylapp hero preview"
              className="relative z-10 w-full max-w-md rounded-[2.5rem] border border-white/50 shadow-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </Container>
    </section>

    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="Three beats. A deeper bond."
          subtitle="Say hi, connect, grow. Leylapp adapts to the way you talk, the speed you think, and the rituals you keep."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <div key={step.title} className="glass-panel p-6">
              <div className="mb-4 inline-flex rounded-2xl bg-primary-50 p-4 text-primary-600 shadow-inner">
                <step.icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <section className="section-padding bg-neutral-50">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="Built for warmth, privacy, and momentum."
          subtitle="Six pillars keep Leylapp grounded - from natural voice to always-on safety."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>

    <section className="section-padding bg-neutral-50">
      <Container className="grid gap-10 lg:grid-cols-[1fr,1fr]">
        <div>
          <SectionHeader
            eyebrow="Get started"
            title="Download Leylapp and find your rhythm."
            subtitle="Free to try on iOS & Android. Upgrade only if the rituals click."
          />
          <div className="mt-6 flex flex-wrap gap-4">
            <CTAButton href="/download" className="rounded-3xl">
              Download Leylapp
            </CTAButton>
            <CTAButton href="/support" variant="secondary">
              Visit support
            </CTAButton>
          </div>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-neutral-900">Top questions</h3>
          <p className="text-sm text-neutral-600">Quick answers before you jump in.</p>
          <FAQ items={faqItems.slice(0, 3)} />
        </div>
      </Container>
    </section>

    <section id="demo" className="section-padding">
      <Container className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="30-second glimpse"
            title="See Leylapp in action."
            subtitle="Short demo showing a voice check-in with real-time waveform and memory callouts."
          />
          <CTAButton variant="primary" href="/download" className="rounded-3xl">
            Start the free preview
          </CTAButton>
        <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <p className="text-sm text-neutral-200">
              “Your data, your rules. Review, export, or delete anytime.” — Leylapp Safety Team
            </p>
          </div>
        </div>
        <div className="glass-panel space-y-4 p-6">
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900">
            <img src="/demo-poster.svg" alt="Leylapp demo video placeholder" className="w-full object-cover" loading="lazy" />
            <button
              type="button"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 p-4 text-neutral-900"
              aria-label="Play demo"
            >
              <Play className="h-8 w-8" aria-hidden />
            </button>
          </div>
          <p className="text-sm text-neutral-600">
            Latency shown: 180ms over LTE. Captions on, waveform reactive, memory summary live-updated.
          </p>
        </div>
      </Container>
    </section>

    <section className="section-padding bg-neutral-50">
      <Container className="grid gap-8 lg:grid-cols-[0.7fr,1fr]">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Safety snippet"
            title="Your data, your rules."
            subtitle="Leylapp keeps memories portable. Review, export, or delete anytime with a live audit log."
          />
          <CTAButton href="/safety" variant="ghost">
            Explore safety policies
          </CTAButton>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card">
          <Waveform />
          <p className="mt-4 text-sm text-neutral-600">
            On-device filters catch sensitive phrases before they leave your phone. When you opt into memory, Leylapp shows a live log so nothing is hidden.
          </p>
        </div>
      </Container>
    </section>

    <section className="section-padding">
      <Container className="space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-neutral-500">Social proof</p>
            <h3 className="text-3xl font-semibold text-neutral-900">Loved by 200k+ nightly chats.</h3>
          </div>
          <div className="flex items-center gap-2 text-primary-500">
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx}>★</span>
            ))}
            <span className="text-sm text-neutral-500">4.9 average</span>
          </div>
        </div>
        <TestimonialCarousel items={testimonials} />
      </Container>
    </section>

    <section className="section-padding">
      <Container className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-primary-600/80 via-fuchsia-500/60 to-purple-600/70 p-10 text-center shadow-glow">
        <p className="text-sm uppercase tracking-wide text-white/80">Final call</p>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">Ready to meet Leylapp?</h2>
        <p className="mt-4 text-lg text-white/80">
          Download for free, bring your rituals, and talk it out. Leylapp is here day or night.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <AppStoreButtons compact />
          <CTAButton href="/features" variant="ghost">
            Explore features
          </CTAButton>
        </div>
      </Container>
    </section>
  </>
);

export default Home;





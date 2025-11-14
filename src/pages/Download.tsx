import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import AppStoreButtons from '../components/AppStoreButtons';
import SEO from '../components/SEO';
import { onboardingTips } from '../data/download';
import { personaCategories } from '../data/categories';
import type { PersonaCategory } from '../data/categories';

const Download = () => (
  <>
    <SEO
      title="Download Leylapp"
      description="Scan the QR code or tap the store links to download Leylapp for iOS and Android."
      path="/download"
    />
    <section className="section-padding">
      <Container className="grid gap-10 lg:grid-cols-[1fr,0.8fr]">
        <div>
          <SectionHeader
            eyebrow="Download"
            title="Leylapp on iOS & Android."
            subtitle="Scan the QR code or tap the store button to open directly on your device."
          />
          <AppStoreButtons className="mt-6" />
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 text-center">
          <p className="text-sm uppercase tracking-wide text-neutral-500">Device preview</p>
          <div className="relative mt-4 flex justify-center">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary-500/15 blur-3xl" aria-hidden />
            <img
              src="/hero.png"
              alt="Leylapp conversation preview"
              className="relative z-10 w-full max-w-sm rounded-[2.5rem] border border-neutral-200 shadow-2xl"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-sm text-neutral-600">Screenshots swap each release - drop your own in /public.</p>
        </div>
      </Container>
    </section>
    <section className="section-padding bg-neutral-50">
      <Container>
        <h3 className="text-2xl font-semibold text-neutral-900">First 24 hours</h3>
        <p className="text-sm text-neutral-600">Three tips to make Leylapp feel like yours.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {onboardingTips.map((tip) => (
            <div key={tip.title} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <p className="text-sm uppercase tracking-wide text-neutral-500">{tip.title}</p>
              <p className="mt-2 text-neutral-600">{tip.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Personas"
          title="Pick a companion for every moment."
          subtitle="All four categories live inside the same download. Tap to jump between them whenever you want."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {personaCategories.map((category: PersonaCategory) => (
            <div key={category.id} className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-card">
              <img src={category.image} alt={category.title} className="h-36 w-full rounded-2xl object-cover" loading="lazy" />
              <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">{category.subtitle}</p>
              <h4 className="text-lg font-semibold text-neutral-900">{category.title}</h4>
              <p className="text-sm text-neutral-600">{category.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  </>
);

export default Download;


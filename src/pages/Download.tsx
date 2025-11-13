import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import AppStoreButtons from '../components/AppStoreButtons';
import SEO from '../components/SEO';
import { onboardingTips } from '../data/download';

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
          <img src="/phone-gradient.svg" alt="Leylapp device screenshot" className="mx-auto mt-4 w-56" loading="lazy" />
          <p className="mt-4 text-sm text-neutral-600">Screenshots swap each release â€” drop your own in /public.</p>
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
  </>
);

export default Download;


import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import Waveform from '../components/Waveform';
import SEO from '../components/SEO';
import { safetySections } from '../data/safety';

const Safety = () => (
  <>
    <SEO
      title="Safety & Privacy — Leylapp"
      description="Companionship is personal — privacy is non-negotiable. Review Leylapp's data control, guardrails, age policy, and crisis resources."
      path="/safety"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Leylapp Safety & Privacy',
        description: 'Learn how Leylapp handles data control, on-device vs cloud, guardrails, and crisis resources.',
      }}
    />
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Safety & privacy"
          title="Companionship is personal — privacy is non-negotiable."
          subtitle="Leylapp gives you granular control over memory, storage, and reporting. We publish transparency reports every quarter."
          align="center"
        />
        <Waveform className="mx-auto mt-8 max-w-xs" />
      </Container>
    </section>
    <section className="section-padding bg-neutral-50">
      <Container className="grid gap-8 md:grid-cols-2">
        {safetySections.map((section) => (
          <div key={section.title} className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h3 className="text-2xl font-semibold text-neutral-900">{section.title}</h3>
            <p className="mt-3 text-neutral-600">{section.description}</p>
            <p className="mt-2 text-sm text-neutral-500">{section.detail}</p>
          </div>
        ))}
      </Container>
    </section>
    <section className="section-padding">
      <Container className="rounded-3xl border border-primary-500/30 bg-gradient-to-br from-primary-600/20 via-fuchsia-500/20 to-cyan-500/20 p-8 text-center">
        <p className="text-sm uppercase tracking-wide text-white/60">Need a human?</p>
        <h3 className="mt-2 text-3xl font-semibold text-white">privacy@Leylapp.app</h3>
        <p className="mt-4 text-white/80">
          Our privacy engineers answer within 24 hours for urgent requests. You can also submit the encrypted in-app form.
        </p>
        <CTAButton href="mailto:privacy@Leylapp.app" className="mt-6 rounded-3xl">
          Contact privacy team
        </CTAButton>
      </Container>
    </section>
  </>
);

export default Safety;


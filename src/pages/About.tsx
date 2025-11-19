import Container from '../components/Container';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const values = [
  { title: 'Warmth > Wow', detail: 'We measure success in how supported people feel, not just usage minutes.' },
  { title: 'Privacy day one', detail: 'Every feature ships with privacy copy, controls, and deletion built in.' },
  { title: 'Accessible by default', detail: 'Captioned voice, screen reader-friendly UI, and mindful color contrast.' },
];

const roadmap = [
  'Group mode for collective check-ins',
  'Guided journaling with voice summaries',
  'Multi-language voices (Spanish + Japanese beta)',
];

const About = () => (
  <>
    <SEO
      title="About Leylapp - Mission & Team"
      description="Technology that listens - helping people feel less alone. Learn why we built Leylapp and what comes next."
      path="/about"
    />
    <PageHero
      eyebrow="About Leylapp"
      title="Technology that listens — helping people feel less alone."
      description="We started Leylapp after realizing most nights end with a glowing screen and no one to talk to. Leylapp is the bridge."
      image="/girlfriend.jpg"
      ctaLabel="Download Leylapp"
      ctaHref="/download"
    />
    <section className="section-padding bg-neutral-50">
      <Container className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8">
          <h3 className="text-2xl font-semibold text-neutral-900">Mission</h3>
          <p className="mt-4 text-neutral-600">
            Leylapp exists for late-night talks, anxious commutes, and small wins worth telling someone. We combine
            expressive voice with memory you command so every interaction feels grounding, not transactional.
          </p>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-8">
          <h3 className="text-2xl font-semibold text-neutral-900">Why Leylapp?</h3>
          <p className="mt-4 text-neutral-600">
            Our founders came from conversational AI, music, and crisis hotlines. We saw AI friends either get weird or
            ignore safety. Leylapp balances empathy, privacy, and personal growth with ruthless transparency.
          </p>
        </div>
      </Container>
    </section>
    <section className="section-padding">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8">
          <h3 className="text-xl font-semibold text-neutral-900">Values</h3>
          <ul className="mt-4 space-y-4">
            {values.map((value) => (
              <li key={value.title}>
                <p className="font-semibold text-neutral-900">{value.title}</p>
                <p className="text-sm text-neutral-600">{value.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-8">
          <h3 className="text-xl font-semibold text-neutral-900">Roadmap</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            {roadmap.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  </>
);

export default About;


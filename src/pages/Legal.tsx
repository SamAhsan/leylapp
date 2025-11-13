import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

type LegalType = 'terms' | 'privacy' | 'cookies';

const legalContent: Record<
  LegalType,
  {
    title: string;
    description: string;
    sections: { id: string; title: string; body: string }[];
  }
> = {
  terms: {
    title: 'Terms of Service',
    description: 'Simple, human terms that outline using Leylapp respectfully.',
    sections: [
      { id: 'usage', title: '1. Using Leylapp', body: 'Leylapp is for personal use, 18+, and cannot be used for harassment or misinformation.' },
      { id: 'subscription', title: '2. Billing', body: 'Paid plans renew automatically unless canceled. We offer a 7-day refund on annual upgrades.' },
      { id: 'content', title: '3. Your content', body: 'You own your data. By using Leylapp, you grant us permission to process conversations to deliver the service.' },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'What we collect, why, and how you can control or delete it.',
    sections: [
      { id: 'data', title: '1. Data we collect', body: 'Only the info you give us â€” conversations, preferences, optional memory pins, and diagnostics.' },
      { id: 'control', title: '2. Control', body: 'View, export, or delete data anytime in-app or by emailing privacy@Leylapp.app.' },
      { id: 'storage', title: '3. Storage', body: 'We use encrypted storage with region-based redundancy. Deleted data is purged within 24 hours.' },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    description: 'Cookies keep Leylapp snappy on web. Here is what we use and how to opt out.',
    sections: [
      { id: 'essential', title: '1. Essential cookies', body: 'Keep you logged in and remember language settings.' },
      { id: 'analytics', title: '2. Analytics', body: 'Anonymous usage metrics help us improve flows. You can disable analytics in Settings.' },
      { id: 'choices', title: '3. Your choices', body: 'Browser controls or in-app toggles let you opt out at any time.' },
    ],
  },
};

type LegalPageProps = {
  type: LegalType;
};

const LegalPage = ({ type }: LegalPageProps) => {
  const content = legalContent[type];

  return (
    <>
      <SEO
        title={`${content.title} â€” Leylapp`}
        description={content.description}
        path={`/${type === 'terms' ? 'terms' : type === 'privacy' ? 'privacy' : 'cookies'}`}
      />
      <section className="section-padding">
        <Container>
          <SectionHeader eyebrow="Legal" title={content.title} subtitle={content.description} align="center" />
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
            {content.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="rounded-full border border-neutral-200 px-4 py-2 bg-white">
                {section.title}
              </a>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-24">
        <Container className="space-y-10">
          {content.sections.map((section) => (
            <article key={section.id} id={section.id} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-neutral-900">{section.title}</h3>
              <p className="mt-3 text-neutral-600">{section.body}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
};

export default LegalPage;


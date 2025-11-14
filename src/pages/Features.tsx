import clsx from 'clsx';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';
import SEO from '../components/SEO';
import useScrollSpy from '../hooks/useScrollSpy';
import { featureSections } from '../data/features';

const sectionIds = featureSections.map((feature) => feature.id);

const Features = () => {
  const activeId = useScrollSpy(sectionIds, 120);

  return (
    <>
      <SEO
        title="Leylapp Features — Voice, Memory, Safety"
        description="Explore Leylapp's natural voice, long-term memory, custom personalities, rituals, and safety center."
        path="/features"
      />
      <section className="section-padding">
        <Container>
          <SectionHeader
            eyebrow="Features"
            title="More than chat. A companion that grows with you."
            subtitle="Scroll through each pillar below. Stick to a section or jump using the mini-nav."
            align="center"
          />
        </Container>
      </section>
      <section className="pb-24">
        <Container className="grid gap-10 lg:grid-cols-[240px,1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 space-y-1 rounded-3xl border border-neutral-200 bg-white p-4 shadow-card">
              {featureSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={clsx(
                    'block rounded-2xl px-4 py-3 text-sm font-semibold text-neutral-600 transition',
                    activeId === section.id ? 'bg-primary-50 text-primary-700' : 'hover:bg-neutral-100',
                  )}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
          <div className="space-y-16">
            {featureSections.map((section) => {
              const isDark = section.tone === 'dark';
              return (
                <article
                  key={section.id}
                  id={section.id}
                  className={clsx(
                    'rounded-3xl border p-8 shadow-card md:p-12',
                    isDark ? 'border-neutral-900/10 bg-neutral-900 text-white' : 'border-neutral-200 bg-white',
                  )}
                >
                  <p className={clsx('text-sm uppercase tracking-wide', isDark ? 'text-white/70' : 'text-neutral-500')}>
                    {section.eyebrow}
                  </p>
                  <h3 className={clsx('mt-2 text-3xl font-bold', isDark ? 'text-white' : 'text-neutral-900')}>
                    {section.title}
                  </h3>
                  <p className={clsx('mt-4', isDark ? 'text-white/80' : 'text-neutral-600')}>{section.description}</p>
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className={clsx('flex items-start gap-3 text-sm', isDark ? 'text-white/80' : 'text-neutral-600')}>
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={clsx(
                      'mt-8 rounded-3xl border border-dashed p-6 text-sm',
                      isDark ? 'border-white/20 text-white/80' : 'border-neutral-200 text-neutral-600',
                    )}
                  >
                    <p className={clsx('font-semibold uppercase tracking-wide', isDark ? 'text-white/70' : 'text-neutral-500')}>
                      {section.media.label}
                    </p>
                    <p>{section.media.description}</p>
                  </div>
                </article>
              );
            })}
            <div className="rounded-[2.5rem] border border-primary-400/40 bg-gradient-to-br from-primary-600/20 via-fuchsia-500/20 to-cyan-400/20 p-12 text-center">
              <h3 className="text-3xl font-semibold text-white">Ready to try these features?</h3>
              <p className="mt-3 text-white/80">Download Leylapp free or talk with support for upgrade options.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <CTAButton href="/download" className="rounded-3xl">
                  Download the app
                </CTAButton>
                <CTAButton href="/support" variant="secondary">
                  Talk to support
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Features;


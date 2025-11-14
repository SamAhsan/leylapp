import CTAButton from './CTAButton';
import Container from './Container';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const PageHero = ({ eyebrow, title, description, image, ctaLabel, ctaHref }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-neutral-50 py-14 md:py-20">
    <Container className="grid items-center gap-10 lg:grid-cols-2">
      <div className="space-y-5">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{eyebrow}</p>}
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">{title}</h1>
        <p className="text-lg text-neutral-600">{description}</p>
        {ctaLabel && ctaHref && (
          <CTAButton href={ctaHref} className="rounded-3xl px-6 py-3 text-base">
            {ctaLabel}
          </CTAButton>
        )}
      </div>
      <div className="relative">
        <div className="absolute -inset-6 rounded-[2.5rem] bg-primary-400/20 blur-3xl" aria-hidden />
        <img
          src={image}
          alt={title}
          className="relative z-10 w-full max-h-[420px] rounded-[2rem] border border-white/60 object-cover shadow-2xl"
          loading="lazy"
        />
      </div>
    </Container>
  </section>
);

export default PageHero;

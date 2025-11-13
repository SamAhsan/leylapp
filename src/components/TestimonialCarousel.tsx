import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import type { Testimonial } from '../data/testimonials';

type TestimonialCarouselProps = {
  items: Testimonial[];
};

const TestimonialCarousel = ({ items }: TestimonialCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, items.length]);

  const testimonial = items[index];

  return (
    <div
      className="glass-panel relative overflow-hidden p-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div
          className="h-16 w-16 flex-shrink-0 rounded-2xl text-xl font-semibold text-neutral-900"
          style={{ backgroundColor: testimonial.color, display: 'grid', placeItems: 'center' }}
          aria-hidden
        >
          {testimonial.avatar}
        </div>
        <div className="space-y-4">
          <p className="text-lg text-neutral-900">{testimonial.quote}</p>
          <div>
            <p className="font-semibold text-neutral-900">{testimonial.name}</p>
            <p className="text-sm text-neutral-500">
              {testimonial.title} · {testimonial.handle}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <span key={i} aria-hidden className="text-primary-500">
              ★
            </span>
          ))}
          <span className="ml-2 text-sm text-neutral-500">4.9 / 5 average</span>
        </div>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={clsx(
                'h-2 rounded-full transition-all',
                i === index ? 'w-8 bg-primary-500' : 'w-2 bg-neutral-300',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

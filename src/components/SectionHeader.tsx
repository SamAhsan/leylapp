import type { ReactNode } from 'react';
import clsx from 'clsx';
import Badge from './Badge';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

const SectionHeader = ({ eyebrow, title, subtitle, align = 'left', className }: SectionHeaderProps) => (
  <div className={clsx('space-y-4', align === 'center' && 'text-center', className)}>
    {eyebrow && <Badge className={clsx('text-xs', align === 'center' && 'mx-auto block')} variant="neutral">{eyebrow}</Badge>}
    <h2 className={clsx('text-3xl sm:text-4xl font-bold leading-tight', align === 'center' && 'mx-auto max-w-2xl')}>
      <span className="text-gradient">{title}</span>
    </h2>
    {subtitle && (
      <p className={clsx('text-base text-neutral-600', align === 'center' && 'mx-auto max-w-2xl')}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;

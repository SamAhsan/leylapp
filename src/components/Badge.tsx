import type { ReactNode } from 'react';
import clsx from 'clsx';

type BadgeProps = {
  children: ReactNode;
  variant?: 'primary' | 'neutral';
  className?: string;
};

const variants = {
  primary: 'bg-primary-50 text-primary-700 ring-1 ring-primary-200',
  neutral: 'bg-neutral-100 text-neutral-600 ring-1 ring-neutral-200',
};

const Badge = ({ children, variant = 'primary', className }: BadgeProps) => (
  <span className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide', variants[variant], className)}>
    {children}
  </span>
);

export default Badge;

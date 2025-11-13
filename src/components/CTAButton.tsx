import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

type CTAButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  className?: string;
  icon?: ReactNode;
  loading?: boolean;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantMap = {
  primary:
    'bg-primary-600 text-white shadow-glow hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-primary-200',
  secondary:
    'border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-primary-200',
  ghost:
    'text-neutral-700 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-primary-200',
};

const CTAButton = ({
  children,
  variant = 'primary',
  href,
  className,
  icon,
  loading,
  target,
  rel,
  onClick,
  ...rest
}: CTAButtonProps) => {
  const sharedClasses = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    variantMap[variant],
    loading && 'opacity-60',
    className,
  );

  const content = (
    <>
      {icon && <span className="text-lg">{icon}</span>}
      <span>{loading ? 'Please wait...' : children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={sharedClasses}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noreferrer' : undefined)}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={sharedClasses} disabled={loading} onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined} {...rest}>
      {content}
    </button>
  );
};

export default CTAButton;

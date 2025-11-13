import type { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: string;
  dark?: boolean;
  className?: string;
};

const FeatureCard = ({ title, description, icon: Icon, accent, dark, className }: FeatureCardProps) => (
  <div
    className={clsx(
      'glass-panel h-full p-6 transition-transform duration-300 hover:-translate-y-1',
      dark && 'bg-neutral-900 text-white',
      className,
    )}
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="rounded-2xl bg-primary-50 p-3 text-primary-700">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      {accent && <span className="text-xs uppercase tracking-wide text-neutral-500">{accent}</span>}
    </div>
    <h3 className={clsx('mb-2 text-xl font-semibold', dark ? 'text-white' : 'text-neutral-900')}>{title}</h3>
    <p className={clsx('text-sm', dark ? 'text-white/70' : 'text-neutral-600')}>{description}</p>
  </div>
);

export default FeatureCard;

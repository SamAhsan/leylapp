import { Apple, Play } from 'lucide-react';
import QRCode from 'react-qr-code';
import clsx from 'clsx';
import CTAButton from './CTAButton';

type AppStoreButtonsProps = {
  className?: string;
  compact?: boolean;
};

const stores = [
  {
    label: 'Download on the',
    title: 'App Store',
    href: 'https://apps.apple.com',
    icon: Apple,
  },
  {
    label: 'Get it on',
    title: 'Google Play',
    href: 'https://play.google.com',
    icon: Play,
  },
];

const AppStoreButtons = ({ className, compact }: AppStoreButtonsProps) => (
  <div className={clsx('flex flex-col gap-4 sm:flex-row sm:items-center', className)}>
    <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:gap-4">
      {stores.map((store) => (
        <CTAButton
          key={store.title}
          href={store.href}
          target="_blank"
          variant="secondary"
          className="w-full sm:w-auto rounded-2xl px-6 py-4 text-left font-semibold uppercase tracking-wide"
        >
          <div className="flex items-center gap-3">
            <store.icon className="h-6 w-6 text-primary-600" aria-hidden />
            <div>
              <span className="block text-xs text-neutral-500">{store.label}</span>
              <span className="text-lg text-neutral-900">{store.title}</span>
            </div>
          </div>
        </CTAButton>
      ))}
    </div>
    {!compact && (
      <div className="glass-panel px-4 py-4 text-center">
        <p className="mb-3 text-xs uppercase tracking-wide text-neutral-500">Scan to download</p>
        <div className="mx-auto max-w-[110px] rounded-2xl bg-neutral-50 p-3">
          <QRCode
            value="https://leylapp.app/download"
            size={90}
            bgColor="transparent"
            fgColor="#14121a"
            aria-label="Leylapp download QR code"
          />
        </div>
        <p className="mt-3 text-xs text-neutral-500">Opens iOS & Android links.</p>
      </div>
    )}
  </div>
);

export default AppStoreButtons;



import { useId } from 'react';

type WaveformProps = {
  className?: string;
};

const Waveform = ({ className }: WaveformProps) => {
  const bars = Array.from({ length: 12 }, (_, i) => i);
  const gradientId = useId();

  return (
    <div className={className}>
      <svg viewBox="0 0 120 40" role="img" aria-label="Animated voice waveform">
        {bars.map((bar) => (
          <rect
            key={bar}
            x={bar * 10}
            y={10}
            width={6}
            height={20}
            rx={3}
            fill={`url(#${gradientId})`}
          >
            <animate attributeName="height" values="12;28;12" dur={`${1 + bar * 0.05}s`} repeatCount="indefinite" />
            <animate attributeName="y" values="14;6;14" dur={`${1 + bar * 0.05}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#E3007B" />
            <stop offset="50%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Waveform;

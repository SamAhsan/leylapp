import phoneUi from '../assets/phone-ui.svg';
import Waveform from './Waveform';

type PhoneMockupProps = {
  className?: string;
};

const PhoneMockup = ({ className }: PhoneMockupProps) => (
  <div className={`relative ${className ?? ''}`}>
    <div className="absolute -inset-8 rounded-[3rem] bg-primary-600/30 blur-3xl" aria-hidden />
    <div className="relative mx-auto w-[250px] rounded-[2.5rem] border border-white/20 bg-neutral-900/80 p-4 shadow-2xl">
      <div className="mx-auto h-[460px] w-full overflow-hidden rounded-[2rem] bg-neutral-900">
        <img src={phoneUi} alt="Leylapp chat mockup" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="mt-4 rounded-2xl bg-white/10 px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-white/60">Live voice</p>
        <Waveform className="mt-2" />
      </div>
    </div>
  </div>
);

export default PhoneMockup;


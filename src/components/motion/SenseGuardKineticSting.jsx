import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const FRAMES = [
  { label: 'IOT', value: '200+', accent: 'text-cmyk-magenta' },
  { label: 'SITES', value: '50+', accent: 'text-cmyk-cyan' },
  { label: 'UPTIME', value: '99.9%', accent: 'text-highlighter-green' },
  { label: 'EVENTS', value: '1K+', accent: 'text-black' },
];

const CYCLE_MS = 1800;

export default function SenseGuardKineticSting() {
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const id = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % FRAMES.length);
    }, CYCLE_MS);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const frame = FRAMES[frameIndex];

  if (reduceMotion) {
    return (
      <div
        className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center border-2 border-black bg-white font-['Manrope'] text-lg font-black tracking-tight"
        aria-hidden="true"
      >
        SG
      </div>
    );
  }

  if (!videoFailed) {
    return (
      <div className="h-14 w-14 md:h-16 md:w-16 shrink-0 border-2 border-black bg-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover img-print-look"
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        >
          <source src="/media/senseguard-loop.webm" type="video/webm" />
          <source src="/media/senseguard-loop.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-14 w-14 md:h-16 md:w-16 shrink-0 flex-col items-center justify-center overflow-hidden border-2 border-black bg-paper"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={frame.label}
          initial={{ opacity: 0, y: 8, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' }}
          exit={{ opacity: 0, y: -6, clipPath: 'inset(100% 0 0 0)' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center px-1 text-center"
        >
          <span
            className={`font-['Manrope'] text-base md:text-lg font-black leading-none ${frame.accent}`}
          >
            {frame.value}
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[8px] md:text-[9px] font-bold tracking-[0.14em] text-black/70 mt-0.5">
            {frame.label}
          </span>
        </motion.div>
      </AnimatePresence>
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-cmyk-magenta"
        animate={{ width: ['0%', '100%'] }}
        transition={{
          duration: CYCLE_MS / 1000,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
    </div>
  );
}

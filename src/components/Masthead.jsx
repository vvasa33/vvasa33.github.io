import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';
import { personaVariants } from '../constants/animations';

const SPECIALIZATIONS = [
  'Security Engineer',
  'Developer',
  'UMD',
  'Cybersecurity & Networking',
];

export default function Masthead() {
  return (
    <motion.div
      variants={personaVariants.item}
      className="mb-0"
    >
      {/* Big newspaper title */}
      <div className="border-b-4 border-black pb-4 mb-0">
        <Link to="/" className="block text-center cursor-pointer">
          <motion.h1
            className="font-['Pixelify_Sans'] font-normal text-[clamp(3rem,10vw,8rem)] leading-none text-black tracking-tight select-none hover:text-cmyk-magenta transition-colors"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {portfolioData.hero.newspaperTitle.toUpperCase()}
          </motion.h1>
        </Link>
      </div>

      {/* Subtitle specializations bar */}
      <div className="border-b-2 border-black py-2 flex items-center justify-center gap-0">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {SPECIALIZATIONS.map((spec, i) => (
            <span key={spec} className="flex items-center gap-4">
              <span className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black">
                {spec}
              </span>
              {i < SPECIALIZATIONS.length - 1 && (
                <span className="text-black/40 text-xs select-none">✦</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

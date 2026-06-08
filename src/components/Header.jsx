import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';

export default function Header() {
  const { name } = portfolioData.personal;

  return (
    <motion.div
      variants={personaVariants.item}
      className="flex flex-wrap justify-between items-center mb-3 pb-3 border-b border-black gap-y-1 gap-x-4 opacity-60 hover:opacity-100 transition-opacity"
    >
      <p className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold tracking-widest uppercase">
        VOL. 2 - NO. 3
      </p>

      <Link
        to="/"
        className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold tracking-widest uppercase hover:text-cmyk-magenta transition-colors cursor-pointer"
      >
        {name.toUpperCase()}
      </Link>

      <p className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold tracking-widest uppercase">
        EST. 2026
      </p>
    </motion.div>
  );
}

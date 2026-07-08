import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';
import { getNewspaperDate } from '../utils/newspaperDate';

export default function CompactNameplate() {
  const { newspaperTitle } = portfolioData.hero;
  const subtitle = getNewspaperDate();

  return (
    <motion.div variants={personaVariants.item} className="border-b-2 border-black pb-3 mb-0">
      <Link to="/" className="block text-center cursor-pointer group">
        <motion.h1
          className="font-['Playfair_Display_SC'] font-normal text-[clamp(1.5rem,4vw,2.25rem)] leading-none text-black tracking-tight select-none group-hover:text-cmyk-magenta transition-colors"
          whileHover={{ scale: 1.005 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {newspaperTitle.toUpperCase()}
        </motion.h1>
      </Link>
      <p className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold tracking-[0.12em] text-black text-center mt-2">
        {subtitle}
      </p>
    </motion.div>
  );
}

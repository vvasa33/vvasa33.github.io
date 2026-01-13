import { motion } from 'framer-motion';
import { getFormattedDate } from '../constants';
import SocialLinks from './SocialLinks';
import portfolioData from '../data/portfolio.json';
import { personaVariants } from '../constants/animations';

export default function Masthead() {
  const formattedDate = getFormattedDate();

  return (
    <motion.div 
      variants={personaVariants.item}
      className="text-center mb-10 md:mb-16"
    >
      <motion.h1 
        className="font-['Pixelify_Sans'] font-normal text-3xl md:text-4xl lg:text-5xl text-black mb-5 tracking-wide inline-block cursor-default"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {portfolioData.hero.newspaperTitle}
      </motion.h1>
      
      <div className="relative flex items-center justify-center gap-4">
        <p className="font-['IBM_Plex_Mono'] text-sm md:text-base lg:text-lg text-black bg-black text-white px-2 py-1">
          {formattedDate}
        </p>
        
        <SocialLinks />
      </div>
    </motion.div>
  );
}

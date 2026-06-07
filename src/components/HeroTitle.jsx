import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import KeyMetrics from './KeyMetrics';
import portfolioData from '../data/portfolio.json';

export default function HeroTitle({ name = portfolioData.personal.name, subtitle = portfolioData.personal.role, motto = portfolioData.personal.motto }) {
  return (
    <div className="mb-12 md:mb-16">
      {/* Mobile: Stack vertically */}
      <div className="block lg:hidden">
        <div className="text-center mb-6">
          <motion.h2 variants={personaVariants.item} className="mb-3 break-words font-['IBM_Plex_Mono'] text-3xl font-bold leading-tight text-black md:text-5xl">
            {name}
          </motion.h2>
          <motion.p variants={personaVariants.item} className="font-['IBM_Plex_Mono'] text-lg md:text-xl text-black mb-3 uppercase tracking-wider border-y border-black py-2">
            {subtitle}
          </motion.p>
          <motion.p variants={personaVariants.item} className="font-['IBM_Plex_Mono'] text-sm text-gray-700 italic px-4">
            {motto}
          </motion.p>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          <KeyMetrics side="left" />
          <KeyMetrics side="right" />
        </div>
      </div>

      {/* Desktop: Newspaper Masthead Layout */}
      <motion.div 
        variants={personaVariants.angularReveal}
        className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:items-center border-y border-black py-6 bg-white relative z-10"
      >
        {/* Left: Role/Sub-headline */}
        <div className="text-left border-r border-black pl-12 pr-8">
          <motion.p variants={personaVariants.item} className="font-['IBM_Plex_Mono'] text-2xl xl:text-3xl font-bold uppercase tracking-tighter leading-none mb-2 text-cmyk-magenta">
            {subtitle}
          </motion.p>
          <div className="h-0.5 bg-black w-1/4"></div>
        </div>

        {/* Center: Main Name */}
        <div className="text-center px-12 group cursor-default">
          <motion.h2 
            variants={personaVariants.item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="font-['IBM_Plex_Mono'] text-7xl font-black uppercase leading-none tracking-tighter text-black transition-all duration-300 xl:text-[90px]"
          >
            <span className="block break-words transition-transform duration-300 ease-snappy group-hover:-translate-y-2 group-hover:text-black group-hover:fill-black">
              {name}
            </span>
          </motion.h2>
        </div>

        {/* Right: Motto / Editorial Note */}
        <div className="text-left border-l border-black pl-8 max-w-[300px]">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-black uppercase tracking-[0.3em] bg-black text-white px-2 py-0.5 mb-3 inline-block">
            Motto
          </span>
          <motion.p variants={personaVariants.item} className="font-['IBM_Plex_Mono'] text-sm xl:text-base text-black leading-snug font-medium">
            {motto}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

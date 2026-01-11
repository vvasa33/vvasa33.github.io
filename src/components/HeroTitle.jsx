import { motion } from 'framer-motion';
import { itemVariants } from '../constants/animations';
import KeyMetrics from './KeyMetrics';
import portfolioData from '../data/portfolio.json';

export default function HeroTitle({ name = portfolioData.personal.name, subtitle = portfolioData.personal.role, motto = portfolioData.personal.motto }) {
  return (
    <div className="mb-12 md:mb-16">
      {/* Mobile: Stack vertically */}
      <div className="block lg:hidden">
        <div className="text-center mb-6">
          <motion.h2 variants={itemVariants} className="font-['IBM_Plex_Mono'] font-bold text-3xl md:text-5xl text-black mb-3 leading-tight">
            {name}
          </motion.h2>
          <motion.p variants={itemVariants} className="font-['IBM_Plex_Mono'] text-lg md:text-xl text-black mb-3 uppercase tracking-wider border-y border-black py-2">
            {subtitle}
          </motion.p>
          <motion.p variants={itemVariants} className="font-['IBM_Plex_Mono'] text-sm text-gray-700 italic px-4">
            {motto}
          </motion.p>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          <KeyMetrics side="left" />
          <KeyMetrics side="right" />
        </div>
      </div>

      {/* Desktop: Newspaper Masthead Layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:items-center border-y border-black py-6">
        {/* Left: Role/Sub-headline */}
        <div className="text-left border-r border-black pr-8">
          <motion.p variants={itemVariants} className="font-['IBM_Plex_Mono'] text-2xl xl:text-3xl font-bold uppercase tracking-tighter leading-none mb-2">
            {subtitle}
          </motion.p>
          <div className="h-0.5 bg-black w-1/4"></div>
        </div>

        {/* Center: Main Name */}
        <div className="text-center px-12">
          <motion.h2 variants={itemVariants} className="font-['IBM_Plex_Mono'] font-black text-7xl xl:text-[90px] text-black leading-none tracking-tighter uppercase">
            {name}
          </motion.h2>
        </div>

        {/* Right: Motto / Editorial Note */}
        <div className="text-left border-l border-black pl-8 max-w-[300px]">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-black uppercase tracking-[0.3em] bg-black text-white px-2 py-0.5 mb-3 inline-block">
            Motto
          </span>
          <motion.p variants={itemVariants} className="font-['IBM_Plex_Mono'] text-sm xl:text-base text-black leading-snug font-medium">
            {motto}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

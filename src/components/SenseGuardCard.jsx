import { motion } from 'framer-motion';
import { Radio, Briefcase } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import { getIcon } from '../utils/iconMap';
import portfolioData from '../data/portfolio.json';

export default function SenseGuardCard() {
  const { title, role, roleLabel, description, period, status, stats, techStack } = portfolioData.featured;
  
  const statsWithIcons = stats.map(stat => ({
    ...stat,
    icon: getIcon(stat.icon)
  }));

  return (
    <motion.div 
      variants={personaVariants.item}
      whileHover={{ y: -5 }}
      className="border-2 md:border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
    >
      {/* Header */}
      <div className="bg-black text-white p-4 md:p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Radio className="w-20 h-20 md:w-[120px] md:h-[120px]" strokeWidth={1} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
            <Briefcase className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            <span className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs uppercase tracking-widest text-white/60">
              {roleLabel}
            </span>
          </div>
          <h3 className="font-['Manrope'] text-2xl md:text-4xl uppercase leading-none mb-2">
            {title}
          </h3>
          <p className="font-['IBM_Plex_Mono'] text-xs md:text-base text-white/80">
            {role}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="p-4 md:p-6 border-b-2 border-black bg-gray-50">
        <p className="font-['IBM_Plex_Mono'] text-xs md:text-base leading-relaxed text-gray-800">
          {description.split('LoRaWAN technology').map((part, i, arr) => 
            i < arr.length - 1 ? (
              <span key={i}>{part}<span className="font-bold text-black bg-yellow-200 px-1 inline-block">LoRaWAN technology</span></span>
            ) : part
          )}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 border-b-2 border-black">
        {statsWithIcons.map((stat, index) => (
          <div 
            key={index}
            className={`p-3 md:p-6 text-center ${index !== statsWithIcons.length - 1 ? 'border-r-2 border-black' : ''} bg-white hover:bg-black hover:text-white transition-colors duration-200 group/stat`}
          >
            <stat.icon className={`w-5 h-5 md:w-8 md:h-8 mx-auto mb-1 md:mb-2 ${stat.color} group-hover/stat:text-white`} strokeWidth={2} />
            <div className="font-['Manrope'] text-lg md:text-2xl font-bold mb-0.5 md:mb-1">
              {stat.value}
            </div>
            <div className="font-['IBM_Plex_Mono'] text-[9px] md:text-xs uppercase tracking-wider text-gray-600 leading-tight group-hover/stat:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="p-4 md:p-6 bg-cmyk-yellow">
        <h4 className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3 text-black/60">
          Technology Stack
        </h4>
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-3 md:p-4 bg-black text-white flex items-center justify-between flex-wrap gap-2">
        <span className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs uppercase tracking-widest">
          {period}
        </span>
        <div className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold uppercase">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          {status}
        </div>
      </div>
    </motion.div>
  );
}

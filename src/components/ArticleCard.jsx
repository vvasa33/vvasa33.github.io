import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personaVariants } from '../constants/animations';
import { ArrowUpRight } from 'lucide-react';

export default function ArticleCard({ 
  href = "#", 
  tag, 
  title, 
  excerpt,
  color = "bg-black" 
}) {
  const textColor = color.includes('green') || color.includes('yellow') || color.includes('cyan') ? 'text-black' : 'text-white';

  const MotionLink = motion(Link);

  const cardVariants = {
    hidden: personaVariants.item.hidden,
    visible: personaVariants.item.visible,
    hover: personaVariants.hover,
    tap: personaVariants.tap
  };

  return (
    <MotionLink 
      to={href} 
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      className="group block border-2 border-black bg-white relative z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-shadow duration-200 h-full flex flex-col"
    >
      <div className="p-6 md:p-8 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className={`font-['IBM_Plex_Mono'] text-xs font-bold ${color} ${textColor} px-3 py-1 inline-block uppercase tracking-wider border border-black transition-transform duration-300 ease-snappy`}>
            {tag}
          </span>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
        
        <h3 className="font-['IBM_Plex_Mono'] font-bold text-xl md:text-2xl mb-4 leading-tight group-hover:text-cmyk-magenta transition-colors duration-300">
          {title}
        </h3>
        
        <p className="font-['IBM_Plex_Mono'] text-sm md:text-base opacity-80 leading-relaxed line-clamp-6">
          {excerpt}
        </p>
      </div>

      {/* Decorative Footer Area */}
      <div className="px-6 md:px-8 py-4 border-t-2 border-black bg-gray-50 mt-auto overflow-hidden">
        <div className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300 ease-snappy group-hover:text-cmyk-cyan">
          Read Article <span className="text-lg leading-none pb-1 inline-block group-hover:animate-wiggle">→</span>
        </div>
      </div>
    </MotionLink>
  );
}

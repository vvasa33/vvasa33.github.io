import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import { Quote, Calendar, User } from 'lucide-react';

export default function NewspaperBlurb({ 
  title, 
  children, 
  className = "", 
  icon: Icon,
  image,
  imageCaption,
  pullQuote,
  date = "January 2, 2026",
  author = "Viswanath Vasa",
  tag = "FEATURED",
  sidebar = []
}) {
  return (
    <motion.div 
      variants={personaVariants.item} 
      className={`border-y-2 border-black py-12 md:py-16 my-8 md:my-16 relative overflow-hidden group ${className}`}
    >
      {/* Header Section */}
      <div className="mb-6 md:mb-8 pb-4 md:pb-6">
        <div className="flex items-start justify-between gap-4 md:gap-6 flex-wrap">
          <div className="flex-1">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              {Icon && <Icon className="w-6 h-6 md:w-8 md:h-8 text-black transition-transform duration-300 ease-snappy" strokeWidth={2.5} />}
              <div className="h-0.5 md:h-1 bg-black flex-grow origin-left transition-transform duration-500 ease-snappy group-hover:scale-x-95"></div>
            </div>
            
            <h3 className="mb-3 break-words font-['Manrope'] text-2xl uppercase leading-none transition-transform duration-300 ease-snappy md:mb-4 md:text-5xl">
              {title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-2 md:gap-4 font-['IBM_Plex_Mono'] text-[10px] md:text-xs uppercase tracking-widest">
              <div className="flex items-center gap-1.5 md:gap-2 bg-black text-white px-2 md:px-3 py-1 group-hover:bg-cmyk-magenta transition-colors duration-300">
                <User className="w-3 h-3 md:w-4 md:h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-600">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                <span>{date}</span>
              </div>
              <span className="px-2 py-1 border border-black bg-cmyk-cyan text-black font-bold text-[9px] md:text-xs group-hover:bg-black group-hover:text-cmyk-cyan transition-colors duration-300">{tag}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Content Column */}
        <div className="w-full font-['IBM_Plex_Mono'] text-sm md:text-lg leading-relaxed md:leading-loose text-gray-800 [&>p]:mb-4 md:[&>p]:mb-6 [&>p:first-child]:first-letter:text-4xl md:[&>p:first-child]:first-letter:text-6xl [&>p:first-child]:first-letter:font-bold [&>p:first-child]:first-letter:mr-2 md:[&>p:first-child]:first-letter:mr-3 [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:leading-none [&>p:first-child]:first-letter:mt-1">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';

export default function Header() {
  return (
    <motion.div 
      variants={personaVariants.item}
      className="flex flex-wrap justify-between items-center mb-6 border-b-2 border-black pb-4 gap-3 opacity-60 hover:opacity-100 transition-opacity"
    >
      <div className="flex gap-4 md:gap-8">
        <p className="text-xs md:text-sm font-bold tracking-widest uppercase font-['IBM_Plex_Mono']">Vol. 1</p>
        <p className="text-xs md:text-sm font-bold tracking-widest uppercase font-['IBM_Plex_Mono']">No. 1</p>
      </div>
      
      {/* CMYK Registration Marks */}
      <div className="hidden md:flex gap-1">
        {['bg-cmyk-cyan', 'bg-cmyk-magenta', 'bg-cmyk-yellow', 'bg-black'].map((color, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.5 }}
            className={`w-3 h-3 rounded-full ${color} mix-blend-multiply border border-black/10`} 
          />
        ))}
      </div>

      <p className="text-xs md:text-sm font-bold tracking-tighter uppercase">
        Mount Airy, MD
      </p>
      <p className="text-xs md:text-sm font-bold tracking-tighter uppercase hidden sm:block">
        Price: Free
      </p>
    </motion.div>
  );
}

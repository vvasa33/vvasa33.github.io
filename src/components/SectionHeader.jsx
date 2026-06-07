import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';

export default function SectionHeader({ title, color = "bg-cmyk-cyan" }) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div 
        variants={personaVariants.item} 
        className="flex items-center gap-3 mb-6 group"
      >
        <div className={`w-4 h-4 md:w-6 md:h-6 ${color} border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:animate-wiggle transition-transform`} />
        <p className="font-['IBM_Plex_Mono'] font-bold text-xl md:text-2xl lg:text-3xl text-black uppercase leading-none transition-transform duration-200 ease-snappy">
          {title}
        </p>
      </motion.div>
      <motion.div 
        variants={personaVariants.angularReveal} 
        className="w-full h-[6px] border-y-2 border-black relative overflow-hidden bg-white"
      >
        {/* CSS Texture Pattern instead of image */}
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
               backgroundSize: '8px 8px'
             }} 
        />
        {/* Flash animation overlay */}
        <div className="absolute inset-0 bg-cmyk-magenta mix-blend-multiply opacity-0 animate-flash" style={{ animationDelay: '0.5s' }} />
      </motion.div>
    </div>
  );
}

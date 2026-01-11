import { motion } from 'framer-motion';
import { itemVariants, lineVariants } from '../constants/animations';

export default function SectionHeader({ title, color = "bg-cmyk-cyan" }) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
        <div className={`w-4 h-4 md:w-6 md:h-6 ${color} border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`} />
        <p className="font-['IBM_Plex_Mono'] font-bold text-xl md:text-2xl lg:text-3xl text-black uppercase leading-none">
          {title}
        </p>
      </motion.div>
      <motion.div variants={lineVariants} className="w-full h-[6px] border-y-2 border-black origin-left relative overflow-hidden">
        {/* CSS Texture Pattern instead of image */}
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
               backgroundSize: '8px 8px'
             }} 
        />
      </motion.div>
    </div>
  );
}

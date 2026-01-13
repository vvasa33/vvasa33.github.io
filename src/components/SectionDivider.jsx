import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';

export function LineDivider() {
  return (
    <motion.div 
      variants={personaVariants.angularReveal} 
      className="w-full border-t-2 border-black opacity-20 origin-left mb-12" 
    />
  );
}

export function LineDividerBottom() {
  return (
    <motion.div 
      variants={personaVariants.angularReveal} 
      className="w-full border-t-2 border-black opacity-20 origin-left mb-16" 
    />
  );
}

export function DoubleBorderDivider() {
  return (
    <motion.div variants={personaVariants.item} className="flex items-center gap-4 py-12 md:py-16 opacity-50">
      <div className="w-full border-t-2 border-dashed border-black"></div>
    </motion.div>
  );
}

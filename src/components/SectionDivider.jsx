import { motion } from 'framer-motion';
import { itemVariants, lineVariants } from '../constants/animations';

export function LineDivider() {
  return (
    <motion.div variants={lineVariants} className="w-full border-t border-black opacity-20 origin-left mb-12" />
  );
}

export function LineDividerBottom() {
  return (
    <motion.div variants={lineVariants} className="w-full border-t border-black opacity-20 origin-left mb-16" />
  );
}

export function DoubleBorderDivider() {
  return (
    <motion.div variants={itemVariants} className="flex items-center gap-4 py-12 md:py-16 opacity-50">
      <div className="w-full border-t border-dashed border-black"></div>
    </motion.div>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import { printVariants } from '../../constants/animations';

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={printVariants.pageTurn}
    >
      {children}
    </motion.div>
  );
}

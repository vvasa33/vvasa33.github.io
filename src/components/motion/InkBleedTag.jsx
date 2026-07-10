import { motion, useReducedMotion } from 'framer-motion';

export default function InkBleedTag({ children, className = '' }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={`${className} relative inline-block overflow-hidden`}
      initial="rest"
      whileHover="hover"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 bg-cmyk-magenta/20"
        variants={{
          rest: { scaleY: 0 },
          hover: {
            scaleY: 1,
            transition: { duration: 0.2, ease: 'easeOut' },
          },
        }}
        style={{ transformOrigin: 'bottom' }}
      />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import { printVariants, personaVariants } from '../../constants/animations';

export default function ScrollReveal({
  children,
  className = '',
  amount = 0.2,
  once = true,
  variant = 'item',
  as = 'div',
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  const variants =
    variant === 'container'
      ? printVariants.scrollContainer
      : personaVariants.item;

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </Component>
  );
}

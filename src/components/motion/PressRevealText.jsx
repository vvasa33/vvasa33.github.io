import { motion, useReducedMotion } from 'framer-motion';
import { printVariants } from '../../constants/animations';

export default function PressRevealText({
  text,
  className = '',
  mode = 'letter',
  as: Tag = 'span',
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const units =
    mode === 'word'
      ? text.split(/(\s+)/).filter((part) => part.length > 0)
      : text.split('');

  const variants = mode === 'word' ? printVariants.word : printVariants.letter;

  return (
    <Tag className={className} aria-label={text}>
      {units.map((unit, i) => (
        <motion.span
          key={`${unit}-${i}`}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={variants}
          className={
            unit.trim() === '' && mode === 'word'
              ? 'inline'
              : 'inline-block origin-bottom'
          }
          style={
            mode === 'letter' && unit === ' ' ? { width: '0.25em' } : undefined
          }
        >
          {unit}
        </motion.span>
      ))}
    </Tag>
  );
}

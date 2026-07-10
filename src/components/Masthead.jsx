import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';
import { personaVariants } from '../constants/animations';
import PressRevealText from './motion/PressRevealText';
import { getNewspaperDate } from '../utils/newspaperDate';

export default function Masthead() {
  const reduceMotion = useReducedMotion();
  const subtitle = getNewspaperDate();
  const title = portfolioData.hero.newspaperTitle.toUpperCase();

  return (
    <motion.div
      variants={personaVariants.item}
      className="mb-0"
    >
      <div className="border-b-4 border-black pb-4 mb-0">
        <Link to="/" className="block text-center cursor-pointer">
          <motion.h1
            className="font-['Playfair_Display_SC'] font-normal text-[clamp(3rem,10vw,8rem)] leading-none text-black tracking-tight select-none hover:text-cmyk-magenta transition-colors"
            whileHover={reduceMotion ? undefined : { scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <PressRevealText
              text={title}
              mode="letter"
              as="span"
              className="inline-block"
            />
          </motion.h1>
        </Link>
      </div>

      <div className="border-b-2 border-black py-2 flex items-center justify-center">
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 4 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold tracking-[0.12em] text-black"
        >
          {subtitle}
        </motion.span>
      </div>
    </motion.div>
  );
}

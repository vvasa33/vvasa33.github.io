import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';

export default function Header() {
  const { name, role } = portfolioData.personal;

  return (
    <motion.div
      variants={personaVariants.item}
      className="flex justify-center items-center mb-3 pb-3 border-b border-black"
    >
      <Link
        to="/"
        className="font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold tracking-wide hover:text-cmyk-magenta transition-colors cursor-pointer text-center"
      >
        {name}
        <span className="text-black/50 font-normal"> · {role}</span>
      </Link>
    </motion.div>
  );
}

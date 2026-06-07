import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import { Github, Linkedin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

export default function SocialLinks() {
  const { github, linkedin } = portfolioData.personal;
  
  return (
    <motion.div
      variants={personaVariants.item}
      className="flex w-full items-center justify-center gap-3 md:absolute md:right-0 md:top-1/2 md:w-auto md:-translate-y-1/2 md:justify-end"
    >
      <SocialIcon href={github} icon={Github} label="GitHub Profile" />
      <SocialIcon href={linkedin} icon={Linkedin} label="LinkedIn Profile" />
    </motion.div>
  );
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      whileHover={{ y: -5, rotate: 10, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border-2 border-black p-2 hover:bg-black hover:text-white transition-colors duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
      aria-label={label}
    >
      <Icon size={20} strokeWidth={2} />
    </motion.a>
  );
}

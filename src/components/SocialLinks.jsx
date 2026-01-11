import { motion } from 'framer-motion';
import { itemVariants } from '../constants/animations';
import { Github, Linkedin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

export default function SocialLinks() {
  const { github, linkedin } = portfolioData.personal;
  
  return (
    <motion.div variants={itemVariants} className="hidden md:flex items-center gap-4 absolute right-0 top-1/2 -translate-y-1/2">
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 border border-black hover:bg-black hover:text-white transition-all duration-200 rounded-full"
        aria-label="GitHub Profile"
      >
        <Github size={20} strokeWidth={2} />
      </a>
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 border border-black hover:bg-black hover:text-white transition-all duration-200 rounded-full"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={20} strokeWidth={2} />
      </a>
    </motion.div>
  );
}

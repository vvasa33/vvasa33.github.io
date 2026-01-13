import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import { personaVariants } from '../constants/animations';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { tagline } = portfolioData.footer;
  const { name, github, linkedin, email } = portfolioData.personal;
  const { newspaperTitle: heroTitle } = portfolioData.hero;

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={personaVariants.angularReveal}
      className="border-t-2 border-black mt-16 md:mt-20 pt-10 pb-6 bg-paper relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-black opacity-10" />
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          
          {/* Brand Column */}
          <div className="flex-1">
            <h2 className="font-['Manrope'] font-bold text-3xl md:text-4xl mb-4 tracking-tight uppercase group transition-all duration-300">
              {heroTitle}
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-sm max-w-md text-gray-600 mb-6 leading-relaxed">
              Security Engineer & Developer. Building secure, scalable systems.
            </p>
            
            <div className="flex gap-4">
              <SocialLink href={github} icon={Github} label="GitHub" />
              <SocialLink href={linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={`mailto:${email}`} icon={Mail} label="Email" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider text-gray-400">
          <p>© {new Date().getFullYear()} {name}</p>
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 hover:text-black transition-colors group px-4 py-2 border border-transparent hover:border-black hover:bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group flex items-center gap-2 font-['IBM_Plex_Mono'] text-sm font-bold uppercase hover:text-cmyk-magenta transition-colors"
    >
      <div className="p-2 border-2 border-black group-hover:bg-black group-hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5">
        <Icon size={18} />
      </div>
      <span className="hidden md:inline">{label}</span>
    </motion.a>
  );
}

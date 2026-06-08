import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import { personaVariants } from '../constants/animations';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { name, github, linkedin, email } = portfolioData.personal;

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={personaVariants.item}
      className="border-t-2 border-black pt-6 pb-4 bg-paper relative"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-4">
          <SocialLink href={github} icon={Github} label="GitHub" />
          <SocialLink href={linkedin} icon={Linkedin} label="LinkedIn" />
          <SocialLink href={`mailto:${email}`} icon={Mail} label="Email" />
        </div>

        <div className="flex items-center gap-4">
          <p className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-black/40">
            © {new Date().getFullYear()} {name}
          </p>
          {/* CMYK registration marks */}
          <div className="flex gap-1">
            {['bg-cmyk-cyan', 'bg-cmyk-magenta', 'bg-cmyk-yellow', 'bg-black'].map((c, i) => (
              <div key={i} className={`w-2.5 h-2.5 rounded-full ${c} mix-blend-multiply border border-black/10`} />
            ))}
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-black/40 hover:text-black transition-colors flex items-center gap-1 cursor-pointer"
          >
            Top <ArrowUp size={10} />
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
      <div className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border-2 border-black p-2 transition-colors group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:bg-black group-hover:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
        <Icon size={18} />
      </div>
      <span className="hidden md:inline">{label}</span>
    </motion.a>
  );
}

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { tagline, sections } = portfolioData.footer;
  const { name, github, linkedin, email, newspaperTitle } = portfolioData.personal;
  const { newspaperTitle: heroTitle } = portfolioData.hero;

  return (
    <footer className="border-t border-black mt-16 md:mt-20 pt-10 pb-6 bg-paper relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-black opacity-10" />
      
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          
          {/* Brand Column */}
          <div className="flex-1">
            <h2 className="font-['Manrope'] font-bold text-3xl md:text-4xl mb-4 tracking-tight uppercase">
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
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-black transition-colors group"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 font-['IBM_Plex_Mono'] text-sm font-bold uppercase hover:text-cmyk-magenta transition-colors"
    >
      <div className="p-2 border border-black group-hover:bg-black group-hover:text-white transition-colors">
        <Icon size={18} />
      </div>
      <span className="hidden md:inline">{label}</span>
    </a>
  );
}

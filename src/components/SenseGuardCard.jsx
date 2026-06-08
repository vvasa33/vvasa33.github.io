import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';

export default function SenseGuardCard() {
  const { featured } = portfolioData;

  return (
    <motion.div
      variants={personaVariants.item}
      className="bg-black text-white border-2 border-black overflow-hidden"
    >
      {/* Card header bar */}
      <div className="bg-cmyk-magenta border-b-2 border-black px-5 py-3.5 flex items-center gap-3">
        <div className="w-3 h-3 bg-white border border-white/40 shrink-0" />
        <p className="font-['IBM_Plex_Mono'] font-black text-sm uppercase tracking-widest text-white leading-none">
          ★ Startup · IoT Systems
        </p>
      </div>

      {/* Card body */}
      <div className="px-5 py-6">
        {/* Title + role */}
        <p className="font-['Manrope'] font-black text-2xl md:text-3xl uppercase tracking-tight leading-none mb-1.5">
          {featured.company}
        </p>
        <p className="font-['IBM_Plex_Mono'] text-xs text-white/70 uppercase tracking-widest mb-4">
          {featured.role}
        </p>

        {/* Description */}
        <p className="font-['IBM_Plex_Mono'] text-sm leading-relaxed text-white/80 mb-5">
          {featured.description[0]}
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-3 mb-5 border-t border-white/10 pt-5">
          {featured.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-['Manrope'] text-lg font-black text-white">{stat.value}</p>
              <p className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wide text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tech stack + CTA */}
        <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {featured.techStack.map((tech) => (
              <span
                key={tech}
                className="font-['IBM_Plex_Mono'] text-[11px] border border-white/20 px-2 py-0.5 text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={featured.website}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200"
          >
            Visit
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

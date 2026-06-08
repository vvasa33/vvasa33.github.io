import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';

const SKILL_COLOR_MAP = {
  'bg-cmyk-cyan': 'border-cmyk-cyan text-cmyk-cyan',
  'bg-cmyk-magenta': 'border-cmyk-magenta text-cmyk-magenta',
  'bg-highlighter-green': 'border-green-600 text-green-700',
  'bg-cmyk-yellow': 'border-yellow-500 text-yellow-700',
  'bg-highlighter-pink': 'border-pink-500 text-pink-600',
};

export default function ProfileColumn() {
  const { personal, hero, skills } = portfolioData;
  const { professionalOverview } = hero.blurbs;

  return (
    <motion.div
      variants={personaVariants.container}
      className="flex flex-col gap-6 py-8 pr-0 lg:pr-6"
    >
      {/* Section label */}
      <motion.p
        variants={personaVariants.item}
        className="font-['IBM_Plex_Mono'] text-[11px] font-bold uppercase tracking-[0.25em] text-black/50"
      >
        Section A: Profile
      </motion.p>

      {/* Bio */}
      <motion.div variants={personaVariants.item}>
        <p className="font-['IBM_Plex_Mono'] text-sm leading-relaxed text-gray-800">
          {professionalOverview.paragraphs[0]}
        </p>
      </motion.div>

      {/* Contact links */}
      <motion.div variants={personaVariants.item} className="flex flex-col gap-2.5">
        <a
          href={`mailto:${personal.email}`}
          className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-black hover:text-cmyk-magenta transition-colors group"
        >
          <Mail size={13} className="shrink-0" />
          <span className="group-hover:underline">{personal.email}</span>
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-black hover:text-cmyk-cyan transition-colors group"
        >
          <Linkedin size={13} className="shrink-0" />
          <span className="group-hover:underline">linkedin.com/in/visu-vasa</span>
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-black hover:text-cmyk-cyan transition-colors group"
        >
          <Github size={13} className="shrink-0" />
          <span className="group-hover:underline">github.com/vvasa33</span>
        </a>
      </motion.div>

      {/* Skills */}
      <motion.div variants={personaVariants.item}>
        <p className="font-['IBM_Plex_Mono'] text-[11px] font-black uppercase tracking-[0.25em] mb-3 border-b border-black pb-1.5">
          Skills Matter
        </p>
        <div className="flex flex-col gap-4">
          {skills.map((category) => {
            const tagClass = SKILL_COLOR_MAP[category.color] ?? 'border-black text-black';
            return (
              <div key={category.category}>
                <p className="font-['IBM_Plex_Mono'] text-[11px] font-bold uppercase tracking-widest text-black/60 mb-1.5">
                  {category.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((skill) => (
                    <span
                      key={skill.name}
                      className={`font-['IBM_Plex_Mono'] text-[11px] border px-2 py-0.5 font-medium ${tagClass}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

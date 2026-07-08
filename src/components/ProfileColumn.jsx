import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';

export default function ProfileColumn() {
  const { personal, hero, skills } = portfolioData;
  const { professionalOverview } = hero.blurbs;

  return (
    <motion.div
      variants={personaVariants.container}
      className="flex flex-col gap-6 py-8 pr-0 lg:pr-6"
      id="contact"
    >
      <motion.div variants={personaVariants.item}>
        <p className="font-['IBM_Plex_Mono'] text-sm leading-relaxed text-gray-800">
          {professionalOverview.paragraphs[0]}
        </p>
      </motion.div>

      <motion.div variants={personaVariants.item} className="flex flex-col gap-2.5">
        <a
          href={`mailto:${personal.email}`}
          className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-black hover:text-cmyk-magenta transition-colors group min-h-[44px]"
        >
          <Mail size={13} className="shrink-0" />
          <span className="group-hover:underline">{personal.email}</span>
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-black hover:text-cmyk-magenta transition-colors group min-h-[44px]"
        >
          <Linkedin size={13} className="shrink-0" />
          <span className="group-hover:underline">linkedin.com/in/visu-vasa</span>
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-black hover:text-cmyk-magenta transition-colors group min-h-[44px]"
        >
          <Github size={13} className="shrink-0" />
          <span className="group-hover:underline">github.com/vvasa33</span>
        </a>
      </motion.div>

      <motion.div variants={personaVariants.item}>
        <p className="font-['IBM_Plex_Mono'] text-sm font-bold mb-3 border-b border-black pb-1.5">
          Skills
        </p>
        <div className="flex flex-col gap-4">
          {skills.map((category) => (
            <div key={category.category}>
              <p className="font-['IBM_Plex_Mono'] text-[11px] font-bold text-black/60 mb-1.5">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="font-['IBM_Plex_Mono'] text-[11px] border border-black px-2 py-0.5 font-medium text-black hover:border-cmyk-magenta hover:text-cmyk-magenta transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

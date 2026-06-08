import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';
import { resolveImagePath } from '../utils/imagePath';

function ExperienceEntry({ item }) {
  return (
    <div className="border-b border-black/20 pb-5 last:border-0 last:pb-0">
      <div className="flex items-start gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <p className="font-['IBM_Plex_Mono'] text-xs font-black uppercase tracking-wide leading-tight">
            {item.title}
          </p>
          <p className="font-['IBM_Plex_Mono'] text-[11px] text-black/60 mt-0.5">
            {item.role}
          </p>
          <p className="font-['IBM_Plex_Mono'] text-[11px] text-black/50 mt-0.5">
            {item.timeline}
          </p>
        </div>
        <span
          className={`shrink-0 font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase px-2 py-0.5 border ${
            item.status === 'Current'
              ? 'border-cmyk-cyan text-cmyk-cyan'
              : 'border-black/30 text-black/40'
          }`}
        >
          {item.status}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {item.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="font-['IBM_Plex_Mono'] text-[10px] border border-black/30 px-1.5 py-0.5 text-black/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function EducationEntry({ item }) {
  const logo = resolveImagePath(item.institutionLogo);
  return (
    <div className="border-b border-black/20 pb-5 last:border-0 last:pb-0">
      <div className="flex items-start gap-3">
        {logo && (
          <img
            src={logo}
            alt={item.institution}
            className="w-7 h-7 object-contain img-print-look shrink-0 mt-0.5"
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="font-['IBM_Plex_Mono'] text-xs font-black uppercase tracking-wide leading-tight">
            {item.institution}
          </p>
          <p className="font-['IBM_Plex_Mono'] text-[11px] text-black/70 mt-0.5 leading-snug">
            {item.title}
          </p>
          {item.timeline && (
            <p className="font-['IBM_Plex_Mono'] text-[11px] text-black/50 mt-0.5">
              {item.timeline}
            </p>
          )}
          {Array.isArray(item.subtitle) ? (
            item.subtitle.map((s, i) => (
              <p key={i} className="font-['IBM_Plex_Mono'] text-[11px] text-black/50 leading-snug">
                {s}
              </p>
            ))
          ) : item.subtitle ? (
            <p className="font-['IBM_Plex_Mono'] text-[11px] text-black/50 leading-snug">
              {item.subtitle}
            </p>
          ) : null}
        </div>
        <span className="shrink-0 font-['IBM_Plex_Mono'] text-[10px] font-black border border-black/30 text-black/50 px-2 py-0.5">
          {item.badgeYear}
        </span>
      </div>
    </div>
  );
}

export default function LedgerColumn() {
  const { experience, education } = portfolioData;

  return (
    <motion.div
      variants={personaVariants.container}
      className="flex flex-col gap-7 py-8 pl-0 lg:pl-6"
    >
      {/* Section label */}
      <motion.p
        variants={personaVariants.item}
        className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-[0.25em] text-black/50"
      >
        Section C: Ledger
      </motion.p>

      {/* Experience */}
      <motion.div variants={personaVariants.item}>
        <p className="font-['IBM_Plex_Mono'] text-sm font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1.5 mb-5">
          Experience
        </p>
        <div className="flex flex-col gap-5">
          {experience.map((item) => (
            <ExperienceEntry key={item.id} item={item} />
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div variants={personaVariants.item}>
        <p className="font-['IBM_Plex_Mono'] text-sm font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1.5 mb-5">
          Education
        </p>
        <div className="flex flex-col gap-5">
          {education.map((item) => (
            <EducationEntry key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

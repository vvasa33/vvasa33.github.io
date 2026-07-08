import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';
import { getAllPosts } from '../utils/blogLoader';

export default function HomeDashboard() {
  const { personal, hero, experience } = portfolioData;
  const { professionalOverview } = hero.blurbs;
  const currentJobs = experience.filter((item) => item.status === 'Current');
  const latestPost = getAllPosts()[0];

  return (
    <motion.div
      variants={personaVariants.container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 flex-1 lg:min-h-0 border-b border-black py-5 lg:py-6"
    >
      <motion.div
        id="contact"
        variants={personaVariants.item}
        className="flex flex-col gap-4 scroll-mt-4"
      >
        <p className="font-['IBM_Plex_Mono'] text-sm md:text-base leading-relaxed text-gray-800 line-clamp-2">
          {professionalOverview.paragraphs[0]}
        </p>
        <div className="flex flex-col gap-2">
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
        </div>
      </motion.div>

      <motion.div variants={personaVariants.item} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 border-t border-black pt-3">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="flex items-baseline justify-between gap-2 font-['IBM_Plex_Mono'] text-xs"
            >
              <span className="font-black uppercase tracking-wide truncate">
                {job.title}
              </span>
              <span className="text-black/50 shrink-0 hidden sm:inline">
                {job.role}
              </span>
              <span className="text-cmyk-cyan font-bold uppercase shrink-0 text-[10px]">
                Now
              </span>
            </div>
          ))}
        </div>

        {latestPost && (
          <div className="border-t border-black pt-3">
            <p className="font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase tracking-widest text-black/50 mb-1.5">
              Latest writing
            </p>
            <Link
              to={`/blog/${latestPost.slug}`}
              className="inline-flex items-center gap-2 font-['IBM_Plex_Mono'] text-sm text-black hover:text-cmyk-magenta transition-colors group"
            >
              <span className="group-hover:underline leading-snug">{latestPost.title}</span>
              <ArrowRight size={14} className="shrink-0" />
            </Link>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

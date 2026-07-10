import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';
import { resolveImagePath } from '../utils/imagePath';
import SenseGuardKineticSting from './motion/SenseGuardKineticSting';

const RELATED_POSTS = [
  { slug: 'to-start-a-startup', title: 'To Start a Startup' },
  { slug: 'building-software-from-the-ground-up', title: 'Building Software from the Ground-Up' },
];

function LogoMark({ company, logoSrc }) {
  const [failed, setFailed] = useState(!logoSrc);

  if (failed || !logoSrc) {
    return (
      <div
        className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center border-2 border-black bg-white font-['Manrope'] text-lg font-black tracking-tight"
        aria-hidden="true"
      >
        SG
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt={company}
      className="h-14 w-14 md:h-16 md:w-16 shrink-0 object-contain img-print-look border border-black bg-white p-1"
      onError={() => setFailed(true)}
    />
  );
}

function StatRows({ stats }) {
  return (
    <div className="border-t-2 border-black">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex items-baseline justify-between gap-4 py-3 ${index < stats.length - 1 ? 'border-b border-black/20' : ''}`}
        >
          <span className="font-['IBM_Plex_Mono'] text-sm text-black/70">{stat.label}</span>
          <span className="font-['Manrope'] text-lg font-black text-black shrink-0">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function SenseGuardPromo({ variant = 'teaser' }) {
  const { featured } = portfolioData;
  const reduceMotion = useReducedMotion();
  const isEdition = variant === 'edition';
  const logoSrc = resolveImagePath(featured.companyLogo);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldShow = reduceMotion || isEdition || isInView;

  const containerVariants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : personaVariants.container;

  const revealVariants = reduceMotion
    ? {
        hidden: { opacity: 1, x: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        visible: { opacity: 1, x: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
      }
    : personaVariants.angularReveal;

  const itemVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : personaVariants.item;

  return (
    <section
      ref={sectionRef}
      className={`border-t-4 border-black bg-paper ${isEdition ? 'py-8 md:py-10' : 'py-6 md:py-8'}`}
      aria-label="SenseGuard"
    >
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate={shouldShow ? 'visible' : 'hidden'}
        className="overflow-hidden"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={shouldShow ? 'visible' : 'hidden'}
          className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10"
        >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-1 min-w-0">
          <motion.div variants={itemVariants}>
            {isEdition ? (
              <LogoMark company={featured.company} logoSrc={logoSrc} />
            ) : (
              <SenseGuardKineticSting />
            )}
          </motion.div>

          <div className="flex flex-col gap-3 min-w-0">
            <motion.h2
              variants={itemVariants}
              className="font-['Manrope'] text-2xl md:text-3xl font-black leading-tight tracking-tight text-black"
            >
              {featured.company}
            </motion.h2>

            <motion.p variants={itemVariants} className="font-['IBM_Plex_Mono'] text-xs text-black/60">
              {isEdition ? featured.role : 'Co-founder & CTO'}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-['IBM_Plex_Mono'] text-sm leading-relaxed text-gray-800 max-w-[65ch]"
            >
              {featured.description[0]}
            </motion.p>

            {isEdition && featured.description[1] && (
              <motion.p
                variants={itemVariants}
                className="font-['IBM_Plex_Mono'] text-sm leading-relaxed text-gray-800 max-w-[65ch]"
              >
                {featured.description[1]}
              </motion.p>
            )}

            {isEdition && (
              <>
                <motion.div variants={itemVariants} className="mt-2">
                  <StatRows stats={featured.stats} />
                </motion.div>

                <motion.div variants={itemVariants} className="mt-4 border-t border-black pt-4">
                  <p className="font-['IBM_Plex_Mono'] text-xs font-bold text-black mb-2">Stack</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm text-gray-800 leading-relaxed">
                    {featured.techStack.join(', ')}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-4 border-t border-black pt-4">
                  <p className="font-['IBM_Plex_Mono'] text-xs font-bold text-black mb-3">Related writing</p>
                  <ul className="flex flex-col gap-2">
                    {RELATED_POSTS.map((post) => (
                      <li key={post.slug}>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="font-['IBM_Plex_Mono'] text-sm text-black hover:text-cmyk-magenta transition-colors inline-flex items-center gap-1.5 group"
                        >
                          <span className="group-hover:underline">{post.title}</span>
                          <ArrowRight size={12} className="shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </>
            )}
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full sm:w-auto"
        >
          <a
            href={featured.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest bg-cmyk-magenta text-white border-2 border-black hover:bg-black transition-colors duration-200"
          >
            Visit
            <ExternalLink size={12} />
          </a>
          <Link
            to={isEdition ? '/' : '/senseguard'}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            {isEdition ? 'Back home' : 'Full story'}
            <ArrowRight size={12} />
          </Link>
        </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { personaVariants } from '../constants/animations';

const EXCERPT_PARAGRAPHS = [
  "I wasn't always a startup founder. In fact, I was kind of the opposite. In my mind, basically the only real path to gaining stability in life was to go to college, learn how to play with computers, get a job at FAANG or whatever people say is cool, and be happy with that. Startups were the exact opposite.",
  "It's welcome week. Sophomore year. A suitemate walks in with a crazy idea — IoT networks, long-range comms, real estate monitoring. There's potential. Then the Mohktarzada Hatchery: the mentors who built Rocket Money ($1.5B valuation), and the chance to build something real. We pitched. We got in.",
];

const POST_SLUG = 'to-start-a-startup';
const POST_DATE = 'June 6, 2026';
const POST_TAG = 'Startups';

export default function FeaturedArticle() {
  return (
    <motion.div
      variants={personaVariants.container}
      className="flex flex-col gap-0 py-8 px-0 lg:px-8"
    >
      {/* Section label */}
      <motion.p
        variants={personaVariants.item}
        className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-[0.25em] text-black/50 mb-5"
      >
        Section B: The Blog
      </motion.p>

      {/* Featured edition header bar */}
      <motion.div
        variants={personaVariants.item}
        className="flex items-center gap-3 mb-5 border-b border-black pb-4"
      >
        <span className="font-['IBM_Plex_Mono'] text-xs font-black uppercase tracking-[0.2em] bg-black text-white px-3 py-1.5">
          Featured Edition
        </span>
        <span className="font-['IBM_Plex_Mono'] text-xs text-black/60">
          {POST_DATE}
        </span>
        <span className="font-['IBM_Plex_Mono'] text-[11px] font-bold uppercase tracking-widest border border-cmyk-magenta text-cmyk-magenta px-2 py-0.5">
          {POST_TAG}
        </span>
      </motion.div>

      {/* Article title */}
      <motion.h2
        variants={personaVariants.item}
        className="font-['Manrope'] text-5xl md:text-6xl font-black uppercase leading-none mb-5 tracking-tight"
      >
        To Start a Startup
      </motion.h2>

      {/* Byline */}
      <motion.p
        variants={personaVariants.item}
        className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-black/60 mb-7 border-b border-black pb-4"
      >
        By Viswanath Vasa — The Founder Times — {POST_DATE}
      </motion.p>

      {/* Article body */}
      <motion.div
        variants={personaVariants.container}
        className="mb-7 space-y-5"
      >
        {EXCERPT_PARAGRAPHS.map((para, i) => (
          <motion.p
            key={i}
            variants={personaVariants.item}
            className="font-['IBM_Plex_Mono'] text-base leading-loose text-gray-800"
          >
            {para}
          </motion.p>
        ))}
      </motion.div>

      {/* Read full article CTA */}
      <motion.div variants={personaVariants.item} className="mb-8">
        <Link to={`/blog/${POST_SLUG}`}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border-2 border-black bg-black text-white px-6 py-3.5 font-['IBM_Plex_Mono'] text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
          >
            Read Full Article
            <ArrowRight size={16} />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

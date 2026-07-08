import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import { getAllPosts, getPostPreviewParagraphs } from '../utils/blogLoader';

function formatPostDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function FeaturedArticle() {
  const reduceMotion = useReducedMotion();
  const post = getAllPosts()[0];

  if (!post) {
    return null;
  }

  const formattedDate = formatPostDate(post.date);
  const excerptParagraphs = getPostPreviewParagraphs(post);
  const itemVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : personaVariants.item;

  return (
    <motion.div
      initial={reduceMotion ? false : 'hidden'}
      animate={reduceMotion ? undefined : 'visible'}
      variants={personaVariants.container}
      className="flex flex-col gap-0 py-8 px-0 lg:px-8"
    >
      <motion.div
        variants={itemVariants}
        className="mb-4 halftone-wrap overflow-hidden border border-black"
      >
        <img
          src="https://picsum.photos/seed/visu-vasa-editorial/800/320"
          alt="Editorial portrait placeholder for Viswanath Vasa"
          className="w-full h-40 md:h-48 object-cover img-print-look"
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 mb-4 border-b border-black pb-3"
      >
        <span className="font-['IBM_Plex_Mono'] text-xs text-black/60">
          {formattedDate}
        </span>
        <span className="font-['IBM_Plex_Mono'] text-[11px] font-bold border border-black px-2 py-0.5 text-black">
          {post.tag}
        </span>
      </motion.div>

      <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 tracking-tight text-black">
        {post.title}
      </h2>

      <p className="font-['IBM_Plex_Mono'] text-xs text-black/60 mb-6 border-b border-black pb-3">
        Viswanath Vasa · {formattedDate}
      </p>

      <div className="relative mb-4">
        <div className="featured-excerpt-fade max-h-40 md:max-h-48 overflow-hidden">
          <div className="space-y-4">
            {excerptParagraphs.map((para) => (
              <p
                key={para}
                className="font-['IBM_Plex_Mono'] text-sm md:text-base leading-relaxed text-gray-800"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      <motion.div variants={itemVariants} className="mb-4">
        <Link to={`/blog/${post.slug}`} className="block w-full sm:w-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border-2 border-black bg-black text-white px-6 py-3.5 min-h-[44px] font-['IBM_Plex_Mono'] text-sm font-bold uppercase tracking-widest hover:bg-cmyk-magenta hover:border-cmyk-magenta transition-colors duration-200 cursor-pointer"
          >
            Read article
            <ArrowRight size={16} />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

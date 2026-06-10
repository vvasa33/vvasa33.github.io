import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import { getAllPosts } from '../utils/blogLoader';

const TAG_COLOR_MAP = {
  'bg-cmyk-cyan': 'border-cmyk-cyan text-cmyk-cyan',
  'bg-cmyk-magenta': 'border-cmyk-magenta text-cmyk-magenta',
  'bg-highlighter-green': 'border-green-600 text-green-700',
  'bg-cmyk-yellow': 'border-yellow-500 text-yellow-700',
  'bg-highlighter-pink': 'border-pink-500 text-pink-600',
  'bg-cmyk-black': 'border-black text-black',
};

function formatPostDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function stripMarkdown(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_{1,2}([^_]+)_{1,2}/g, '$1');
}

function getExcerptParagraphs(post, max = 4) {
  const paragraphs = [];

  if (post.excerpt) {
    paragraphs.push(stripMarkdown(post.excerpt));
  }

  const contentParagraphs = post.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p && !p.startsWith('#') && !p.startsWith('***'));

  for (const paragraph of contentParagraphs) {
    if (paragraphs.length >= max) break;
    const plain = stripMarkdown(paragraph);
    if (!paragraphs.includes(plain)) {
      paragraphs.push(plain);
    }
  }

  return paragraphs.slice(0, max);
}

export default function FeaturedArticle() {
  const post = getAllPosts()[0];

  if (!post) {
    return null;
  }

  const formattedDate = formatPostDate(post.date);
  const excerptParagraphs = getExcerptParagraphs(post);
  const tagColorClasses = TAG_COLOR_MAP[post.color] || TAG_COLOR_MAP['bg-cmyk-magenta'];

  return (
    <motion.div
      variants={personaVariants.container}
      className="flex flex-col gap-0 py-8 px-0 lg:px-8"
    >
      <motion.p
        variants={personaVariants.item}
        className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-[0.25em] text-black/50 mb-5"
      >
        Section B: The Blog
      </motion.p>

      <motion.div
        variants={personaVariants.item}
        className="flex items-center gap-3 mb-5 border-b border-black pb-4"
      >
        <span className="font-['IBM_Plex_Mono'] text-xs font-black uppercase tracking-[0.2em] bg-black text-white px-3 py-1.5">
          Featured Edition
        </span>
        <span className="font-['IBM_Plex_Mono'] text-xs text-black/60">
          {formattedDate}
        </span>
        <span className={`font-['IBM_Plex_Mono'] text-[11px] font-bold uppercase tracking-widest border px-2 py-0.5 ${tagColorClasses}`}>
          {post.tag}
        </span>
      </motion.div>

      <motion.h2
        variants={personaVariants.item}
        className="font-['Manrope'] text-5xl md:text-6xl font-black uppercase leading-none mb-5 tracking-tight"
      >
        {post.title}
      </motion.h2>

      <motion.p
        variants={personaVariants.item}
        className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-black/60 mb-7 border-b border-black pb-4"
      >
        By Viswanath Vasa — The Founder Times — {formattedDate}
      </motion.p>

      <motion.div variants={personaVariants.item} className="relative mb-4">
        <div className="featured-excerpt-fade max-h-52 md:max-h-60 overflow-hidden">
          <motion.div
            variants={personaVariants.container}
            className="space-y-5"
          >
            {excerptParagraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={personaVariants.item}
                className="font-['IBM_Plex_Mono'] text-base leading-loose text-gray-800"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={personaVariants.item} className="mb-8">
        <Link to={`/blog/${post.slug}`}>
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

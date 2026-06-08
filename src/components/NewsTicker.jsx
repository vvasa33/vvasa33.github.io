import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import { getAllPosts } from '../utils/blogLoader';

const TICKER_ITEM_CLASS =
  "font-['IBM_Plex_Mono'] text-xs md:text-sm font-medium px-8 py-2 border-r border-black/20 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer inline-flex items-center shrink-0";

function formatTickerLabel(post) {
  const date = new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase();

  return `${post.tag?.toUpperCase() ?? 'NEWS'}: ${post.title.toUpperCase()} — ${date} — READ`;
}

export default function NewsTicker() {
  const posts = getAllPosts();
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(6);

  const displayPosts = posts.length > 0
    ? posts
    : [{ slug: 'blogs', tag: 'News', title: 'Latest News — Stay Tuned', date: '2026-01-01' }];

  useEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const updateRepeatCount = () => {
      const containerWidth = container.offsetWidth;
      const setWidth = measure.scrollWidth;
      if (!setWidth) return;

      const minPerHalf = Math.max(2, Math.ceil(containerWidth / setWidth) + 1);
      setRepeatCount(minPerHalf);
    };

    updateRepeatCount();

    const observer = new ResizeObserver(updateRepeatCount);
    observer.observe(container);

    return () => observer.disconnect();
  }, [displayPosts.length]);

  const singleSet = Array.from({ length: repeatCount }, () => displayPosts).flat();
  const looped = [...singleSet, ...singleSet];

  return (
    <motion.div
      variants={personaVariants.item}
      className="w-full border-y-2 border-black mb-0 overflow-hidden flex items-stretch relative"
    >
      <Link
        to="/blogs"
        className="hidden md:flex shrink-0 bg-cmyk-magenta text-white px-4 py-2 font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-bold uppercase tracking-widest border-r-2 border-black hover:bg-black transition-colors duration-200 items-center gap-2 min-h-[36px]"
      >
        Latest Posts
        <ArrowRight size={12} />
      </Link>

      {/* Hidden row used to measure one full set width */}
      <div className="absolute opacity-0 pointer-events-none invisible" aria-hidden="true">
        <div ref={measureRef} className="flex whitespace-nowrap">
          {displayPosts.map((post) => (
            <span key={`measure-${post.slug}`} className={TICKER_ITEM_CLASS}>
              {formatTickerLabel(post)} →
            </span>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="ticker-track flex-1 overflow-hidden bg-white flex items-center min-w-0">
        <div className="animate-ticker whitespace-nowrap flex w-fit">
          {looped.map((post, i) => {
            const href = post.slug === 'blogs' ? '/blogs' : `/blog/${post.slug}`;

            return (
              <Link
                key={`${post.slug}-${i}`}
                to={href}
                className={TICKER_ITEM_CLASS}
              >
                {formatTickerLabel(post)} →
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

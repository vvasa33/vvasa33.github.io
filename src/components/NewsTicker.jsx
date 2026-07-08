import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import { getAllPosts } from '../utils/blogLoader';

const TICKER_ITEM_CLASS =
  "font-['IBM_Plex_Mono'] text-[10px] md:text-xs font-medium px-6 py-1 border-r border-black/20 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer inline-flex items-center shrink-0";

function formatShortDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatTickerLabel(post) {
  return `${post.title} · ${formatShortDate(post.date)}`;
}

export default function NewsTicker({ slim = false }) {
  const [posts] = useState(() => getAllPosts());
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(2);

  const displayPosts = posts.length > 0
    ? posts
    : [{ slug: 'writing', tag: 'News', title: 'Latest writing coming soon', date: '2026-01-01' }];

  const latestPost = displayPosts[0];

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    let isMounted = true;

    const updateRepeatCount = () => {
      if (!isMounted) return;

      const containerWidth = container.offsetWidth;
      const setWidth = measure.scrollWidth;
      if (!setWidth) return;

      const minPerHalf = Math.max(2, Math.ceil(containerWidth / setWidth) + 1);
      setRepeatCount((current) => current === minPerHalf ? current : minPerHalf);
    };

    updateRepeatCount();

    const observer = new ResizeObserver(updateRepeatCount);
    observer.observe(container);
    observer.observe(measure);

    document.fonts?.ready.then(updateRepeatCount);

    return () => {
      isMounted = false;
      observer.disconnect();
    };
  }, [displayPosts.length]);

  const singleSet = Array.from({ length: repeatCount }, () => displayPosts).flat();
  const looped = [...singleSet, ...singleSet];

  return (
    <motion.div
      variants={personaVariants.item}
      className="w-full border-y-2 border-black mb-0 overflow-hidden flex items-stretch relative"
    >
      {/* Mobile: static latest post link */}
      <div className="md:hidden flex-1 bg-white">
        <Link
          to={latestPost.slug === 'writing' ? '/writing' : `/blog/${latestPost.slug}`}
          className="flex items-center justify-between gap-2 px-4 py-3 min-h-[44px] font-['IBM_Plex_Mono'] text-xs text-black hover:text-cmyk-magenta transition-colors"
        >
          <span className="truncate">
            Latest: {latestPost.title}
          </span>
          <ArrowRight size={14} className="shrink-0" />
        </Link>
      </div>

      {/* Desktop: scrolling ticker */}
      <Link
        to="/writing"
        className={`hidden md:flex shrink-0 bg-cmyk-magenta text-white font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase tracking-widest border-r-2 border-black hover:bg-black transition-colors duration-200 items-center gap-2 ${slim ? 'px-3 py-1 min-h-[28px]' : 'px-4 py-2 min-h-[36px]'}`}
      >
        Writing
        <ArrowRight size={12} />
      </Link>

      <div className="absolute opacity-0 pointer-events-none invisible" aria-hidden="true">
        <div ref={measureRef} className="hidden md:flex whitespace-nowrap">
          {displayPosts.map((post) => (
            <span key={`measure-${post.slug}`} className={TICKER_ITEM_CLASS}>
              {formatTickerLabel(post)}
            </span>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="hidden md:flex ticker-track flex-1 overflow-hidden bg-white items-center min-w-0">
        <div key={repeatCount} className="animate-ticker whitespace-nowrap flex w-fit">
          {looped.map((post, i) => {
            const href = post.slug === 'writing' ? '/writing' : `/blog/${post.slug}`;

            return (
              <Link
                key={`${post.slug}-${i}`}
                to={href}
                className={TICKER_ITEM_CLASS}
              >
                {formatTickerLabel(post)}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

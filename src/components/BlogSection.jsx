import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personaVariants } from '../constants/animations';
import SectionHeader from './SectionHeader';
import ArticleCard from './ArticleCard';
import { getAllPosts } from '../utils/blogLoader';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const articles = getAllPosts().slice(0, 3);

  return (
    <motion.div className="mb-16" variants={personaVariants.container}>
      <SectionHeader title="Technical Articles" color="bg-highlighter-green" />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        variants={personaVariants.container}
      >
        {articles.map((article, index) => (
          <ArticleCard
            key={article.slug}
            href={`/blog/${article.slug}`}
            tag={article.tag}
            title={article.title}
            excerpt={article.excerpt}
            color={article.color}
          />
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link to="/blogs">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex min-h-[44px] items-center justify-center gap-3 border-2 border-black bg-white px-8 py-4 font-['IBM_Plex_Mono'] text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors hover:bg-black hover:text-white"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

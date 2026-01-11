import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { containerVariants } from '../constants/animations';
import SectionHeader from './SectionHeader';
import ArticleCard from './ArticleCard';
import { getAllPosts } from '../utils/blogLoader';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const articles = getAllPosts().slice(0, 3);

  return (
    <motion.div className="mb-16" variants={containerVariants}>
      <SectionHeader title="Technical Articles" color="bg-highlighter-green" />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        variants={containerVariants}
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
        <Link 
          to="/blogs"
          className="font-['IBM_Plex_Mono'] text-sm font-bold border-2 border-black px-8 py-4 bg-white hover:bg-black hover:text-white transition-colors inline-flex items-center gap-3 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
        >
          View All Articles
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
}

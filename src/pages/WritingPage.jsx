import { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';
import { getAllPosts } from '../utils/blogLoader';
import SubPageShell from '../components/SubPageShell';
import SectionHeader from '../components/SectionHeader';
import ArticleCard from '../components/ArticleCard';
import NewsTicker from '../components/NewsTicker';
import { personaVariants } from '../constants/animations';

export default function WritingPage() {
  const posts = getAllPosts();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <SubPageShell
      title="Writing"
      description="Technical articles on IoT, security, software engineering, and startups."
      canonical="/writing"
    >
      <div className="mb-8">
        <NewsTicker slim />
      </div>
      <SectionHeader title="Latest Papers" color="bg-cmyk-magenta" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <motion.div key={post.slug} variants={personaVariants.item} className="h-full">
            <ArticleCard
              href={`/blog/${post.slug}`}
              tag={post.tag}
              title={post.title}
              excerpt={post.excerpt}
              color={post.color}
            />
          </motion.div>
        ))}
      </div>
      {posts.length === 0 && (
        <div className="text-center py-24 border-4 border-double border-gray-300 bg-gray-50 mb-12">
          <div className="inline-block p-4 rounded-full bg-gray-200 mb-4">
            <Tag className="w-8 h-8 text-gray-400" />
          </div>
          <p className="font-['IBM_Plex_Mono'] text-gray-500 uppercase tracking-widest text-sm font-bold">
            No articles published yet
          </p>
        </div>
      )}
    </SubPageShell>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Tag } from 'lucide-react';
import { getAllPosts } from '../utils/blogLoader';
import SEO from '../components/SEO';
import { useLayoutEffect } from 'react';
import Header from '../components/Header';
import Masthead from '../components/Masthead';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import ArticleCard from '../components/ArticleCard';
import NewsTicker from '../components/NewsTicker';
import { LineDivider, LineDividerBottom } from '../components/SectionDivider';
import { containerVariants, itemVariants } from '../constants/animations';

export default function BlogsPage() {
  const posts = getAllPosts();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <SEO 
        title="Technical Articles & Blog"
        description="In-depth technical articles on IoT, embedded systems, security, and software engineering."
        canonical="/blogs"
      />
      
      <div className="bg-paper w-full min-h-screen px-4 md:px-12 lg:px-24 py-8 md:py-20 text-black font-['IBM_Plex_Mono']">
        <div className="max-w-[1440px] mx-auto relative">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-12"
          >
            {/* Top Header Section */}
            <Header />

            {/* Top Divider Line */}
            <LineDivider />

            {/* Masthead Section */}
            <Masthead />

            {/* Bottom Divider Line */}
            <LineDividerBottom />

            {/* Navigation / Breadcrumb */}
            <div className="flex justify-between items-center mb-12 border-b-2 border-black pb-4">
               <Link 
                to="/" 
                className="font-['IBM_Plex_Mono'] text-xs font-bold border-2 border-black px-4 py-2 bg-white hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Front Page
              </Link>
              
              <div className="hidden md:flex items-center gap-2">
                <span className="w-3 h-3 bg-cmyk-cyan rounded-full animate-pulse"></span>
                <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest">Live Updates</span>
              </div>
            </div>

            {/* Page Title Area */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-12 bg-highlighter-green"></div>
                <span className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-[0.35em] text-gray-500">
                  Technical Bureau
                </span>
              </div>
              <h1 className="font-['Manrope'] text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
                Field Reports
              </h1>
              <p className="font-['IBM_Plex_Mono'] text-lg text-gray-800 max-w-3xl border-l-4 border-cmyk-yellow pl-6 py-2">
                In-depth technical articles covering IoT systems, embedded engineering, security architecture, and software development. 
                Documenting real-world implementations from the field.
              </p>
            </div>

            {/* News Ticker for extra flair */}
            <div className="mb-16">
               <NewsTicker />
            </div>

            {/* Content Grid */}
            <SectionHeader title="LATEST DISPATCHES" color="bg-cmyk-magenta" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  variants={itemVariants}
                  className="h-full"
                >
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
              <div className="text-center py-24 border-4 border-double border-gray-300 bg-gray-50 mb-24">
                <div className="inline-block p-4 rounded-full bg-gray-200 mb-4">
                   <Tag className="w-8 h-8 text-gray-400" />
                </div>
                <p className="font-['IBM_Plex_Mono'] text-gray-500 uppercase tracking-widest text-sm font-bold">
                  No articles published yet
                </p>
                <p className="mt-2 font-['IBM_Plex_Mono'] text-xs text-gray-400">
                  Check back later for updates
                </p>
              </div>
            )}

          </motion.div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

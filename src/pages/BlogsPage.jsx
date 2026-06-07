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
import { personaVariants } from '../constants/animations';

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
      
      <div className="bg-paper min-h-screen w-full pb-[max(2rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(2rem,env(safe-area-inset-top))] text-black font-['IBM_Plex_Mono'] md:pb-[max(5rem,env(safe-area-inset-bottom))] md:pl-[max(3rem,env(safe-area-inset-left))] md:pr-[max(3rem,env(safe-area-inset-right))] md:pt-[max(5rem,env(safe-area-inset-top))] lg:pl-[max(6rem,env(safe-area-inset-left))] lg:pr-[max(6rem,env(safe-area-inset-right))]">
        <div className="max-w-[1440px] mx-auto relative">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={personaVariants.container}
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
            <div className="mb-12 flex flex-col gap-4 border-b-2 border-black pb-4 sm:flex-row sm:items-center sm:justify-between">
               <Link 
                to="/" 
                className="font-['IBM_Plex_Mono'] inline-flex min-h-[44px] items-center justify-center gap-2 border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Front Page
              </Link>
              
              <div className="hidden md:flex items-center gap-2">
                <span className="w-3 h-3 bg-cmyk-cyan rounded-full"></span>
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
              <h1 className="mb-6 break-words font-['Manrope'] text-3xl font-bold uppercase tracking-tight sm:text-5xl md:text-7xl">
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
                  variants={personaVariants.item}
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

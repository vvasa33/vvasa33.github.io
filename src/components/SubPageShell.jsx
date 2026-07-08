import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import SEO from './SEO';
import Header from './Header';
import CompactNameplate from './CompactNameplate';
import InlineNav from './InlineNav';
import Footer from './Footer';

export default function SubPageShell({ title, description, canonical, children }) {
  return (
    <>
      <SEO title={title} description={description} canonical={canonical} />
      <div className="bg-paper min-h-screen w-full font-['IBM_Plex_Mono'] text-black">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-10 pt-4 md:pt-6 pb-8 md:pb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={personaVariants.container}
          >
            <Header />
            <CompactNameplate />
            <InlineNav />
            <div className="py-4 border-b border-black mb-8">
              <Link
                to="/"
                className="font-['IBM_Plex_Mono'] inline-flex min-h-[44px] items-center gap-2 border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Front Page
              </Link>
            </div>
            {children}
            <div className="mt-12">
              <Footer variant="minimal" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

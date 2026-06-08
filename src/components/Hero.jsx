import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import SEO from './SEO';
import Header from './Header';
import Masthead from './Masthead';
import NewsTicker from './NewsTicker';
import Footer from './Footer';
import ProfileColumn from './ProfileColumn';
import FeaturedArticle from './FeaturedArticle';
import SenseGuardCard from './SenseGuardCard';
import LedgerColumn from './LedgerColumn';
import portfolioData from '../data/portfolio.json';

export default function Hero() {
  const { meta } = portfolioData;

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
      />
      <div className="bg-paper min-h-screen w-full font-['IBM_Plex_Mono'] text-black">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-10 pt-4 md:pt-6 pb-8 md:pb-12">

          {/* ── Above-the-fold: animated on load ─────────────────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={personaVariants.container}
          >
            {/* Top metadata header */}
            <Header />

            {/* Masthead: big title + subtitle bar */}
            <Masthead />

            {/* Blog-post ticker */}
            <NewsTicker />
          </motion.div>

          {/* ── Three-column newspaper grid ───────────────────────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={personaVariants.container}
            className="border-t-0 border-black mt-0"
          >
            {/*
              Mobile:  flex-col — center (order-1) → left (order-2) → right (order-3)
              Desktop: grid   — left (order-1) | center (order-2) | right (order-3)
            */}
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2.2fr_1fr] border-b border-black">

              {/* ── Left column: Profile ─────── */}
              <div className="order-2 lg:order-1 border-b lg:border-b-0 lg:border-r border-black">
                <ProfileColumn />
              </div>

              {/* ── Center column: Blog + SenseGuard ─── */}
              <div className="order-1 lg:order-2 border-b lg:border-b-0 lg:border-r border-black">
                <FeaturedArticle />

                {/* SenseGuard card at bottom of center column */}
                <motion.div
                  variants={personaVariants.item}
                  className="border-t-2 border-black px-0 lg:px-6 pb-6"
                >
                  <p className="font-['IBM_Plex_Mono'] text-[9px] font-bold uppercase tracking-[0.25em] text-black/50 mb-3 pt-4">
                    Section B.2: Featured Startup
                  </p>
                  <SenseGuardCard />
                </motion.div>
              </div>

              {/* ── Right column: Ledger ─────── */}
              <div className="order-3 lg:order-3">
                <LedgerColumn />
              </div>
            </div>
          </motion.div>

          {/* ── Footer ───────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={personaVariants.container}
            className="mt-8"
          >
            <Footer />
          </motion.div>

        </div>
      </div>
    </>
  );
}

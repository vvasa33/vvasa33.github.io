import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import SEO from './SEO';
import Header from './Header';
import Masthead from './Masthead';
import InlineNav from './InlineNav';
import NewsTicker from './NewsTicker';
import Footer from './Footer';
import ProfileColumn from './ProfileColumn';
import FeaturedArticle from './FeaturedArticle';
import SenseGuardPromo from './SenseGuardPromo';
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

          <motion.div
            initial="hidden"
            animate="visible"
            variants={personaVariants.container}
          >
            <Header />
            <Masthead />
            <InlineNav />
            <NewsTicker />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={personaVariants.container}
            className="border-t-0 border-black mt-0"
          >
            <div className="flex flex-col gap-6 lg:gap-0 lg:grid lg:grid-cols-[1fr_2.2fr_1fr] border-b border-black">

              <div className="order-2 lg:order-1 border-b lg:border-b-0 lg:border-r border-black">
                <ProfileColumn />
              </div>

              <div className="order-1 lg:order-2 border-b lg:border-b-0 lg:border-r border-black">
                <FeaturedArticle />
              </div>

              <div className="order-3 lg:order-3">
                <LedgerColumn />
              </div>
            </div>
          </motion.div>

          <SenseGuardPromo variant="teaser" />

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

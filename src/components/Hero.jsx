import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import SEO from './SEO';
import Header from './Header';
import Masthead from './Masthead';
import HeroTitle from './HeroTitle';
import NewsTicker from './NewsTicker';
import SectionHeader from './SectionHeader';
import FeaturedProject from './FeaturedProject';
import ProjectsSection from './ProjectsSection';
import BlogSection from './BlogSection';
import ClassifiedsSection from './ClassifiedsSection';
import NewspaperBlurb from './NewspaperBlurb';
import Footer from './Footer';
import HeroCanvas from './HeroCanvas';
import { LineDivider, LineDividerBottom, DoubleBorderDivider } from './SectionDivider';
import { getIcon } from '../utils/iconMap';
import portfolioData from '../data/portfolio.json';

export default function Hero() {
  const { meta, hero } = portfolioData;
  const { professionalOverview, technicalApproach, letsConnect } = hero.blurbs;
  
  const ProfessionalOverviewIcon = getIcon(professionalOverview.icon);
  const TechnicalApproachIcon = getIcon(technicalApproach.icon);
  const LetsConnectIcon = getIcon(letsConnect.icon);
  
  return (
    <>
      <SEO 
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
      />
      <HeroCanvas>
        <div className="bg-paper min-h-screen w-full pb-[max(2rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(2rem,env(safe-area-inset-top))] text-black font-['IBM_Plex_Mono'] md:pb-[max(5rem,env(safe-area-inset-bottom))] md:pl-[max(3rem,env(safe-area-inset-left))] md:pr-[max(3rem,env(safe-area-inset-right))] md:pt-[max(5rem,env(safe-area-inset-top))] lg:pl-[max(6rem,env(safe-area-inset-left))] lg:pr-[max(6rem,env(safe-area-inset-right))]">
        <div className="max-w-[1440px] mx-auto relative">
          {/* Above the Fold Content - Animates on Load */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={personaVariants.container}
            className="mb-24 md:mb-32"
          >
          {/* Top Header Section */}
          <Header />

          {/* Top Divider Line */}
          <LineDivider />

          {/* Masthead Section */}
          <Masthead />

          {/* Bottom Divider Line */}
          <LineDividerBottom />

          {/* Hero Title */}
          <HeroTitle 
            name="Viswanath Vasa" 
            subtitle="Security Engineer && Developer" 
          />

          {/* Breaking News Ticker */}
          <NewsTicker />

          {/* Intro Blurb - Professional Overview */}
          <NewspaperBlurb 
            title={professionalOverview.title} 
            icon={ProfessionalOverviewIcon}
            date={professionalOverview.date}
            author={professionalOverview.author}
            tag={professionalOverview.tag}
            sidebar={professionalOverview.sidebar}
            className="my-8 md:my-16"
          >
            {professionalOverview.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </NewspaperBlurb>
        </motion.div>

        {/* Blog/Editorial Section - MOVED UP FOR PROMINENCE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 100px 0px" }}
          variants={personaVariants.container}
          className="mb-16 md:mb-24"
        >
          <BlogSection />
        </motion.div>

        {/* Featured Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 100px 0px" }}
          variants={personaVariants.container}
          className="mb-16 md:mb-24"
        >
          <LineDivider />
          <div className="pt-12">
            <div className="border-2 border-black bg-white shadow-[6px_6px_0_0_#e31837] overflow-hidden">
              <div className="bg-cmyk-magenta border-b-2 border-black px-6 py-4 md:px-8 md:py-5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 shrink-0 bg-vectorheart-red border-2 border-white" />
                  <p className="font-['IBM_Plex_Mono'] font-bold text-lg md:text-2xl text-white uppercase leading-none tracking-tight">
                    Featured Startup
                  </p>
                </div>
              </div>
              <div className="bg-[#fff8f8] px-4 py-8 md:px-8 md:py-10">
                <FeaturedProject {...portfolioData.featured} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Latest Assignments / Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 100px 0px" }}
          variants={personaVariants.container}
          className="mb-16 md:mb-24"
        >
           <ProjectsSection />
        </motion.div>

        {/* Education & Skills Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 100px 0px" }}
          variants={personaVariants.container}
          className="mb-16 md:mb-24"
        >
          <DoubleBorderDivider />
          <div className="pt-12">
            <ClassifiedsSection />
          </div>
        </motion.div>

        {/* Closing Blurb - Contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 100px 0px" }}
          variants={personaVariants.container}
          className="mb-12"
        >
           <NewspaperBlurb 
             title={letsConnect.title} 
             icon={LetsConnectIcon}
             date={letsConnect.date}
             author={letsConnect.author}
             tag={letsConnect.tag}
             sidebar={letsConnect.sidebar}
             className="border-none shadow-none bg-transparent p-0"
           >
             {letsConnect.paragraphs.map((paragraph, index) => (
               <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
             ))}
           </NewspaperBlurb>
        </motion.div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
      </HeroCanvas>
    </>
  );
}

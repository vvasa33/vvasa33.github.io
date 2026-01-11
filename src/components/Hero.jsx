import { motion } from 'framer-motion';
import { containerVariants } from '../constants/animations';
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
      <div className="bg-paper w-full min-h-screen px-4 md:px-12 lg:px-24 py-8 md:py-20 text-black font-['IBM_Plex_Mono']">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Above the Fold Content - Animates on Load */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
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
          variants={containerVariants}
          className="mb-16 md:mb-24"
        >
          <BlogSection />
        </motion.div>

        {/* Featured Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 100px 0px" }}
          variants={containerVariants}
          className="mb-16 md:mb-24"
        >
          <LineDivider />
          <div className="pt-12">
            <SectionHeader title="FEATURED STARTUP" color="bg-cmyk-magenta" />
            <div className="mt-8 md:mt-12">
              <FeaturedProject {...portfolioData.featured} />
            </div>
          </div>
        </motion.div>

        {/* Latest Assignments / Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 100px 0px" }}
          variants={containerVariants}
          className="mb-16 md:mb-24"
        >
           <ProjectsSection />
        </motion.div>

        {/* Education & Skills Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px 100px 0px" }}
          variants={containerVariants}
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
          variants={containerVariants}
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
    </>
  );
}

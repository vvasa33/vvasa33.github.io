import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import SectionHeader from './SectionHeader';
import CredentialCard from './CredentialCard';
import SkillMatrix from './SkillMatrix';
import portfolioData from '../data/portfolio.json';

export default function ClassifiedsSection({ 
  certificates = portfolioData.education
}) {
  return (
    <motion.div variants={personaVariants.container}>
      <SectionHeader title="EDUCATION & SKILLS" color="bg-cmyk-yellow" />

      <div className="flex flex-col gap-12 md:gap-16">
        {/* Academic Record (ID Cards) - Full Width Row */}
        <div className="w-full">
          <motion.h3 variants={personaVariants.item} className="font-['IBM_Plex_Mono'] font-bold text-xl uppercase border-b-2 border-black pb-2 mb-8 inline-block w-full">
            Academic Record
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={personaVariants.container}
          >
            {certificates.map((cert, index) => (
              <CredentialCard
                key={index}
                id={cert.id}
                institution={cert.institution}
                title={cert.title}
                subtitle={cert.subtitle}
                badgeYear={cert.badgeYear}
                type={cert.type}
                description={cert.description}
                courses={cert.courses}
                timeline={cert.timeline}
                institutionLogo={cert.institutionLogo}
              />
            ))}
          </motion.div>
        </div>

        {/* Skill Matrix - Full Width */}
        <div className="w-full">
          <motion.h3 variants={personaVariants.item} className="font-['IBM_Plex_Mono'] font-bold text-xl uppercase border-b-2 border-black pb-2 mb-6">
            Technical Skills
          </motion.h3>

          <SkillMatrix />
        </div>
      </div>
    </motion.div>
  );
}

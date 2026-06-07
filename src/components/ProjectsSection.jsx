import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import portfolioData from '../data/portfolio.json';
import { FileText, MapPin, Calendar, Github, ExternalLink } from 'lucide-react';
import { resolveImagePath } from '../utils/imagePath';

export default function ProjectsSection() {
  // Repurpose this section to showcase experience instead of projects
  const projects = portfolioData.experience || [];
  
  // Don't render anything if there are no projects/experience items
  if (projects.length === 0) {
    return null;
  }
  
  const [activeProject, setActiveProject] = useState(projects[0]);
  const bulletSpecs = (activeProject.achievements && activeProject.achievements.length
    ? activeProject.achievements
    : (Array.isArray(activeProject.description) ? activeProject.description : [activeProject.description || '']))
    .flatMap(desc => desc.split('. '))
    .map((entry) => entry.trim().replace(/\.$/, ''))
    .filter(Boolean);
  const activeLogo = resolveImagePath(activeProject.companyLogo);

  const highlightNumbers = (text) =>
    text.replace(
      /(\b\d[\d.,+%]*\b)/g,
      '<span class="bg-highlighter-yellow text-black px-1 font-black">$1</span>'
    );

  return (
    <motion.div 
      variants={personaVariants.container}
    >
      <SectionHeader title="EXPERIENCE" color="bg-cmyk-cyan" />
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12"
        variants={personaVariants.container}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveProject(project)}
            onClick={() => setActiveProject(project)}
            className="h-full cursor-pointer md:cursor-default"
          >
            <ProjectCard 
              title={project.title}
              company={project.company}
              companyLogo={project.companyLogo}
              description={Array.isArray(project.description) ? project.description[0] : project.description}
              techStack={project.techStack}
              status={project.status || 'Current'}
              isSelected={activeProject.title === project.title}
            />
          </div>
        ))}
      </motion.div>

      {/* Field Report Detail Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.title}
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
          exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="border-2 md:border-4 border-black p-1 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group hover:-translate-y-1 hover:translate-x-1 transition-transform"
        >
          <div className="relative overflow-hidden border border-black bg-paper p-4 sm:p-6 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-cmyk-magenta transition-transform duration-300 ease-snappy" />
                  <span className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest text-gray-500">
                    Experience: {activeProject.title}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-gray-600">
                  {activeProject.location && (
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {activeProject.location}
                    </span>
                  )}
                  {activeProject.timeline && (
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {activeProject.timeline}
                    </span>
                  )}
                </div>
                {activeLogo && (
                  <div className="mb-6 w-20 h-20 border-2 border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 ease-snappy">
                    <img
                      src={activeLogo}
                      alt={`${activeProject.company || activeProject.title} logo`}
                      className="w-full h-full object-contain img-print-look"
                    />
                  </div>
                )}
                
                <h3 className="font-['Manrope'] text-3xl md:text-4xl uppercase mb-6 transition-transform duration-300 ease-snappy">
                  Highlights
                </h3>
                
                <ul className="font-['IBM_Plex_Mono'] text-base md:text-lg leading-relaxed text-black mb-8 space-y-4">
                  {bulletSpecs.map((spec, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[10px] w-2.5 h-2.5 rounded-full bg-cmyk-magenta flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <span
                        className="block"
                        dangerouslySetInnerHTML={{ __html: highlightNumbers(spec) }}
                      />
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {activeProject.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest border border-black hover:bg-cmyk-cyan hover:text-black transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 min-w-[200px]">
                <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase text-gray-400 mb-2">Status</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm font-black uppercase text-cmyk-cyan">{activeProject.status || 'Active'}</p>
                </div>
                
                {activeProject.githubUrl && (
                  <a 
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-2 border-black p-4 bg-white hover:bg-black hover:text-white transition-colors group/link shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase">Source Code</span>
                    <Github size={18} />
                  </a>
                )}

                {activeProject.liveUrl && (
                  <a 
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-2 border-black p-4 bg-white hover:bg-black hover:text-white transition-colors group/link shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase">Live Demo</span>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}


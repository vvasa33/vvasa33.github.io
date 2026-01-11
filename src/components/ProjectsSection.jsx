import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants } from '../constants/animations';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import portfolioData from '../data/portfolio.json';
import { FileText, Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = portfolioData.projects;
  const [activeProject, setActiveProject] = useState(projects[0]);
  const bulletSpecs = (activeProject.longDescription || activeProject.description || '')
    .split('. ')
    .map((entry) => entry.trim().replace(/\.$/, ''))
    .filter(Boolean);

  const highlightNumbers = (text) =>
    text.replace(
      /(\b\d[\d.,+%]*\b)/g,
      '<span class="bg-highlighter-yellow text-black px-1 font-black">$1</span>'
    );

  return (
    <motion.div 
      variants={containerVariants}
    >
      <SectionHeader title="OTHER PROJECTS" color="bg-cmyk-cyan" />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            onMouseEnter={() => setActiveProject(project)}
            className="h-full"
          >
            <ProjectCard {...project} isSelected={activeProject.title === project.title} />
          </div>
        ))}
      </motion.div>

      {/* Field Report Detail Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="border-2 md:border-4 border-black p-1 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="border border-black p-6 md:p-10 bg-paper relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-cmyk-magenta" />
                  <span className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest text-gray-500">
                    Field Report: {activeProject.title}
                  </span>
                </div>
                
                <h3 className="font-['Manrope'] text-3xl md:text-4xl uppercase mb-6">
                  Technical Specifications
                </h3>
                
                <ul className="font-['IBM_Plex_Mono'] text-base md:text-lg leading-relaxed text-black mb-8 space-y-4">
                  {bulletSpecs.map((spec, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[10px] w-2.5 h-2.5 rounded-full bg-cmyk-magenta flex-shrink-0" />
                      <span
                        className="block"
                        dangerouslySetInnerHTML={{ __html: highlightNumbers(spec) }}
                      />
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {activeProject.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest border border-black">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 min-w-[200px]">
                <div className="border-2 border-black p-4 bg-white">
                  <p className="font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase text-gray-400 mb-2">Status</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm font-black uppercase text-cmyk-cyan">{activeProject.status}</p>
                </div>
                
                {activeProject.githubUrl && (
                  <a 
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-2 border-black p-4 bg-white hover:bg-black hover:text-white transition-colors group"
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
                    className="flex items-center justify-between border-2 border-black p-4 bg-white hover:bg-black hover:text-white transition-colors group"
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


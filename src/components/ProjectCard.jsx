import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { resolveImagePath } from '../utils/imagePath';

export default function ProjectCard({ 
  title, 
  company,
  companyLogo,
  description, 
  techStack = [], 
  githubUrl, 
  liveUrl,
  status = "Completed",
  isSelected = false
}) {
  const logoSrc = resolveImagePath(companyLogo);

  const getStatusColor = (status) => {
    const s = status.toLowerCase();
    if (s.includes('completed')) return 'text-highlighter-green';
    if (s.includes('beta')) return 'text-cmyk-magenta';
    if (s.includes('active')) return 'text-cmyk-cyan';
    if (s.includes('in progress')) return 'text-highlighter-yellow';
    return 'text-gray-400';
  };

  const cardVariants = {
    hidden: personaVariants.item.hidden,
    visible: personaVariants.item.visible,
    hover: personaVariants.hover,
    tap: personaVariants.tap
  };

  return (
    <motion.div 
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      className="group flex flex-col h-full border-2 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-shadow duration-200 relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4 items-start">
          {logoSrc && (
            <div className="w-12 h-12 flex-shrink-0 border-2 border-black bg-white p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 ease-snappy">
              <img 
                src={logoSrc} 
                alt={`${company} logo`} 
                className="w-full h-full object-contain img-print-look"
              />
            </div>
          )}
          <div>
            <h3 className="font-['Manrope'] text-2xl leading-none mb-1 group-hover:text-cmyk-magenta transition-colors duration-300">
              {title}
            </h3>
            {company && (
              <p className="font-['IBM_Plex_Mono'] text-[10px] font-bold text-cmyk-magenta uppercase tracking-widest group-hover:text-black transition-colors duration-300">
                {company}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 transition-colors text-black hover:text-cmyk-cyan hover:scale-110 active:scale-95"
            >
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 transition-colors text-black hover:text-cmyk-magenta hover:scale-110 active:scale-95"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="font-['IBM_Plex_Mono'] text-sm text-gray-600 mb-6 flex-grow leading-relaxed group-hover:text-black transition-colors duration-300">
        {description}
      </p>

      {/* Footer: Tech Stack & Status */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span 
              key={i} 
              className="font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 text-gray-600 group-hover:bg-black group-hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t-2 border-black">
            <span className={`font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest font-bold ${getStatusColor(status)} transition-transform duration-300`}>
                Status: {status}
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity group-hover:animate-wiggle text-cmyk-cyan" />
        </div>
      </div>
    </motion.div>
  );
}

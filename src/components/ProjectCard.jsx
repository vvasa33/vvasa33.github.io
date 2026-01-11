import { motion } from 'framer-motion';
import { fastItemVariants } from '../constants/animations';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

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
  const getStatusColor = (status) => {
    const s = status.toLowerCase();
    if (s.includes('completed')) return 'text-highlighter-green';
    if (s.includes('beta')) return 'text-cmyk-magenta';
    if (s.includes('active')) return 'text-cmyk-cyan';
    if (s.includes('in progress')) return 'text-highlighter-yellow';
    return 'text-gray-400';
  };

  return (
    <motion.div 
      variants={fastItemVariants} 
      className="group flex flex-col h-full border-2 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4 items-start">
          {companyLogo && (
            <div className="w-12 h-12 flex-shrink-0 border-2 border-black bg-white p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src={companyLogo} 
                alt={`${company} logo`} 
                className="w-full h-full object-contain img-print-look"
              />
            </div>
          )}
          <div>
            <h3 className="font-['Manrope'] text-2xl leading-none mb-1">
              {title}
            </h3>
            {company && (
              <p className="font-['IBM_Plex_Mono'] text-[10px] font-bold text-cmyk-magenta uppercase tracking-widest">
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
              className="p-1 transition-colors text-black hover:text-black"
            >
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 transition-colors text-black hover:text-black"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="font-['IBM_Plex_Mono'] text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Footer: Tech Stack & Status */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span 
              key={i} 
              className="font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t-2 border-black">
            <span className={`font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest font-bold ${getStatusColor(status)}`}>
                Status: {status}
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  );
}

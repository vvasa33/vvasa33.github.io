import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import { resolveImagePath } from '../utils/imagePath';

export default function CredentialCard({
  institution,
  title,
  subtitle,
  badgeYear,
  id,
  type = "academic", // 'academic' or 'certification'
  description,
  courses = [],
  timeline,
  institutionLogo
}) {
  const statusColor = type === 'academic' ? 'bg-cmyk-cyan' : type === 'certification' ? 'bg-cmyk-magenta' : 'bg-black';
  const accentColor = type === 'academic' ? 'bg-cmyk-cyan' : type === 'certification' ? 'bg-cmyk-magenta' : 'bg-highlighter-yellow';
  const accentText = type === 'academic' ? 'text-cmyk-cyan' : type === 'certification' ? 'text-cmyk-magenta' : 'text-highlighter-yellow';
  const logoSrc = resolveImagePath(institutionLogo);

  return (
    <motion.div 
      variants={personaVariants.item}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group relative h-full bg-white border-2 border-black p-6 md:p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
    >
      {/* Accent ribbon */}
      <div className={`absolute -top-3 left-4 px-3 py-1 text-xs font-['IBM_Plex_Mono'] font-bold uppercase tracking-widest border-2 border-black ${accentColor} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 transition-transform duration-300 ease-snappy`}>
        {badgeYear}
      </div>

      {/* Header: ID and Institution */}
      <div className="flex justify-between items-start mb-6 pt-4">
        <div className="flex flex-col gap-1">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-black transition-colors">
            Issued By
          </span>
          <span className="font-['Manrope'] text-lg md:text-xl font-black uppercase text-black leading-none group-hover:text-cmyk-magenta transition-colors duration-300">
            {institution}
          </span>
        </div>
        <div className="flex items-center">
          {logoSrc && (
            <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-snappy">
              <img
                src={logoSrc}
                alt={`${institution} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Body: Title and Details */}
      <div className="flex-grow mb-6">
        <h4 className="font-['Manrope'] text-2xl md:text-3xl leading-tight mb-2 transition-transform duration-300 ease-snappy">
          {title}
        </h4>
        
        <div className="space-y-2 mb-4">
          <p className="font-['Manrope'] text-lg font-semibold text-black">
            {Array.isArray(subtitle) ? subtitle[0] : subtitle}
          </p>
          {Array.isArray(subtitle) && subtitle[1] && (
            <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-gray-500">
              {subtitle[1]}
            </p>
          )}
          {timeline && (
            <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-white transition-colors duration-300">
              <span className="h-2 w-2 rounded-full bg-black group-hover:bg-white transition-colors"></span>
              <span className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-white transition-colors">
                {timeline}
              </span>
              <span className="h-2 w-2 rounded-full bg-black group-hover:bg-white transition-colors"></span>
            </div>
          )}
        </div>

        <p className="font-['IBM_Plex_Mono'] text-sm text-gray-700 leading-relaxed mb-4">
          {description}
        </p>

        {courses && courses.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {courses.map((course, i) => (
              <span key={i} className={`font-['IBM_Plex_Mono'] text-[11px] font-bold uppercase tracking-wide ${accentText} border border-black px-2 py-1 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300`}>
                {course}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Metadata and Status */}
      <div className="flex items-center justify-between pt-4 border-t-2 border-black">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-sm ${statusColor} border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] animate-pulse`}></div>
          <span className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase text-gray-800 group-hover:font-black transition-all">
            {badgeYear.includes('Valid') ? 'Active' : 'Conferred'} {badgeYear.replace(/[^0-9]/g, '')}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-[10px] w-[10px] bg-black rounded-full group-hover:scale-125 transition-transform"></div>
          <div className={`h-[10px] w-[10px] ${accentColor} border border-black group-hover:scale-125 transition-transform delay-75`}></div>
          <div className="h-[10px] w-[10px] bg-white border border-black group-hover:scale-125 transition-transform delay-150"></div>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { itemVariants } from '../constants/animations';
import { Camera, ExternalLink, TrendingDown, Battery, Wifi } from 'lucide-react';

const iconMap = {
  TrendingDown,
  Battery,
  Wifi
};

export default function FeaturedProject({ 
  title, 
  company, 
  companyLogo,
  description, 
  techStack,
  website,
  role,
  roleLabel,
  stats = []
}) {
  const tags = Array.isArray(techStack) ? techStack : techStack.split('//').map(t => t.trim());
  const secondParagraph = Array.isArray(description) && description[1] ? description[1] : '';
  const bulletSpecs = secondParagraph
    ? secondParagraph
        .split('. ')
        .map((entry) => entry.trim().replace(/\.$/, ''))
        .filter(Boolean)
    : [];

  const highlightNumbers = (text) =>
    text.replace(
      /(\b\d[\d.,+%]*\b)/g,
      '<span class="bg-highlighter-yellow text-black px-1 font-black">$1</span>'
    );

  return (
    <motion.div 
      variants={itemVariants} 
      className="border-y-2 border-black py-12 md:py-16 my-8 md:my-16"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 md:mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
              {roleLabel || "Featured"}
            </span>
            <span className="text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-gray-500">
              2025
            </span>
          </div>
          <h3 className="font-['Manrope'] text-4xl md:text-6xl uppercase tracking-tight mb-2">
            {title}
          </h3>
          <p className="font-['IBM_Plex_Mono'] text-lg text-cmyk-magenta font-bold uppercase">
            {role}
          </p>
        </div>
        
        {website && (
          <a 
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 border-2 border-black px-6 py-3 uppercase text-xs tracking-widest font-['IBM_Plex_Mono'] font-bold hover:bg-black hover:text-white transition-colors"
          >
            <span>Visit Project</span>
            <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 md:gap-20">
        <div className="space-y-8">
          {/* Description */}
          <div className="space-y-4 font-['Manrope'] text-lg text-gray-800 leading-relaxed">
            {Array.isArray(description) ? (
              <>
                <p className="text-xl font-medium text-black">
                  {description[0]}
                </p>
                {bulletSpecs.length > 0 ? (
                  <ul className="font-['IBM_Plex_Mono'] text-base md:text-lg leading-relaxed text-black space-y-3">
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
                ) : (
                  description[1] && (
                    <p>
                      {description[1]}
                    </p>
                  )
                )}
                {description.slice(2).map((p, index) => (
                  <p key={`extra-${index}`}>
                    {p}
                  </p>
                ))}
              </>
            ) : (
              <p className="text-xl font-medium text-black">
                {description}
              </p>
            )}
          </div>
          
          {/* Tech Stack - Horizontal List */}
          <div>
            <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-gray-500 mb-4">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tech, i) => (
                <span 
                  key={i} 
                  className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider font-medium border border-gray-200 px-3 py-1 bg-gray-50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:border-l-2 lg:border-gray-100 lg:pl-12">
          {/* Key Metrics */}
          {stats.length > 0 && (
            <div>
               <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-gray-500 mb-6">
                 Impact Metrics
               </h4>
               <div className="space-y-6">
                 {stats.map((stat, i) => {
                   const Icon = iconMap[stat.icon];
                   return (
                     <div key={i} className="flex items-baseline justify-between border-b border-gray-200 pb-2">
                       <span className="font-['IBM_Plex_Mono'] text-sm text-gray-600 uppercase tracking-wider">
                         {stat.label}
                       </span>
                       <span className={`font-['Manrope'] text-2xl font-bold ${stat.color || 'text-black'}`}>
                         {stat.value}
                       </span>
                     </div>
                   );
                 })}
               </div>
            </div>
          )}

          {/* Company Info */}
          <div className="pt-8">
             <div>
               <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-gray-400 mb-1">Client</p>
               <p className="font-['Manrope'] text-xl font-bold uppercase tracking-wide">{company}</p>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

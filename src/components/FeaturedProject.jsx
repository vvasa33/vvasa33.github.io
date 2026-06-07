import { motion } from 'framer-motion';
import { personaVariants } from '../constants/animations';
import { Camera, ExternalLink, TrendingDown, Battery, Wifi } from 'lucide-react';
import { resolveImagePath } from '../utils/imagePath';

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
  stats = [],
  featuredImage
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

  const logoSrc = resolveImagePath(companyLogo);
  const heroImage = resolveImagePath(featuredImage);

  return (
    <motion.div 
      variants={personaVariants.item} 
      className="border-y-2 border-black py-12 md:py-16 my-0 group"
    >
      <div className="mb-8 flex flex-col items-stretch justify-between gap-8 md:mb-12 md:flex-row md:items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest group-hover:bg-cmyk-magenta transition-colors duration-300">
              {roleLabel || "Featured"}
            </span>
            <span className="text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-gray-500">
              2025
            </span>
          </div>
          <h3 className="mb-2 break-words font-['Manrope'] text-2xl uppercase tracking-tight transition-transform duration-300 ease-snappy sm:text-3xl md:text-5xl lg:text-6xl">
            {title}
          </h3>
          <p className="font-['IBM_Plex_Mono'] text-lg text-cmyk-magenta font-bold uppercase">
            {role}
          </p>
          {logoSrc && website && (
            <a 
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-20 h-20 border-2 border-black p-2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 transition-all duration-200 block"
            >
              <img 
                src={logoSrc} 
                alt={`${company} logo`} 
                className="w-full h-full object-contain img-print-look"
              />
            </a>
          )}
        </div>
        
        {website && (
          <motion.a 
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn inline-flex min-h-[44px] w-full items-center justify-center gap-2 border-2 border-black px-6 py-3 font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white md:w-auto md:justify-start"
          >
            <span>Visit Project</span>
            <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </motion.a>
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
                  className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider font-medium border border-gray-200 px-3 py-1 bg-gray-50 hover:bg-black hover:text-white transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:border-l-2 lg:border-gray-100 lg:pl-12">
          {/* Featured image (optional) */}
          {heroImage && (
            <div className="border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <img 
                src={heroImage} 
                alt={`${title} visual`} 
                className="w-full h-auto object-cover img-print-look hover:scale-105 transition-transform duration-500 ease-snappy"
              />
            </div>
          )}

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
                     <div key={i} className="flex items-baseline justify-between border-b border-gray-200 pb-2 hover:border-black transition-colors">
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

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import { MousePointer2, FileText } from 'lucide-react';
import { personaVariants } from '../constants/animations';

export default function SkillMatrix() {
  const skillsData = portfolioData.skills;
  // Default to the first skill of the first category
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0].items[0]);
  
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 w-full">
      {/* LEFT COLUMN: The Newspaper Index */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {/* Instructions / Header */}
        <div className="border-2 border-black border-dashed p-4 bg-[#f0f0f0] flex items-start gap-4">
             <div className="bg-black text-white p-1 rounded-sm animate-bounce">
                <MousePointer2 className="w-5 h-5" />
             </div>
             <div>
                <h4 className="font-['IBM_Plex_Mono'] font-bold uppercase text-sm mb-1">Interactive Index</h4>
                <p className="font-['IBM_Plex_Mono'] text-xs text-gray-600 leading-relaxed">
                    Select a competency below to reveal technical specifications and field reports.
                </p>
             </div>
        </div>

        {skillsData.map((category, catIndex) => (
          <div key={catIndex} className="relative">
            {/* Category Header */}
            <h4 className={`font-['IBM_Plex_Mono'] font-bold text-lg ${category.color} px-3 py-1 mb-3 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider`}>
              {category.category}
            </h4>
            
            {/* Skill List */}
            <div className="columns-1 md:columns-2 gap-x-12 gap-y-4">
              {category.items.map((skill, skillIndex) => {
                const isSelected = selectedSkill.name === skill.name;
                
                return (
                  <motion.button
                    key={skillIndex}
                    onClick={() => {
                      setSelectedSkill(skill);
                      // On mobile, scroll to top of component when clicking
                      if (window.innerWidth < 1024) {
                        document.getElementById('skill-detail-view')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className={`w-full text-left group flex items-baseline mb-4 break-inside-avoid focus:outline-none`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <span className={`w-3 h-3 border border-black mr-3 flex-shrink-0 transition-all duration-200 ease-snappy ${isSelected ? `${category.color} scale-125` : 'bg-white group-hover:bg-black'}`}></span>
                    <span className={`font-['IBM_Plex_Mono'] text-base md:text-lg border-b-2 transition-all duration-200 ease-snappy ${isSelected ? 'font-bold border-black bg-yellow-100 px-1' : 'border-transparent group-hover:border-black/20 text-gray-700 group-hover:text-black'}`}>
                      {skill.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN: The Detail Box (Sticky) */}
      <div className="w-full lg:w-1/2" id="skill-detail-view">
        <div className="lg:sticky lg:top-24">
          <div className="border-2 md:border-4 border-black p-1 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1">
            <div className="border border-black p-4 md:p-10 min-h-[300px] md:min-h-[450px] flex flex-col relative overflow-hidden bg-paper">
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <span className="font-['Manrope'] text-[10rem] leading-none">{"{ }"}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSkill.name}
                  initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 }}
                  animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
                  exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6 border-b-2 border-black pb-4">
                    <div>
                        <span className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">
                            Competency Profile
                        </span>
                        <h3 className="font-['Manrope'] text-3xl md:text-4xl leading-none font-bold text-black">
                            {selectedSkill.name}
                        </h3>
                    </div>
                    <FileText className="w-8 h-8 opacity-20" />
                  </div>

                  {/* Body Text */}
                  <div className="mb-8">
                      <span className="font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest text-cmyk-cyan mb-2 block bg-black text-white px-1 w-fit">
                          // Definition
                      </span>
                      <p className="font-['IBM_Plex_Mono'] text-base md:text-lg leading-relaxed text-black font-medium">
                        {selectedSkill.description}
                      </p>
                  </div>

                  {/* Context / Usage */}
                  {selectedSkill.context && (
                      <div className="mt-auto bg-white border-2 border-black p-4 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                         <span className="absolute -top-3 left-3 bg-cmyk-magenta text-white px-2 py-0.5 font-['IBM_Plex_Mono'] text-[10px] font-bold uppercase tracking-widest border border-black">
                            Field Report
                         </span>
                         <p className="font-['IBM_Plex_Mono'] text-sm text-gray-800 italic leading-relaxed pt-2">
                            "{selectedSkill.context}"
                         </p>
                      </div>
                  )}

                  {/* Footer Meta */}
                  <div className="mt-6 pt-4 border-t border-dashed border-black flex justify-between items-center opacity-50">
                    <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase">
                        Ref: {selectedSkill.name.substring(0, 3).toUpperCase()}-{selectedSkill.name.length * 42}
                    </span>
                    <div className="h-2 w-12 bg-black/10"></div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

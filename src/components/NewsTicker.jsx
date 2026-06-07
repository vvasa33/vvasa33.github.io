import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { personaVariants } from '../constants/animations';
import portfolioData from '../data/portfolio.json';

export default function NewsTicker({ headlines = portfolioData.hero.ticker }) {
  return (
    <motion.div 
      variants={personaVariants.item} 
      className="w-full border-y-2 border-black mb-16 md:mb-24 overflow-hidden bg-black text-white"
    >
      <div className="flex items-center border-b border-white/20">
        <div className="bg-cmyk-magenta text-white px-4 py-2 font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-widest border-r-2 border-black relative z-10">
          Live Updates
        </div>
        <div className="flex-1 py-2 overflow-hidden bg-black">
          <div className="animate-ticker whitespace-nowrap flex w-fit">
            {/* First Set */}
            <div className="flex shrink-0">
              {headlines.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-6 border-r border-white/10 group hover:bg-white/10 transition-colors duration-200">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-bold tracking-wider text-cmyk-cyan group-hover:text-cmyk-magenta transition-colors">
                    {item.symbol}
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-sm">
                    {item.text}
                  </span>
                  <div className={`flex items-center gap-1 font-['IBM_Plex_Mono'] text-xs font-bold ${item.trend === 'up' ? 'text-highlighter-green' : 'text-highlighter-pink'}`}>
                    {item.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex shrink-0">
              {headlines.map((item, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-3 px-6 border-r border-white/10 group hover:bg-white/10 transition-colors duration-200">
                  <span className="font-['IBM_Plex_Mono'] text-xs font-bold tracking-wider text-cmyk-cyan group-hover:text-cmyk-magenta transition-colors">
                    {item.symbol}
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-sm">
                    {item.text}
                  </span>
                  <div className={`flex items-center gap-1 font-['IBM_Plex_Mono'] text-xs font-bold ${item.trend === 'up' ? 'text-highlighter-green' : 'text-highlighter-pink'}`}>
                    {item.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
